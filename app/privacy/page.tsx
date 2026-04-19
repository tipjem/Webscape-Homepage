import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '개인정보처리방침',
  description: '웹스케이프의 개인정보처리방침입니다.',
};

export default function PrivacyPolicyPage() {
  const chapters = [
    { id: 'article-1', title: '제1조 개인정보의 처리목적' },
    { id: 'article-2', title: '제2조 처리 및 보유기간' },
    { id: 'article-3', title: '제3조 제3자 제공' },
    { id: 'article-4', title: '제4조 권리와 행사 방법' },
    { id: 'article-5', title: '제5조 처리하는 항목' },
    { id: 'article-6', title: '제6조 개인정보의 파기' },
    { id: 'article-7', title: '제7조 안전성 확보조치' },
    { id: 'article-8', title: '제8조 자동 수집 장치' },
    { id: 'article-9', title: '제9조 보호책임자' },
    { id: 'article-10', title: '제10조 열람청구' },
    { id: 'article-11', title: '제11조 권익침해 구제' },
    { id: 'article-12', title: '제12조 시행 및 변경' },
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header Section */}
        <div className="max-w-[850px] mx-auto mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">
            개인정보처리방침 <span className="text-gray-400 font-light text-3xl md:text-4xl ml-2 whitespace-nowrap">(Privacy Policy)</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed font-medium break-keep">
            안전한 서비스 이용을 위한 웹스케이프의<br className="hidden md:block" /> 개인정보 처리 기준 및 보호 방침입니다.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative items-start justify-center">
          
          {/* Sticky Navigation */}
          <aside className="w-56 shrink-0 hidden lg:block sticky top-32">
            <nav className="border-l-2 border-gray-200 pl-6 space-y-4">
              <h3 className="font-bold text-gray-900 mb-6 text-sm tracking-wider uppercase">목차</h3>
              <ul className="space-y-4">
                {chapters.map((chapter) => (
                  <li key={chapter.id}>
                    <a 
                      href={`#${chapter.id}`}
                      className="text-gray-500 hover:text-accent transition-colors block font-medium text-sm"
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
              
              <div className="mb-12 p-6 bg-gray-50 rounded-xl border border-gray-100 text-gray-600">
                <p><strong className="text-gray-900">웹스케이프</strong>(이하 ‘회사’라 한다)는 개인정보 보호법 제30조에 따라 정보 주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리지침을 수립, 공개합니다.</p>
              </div>

              {/* 제1조 */}
              <section id="article-1" className="mb-16 scroll-mt-32">
                <h3 className="text-xl font-bold text-gray-900 mb-4"><span className="text-accent pr-1">제1조</span> (개인정보의 처리목적)</h3>
                <p className="mb-4">회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
                <ol className="list-decimal pl-6 space-y-3">
                  <li><strong>홈페이지 회원 가입 및 관리</strong>: 회원 가입 의사 확인, 회원제 서비스 제공에 따른 본인 식별․인증, 회원자격 유지․관리, 제한적 본인확인제 시행에 따른 본인확인, 서비스 부정 이용 방지, 만 14세 미만 아동의 개인정보처리 시 법정대리인의 동의 여부 확인, 각종 고지․통지, 고충 처리 등을 목적으로 개인정보를 처리합니다.</li>
                  <li><strong>재화 또는 서비스 제공</strong>: 물품 배송, 서비스 제공, 계약서 및 청구서 발송, 콘텐츠 제공, 맞춤서비스 제공, 본인인증, 연령인증, 요금 결제 및 정산, 채권추심 등을 목적으로 개인정보를 처리합니다.</li>
                  <li><strong>고충 처리</strong>: 민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락․통지, 처리 결과 통보 등의 목적으로 개인정보를 처리합니다.</li>
                </ol>
              </section>

              {/* 제2조 */}
              <section id="article-2" className="mb-16 scroll-mt-32">
                <h3 className="text-xl font-bold text-gray-900 mb-4"><span className="text-accent pr-1">제2조</span> (개인정보의 처리 및 보유기간)</h3>
                <ol className="list-none space-y-4">
                  <li><span className="mr-1">①</span> 회사는 법령에 따른 개인정보 보유, 이용 기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유, 이용 기간 내에서 개인정보를 처리, 보유합니다.</li>
                  <li><span className="mr-1">②</span> 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
                    <ol className="list-decimal pl-6 mt-3 space-y-3">
                      <li>
                        <strong>홈페이지 회원 가입 및 관리</strong> : 사업자/단체 홈페이지 탈퇴 시까지. 다만, 다음의 사유에 해당하는 경우에는 해당 사유 종료 시까지
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>1) 관계 법령 위반에 따른 수사, 조사 등이 진행 중인 경우에는 해당 수사, 조사 종료 시까지</li>
                          <li>2) 홈페이지 이용에 따른 채권 및 채무관계 잔존 시에는 해당 채권, 채무 관계 정산 시까지</li>
                        </ul>
                      </li>
                      <li>
                        <strong>재화 또는 서비스 제공</strong> : 재화․서비스 공급완료 및 요금결제․정산 완료 시까지. 다만, 다음의 사유에 해당하는 경우에는 해당 기간 종료 시까지
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                          <li>1) 「전자상거래 등에서의 소비자 보호에 관한 법률」에 따른 표시․광고, 계약내용 및 이행 등 거래에 관한 기록
                            <ul className="list-[circle] pl-5 mt-1 space-y-1 text-sm">
                              <li>표시․광고에 관한 기록 : 6월</li>
                              <li>계약 또는 청약 철회, 대금결제, 재화 등의 공급기록 : 5년</li>
                              <li>소비자 불만 또는 분쟁 처리에 관한 기록 : 3년</li>
                            </ul>
                          </li>
                          <li>2) 「통신비밀보호법」 제41조에 따른 통신사실확인자료 보관
                            <ul className="list-[circle] pl-5 mt-1 space-y-1 text-sm">
                              <li>가입자 전기통신일시, 개시․종료 시간, 상대방 가입자 번호, 사용도수, 발신기지국 위치추적자료 : 1년</li>
                              <li>컴퓨터 통신, 인터넷 로그 기록자료, 접속지 추적자료 : 3개월</li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ol>
                  </li>
                </ol>
              </section>

              {/* 제3조 */}
              <section id="article-3" className="mb-16 scroll-mt-32">
                <h3 className="text-xl font-bold text-gray-900 mb-4"><span className="text-accent pr-1">제3조</span> (개인정보의 제3자 제공)</h3>
                <ol className="list-none space-y-4">
                  <li><span className="mr-1">①</span> 회사는 정보주체의 개인정보를 제1조(개인정보의 처리목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조 및 제 18조에 해당하는 경우에만 개인정보를 제3자에게 제공하고 그 외에는 정보주체의 개인정보를 제3자에게 제공하지 않습니다.</li>
                  <li><span className="mr-1">②</span> 회사는 원활한 서비스 제공을 위해 다음의 경우 개인정보보호법 제17조 제1항 제1호에 따라 정보주체의 동의를 얻어 필요 최소한의 범위로만 개인정보를 제3자에게 제공할 수 있습니다.
                    <div className="mt-4 p-4 bg-gray-50 border border-gray-200 rounded-lg text-sm space-y-2">
                      <p><strong>개인정보를 제공받는 자</strong> : &lt;예) (주) OOO 카드&gt;</p>
                      <p><strong>제공받는 자의 개인정보 이용목적</strong> : &lt;예) 이벤트 공동개최 등 업무제휴 및 제휴 신용카드 발급&gt;</p>
                      <p><strong>제공하는 개인정보 항목</strong> : &lt;예) 성명, 주소, 전화번호, 이메일주소, 카드결제계좌정보&gt;</p>
                      <p><strong>제공받는 자의 보유, 이용기간</strong> : &lt;예) 신용카드 발급계약에 따른 거래기간동안&gt;</p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* 제4조 */}
              <section id="article-4" className="mb-16 scroll-mt-32">
                <h3 className="text-xl font-bold text-gray-900 mb-4"><span className="text-accent pr-1">제4조</span> (정보주체 및 법정대리인의 권리와 그 행사 방법)</h3>
                <ol className="list-none space-y-4">
                  <li><span className="mr-1">①</span> 정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
                    <ol className="list-decimal pl-7 mt-2 space-y-1">
                      <li>개인정보 열람 요구</li>
                      <li>오류 등이 있을 경우 정정 요구</li>
                      <li>삭제요구</li>
                      <li>처리정지 요구</li>
                    </ol>
                  </li>
                  <li><span className="mr-1">②</span> 제1항에 따른 권리 행사는 회사에 대해 서면, 전화, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 회사는 이에 대해 지체없이 조치하겠습니다.</li>
                  <li><span className="mr-1">③</span> 정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는 회사는 정정 또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나 제공하지 않습니다.</li>
                  <li><span className="mr-1">④</span> 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 개인정보 보호법 시행규칙 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.</li>
                  <li><span className="mr-1">⑤</span> 정보주체는 개인정보 보호법 등 관계 법령을 위반하여 회사가 처리하고 있는 정보주체 본인이나 타인의 개인정보 및 사생활을 침해하여서는 아니 됩니다.</li>
                </ol>
              </section>

              {/* 제5조 */}
              <section id="article-5" className="mb-16 scroll-mt-32">
                <h3 className="text-xl font-bold text-gray-900 mb-4"><span className="text-accent pr-1">제5조</span> (처리하는 개인정보 항목)</h3>
                <p className="mb-4">회사는 다음의 개인정보 항목을 처리하고 있습니다.</p>
                <ol className="list-decimal pl-6 space-y-4">
                  <li><strong>홈페이지 회원 가입 및 관리</strong>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>필수항목 : &lt;예) 성명, 생년월일, 아이디, 비밀번호, 주소, 전화번호, 성별, 이메일주소, 아이핀번호&gt;</li>
                      <li>선택항목 : &lt;예) 결혼 여부, 관심 분야&gt;</li>
                    </ul>
                  </li>
                  <li><strong>재화 또는 서비스 제공</strong>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>필수항목 : &lt;예) 성명, 생년월일, 아이디, 비밀번호, 주소, 전화번호, 이메일주소, 아이핀번호, 신용카드번호, 은행계좌정보 등 결제정보&gt;</li>
                      <li>선택항목 : &lt;관심분야, 과거 구매내역&gt;</li>
                    </ul>
                  </li>
                </ol>
              </section>

              {/* 제6조 */}
              <section id="article-6" className="mb-16 scroll-mt-32">
                <h3 className="text-xl font-bold text-gray-900 mb-4"><span className="text-accent pr-1">제6조</span> (개인정보의 파기)</h3>
                <ol className="list-none space-y-4">
                  <li><span className="mr-1">①</span> 회사는 개인정보 보유 기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보 파기합니다.</li>
                  <li><span className="mr-1">②</span> 정보주체로부터 동의받은 개인정보 보유 기간이 경과하거나 처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.</li>
                  <li><span className="mr-1">③</span> 개인정보 파기의 절차 및 방법은 다음과 같습니다.
                    <ol className="list-decimal pl-7 mt-2 space-y-2">
                      <li><strong>파기 절차</strong>: 회사는 파기 사유가 발생한 개인정보를 선정하고, 회사의 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.</li>
                      <li><strong>파기 방법</strong>: 회사는 전자적 파일 형태로 기록․저장된 개인정보는 기록을 재생할 수 없도록 파기하며, 종이 문서에 기록․저장된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.</li>
                    </ol>
                  </li>
                </ol>
              </section>

              {/* 제7조 */}
              <section id="article-7" className="mb-16 scroll-mt-32">
                <h3 className="text-xl font-bold text-gray-900 mb-4"><span className="text-accent pr-1">제7조</span> (개인정보의 안전성 확보조치)</h3>
                <p className="mb-4">회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 하고 있습니다.</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li><strong>관리적 조치</strong> : 내부관리계획 수립 및 시행, 정기적 직원 교육 등</li>
                  <li><strong>기술적 조치</strong> : 개인정보처리시스템 등의 접근 권한 관리, 접근통제시스템 설치, 고유 식별정보 등의 암호화, 보안프로그램 설치</li>
                  <li><strong>물리적 조치</strong> : 전산실, 자료보관실 등의 접근통제</li>
                </ol>
              </section>

              {/* 제8조 */}
              <section id="article-8" className="mb-16 scroll-mt-32">
                <h3 className="text-xl font-bold text-gray-900 mb-4"><span className="text-accent pr-1">제8조</span> (개인정보 자동 수집 장치의 설치∙운영 및 거부에 관한 사항)</h3>
                <ol className="list-none space-y-4">
                  <li><span className="mr-1">①</span> 회사는 이용자에게 개별적인 맞춤 서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용합니다.</li>
                  <li><span className="mr-1">②</span> 쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의 컴퓨터 브라우저에 보내는 소량의 정보이며 이용자들의 PC 또는 모바일에 저장됩니다.</li>
                  <li><span className="mr-1">③</span> 정보주체는 웹 브라우저 옵션 설정을 통해 쿠키 허용, 차단 등의 설정을 할 수 있습니다. 다만, 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수 있습니다.
                    <div className="mt-4 p-4 bg-gray-50 border border-gray-200 rounded-lg text-sm space-y-4">
                      <div>
                        <p className="font-bold text-gray-900 mb-2">▶ 웹 브라우저에서 쿠키 허용/차단</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>크롬(Chrome) : 웹 브라우저 설정 &gt; 개인정보 보호 및 보안 &gt; 인터넷 사용기록 삭제</li>
                          <li>엣지(Edge) : 웹 브라우저 설정 &gt; 쿠키 및 사이트 권한 &gt; 쿠키 및 사이트 데이터 관리 및 삭제</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 mb-2">▶ 모바일 브라우저에서 쿠키 허용/차단</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>크롬(Chrome) : 모바일 브라우저 설정 &gt; 개인정보 보호 및 보안 &gt; 인터넷 사용기록 삭제</li>
                          <li>사파리(Safari) : 모바일 기기 설정 &gt; 사파리(Safari) &gt; 고급 &gt; 모든 쿠키 차단</li>
                          <li>삼성 인터넷 : 모바일 브라우저 설정 &gt; 인터넷 사용 기록 &gt; 인터넷 사용 기록 삭제</li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li><span className="mr-1">④</span> 회사는 서비스 이용과정에서 사용자가 방문한 각 서비스와 웹 사이트들에 대한 방문 및 이용형태, 인기 검색어, 보안접속 여부 등을 파악하여 이용자에게 최적화된 정보 제공을 위해 수집・이용하고 있습니다.</li>
                </ol>
              </section>

              {/* 제9조 */}
              <section id="article-9" className="mb-16 scroll-mt-32">
                <h3 className="text-xl font-bold text-gray-900 mb-4"><span className="text-accent pr-1">제9조</span> (개인정보 보호책임자)</h3>
                <ol className="list-none space-y-4">
                  <li><span className="mr-1">①</span> 회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만 처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
                    <div className="mt-4 p-4 bg-gray-50 border border-gray-200 rounded-lg text-sm space-y-4">
                      <div>
                        <p className="font-bold text-gray-900 mb-2">▶ 개인정보 보호책임자</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>성명 : 민선홍</li>
                          <li>직책 : 대표</li>
                          <li>연락처 : 010-2633-9537, webscape@naver.com (※ 개인정보 보호 담당부서로 연결됩니다.)</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 mb-2">▶ 개인정보 보호 담당부서</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>부서명 : 개인정보 보호팀</li>
                          <li>연락처 : 010-2633-9537, webscape@naver.com</li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li><span className="mr-1">②</span> 정보주체께서는 회사의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만 처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. 회사는 정보주체의 문의에 대해 지체없이 답변 및 처리해드릴 것입니다.</li>
                </ol>
              </section>

              {/* 제10조 */}
              <section id="article-10" className="mb-16 scroll-mt-32">
                <h3 className="text-xl font-bold text-gray-900 mb-4"><span className="text-accent pr-1">제10조</span> (개인정보 열람청구)</h3>
                <p className="mb-4">정보주체는 개인정보 보호법 제35조에 따른 개인정보의 열람 청구를 아래의 부서에 할 수 있습니다. 회사는 정보주체의 개인정보 열람 청구가 신속하게 처리되도록 노력하겠습니다.</p>
                <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg text-sm space-y-2">
                  <p className="font-bold text-gray-900 mb-2">▶ 개인정보 열람청구 접수․처리 부서</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>부서명 : 개인정보 보호팀</li>
                    <li>연락처 : 010-2633-9537, webscape@naver.com</li>
                  </ul>
                </div>
              </section>

              {/* 제11조 */}
              <section id="article-11" className="mb-16 scroll-mt-32">
                <h3 className="text-xl font-bold text-gray-900 mb-4"><span className="text-accent pr-1">제11조</span> (권익침해 구제 방법)</h3>
                <p className="mb-4">정보주체는 아래의 기관에 대해 개인정보 침해에 대한 피해구제, 상담 등을 문의하실 수 있습니다.</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li><strong>개인정보 분쟁조정위원회</strong> : (국번없이) 1833-6972 (www.kopico.go.kr)</li>
                  <li><strong>개인정보침해신고센터</strong> : (국번없이) 118 (privacy.kisa.or.kr)</li>
                  <li><strong>대검찰청</strong> : (국번없이) 1301 (www.spo.go.kr)</li>
                  <li><strong>경찰청</strong> : (국번없이) 182 (ecrm.police.go.kr/minwon/main)</li>
                </ol>
              </section>

              {/* 제12조 */}
              <section id="article-12" className="mb-16 scroll-mt-32">
                <h3 className="text-xl font-bold text-gray-900 mb-4"><span className="text-accent pr-1">제12조</span> (개인정보 처리방침 시행 및 변경)</h3>
                <p>이 개인정보 처리방침은 2025. 03. 01. 부터 적용됩니다.</p>
              </section>

            </article>
          </div>
        </div>

      </div>
    </div>
  );
}
