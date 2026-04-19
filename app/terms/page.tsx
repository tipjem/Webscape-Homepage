import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '이용약관',
  description: '웹스케이프의 이용약관입니다.',
};

export default function TermsOfServicePage() {
  const chapters = [
    { id: 'chapter-1', title: '제1장 총칙' },
    { id: 'chapter-2', title: '제2장 계약 및 서비스' },
    { id: 'chapter-3', title: '제3장 계약 당사자의 의무' },
    { id: 'chapter-4', title: '제4장 계약 해지 및 책임' },
    { id: 'chapter-5', title: '제5장 기타' },
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header Section */}
        <div className="max-w-[850px] mx-auto mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">
            이용약관 <span className="text-gray-400 font-light text-3xl md:text-4xl ml-2 whitespace-nowrap">(Terms of Service)</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed font-medium break-keep">
            웹스케이프 서비스를 이용해주시는 의뢰인분들께<br className="hidden md:block" /> 공정하고 투명한 서비스 제공을 약속드립니다.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative items-start justify-center">
          
          {/* Sticky Navigation */}
          <aside className="w-48 shrink-0 hidden lg:block sticky top-32">
            <nav className="border-l-2 border-gray-200 pl-6 space-y-4">
              <h3 className="font-bold text-gray-900 mb-6 text-sm tracking-wider uppercase">목차</h3>
              <ul className="space-y-4">
                {chapters.map((chapter) => (
                  <li key={chapter.id}>
                    <a 
                      href={`#${chapter.id}`}
                      className="text-gray-500 hover:text-accent transition-colors block font-medium"
                    >
                      {chapter.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <div className="flex-1 max-w-[850px] w-full">
            <article className="text-gray-700 leading-[1.8] text-[15px] md:text-base break-keep">
              
              {/* 제1장 */}
              <section id="chapter-1" className="mb-16 scroll-mt-32">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-4">제1장 총칙</h2>
                
                <div className="mb-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-4"><span className="text-accent pr-1">제1조</span> (목적)</h3>
                  <p>이 이용약관은 주식회사 <strong className="text-accent font-semibold">웹스케이프</strong>(이하 "회사")가 제공하는 홈페이지 제작 및 유지보수 서비스(이하 "서비스")를 이용함에 있어 회사와 의뢰인 간의 권리, 의무, 책임사항 및 기타 필요한 사항을 규정함을 목적으로 합니다.</p>
                </div>

                <div className="mb-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-4"><span className="text-accent pr-1">제2조</span> (용어의 정의)</h3>
                  <ol className="list-decimal pl-6 space-y-3">
                    <li><strong>"의뢰인(고객)"</strong> : 회사와 서비스 계약을 체결하고 제작 및 유지보수 서비스를 제공받는 개인, 법인, 단체를 말합니다.</li>
                    <li><strong>"계약"</strong> : 의뢰인이 회사에 서비스를 요청하고 회사가 이를 승낙함으로써 성립되는 합의를 말합니다.</li>
                    <li><strong>"제작(작업)물"</strong> : 회사가 의뢰인의 요청에 따라 제작 및 제공하는 홈페이지, 애플리케이션, 콘텐츠 등을 포함합니다.</li>
                    <li><strong>"유지보수"</strong> : 계약 이후 의뢰인의 요청에 따라 제공되는 수정, 추가 작업 및 기타 관리 업무를 말합니다.</li>
                  </ol>
                </div>

                <div className="mb-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-4"><span className="text-accent pr-1">제3조</span> (약관의 효력 및 변경)</h3>
                  <ol className="list-decimal pl-6 space-y-3">
                    <li>이 약관은 서비스를 신청한 의뢰인에게 효력을 발생하며, 회사는 약관을 회사 홈페이지 또는 의뢰인이 확인할 수 있는 방식으로 게시합니다.</li>
                    <li>회사는 필요 시 약관을 개정할 수 있으며, 개정된 약관은 적용 일자와 개정 사유를 명시하여 사전에 공지합니다.</li>
                    <li>의뢰인이 변경된 약관에 동의하지 않을 경우 계약 해지를 요청할 수 있으며, 이후 서비스를 계속 이용하는 경우 변경된 약관에 동의한 것으로 간주합니다.</li>
                  </ol>
                </div>

                <div className="mb-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-4"><span className="text-accent pr-1">제4조</span> (약관 외 준칙)</h3>
                  <ol className="list-decimal pl-6 space-y-3">
                    <li>이 약관에 명시되지 않은 사항은 관계 법령 및 상관습에 따릅니다.</li>
                    <li>약관의 해석과 서비스 이용에 관한 분쟁은 대한민국 법을 기준으로 합니다.</li>
                    <li>이용약관과 개별 계약서의 내용이 상충할 경우, 개별 계약서의 조건이 우선 적용됩니다.</li>
                  </ol>
                </div>
              </section>

              {/* 제2장 */}
              <section id="chapter-2" className="mb-16 scroll-mt-32">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-4">제2장 계약 및 서비스</h2>
                
                <div className="mb-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-4"><span className="text-accent pr-1">제5조</span> (서비스 신청 및 계약 체결)</h3>
                  <ol className="list-decimal pl-6 space-y-3">
                    <li>의뢰인은 회사에 서비스를 요청하기 위해 계약을 체결해야 합니다.</li>
                    <li>계약은 요청사항, 제작 기간, 제작비 등 구체적인 조건을 명시한 계약서를 통해 성립됩니다.</li>
                    <li>회사는 의뢰인이 제공한 요청 내용이 부적절하거나 기술적, 운영상 서비스 제공이 어려운 경우 계약 체결을 거부할 수 있습니다.</li>
                  </ol>
                </div>

                <div className="mb-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-4"><span className="text-accent pr-1">제6조</span> (서비스 제공)</h3>
                  <ol className="list-decimal pl-6 space-y-3">
                    <li>회사는 계약서에 명시된 조건에 따라 서비스를 제공하며, 의뢰인의 요청 사항을 성실히 반영합니다.</li>
                    <li>의뢰인이 요청한 수정사항은 계약 범위 내에서 처리하며, 추가 요청은 별도의 비용이 발생할 수 있습니다.</li>
                    <li>제작물의 소스코드는 계약서에 명시된 경우에만 제공되며, 제공 후 발생하는 오류나 유지보수에 대해서는 별도 계약이 필요합니다.</li>
                  </ol>
                </div>

                <div className="mb-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-4"><span className="text-accent pr-1">제7조</span> (제작물 소유권 및 저작권)</h3>
                  <ol className="list-decimal pl-6 space-y-3">
                    <li>회사가 제작한 제작물의 저작권은 회사에 귀속됩니다.</li>
                    <li>의뢰인은 계약 조건에 따라 제작물의 사용권을 부여받으며, 제작물을 상업적 용도로 활용하거나 수정, 배포할 경우 회사와 협의해야 합니다.</li>
                    <li>의뢰인의 요청으로 제공된 콘텐츠(로고, 이미지 등)의 저작권 문제는 의뢰인에게 책임이 있으며, 제3자와의 분쟁 발생 시 회사는 책임을 지지 않습니다.</li>
                  </ol>
                </div>

                <div className="mb-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-4"><span className="text-accent pr-1">제8조</span> (서비스 변경 및 중단)</h3>
                  <ol className="list-decimal pl-6 space-y-3">
                    <li>회사는 기술적 또는 운영상의 필요에 따라 제공하는 서비스의 일부 또는 전부를 변경하거나 중단할 수 있으며, 사전에 의뢰인에게 통지합니다.</li>
                    <li>서비스 변경 또는 중단으로 인해 발생한 손해에 대해 회사는 책임을 지지 않습니다. 단, 회사의 고의 또는 중대한 과실로 발생한 손해는 제외됩니다.</li>
                  </ol>
                </div>
              </section>

              {/* 제3장 */}
              <section id="chapter-3" className="mb-16 scroll-mt-32">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-4">제3장 계약 당사자의 의무</h2>
                
                <div className="mb-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-4"><span className="text-accent pr-1">제9조</span> (회사의 의무)</h3>
                  <ol className="list-decimal pl-6 space-y-3">
                    <li>회사는 의뢰인이 요청한 서비스와 제작물을 성실히 제작하여 제공합니다.</li>
                    <li>회사는 의뢰인의 개인정보 및 제공된 자료를 보호하며, 이를 제3자에게 무단으로 제공하지 않습니다.</li>
                    <li>회사는 천재지변, 시스템 장애 등 불가항력적 사유로 서비스를 제공하지 못할 경우 이를 의뢰인에게 통지합니다.</li>
                  </ol>
                </div>

                <div className="mb-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-4"><span className="text-accent pr-1">제10조</span> (의뢰인의 의무)</h3>
                  <ol className="list-decimal pl-6 space-y-3">
                    <li>의뢰인은 계약 체결 시 요청 사항 및 자료를 정확히 제공해야 단, 제공된 자료의 저작권 및 사용권과 관련된 문제에 대해 책임을 집니다.</li>
                    <li>의뢰인은 제작물 검토 및 수정 요청 시 기한을 준수해야 하며, 지연으로 인한 불이익은 의뢰인의 책임으로 합니다.</li>
                    <li>의뢰인은 제작물 사용 과정에서 법령을 준수하며, 회사의 명예를 훼손하거나 업무를 방해하는 행위를 하지 않아야 합니다.</li>
                  </ol>
                </div>
              </section>

              {/* 제4장 */}
              <section id="chapter-4" className="mb-16 scroll-mt-32">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-4">제4장 계약 해지 및 책임</h2>
                
                <div className="mb-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-4"><span className="text-accent pr-1">제11조</span> (계약 해지)</h3>
                  <ol className="list-decimal pl-6 space-y-3">
                    <li>의뢰인은 계약 해지를 요청할 수 있으며, 의뢰인의 사정으로 계약을 중도 해지 할 경우 계약금액(제작비) 전액을 포기해야 합니다.</li>
                    <li>회사는 의뢰인이 약관을 위반하거나 계약 조건을 이행하지 않을 경우 계약을 해지할 수 있습니다.</li>
                  </ol>
                </div>

                <div className="mb-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-4"><span className="text-accent pr-1">제12조</span> (면책조항)</h3>
                  <ol className="list-decimal pl-6 space-y-3">
                    <li>회사는 의뢰인의 요청에 따라 제작된 제작물의 활용 과정에서 발생하는 모든 문제에 대해 책임을 지지 않습니다.</li>
                    <li>회사는 천재지변, 시스템 장애 등 불가항력적 사유로 인한 서비스 지연 또는 중단에 대해 책임을 지지 않습니다.</li>
                  </ol>
                </div>
              </section>

              {/* 제5장 */}
              <section id="chapter-5" className="mb-16 scroll-mt-32">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-4">제5장 기타</h2>
                
                <div className="mb-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-4"><span className="text-accent pr-1">제13조</span> (분쟁 해결 및 관할 법원)</h3>
                  <ol className="list-decimal pl-6 space-y-3">
                    <li>서비스 이용과 관련하여 발생한 분쟁은 회사와 의뢰인 간 협의를 통해 해결합니다.</li>
                    <li>협의가 이루어지지 않을 경우 회사 본점 소재지 관할 법원을 전속 관할로 합니다.</li>
                  </ol>
                </div>
                
                <div className="mt-16 bg-gray-50 p-6 rounded-xl text-sm text-gray-600 border border-gray-200">
                  <p className="mb-2"><strong className="text-gray-900">책임자:</strong> 민선홍</p>
                  <p><strong className="text-gray-900">[부칙]</strong> 이 약관은 2025년 3월 20일부터 적용됩니다.</p>
                </div>
              </section>

            </article>
          </div>
        </div>

      </div>
    </div>
  );
}
