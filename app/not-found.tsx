/**
 * 404 Not Found 페이지
 *
 * 존재하지 않는 페이지에 접근했을 때 표시
 *
 * 작성일: 2026-01-12
 * 작성자: gayul.kim
 */

'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { PageLayout } from '@/components/templates/page-layout';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const router = useRouter();
  return (
    <PageLayout>
      <div className="container flex min-h-[calc(100vh-16rem)] flex-col items-center justify-center text-center">
        <div className="space-y-6 max-w-2xl">
          {/* 404 텍스트 */}
          <h1 className="text-9xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            404
          </h1>

          {/* 에러 메시지 */}
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            페이지를 찾을 수 없습니다
          </h2>

          <p className="text-lg text-muted-foreground">
            요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
            <br />
            URL을 확인하시거나 홈페이지로 돌아가주세요.
          </p>

          {/* 액션 버튼 */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button asChild>
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                홈으로 돌아가기
              </Link>
            </Button>
            <Button variant="outline" onClick={() => router.back()}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              이전 페이지
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
