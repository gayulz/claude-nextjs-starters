/**
 * FeatureCard 컴포넌트
 *
 * 주요 기능을 표시하는 카드 컴포넌트
 * - 아이콘, 제목, 설명을 포함
 * - 호버 시 애니메이션 효과
 *
 * 작성일: 2026-01-12
 * 작성자: gayul.kim
 */

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Feature } from '@/types';

interface FeatureCardProps extends Feature {}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="group relative overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
      <CardHeader>
        <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
