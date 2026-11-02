import { GalleryItem, ServiceCategory } from "@/types/salon";

/*
 * Business details for The Hair Studio (demo brand), Dieppe NB.
 * Photographs are the site's existing images; only the text around them has changed.
 */
export const BRAND_DATA = {
  name: "The Hair Studio",
  wordmark: "HAIR STUDIO",
  stylist: "Alex Morgan",
  descriptor: "COLOUR & STYLE · DIEPPE",
  locationLabel: "DIEPPE · NEW BRUNSWICK · CANADA",
  salon: "The Hair Studio",
  city: "Dieppe",
  province: "New Brunswick",
  country: "Canada",
  instagramHandle: "@yoursalon",
  instagramUrl: "https://www.instagram.com/",
  // Placeholder: replace with the client's own online booking page.
  bookingUrl: "https://squareup.com/ca/en/appointments",
  phone: "+1 506-555-0123",
  phoneHref: "tel:+15065550123",
  bridalEmail: "hello@yoursalon.com",
  colourHaircutNote:
    "Colour services don't include a haircut. Want a trim too? Please add the Add-On Haircut when booking.",
  bridalMessage:
    "Wedding bookings must be arranged directly with your stylist. Please message @yoursalon on Instagram or email hello@yoursalon.com to inquire.",
  hero: {
    headlineTop: "Beautiful hair",
    headlineAccent: "that feels like you.",
    supportingCopy:
      "Specializing in lived-in blondes and dimensional colour, we create personalized, wearable hair with a seamless grow-out and a finish that feels uniquely yours.",
    primaryCta: "BOOK AN APPOINTMENT",
    secondaryCta: "EXPLORE THE GALLERY",
    // Signature looks rotated through the interactive hero showcase (gallery ids).
    showcase: ["gal-11", "gal-13", "gal-4"],
  },
  artistry: {
    label: "LIVED-IN BLONDES & DIMENSIONAL COLOUR",
    title: "Personalized Colour, Designed Around You",
    copy: "Every appointment starts with your goals, your lifestyle, and how much upkeep feels right for you. Whether you love bright blonde, soft lived-in dimension, or a little of both, we create a look that feels personal and wearable, with a seamless grow-out.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85",
  },
  editorialFeature: {
    label: "EDITORIAL FEATURE",
    title: "THE ART OF DIMENSIONAL COLOUR",
    subtitle: "Depth, Contrast & Movement",
    copy: "Dimensional colour is for blondes, brondes, and brunettes who want depth, contrast, and movement rather than simply going lighter. Depending on the result you want, it may include highlights, lowlights, balayage, root melting, colour melting, and glossing.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=88",
  },
  about: {
    label: "MEET YOUR STYLIST",
    title: "Alex Morgan",
    credentials: ["Hair Stylist", "Lived-In Blondes", "Dimensional Colour"],
    copy: [
      "Alex Morgan is a hair stylist at The Hair Studio in Dieppe, New Brunswick, specializing in lived-in blondes and dimensional colour.",
      "Every service is personalized, with attention to each client's goals, lifestyle, and maintenance preferences, for hair that feels like you.",
    ],
    // Existing site photograph (a soft dimensional blonde); not a portrait of the stylist.
    image:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Soft, dimensional blonde hair",
  },
  studio: {
    label: "VISIT THE SALON",
    title: "Find Us at The Hair Studio in Dieppe",
    copy: "The Hair Studio is located in Dieppe, New Brunswick. Book online, call the salon, or reach out on Instagram. Bridal inquiries go directly to your stylist by email or Instagram.",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85",
    features: [
      { title: "The Hair Studio", detail: "Dieppe, New Brunswick, Canada" },
      { title: "Salon phone", detail: "+1 506-555-0123", href: "tel:+15065550123" },
      { title: "Instagram", detail: "@yoursalon", href: "https://www.instagram.com/" },
      { title: "Bridal inquiries", detail: "hello@yoursalon.com", href: "mailto:hello@yoursalon.com" },
    ],
  },
  finalFeature: {
    headline: "BEAUTIFUL HAIR THAT FEELS LIKE YOU.",
    supporting: "Request your appointment at The Hair Studio in Dieppe, New Brunswick.",
    image:
      "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&w=1600&q=88",
  },
};

/*
 * Service menu as supplied. Prices are CAD. Where no price or duration was supplied, the
 * field is intentionally left out. Card images are the site's existing photographs.
 */
export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "cut-style",
    title: "Cut + Style",
    highlight: "Cuts & Blowouts",
    image: "https://images.unsplash.com/photo-1595475884562-073c30d45670?auto=format&fit=crop&w=1000&q=85",
    services: [
      { id: "haircut-blowout", name: "Haircut + Blowout", price: 70, duration: "1 hour", description: ["Full haircut with wash and blowout."] },
      { id: "dry-haircut", name: "Dry Haircut", price: 60, duration: "30 minutes" },
      {
        id: "wash-blow-dry",
        name: "Wash + Blow Dry",
        price: 50,
        duration: "30 minutes",
        description: ["Shampoo and blow dry for clean, smooth, polished hair."],
      },
      {
        id: "blowout",
        name: "Blowout",
        price: 65,
        duration: "45 minutes",
        description: ["A styled blowout focused on shape, volume, and finish."],
      },
      { id: "fringe-trim", name: "Fringe Trim" },
    ],
  },
  {
    id: "colour-experiences",
    title: "Colour Experiences",
    highlight: "Blonde & Dimension",
    colourNote: true,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=85",
    services: [
      {
        id: "lived-in-blonde",
        name: "Lived-In Blonde",
        price: 300,
        duration: "3 hours 30 minutes",
        description: [
          "Soft, dimensional blonde with natural depth, seamless grow-out, and customized brightness. Includes customized lightening, root melt or shadow when needed, gloss, and blowout.",
        ],
      },
      {
        id: "classic-blonde",
        name: "Classic Blonde",
        price: 300,
        duration: "3 hours 30 minutes",
        description: [
          "Maximum blonde brightness with a more consistently blonde result from root to end. Includes customized lightening, gloss/toner, and blowout.",
        ],
      },
      {
        id: "dimensional-colour",
        name: "Dimensional Colour",
        price: 300,
        duration: "3 hours 30 minutes",
        description: [
          "For blondes, brondes, and brunettes seeking depth, contrast, and movement. May include highlights, lowlights, balayage, root melting, colour melting, and glossing. Includes custom gloss and blowout.",
        ],
      },
      {
        id: "transformation",
        name: "Transformation",
        price: 450,
        duration: "4 hours 30 minutes",
        description: [
          "For major changes, dark-to-light transformations, previous box colour, corrective work, or colour shifts requiring more time and product. Consultation may be required. Includes the full transformation service.",
        ],
      },
    ],
  },
  {
    id: "colour-maintenance",
    title: "Colour Maintenance",
    highlight: "Gloss & Refresh",
    colourNote: true,
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1000&q=85",
    services: [
      {
        id: "gloss-tone-blowout",
        name: "Gloss / Tone + Blowout",
        price: 95,
        duration: "1 hour 15 minutes",
        description: ["Refreshes faded colour and restores shine without lightening."],
      },
      {
        id: "face-frame-gloss",
        name: "Face Frame + Gloss",
        price: 120,
        duration: "1 hour 30 minutes",
        description: ["Strategic lightening around the face, finished with a custom gloss and blowout."],
      },
      {
        id: "refresh-quickie",
        name: "Refresh Quickie",
        price: 165,
        duration: "1 hour 30 minutes",
        description: ["Brightness around the face, bottom hairline, and part, finished with a custom gloss and blowout."],
      },
      {
        id: "the-partial",
        name: "The Partial",
        price: 200,
        duration: "2 hours 30 minutes",
        description: [
          "Maintains existing blonde or dimensional colour by refreshing visible areas without redoing the entire head. Includes custom gloss and blowout.",
        ],
      },
    ],
  },
  {
    id: "all-over-colour",
    title: "All-Over Colour",
    highlight: "Rich, Even Colour",
    colourNote: true,
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1000&q=85",
    services: [
      {
        id: "root-refresh",
        name: "Root Refresh",
        price: 110,
        duration: "1 hour 30 minutes",
        description: ["Traditional regrowth colour or grey coverage. No blonding. Includes colour, wash, and blowout."],
      },
      {
        id: "all-over-colour",
        name: "All-Over Colour",
        price: 150,
        duration: "1 hour 30 minutes",
        description: ["One consistent colour from roots to ends. No lightening. Includes colour, wash, and blowout."],
      },
      {
        id: "colour-dimension",
        name: "Colour + Dimension",
        price: 250,
        duration: "2 hours 30 minutes",
        description: [
          "Permanent root colour combined with dimensional work such as highlights and/or lowlights. Finished with custom gloss and blowout.",
        ],
      },
    ],
  },
  {
    id: "add-ons",
    title: "Add-Ons",
    highlight: "Add To Any Visit",
    image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=1000&q=85",
    services: [
      { id: "add-on-mask", name: "Add-On Mask" },
      {
        id: "add-on-haircut",
        name: "Add-On Haircut",
        description: [
          "Customers wanting a haircut with a colour service must add this separately. Haircuts are not included in colour services.",
        ],
      },
    ],
  },
  {
    id: "bridal",
    title: "Bridal",
    highlight: "By Inquiry",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1000&q=85",
    services: [
      { id: "bridal-hair", name: "Bridal Hair" },
      { id: "updo", name: "Updo" },
    ],
  },
];

/** Service names offered in the request form (bridal is arranged by Instagram/email). */
export const REQUEST_SERVICE_OPTIONS: string[] = [
  ...SERVICE_CATEGORIES.filter((c) => c.id !== "bridal").flatMap((c) =>
    c.services.filter((s) => s.id !== "add-on-mask" && s.id !== "add-on-haircut").map((s) => s.name)
  ),
  "Transformation Consultation",
  "Not sure yet — I'd like advice",
];

/*
 * The site's existing gallery photographs, unchanged. Captions describe what each photo shows;
 * they are hair inspiration, not claimed as the stylist's own client work.
 */
export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "gal-4",
    lookNumber: "04",
    title: "Spiced Cinnamon & Velvet Copper",
    category: "Copper",
    image:
      "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=1200&q=85",
    caption: "Rich, warm copper tones with a luminous, glossy finish.",
    tonalProfile: "Spiced Terracotta / Warm Golden Reflect",
    technique: "All-Over Colour · Gloss",
    aspect: "portrait",
  },
  {
    id: "gal-9",
    lookNumber: "09",
    title: "Rich Chocolate Lob",
    category: "Brunette",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1200&q=85",
    caption: "A collarbone-length cut with a glossy mocha finish.",
    tonalProfile: "Warm Mocha & Golden Walnut",
    technique: "All-Over Colour · Haircut",
    aspect: "square",
  },
  {
    id: "gal-11",
    lookNumber: "11",
    title: "French Bob with Micro-Fringe",
    category: "Haircuts",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=85",
    caption: "A chic jawline bob with a micro-fringe and soft interior texture.",
    tonalProfile: "Natural Dark Brunette Gloss",
    technique: "Haircut + Blowout",
    aspect: "tall",
  },
  {
    id: "gal-12",
    lookNumber: "12",
    title: "Platinum Pearl Finish",
    category: "Transformations",
    image:
      "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?auto=format&fit=crop&w=1200&q=85",
    caption: "Clean, bright platinum with a polished, styled finish.",
    tonalProfile: "Clean Ice Pearl",
    technique: "Transformation · Classic Blonde",
    aspect: "portrait",
  },
  {
    id: "gal-13",
    lookNumber: "13",
    title: "Defined Curls & Hydration",
    category: "Styling",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1200&q=85",
    caption: "Defined, high-moisture curls shaped to frame the face naturally.",
    tonalProfile: "Deep Espresso with Honey Highlights",
    technique: "Styling",
    aspect: "square",
  },
];
