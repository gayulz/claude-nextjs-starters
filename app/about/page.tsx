/**
 * About 페이지
 *
 * 프로젝트 소개 및 기술 스택 페이지
 *
 * 작성일: 2026-01-12
 * 작성자: gayul.kim
 */

import { Metadata } from 'next';
import { PageLayout } from '@/components/templates/page-layout';
import { ContentSection } from '@/components/templates/content-section';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: '소개',
  description: `${siteConfig.name}에 대해 알아보세요. 사용된 기술 스택과 시작 방법을 확인할 수 있습니다.`,
};

export default function AboutPage() {
  const techStack = {
    core: ['Next.js 16', 'React 19', 'TypeScript 5'],
    styling: ['Tailwind CSS v4', 'shadcn/ui', 'Lucide React'],
    libraries: ['next-themes', 'react-hook-form', 'zod', 'date-fns', 'nuqs'],
    devTools: ['ESLint', 'Prettier', 'Git'],
  };

  return (
    <PageLayout>
      <ContentSection className="py-24">
        <div className="space-y-12">
          {/* 페이지 헤더 */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              프로젝트 소개
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              {siteConfig.description}
            </p>
          </div>

          <Separator />

          {/* 주요 내용 */}
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>무엇인가요?</CardTitle>
                <CardDescription>
                  Next.js Starter Kit은 모던 웹 개발을 빠르게 시작할 수 있도록 돕는 스타터 템플릿입니다.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  다크모드, 반응형 디자인, shadcn/ui 컴포넌트, TypeScript 설정 등
                  프로덕션 레벨의 기능이 모두 구성되어 있어 바로 개발을 시작할 수 있습니다.
                </p>
                <p className="text-muted-foreground">
                  Atomic Design 원칙을 따르며, 검증된 오픈소스 라이브러리만을 사용하여
                  확장 가능하고 유지보수하기 쉬운 구조로 설계되었습니다.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>왜 만들었나요?</CardTitle>
                <CardDescription>
                  매번 새 프로젝트를 시작할 때마다 반복되는 초기 설정을 없애기 위해서입니다.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  다크모드 구현, 레이아웃 시스템, 컴포넌트 구조 등 기본적인 설정에 시간을 낭비하지 않고,
                  비즈니스 로직과 기능 개발에만 집중할 수 있습니다.
                </p>
                <p className="text-muted-foreground">
                  바퀴를 재발명하지 않고, 검증된 라이브러리와 패턴을 활용하여
                  안정적이고 확장 가능한 기반을 제공합니다.
                </p>
              </CardContent>
            </Card>
          </div>

          <Separator />

          {/* 기술 스택 */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">기술 스택</h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Core</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.core.map((tech) => (
                    <Badge key={tech} variant="default">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Styling</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.styling.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Libraries</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.libraries.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Dev Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.devTools.map((tech) => (
                    <Badge key={tech}>
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* 시작하기 */}
          <Card>
            <CardHeader>
              <CardTitle>시작하기</CardTitle>
              <CardDescription>
                몇 가지 간단한 단계로 바로 시작할 수 있습니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="font-medium">1. 저장소 클론</p>
                <code className="block rounded-md bg-muted p-3 text-sm">
                  git clone https://github.com/yourusername/nextjs-starter-kit.git
                </code>
              </div>

              <div className="space-y-2">
                <p className="font-medium">2. 의존성 설치</p>
                <code className="block rounded-md bg-muted p-3 text-sm">
                  npm install
                </code>
              </div>

              <div className="space-y-2">
                <p className="font-medium">3. 개발 서버 실행</p>
                <code className="block rounded-md bg-muted p-3 text-sm">
                  npm run dev
                </code>
              </div>

              <div className="space-y-2">
                <p className="font-medium">4. 브라우저에서 확인</p>
                <code className="block rounded-md bg-muted p-3 text-sm">
                  http://localhost:3000
                </code>
              </div>
            </CardContent>
          </Card>
        </div>
      </ContentSection>
    </PageLayout>
  );
}
