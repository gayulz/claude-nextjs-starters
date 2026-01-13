/**
 * SocialLinks 컴포넌트
 *
 * 소셜 미디어 링크 그룹 컴포넌트
 * - GitHub, Twitter 등 소셜 미디어 아이콘 링크
 * - 호버 효과 및 접근성 고려
 *
 * 작성일: 2026-01-12
 * 작성자: gayul.kim
 */

import Link from 'next/link';
import { Github, Twitter } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

interface SocialLinksProps {
  className?: string;
}

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Link
        href={siteConfig.links.github}
        target="_blank"
        rel="noreferrer"
        className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        aria-label="GitHub"
      >
        <Github className="h-4 w-4" />
      </Link>
      {siteConfig.links.twitter && (
        <Link
          href={siteConfig.links.twitter}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          aria-label="Twitter"
        >
          <Twitter className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}
