import { supabase } from "@/lib/supabase";
import Accordion from "@/components/ui/Accordion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "고객 지원",
  description: "새로운 소식과 궁금하신 점을 빠르게 확인하세요. 웹스케이프 고객 지원 센터입니다.",
  alternates: {
    canonical: "/support",
  },
};

// Server Component for fetching Supabase data directly
export default async function SupportPage() {
    // Fetch Notices from Supabase
    let notices: any[] = [];

    // Try calling Supabase, safely fallback if not configured yet
    try {
        const { data, error } = await supabase
            .from("notices")
            .select("*")
            .order("created_at", { ascending: false });

        if (!error && data) {
            notices = data;
        }
    } catch (err) {
        console.error("Supabase fetch error:", err);
    }

    // Format notices for Accordion
    const noticeItems = notices.map(notice => ({
        id: notice.id,
        title: notice.title,
        content: notice.content,
        date: notice.created_at,
    }));

    const FAQS = [
        {
            id: "faq-1",
            title: "제작 기간은 얼마나 걸리나요?",
            content: "워드프레스 브릭스의 경우 보통 1~2주, 바이브코딩 풀 커스텀 개발의 경우 요구사항에 따라 3주에서 최대 2개월 정도 소요됩니다."
        },
        {
            id: "faq-2",
            title: "타사에서 제작한 워드프레스도 수정이 가능한가요?",
            content: "물론입니다. 저희는 브릭스 빌더 외에도 엘리멘터 등 다양한 테마와 빌더 환경에 능숙하며, 기존 사이트 유지보수 및 A/S도 진행하고 있습니다."
        },
        {
            id: "faq-3",
            title: "도메인과 호스팅 구매는 어떻게 해야 하나요?",
            content: "일반적으로 고객님 명의로 직접 구매하시는 것을 권장해 드리며, 필요시 저희가 구매 대행 및 최적화 세팅까지 모두 도와드립니다."
        },
        {
            id: "faq-4",
            title: "워드프레스 브릭스와 바이브 코딩 중 어떤 것을 선택해야 하나요?",
            content: "합리적인 예산과 빠른 런칭, 직접 관리가 중요하다면 '워드프레스 브릭스'를 추천합니다. 반면, 복잡한 맞춤형 기능 연동이나 압도적인 로딩 속도, 고도화된 애니메이션이 필요한 프로젝트라면 '바이브 코딩(Next.js)'이 적합합니다. 상담 시 비즈니스에 딱 맞는 솔루션을 제안해 드립니다."
        },
        {
            id: "faq-5",
            title: "홈페이지 제작 완료 후 유지보수나 A/S는 어떻게 되나요?",
            content: "사이트 오픈 후 1개월(협의 가능) 동안 발생하는 오류나 버그에 대해 무상 하자 보수를 지원해 드립니다. 이후에는 합리적인 비용의 월간 유지보수 플랜을 이용하시거나 건별 업데이트를 요청하실 수 있습니다."
        },
        {
            id: "faq-6",
            title: "제작 후 제가 직접 이미지나 텍스트를 수정할 수 있나요?",
            content: "네, 가능합니다. 고객님이 직접 쉽고 편리하게 사이트의 콘텐츠를 관리하실 수 있도록 직관적인 관리자 환경을 세팅해 드립니다. (단, 고도화된 애니메이션이나 복잡한 레이아웃 변경이 필요한 특수 영역은 디자인 유지를 위해 웹스케이프의 전문 유지보수 서비스를 이용하시는 것을 권장해 드립니다.)"
        },
        {
            id: "faq-7",
            title: "디자인 시안이 마음에 들지 않으면 수정할 수 있나요?",
            content: "본격적인 개발 전, 기획 단계에서 충분한 벤치마킹 자료 공유와 소통을 거칩니다. 기본적으로 약정된 횟수 내에서 피드백을 반영하여 디자인을 수정하며, 고객님이 만족하시는 결과물을 도출한 뒤 개발에 착수합니다."
        },
        {
            id: "faq-8",
            title: "홈페이지 제작이 완료되면 소유권은 어떻게 되나요?",
            content: "잔금 결제가 완료되는 즉시 웹사이트의 모든 소스코드와 소유권은 100% 고객님께 완전히 이전됩니다. 단, 사이트 오픈 후 직접 관리가 어려우신 경우, 별도의 유지보수 및 운영 대행 계약(월 정액 또는 건별)을 통해 웹스케이프가 안정적으로 사이트를 대신 관리해 드리는 맞춤형 서비스도 제공하고 있습니다."
        },
        {
            id: "faq-9",
            title: "네이버나 구글 검색 시 우리 사이트가 잘 나오게 할 수 있나요?",
            content: "네, 웹스케이프의 모든 프로젝트는 검색엔진 친화적(SEO) 구조로 꼼꼼하게 제작됩니다. 사이트 런칭과 동시에 네이버 웹마스터 도구 및 구글 서치 콘솔 등록, 기본 검색엔진 최적화 세팅을 기본으로 지원해 드립니다."
        }
    ];

    return (
        <div className="bg-background min-h-screen pt-32 pb-24">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-foreground">
                        고객 지원 센터
                    </h1>
                    <p className="text-foreground/70 text-lg">
                        새로운 소식과 궁금하신 점을 빠르게 확인하세요.
                    </p>
                </div>

                <div className="mb-20">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold text-foreground">공지사항</h2>
                        {notices.length === 0 && (
                            <span className="text-xs px-2 py-1 bg-foreground/10 text-foreground/60 rounded">DB 연동 전 대기상태</span>
                        )}
                    </div>
                    <Accordion items={noticeItems} />
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-foreground mb-8">자주 묻는 질문 (FAQ)</h2>
                    <Accordion items={FAQS} />
                </div>
            </div>
        </div>
    );
}
