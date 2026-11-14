"use client";

import { Flame, Pause, Play } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef, useState, type ReactNode } from "react";
import type { SpiceLevel } from "@/data/content";

/* -------------------------------------------------------------------------- */
/*  Marquee                                                                   */
/* -------------------------------------------------------------------------- */

interface MarqueeProps {
  /** `<li>` elements — rendered twice to create a seamless loop. */
  children: ReactNode;
  /** Accessible name for the list. */
  label: string;
  /** Seconds for one full loop. */
  duration?: number;
  reverse?: boolean;
  className?: string;
}

/**
 * Infinite horizontal ticker. Runs on the compositor (CSS transform), pauses
 * when off-screen, on hover/focus, or via the toggle (WCAG 2.2.2). Under
 * reduced motion it becomes a static, wrapped list.
 */
export function Marquee({ children, label, duration = 40, reverse = false, className = "" }: MarqueeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "100px" });
  const [paused, setPaused] = useState(false);
  const running = inView && !paused;

  return (
    <div ref={ref} className={`group/marquee relative ${className}`}>
      <div className="overflow-hidden motion-safe:[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div
          className={`flex w-max animate-marquee motion-reduce:w-full motion-reduce:animate-none group-hover/marquee:[animation-play-state:paused] group-focus-within/marquee:[animation-play-state:paused] ${
            running ? "" : "[animation-play-state:paused]"
          }`}
          style={{ animationDuration: `${duration}s`, animationDirection: reverse ? "reverse" : "normal" }}
        >
          <ul aria-label={label} className="flex shrink-0 gap-3 pr-3 motion-reduce:shrink motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:pr-0">
            {children}
          </ul>
          <ul aria-hidden className="flex shrink-0 gap-3 pr-3 motion-reduce:hidden">
            {children}
          </ul>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-label={paused ? "Play scrolling list" : "Pause scrolling list"}
        className="absolute right-0 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-surface-container-lowest text-secondary shadow-md transition-colors hover:bg-secondary hover:text-on-secondary motion-reduce:hidden"
      >
        {paused ? <Play size={14} aria-hidden /> : <Pause size={14} aria-hidden />}
      </button>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  GlowOrbs — ambient "club lights" for dark sections                        */
/* -------------------------------------------------------------------------- */

const ORBS = [
  { className: "-left-32 top-0 h-[28rem] w-[28rem] bg-secondary/30", x: [0, 80, 0], y: [0, 60, 0], duration: 18 },
  { className: "-right-24 top-1/3 h-96 w-96 bg-secondary-container/25", x: [0, -70, 0], y: [0, -50, 0], duration: 22 },
  { className: "bottom-0 left-1/3 h-80 w-80 bg-on-tertiary-container/25", x: [0, 50, -30, 0], y: [0, -40, 0], duration: 26 },
];

/** Slow-drifting blurred light sources. Animates only while visible. */
export function GlowOrbs() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  return (
    <div ref={ref} aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {ORBS.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-3xl will-change-transform ${orb.className}`}
          animate={inView ? { x: orb.x, y: orb.y, scale: [1, 1.15, 1] } : undefined}
          transition={{ duration: orb.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      {/* Subtle dot grid for texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] [background-size:24px_24px]" />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Equalizer — looping sound bars                                            */
/* -------------------------------------------------------------------------- */

export function Equalizer({ bars = 4, className = "" }: { bars?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref);

  return (
    <span ref={ref} aria-hidden className={`flex h-4 items-end gap-[3px] ${className}`}>
      {Array.from({ length: bars }, (_, i) => (
        <motion.span
          key={i}
          className="h-full w-[3px] origin-bottom rounded-full bg-current"
          initial={{ scaleY: 0.4 }}
          animate={inView ? { scaleY: [0.35, 1, 0.5, 0.85, 0.35] } : { scaleY: 0.4 }}
          transition={
            inView
              ? { duration: 0.9 + i * 0.17, repeat: Infinity, ease: "easeInOut", delay: i * 0.08 }
              : { duration: 0.3 }
          }
        />
      ))}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*  SpiceMeter — flames pop in one after another                              */
/* -------------------------------------------------------------------------- */

const SPICE_LABEL: Record<SpiceLevel, string> = { 1: "Mild", 2: "Medium", 3: "Hot" };

export function SpiceMeter({ level }: { level: SpiceLevel }) {
  return (
    <div className="flex items-center gap-2">
      <span className="font-label text-label-sm text-on-surface-variant">{SPICE_LABEL[level]}</span>
      <span role="img" aria-label={`Spice level ${level} of 3`} className="flex items-center gap-0.5">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="inline-flex"
            initial={{ opacity: 0, scale: 0.3, y: 6 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ delay: 0.2 + i * 0.12, type: "spring", stiffness: 420, damping: 14 }}
          >
            <Flame
              size={16}
              aria-hidden
              className={i < level ? "fill-secondary text-secondary" : "text-outline-variant"}
            />
          </motion.span>
        ))}
      </span>
    </div>
  );
}
