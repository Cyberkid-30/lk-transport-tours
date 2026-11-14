import { JsonLd } from "@/components/JsonLd";
import { BottomTabs } from "@/components/layout/BottomTabs";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { CallToAction } from "@/components/sections/CallToAction";
import { Contact } from "@/components/sections/Contact";
import { Fleet } from "@/components/sections/Fleet";
import { Hero } from "@/components/sections/Hero";
import { Moments } from "@/components/sections/Moments";
import { Tours } from "@/components/sections/Tours";
import { WhyChoose } from "@/components/sections/WhyChoose";

export default function HomePage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-lg bg-secondary px-4 py-2 font-label text-label-md text-on-secondary focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="pt-16 md:pt-20">
        <Hero />
        <About />
        <Tours />
        <Moments />
        <Fleet />
        <WhyChoose />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
      <BottomTabs />
      <JsonLd />
    </>
  );
}
