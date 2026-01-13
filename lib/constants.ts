/**
 * 상수 정의 파일
 *
 * 프로젝트 전역에서 사용되는 상수 값
 *
 * 작성일: 2026-01-12
 * 작성자: gayul.kim
 */

/**
 * 반응형 브레이크포인트 (Tailwind 기준)
 */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

/**
 * 애니메이션 지속시간 (ms)
 */
export const ANIMATION_DURATION = {
  fast: 150,
  normal: 300,
  slow: 500,
} as const;

/**
 * Z-인덱스 계층
 */
export const Z_INDEX = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
} as const;
