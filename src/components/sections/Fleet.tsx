import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SafeImage } from "@/components/ui/SafeImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VEHICLES, type Vehicle } from "@/data/content";
import { PRIMARY_PHONE } from "@/lib/site";

function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <article
      aria-labelledby={`vehicle-${vehicle.id}`}
      className="flex flex-col justify-between overflow-hidden rounded-2xl bg-surface-container-lowest shadow-sm transition-shadow duration-300 hover:shadow-xl"
    >
      <div>
        <div className="relative h-52 overflow-hidden bg-surface-container sm:h-56">
          <SafeImage
            src={vehicle.image}
            alt={vehicle.imageAlt}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <span className="absolute left-3 top-3 rounded-full bg-primary-container px-3 py-1 font-label text-label-sm text-on-primary">
            {vehicle.category}
          </span>
        </div>

        <div className="space-y-4 p-6">
          <div>
            <span className="font-label text-label-sm font-bold uppercase tracking-wide text-secondary">
              Category {vehicle.number}
            </span>
            <h3 id={`vehicle-${vehicle.id}`} className="mt-1 text-headline-sm text-on-surface">
              {vehicle.name}
            </h3>
            <p className="font-label text-label-sm text-on-surface-variant">{vehicle.example}</p>
          </div>
          <p className="text-body-sm text-on-surface-variant">{vehicle.description}</p>

          <ul className="grid grid-cols-2 gap-2 pt-2">
            {vehicle.specs.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-1.5 rounded bg-surface-container-low p-2 font-label text-label-sm text-on-surface-variant"
              >
                <Icon size={16} className="shrink-0 text-secondary" aria-hidden />
                <span>{label}</span>
              </li>
            ))}
          </ul>

          <div className="rounded-xl bg-secondary-fixed/30 p-3">
            <span className="block font-label text-label-sm text-on-secondary-fixed">Rental Pricing</span>
            <span className="font-label text-label-md font-bold text-secondary">Contact for Quote</span>
          </div>
        </div>
      </div>

      <div className="p-6 pt-0">
        <Button
          href={PRIMARY_PHONE.href}
          fullWidth
          icon={<Phone size={18} aria-hidden />}
          aria-label={`Call to enquire about the ${vehicle.name}`}
        >
          Call to Enquire
        </Button>
      </div>
    </article>
  );
}

export function Fleet() {
  return (
    <section id="vehicles" aria-labelledby="fleet-title" className="scroll-mt-16 bg-surface-container-low py-16 md:scroll-mt-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
        <SectionHeading
          id="fleet-title"
          eyebrow="Premium Fleet"
          title="Vehicles Available for Rent"
          description="Clean, comfortable, and well-maintained vehicles for private hire, family vacations, business travel, and group excursions. Contact us directly for daily and trip-based rental rates."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {VEHICLES.map((v) => (
            <VehicleCard key={v.id} vehicle={v} />
          ))}
        </div>
      </div>
    </section>
  );
}
