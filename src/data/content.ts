import {
  Armchair,
  Briefcase,
  CalendarClock,
  Eye,
  Headset,
  IdCard,
  Landmark,
  type LucideIcon,
  Luggage,
  Map,
  Mic,
  Mountain,
  Package,
  PartyPopper,
  Route,
  Palette,
  Shield,
  ShieldCheck,
  Ship,
  Snowflake,
  Trees,
  Umbrella,
  Users,
  Wind,
  MoveVertical,
  Plane,
  Car,
  Banana,
  Bean,
  CarFront,
  CookingPot,
  Disc3,
  Fish,
  Flame,
  Guitar,
  Martini,
  MoonStar,
  Soup,
  TreePalm,
  UtensilsCrossed,
  Wine,
} from "lucide-react";
import { IMAGES } from "./images";

/* ---------- Navigation ---------- */
export interface NavItem {
  label: string;
  href: string;
  /** Section id that makes this link "active" while in view. */
  section: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home", section: "home" },
  { label: "About Us", href: "#about", section: "about" },
  { label: "Tour Packages", href: "#tours", section: "tours" },
  { label: "Food & Nightlife", href: "#experiences", section: "experiences" },
  { label: "Vehicle Rentals", href: "#vehicles", section: "vehicles" },
  { label: "Contact Us", href: "#contact", section: "contact" },
];

/** Bottom tab bar shown on phones only. */
export const TAB_ITEMS = [
  { label: "Home", href: "#home", section: "home", icon: "home" },
  { label: "Tours", href: "#tours", section: "tours", icon: "tours" },
  {
    label: "Vehicles",
    href: "#vehicles",
    section: "vehicles",
    icon: "vehicles",
  },
  { label: "About", href: "#about", section: "about", icon: "about" },
  { label: "Contact", href: "#contact", section: "contact", icon: "contact" },
] as const;

/* ---------- Hero ---------- */
export const HERO_STATS = [
  { value: "5", label: "Iconic Destinations" },
  { value: "100%", label: "Customized Itineraries" },
  { value: "Elite", label: "Fleet Selection" },
  { value: "Direct", label: "Telephone Support" },
] as const;

/* ---------- About ---------- */
export interface Feature {
  icon: LucideIcon;
  title: string;
  text: string;
}

export const ABOUT_PILLARS: Feature[] = [
  {
    icon: Route,
    title: "Personalized Planning",
    text: "Itineraries mapped strictly to your schedule.",
  },
  {
    icon: ShieldCheck,
    title: "Maintained Fleet",
    text: "Rigorous inspections before every dispatch.",
  },
  {
    icon: Map,
    title: "Local Expert Chauffeurs",
    text: "Deep cultural knowledge and regional routes.",
  },
  {
    icon: Headset,
    title: "Direct Voice Support",
    text: "Rapid coordination via telephone at any hour.",
  },
];

/* ---------- Tour packages ---------- */
export interface TourPackage {
  id: string;
  number: string;
  title: string;
  image: string;
  imageAlt: string;
  tags: [string, string];
  description: string;
  noteLabel: string;
  note: string;
  highlights: string[];
  metaLabel: string;
  meta: string;
}

export const TOURS: TourPackage[] = [
  {
    id: "accra",
    number: "01",
    title: "Accra – The Vibrant Capital",
    image: IMAGES.accra,
    imageAlt: "Black Star Square and the Independence Arch in Accra",
    tags: ["Culture & History", "Full Day & Multi-Day"],
    description:
      "Ghana's dynamic coastal metropolis bridging historic colonial heritage and thriving contemporary culture. Experience the energy of authentic open-air markets, presidential memorials, and bustling arts avenues.",
    noteLabel: "Historical Context",
    note: "Ghana's political heart and catalyst of independence in 1957, holding seminal monuments to Pan-African liberation.",
    highlights: [
      "Kwame Nkrumah Memorial Park",
      "Independence Square (Black Star)",
      "National Museum of Ghana",
      "Osu Oxford Street & Arts Centre",
      "Labadi Beachfront Excursion",
      "Jamestown & Historic Lighthouse",
    ],
    metaLabel: "Availability & Booking",
    meta: "Daily Private & Group Charters",
  },
  {
    id: "cape-coast",
    number: "02",
    title: "Cape Coast – A Journey Through History",
    image: IMAGES.capeCoast,
    imageAlt: "Cape Coast Castle cannons overlooking the Atlantic Ocean",
    tags: ["UNESCO Heritage", "Coastal Discovery"],
    description:
      "A profound historical journey into Ghana's colonial past, transatlantic slave trade history, and lush coastal biodiversity. An emotional, educational, and deeply reflective voyage.",
    noteLabel: "Historical Context",
    note: "Centuries-old coastal fortifications recognized by UNESCO, telling pivotal stories of world history, resilience, and return.",
    highlights: [
      "Cape Coast Castle Guided Walk",
      "Elmina Castle & Fishing Harbour",
      "Kakum National Park Canopy Walk",
      "Fort William & Historic Lookout",
      "Posuban Asafo Military Shrines",
      "Coastal Cuisine & Seafood Luncheon",
    ],
    metaLabel: "Tour Duration",
    meta: "Full Day or 2-Day Overnights",
  },
  {
    id: "ada",
    number: "03",
    title: "Ada – Nature, Relaxation and Adventure",
    image: IMAGES.ada,
    imageAlt: "Ada Foah estuary where the Volta River meets the Atlantic Ocean",
    tags: ["Waterfront & Adventure", "Eco-Tourism"],
    description:
      "Pristine estuary paradise where the freshwater Volta River converges with the Atlantic Ocean, celebrated for tranquil golden sandbanks, luxury water resorts, and maritime sports.",
    noteLabel: "Experience Highlight",
    note: "An unrivalled destination for calm retreats, riverbank gastronomy, aquatic wildlife, and romantic escapes.",
    highlights: [
      "Ada Foah River-Ocean Estuary",
      "Volta River Delta Boat Tour",
      "Aqua Safari Resort Amenities",
      "Island Excursions & Mangroves",
      "Water Sports: Jet Ski & Kayaking",
      "Crocodile Island Wildlife View",
    ],
    metaLabel: "Ideal Trip Type",
    meta: "Weekend Getaways & Corporate Retreats",
  },
  {
    id: "aburi",
    number: "04",
    title: "Aburi – The Beautiful Mountain Escape",
    image: IMAGES.aburi,
    imageAlt: "Tall royal palms lining a path in the Aburi Botanical Gardens",
    tags: ["Mountain Flora", "Scenic Retreat"],
    description:
      "Refreshing high-altitude haven nestled in the lush Akwapim hills. Renowned for its cool sub-tropical climate, historic royal botanical gardens, winding valleys, and master artisan woodcarvers.",
    noteLabel: "Experience Highlight",
    note: "The ultimate peaceful getaway just an hour's picturesque drive uphill from metropolitan Accra.",
    highlights: [
      "Aburi Botanical Gardens (Est. 1890)",
      "Aburi Wood Carving Craft Village",
      "Scenic Winding Mountain Pass Drive",
      "Akwapim Ridge Panoramic Views",
      "Organic Hillside Cocoa Tasting",
      "Colonial Governor's Hill Sanatorium",
    ],
    metaLabel: "Transit Time",
    meta: "50 Minutes from Central Accra",
  },
  {
    id: "akosombo",
    number: "05",
    title: "Akosombo – Discover the Power of the Volta",
    image: IMAGES.akosombo,
    imageAlt: "Akosombo Hydroelectric Dam and the expanse of Lake Volta",
    tags: ["Engineering Wonder", "Lake Excursion"],
    description:
      "Majestic inland lake scenery framed by Ghana's monumental engineering marvel and panoramic mountain landscapes. Experience breezy pontoon rides and lakeside luxury.",
    noteLabel: "Experience Highlight",
    note: "The hydroelectric cornerstone of post-independence Ghana paired with tranquil lake navigation.",
    highlights: [
      "Akosombo Hydroelectric Dam Tour",
      "Volta Lake Man-Made Reservoir Cruise",
      "Dodi Island Cruise Experience",
      "Volta Hotel Scenic Viewpoint",
      "Fresh Tilapia Gourmet Lakeside Dining",
      "Adomi Bridge Suspension Landmark",
    ],
    metaLabel: "Format",
    meta: "Day Trips & Weekend Lakeside Charters",
  },
];

/* ---------- Travel moments ---------- */
export const MOMENTS: Feature[] = [
  {
    icon: PartyPopper,
    title: "Cultural Festivals",
    text: "Witness traditional durbars, Homowo, Chale Wote, and festive celebrations across chieftaincy grounds.",
  },
  {
    icon: Umbrella,
    title: "Sandy Coastlines",
    text: "Unwind along Kokrobite, Busua, and Prampram sandy beaches lined with coconut groves.",
  },
  {
    icon: Palette,
    title: "Artisan Craft Hubs",
    text: "Collect hand-woven Kente cloth, bead jewelry, and authentic woodwork direct from Ghanaian makers.",
  },
  {
    icon: Trees,
    title: "Canopy Walkways",
    text: "Suspension bridges high within tropical rainforests offering safe, breathtaking canopy walks.",
  },
  {
    icon: Ship,
    title: "River Cruises",
    text: "Leisurely pontoon excursions along the Volta river enjoying live music and sunset horizons.",
  },
];

/* ---------- Ghanaian cuisine ---------- */
export type SpiceLevel = 1 | 2 | 3;

export interface Dish {
  id: string;
  name: string;
  /** Phonetic hint for visitors unfamiliar with the name. */
  pronunciation?: string;
  icon: LucideIcon;
  /** Optional photo in /public/images/food — a branded illustrated tile is shown when omitted. */
  image?: string;
  imageAlt?: string;
  tag: string;
  origin: string;
  description: string;
  pairing: string;
  spice: SpiceLevel;
}

export const DISHES: Dish[] = [
  {
    id: "jollof",
    name: "Jollof Rice",
    pronunciation: "JOL-off",
    icon: CookingPot,
    image: IMAGES.jollof,
    tag: "Signature Dish",
    origin: "Nationwide Favourite",
    description:
      "Smoky, tomato-rich rice slow-cooked with peppers, onions and aromatic spices — the dish at the heart of West Africa's friendliest rivalry.",
    pairing: "Grilled chicken, fried plantain & shito",
    spice: 2,
  },
  {
    id: "waakye",
    name: "Waakye",
    pronunciation: "WAA-chay",
    icon: UtensilsCrossed,
    image: IMAGES.waakye,
    tag: "Breakfast Classic",
    origin: "Northern Roots, Loved in Accra",
    description:
      "Rice and beans cooked with dried sorghum leaves for its signature deep colour, served street-side with a generous spread of sides.",
    pairing: "Gari, spaghetti, boiled egg, wele & shito",
    spice: 2,
  },
  {
    id: "banku-tilapia",
    name: "Banku & Grilled Tilapia",
    pronunciation: "BAN-koo",
    icon: Fish,
    image: IMAGES.banku,
    tag: "Coastal Favourite",
    origin: "Ga & Ewe Coastline",
    description:
      "Soft, gently tangy fermented corn and cassava dough paired with whole charcoal-grilled tilapia and fiery fresh-ground pepper.",
    pairing: "Fresh pepper with onions & tomatoes",
    spice: 3,
  },
  {
    id: "fufu",
    name: "Fufu & Light Soup",
    pronunciation: "FOO-foo",
    icon: Soup,
    image: IMAGES.fufu,
    tag: "Hearty Tradition",
    origin: "Ashanti Heritage",
    description:
      "Pounded cassava and plantain, smooth and stretchy, served in a spicy tomato light soup — traditionally enjoyed by hand.",
    pairing: "Goat meat, fish or palm-nut soup",
    spice: 2,
  },
  {
    id: "kelewele",
    name: "Kelewele",
    pronunciation: "KEH-leh-WEH-leh",
    icon: Banana,
    image: IMAGES.kelewele,
    tag: "Street Snack",
    origin: "Accra Night Markets",
    description:
      "Ripe plantain cubes tossed in ginger, chilli and spice, then fried until caramelised — Accra's favourite evening snack.",
    pairing: "Roasted groundnuts",
    spice: 2,
  },
  {
    id: "red-red",
    name: "Red Red",
    icon: Bean,
    image: IMAGES.beans,
    tag: "Vegetarian Friendly",
    origin: "Home-Style Comfort",
    description:
      "Black-eyed bean stew simmered in red palm oil and crowned with sweet fried plantain — wholesome, vibrant and plant-based.",
    pairing: "Gari & fried ripe plantain",
    spice: 1,
  },
];

export interface TickerItem {
  name: string;
  kind: "food" | "drink";
}

/** Extra dishes and local drinks surfaced in the scrolling ticker. */
export const MORE_DISHES: TickerItem[] = [
  { name: "Kenkey & Fried Fish", kind: "food" },
  { name: "Chichinga Kebabs", kind: "food" },
  { name: "Tuo Zaafi", kind: "food" },
  { name: "Groundnut Soup", kind: "food" },
  { name: "Kontomire Stew", kind: "food" },
  { name: "Ampesi", kind: "food" },
  { name: "Bofrot", kind: "food" },
  { name: "Fried Yam & Pepper", kind: "food" },
  { name: "Omo Tuo", kind: "food" },
  { name: "Sobolo", kind: "drink" },
  { name: "Asana", kind: "drink" },
  { name: "Brukina", kind: "drink" },
  { name: "Lamugin", kind: "drink" },
  { name: "Palm wine", kind: "drink" },
  { name: "Tigernut Drink", kind: "drink" },
];

/* ---------- Nightlife ---------- */
export interface NightExperience {
  id: string;
  icon: LucideIcon;
  title: string;
  area: string;
  time: string;
  description: string;
  vibes: [string, string];
}

export const NIGHTLIFE: NightExperience[] = [
  {
    id: "osu-strip",
    icon: Martini,
    title: "Osu Night Strip",
    area: "Oxford Street, Osu",
    time: "From 8 PM",
    description:
      "Oxford Street comes alive after dark with open-air bars, sidewalk grills, live DJs and a crowd that keeps the energy high until the early hours.",
    vibes: ["Bar Hopping", "Street Food"],
  },
  {
    id: "highlife-jazz",
    icon: Guitar,
    title: "Live Highlife & Jazz",
    area: "Osu & Labone",
    time: "From 9 PM",
    description:
      "Soulful evenings with live bands playing Highlife, Afro-jazz and palm-wine classics — the timeless soundtrack of Ghana.",
    vibes: ["Live Bands", "Laid-Back"],
  },
  {
    id: "rooftops",
    icon: Wine,
    title: "Rooftop Lounges",
    area: "Airport City & Cantonments",
    time: "Sunset Onwards",
    description:
      "Sleek sky-high terraces with handcrafted cocktails, skyline views and smooth Afrobeats — perfect for celebrations and date nights.",
    vibes: ["Cocktails", "City Views"],
  },
  {
    id: "beach-parties",
    icon: TreePalm,
    title: "Beachfront Parties",
    area: "Labadi & Kokrobite",
    time: "Weekends, Late",
    description:
      "Bonfires, drumming circles and DJ sets right on the sand, with the Atlantic breeze keeping the dance floor cool.",
    vibes: ["Beach Vibes", "Drumming"],
  },
  {
    id: "clubs",
    icon: Disc3,
    title: "Afrobeats & Amapiano Clubs",
    area: "East Legon & Osu",
    time: "From 11 PM",
    description:
      "Ghana's hottest dance floors pulsing with Afrobeats, Amapiano and Azonto — where the party rarely ends before sunrise.",
    vibes: ["Dancing", "Top DJs"],
  },
  {
    id: "night-markets",
    icon: Flame,
    title: "Night Food Markets",
    area: "Across Accra",
    time: "From 7 PM",
    description:
      "Smoky chichinga kebabs, hot kelewele and chilled sobolo from roadside stalls — Accra's late-night flavours at their best.",
    vibes: ["Street Eats", "Local Favourite"],
  },
];

export const NIGHT_RIDE_PERKS: Feature[] = [
  {
    icon: ShieldCheck,
    title: "Vetted Chauffeurs",
    text: "Licensed, sober drivers who know the city after dark.",
  },
  {
    icon: MoonStar,
    title: "On Standby All Night",
    text: "Your driver waits nearby until you're ready to leave.",
  },
  {
    icon: CarFront,
    title: "Door-to-Door Return",
    text: "Hotel or residence pickup and a safe drop-off.",
  },
];

/* ---------- Fleet ---------- */
export interface Spec {
  icon: LucideIcon;
  label: string;
}

export interface Vehicle {
  id: string;
  number: string;
  category: string;
  name: string;
  example: string;
  image: string;
  imageAlt: string;
  description: string;
  specs: [Spec, Spec, Spec, Spec];
}

export const VEHICLES: Vehicle[] = [
  {
    id: "executive-sedan",
    number: "01",
    category: "Sedans & Saloons",
    name: "Executive Sedan",
    example: "e.g. Toyota Camry / Equivalent",
    image: IMAGES.sedan,
    imageAlt: "Silver executive sedan parked in front of an upscale hotel",
    description:
      "Ideal for corporate meetings, diplomat transfers, and comfortable private commutes in and around Accra.",
    specs: [
      { icon: Users, label: "4 Passengers" },
      { icon: Snowflake, label: "Climate Control" },
      { icon: Luggage, label: "2-3 Bags" },
      { icon: IdCard, label: "Chauffeur Incl." },
    ],
  },
  {
    id: "luxury-suv",
    number: "02",
    category: "Luxury 4WD",
    name: "Luxury 4x4 SUV",
    example: "e.g. Toyota Land Cruiser Prado / V8",
    image: IMAGES.suv,
    imageAlt: "White luxury 4x4 SUV on a coastal road",
    description:
      "Built for executive dignity and rugged comfort across long-distance regional tours and all-weather terrain.",
    specs: [
      { icon: Users, label: "7 Passengers" },
      { icon: Mountain, label: "4WD All-Terrain" },
      { icon: Luggage, label: "Large Cargo" },
      { icon: Shield, label: "High Security" },
    ],
  },
  {
    id: "passenger-minibus",
    number: "03",
    category: "Minivans & Vans",
    name: "Passenger Minibus",
    example: "e.g. Toyota HiAce High-Roof",
    image: IMAGES.minibus,
    imageAlt: "White Toyota HiAce passenger minibus",
    description:
      "Perfect for extended family vacations, medium-sized tourist groups, university delegations, and airport shuttles.",
    specs: [
      { icon: Users, label: "14-15 Seats" },
      { icon: Wind, label: "Dual A/C Vents" },
      { icon: MoveVertical, label: "High Roof" },
      { icon: Briefcase, label: "Rear Luggage" },
    ],
  },
  {
    id: "luxury-coach",
    number: "04",
    category: "Tour Coaches",
    name: "Luxury Tour Coach",
    example: "Executive 30-33 Passenger Coach",
    image: IMAGES.coach,
    imageAlt: "Luxury tour coach travelling on a highway",
    description:
      "Dedicated luxury transport for large corporate retreats, church missions, school tours, and nationwide expeditions.",
    specs: [
      { icon: Users, label: "30-33 Seats" },
      { icon: Eye, label: "Panoramic Glass" },
      { icon: Mic, label: "PA Audio System" },
      { icon: Package, label: "Underfloor Bay" },
    ],
  },
];

/* ---------- Why choose us ---------- */
export const WHY_US: Feature[] = [
  {
    icon: Plane,
    title: "Convenient Transportation",
    text: "Doorstep hotel and residential pickups, Kotoka International Airport (ACC) direct terminal meets, and completely flexible routing.",
  },
  {
    icon: Armchair,
    title: "Superior Comfort",
    text: "Every vehicle in our inventory is fully air-conditioned, immaculately detailed before departure, and fitted with ergonomic seating.",
  },
  {
    icon: CalendarClock,
    title: "Tailored Tour Itineraries",
    text: "No rushed tourist traps. We pace stops according to your preferences, allowing you time to photograph, explore, and converse.",
  },
  {
    icon: Landmark,
    title: "Rich Cultural Discovery",
    text: "Experience genuine connection with local traditional custodians, Ghanaian folklore, craft artisans, and authentic food spots.",
  },
  {
    icon: Headset,
    title: "Dedicated Customer Support",
    text: "Direct telephonic assistance before, during, and after your trip. Real human coordinators ready to adjust plans immediately.",
  },
  {
    icon: Car,
    title: "Diverse Rental Options",
    text: "Versatile fleet options spanning compact saloons and rugged 4x4 SUVs to high-capacity 33-seater air-conditioned luxury tour coaches.",
  },
];
