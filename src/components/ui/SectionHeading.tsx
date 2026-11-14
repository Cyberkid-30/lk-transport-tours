interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  id?: string;
  align?: "center" | "left";
  as?: "h2" | "h3";
  tone?: "light" | "dark";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  align = "center",
  tone = "light",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={`space-y-4 ${centered ? "mx-auto max-w-3xl text-center" : ""}`}>
      <span
        className={`inline-block rounded-full px-3.5 py-1.5 font-label text-label-sm font-bold uppercase tracking-wider ${
          tone === "dark"
            ? "bg-secondary-fixed/20 text-secondary-fixed"
            : "bg-secondary/10 text-secondary"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        id={id}
        className={`text-headline-lg-mobile md:text-headline-lg tracking-tight ${
          tone === "dark" ? "text-white" : "text-on-surface"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className="text-body-md leading-relaxed text-on-surface-variant">{description}</p>
      )}
    </div>
  );
}
