"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/** Global motion defaults — automatically disables transforms for reduced-motion users. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
