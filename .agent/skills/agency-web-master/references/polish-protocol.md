# 최종 납품 디테일 마감 프로토콜 (Polish Protocol)

`polish`는 기획이나 레이아웃을 다시 엎는 것이 아니라, **검수(Audit)에서 지적된 문제점을 보완하고 웹사이트의 감성적 완성도를 95점에서 100점으로 끌어올리는 마감 작업**입니다.

---

## 1. 마감 작업 5단계 체크리스트

1. **상태별 피드백 (State Polish)**:
   - 버튼 호버(`:hover`) 시 살짝 위로 떠오르는 미세한 이동(`transform: translateY(-1px)`)과 밝기 증가(`filter: brightness(1.05)`).
   - 클릭(`:active`) 시 눌리는 피드백(`transform: translateY(0)`).
   - 키보드 Tab 이동 시의 고급스러운 포커스 링(`:focus-visible`).
2. **미세 여백 및 수직 정렬 (Alignment Polish)**:
   - 아이콘과 텍스트가 나란히 있을 때 세로 중앙 정렬(`items-center`).
   - 제목과 본문, 본문과 버튼 사이의 간격 리듬 통일 (8px 배수).
3. **브라우저 네이티브 표면 마감 (Surface Polish)**:
   - 드래그 선택영역 색상(`::selection`)을 브랜드 컬러와 조화롭게 설정:
     ```css
     ::selection {
       background-color: rgba(37, 99, 235, 0.15);
       color: #0f172a;
     }
     ```
   - 커스텀 얇은 스크롤바 또는 모바일 부드러운 스크롤(`scroll-behavior: smooth;`).
4. **타이포그래피 균형 마감 (Typography Polish)**:
   - 제목 줄바꿈 균형: `text-wrap: balance;`
   - 본문 줄바꿈 및 넘침 방지: `word-break: keep-all; overflow-wrap: break-word;`
5. **검색 최적화(SEO) 및 모바일 공유 썸네일 마감 (SEO & OG Polish)**:
   - **제목 태그 공식 보정**: 제공된 PRD의 실제 지역명, 핵심 서비스, 상호명을 바탕으로 반드시 `[지역명] + [핵심 서비스] | [상호명]` 공식으로 교정 (임의 가상 키워드 사용 금지).
   - **설명문 80자 요약 보정**: PRD의 핵심 서비스 혜택과 대표 연락처를 기반으로 **80자 이내**로 압축 요약.
   - **카카오톡/SNS 공유 썸네일 미리보기 연동**: PRD의 대표 비주얼과 안내 카피를 바탕으로 회색 박스 대신 세련된 대표 이미지가 즉시 출력되도록 `og:title`, `og:description`, `og:image`(반드시 `https://` 절대 경로) 메타태그 무결성 마감.

---

## 2. 권장 호버 트랜지션 CSS 스니펫

```css
/* 공통 버튼 & 인터랙티브 카드 */
.btn-finish, .card-finish {
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 0.2s cubic-bezier(0.16, 1, 0.3, 1),
              background-color 0.15s ease;
}

.btn-finish:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px -5px rgba(37, 99, 235, 0.2);
}

.btn-finish:active {
  transform: translateY(0);
}
```
