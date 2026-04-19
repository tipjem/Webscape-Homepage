"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, RefreshCcw } from "lucide-react";

export default function PortfolioError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-background">
      <div className="w-24 h-24 bg-red-500/10 rounded-full flex items-center justify-center mb-8 border border-red-500/20">
        <span className="text-4xl text-red-500">!</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tighter">
        페이지를 불러올 수 없습니다
      </h2>
      <p className="text-xl text-foreground/60 mb-12 max-w-md break-keep">
        일시적인 오류가 발생했거나, 아직 데이터가 준비되지 않았을 수 있습니다.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <button
          onClick={() => reset()}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-accent text-white font-bold hover:scale-105 active:scale-95 transition-all shadow-lg"
        >
          <RefreshCcw size={20} /> 다시 시도하기
        </button>
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-foreground/5 text-foreground font-bold hover:bg-foreground/10 transition-all border border-foreground/10"
        >
          <ArrowLeft size={20} /> 포트폴리오 목록으로
        </Link>
      </div>
    </main>
  );
}
