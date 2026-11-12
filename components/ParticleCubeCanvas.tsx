"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";

interface ParticleCubeCanvasProps {
  onDisperseStart?: () => void;
  onDisperseEnd?: () => void;
}

interface SubCubeItem {
  id: number;
  group: THREE.Group;
  mesh: THREE.Points;
  geometry: THREE.BufferGeometry;
  originalLocal: Float32Array;
  scatterDelta: Float32Array;
  anchorMesh: THREE.Points;
  anchorGeometry: THREE.BufferGeometry;
  anchorOriginal: Float32Array;
  anchorDelta: Float32Array;
}

export default function ParticleCubeCanvas({
  onDisperseStart,
  onDisperseEnd,
}: ParticleCubeCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDispersingRef = useRef(false);
  const triggerImpactRef = useRef<(point: THREE.Vector3) => void>(() => {});
  const burstTimelineRef = useRef<gsap.core.Timeline | null>(null);

  // 부모 컴포넌트 리렌더링 시 Three.js 인스턴스가 파괴되지 않도록 콜백 ref화
  const onDisperseStartRef = useRef(onDisperseStart);
  const onDisperseEndRef = useRef(onDisperseEnd);

  useEffect(() => {
    onDisperseStartRef.current = onDisperseStart;
    onDisperseEndRef.current = onDisperseEnd;
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let twistTimeoutId: ReturnType<typeof setTimeout> | null = null;
    let isTwisting = false;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();

    const getWidth = () => container.clientWidth || window.innerWidth || 1200;
    const getHeight = () => container.clientHeight || window.innerHeight || 800;

    const camera = new THREE.PerspectiveCamera(40, getWidth() / getHeight(), 0.1, 100);
    camera.position.set(0, 0, 9.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(getWidth(), getHeight());
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // 2. 전체 3x3 큐브를 담는 메인 그룹 (자전 없이 고정 등각 뷰)
    const mainCubeGroup = new THREE.Group();
    mainCubeGroup.rotation.set(0.38, -0.52, 0.0);
    scene.add(mainCubeGroup);

    // 3-1. 부드럽고 자연스러운 원형 발광 스프라이트 텍스처
    const createGlowTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        grad.addColorStop(0, "rgba(255, 255, 255, 0.95)");
        grad.addColorStop(0.35, "rgba(224, 242, 254, 0.80)");
        grad.addColorStop(0.68, "rgba(56, 189, 248, 0.35)");
        grad.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 64, 64);
      }
      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      return texture;
    };
    const glowTexture = createGlowTexture();

    // 3-2. 포인트 앵커 별(Anchor Stars) 전용 우아한 십자 플레어 텍스처
    const createAnchorStarTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 128;
      canvas.height = 128;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
        grad.addColorStop(0, "rgba(255, 255, 255, 0.90)");
        grad.addColorStop(0.30, "rgba(186, 230, 253, 0.75)");
        grad.addColorStop(0.65, "rgba(56, 189, 248, 0.25)");
        grad.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 128, 128);

        ctx.strokeStyle = "rgba(255, 255, 255, 0.85)";
        ctx.lineWidth = 2.0;
        ctx.beginPath();
        ctx.moveTo(64, 16); ctx.lineTo(64, 112);
        ctx.moveTo(16, 64); ctx.lineTo(112, 64);
        ctx.stroke();

        ctx.strokeStyle = "rgba(125, 211, 252, 0.50)";
        ctx.lineWidth = 1.0;
        ctx.beginPath();
        ctx.moveTo(32, 32); ctx.lineTo(96, 96);
        ctx.moveTo(32, 96); ctx.lineTo(96, 32);
        ctx.stroke();
      }
      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      return texture;
    };
    const anchorTexture = createAnchorStarTexture();

    // 3-3. 일반 파티클 머티리얼 (눈부심 완화: opacity 0.45, size 0.072)
    const sharedMaterial = new THREE.PointsMaterial({
      size: 0.072,
      map: glowTexture,
      transparent: true,
      opacity: 0.45,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      color: new THREE.Color(0xffffff),
    });

    // 3-4. 앵커 별 머티리얼 (소프트한 십자 플레어: size 0.22)
    const anchorMaterial = new THREE.PointsMaterial({
      size: 0.22,
      map: anchorTexture,
      transparent: true,
      opacity: 0.60,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      color: new THREE.Color(0xffffff),
    });

    // 4. 모듈 규격 & 파티클 분포
    const SPACING = 0.94;
    const BLOCK_SIZE = 0.82;
    const HALF_B = BLOCK_SIZE / 2;
    const PARTICLES_PER_BLOCK = 800; // 27 * 800 = 총 21,600개

    // 4-0. 정밀 3D 레이캐스팅 전용 투명 프록시 박스 (Raycaster 감지를 위해 transparent + opacity: 0 적용)
    const proxySize = SPACING * 2 + BLOCK_SIZE + 0.15;
    const proxyGeo = new THREE.BoxGeometry(proxySize, proxySize, proxySize);
    const proxyMat = new THREE.MeshBasicMaterial({
      transparent: true,
      opacity: 0,
      depthWrite: false,
    });
    const proxyMesh = new THREE.Mesh(proxyGeo, proxyMat);
    mainCubeGroup.add(proxyMesh);

    const subCubes: SubCubeItem[] = [];
    let idCounter = 0;

    for (let gx = -1; gx <= 1; gx++) {
      for (let gy = -1; gy <= 1; gy++) {
        for (let gz = -1; gz <= 1; gz++) {
          const bId = idCounter++;
          const posX = gx * SPACING;
          const posY = gy * SPACING;
          const posZ = gz * SPACING;

          const subGroup = new THREE.Group();
          subGroup.position.set(posX, posY, posZ);
          mainCubeGroup.add(subGroup);

          const currentPositions = new Float32Array(PARTICLES_PER_BLOCK * 3);
          const originalLocal = new Float32Array(PARTICLES_PER_BLOCK * 3);
          const scatterDelta = new Float32Array(PARTICLES_PER_BLOCK * 3);
          const colors = new Float32Array(PARTICLES_PER_BLOCK * 3);

          const edgeCount = Math.floor(PARTICLES_PER_BLOCK * 0.80);
          const faceCount = Math.floor(PARTICLES_PER_BLOCK * 0.15);

          for (let i = 0; i < PARTICLES_PER_BLOCK; i++) {
            let lx = 0;
            let ly = 0;
            let lz = 0;

            if (i < edgeCount) {
              // 1) 80% 모서리 집중: 칼같은 선명한 라인을 유지하는 미세 지터(0.010)
              const edgeIndex = i % 12;
              const t = (Math.random() * 2 - 1) * HALF_B;
              const sign1 = (i % 2 === 0 ? 1 : -1) * HALF_B;
              const sign2 = (Math.floor(i / 2) % 2 === 0 ? 1 : -1) * HALF_B;

              const j1 = (Math.random() - 0.5) * 0.010;
              const j2 = (Math.random() - 0.5) * 0.010;

              if (edgeIndex < 4) {
                lx = t; ly = sign1 + j1; lz = sign2 + j2;
              } else if (edgeIndex < 8) {
                lx = sign1 + j1; ly = t; lz = sign2 + j2;
              } else {
                lx = sign1 + j1; ly = sign2 + j2; lz = t;
              }
            } else if (i < edgeCount + faceCount) {
              // 2) 15% 면 내부: 모서리 윤곽을 가리지 않는 극도로 얇고 투명한 표면 입자
              const face = i % 6;
              const u = (Math.random() * 2 - 1) * HALF_B * 0.92;
              const v = (Math.random() * 2 - 1) * HALF_B * 0.92;
              const depthJitter = (Math.random() - 0.5) * 0.006;

              if (face === 0) { lx = HALF_B + depthJitter; ly = u; lz = v; }
              else if (face === 1) { lx = -HALF_B + depthJitter; ly = u; lz = v; }
              else if (face === 2) { ly = HALF_B + depthJitter; lx = u; lz = v; }
              else if (face === 3) { ly = -HALF_B + depthJitter; lx = u; lz = v; }
              else if (face === 4) { lz = HALF_B + depthJitter; lx = u; ly = v; }
              else { lz = -HALF_B + depthJitter; lx = u; ly = v; }
            } else {
              // 3) 5% 내부 코어: 블록 중심부의 섀도우 볼륨 유지
              lx = (Math.random() * 2 - 1) * HALF_B * 0.70;
              ly = (Math.random() * 2 - 1) * HALF_B * 0.70;
              lz = (Math.random() * 2 - 1) * HALF_B * 0.70;
            }

            const idx = i * 3;
            originalLocal[idx] = lx;
            originalLocal[idx + 1] = ly;
            originalLocal[idx + 2] = lz;

            currentPositions[idx] = lx;
            currentPositions[idx + 1] = ly;
            currentPositions[idx + 2] = lz;

            // 전체 큐브 중심 기준 거리 및 라이팅 계산
            const totalX = posX + lx;
            const totalY = posY + ly;
            const totalZ = posZ + lz;
            const distFromCenter = Math.sqrt(totalX * totalX + totalY * totalY + totalZ * totalZ) || 1;

            // 심해 명암 & 고래 레퍼런스 컬러 매핑
            const depthFade = 0.58 + 0.42 * Math.min(distFromCenter / 2.1, 1.0);
            const lightWeight = (totalX * 0.35 + totalY * 0.55 + totalZ * 0.75) / distFromCenter;

            let isHighlight = false;
            if (i < edgeCount) {
              const highlightChance = 0.36 + lightWeight * 0.28;
              if (Math.random() < highlightChance) {
                isHighlight = true;
              }
            } else if (i < edgeCount + faceCount) {
              if (lightWeight > 0.45 && Math.random() < 0.20) {
                isHighlight = true;
              }
            }

            if (isHighlight) {
              // 하이라이트 (30%): 스카이블루(#7dd3fc) + 맑은 화이트(#f8fafc)
              const isWhite = Math.random() < 0.30;
              if (isWhite) {
                colors[idx] = 0.97 * depthFade;
                colors[idx + 1] = 0.98 * depthFade;
                colors[idx + 2] = 0.99 * depthFade;
              } else {
                colors[idx] = 0.49 * depthFade;
                colors[idx + 1] = 0.83 * depthFade;
                colors[idx + 2] = 0.99 * depthFade;
              }
            } else {
              // 기본 베이스 (70%): 깊이 있는 딥 네이비 / 다크 틸
              const baseType = Math.random();
              if (baseType < 0.55) {
                colors[idx] = (15 / 255) * depthFade;
                colors[idx + 1] = (43 / 255) * depthFade;
                colors[idx + 2] = (70 / 255) * depthFade;
              } else if (baseType < 0.85) {
                colors[idx] = (22 / 255) * depthFade;
                colors[idx + 1] = (78 / 255) * depthFade;
                colors[idx + 2] = (99 / 255) * depthFade;
              } else {
                colors[idx] = (8 / 255) * depthFade;
                colors[idx + 1] = (47 / 255) * depthFade;
                colors[idx + 2] = (73 / 255) * depthFade;
              }
            }
          }

          const geometry = new THREE.BufferGeometry();
          geometry.setAttribute("position", new THREE.BufferAttribute(currentPositions, 3));
          geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

          const mesh = new THREE.Points(geometry, sharedMaterial);
          subGroup.add(mesh);

          // 4-1. 각 서브 큐브의 8개 꼭짓점 앵커 별 (Anchor Stars)
          const ANCHOR_COUNT = 8;
          const anchorCurrent = new Float32Array(ANCHOR_COUNT * 3);
          const anchorOriginal = new Float32Array(ANCHOR_COUNT * 3);
          const anchorDelta = new Float32Array(ANCHOR_COUNT * 3);
          const anchorColors = new Float32Array(ANCHOR_COUNT * 3);

          let aIdx = 0;
          for (const sx of [-1, 1]) {
            for (const sy of [-1, 1]) {
              for (const sz of [-1, 1]) {
                const ax = sx * HALF_B;
                const ay = sy * HALF_B;
                const az = sz * HALF_B;

                anchorOriginal[aIdx] = ax;
                anchorOriginal[aIdx + 1] = ay;
                anchorOriginal[aIdx + 2] = az;

                anchorCurrent[aIdx] = ax;
                anchorCurrent[aIdx + 1] = ay;
                anchorCurrent[aIdx + 2] = az;

                const aTotalX = posX + ax;
                const aTotalY = posY + ay;
                const aTotalZ = posZ + az;
                const aLen = Math.sqrt(aTotalX * aTotalX + aTotalY * aTotalY + aTotalZ * aTotalZ) || 1;

                const aLight = (aTotalX * 0.35 + aTotalY * 0.55 + aTotalZ * 0.75) / aLen;
                if (aLight > 0.2) {
                  anchorColors[aIdx] = 0.85;
                  anchorColors[aIdx + 1] = 0.95;
                  anchorColors[aIdx + 2] = 1.0;
                } else {
                  anchorColors[aIdx] = 0.35;
                  anchorColors[aIdx + 1] = 0.65;
                  anchorColors[aIdx + 2] = 0.85;
                }

                aIdx += 3;
              }
            }
          }

          const anchorGeometry = new THREE.BufferGeometry();
          anchorGeometry.setAttribute("position", new THREE.BufferAttribute(anchorCurrent, 3));
          anchorGeometry.setAttribute("color", new THREE.BufferAttribute(anchorColors, 3));
          const anchorMesh = new THREE.Points(anchorGeometry, anchorMaterial);
          subGroup.add(anchorMesh);

          subCubes.push({
            id: bId,
            group: subGroup,
            mesh,
            geometry,
            originalLocal,
            scatterDelta,
            anchorMesh,
            anchorGeometry,
            anchorOriginal,
            anchorDelta,
          });
        }
      }
    }

    // 4-2. 심우주 앰비언트 배경 별빛 (180개)
    const ambientCount = 180;
    const ambientPos = new Float32Array(ambientCount * 3);
    const ambientColors = new Float32Array(ambientCount * 3);

    for (let i = 0; i < ambientCount; i++) {
      const idx = i * 3;
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2.4 + Math.random() * 4.4;
      const sinPhi = Math.sin(phi);

      ambientPos[idx] = r * sinPhi * Math.cos(theta);
      ambientPos[idx + 1] = r * sinPhi * Math.sin(theta);
      ambientPos[idx + 2] = r * Math.cos(phi);

      const rColor = Math.random();
      if (rColor < 0.55) {
        ambientColors[idx] = 0.95;
        ambientColors[idx + 1] = 0.28;
        ambientColors[idx + 2] = 0.48;
      } else if (rColor < 0.85) {
        ambientColors[idx] = 0.90;
        ambientColors[idx + 1] = 0.95;
        ambientColors[idx + 2] = 1.0;
      } else {
        ambientColors[idx] = 0.15;
        ambientColors[idx + 1] = 0.55;
        ambientColors[idx + 2] = 0.75;
      }
    }

    const ambientGeo = new THREE.BufferGeometry();
    ambientGeo.setAttribute("position", new THREE.BufferAttribute(ambientPos, 3));
    ambientGeo.setAttribute("color", new THREE.BufferAttribute(ambientColors, 3));

    const ambientMat = new THREE.PointsMaterial({
      size: 0.046,
      map: glowTexture,
      transparent: true,
      opacity: 0.75,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const ambientPoints = new THREE.Points(ambientGeo, ambientMat);
    scene.add(ambientPoints);

    // 5. 완벽한 수학적 루빅스 회전: subGroup 단위 쿼터니언 회전
    const ROTATION_STEPS = [
      { name: "bottom", axis: new THREE.Vector3(0, 1, 0), layerCheck: (p: THREE.Vector3) => p.y < -0.3, angle: Math.PI / 2 },
      { name: "right",  axis: new THREE.Vector3(1, 0, 0), layerCheck: (p: THREE.Vector3) => p.x > 0.3,  angle: Math.PI / 2 },
      { name: "left",   axis: new THREE.Vector3(1, 0, 0), layerCheck: (p: THREE.Vector3) => p.x < -0.3, angle: -Math.PI / 2 },
      { name: "top",    axis: new THREE.Vector3(0, 1, 0), layerCheck: (p: THREE.Vector3) => p.y > 0.3,  angle: Math.PI / 2 },
    ];

    let currentStepIndex = 0;

    const performSequentialTwist = () => {
      if (isDispersingRef.current || isTwisting) {
        twistTimeoutId = setTimeout(performSequentialTwist, 1500);
        return;
      }

      isTwisting = true;

      const step = ROTATION_STEPS[currentStepIndex];
      const { axis, layerCheck, angle } = step;

      const targetCubes = subCubes.filter((c) => layerCheck(c.group.position));

      const startStates = targetCubes.map((c) => ({
        cube: c,
        startPos: c.group.position.clone(),
        startQuat: c.group.quaternion.clone(),
      }));

      const rotAnim = { progress: 0 };

      gsap.to(rotAnim, {
        progress: 1,
        duration: 0.85,
        ease: "power2.inOut",
        onUpdate: () => {
          const currentAngle = angle * rotAnim.progress;
          const deltaQuat = new THREE.Quaternion().setFromAxisAngle(axis, currentAngle);

          startStates.forEach((s) => {
            const { cube, startPos, startQuat } = s;
            cube.group.position.copy(startPos).applyAxisAngle(axis, currentAngle);
            cube.group.quaternion.copy(deltaQuat).multiply(startQuat);
          });
        },
        onComplete: () => {
          startStates.forEach((s) => {
            const { cube } = s;
            cube.group.position.x = Math.round(cube.group.position.x / SPACING) * SPACING;
            cube.group.position.y = Math.round(cube.group.position.y / SPACING) * SPACING;
            cube.group.position.z = Math.round(cube.group.position.z / SPACING) * SPACING;
            cube.group.quaternion.normalize();
          });

          isTwisting = false;
          currentStepIndex = (currentStepIndex + 1) % ROTATION_STEPS.length;
          twistTimeoutId = setTimeout(performSequentialTwist, 1800);
        },
      });
    };

    twistTimeoutId = setTimeout(performSequentialTwist, 1200);

    // 6. 개별 파티클 파열/부유/복귀 버퍼 실시간 보간 함수
    const updateBurstBuffers = (progress: number, elapsed: number) => {
      subCubes.forEach((cube) => {
        // 1) 일반 파티클 위치 보간
        const posAttr = cube.geometry.attributes.position as THREE.BufferAttribute;
        const posArr = posAttr.array as Float32Array;
        const orig = cube.originalLocal;
        const delta = cube.scatterDelta;

        for (let i = 0; i < PARTICLES_PER_BLOCK; i++) {
          const idx = i * 3;

          // 공중에 머무는 동안(progress > 0) 입자가 얼어붙지 않고 별빛처럼 사르륵 숨쉬는 미세 부유 드리프트
          // 충격을 크게 받아 멀리 튕겨나간 입자일수록 드리프트가 활발하고, 제자리를 지킨 입자는 잔잔함을 유지
          const dx = delta[idx];
          const dy = delta[idx + 1];
          const dz = delta[idx + 2];
          const dLen = Math.sqrt(dx * dx + dy * dy + dz * dz);
          const activity = Math.min(1.0, dLen / 0.5);

          const drift = progress * 0.020 * (0.12 + 0.88 * activity);
          const driftX = Math.sin(elapsed * 2.2 + i * 0.37) * drift;
          const driftY = Math.cos(elapsed * 1.9 + i * 0.53) * drift;
          const driftZ = Math.sin(elapsed * 2.5 + i * 0.29) * drift;

          posArr[idx] = orig[idx] + delta[idx] * progress + driftX;
          posArr[idx + 1] = orig[idx + 1] + delta[idx + 1] * progress + driftY;
          posArr[idx + 2] = orig[idx + 2] + delta[idx + 2] * progress + driftZ;
        }
        posAttr.needsUpdate = true;

        // 2) 앵커 별 위치 보간
        const aPosAttr = cube.anchorGeometry.attributes.position as THREE.BufferAttribute;
        const aPosArr = aPosAttr.array as Float32Array;
        const aOrig = cube.anchorOriginal;
        const aDelta = cube.anchorDelta;

        for (let i = 0; i < 8; i++) {
          const idx = i * 3;
          const adx = aDelta[idx];
          const ady = aDelta[idx + 1];
          const adz = aDelta[idx + 2];
          const adLen = Math.sqrt(adx * adx + ady * ady + adz * adz);
          const aActivity = Math.min(1.0, adLen / 0.5);

          const drift = progress * 0.016 * (0.12 + 0.88 * aActivity);
          const driftX = Math.sin(elapsed * 2.0 + i) * drift;
          const driftY = Math.cos(elapsed * 1.8 + i) * drift;
          const driftZ = Math.sin(elapsed * 2.2 + i) * drift;

          aPosArr[idx] = aOrig[idx] + aDelta[idx] * progress + driftX;
          aPosArr[idx + 1] = aOrig[idx + 1] + aDelta[idx + 1] * progress + driftY;
          aPosArr[idx + 2] = aOrig[idx + 2] + aDelta[idx + 2] * progress + driftZ;
        }
        aPosAttr.needsUpdate = true;
      });
    };

    const resetDisperseBuffers = () => {
      subCubes.forEach((cube) => {
        const posAttr = cube.geometry.attributes.position as THREE.BufferAttribute;
        const posArr = posAttr.array as Float32Array;
        posArr.set(cube.originalLocal);
        posAttr.needsUpdate = true;

        const aPosAttr = cube.anchorGeometry.attributes.position as THREE.BufferAttribute;
        const aPosArr = aPosAttr.array as Float32Array;
        aPosArr.set(cube.anchorOriginal);
        aPosAttr.needsUpdate = true;
      });
    };

    // 7. 순간 파열(Instant Burst) & 공중 체류(Hang Time) 인터랙션 트리거
    const burstAnim = { progress: 0 };

    const triggerImpact = (impactPoint: THREE.Vector3) => {
      if (isDispersingRef.current) return;
      isDispersingRef.current = true;

      try {
        onDisperseStartRef.current?.();
      } catch (err) {
        console.error(err);
      }

      // 충격 도달 최대 반경 (큐브 전체 대각선 크기 커버: 4.2)
      const maxRadius = 4.2;
      // 클릭 중심부 최대 분산 거리 (충격 진원지는 시원하고 묵직하게 1.15 유닛 튕겨나감)
      const maxScatterDistance = 1.15;

      subCubes.forEach((cube) => {
        const localImpact = impactPoint
          .clone()
          .sub(cube.group.position)
          .applyQuaternion(cube.group.quaternion.clone().invert());

        // 1) 일반 파티클 계산: 진원지 강도 차별화 (위치별 폭발력 편차)
        for (let i = 0; i < PARTICLES_PER_BLOCK; i++) {
          const idx = i * 3;
          const lx = cube.originalLocal[idx];
          const ly = cube.originalLocal[idx + 1];
          const lz = cube.originalLocal[idx + 2];

          const dx = lx - localImpact.x;
          const dy = ly - localImpact.y;
          const dz = lz - localImpact.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz) || 0.001;

          // 클릭 중심부는 100% 위력, 멀어질수록 급격히 감소 (3제곱 곡선)
          const normalized = Math.max(0, 1 - dist / maxRadius);
          const impactPower = Math.pow(normalized, 3); // 거리가 멀어질수록 지수함수적으로 0에 수렴

          // 튕겨나가는 방향: 클릭 지점(진원지)에서 사방으로 뻗어나가는 방사형 벡터
          const blastX = dx / dist;
          const blastY = dy / dist;
          const blastZ = dz / dist;

          // 결속을 깨뜨리기 위한 3D 랜덤 지터 (0.5 가중치)
          const rx = (Math.random() - 0.5) * 2;
          const ry = (Math.random() - 0.5) * 2;
          const rz = (Math.random() - 0.5) * 2;
          const rLen = Math.sqrt(rx * rx + ry * ry + rz * rz) || 1;

          const totalX = blastX + (rx / rLen) * 0.5;
          const totalY = blastY + (ry / rLen) * 0.5;
          const totalZ = blastZ + (rz / rLen) * 0.5;
          const totalLen = Math.sqrt(totalX * totalX + totalY * totalY + totalZ * totalZ) || 1;

          // 최종 분산 거리: 클릭 지점은 시원하게 1.15 유닛 튀어나가고, 먼 곳/반대편은 1~2px 수준의 미세 공명만 발생
          const scatterDist = impactPower * maxScatterDistance * (0.88 + Math.random() * 0.24);

          cube.scatterDelta[idx] = (totalX / totalLen) * scatterDist;
          cube.scatterDelta[idx + 1] = (totalY / totalLen) * scatterDist;
          cube.scatterDelta[idx + 2] = (totalZ / totalLen) * scatterDist;
        }

        // 2) 앵커 별 계산
        for (let i = 0; i < 8; i++) {
          const idx = i * 3;
          const ax = cube.anchorOriginal[idx];
          const ay = cube.anchorOriginal[idx + 1];
          const az = cube.anchorOriginal[idx + 2];

          const dx = ax - localImpact.x;
          const dy = ay - localImpact.y;
          const dz = az - localImpact.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz) || 0.001;

          const normalized = Math.max(0, 1 - dist / maxRadius);
          const impactPower = Math.pow(normalized, 3);

          const blastX = dx / dist;
          const blastY = dy / dist;
          const blastZ = dz / dist;

          const rx = (Math.random() - 0.5) * 2;
          const ry = (Math.random() - 0.5) * 2;
          const rz = (Math.random() - 0.5) * 2;
          const rLen = Math.sqrt(rx * rx + ry * ry + rz * rz) || 1;

          const totalX = blastX + (rx / rLen) * 0.5;
          const totalY = blastY + (ry / rLen) * 0.5;
          const totalZ = blastZ + (rz / rLen) * 0.5;
          const totalLen = Math.sqrt(totalX * totalX + totalY * totalY + totalZ * totalZ) || 1;

          const scatterDist = impactPower * maxScatterDistance * (0.92 + Math.random() * 0.16);

          cube.anchorDelta[idx] = (totalX / totalLen) * scatterDist;
          cube.anchorDelta[idx + 1] = (totalY / totalLen) * scatterDist;
          cube.anchorDelta[idx + 2] = (totalZ / totalLen) * scatterDist;
        }
      });

      // 3단계 GSAP 타임라인: 0.30s 순간 파열 -> 0.80s 공중 체류 유영 -> 1.05s 탄성 복귀
      if (burstTimelineRef.current) burstTimelineRef.current.kill();

      const tl = gsap.timeline({
        onComplete: () => {
          resetDisperseBuffers();
          isDispersingRef.current = false;
          try {
            onDisperseEndRef.current?.();
          } catch (err) {
            console.error(err);
          }
        },
      });
      burstTimelineRef.current = tl;

      // 1단계: 0.30초 만에 날카롭게 팍 터짐 (시차 없이 동시 순간 파열)
      tl.to(burstAnim, {
        progress: 1,
        duration: 0.30,
        ease: "power4.out",
      })
      // 2단계: 흩어진 별빛 상태로 우주 공간에 약 0.80초간 붕 떠서 미세 유영 (감상 구간)
      .to({}, {
        duration: 0.80,
      })
      // 3단계: 1.05초에 걸쳐 자석처럼 원래 큐브 형태로 부드럽게 빨려 들어옴
      .to(burstAnim, {
        progress: 0,
        duration: 1.05,
        ease: "power3.inOut",
      });
    };

    triggerImpactRef.current = triggerImpact;

    // 8. 3D Raycasting 마우스/터치 클릭 이벤트
    const raycaster = new THREE.Raycaster();

    const handlePointerDown = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest("a, button, input, textarea")) return;

      const rect = container.getBoundingClientRect();
      const mouseNDC = new THREE.Vector2(
        ((e.clientX - rect.left) / rect.width) * 2 - 1,
        -((e.clientY - rect.top) / rect.height) * 2 + 1
      );

      raycaster.setFromCamera(mouseNDC, camera);
      const intersects = raycaster.intersectObject(proxyMesh);

      let impactPointInGroup: THREE.Vector3;
      if (intersects.length > 0) {
        impactPointInGroup = mainCubeGroup.worldToLocal(intersects[0].point.clone());
      } else {
        const ray = raycaster.ray;
        const cubeWorldPos = new THREE.Vector3();
        mainCubeGroup.getWorldPosition(cubeWorldPos);
        const cameraDir = new THREE.Vector3();
        camera.getWorldDirection(cameraDir).negate();
        const targetPlane = new THREE.Plane().setFromNormalAndCoplanarPoint(cameraDir, cubeWorldPos);
        const intersectPlane = new THREE.Vector3();
        ray.intersectPlane(targetPlane, intersectPlane);
        impactPointInGroup = mainCubeGroup.worldToLocal(intersectPlane);
        impactPointInGroup.clampLength(0, SPACING * 1.5);
      }

      triggerImpact(impactPointInGroup);
    };

    window.addEventListener("pointerdown", handlePointerDown);

    // 9. 반응형 레이아웃 및 밸런스 조정된 파티클 크기
    const updateLayout = () => {
      const w = getWidth();
      const h = getHeight();

      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);

      if (w >= 1024) {
        mainCubeGroup.position.x = 2.1;
        mainCubeGroup.position.y = 0;
        mainCubeGroup.scale.set(1.0, 1.0, 1.0);
        sharedMaterial.size = 0.072;
        anchorMaterial.size = 0.22;
        sharedMaterial.opacity = 0.45;
        anchorMaterial.opacity = 0.60;
      } else if (w >= 768) {
        mainCubeGroup.position.x = 1.3;
        mainCubeGroup.position.y = 0;
        mainCubeGroup.scale.set(0.85, 0.85, 0.85);
        sharedMaterial.size = 0.060;
        anchorMaterial.size = 0.17;
        sharedMaterial.opacity = 0.35;
        anchorMaterial.opacity = 0.48;
      } else {
        mainCubeGroup.position.x = 0;
        mainCubeGroup.position.y = -0.50; // 모바일에서는 헤드라인을 침범하지 않고 버튼/하단 영역으로 자연스럽게 하향 배치
        mainCubeGroup.scale.set(0.58, 0.58, 0.58);
        sharedMaterial.size = 0.046;
        anchorMaterial.size = 0.12;
        sharedMaterial.opacity = 0.22; // 모바일 텍스트 뒤에서 은은하게 깔리도록 투명도 최적화
        anchorMaterial.opacity = 0.32;
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);

    // 10. 메인 렌더 루프 (실시간 시계 기반 미세 부유 드리프트)
    let clock = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      clock += 0.016;

      // 파열/체류/복귀 진행 중일 때 버퍼 갱신
      if (isDispersingRef.current || burstAnim.progress > 0.0001) {
        updateBurstBuffers(burstAnim.progress, clock);
      }

      ambientPoints.rotation.y += 0.0005;
      ambientPoints.rotation.x += 0.00025;

      try {
        renderer.render(scene, camera);
      } catch (e) {
        console.error("Render loop error:", e);
      }
    };

    animate();

    // 11. 메모리 누수 방지 클린업
    return () => {
      window.removeEventListener("resize", updateLayout);
      window.removeEventListener("pointerdown", handlePointerDown);

      cancelAnimationFrame(animationFrameId);
      if (twistTimeoutId) clearTimeout(twistTimeoutId);
      if (burstTimelineRef.current) burstTimelineRef.current.kill();

      subCubes.forEach((c) => {
        c.geometry.dispose();
        c.anchorGeometry.dispose();
      });
      proxyGeo.dispose();
      proxyMat.dispose();
      ambientGeo.dispose();
      ambientMat.dispose();
      sharedMaterial.dispose();
      anchorMaterial.dispose();
      glowTexture.dispose();
      anchorTexture.dispose();
      renderer.dispose();
      renderer.forceContextLoss();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full cursor-pointer pointer-events-auto"
      aria-label="3x3 테크 홀로그램 파티클 큐브 인터랙션"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          triggerImpactRef.current(new THREE.Vector3(0, 0, 1.2));
        }
      }}
    />
  );
}
