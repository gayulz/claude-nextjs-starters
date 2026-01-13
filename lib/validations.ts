/**
 * Zod 스키마 검증 파일
 *
 * 폼 및 데이터 검증을 위한 zod 스키마 정의
 *
 * 작성일: 2026-01-12
 * 작성자: gayul.kim
 */

import { z } from 'zod';

/**
 * Contact 폼 스키마
 */
export const contactSchema = z.object({
  name: z.string().min(2, {
    message: '이름은 2자 이상이어야 합니다.',
  }),
  email: z.string().email({
    message: '유효한 이메일 주소를 입력하세요.',
  }),
  message: z.string().min(10, {
    message: '메시지는 10자 이상이어야 합니다.',
  }),
});

export type ContactFormData = z.infer<typeof contactSchema>;

/**
 * 뉴스레터 구독 스키마
 */
export const newsletterSchema = z.object({
  email: z.string().email({
    message: '유효한 이메일 주소를 입력하세요.',
  }),
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;
