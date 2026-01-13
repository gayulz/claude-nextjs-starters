/**
 * NavLink 컴포넌트
 *
 * 네비게이션 링크 컴포넌트 (활성화 상태 표시 포함)
 * - 현재 경로와 일치하면 활성화 스타일 적용
 * - 호버 및 포커스 상태 스타일 제공
 *
 * 작성일: 2026-01-12
 * 작성자: gayul.kim
 */

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function NavLink({ href, children, className }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        'text-sm font-medium transition-colors hover:text-primary',
        isActive
          ? 'text-foreground'
          : 'text-muted-foreground',
        className
      )}
    >
      {children}
    </Link>
  );
}
