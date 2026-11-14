/**
 * Remote imagery from the original design export.
 * Replace with files in /public/images (and local imports) for production
 * — see README → "Replacing images".
 */
const G = "https://lh3.googleusercontent.com/aida-public/";

export const IMAGES = {
  hero: "/images/places/hero-img.jpg",
  accra: "/images/places/accra.jpg",
  capeCoast: "/images/places/cape-coast.jpg",
  ada: "/images/places/ada.jpg",
  aburi: "/images/places/aburi.jpg",
  akosombo: "/images/places/akosombo.jpg",
  sedan: "/images/cars/sedan.png",
  suv: "/images/cars/suv.png",
  minibus: "/images/cars/minibus.png",
  coach: "/images/cars/coach.png",
} as const;
