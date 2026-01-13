/**
 * useMediaQuery 훅
 *
 * CSS 미디어 쿼리를 감지하여 반응형 로직 구현에 사용
 * SSR 안전 처리 포함
 *
 * 작성일: 2026-01-12
 * 작성자: gayul.kim
 *
 * @example
 * ```tsx
 * const isMobile = useMediaQuery('(max-width: 768px)');
 *
 * return (
 *   <div>
 *     {isMobile ? <MobileView /> : <DesktopView />}
 *   </div>
 * );
 * ```
 */

'use client';

import { useEffect, useState } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // 미디어 쿼리 생성
    const media = window.matchMedia(query);

    // 초기 값 설정
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    // 리스너 함수
    const listener = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    // 리스너 등록 (최신 브라우저)
    if (media.addEventListener) {
      media.addEventListener('change', listener);
    } else {
      // 레거시 브라우저 지원
      media.addListener(listener);
    }

    // 클린업
    return () => {
      if (media.removeEventListener) {
        media.removeEventListener('change', listener);
      } else {
        media.removeListener(listener);
      }
    };
  }, [matches, query]);

  return matches;
}
