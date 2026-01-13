# Next.js Starter Kit

모던 웹 애플리케이션 개발을 위한 **프로덕션 레벨의 Next.js 스타터킷**입니다. 최신 기술 스택과 베스트 프랙티스가 모두 포함되어 있어, 즉시 프로젝트를 시작할 수 있습니다.

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-gayulz/claude--nextjs--starters-black?style=flat-square&logo=github)](https://github.com/gayulz/claude-nextjs-starters)
[![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.2-61dafb?style=flat-square&logo=react)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38b2ac?style=flat-square&logo=tailwind-css)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

</div>

---

## 📦 기술 스택

### 핵심 프레임워크
- **Next.js 16.1.1** - React 기반의 풀스택 프레임워크
- **React 19.2.3** - 최신 React 버전 지원
- **TypeScript 5** - 강타입 언어 지원

### UI & 스타일링
- **Tailwind CSS 4** - 유틸리티 우선 CSS 프레임워크
- **shadcn/ui** - 고급 컴포넌트 라이브러리
- **Radix UI** - 접근성 있는 UI 컴포넌트 원시
- **Lucide React** - 고품질 아이콘 라이브러리

### 상태 관리 & 폼
- **React Hook Form** - 성능 최적화 폼 관리
- **Zod** - TypeScript 기반 스키마 검증
- **nuqs** - URL 쿼리 문자열 상태 관리

### 추가 기능
- **next-themes** - 다크모드/라이트모드 토글
- **Sonner** - 아름다운 토스트 알림
- **date-fns** - 날짜 및 시간 유틸리티
- **Class Variance Authority** - CSS 클래스 생성 유틸리티

---

## ✨ 주요 기능

### 🎨 UI 컴포넌트 라이브러리
30개 이상의 프로덕션 레벨 컴포넌트가 미리 구성되어 있습니다.

#### UI 컴포넌트
- Button, Card, Badge, Alert, Avatar
- Input, Label, Dialog, Dropdown Menu
- Navigation Menu, Progress, Separator, Sheet
- Switch, Skeleton, Sonner (Toast)

#### 구조 컴포넌트 (Atomic Design)
- **Templates**: PageLayout - 페이지 레이아웃
- **Organisms**: Header, Footer, HeroSection, FeaturesSection, MobileNav
- **Molecules**: NavLink, SocialLinks, ThemeToggle, FeatureCard
- **Hooks**: useMediaQuery, useMounted

### 🎭 테마 지원
- 라이트/다크모드 완전 지원
- localStorage를 통한 테마 영속성
- 시스템 선호도 자동 감지
- 원활한 테마 전환 애니메이션

### 📱 반응형 디자인
- 모바일 우선 설계
- Tailwind CSS 반응형 유틸리티 (`sm:`, `md:`, `lg:`, `xl:`)
- 햄버거 메뉴 등 모바일 최적화 컴포넌트

### 🔐 폼 & 검증
- React Hook Form으로 성능 최적화
- Zod 스키마 검증
- 실시간 입력값 검증
- 타입 안전한 폼 처리

### 🌐 라우팅 구조
```
/                  - 홈페이지 (Hero + Features)
/about            - 소개 페이지
/showcase         - 프로젝트 쇼케이스
```

---

## 🚀 빠른 시작

### 설치

```bash
# 저장소 클론
git clone https://github.com/gayulz/claude-nextjs-starters.git
cd claude-nextjs-starters

# 의존성 설치
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 프로덕션 빌드

```bash
# 빌드
npm run build

# 프로덕션 서버 시작
npm start
```

---

## 📁 프로젝트 구조

```
claude-nextjs-starters/
├── app/                          # Next.js 앱 디렉토리
│   ├── layout.tsx               # 루트 레이아웃
│   ├── page.tsx                 # 홈페이지
│   ├── about/
│   │   └── page.tsx             # 소개 페이지
│   ├── showcase/
│   │   └── page.tsx             # 쇼케이스 페이지
│   ├── error.tsx                # 에러 바운더리
│   └── not-found.tsx            # 404 페이지
│
├── components/                   # React 컴포넌트
│   ├── ui/                      # 기본 UI 컴포넌트 (shadcn)
│   ├── molecules/               # 복합 컴포넌트 (Button + Icon 등)
│   ├── organisms/               # 섹션 단위 컴포넌트 (Header, Footer 등)
│   └── templates/               # 페이지 템플릿 (Layout 등)
│
├── hooks/                        # 커스텀 React Hooks
│   ├── use-media-query.ts       # 반응형 쿼리
│   └── use-mounted.ts           # 마운트 상태 감지
│
├── lib/                         # 유틸리티 및 상수
│   ├── constants.ts             # 전역 상수
│   └── validations.ts           # Zod 스키마
│
├── config/                      # 설정 파일
│   └── site.ts                  # 사이트 메타데이터
│
├── providers/                   # Context Providers
│   └── theme-provider.tsx       # 테마 프로바이더
│
├── types/                       # TypeScript 타입 정의
│   └── index.ts                 # 전역 타입
│
├── .claude/                     # Claude Code 설정
│   ├── settings.local.json      # 로컬 설정
│   ├── agents/                  # 커스텀 에이전트
│   │   ├── code-reviewer.md     # 코드 리뷰 에이전트
│   │   ├── test-auto-runner.md  # 테스트 자동 실행 에이전트
│   │   └── security-checker.md  # 보안 검사 에이전트
│   └── commands/                # 커스텀 커맨드
│       ├── pr.md                # Pull Request 생성
│       ├── merge.md             # 브랜치 병합
│       ├── branch.md            # 브랜치 관리
│       └── commit.md            # 커밋 작성
│
├── package.json                 # 의존성 관리
├── tsconfig.json                # TypeScript 설정
├── next.config.ts               # Next.js 설정
├── tailwind.config.ts           # Tailwind CSS 설정
├── postcss.config.mjs            # PostCSS 설정
└── README.md                    # 이 파일
```

---

## 💻 사용 예제

### 컴포넌트 사용

```tsx
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function Example() {
  return (
    <Card>
      <h2>안녕하세요!</h2>
      <p>다크모드를 지원하는 아름다운 카드입니다.</p>
      <Button>클릭하세요</Button>
    </Card>
  );
}
```

### 폼 처리

```tsx
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const schema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input {...register('name')} placeholder="이름" />
      <Input {...register('email')} placeholder="이메일" type="email" />
      <Button type="submit">전송</Button>
    </form>
  );
}
```

### 테마 토글

```tsx
import { ThemeToggle } from '@/components/molecules/theme-toggle';

export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <h1>내 앱</h1>
      <ThemeToggle />
    </header>
  );
}
```

### 반응형 디자인

```tsx
import { useMediaQuery } from '@/hooks/use-media-query';

export default function ResponsiveComponent() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div>
      {isMobile ? <MobileLayout /> : <DesktopLayout />}
    </div>
  );
}
```

---

## 🤖 Claude Code 통합 (Custom Agents)

이 스타터킷에는 Claude Code의 커스텀 에이전트가 3개 포함되어 있어, AI 개발 워크플로우를 대폭 간소화합니다.

### 1. 🔍 Code Reviewer
**역할**: 코드 품질 검사 및 리뷰
- 코드 구조 및 패턴 분석
- 성능 최적화 제안
- 버그 가능성 감지
- 모범 사례 준수 확인

**사용**:
```bash
# Claude Code에서 코드 리뷰 요청
/code-reviewer
```

### 2. 🧪 Test Auto Runner
**역할**: 자동 테스트 실행 및 검증
- 변경 사항 후 자동 테스트 실행
- 테스트 커버리지 분석
- 실패 테스트 자동 식별
- 테스트 결과 리포팅

**사용**:
```bash
# Claude Code에서 자동 테스트 실행
/test-auto-runner
```

### 3. 🔐 Security Checker
**역할**: 보안 취약점 검사
- XSS, CSRF, SQL Injection 등 위험 요소 감지
- 의존성 보안 취약점 확인
- 환경 변수 노출 확인
- 보안 모범 사례 검증

**사용**:
```bash
# Claude Code에서 보안 검사 실행
/security-checker
```

### 커스텀 커맨드

편리한 Git 워크플로우를 위한 커스텀 커맨드도 포함되어 있습니다:

- `/pr` - Pull Request 생성
- `/merge` - 브랜치 안전 병합
- `/branch` - 브랜치 관리
- `/commit` - 포맷팅 된 커밋 작성

---

## 🎯 사용 시나리오

### 1️⃣ 빠른 프로토타이핑
UI 컴포넌트가 미리 구성되어 있어 아이디어를 빠르게 프로토타입으로 만들 수 있습니다.

### 2️⃣ 팀 협업 프로젝트
TypeScript, 명확한 구조, 커스텀 에이전트로 팀의 코드 품질을 유지할 수 있습니다.

### 3️⃣ SaaS 애플리케이션 개발
인증, 폼 관리, 토스트 알림 등 SaaS에 필요한 기본 기능이 준비되어 있습니다.

### 4️⃣ 포트폴리오 웹사이트
다크모드 지원, 반응형 디자인, 아름다운 컴포넌트로 포트폴리오를 쉽게 만들 수 있습니다.

---

## 📚 문서 및 리소스

- [Next.js 공식 문서](https://nextjs.org/docs)
- [React 공식 문서](https://react.dev)
- [Tailwind CSS 공식 문서](https://tailwindcss.com/docs)
- [shadcn/ui 컴포넌트](https://ui.shadcn.com)
- [Radix UI](https://www.radix-ui.com)

---

## 🔧 설정 방법

### 사이트 정보 변경

`config/site.ts`에서 사이트 정보를 수정하세요:

```typescript
export const siteConfig: SiteConfig = {
  name: '내 프로젝트 이름',
  description: '프로젝트 설명',
  url: 'https://mysite.com',
  // ... 추가 설정
};
```

### 테마 색상 커스터마이징

`tailwind.config.ts`에서 색상 팔레트를 수정하세요:

```typescript
colors: {
  primary: '#3B82F6',
  secondary: '#10B981',
  // ... 추가 색상
}
```

### 환경 변수 설정

`.env.local` 파일 생성:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
# 추가 환경 변수
```

---

## 🚀 배포

### Vercel (권장)

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

### GitHub Pages

```bash
# static export 설정 후
npm run build
git push
```

### 기타 호스팅
Next.js는 Node.js를 지원하는 모든 호스팅에 배포 가능합니다.

---

## 📝 스크립트

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 시작
npm start

# 린팅 실행
npm run lint
```

---

## 🤝 기여

기여는 언제나 환영합니다! 다음 단계를 따라주세요:

1. 저장소를 Fork합니다
2. 기능 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`)
3. 변경 사항을 커밋합니다 (`git commit -m 'Add amazing feature'`)
4. 브랜치에 Push합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성합니다

---

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참고하세요.

---

## 👨‍💻 작성자

**gayul.kim**

- GitHub: [@gayulz](https://github.com/gayulz)
- Email: your.email@example.com

---

## 🙏 감사의 말

이 스타터킷은 다음 프로젝트들에 기반하고 있습니다:

- [Next.js](https://nextjs.org)
- [shadcn/ui](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com)

---

## 📧 지원

문제가 발생하면 [GitHub Issues](https://github.com/gayulz/claude-nextjs-starters/issues)에서 이슈를 등록해주세요.

---

<div align="center">

**⭐ 이 프로젝트가 도움이 됐다면 Star를 눌러주세요!**

Made with ❤️ by [gayul.kim](https://github.com/gayulz)

</div>
