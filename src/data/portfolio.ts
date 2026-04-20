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
        id: 7,
        title: "아쿠아",
        description: "전환율을 극대화하는 직관적인 디자인과 프리미엄 웹사이트입니다.",
        category: "바이브코딩",
        type: "기업용 랜딩페이지",
        url: "https://homepage-seven-gold.vercel.app/",
        image: "/portfolio/vibe/aqua/aqua pc main.png",
        images: [
            "/portfolio/vibe/aqua/aqua pc main.png",
            "/portfolio/vibe/aqua/aqua pc contact.png",
            "/portfolio/vibe/aqua/aqua2.png",
            "/portfolio/vibe/aqua/aqua mob.png"
        ],
        stats: [
            { label: "방문자 증가율", value: "450", suffix: "%" },
            { label: "상담 문의율", value: "315", suffix: "%" },
            { label: "브랜드 인지도 만족도", value: "99.8", suffix: "%" }
        ]
    },
    {
        id: 8,
        title: "비즈니스 기업",
        description: "신뢰와 전문성을 상징하는 모던한 레이아웃으로 기획된 기업 전용 프리미엄 웹사이트입니다.",
        category: "바이브코딩",
        type: "기업용 사이트",
        url: "https://vibe-agency-hazel.vercel.app/",
        image: "/portfolio/vibe/기업/main.png",
        images: [
            "/portfolio/vibe/기업/main.png",
            "/portfolio/vibe/기업/service.png",
            "/portfolio/vibe/기업/section.png",
            "/portfolio/vibe/기업/mobile.png"
        ],
        stats: [
            { label: "기업 신뢰도", value: "98.5", suffix: "%" },
            { label: "페이지 전이율", value: "240", suffix: "%↑" },
            { label: "파트너십 문의", value: "150", suffix: "%↑" }
        ],
        features: [
            { id: "01", title: "비즈니스 아이덴티티 특화", description: "기업의 브랜드 컬러와 미션을 가장 돋보이게 하는 정교한 그리드 시스템을 적용했습니다." },
            { id: "02", title: "정보 전달 중심의 UI 구성", description: "방대한 서비스 내용을 사용자가 한눈에 파악할 수 있도록 마이크로 애니메이션과 인포그래픽을 활용했습니다." }
        ]
    },
    {
        id: 9,
        title: "웰니스 요가 스튜디오",
        description: "마음의 평온과 신체의 안정을 추구하는 프리미엄 요가&필라테스 브랜드 웹사이트입니다. 고해상도 이미지와 감성적인 톤앤매너로 브랜드의 신뢰도를 높였습니다.",
        category: "바이브코딩",
        type: "브랜드 사이트",
        url: "https://wellness-ruby-eta.vercel.app/",
        image: "/portfolio/vibe/요가/main.png",
        images: [
            "/portfolio/vibe/요가/main.png",
            "/portfolio/vibe/요가/project.png",
            "/portfolio/vibe/요가/review.png",
            "/portfolio/vibe/요가/mobile.png"
        ],
        stats: [
            { label: "신규 회원 등록", value: "380", suffix: "%↑" },
            { label: "수업 예약 전환율", value: "215", suffix: "%↑" },
            { label: "사용자 체류 시간", value: "3.8", suffix: "분" }
        ],
        features: [
            { id: "01", title: "감성적인 비주얼 스토리텔링", description: "요가 스튜디오 특유의 평온한 분위기를 담아내기 위해 고품질 이미지와 여백의 미를 강조한 레이아웃을 사용했습니다." },
            { id: "02", title: "신뢰도를 높이는 리뷰 시스템", description: "풍부한 수강 만족도와 후기를 시각적으로 매력적으로 구성하여 신규 회원의 심리적 장벽을 낮췄습니다." }
        ]
    },
    {
        id: 10,
        title: "인테리어 디자인 스튜디오",
        description: "공간의 미학과 실용성을 동시에 추구하는 인테리어 전문 기업의 공식 웹사이트입니다. 고해상도 시공 사진과 직관적인 견적 문의 시스템으로 타겟 고객의 전환율을 높였습니다.",
        category: "바이브코딩",
        type: "기업용 사이트",
        url: "https://studio-gamma-nine.vercel.app/",
        image: "/portfolio/vibe/인테리어/main.png",
        images: [
            "/portfolio/vibe/인테리어/main.png",
            "/portfolio/vibe/인테리어/about.png",
            "/portfolio/vibe/인테리어/project.png",
            "/portfolio/vibe/인테리어/mobile.png"
        ],
        stats: [
            { label: "시공 상담 문의", value: "420", suffix: "%↑" },
            { label: "포트폴리오 조회수", value: "1,850", suffix: "회" },
            { label: "평균 페이지 체류", value: "4.2", suffix: "분" }
        ],
        features: [
            { id: "01", title: "압도적인 시공 갤러리", description: "공간의 디테일을 가장 잘 보여줄 수 있는 하이엔드 이미지 그리드 시스템을 적용하여 시각적 몰입감을 극대화했습니다." },
            { id: "02", title: "스마트 견적 요청 시스템", description: "방문자가 원하는 시공 범위와 예산을 간편하게 선택하고 바로 상담 신청을 할 수 있는 사용자 중심 폼을 구현했습니다." }
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
