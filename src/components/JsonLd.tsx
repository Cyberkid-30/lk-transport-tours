import { SITE } from "@/lib/site";
import { DISHES, NIGHTLIFE, TOURS, VEHICLES } from "@/data/content";

/** Structured data: TravelAgency / LocalBusiness with offers for rich results. */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["TravelAgency", "LocalBusiness"],
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phones[0].display.replace(/\s/g, ""),
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country,
    },
    areaServed: { "@type": "Country", name: SITE.address.countryName },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "07:00", closes: "20:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "09:00", closes: "17:00" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tour packages and vehicle rentals",
      itemListElement: [
        ...TOURS.map((t) => ({
          "@type": "Offer",
          itemOffered: { "@type": "TouristTrip", name: t.title, description: t.description },
        })),
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "TouristTrip",
            name: "Guided Ghanaian Food Tour",
            description: `Chop-bar and street-food tasting through Accra featuring ${DISHES.map((d) => d.name).join(", ")}.`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Nightlife chauffeur service",
            description: `Private chauffeured nights out in Accra: ${NIGHTLIFE.map((n) => n.title).join(", ")}.`,
          },
        },
        ...VEHICLES.map((v) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: `${v.name} rental`, description: v.description },
        })),
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe; "<" is escaped to avoid breaking out of the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
