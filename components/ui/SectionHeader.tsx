"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  description?: string;
  badge?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  description,
  badge,
  centered = true,
  className
}: SectionHeaderProps) {
  return (
    <div className={cn(
      "mb-16 md:mb-20",
      centered ? "text-center mx-auto max-w-4xl" : "text-left",
      className
    )}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 rounded-full bg-foreground/10 text-foreground text-xs font-bold mb-6 backdrop-blur-md border border-foreground/5 uppercase tracking-widest"
        >
          {badge}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tighter break-keep leading-tight"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-foreground/60 text-lg md:text-xl break-keep leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
