import { Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/motion";
import { WhatsAppIcon } from "@/components/ui/icons";
import { SafeImage } from "@/components/ui/SafeImage";
import { IMAGES } from "@/data/images";
import { PRIMARY_PHONE, SITE, whatsappLink } from "@/lib/site";

export function CallToAction() {
  return (
    <section aria-labelledby="cta-title" className="relative w-full overflow-hidden bg-primary-container py-16 text-on-primary md:py-20">
      <div className="absolute inset-0" aria-hidden>
        <SafeImage src={IMAGES.hero} alt="" fill sizes="100vw" quality={50} className="object-cover object-center opacity-15" />
        <div className="absolute inset-0 bg-primary-container/90" />
      </div>

      <Reveal className="relative mx-auto max-w-5xl space-y-8 px-5 text-center sm:px-6 lg:px-12" y={32}>
        <span className="inline-block rounded-full bg-secondary-fixed/20 px-3 py-1 font-label text-label-sm font-semibold uppercase tracking-wider text-secondary-fixed">
          Connect With Our Desk
        </span>
        <h2 id="cta-title" className="text-display-sm tracking-tight text-white md:text-display-lg">
          Ready to Explore Ghana?
        </h2>
        <p className="mx-auto max-w-3xl text-body-md leading-relaxed text-on-primary-container md:text-body-lg">
          Discover Ghana&apos;s beautiful destinations with LK Transport &amp; Tours. Whether you&apos;re
          planning a sightseeing experience or need a comfortable vehicle for your journey,
          we&apos;re ready to help. Speak directly with our travel team today.
        </p>

        <div className="flex flex-col items-stretch justify-center gap-3 pt-2 sm:flex-row sm:items-center sm:gap-5">
          <Button href={PRIMARY_PHONE.href} size="lg" icon={<Phone size={22} aria-hidden />}>
            Call Us Now: {PRIMARY_PHONE.display}
          </Button>
          <Button
            href={whatsappLink("Hello LK Transport & Tours, I would like to enquire about a tour and vehicle rental.")}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            variant="glass"
            icon={<WhatsAppIcon width={22} height={22} />}
          >
            WhatsApp Inquiry
          </Button>
        </div>

        <p className="flex flex-wrap items-center justify-center gap-2 pt-4 text-body-sm text-on-primary-container">
          <Clock size={18} className="text-secondary-fixed" aria-hidden />
          <span>
            Dispatch Available: {SITE.hours.map((h) => `${h.days}: ${h.time}`).join("  |  ")}
          </span>
        </p>
      </Reveal>
    </section>
  );
}
