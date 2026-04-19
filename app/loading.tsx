'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="relative flex flex-col items-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0.4, 1, 0.4], scale: [0.95, 1, 0.95] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-3xl md:text-4xl font-extrabold tracking-tighter text-slate-900 mb-8"
        >
          Webscape
        </motion.div>

        {/* Loading Bar Container */}
        <div className="w-48 h-[2px] bg-foreground/5 rounded-full overflow-hidden relative">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-accent w-1/2"
          />
        </div>
      </div>
    </div>
  );
}
