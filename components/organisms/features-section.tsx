/**
 * FeaturesSection 컴포넌트
 *
 * 주요 기능 소개 섹션
 * - Feature Card 그리드 (3열)
 * - 6개 주요 기능 표시
 * - 아이콘 + 제목 + 설명
 *
 * 작성일: 2026-01-12
 * 작성자: gayul.kim
 */

import {
  Moon,
  Package,
  Code,
  Smartphone,
  Zap,
  Palette,
} from 'lucide-react';
import { FeatureCard } from '@/components/molecules/feature-card';
import { Feature } from '@/types';

const features: Feature[] = [
  {
    icon: <Moon className="h-10 w-10" />,
    title: '다크모드 지원',
    description:
      'next-themes로 완벽한 다크모드 구현. 시스템 설정 자동 감지 및 localStorage 저장.',
  },
  {
    icon: <Package className="h-10 w-10" />,
    title: 'shadcn/ui',
    description:
      '22개 이상의 아름다운 컴포넌트. 완전히 커스터마이징 가능하고 소스 코드를 직접 소유.',
  },
  {
    icon: <Code className="h-10 w-10" />,
    title: 'TypeScript',
    description:
      '타입 안전한 개발 환경. Next.js 15 App Router 완벽 지원 및 Strict Mode 활성화.',
  },
  {
    icon: <Smartphone className="h-10 w-10" />,
    title: '반응형 디자인',
    description:
      '모바일부터 데스크톱까지 완벽한 반응형. Tailwind CSS 브레이크포인트 활용.',
  },
  {
    icon: <Zap className="h-10 w-10" />,
    title: '성능 최적화',
    description:
      'Next.js 15의 최신 기능으로 빠른 로딩. Server Components 우선 및 번들 최적화.',
  },
  {
    icon: <Palette className="h-10 w-10" />,
    title: 'Tailwind CSS v4',
    description:
      '최신 Tailwind v4 사용. OKLCH 색상 시스템으로 아름답고 접근성 높은 디자인.',
  },
];

export function FeaturesSection() {
  return (
    <section className="container py-24 sm:py-32">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          주요 기능
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          현대적인 웹 개발에 필요한 모든 것이 준비되어 있습니다
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}
