import { ChevronRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Reveal } from "@/components/ui/motion";
import { SOCIAL_ICONS, WhatsAppIcon } from "@/components/ui/icons";
import { NAV_ITEMS } from "@/data/content";
import { PRIMARY_PHONE, SITE } from "@/lib/site";

const socialBtn =
  "flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-on-primary transition-colors hover:bg-secondary";

export function Footer() {
  const socials = SITE.socials.filter((s) => s.href);
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-container pb-24 pt-16 text-on-primary-container md:pb-12">
      <Reveal className="mx-auto grid max-w-7xl grid-cols-1 gap-10 border-b border-outline-variant/20 px-5 pb-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-12" y={24}>
        <div className="space-y-4">
          <Logo inverted />
          <p className="text-body-sm leading-relaxed">
            Executive vehicular logistics, premium chauffeur rentals, and bespoke touring
            experiences engineered across Accra, Kumasi, and greater Ghana.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className={socialBtn}>
              <WhatsAppIcon width={18} height={18} />
            </a>
            {socials.map((s) => {
              const Icon = SOCIAL_ICONS[s.label as keyof typeof SOCIAL_ICONS];
              return (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className={socialBtn}>
                  <Icon width={18} height={18} />
                </a>
              );
            })}
          </div>
        </div>

        <nav aria-label="Footer" className="space-y-4">
          <h2 className="text-headline-sm text-on-primary">Quick Navigation</h2>
          <ul className="space-y-2.5 text-body-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="inline-flex items-center gap-2 transition-colors hover:text-on-primary">
                  <ChevronRight size={16} className="text-secondary-fixed-dim" aria-hidden />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-4">
          <h2 className="text-headline-sm text-on-primary">Direct Inquiries</h2>
          <ul className="space-y-4 text-body-sm">
            <li className="flex items-start gap-3">
              <Phone size={20} className="mt-0.5 shrink-0 text-secondary-fixed-dim" aria-hidden />
              <div>
                <span className="block font-label text-label-sm uppercase">Telephone Dispatch</span>
                <a href={PRIMARY_PHONE.href} className="font-medium text-on-primary hover:text-secondary-fixed-dim">
                  {PRIMARY_PHONE.display}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={20} className="mt-0.5 shrink-0 text-secondary-fixed-dim" aria-hidden />
              <div className="min-w-0">
                <span className="block font-label text-label-sm uppercase">Concierge Email</span>
                <a href={`mailto:${SITE.email}`} className="break-all font-medium text-on-primary hover:text-secondary-fixed-dim">
                  {SITE.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={20} className="mt-0.5 shrink-0 text-secondary-fixed-dim" aria-hidden />
              <div>
                <span className="block font-label text-label-sm uppercase">Fleet Base</span>
                <span className="text-on-primary">
                  {SITE.address.street}, {SITE.address.city}, {SITE.address.countryName}
                </span>
              </div>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-headline-sm text-on-primary">Operating Hours</h2>
          <dl className="space-y-2.5 text-body-sm">
            {SITE.hours.map((h) => (
              <div key={h.days} className="flex justify-between gap-4 border-b border-outline-variant/10 pb-1">
                <dt className="text-on-primary">{h.days}</dt>
                <dd>{h.time}</dd>
              </div>
            ))}
          </dl>
          <p className="flex items-center gap-1.5 pt-1 font-label text-label-sm text-secondary-fixed-dim">
            <Clock size={16} aria-hidden />
            {SITE.emergencyNote}
          </p>
        </div>
      </Reveal>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 pt-8 text-body-sm sm:px-6 md:flex-row lg:px-12">
        <p>© {year} {SITE.name} Ghana. All rights reserved.</p>
      </div>
    </footer>
  );
}
