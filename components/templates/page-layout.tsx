/**
 * PageLayout 템플릿 컴포넌트
 *
 * 기본 페이지 레이아웃 템플릿
 * - Header + Main + Footer 구조
 * - 모든 페이지에서 공통으로 사용
 *
 * 작성일: 2026-01-12
 * 작성자: gayul.kim
 */

import { Header } from '@/components/organisms/header';
import { Footer } from '@/components/organisms/footer';

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
