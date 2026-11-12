'use client';

import { useEffect } from 'react';

export default function GlobalError({
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
    <html lang="ko">
      <body className="min-h-[100dvh] flex items-center justify-center bg-[#160B07] text-[#F5F1EB] font-sans antialiased p-6">
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-400">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold tracking-tight mb-3">문제가 발생했습니다</h1>
          <p className="text-[#F5F1EB]/70 mb-8 text-sm leading-relaxed break-keep">
            애플리케이션에 일시적인 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.
          </p>
          <button
            onClick={() => reset()}
            className="px-6 py-3 rounded-full bg-[#F07A32] text-white font-semibold hover:bg-[#D95F20] transition-colors shadow-lg shadow-[#F07A32]/25 active:scale-95"
          >
            다시 시도하기
          </button>
        </div>
      </body>
    </html>
  );
}
