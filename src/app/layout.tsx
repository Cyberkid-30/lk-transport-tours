import type { Metadata, Viewport } from "next";
import "@fontsource-variable/plus-jakarta-sans";
import "@fontsource-variable/inter";
import "./globals.css";
import { MotionProvider } from "@/components/MotionProvider";
import { SITE } from "@/lib/site";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0d1c32",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Guided Tours & Vehicle Rentals in Ghana`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "Ghana tours",
    "Accra tour packages",
    "Cape Coast Castle tour",
    "Kakum canopy walk",
    "Akosombo dam tour",
    "Aburi Botanical Gardens",
    "Ada Foah",
    "car rental Accra",
    "airport pickup Accra",
    "bus charter Ghana",
    "Ghanaian food tour",
    "Accra street food",
    "Accra nightlife",
    "Osu nightlife",
  ],
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/images/logo.png", type: "image/png" }],
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: "/",
    siteName: SITE.name,
    title: `${SITE.name} — Explore Ghana in Unmatched Comfort & Style`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Explore Ghana in Unmatched Comfort & Style`,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: true, email: true, address: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GH">
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
