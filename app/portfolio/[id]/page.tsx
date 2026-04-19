import { notFound } from "next/navigation";
import { getPortfolioDetails, PORTFOLIO_DATA } from "@/src/data/portfolio";
import { Metadata } from "next";

// page-builder skill에 따른 components/sections 경로로 업데이트
import dynamic from "next/dynamic";
import DetailHero from "@/components/sections/portfolio-detail/DetailHero";
import DetailFeatures from "@/components/sections/portfolio-detail/DetailFeatures";
import DetailProcess from "@/components/sections/portfolio-detail/DetailProcess";

// 성능 최적화: 초기 로드에 필요 없는 하단 섹션들은 지연 로딩 처리
const DetailCoverage = dynamic(() => import("@/components/sections/portfolio-detail/DetailCoverage"), {
  loading: () => <div className="h-[400px] w-full bg-foreground/5 animate-pulse rounded-[2rem] my-12" />,
});
const DetailOtherProjects = dynamic(() => import("@/components/sections/portfolio-detail/DetailOtherProjects"), {
  loading: () => <div className="h-[300px] w-full bg-foreground/5 animate-pulse rounded-[2rem] my-12" />,
});
import DetailCTA from "@/components/sections/portfolio-detail/DetailCTA";
import ProjectJsonLd from "@/components/sections/portfolio-detail/ProjectJsonLd";

// Static Params for SSG/ISR performance
export function generateStaticParams() {
  return PORTFOLIO_DATA.map((p) => ({
    id: p.id.toString(),
  }));
}

// 24시간마다 정적 페이지 재생성 (ISR)
export const revalidate = 86400;

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const project = getPortfolioDetails(id);
  
  if (!project) return {};

  const ogImage = project.images && project.images.length > 0 ? project.images[0] : project.image;

  return {
    title: `${project.title} | ${project.category} 포트폴리오`,
    description: `${project.description} - 웹스케이프의 ${project.category} 전문 홈페이지 제작 사례입니다.`,
    keywords: [project.category, project.title, "홈페이지 제작", "웹디자인", "웹스케이프", "포트폴리오", "WAAS"],
    openGraph: {
        title: `${project.title} - ${project.category} 제작 사례`,
        description: project.description,
        type: "article",
        locale: "ko_KR",
        siteName: "Webscape",
        images: ogImage ? [{ url: ogImage, width: 1200, height: 630, alt: `${project.title} 대표 이미지` }] : undefined,
    },
    twitter: {
        card: "summary_large_image",
        title: project.title,
        description: project.description,
        images: ogImage ? [ogImage] : undefined,
    },
    alternates: {
        canonical: `https://webscape.co.kr/portfolio/${id}`,
    }
  };
}

export default async function PortfolioDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getPortfolioDetails(id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen w-full bg-background">
      <article className="w-full flex flex-col">
        <DetailHero project={project} />
        <DetailFeatures project={project} />
        <DetailProcess project={project} />
        <DetailCoverage project={project} />
        <DetailOtherProjects currentId={project.id} />
        <DetailCTA />
        {/* SEO: Structured Data (JSON-LD) */}
        <ProjectJsonLd project={project} />
      </article>
    </main>
  );
}
