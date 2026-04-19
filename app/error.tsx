'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, RotateCcw, Home } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full text-center"
      >
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
            <AlertCircle size={40} />
          </div>
        </div>

        <h1 className="text-3xl font-bold tracking-tighter mb-4 text-slate-900 break-keep">
          문제가 발생했습니다
        </h1>
        <p className="text-slate-600 mb-10 break-keep leading-relaxed text-lg">
          페이지를 로드하는 중 일시적인 오류가 발생했습니다.<br />
          잠시 후 다시 시도해 주세요.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold transition-all hover:bg-slate-800 active:scale-95 shadow-lg"
          >
            <RotateCcw size={20} />
            <span>다시 시도하기</span>
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-full font-bold transition-all hover:bg-slate-50 active:scale-95"
          >
            <Home size={20} />
            <span>홈으로 이동</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
