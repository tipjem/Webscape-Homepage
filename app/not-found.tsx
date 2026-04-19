'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Search, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-1" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] -z-1" />

      <div className="max-w-2xl w-full text-center relative z-10">
        <h1 className="text-9xl font-black text-slate-900/5 select-none mb-4 absolute top-0 left-1/2 -translate-x-1/2 translate-y-[-120%]">
          404
        </h1>

        <div className="mb-12 flex justify-center">
            <div className="relative">
                <div className="w-24 h-24 rounded-3xl bg-accent/10 flex items-center justify-center text-accent">
                    <Search size={48} />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-background border-2 border-accent flex items-center justify-center">
                    <span className="text-accent font-bold text-lg">?</span>
                </div>
            </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-slate-900 break-keep">
          요청하신 페이지를 <br /> 찾을 수 없습니다.
        </h2>
        <p className="text-slate-600 mb-12 break-keep leading-relaxed text-lg md:text-xl max-w-lg mx-auto">
          링크가 잘못되었거나, 주소가 삭제되었을 수 있습니다.<br />
          아래의 버튼을 클릭하여 웹스케이프로 돌아가세요.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-accent text-white px-10 py-5 rounded-full font-bold transition-all hover:bg-accent/90 active:scale-95 shadow-xl shadow-accent/20"
          >
            <Home size={20} />
            <span>홈으로 이동하기</span>
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-900 px-10 py-5 rounded-full font-bold transition-all hover:bg-slate-50 active:scale-95"
          >
            <ArrowLeft size={20} />
            <span>문의하기</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
