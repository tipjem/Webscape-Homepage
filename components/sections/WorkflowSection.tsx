import { motion } from "framer-motion";

export interface WorkflowStep {
    title: string;
    description: string;
}

interface WorkflowSectionProps {
    title: string;
    subtitle: string;
    steps: WorkflowStep[];
    theme?: "blue" | "purple";
}

export default function WorkflowSection({ title, subtitle, steps, theme = "blue" }: WorkflowSectionProps) {
    const isPurple = theme === "purple";
    const brandColorText = isPurple ? "text-purple-500" : "text-accent";
    const glowShadow = isPurple
        ? "hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]"
        : "hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]";
    const progressGradient = isPurple 
        ? "bg-gradient-to-r from-purple-500 to-blue-500 shadow-[0_0_12px_rgba(168,85,247,0.4)]" 
        : "bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_12px_rgba(59,130,246,0.4)]";

    return (
        <div className="py-24 relative z-20">
            <div className="text-center mb-16 relative">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold tracking-tight mb-5 text-foreground"
                >
                    {title}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-foreground/60 text-lg md:text-xl max-w-2xl mx-auto"
                >
                    {subtitle}
                </motion.p>
            </div>

            <div className="relative max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (index % 3) * 0.1 + 0.2, duration: 0.5, ease: "easeOut" }}
                            className={`p-8 rounded-[2rem] bg-foreground/5 backdrop-blur-xl border border-slate-700/80 transition-all duration-500 hover:-translate-y-1 ${glowShadow} group relative`}
                        >
                            {/* Inner Progress Line */}
                            <div className="w-full h-[2px] bg-slate-800/30 rounded-full mb-8 relative">
                                <motion.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${((index + 1) / steps.length) * 100}%` }}
                                    viewport={{ once: true }}
                                    transition={{ delay: (index % 3) * 0.1 + 0.4, duration: 0.8, ease: "easeOut" }}
                                    className={`absolute top-0 left-0 h-full rounded-full ${progressGradient}`}
                                ></motion.div>
                            </div>

                            <div className="mb-6">
                                <span className={`text-5xl font-bold tracking-tighter opacity-40 transition-opacity duration-500 group-hover:opacity-100 ${brandColorText}`}>
                                    0{index + 1}
                                </span>
                            </div>
                            <h3 className="font-semibold text-lg md:text-xl mb-3 text-foreground tracking-tight break-keep leading-snug">
                                {step.title}
                            </h3>
                            <p className="text-foreground/60 text-sm md:text-[15px] leading-relaxed font-light break-keep">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
