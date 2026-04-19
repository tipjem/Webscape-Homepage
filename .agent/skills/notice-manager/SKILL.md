---
name: notice-manager
description: 공지사항 자동 등록 스킬. 사용자가 `@notic 제목 / 내용` 형식으로 공지사항 등록을 요청하면 자동으로 로컬 데이터 모델(`src/data/notice.ts`)에 데이터를 삽입합니다.
---

# Notice Manager Skill

이 스킬은 사용자가 채팅에서 `@notic 제목 / 내용` 형태의 명령어를 입력할 때 발동됩니다. (경우에 따라 `@notice` 라고 입력할 수도 있습니다. 괄호 없이 무방합니다.)

## 동작 규칙 (Execution Rules)

1. **명령어 파싱**: 사용자가 입력한 텍스트에서 맨 처음 등장하는 슬래시 `/`를 기준으로 앞부분은 `title(제목)`, 뒷부분은 `content(내용)`으로 추출합니다. (만약 줄바꿈이 포함된 본문 내용이라면 그대로 유지합니다.)
2. **대상 파일 확인**: `src/data/notice.ts` 파일(경로: `d:\anti\anti-sample\webscape\src\data\notice.ts` 또는 윈도우/리눅스 환경에 맞는 현재 워크스페이스의 상대/절대경로)을 확인합니다.
3. **데이터 구성**:
   - `id`: 현재 타임스탬프(`Date.now().toString()`) 또는 기존 배열의 마지막 ID + 1
   - `title`: 추출한 제목 문자열
   - `content`: 추출한 내용 문자열
   - `date`: 오늘의 날짜 (예: `YYYY-MM-DD` 형식)
4. **파일 수정 (`replace_file_content` 또는 `multi_replace_file_content` 도구 사용)**:
   - `src/data/notice.ts`의 `export const notices: NoticeItem[] = [` 바로 아랫줄 혹은 마지막 `];` 윗줄에 새 객체를 밀어 넣습니다.
   - 예시 포맷:
     ```typescript
     {
         id: "고유ID",
         title: "추출한 제목",
         content: "추출한 내용",
         date: "YYYY-MM-DD"
     },
     ```
   - 반드시 문법 오류가 없도록 콤마(`,`) 구분을 신경써서 수정하세요.
5. **완료 보고**: 데이터 삽입 후 사용자에게 UI를 확인하도록 안내합니다 ("새 공지사항이 성공적으로 등록되었습니다. /support 페이지나 상세 페이지를 확인해 보세요!").

## 주의 사항
- 데이터 베이스(Supabase 등)에 연동하는 것이 **아니라**, 무조건 로컬 하드코딩된 `src/data/notice.ts` 파일을 텍스트 변환으로 수정해야 합니다. 
- 내용(content)에 줄바꿈이 있는 경우, JSON/문자열 표기시 템플릿 리터럴(\` \`) 이나 이스케이프된 문자열 `" \n "` 로 적절히 변환하여 TSX 파일 파싱 에러가 생기지 않도록 주의하세요 (가장 좋은 방법은 백틱을 사용하여 블록을 지정하는 것입니다).
