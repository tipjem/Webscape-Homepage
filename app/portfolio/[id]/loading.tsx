"use client";

import { motion } from "framer-motion";

export default function PortfolioLoading() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Hero Skeleton */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="h-8 w-24 bg-foreground/10 rounded-full mx-auto mb-8 animate-pulse" />
          <div className="h-16 md:h-24 w-3/4 bg-foreground/10 rounded-2xl mx-auto mb-8 animate-pulse" />
          <div className="h-6 w-full max-w-2xl bg-foreground/5 rounded-lg mx-auto mb-4 animate-pulse" />
          <div className="h-6 w-2/3 bg-foreground/5 rounded-lg mx-auto animate-pulse" />
        </div>

        {/* Image Stack Skeleton */}
        <div className="flex flex-col gap-16 md:gap-24 w-full max-w-5xl mx-auto mb-32">
          {[1, 2].map((i) => (
            <div key={i} className="relative w-full aspect-[21/9] rounded-[2.5rem] bg-foreground/5 animate-pulse overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
            </div>
          ))}
        </div>

        {/* Stats Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-32 bg-foreground/5 rounded-3xl animate-pulse" />
          ))}
        </div>
      </div>
      
      {/* CSS for shimmer animation */}
      <style jsx global>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </main>
  );
}
