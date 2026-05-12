'use client'

import { LazyMotion } from 'framer-motion'

const loadFeatures = () => import('@/lib/motion-features').then(r => r.default)

export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <LazyMotion features={loadFeatures}>{children}</LazyMotion>
}
