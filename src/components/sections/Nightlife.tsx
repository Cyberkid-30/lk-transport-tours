import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Equalizer, GlowOrbs } from "@/components/ui/effects";
import { WhatsAppIcon } from "@/components/ui/icons";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NIGHT_RIDE_PERKS, NIGHTLIFE, type NightExperience } from "@/data/content";
import { PRIMARY_PHONE, whatsappLink } from "@/lib/site";

function NightCard({ experience }: { experience: NightExperience }) {
  const { icon: Icon, id, title, area, time, description, vibes } = experience;

  return (
    <article
      aria-labelledby={`night-${id}`}
      className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 hover:border-secondary-fixed-dim/40 hover:bg-white/[0.08] hover:shadow-glow motion-safe:hover:-translate-y-1.5 md:p-8"
    >
      {/* Spotlight that blooms on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-secondary/40 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-on-secondary shadow-lg shadow-secondary/30 transition-transform duration-300 motion-safe:group-hover:-rotate-6 motion-safe:group-hover:scale-110">
          <Icon size={28} aria-hidden />
        </div>
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 font-label text-label-sm text-secondary-fixed">
          <span
            aria-hidden
            className="h-1.5 w-1.5 animate-pulse rounded-full bg-secondary-fixed motion-reduce:animate-none"
          />
          {time}
        </span>
      </div>

      <div className="relative space-y-1.5">
        <h3 id={`night-${id}`} className="text-headline-sm text-white">
          {title}
        </h3>
        <p className="flex items-center gap-1.5 font-label text-label-sm text-secondary-fixed-dim">
          <MapPin size={14} aria-hidden />
          {area}
        </p>
      </div>

      <p className="relative text-body-sm leading-relaxed text-primary-fixed-dim">{description}</p>

      <ul className="relative mt-auto flex flex-wrap gap-2 pt-1">
        {vibes.map((vibe) => (
          <li
            key={vibe}
            className="rounded-full border border-white/15 px-3 py-1 font-label text-label-sm uppercase text-on-primary/80"
          >
            {vibe}
          </li>
        ))}
      </ul>
    </article>
  );
}

function NightRideBanner() {
  return (
    <Reveal y={32} className="mt-12 md:mt-16">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-secondary to-on-secondary-fixed-variant p-6 shadow-cta sm:p-10 lg:p-12">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.12)_1px,transparent_0)] [background-size:20px_20px]"
        />
        <div
          aria-hidden
          className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-secondary-fixed/20 blur-3xl"
        />

        <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="space-y-4 lg:col-span-5">
            <span className="inline-block rounded-full bg-white/15 px-3 py-1 font-label text-label-sm font-semibold uppercase tracking-wider text-white">
              Safe Night Rides
            </span>
            <h3 className="text-headline-lg-mobile tracking-tight text-white md:text-headline-md">
              Party Freely. We&apos;ll Drive You Home.
            </h3>
            <p className="text-body-md leading-relaxed text-secondary-fixed">
              Book a private chauffeur for your night out. We&apos;ll take you from venue to venue
              and get you back to your hotel safely — no haggling, no waiting on the roadside.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Button
                href={whatsappLink(
                  "Hello LK Transport & Tours, I'd like to book a chauffeur for a night out in Accra.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                variant="soft"
                icon={<WhatsAppIcon width={20} height={20} />}
              >
                Book a Night Ride
              </Button>
              <Button
                href={PRIMARY_PHONE.href}
                variant="glass"
                icon={<Phone size={18} aria-hidden />}
                aria-label={`Call ${PRIMARY_PHONE.display} to book a night ride`}
              >
                Call Dispatch
              </Button>
            </div>
          </div>

          <Stagger as="ul" className="grid gap-4 sm:grid-cols-3 lg:col-span-7" gap={0.12} amount={0.3}>
            {NIGHT_RIDE_PERKS.map(({ icon: Icon, title, text }) => (
              <StaggerItem
                as="li"
                key={title}
                y={20}
                className="space-y-3 rounded-2xl bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-secondary">
                  <Icon size={22} aria-hidden />
                </div>
                <h4 className="font-label text-label-lg text-white">{title}</h4>
                <p className="text-body-sm text-secondary-fixed">{text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <p className="relative mt-8 border-t border-white/15 pt-4 font-label text-label-sm text-secondary-fixed">
          Most venues admit guests aged 18+. Please enjoy Ghana&apos;s nightlife responsibly.
        </p>
      </div>
    </Reveal>
  );
}

export function Nightlife() {
  return (
    <section
      id="nightlife"
      aria-labelledby="nightlife-title"
      className="relative isolate scroll-mt-16 overflow-hidden bg-primary-container py-16 text-on-primary md:scroll-mt-20 md:py-24"
    >
      <GlowOrbs />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
        <SectionHeading
          id="nightlife-title"
          tone="dark"
          eyebrow="Ghana After Dark"
          title="Experience Accra's Electric Nightlife"
          description="From open-air bars in Osu to rooftop lounges and beach bonfires, Ghana's nights pulse with music, flavour and warmth. Let us plan the evening and handle every ride in between."
        />

        <Reveal className="mt-6 flex justify-center" y={12} delay={0.15}>
          <p className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-label text-label-sm uppercase tracking-wider text-secondary-fixed backdrop-blur-md">
            <Equalizer />
            Highlife · Afrobeats · Amapiano · Azonto
          </p>
        </Reveal>

        <Stagger
          as="ul"
          className="mt-12 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-2 md:gap-6 lg:grid-cols-3"
          amount={0.1}
        >
          {NIGHTLIFE.map((experience) => (
            <StaggerItem as="li" key={experience.id} y={32}>
              <NightCard experience={experience} />
            </StaggerItem>
          ))}
        </Stagger>

        <NightRideBanner />
      </div>
    </section>
  );
}
