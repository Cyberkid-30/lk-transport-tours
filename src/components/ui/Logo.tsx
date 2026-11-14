import Link from "next/link";
import { SITE } from "@/lib/site";

interface LogoProps {
  /** Use light text/mark on dark backgrounds. */
  inverted?: boolean;
  href?: string;
}

export function Logo({ inverted = false, href = "#home" }: LogoProps) {
  return (
    <Link href={href} className="flex items-center gap-3 shrink-0" aria-label={`${SITE.name} — home`}>
      <span
        aria-hidden
        className={`flex h-10 w-10 items-center justify-center rounded-xl font-display text-[15px] font-extrabold tracking-tight ${
          inverted ? "bg-secondary text-on-secondary" : "bg-primary-container text-on-primary"
        }`}
      >
        LK
      </span>
      <span className="flex flex-col">
        <span
          className={`font-display text-headline-sm font-extrabold leading-none tracking-tight ${
            inverted ? "text-on-primary" : "text-primary-container"
          }`}
        >
          {SITE.shortName}
        </span>
        <span
          className={`mt-0.5 font-label text-label-sm font-bold uppercase tracking-widest ${
            inverted ? "text-secondary-fixed" : "text-secondary"
          }`}
        >
          {SITE.tagline}
        </span>
      </span>
    </Link>
  );
}
