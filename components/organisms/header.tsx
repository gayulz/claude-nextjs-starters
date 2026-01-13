/**
 * Header 컴포넌트
 *
 * 메인 헤더 네비게이션 컴포넌트
 * - 반응형: 데스크톱에서는 전체 네비게이션, 모바일에서는 햄버거 메뉴
 * - sticky 포지션으로 스크롤 시 상단 고정
 * - 다크모드 토글 포함
 *
 * 작성일: 2026-01-12
 * 작성자: gayul.kim
 */

import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { NavLink } from '@/components/molecules/nav-link';
import { ThemeToggle } from '@/components/molecules/theme-toggle';
import { MobileNav } from './mobile-nav';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* 로고 */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {siteConfig.name}
          </span>
        </Link>

        {/* 데스크톱 네비게이션 (lg 이상) */}
        <nav className="hidden lg:flex items-center gap-6">
          {siteConfig.nav.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.title}
            </NavLink>
          ))}
        </nav>

        {/* 우측: 다크모드 토글 + 모바일 메뉴 */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
