/**
 * HeroSection 컴포넌트
 *
 * 홈페이지 메인 히어로 섹션
 * - 그라디언트 타이틀 텍스트
 * - 반응형 텍스트 크기
 * - CTA 버튼 2개 (Primary + Outline)
 *
 * 작성일: 2026-01-12
 * 작성자: gayul.kim
 */

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function HeroSection() {
  return (
    <section className="container flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center text-center px-4">
      <div className="space-y-6 max-w-4xl">
        {/* 메인 타이틀 */}
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent">
            모던 웹 개발의
          </span>
          <br />
          <span className="bg-gradient-to-r from-accent via-pink-500 to-primary bg-clip-text text-transparent">
            완벽한 시작점
          </span>
        </h1>

        {/* 서브 타이틀 */}
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl md:text-2xl">
          Next.js 15, TypeScript, Tailwind CSS, shadcn/ui가 모두 준비되어 있습니다.
          <br className="hidden sm:inline" />
          다크모드, 반응형 디자인, Atomic Design까지 완벽하게 구성되었습니다.
        </p>

        {/* CTA 버튼 */}
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Button size="lg" asChild className="group">
            <Link href="/showcase">
              시작하기
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </Button>
        </div>

        {/* 기술 스택 Badge */}
        <div className="flex flex-wrap justify-center gap-2 pt-8">
          {['Next.js 15', 'TypeScript', 'Tailwind v4', 'shadcn/ui', 'React 19'].map((tech) => (
            <div
              key={tech}
              className="rounded-full border bg-muted/50 px-3 py-1 text-xs font-medium"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
