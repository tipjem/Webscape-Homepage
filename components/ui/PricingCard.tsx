import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface PricingFeature {
    name: string;
    included: boolean;
}

export interface PricingTier {
    name: string;
    desc: string;
    target: string;
    price?: string;
    unit?: string;
    color: string;
    bg: string;
    popular?: boolean;
    features: PricingFeature[];
    link: string;
}

export default function PricingCard({ tier, index = 0 }: { tier: PricingTier; index?: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={cn(
                "relative rounded-3xl p-8 pt-12 border bg-background flex flex-col h-full",
                tier.popular ? "border-accent shadow-2xl shadow-accent/10 md:-translate-y-4" : "border-foreground/10"
            )}
        >
            {tier.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider shadow-md shadow-accent/20">
                    가장 추천하는 모델
                </div>
            )}

            <div className="mb-6">
                <h3 className={cn("text-2xl font-bold mb-3", tier.color)}>{tier.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{tier.desc}</p>
            </div>

            <div className="my-6">
                <p className="text-lg text-gray-700 dark:text-gray-200 font-semibold leading-snug">
                    {tier.target}
                </p>
            </div>


            <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                        {feature.included ? (
                            <Check size={18} className="text-accent shrink-0 mt-0.5" />
                        ) : (
                            <X size={18} className="text-foreground/20 shrink-0 mt-0.5" />
                        )}
                        <span className={feature.included ? "text-gray-700 dark:text-gray-200 font-medium" : "text-gray-400 dark:text-gray-600"}>
                            {feature.name}
                        </span>
                    </li>
                ))}
            </ul>

            <Link
                href={tier.link}
                className={cn(
                    "w-full py-4 rounded-xl font-bold text-center transition-all hover:scale-[1.02] active:scale-95 mt-auto",
                    tier.popular ? "bg-accent text-white shadow-xl shadow-accent/20" : "bg-foreground/5 py-[15px] border border-foreground/10 text-foreground hover:bg-foreground/10"
                )}
            >
                프로젝트 무료 상담하기
            </Link>
        </motion.div>
    );
}
