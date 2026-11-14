"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type RevealMode = "inview" | "mount";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Initial offset (px) */
  y?: number;
  x?: number;
  /** Initial scale (1 = none) */
  scale?: number;
  delay?: number;
  duration?: number;
  /** "inview" animates when scrolled into view, "mount" animates immediately */
  mode?: RevealMode;
  /** Fraction of the element that must be visible (inview mode) */
  amount?: number;
}

/** Fade/slide/scale reveal driven by motion, respecting reduced-motion via MotionConfig. */
export function Reveal({
  children,
  className,
  y = 24,
  x = 0,
  scale = 1,
  delay = 0,
  duration = 0.7,
  mode = "inview",
  amount = 0.2,
}: RevealProps) {
  const target = { opacity: 1, y: 0, x: 0, scale: 1 };
  const initial = { opacity: 0, y, x, scale: scale === 1 ? 1 : scale };

  return (
    <motion.div
      className={className}
      initial={initial}
      {...(mode === "inview"
        ? { whileInView: target, viewport: { once: true, amount } }
        : { animate: target })}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

const containerVariants = {
  hidden: {},
  show: {},
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

interface StaggerProps {
  children: ReactNode;
  className?: string;
  /** Seconds between each child */
  gap?: number;
  /** Seconds before the first child starts */
  delay?: number;
  mode?: RevealMode;
  amount?: number;
  as?: "div" | "ul" | "ol";
}

/** Parent orchestrator that staggers its StaggerItem children. */
export function Stagger({
  children,
  className,
  gap = 0.08,
  delay = 0,
  mode = "inview",
  amount = 0.15,
  as = "div",
}: StaggerProps) {
  const MotionComp = motion[as] as typeof motion.div;
  return (
    <MotionComp
      className={className}
      variants={{
        hidden: containerVariants.hidden,
        show: {
          ...containerVariants.show,
          transition: { staggerChildren: gap, delayChildren: delay },
        },
      }}
      initial="hidden"
      {...(mode === "inview"
        ? { whileInView: "show", viewport: { once: true, amount } }
        : { animate: "show" })}
    >
      {children}
    </MotionComp>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
  y?: number;
}

export function StaggerItem({
  children,
  className,
  as = "div",
  y = 24,
}: StaggerItemProps) {
  const MotionComp = motion[as] as typeof motion.div;
  return (
    <MotionComp
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: itemVariants.show,
      }}
    >
      {children}
    </MotionComp>
  );
}
