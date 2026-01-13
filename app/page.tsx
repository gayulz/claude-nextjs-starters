/**
 * 홈페이지
 *
 * Next.js Starter Kit 메인 홈페이지
 * - Hero Section: 메인 소개 및 CTA
 * - Features Section: 주요 기능 소개
 *
 * 작성일: 2026-01-12
 * 작성자: gayul.kim
 */

import { PageLayout } from '@/components/templates/page-layout';
import { HeroSection } from '@/components/organisms/hero-section';
import { FeaturesSection } from '@/components/organisms/features-section';

export default function Home() {
  return (
    <PageLayout>
      <HeroSection />
      <FeaturesSection />
    </PageLayout>
  );
}
