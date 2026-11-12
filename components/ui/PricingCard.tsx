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
                "relative rounded-3xl p-8 pt-12 border bg-[#211009]/80 backdrop-blur-xl flex flex-col h-full",
                tier.popular ? "border-[#F07A32] shadow-2xl shadow-[#F07A32]/10 md:-translate-y-4" : "border-white/10"
            )}
        >
            {tier.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#F07A32] text-[#160B07] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider shadow-md shadow-[#F07A32]/25">
                    가장 추천하는 모델
                </div>
            )}

            <div className="mb-6">
                <h3 className={cn("text-2xl font-bold mb-3", tier.color)}>{tier.name}</h3>
                <p className="text-[#F5F1EB]/60 text-sm leading-relaxed">{tier.desc}</p>
            </div>

            <div className="my-6">
                <p className="text-lg text-[#F5F1EB] font-semibold leading-snug">
                    {tier.target}
                </p>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                        {feature.included ? (
                            <Check size={18} className="text-[#F07A32] shrink-0 mt-0.5" />
                        ) : (
                            <X size={18} className="text-[#F5F1EB]/20 shrink-0 mt-0.5" />
                        )}
                        <span className={feature.included ? "text-[#F5F1EB]/90 font-medium" : "text-[#F5F1EB]/40"}>
                            {feature.name}
                        </span>
                    </li>
                ))}
            </ul>

            <Link
                href={tier.link}
                className={cn(
                    "w-full py-4 rounded-xl font-bold text-center transition-[transform,background-color,color,box-shadow] duration-200 hover:scale-[1.02] active:scale-95 mt-auto",
                    tier.popular ? "bg-[#F07A32] text-[#160B07] shadow-xl shadow-[#F07A32]/20 hover:bg-[#FF6B35]" : "bg-white/5 py-[15px] border border-white/10 text-[#F5F1EB] hover:bg-[#D95F20] hover:text-[#160B07]"
                )}
            >
                프로젝트 무료 상담하기
            </Link>
        </motion.div>
    );
}
