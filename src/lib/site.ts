import { CASE_STUDIES, DIVISIONS, DIVISIONS_DETAILED } from '@/data/tradecareData';

export const SITE = {
  name: 'TradeCare Africa',
  legalName: 'TradeCare Africa Limited',
  tagline: 'One company. The whole chain.',
  description:
    'TradeCare Africa is a women-led Kenyan agri-services company trading since 2014. Operating a comprehensive Service Ecosystem under a single supply-chain control tower to connect smallholder farmers with high-value formal markets.',
  email: 'info@tradecareafrica.com',
  // TODO(confirm): address wording kept as-is; only the map coordinates changed. Please confirm it matches the new pin.
  address: 'Nairobi, Kenya',
  fieldHubs: 'Field Hubs: Kiambu (Lari / Kinale) & Embu County',
  phone: '+254 781 050 960',
  logo: '/images/logo-dark.png',
  logoLight: '/images/logo-light.png',
  // TODO: LinkedIn and X have no profile on the original site either — replace '#' with real URLs.
  socials: [
    { label: 'LinkedIn', href: '#' },
    { label: 'Facebook', href: 'https://web.facebook.com/tradecareafrica/' },
    { label: 'X (Twitter)', href: '#' },
  ],
  downloads: [
    { label: 'Investor Deck (PDF)', href: '/assets/aistudio/TradeCare_Investor_Deck_V14_Presentation2_df68512b.pdf' },
    { label: 'Brand Colour Palette', href: '/assets/aistudio/Trade_Care_Africa_2579ed64.png' },
  ],
};

/** Office location (1°13'42.2"S 36°44'35.4"E). Used by the footer, contact page map and JSON-LD. */
export const LOCATION = {
  lat: -1.2283976,
  lng: 36.7431617,
  mapsUrl: 'https://www.google.com/maps?q=-1.2283976,36.7431617',
  directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=-1.2283976,36.7431617',
  embedUrl: 'https://www.google.com/maps?q=-1.2283976,36.7431617&z=16&output=embed',
} as const;

/** Base route for the Service Ecosystem (formerly /divisions; old URLs redirect in next.config.ts). */
export const ECOSYSTEM_PATH = '/service-ecosystem';

export const IMG = {
  hero: '/images/background/investors_background_image_description.png',
  founder: '/images/team/1.png',
  academy: '/images/background/slider-2-1.jpg',
  zaosafi: '/images/resources/trade-care-project-4.jpg',
  farmdatapod: '/images/background/farmer_background_image.png',
  tcert: '/images/background/consumer_background_image.png',
  market: '/images/projects/1.png',
  macadamia: '/images/projects/Untitled design/2.png',
  gardens: '/images/resources/about-four-1-11.jpg',
} as const;

/** Service Ecosystem product slug ← short product id */
export const PRODUCT_SLUG = {
  train: 'academy',
  produce: 'zaosafi',
  digitise: 'farmdatapod',
  assure: 'tcert',
  connect: 'market',
} as const;

export type ProductSlug = (typeof PRODUCT_SLUG)[keyof typeof PRODUCT_SLUG];

export const ecosystemList = DIVISIONS.map((d) => {
  const slug = PRODUCT_SLUG[d.id];
  return { ...d, slug, href: `${ECOSYSTEM_PATH}/${slug}`, image: IMG[slug], detail: DIVISIONS_DETAILED[slug] };
});

export const PROJECT_IMAGES: Record<string, string> = {
  embu: IMG.macadamia,
  lari: IMG.gardens,
};

export const projectList = CASE_STUDIES.map((c) => ({
  ...c,
  href: `/projects/${c.id}`,
  image: PROJECT_IMAGES[c.id] ?? IMG.hero,
}));

export type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

export const NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Our Partners & Network', href: '/about#partners' },
    ],
  },
  {
    label: 'Service Ecosystem',
    href: ECOSYSTEM_PATH,
    children: ecosystemList.map((d) => ({ label: `${d.verb.charAt(0)}${d.verb.slice(1).toLowerCase()} · ${d.name}`, href: d.href })),
  },
  {
    label: 'Impact',
    href: '/projects',
    children: projectList.map((p) => ({ label: p.title, href: p.href })),
  },
  { label: 'Founder', href: '/founder' },
  { label: 'Team', href: '/team' },
  { label: 'Contact', href: '/contact' },
];
