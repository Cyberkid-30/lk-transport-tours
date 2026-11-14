/**
 * Single source of truth for business details.
 * Update these values once and the whole site (UI, SEO, JSON-LD) follows.
 */
export const SITE = {
  name: "LK Transport & Tours",
  shortName: "LK Transport",
  tagline: "Tours Ghana",
  description:
    "Guided tour packages to Ghana's most iconic destinations and premium vehicle rentals — sedans, 4x4 SUVs, minibuses and luxury coaches — with direct telephone support.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.lktransporttours.com",
  phones: [
    { display: "+233 24 000 0000", href: "tel:+233240000000" },
    { display: "+233 20 000 0000", href: "tel:+233200000000" },
  ],
  whatsapp: "https://wa.me/233240000000",
  email: "enquiries@lktransporttours.com",
  address: {
    street: "Airport Residential Area",
    city: "Accra",
    region: "Greater Accra Region",
    country: "GH",
    countryName: "Ghana",
  },
  hours: [
    { days: "Mon – Sat", time: "7:00 AM – 8:00 PM" },
    { days: "Sunday", time: "9:00 AM – 5:00 PM" },
  ],
  emergencyNote: "24/7 Airport Arrival Emergency On-Call",
  /** Leave `href` empty to hide a profile until the real URL is available. */
  socials: [
    { label: "Facebook", href: "" },
    {
      label: "Instagram",
      href: "https://www.instagram.com/lk__tours?srtk=MTJ2Y2lsc2loNWl5cg==",
    },
    { label: "TikTok", href: "" },
  ],
} as const;

export const PRIMARY_PHONE = SITE.phones[0];

export function whatsappLink(message?: string) {
  return message
    ? `${SITE.whatsapp}?text=${encodeURIComponent(message)}`
    : SITE.whatsapp;
}
