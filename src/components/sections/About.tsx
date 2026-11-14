import { BadgeCheck } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion";
import { SafeImage } from "@/components/ui/SafeImage";
import { ABOUT_PILLARS } from "@/data/content";
import { IMAGES } from "@/data/images";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-16 bg-surface-bright py-16 md:scroll-mt-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal x={-24} className="relative min-w-0 lg:col-span-6">
            <div className="relative overflow-hidden rounded-2xl bg-surface-container shadow-2xl">
              <SafeImage
                src={IMAGES.accra}
                alt="Independence Arch at Black Star Square in Accra, Ghana"
                width={900}
                height={640}
                sizes="(min-width: 1024px) 560px, 100vw"
                className="h-72 w-full object-cover object-center sm:h-[460px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container/70 via-transparent to-transparent" aria-hidden />
              <div className="absolute inset-x-5 bottom-5 sm:inset-x-6 sm:bottom-20 lg:bottom-20">
                <span className="mb-1 block font-label text-label-sm font-bold uppercase tracking-wider text-secondary-fixed">
                  Authentic Experience
                </span>
                <p className="font-display text-headline-sm font-semibold text-white">
                  Connecting Travellers to Ghana&apos;s Living Legacy
                </p>
              </div>
            </div>

            <div className="relative -mt-4 ml-auto flex max-w-xs items-center gap-4 rounded-xl bg-secondary p-5 text-on-secondary shadow-xl sm:absolute sm:-bottom-6 sm:right-6 sm:mt-0">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/20">
                <BadgeCheck size={24} aria-hidden />
              </div>
              <div>
                <p className="font-label text-label-sm font-bold uppercase tracking-wider opacity-80">Official Standard</p>
                <p className="font-label text-label-md font-bold">Trusted Ghanaian Tourism &amp; Travel Partner</p>
              </div>
            </div>
          </Reveal>

          <Reveal x={24} className="min-w-0 space-y-6 lg:col-span-6">
            <span className="inline-block rounded-full bg-secondary-fixed px-3 py-1 font-label text-label-sm font-semibold uppercase tracking-wider text-on-secondary-fixed">
              About Our Company
            </span>
            <h2 id="about-title" className="text-headline-lg-mobile tracking-tight text-on-surface md:text-headline-lg">
              Curating Authentic Journeys &amp; Reliable Road Logistics Across Ghana
            </h2>
            <p className="leading-relaxed text-on-surface-variant">
              At LK Transport &amp; Tours, we blend genuine Ghanaian warmth with executive-grade transport
              execution. Whether you are arriving for cultural discovery, heritage reclamation,
              institutional delegations, or leisurely coastal getaways, we provide seamless, worry-free
              transport and bespoke travel itineraries tailored to your unique rhythm.
            </p>
            <p className="leading-relaxed text-on-surface-variant">
              From the bustling rhythm of Accra to the sacred monuments of Cape Coast and the tranquil
              waters of Ada Foah, our priority remains unmatched comfort, uncompromising safety, and
              professional local insight.
            </p>

            <Stagger as="ul" className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2" amount={0.25}>
              {ABOUT_PILLARS.map(({ icon: Icon, title, text }) => (
                <StaggerItem as="li" key={title} className="flex items-start gap-3 rounded-xl bg-surface-container-low p-4" y={16}>
                  <Icon size={22} className="mt-0.5 shrink-0 text-secondary" aria-hidden />
                  <div>
                    <h3 className="font-label text-label-md font-semibold text-on-surface">{title}</h3>
                    <p className="mt-0.5 text-body-sm text-on-surface-variant">{text}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
