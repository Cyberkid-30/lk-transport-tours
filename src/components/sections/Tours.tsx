import { CircleCheck, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SafeImage } from "@/components/ui/SafeImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/motion";
import { TOURS, type TourPackage } from "@/data/content";
import { PRIMARY_PHONE } from "@/lib/site";

function TourCard({ tour }: { tour: TourPackage }) {
  return (
    <article
      aria-labelledby={`tour-${tour.id}`}
      className="grid grid-cols-1 overflow-hidden rounded-2xl bg-surface-container-lowest shadow-sm transition-shadow duration-300 hover:shadow-xl lg:grid-cols-12"
    >
      <div className="relative h-60 bg-surface-container sm:h-72 lg:col-span-5 lg:h-auto lg:min-h-[300px]">
        <SafeImage
          src={tour.image}
          alt={tour.imageAlt}
          fill
          sizes="(min-width: 1280px) 520px, (min-width: 1024px) 40vw, 100vw"
          className="object-cover"
        />
        <ul className="absolute left-4 top-4 flex flex-wrap gap-2 pr-4">
          <li className="rounded-full bg-primary-container px-3 py-1 font-label text-label-sm uppercase text-on-primary">{tour.tags[0]}</li>
          <li className="rounded-full bg-secondary px-3 py-1 font-label text-label-sm uppercase text-on-secondary">{tour.tags[1]}</li>
        </ul>
      </div>

      <div className="flex flex-col justify-between gap-6 p-6 sm:p-10 lg:col-span-7">
        <div className="space-y-3">
          <span className="font-label text-label-sm font-bold uppercase tracking-wider text-secondary">
            Destination {tour.number}
          </span>
          <h3 id={`tour-${tour.id}`} className="text-headline-sm text-on-surface sm:text-headline-md">
            {tour.title}
          </h3>
          <p className="text-on-surface-variant">{tour.description}</p>
          <div className="rounded-lg bg-surface-container-low p-3">
            <span className="block font-label text-label-sm font-semibold uppercase text-secondary">{tour.noteLabel}</span>
            <p className="text-body-sm text-on-surface">{tour.note}</p>
          </div>
        </div>

        <div>
          <h4 className="mb-3 font-label text-label-md font-bold uppercase tracking-wide text-on-surface">Key Tour Highlights</h4>
          <ul className="grid grid-cols-1 gap-2 text-body-sm text-on-surface-variant sm:grid-cols-2">
            {tour.highlights.map((h) => (
              <li key={h} className="flex items-center gap-2">
                <CircleCheck size={18} className="shrink-0 text-secondary" aria-hidden />
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-stretch justify-between gap-4 pt-2 sm:flex-row sm:items-center">
          <div>
            <span className="block font-label text-label-sm text-on-surface-variant">{tour.metaLabel}</span>
            <span className="font-label text-label-md font-bold text-on-surface">{tour.meta}</span>
          </div>
          <Button
            href={PRIMARY_PHONE.href}
            icon={<Phone size={18} aria-hidden />}
            className="w-full sm:w-auto"
            aria-label={`Call to enquire about the ${tour.title} tour`}
          >
            Call to Enquire<span className="hidden sm:inline">&nbsp;({PRIMARY_PHONE.display})</span>
          </Button>
        </div>
      </div>
    </article>
  );
}

export function Tours() {
  return (
    <section id="tours" aria-labelledby="tours-title" className="scroll-mt-16 bg-surface-container-low py-16 md:scroll-mt-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
        <SectionHeading
          id="tours-title"
          eyebrow="Destination Experiences"
          title="Featured Tour Packages Across Ghana"
          description="Embark on comprehensive, thoughtfully paced excursions highlighting the architectural wonders, coastal sanctuaries, natural rainforests, and historic bastions that define Ghana."
        />
        <div id="destinations" className="scroll-mt-20">
            <Stagger className="mt-12 space-y-8 md:mt-16 md:space-y-12" amount={0.1}>
              {TOURS.map((tour) => (
                <StaggerItem key={tour.id} y={32}>
                  <TourCard tour={tour} />
                </StaggerItem>
              ))}
            </Stagger>
        </div>
      </div>
    </section>
  );
}
