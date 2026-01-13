/**
 * ThemeProvider 컴포넌트
 *
 * next-themes를 래핑하여 전체 애플리케이션에 다크모드 기능 제공
 * - SSR 플래시 방지
 * - localStorage 자동 관리
 * - 시스템 설정 감지
 *
 * 작성일: 2026-01-12
 * 작성자: gayul.kim
 */

'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
