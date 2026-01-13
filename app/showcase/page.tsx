/**
 * Showcase 페이지
 *
 * shadcn/ui 컴포넌트 쇼케이스 페이지
 * - Tier 1-3 컴포넌트 예제
 *
 * 작성일: 2026-01-12
 * 작성자: gayul.kim
 */

import { Metadata } from 'next';
import { PageLayout } from '@/components/templates/page-layout';
import { ContentSection } from '@/components/templates/content-section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { Skeleton } from '@/components/ui/skeleton';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { AlertCircle, CheckCircle, Info, Terminal } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: '쇼케이스',
  description: `${siteConfig.name}에서 사용 가능한 shadcn/ui 컴포넌트를 확인하세요.`,
};

export default function ShowcasePage() {
  return (
    <PageLayout>
      <ContentSection className="py-24">
        <div className="space-y-12">
          {/* 페이지 헤더 */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              컴포넌트 쇼케이스
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              shadcn/ui 컴포넌트를 활용한 다양한 예제를 확인할 수 있습니다.
            </p>
          </div>

          <Separator />

          {/* Buttons */}
          <Card>
            <CardHeader>
              <CardTitle>Buttons</CardTitle>
              <CardDescription>
                다양한 variant의 버튼 컴포넌트
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
            </CardContent>
          </Card>

          {/* Badges */}
          <Card>
            <CardHeader>
              <CardTitle>Badges</CardTitle>
              <CardDescription>
                상태 표시를 위한 Badge 컴포넌트
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Alerts */}
          <Card>
            <CardHeader>
              <CardTitle>Alerts</CardTitle>
              <CardDescription>
                중요 정보 표시를 위한 Alert 컴포넌트
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <Terminal className="h-4 w-4" />
                <AlertTitle>기본 알림</AlertTitle>
                <AlertDescription>
                  일반적인 정보를 표시하는 기본 Alert 컴포넌트입니다.
                </AlertDescription>
              </Alert>

              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>에러</AlertTitle>
                <AlertDescription>
                  에러 메시지를 표시하는 Destructive Alert 컴포넌트입니다.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Progress */}
          <Card>
            <CardHeader>
              <CardTitle>Progress</CardTitle>
              <CardDescription>
                진행률 표시를 위한 Progress 컴포넌트
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>25%</span>
                </div>
                <Progress value={25} />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>60%</span>
                </div>
                <Progress value={60} />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>90%</span>
                </div>
                <Progress value={90} />
              </div>
            </CardContent>
          </Card>

          {/* Skeleton */}
          <Card>
            <CardHeader>
              <CardTitle>Skeleton</CardTitle>
              <CardDescription>
                로딩 상태 표시를 위한 Skeleton 컴포넌트
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
                <Skeleton className="h-4 w-3/5" />
              </div>

              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Avatar */}
          <Card>
            <CardHeader>
              <CardTitle>Avatar</CardTitle>
              <CardDescription>
                사용자 프로필 이미지 표시를 위한 Avatar 컴포넌트
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>
                    <CheckCircle className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
              </div>
            </CardContent>
          </Card>

          {/* Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Card 컴포넌트를 사용하여 콘텐츠를 그룹화할 수 있습니다.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Feature Card</CardTitle>
                <CardDescription>With Badge</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Badge와 함께 사용하여 기능을 강조할 수 있습니다.
                </p>
                <div className="flex gap-2">
                  <Badge variant="secondary">New</Badge>
                  <Badge variant="outline">Popular</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Status Card</CardTitle>
                <CardDescription>With Icons</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Active</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </ContentSection>
    </PageLayout>
  );
}
