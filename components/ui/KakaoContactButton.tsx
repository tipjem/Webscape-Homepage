import Image from "next/image";
import Link from "next/link";

export default function KakaoContactButton() {
  return (
    <Link
      href="https://open.kakao.com/o/sJvfON1h"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 md:bottom-12 right-6 md:right-8 z-[9999] w-[60px] h-[60px] rounded-full shadow-xl hover:-translate-y-1 transition-transform overflow-hidden flex items-center justify-center bg-[#FEE500]"
      aria-label="카카오톡 오픈채팅 상담하기"
    >
      <Image
        src="/kakao.png"
        alt="카카오톡 상담하기"
        width={60}
        height={60}
        className="w-full h-full object-cover"
      />
    </Link>
  );
}
