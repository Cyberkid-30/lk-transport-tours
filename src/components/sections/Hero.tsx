import { Car, Compass } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/motion";
import { SafeImage } from "@/components/ui/SafeImage";
import { HERO_STATS } from "@/data/content";
import { IMAGES } from "@/data/images";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative w-full overflow-hidden bg-primary-container text-on-primary"
    >
      <Reveal
        mode="mount"
        scale={1.08}
        duration={1.6}
        className="absolute inset-0"
      >
        <div className="absolute inset-0" aria-hidden>
          <SafeImage
            src={IMAGES.hero}
            alt=""
            fill
            preload
            sizes="100vw"
            quality={70}
            className="object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary-container/85 to-primary-container/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-transparent to-transparent" />
        </div>
      </Reveal>

      <div className="relative mx-auto flex min-h-[620px] max-w-7xl flex-col justify-end px-5 py-16 sm:px-6 md:min-h-[720px] md:justify-center md:py-32 lg:px-12">
        <Reveal
          mode="mount"
          y={-12}
          delay={0.1}
          className="mb-6 inline-flex w-fit items-center gap-2.5 rounded-full bg-secondary/25 px-4 py-2 backdrop-blur-md"
        >
          <span
            className="h-2.5 w-2.5 animate-pulse rounded-full bg-secondary-fixed motion-reduce:animate-none"
            aria-hidden
          />
          <span className="font-label text-label-sm font-bold uppercase tracking-wider text-secondary-fixed">
            Premium Ghanaian Travel &amp; Transport
          </span>
        </Reveal>

        <Reveal mode="mount" y={-20} delay={0.2} className="mb-6 max-w-4xl">
          <h1
            id="hero-title"
            className="text-display-sm tracking-tight text-white md:text-display-lg"
          >
            Explore Ghana in Unmatched Comfort &amp; Style
          </h1>
        </Reveal>

        <Reveal mode="mount" y={-12} delay={0.3} className="mb-10 max-w-2xl">
          <p className="text-body-md leading-relaxed text-on-primary-container md:text-body-lg">
            LK Transport &amp; Tours offers bespoke guided tour packages to
            Ghana&apos;s most breathtaking destinations alongside premium
            vehicle rental solutions tailored for individuals, families, and
            corporate travellers.
          </p>
        </Reveal>

        <Reveal
          mode="mount"
          y={12}
          delay={0.4}
          className="mb-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5 md:mb-16"
        >
          <Button
            href="#tours"
            size="lg"
            icon={<Compass size={20} aria-hidden />}
          >
            Explore Tour Packages
          </Button>
          <Button
            href="#vehicles"
            size="lg"
            variant="glass"
            icon={<Car size={20} aria-hidden />}
          >
            View Rental Vehicles
          </Button>
        </Reveal>

        <Reveal
          mode="mount"
          y={16}
          delay={0.55}
          className="grid max-w-4xl grid-cols-2 gap-5 rounded-2xl bg-white/10 p-5 backdrop-blur-md sm:grid-cols-4 sm:gap-6 sm:p-6"
        >
          {HERO_STATS.map((s) => (
            <div key={s.label} className="flex flex-col-reverse">
              <dt className="mt-1 font-label text-label-sm uppercase text-on-primary-container">
                {s.label}
              </dt>
              <dd className="font-display text-headline-lg-mobile font-extrabold leading-none text-secondary-fixed md:text-headline-lg">
                {s.value}
              </dd>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
