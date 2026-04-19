import { PortfolioItem } from "@/src/data/portfolio";

export default function ProjectJsonLd({ project }: { project: PortfolioItem }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "name": project.title,
        "description": project.description,
        "genre": project.category,
        "creator": {
            "@type": "Organization",
            "name": "Webscape",
            "url": "https://webscape.co.kr"
        },
        "image": project.images && project.images.length > 0 ? project.images[0] : project.image,
        "url": `https://webscape.co.kr/portfolio/${project.id}`,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://webscape.co.kr/portfolio/${project.id}`
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
