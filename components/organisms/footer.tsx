/**
 * Footer 컴포넌트
 *
 * 사이트 푸터 컴포넌트
 * - 3열 그리드 레이아웃 (반응형)
 * - 프로젝트 정보, 빠른 링크, 소셜 링크
 * - 저작권 정보 표시
 *
 * 작성일: 2026-01-12
 * 작성자: gayul.kim
 */

import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Separator } from '@/components/ui/separator';
import { SocialLinks } from '@/components/molecules/social-links';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        {/* 3열 그리드 */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* 프로젝트 정보 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{siteConfig.name}</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              {siteConfig.description}
            </p>
          </div>

          {/* 빠른 링크 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">빠른 링크</h3>
            <nav className="flex flex-col space-y-2">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* 소셜 링크 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">소셜 미디어</h3>
            <SocialLinks />
            <p className="text-sm text-muted-foreground">
              프로젝트 업데이트를 팔로우하세요
            </p>
          </div>
        </div>

        {/* 구분선 */}
        <Separator className="my-8" />

        {/* 저작권 */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {siteConfig.creator.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with{' '}
            <Link
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4 hover:text-foreground"
            >
              Next.js
            </Link>
            {' '}and{' '}
            <Link
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4 hover:text-foreground"
            >
              shadcn/ui
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
