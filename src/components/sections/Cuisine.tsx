import { Phone, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Marquee, SpiceMeter } from "@/components/ui/effects";
import { WhatsAppIcon } from "@/components/ui/icons";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion";
import { SafeImage } from "@/components/ui/SafeImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DISHES, MORE_DISHES, type Dish } from "@/data/content";
import { PRIMARY_PHONE, whatsappLink } from "@/lib/site";

/** Brand-palette gradients cycled across cards that don't have a photo yet. */
const TILE_GRADIENTS = [
  "from-primary-container to-secondary-container",
  "from-tertiary-container to-secondary",
  "from-on-secondary-fixed to-on-tertiary-container",
] as const;

const dotGrid =
  "bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.14)_1px,transparent_0)] [background-size:18px_18px]";

function DishVisual({ dish, index }: { dish: Dish; index: number }) {
  if (dish.image) {
    return (
      <SafeImage
        src={dish.image}
        alt={dish.imageAlt ?? dish.name}
        fill
        loading="eager"
        sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-105"
      />
    );
  }

  const Icon = dish.icon;
  return (
    <div
      aria-hidden
      className={`absolute inset-0 bg-gradient-to-br ${TILE_GRADIENTS[index % TILE_GRADIENTS.length]}`}
    >
      <div className={`absolute inset-0 ${dotGrid}`} />
      <span className="absolute -bottom-6 right-3 font-display text-[7rem] font-extrabold leading-none text-white/10">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur-sm transition-transform duration-500 ease-out motion-safe:group-hover:-rotate-6 motion-safe:group-hover:scale-110">
          <Icon size={44} strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
}

function DishCard({ dish, index }: { dish: Dish; index: number }) {
  return (
    <article
      aria-labelledby={`dish-${dish.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-surface-container-lowest shadow-sm transition-all duration-300 hover:shadow-xl motion-safe:hover:-translate-y-1.5"
    >
      <div className="relative h-48 overflow-hidden bg-surface-container sm:h-52">
        <DishVisual dish={dish} index={index} />
        <span className="absolute left-4 top-4 rounded-full bg-secondary px-3 py-1 font-label text-label-sm uppercase text-on-secondary">
          {dish.tag}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <span className="font-label text-label-sm font-bold uppercase tracking-wider text-secondary">
            {dish.origin}
          </span>
          <h3
            id={`dish-${dish.id}`}
            className="mt-1 text-headline-sm text-on-surface"
          >
            {dish.name}
          </h3>
          {dish.pronunciation && (
            <p className="mt-0.5 font-label text-label-sm text-on-surface-variant">
              Say it: <span className="italic">{dish.pronunciation}</span>
            </p>
          )}
        </div>

        <p className="text-body-sm leading-relaxed text-on-surface-variant">
          {dish.description}
        </p>

        <div className="mt-auto flex items-end justify-between gap-4 rounded-lg bg-surface-container-low p-3">
          <div className="min-w-0">
            <span className="block font-label text-label-sm font-semibold uppercase text-secondary">
              Best Paired With
            </span>
            <span className="text-body-sm text-on-surface">{dish.pairing}</span>
          </div>
          <div className="shrink-0">
            <SpiceMeter level={dish.spice} />
          </div>
        </div>
      </div>
    </article>
  );
}

export function Cuisine() {
  return (
    <section
      id="cuisine"
      aria-labelledby="cuisine-title"
      className="scroll-mt-16 bg-surface-container-low py-16 md:scroll-mt-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
        <SectionHeading
          id="cuisine-title"
          eyebrow="Taste of Ghana"
          title="Ghanaian Dishes You Must Try"
          description="Food is the heartbeat of Ghanaian hospitality. From smoky jollof to street-side kelewele, our guides take you to trusted chop bars, local kitchens and lively food markets for an authentic taste of the nation."
        />

        <Reveal className="mt-10 md:mt-12" y={16} delay={0.1}>
          <Marquee label="More Ghanaian dishes to discover" duration={45}>
            {MORE_DISHES.map((name) => (
              <li
                key={name}
                className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-surface-container-lowest px-5 py-2.5 font-label text-label-md text-on-surface shadow-sm"
              >
                <UtensilsCrossed
                  size={16}
                  className="text-secondary"
                  aria-hidden
                />
                {name}
              </li>
            ))}
          </Marquee>
        </Reveal>

        <Stagger
          as="ul"
          className="mt-10 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          amount={0.1}
        >
          {DISHES.map((dish, i) => (
            <StaggerItem as="li" key={dish.id} y={32}>
              <DishCard dish={dish} index={i} />
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal
          className="relative mt-12 overflow-hidden rounded-2xl bg-primary-container p-6 text-on-primary shadow-xl sm:p-10 md:mt-16"
          y={32}
        >
          <div aria-hidden className={`absolute inset-0 ${dotGrid}`} />
          <div
            aria-hidden
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-secondary/40 blur-3xl"
          />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl space-y-2">
              <span className="inline-block rounded-full bg-secondary-fixed/20 px-3 py-1 font-label text-label-sm font-semibold uppercase tracking-wider text-secondary-fixed">
                Guided Food Tours
              </span>
              <h3 className="text-headline-sm text-white md:text-headline-md">
                Taste Accra With a Local Guide
              </h3>
              <p className="text-body-sm leading-relaxed text-primary-fixed-dim md:text-body-md">
                Add a chop-bar and street-food crawl to any tour package. We
                plan the route, pick the trusted stops, and handle the ride in
                between.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Button
                href={whatsappLink(
                  "Hello LK Transport & Tours, I'd like to add a Ghanaian food tour to my trip.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                icon={<WhatsAppIcon width={20} height={20} />}
              >
                Plan a Food Tour
              </Button>
              <Button
                href={PRIMARY_PHONE.href}
                variant="glass"
                icon={<Phone size={18} aria-hidden />}
                aria-label={`Call ${PRIMARY_PHONE.display} about food tours`}
              >
                Call Us
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
