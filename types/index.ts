/**
 * 타입 정의 파일
 *
 * 프로젝트 전역에서 사용되는 TypeScript 타입 정의
 *
 * 작성일: 2026-01-12
 * 작성자: gayul.kim
 */

import { ReactNode } from 'react';

/**
 * 네비게이션 아이템 타입
 */
export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
}

/**
 * 사이트 설정 타입
 */
export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    github: string;
    twitter?: string;
  };
  creator: {
    name: string;
    email: string;
  };
  nav: NavItem[];
}

/**
 * Feature 카드 타입
 */
export interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

/**
 * 소셜 링크 타입
 */
export interface SocialLink {
  name: string;
  href: string;
  icon: ReactNode;
}
