import { Clock, Info, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SOCIAL_ICONS, WhatsAppIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion";
import { PRIMARY_PHONE, SITE } from "@/lib/site";

const iconTile =
  "flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary";
const eyebrow =
  "font-label text-label-sm font-bold uppercase tracking-wider text-secondary";
const card =
  "flex flex-col justify-between rounded-2xl bg-surface-container-lowest p-6 shadow-sm ";
const circleBtn =
  "flex h-11 w-11 items-center justify-center rounded-full transition-colors";

export function Contact() {
  const socials = SITE.socials.filter((s) => s.href);

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-16 bg-surface-container-low py-16 md:scroll-mt-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
        <SectionHeading
          id="contact-title"
          eyebrow="Direct Inquiries"
          title="Contact Lexford Kruz Transport & Tours"
          description="For rapid quotes and availability, please call our telephone desk directly. We do not require complex online booking forms or advance card payments."
        />

        <Stagger
          className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-4"
          amount={0.12}
        >
          <StaggerItem className={card} y={24}>
            <div className="space-y-4">
              <div className={iconTile}>
                <Phone size={26} aria-hidden />
              </div>
              <div>
                <span className={eyebrow}>Direct Dispatch Lines</span>
                <h3 className="mt-1 text-headline-sm text-on-surface">
                  Telephone Contacts
                </h3>
              </div>
              <p className="text-body-sm leading-relaxed text-on-surface-variant">
                Immediate voice coordination for charters, rentals, and
                customized tour scheduling.
              </p>
            </div>
            <div className="space-y-2 pt-6">
              {SITE.phones.map((p) => (
                <a
                  key={p.href}
                  href={p.href}
                  className="block text-headline-sm font-bold text-secondary hover:underline"
                >
                  {p.display}
                </a>
              ))}
            </div>
          </StaggerItem>

          <StaggerItem className={card} y={24}>
            <div className="space-y-4">
              <div className={iconTile}>
                <Mail size={26} aria-hidden />
              </div>
              <div>
                <span className={eyebrow}>Written Quotes</span>
                <h3 className="mt-1 text-headline-sm text-on-surface">
                  Official Email
                </h3>
              </div>
              <p className="text-body-sm leading-relaxed text-on-surface-variant">
                Submit full itineraries, group delegation schedules, or
                corporate billing requests.
              </p>
            </div>
            <div className="pt-6">
              <a
                href={`mailto:${SITE.email}`}
                className="font-label text-[13px] font-semibold tracking-normal text-secondary hover:underline"
              >
                {SITE.email}
              </a>
              <span className="mt-1 block text-body-sm text-on-surface-variant">
                Responses within 2 business hours
              </span>
            </div>
          </StaggerItem>

          <StaggerItem className={card} y={24}>
            <div className="space-y-4">
              <div className={iconTile}>
                <MapPin size={26} aria-hidden />
              </div>
              <div>
                <span className={eyebrow}>Operational Hub</span>
                <h3 className="mt-1 text-headline-sm text-on-surface">
                  Fleet Location
                </h3>
              </div>
              <address className="text-body-sm not-italic leading-relaxed text-on-surface-variant">
                {SITE.address.street}, {SITE.address.city},{" "}
                {SITE.address.region}, {SITE.address.countryName}. Serving all
                16 regions nationwide.
              </address>
            </div>
            <div className="pt-6">
              <span className="block font-label text-label-sm font-bold uppercase text-secondary">
                Coverage
              </span>
              <span className="text-body-sm text-on-surface">
                Nationwide Ghana Cross-Country
              </span>
            </div>
          </StaggerItem>

          <StaggerItem className={card} y={24}>
            <div className="space-y-4">
              <div className={iconTile}>
                <Clock size={26} aria-hidden />
              </div>
              <div>
                <span className={eyebrow}>Office Hours</span>
                <h3 className="mt-1 text-headline-sm text-on-surface">
                  Operating Schedule
                </h3>
              </div>
              <dl className="space-y-1.5 text-body-sm text-on-surface-variant">
                {SITE.hours.map((h) => (
                  <div
                    key={h.days}
                    className="flex justify-between gap-3 border-b border-surface-container pb-1"
                  >
                    <dt className="font-semibold text-on-surface">{h.days}</dt>
                    <dd>{h.time}</dd>
                  </div>
                ))}
              </dl>
              <p className="pt-1 font-label text-label-sm text-secondary">
                {SITE.emergencyNote}
              </p>
            </div>
            <div className="flex items-center gap-3 pt-6">
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className={`${circleBtn} bg-secondary text-on-secondary hover:bg-secondary-container`}
              >
                <WhatsAppIcon />
              </a>
              <a
                href={PRIMARY_PHONE.href}
                aria-label={`Call ${PRIMARY_PHONE.display}`}
                className={`${circleBtn} bg-primary-container text-on-primary hover:bg-secondary`}
              >
                <Phone size={20} aria-hidden />
              </a>
              {socials.map((s) => {
                const Icon = SOCIAL_ICONS[s.label as keyof typeof SOCIAL_ICONS];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={`${circleBtn} bg-surface-container text-on-surface hover:bg-secondary hover:text-white`}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </StaggerItem>
        </Stagger>

        <Reveal
          className="mt-10 flex flex-col items-start justify-between gap-6 rounded-2xl bg-surface-bright p-6 shadow-sm sm:flex-row sm:items-center md:mt-12"
          y={24}
        >
          <div className="flex items-start gap-4 sm:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary-fixed text-secondary">
              <Info size={24} aria-hidden />
            </div>
            <div>
              <h3 className="font-label text-label-md font-bold text-on-surface">
                Fast Quotes Without Complexity
              </h3>
              <p className="text-body-sm text-on-surface-variant">
                Our dispatchers provide immediate availability, vehicle
                specifications, and straightforward daily or journey rates over
                a brief telephone call.
              </p>
            </div>
          </div>
          <Button
            href={PRIMARY_PHONE.href}
            icon={<Phone size={18} aria-hidden />}
            className="w-full shrink-0 rounded-full sm:w-auto"
          >
            Speak With Us Now
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
