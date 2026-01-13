/**
 * MobileNav 컴포넌트
 *
 * 모바일 햄버거 메뉴 컴포넌트
 * - Sheet 컴포넌트를 사용하여 우측에서 슬라이드 인
 * - 링크 클릭 시 자동으로 Sheet 닫힘
 * - lg 미만 화면에서만 표시
 *
 * 작성일: 2026-01-12
 * 작성자: gayul.kim
 */

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { siteConfig } from '@/config/site';
import { Separator } from '@/components/ui/separator';
import { SocialLinks } from '@/components/molecules/social-links';

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="메뉴 열기">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <SheetHeader>
            <SheetTitle>{siteConfig.name}</SheetTitle>
          </SheetHeader>

          {/* 네비게이션 링크 */}
          <nav className="flex flex-col gap-4 mt-8">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* 구분선 */}
          <Separator className="my-8" />

          {/* 소셜 링크 */}
          <div className="space-y-4">
            <p className="text-sm font-medium">소셜 미디어</p>
            <SocialLinks />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
