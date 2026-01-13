/**
 * useMounted 훅
 *
 * 컴포넌트가 클라이언트 사이드에 마운트되었는지 확인
 * SSR 환경에서 발생하는 하이드레이션 이슈 방지에 사용
 *
 * 작성일: 2026-01-12
 * 작성자: gayul.kim
 *
 * @example
 * ```tsx
 * const mounted = useMounted();
 *
 * if (!mounted) return null;
 * // 클라이언트 사이드 전용 코드
 * ```
 */

'use client';

import { useEffect, useState } from 'react';

export function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
