/**
 * 사이트 설정 파일
 *
 * 사이트 전역에서 사용되는 메타데이터 및 네비게이션 설정
 *
 * 작성일: 2026-01-12
 * 작성자: gayul.kim
 */

import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Next.js Starter Kit',
  description: '모던 웹 개발을 위한 Next.js 스타터킷. 다크모드, shadcn/ui, TypeScript가 모두 준비되어 있습니다.',
  url: 'https://your-domain.com',
  ogImage: '/og-image.jpg',
  links: {
    github: 'https://github.com/yourusername/nextjs-starter-kit',
    twitter: 'https://twitter.com/yourusername',
  },
  creator: {
    name: 'Your Name',
    email: 'your.email@example.com',
  },
  nav: [
    {
      title: '홈',
      href: '/',
    },
    {
      title: '소개',
      href: '/about',
    },
    {
      title: '쇼케이스',
      href: '/showcase',
    },
  ],
};
