import { MOMENTS } from "@/data/content";

export function Moments() {
  return (
    <section aria-labelledby="moments-title" className="bg-surface-bright py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
        <div className="mb-10 flex flex-col justify-between gap-6 md:mb-12 md:flex-row md:items-end">
          <div className="space-y-3">
            <span className="inline-block rounded-full bg-secondary-fixed px-3 py-1 font-label text-label-sm font-semibold uppercase tracking-wider text-on-secondary-fixed">
              Beyond the Landmarks
            </span>
            <h2 id="moments-title" className="text-headline-lg-mobile tracking-tight text-on-surface md:text-headline-lg">
              Curated Ghanaian Travel Moments
            </h2>
          </div>
          <p className="max-w-md text-on-surface-variant">
            Every journey with LK Transport &amp; Tours is enriched by authentic local encounters,
            artisanal markets, culinary discoveries, and panoramic trails.
          </p>
        </div>

        {/* Swipeable row on phones, grid from sm up */}
        <ul className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-5 [&::-webkit-scrollbar]:hidden">
          {MOMENTS.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="w-64 shrink-0 snap-start rounded-2xl bg-surface-container-lowest p-6 shadow-sm transition-shadow hover:shadow-md sm:w-auto"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                <Icon size={26} aria-hidden />
              </div>
              <h3 className="mb-2 text-headline-sm text-on-surface">{title}</h3>
              <p className="text-body-sm leading-relaxed text-on-surface-variant">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
