export type PortfolioCategory = "바이브코딩" | "워드프레스 브릭스";

export interface PortfolioItem {
    id: number;
    title: string;
    description: string;
    category: PortfolioCategory;
    url: string;
    image?: string; // (기존 단일 이미지 호환용)
    images?: string[]; // 다중 이미지 쇼케이스용
    type?: string;
    // 개별 상세 페이지에 맞춤형으로 사용할 경우 아래 항목들을 선택적으로 기입합니다.
    stats?: { label: string; value: string; suffix: string }[];
    features?: { id: string; title: string; description: string }[];
    processSteps?: { step: string; title: string; desc: string }[];
    coverage?: { title: string; description: string };
}

export const PORTFOLIO_DATA: PortfolioItem[] = [
    {
        id: 1,
        title: "오리온 인테리어",
        description: "프리미엄 인테리어 업체를 위한 감각적인 애니메이션과 포트폴리오 쇼케이스에 초점을 맞춘 웹사이트입니다.",
        category: "바이브코딩",
        type: "기업용 랜딩페이지",
        url: "https://example.com/orion",
        // 4장의 예시 이미지 배열을 추가합니다. (나중에 public/portfolio 폴더에 아래 이름으로 넣어주세요)
        images: [
            "/portfolio/ex1.png",
            "/portfolio/ex2.png",
            "/portfolio/ex3.png",
            "/portfolio/ex4.png"
        ],
        // [예시] 개별 포트폴리오에 맞춘 자체 수치 및 기능 설명이 필요하다면 이렇게 직접 덮어씁니다.
        stats: [
            { label: "시공 상담 건수", value: "320", suffix: "%↑" },
            { label: "평균 체류 시간", value: "4.5", suffix: "분" },
            { label: "키워드 유입량", value: "1,500", suffix: "명" },
        ],
        features: [
            { id: "01", title: "압도적인 시각화 쇼케이스", description: "복잡한 설명보다 한 장의 사진과 고급스러운 애니메이션으로 시공 신뢰도를 높였습니다." },
            { id: "02", title: "간편한 원클릭 견적 폼", description: "고객이 평수와 원하는 예산을 직관적으로 선택하면 카카오톡으로 실시간 알림이 가도록 연동했습니다." }
        ]
    },
    {
        id: 2,
        title: "넥스트 리테일",
        description: "전환율을 극대화하기 위해 기획된 모던한 UI의 우커머스 연동 프리미엄 쇼핑몰입니다.",
        category: "워드프레스 브릭스",
        type: "쇼핑몰",
        url: "https://example.com/retail"
    },
    {
        id: 3,
        title: "스튜디오 픽셀",
        description: "디자이너의 작업물을 돋보이게 하는 인터랙티브 갤러리 및 프로젝트 상세 뷰를 제공합니다.",
        category: "바이브코딩",
        type: "디자인 포트폴리오",
        url: "https://example.com/pixel"
    },
    {
        id: 4,
        title: "로컬 에코",
        description: "친환경 브랜드의 철학과 제품 라인업을 부드러운 스크롤 스토리텔링으로 풀어낸 사이트입니다.",
        category: "바이브코딩",
        type: "브랜드 사이트",
        url: "https://example.com/eco"
    },
    {
        id: 5,
        title: "메디컬 플러스",
        description: "전문성과 신뢰감을 주는 레이아웃과 손쉬운 예약 폼을 갖춘 병원/클리닉 전용 웹사이트입니다.",
        category: "워드프레스 브릭스",
        type: "병원 홈페이지",
        url: "https://example.com/medical"
    },
    {
        id: 6,
        title: "핀테크 이노베이션",
        description: "스타트업의 투자 유치를 위한 하이테크 느낌의 3D 오브젝트 및 패럴랙스를 접목한 웹입니다.",
        category: "워드프레스 브릭스",
        type: "기업용 사이트",
        url: "https://example.com/fintech"
    },
    {
        id: 7,
        title: "아쿠아",
        description: "전환율을 극대화하는 직관적인 디자인과 프리미엄 웹사이트입니다.",
        category: "바이브코딩",
        type: "기업용 랜딩페이지",
        url: "https://homepage-seven-gold.vercel.app/",
        image: "/portfolio/vibe/aqua/aqua pc main.png",
        images: [
            "/portfolio/vibe/aqua/aqua pc contact.png",
            "/portfolio/vibe/aqua/aqua1.png",
            "/portfolio/vibe/aqua/aqua2.png",
            "/portfolio/vibe/aqua/aqua3.png",
            "/portfolio/vibe/aqua/aqua4.png",
            "/portfolio/vibe/aqua/aqua5.png",
            "/portfolio/vibe/aqua/aqua mob.png"
        ]
    }
];

export function getPortfolioDetails(id: number | string) {
    const numId = typeof id === 'string' ? parseInt(id, 10) : id;
    const project = PORTFOLIO_DATA.find(p => p.id === numId);
    
    if (!project) return null;

    // 상세 페이지를 구성하기 위한 데이터 로딩
    // 개별 포트폴리오에 직접 작성된 데이터가 있으면 그것을 최우선으로 보여주고, 없으면 웹스케이프 공통의 강력한 특징을 대신 보여주어 빈칸을 방지합니다.
    return {
        ...project,
        stats: project.stats || [
            { label: "방문자 증가율", value: "377", suffix: "%" },
            { label: "문의 전환율", value: "2,191", suffix: "%" },
            { label: "고객 만족도", value: "99.9", suffix: "%" },
        ],
        features: project.features || [
            { id: "01", title: "최적화된 모바일 사용자 경험 (UX)", description: "모바일 접속이 많은 타겟 고객의 특성을 고려하여, 어느 디바이스에서나 완벽한 반응형 뷰를 제공합니다." },
            { id: "02", title: "초고속 페이지 로딩 아키텍처", description: "방문자가 절대 이탈하지 않도록 차세대 이미지 포맷과 지연 로딩을 통한 1초 이내 로딩을 보장합니다." },
            { id: "03", title: "직관적인 예약/문의 시스템 연동", description: "전화 문의와 비즈니스 예약 접수를 즉각적으로 유도하는 맞춤형 액션 폼(CTA)을 적용했습니다." },
            { id: "04", title: "지역 기반 검색 엔진 최적화 (SEO)", description: "타겟 지역 내 잠재 고객이 검색할 때 최우선적으로 브랜드가 노출되도록 철저한 SEO 구조 설계를 반영했습니다." }
        ],
        processSteps: project.processSteps || [
            { step: "01", title: "심층 상담 및 기획", desc: "비즈니스 지표 분석 및 타겟 리서치" },
            { step: "02", title: "UI/UX 퍼블리싱", desc: "시선을 사로잡는 전환율 중심의 디자인" },
            { step: "03", title: "검수 및 라이브", desc: "검색 엔진 세팅 및 실제 도메인 연결" }
        ],
        coverage: project.coverage || {
            title: "전국 지역 및 맞춤 업종 커버리지",
            description: "웹스케이프의 최적화된 테크 웹사이트는 어느 지역이든, 어떤 사업이든 유연하게 적용되며 최고의 성과를 냅니다."
        }
    };
}
