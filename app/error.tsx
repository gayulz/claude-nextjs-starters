/**
 * Error 페이지
 *
 * 런타임 에러 발생 시 표시
 *
 * 작성일: 2026-01-12
 * 작성자: gayul.kim
 */

'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { PageLayout } from '@/components/templates/page-layout';
import { AlertCircle, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // 에러 로깅 (선택사항)
    console.error('Error:', error);
  }, [error]);

  return (
    <PageLayout>
      <div className="container flex min-h-[calc(100vh-16rem)] flex-col items-center justify-center text-center">
        <div className="space-y-6 max-w-2xl">
          {/* 에러 아이콘 */}
          <div className="flex justify-center">
            <div className="rounded-full bg-destructive/10 p-6">
              <AlertCircle className="h-16 w-16 text-destructive" />
            </div>
          </div>

          {/* 에러 메시지 */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            문제가 발생했습니다
          </h1>

          <p className="text-lg text-muted-foreground">
            페이지를 불러오는 중 오류가 발생했습니다.
            <br />
            잠시 후 다시 시도하거나 홈페이지로 돌아가주세요.
          </p>

          {/* 에러 상세 (개발 환경) */}
          {process.env.NODE_ENV === 'development' && error.message && (
            <div className="rounded-lg border bg-muted p-4 text-left">
              <p className="text-sm font-mono text-destructive">
                {error.message}
              </p>
            </div>
          )}

          {/* 액션 버튼 */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button onClick={reset}>
              <RefreshCw className="mr-2 h-4 w-4" />
              다시 시도
            </Button>
            <Button variant="outline" asChild>
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                홈으로 돌아가기
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
