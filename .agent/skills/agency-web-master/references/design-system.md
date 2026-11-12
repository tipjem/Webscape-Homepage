# 공통 프리미엄 디자인 시스템 가이드 (Design System)

Tailwind CSS v4와 모던 CSS를 기반으로, 템플릿 느낌을 완전히 지우고 '설계된 고급스러움'을 부여하는 비주얼 컴포넌트 패턴 가이드입니다.

---

## 1. 레이아웃 프리셋 (Anti-Template Layouts)

### A. 비대칭 벤토 그리드 (Asymmetrical Bento)
동일한 크기의 3열 카드를 탈피하여, 시각적 주목도에 따라 크기가 다른 박스를 배치합니다:
```tsx
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
  {/* 메인 하이라이트 (8칸) */}
  <div className="md:col-span-8 p-8 rounded-3xl bg-zinc-900 text-white border border-white/10">
    <h3 className="text-2xl font-bold tracking-tight">핵심 차별점 및 실시간 현황</h3>
    <p className="mt-2 text-zinc-400">가장 중요한 기능이나 포트폴리오를 대형으로 강조</p>
  </div>
  {/* 서브 정보 (4칸) */}
  <div className="md:col-span-4 p-8 rounded-3xl bg-zinc-950 text-white border border-white/10">
    <div className="text-4xl font-extrabold text-blue-500">98.4%</div>
    <p className="mt-2 text-zinc-400">고객 만족도 및 빠른 응답률</p>
  </div>
</div>
```

---

## 2. 컴포넌트 마스터리 (Component Mastery)

### A. 더블 베젤 카드 (Double-Bezel Architecture)
단순한 평면 카드가 아닌, 정밀 가공된 하드웨어 같은 깊이감을 만듭니다:
```tsx
{/* Outer Shell */}
<div className="bg-white/5 ring-1 ring-white/10 p-1.5 rounded-[2rem] shadow-xl backdrop-blur-xl">
  {/* Inner Core */}
  <div className="bg-zinc-900/90 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] rounded-[calc(2rem-0.375rem)] p-6 md:p-8">
    <h4 className="text-xl font-bold text-white tracking-tight">서비스 타이틀</h4>
    <p className="mt-2 text-zinc-400 text-sm leading-relaxed">구체적인 혜택과 설명이 들어가는 영역</p>
  </div>
</div>
```

### B. 프리미엄 전환 CTA 버튼
```tsx
<button className="
  group relative inline-flex items-center justify-center
  bg-blue-600 hover:bg-blue-500 text-white font-medium
  rounded-full px-8 py-4 text-base
  transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
  hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-500/25
">
  <span>무료 견적 상담 신청하기</span>
  <span className="inline-flex ml-2 w-7 h-7 rounded-full bg-white/20 items-center justify-center
    transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</button>
```

---

## 3. 컬러 & 재질 원칙

- **순수 블랙 지양**: `#000000` 대신 미세한 톤이 감도는 `Zinc-950 (#09090b)` 또는 `Slate-950`을 배경으로 사용합니다.
- **섬세한 테두리**: 굵은 원색 테두리 대신 `border-white/10` 또는 `border-zinc-200/80`의 초미세 헤어라인 테두리를 적용합니다.
- **자연스러운 섀도우**: 짙은 그림자 대신 `shadow-2xl shadow-black/5` 같은 앰비언트 소프트 섀도우를 사용합니다.
