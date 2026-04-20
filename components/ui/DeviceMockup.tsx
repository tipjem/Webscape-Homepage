"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface DeviceMockupProps {
  type?: "macbook" | "iphone" | "none";
  children: ReactNode;
  className?: string;
}

export function DeviceMockup({ type = "none", children, className }: DeviceMockupProps) {
  if (type === "macbook") {
    return (
      <div className={cn("relative w-full mx-auto", className)}>
        {/* MacBook Body Frame */}
        <div className="relative rounded-[1.2rem] bg-[#2d2d2d] p-[1.2%] shadow-2xl ring-1 ring-white/10 ring-inset">
          {/* Top Notch Area (Subtle) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-[3%] bg-[#222] rounded-b-lg z-20" />
          
          {/* Screen Wrapper */}
          <div className="relative aspect-[16/10] overflow-hidden rounded-[0.5rem] bg-black">
            {children}
          </div>
        </div>
        
        {/* Shadow for Premium Depth */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-10 bg-accent/5 blur-[80px] -z-10 opacity-60" />
      </div>
    );
  }

  if (type === "iphone") {
    return (
      <div className={cn("relative mx-auto w-full max-w-[320px]", className)}>
        {/* iPhone Frame */}
        <div className="relative rounded-[3.2rem] bg-[#1a1a1a] p-[10px] shadow-2xl ring-[5px] ring-[#3a3a3a] border-[1px] border-white/5">
          {/* Dynamic Island Hook */}
          <div className="absolute top-[22px] left-1/2 -translate-x-1/2 w-[75px] h-[20px] bg-black rounded-full z-20 flex items-center justify-end px-2.5">
             <div className="w-1 h-1 rounded-full bg-blue-500/30" />
          </div>
          
          {/* Screen Wrapper */}
          <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.6rem] bg-black">
            {children}
          </div>
        </div>

        {/* Subtle Surface Gloss */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none rounded-[3.2rem]" />
      </div>
    );
  }

  // Fallback: Just a classy card
  return (
    <div className={cn(
      "relative w-full rounded-[2rem] overflow-hidden ring-1 ring-white/10 shadow-2xl bg-foreground/5",
      className
    )}>
      {children}
    </div>
  );
}
