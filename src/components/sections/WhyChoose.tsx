import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/motion";
import { WHY_US } from "@/data/content";

export function WhyChoose() {
  return (
    <section aria-labelledby="why-title" className="bg-surface-bright py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
        <SectionHeading
          id="why-title"
          eyebrow="Our Operational Edge"
          title="Why Choose LK Transport & Tours"
          description="We combine punctuality, thorough maintenance protocols, and genuine hospitality to guarantee seamless road travel anywhere across Ghana."
        />
        <Stagger as="ul" className="mt-12 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-2 md:gap-8 lg:grid-cols-3" amount={0.15}>
          {WHY_US.map(({ icon: Icon, title, text }) => (
            <StaggerItem as="li"
              key={title}
              className="space-y-4 rounded-2xl bg-surface-container-low p-6 transition-colors hover:bg-surface-container md:p-8" y={20}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-on-secondary shadow-lg shadow-secondary/20">
                <Icon size={28} aria-hidden />
              </div>
              <h3 className="text-headline-sm text-on-surface">{title}</h3>
              <p className="leading-relaxed text-on-surface-variant">{text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}