/**
 * ContentSection 템플릿 컴포넌트
 *
 * 콘텐츠 섹션 래퍼 컴포넌트
 * - 일관된 패딩 및 간격 제공
 * - 선택적 배경색 및 구분선
 *
 * 작성일: 2026-01-12
 * 작성자: gayul.kim
 */

import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

interface ContentSectionProps {
  children: React.ReactNode;
  className?: string;
  withSeparator?: boolean;
  background?: 'default' | 'muted';
}

export function ContentSection({
  children,
  className,
  withSeparator = false,
  background = 'default',
}: ContentSectionProps) {
  return (
    <>
      <section
        className={cn(
          'py-16 sm:py-20 md:py-24',
          background === 'muted' && 'bg-muted/50',
          className
        )}
      >
        <div className="container">{children}</div>
      </section>
      {withSeparator && <Separator />}
    </>
  );
}
