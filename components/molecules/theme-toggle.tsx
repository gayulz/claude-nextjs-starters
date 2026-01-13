/**
 * ThemeToggle 컴포넌트
 *
 * 다크모드와 라이트모드를 전환하는 토글 스위치
 * - Sun/Moon 아이콘으로 시각적 피드백 제공
 * - useMounted 훅으로 하이드레이션 이슈 방지
 *
 * 작성일: 2026-01-12
 * 작성자: gayul.kim
 */

'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { useMounted } from '@/hooks/use-mounted';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();

  // 마운트되지 않았으면 렌더링하지 않음 (하이드레이션 이슈 방지)
  if (!mounted) {
    return (
      <div className="flex items-center gap-2">
        <Sun className="h-4 w-4 text-muted-foreground" />
        <Switch disabled />
        <Moon className="h-4 w-4 text-muted-foreground" />
      </div>
    );
  }

  const isDark = theme === 'dark';

  return (
    <div className="flex items-center gap-2">
      <Sun
        className={`h-4 w-4 transition-colors ${
          isDark ? 'text-muted-foreground' : 'text-yellow-500'
        }`}
      />
      <Switch
        checked={isDark}
        onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
        aria-label="다크모드 토글"
      />
      <Moon
        className={`h-4 w-4 transition-colors ${
          isDark ? 'text-blue-400' : 'text-muted-foreground'
        }`}
      />
    </div>
  );
}
