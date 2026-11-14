import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "glass" | "soft";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-secondary text-on-secondary shadow-cta hover:bg-secondary-container",
  glass:
    "bg-white/10 text-white backdrop-blur-md hover:bg-white/20",
  soft: "bg-secondary-fixed text-on-secondary-fixed hover:bg-secondary-fixed-dim",
};

const sizes: Record<Size, string> = {
  md: "min-h-12 px-6 py-3 text-label-md",
  lg: "min-h-[52px] px-8 py-4 text-label-lg",
};

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  fullWidth?: boolean;
}

/** Link styled as a button — every CTA on this site is a link (tel:, wa.me, #anchor). */
export function Button({
  variant = "primary",
  size = "md",
  icon,
  fullWidth,
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={`inline-flex items-center justify-center gap-2.5 rounded-xl font-label font-semibold transition-all active:scale-[0.98] ${
        variants[variant]
      } ${sizes[size]} ${fullWidth ? "w-full" : ""} ${className}`}
      {...props}
    >
      {icon}
      <span>{children}</span>
    </a>
  );
}
