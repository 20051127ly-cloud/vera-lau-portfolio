'use client';

import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion';

/**
 * 统一动效容器：
 * - LazyMotion + domAnimation 让 framer-motion 的特性按需加载，避免主包体积进入首屏
 * - reducedMotion="user" 自动尊重系统「减弱动态效果」设置
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
