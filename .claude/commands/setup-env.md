---
description: '환경 변수 설정을 가이드하고 .env.local 파일을 생성합니다'
allowed-tools:
  [
    'Bash(cat:*)',
    'Bash(ls:*)',
    'Bash(echo:*)',
    'Bash(touch:*)',
    'Read',
  ]
---

# Claude 명령어: Setup Env

프로젝트 환경 변수 설정을 가이드하고 `.env.local` 파일을 생성합니다.

## 사용법

```
/setup-env                     # 대화형 환경 변수 설정
/setup-env --dev              # 개발 환경 설정
/setup-env --prod             # 프로덕션 환경 설정
/setup-env --show             # 현재 환경 변수 확인
/setup-env --template         # 템플릿만 생성
```

## 기능

### 🔧 대화형 설정 마법사
사용자의 입력을 받아 단계별로 환경 변수를 설정합니다.

### 📋 환경 변수 카테고리

#### 1️⃣ 사이트 설정 (필수)
- `NEXT_PUBLIC_SITE_URL` - 사이트 URL (예: https://mysite.com)
- `NEXT_PUBLIC_SITE_NAME` - 사이트 이름
- `NEXT_PUBLIC_ENVIRONMENT` - 실행 환경 (development/production)

#### 2️⃣ API 설정 (선택)
- `NEXT_PUBLIC_API_URL` - API 베이스 URL
- `API_SECRET_KEY` - API 시크릿 키 (비공개)
- `NEXT_PUBLIC_API_TIMEOUT` - API 타임아웃 (밀리초)

#### 3️⃣ 데이터베이스 (선택)
- `DATABASE_URL` - 데이터베이스 연결 문자열 (비공개)
- `DATABASE_POOL_SIZE` - 커넥션 풀 크기

#### 4️⃣ 인증 (선택)
- `NEXTAUTH_SECRET` - NextAuth 시크릿 (비공개)
- `NEXTAUTH_URL` - NextAuth URL

#### 5️⃣ 서드파티 서비스 (선택)
- `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` - Google Analytics ID
- `NEXT_PUBLIC_STRIPE_PUBLIC_KEY` - Stripe 공개 키
- `STRIPE_SECRET_KEY` - Stripe 시크릿 키 (비공개)

#### 6️⃣ 로깅 & 모니터링 (선택)
- `LOG_LEVEL` - 로그 레벨 (error/warn/info/debug)
- `NEXT_PUBLIC_SENTRY_DSN` - Sentry DSN

## 설정 템플릿

### 개발 환경 (.env.development)
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Next.js Starter Kit
NEXT_PUBLIC_ENVIRONMENT=development

# API
NEXT_PUBLIC_API_URL=http://localhost:3000/api
API_SECRET_KEY=dev_secret_key_here

# 데이터베이스
DATABASE_URL=postgresql://user:password@localhost:5432/nextjs_dev

# 인증
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=dev_nextauth_secret_here

# 로깅
LOG_LEVEL=debug
```

### 프로덕션 환경 (.env.production)
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SITE_NAME=Next.js Starter Kit
NEXT_PUBLIC_ENVIRONMENT=production

# API
NEXT_PUBLIC_API_URL=https://your-domain.com/api
API_SECRET_KEY=prod_secret_key_here

# 데이터베이스
DATABASE_URL=postgresql://user:password@prod-db-host:5432/nextjs_prod

# 인증
NEXTAUTH_URL=https://your-domain.com
NEXTAUTH_SECRET=prod_nextauth_secret_here

# 모니터링
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
LOG_LEVEL=warn
```

### 최소 설정 (.env.local)
```env
# 필수
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Next.js Starter Kit

# 선택 (API 사용 시)
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## 설정 프로세스

### 1️⃣ 환경 감지
```
현재 환경: development
.env.local 파일: 없음 ⚠️
기존 설정: 없음
```

### 2️⃣ 환경 변수 입력

```
🔧 환경 변수 설정 마법사

[필수 설정]
? SITE_URL을 입력하세요: (http://localhost:3000)
? SITE_NAME을 입력하세요: (Next.js Starter Kit)

[선택 설정 - API]
? API_URL을 설정하시겠습니까? (y/N):
? API_SECRET_KEY를 입력하세요:

[선택 설정 - 데이터베이스]
? DATABASE_URL을 설정하시겠습니까? (y/N):

[선택 설정 - 인증]
? NextAuth를 사용하시겠습니까? (y/N):
```

### 3️⃣ 검증

```
✅ 필수 환경 변수 확인
  - NEXT_PUBLIC_SITE_URL: http://localhost:3000 ✓
  - NEXT_PUBLIC_SITE_NAME: Next.js Starter Kit ✓

⚠️ 선택 환경 변수
  - DATABASE_URL: 미설정
  - NEXTAUTH_SECRET: 미설정

🔐 시크릿 키 (파일에 저장되지 않음)
  - API_SECRET_KEY: 입력됨 ✓
  - NEXTAUTH_SECRET: 입력됨 ✓
```

### 4️⃣ 파일 생성

```
📝 .env.local 파일 생성 중...

생성 완료: /workspace/claude-nextjs-starters/.env.local

✨ 설정이 완료되었습니다!

다음 단계:
1. npm run dev 로 개발 서버 시작
2. http://localhost:3000 에서 확인
3. 필요하면 추가 설정 수정

💡 팁:
- .env.local은 git에 커밋하지 마세요 (.gitignore에 등록됨)
- 팀 멤버와는 .env.example을 공유하세요
```

## 환경 변수 규칙

### 네이밍 컨벤션

#### 공개 변수 (클라이언트에서 접근 가능)
```
NEXT_PUBLIC_* 접두어 사용
예: NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_API_URL
```

#### 비공개 변수 (서버에서만 접근)
```
접두어 없음
예: API_SECRET_KEY, DATABASE_URL, NEXTAUTH_SECRET
```

### 값 포맷

| 변수 | 포맷 | 예시 |
|------|------|------|
| URL | `https://...` 또는 `http://...` | `https://mysite.com` |
| 포트 | 숫자 | `3000`, `5432` |
| 시크릿 | 복잡한 문자열 | `sk_live_abc123...` |
| 로그레벨 | error/warn/info/debug | `debug` |
| 환경 | development/staging/production | `production` |

## 주의사항

### 🔐 보안
```
❌ 금지 사항
- 시크릿 키를 public 변수로 지정
- 하드코딩된 비밀번호 사용
- .env 파일을 git에 커밋
- 환경 변수를 로그에 출력

✅ 권장 사항
- 각 환경마다 별도의 .env 파일 사용
- 시크릿은 환경 변수로 주입
- .env* 파일을 .gitignore에 등록
- 팀원과는 .env.example만 공유
```

### 🔄 프로덕션 배포
```
Vercel 배포 시:
1. Vercel 대시보드 → Settings → Environment Variables
2. 환경 변수 직접 입력
3. 코드에는 커밋하지 않기

Docker 사용 시:
1. docker-compose.env 파일 사용
2. secrets 또는 환경 변수로 전달
3. 이미지에 포함시키지 않기
```

## 문제 해결

### 환경 변수를 인식하지 못하는 경우

```bash
# 1. 파일명 확인
ls -la .env*

# 2. 파일 내용 확인
cat .env.local

# 3. 개발 서버 재시작
npm run dev

# 4. 빌드 캐시 초기화
rm -rf .next
npm run build
```

### 공개 변수가 노출되지 않는 경우

```bash
# NEXT_PUBLIC_ 접두어 확인
grep "NEXT_PUBLIC_" .env.local

# 빌드 후 확인
npm run build
grep "YOUR_VALUE" .next/
```

### 시크릿 키 누출 확지

```bash
# Git에 커밋된 시크릿 확인
git log -p | grep -i "secret\|key\|password"

# 즉시 재발급 권장!
```

## 팀 협업

### .env.example 파일 생성

```env
# 사이트 설정 (필수)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=
NEXT_PUBLIC_ENVIRONMENT=development

# API 설정 (선택)
# NEXT_PUBLIC_API_URL=
# API_SECRET_KEY=

# 데이터베이스 (선택)
# DATABASE_URL=

# 인증 (선택)
# NEXTAUTH_URL=
# NEXTAUTH_SECRET=
```

### 팀 가이드

```markdown
## 환경 변수 설정 가이드

1. .env.local 생성
   ```bash
   cp .env.example .env.local
   ```

2. /setup-env 실행
   ```bash
   /setup-env
   ```

3. 값 입력 (담당자에게 확인)

4. 개발 서버 시작
   ```bash
   npm run dev
   ```
```

## 참고 자료

### 공식 문서
- [Next.js 환경 변수](https://nextjs.org/docs/basic-features/environment-variables)
- [NextAuth.js 환경 설정](https://next-auth.js.org/configuration/options)
- [Vercel 환경 변수](https://vercel.com/docs/concepts/projects/environment-variables)

### 보안 모범 사례
- [OWASP 환경 변수 보안](https://owasp.org/www-community/attacks/Sensitive_Data_Exposure)
- [12 Factor App - Config](https://12factor.net/config)

이 커맨드로 프로젝트의 모든 환경 변수를 안전하게 설정할 수 있습니다.
