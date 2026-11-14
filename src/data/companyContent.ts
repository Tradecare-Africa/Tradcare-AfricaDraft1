/**
 * Additional content filled in from D:\Tradecare\tradecare-content.md
 * (taken from the original tradecareafrica.com site on 2026-11-13).
 *
 * Only adds data that was missing from this project. Where the source disagreed
 * with existing text here, the existing text was kept; see CONTENT-NOTES.md.
 */

/** Founding year confirmed by the company (tradecare-content.md Change Log, Update 1). */
export const FOUNDED_YEAR = 2014;
/** Calculated so it stays correct. Static pages fix this at build time, so rebuild at least yearly. */
export const YEARS_IN_OPERATION = new Date().getFullYear() - FOUNDED_YEAR;

export const CONTACT_EXTRA = {
  phoneMobile: '(+254) 114 171 636',
  streetAddress: '106 Mwimuto/Kibichiku, Next to ACK Emmanuel Church, Nairobi, Kenya',
  facebook: 'https://web.facebook.com/tradecareafrica/',
  promoVideo: 'https://www.youtube.com/watch?v=rzfmZC3kg3M',
  // Map coordinates live in LOCATION (src/lib/site.ts).
  // TODO(confirm): street address text kept unchanged; confirm it still matches the new pin (-1.2283976, 36.7431617).
};

export const MISSION =
  'To revolutionize domestic and regional food systems by fusing global standards with African realities.';

export const WHY_CHOOSE_US_INTRO = `With over ${YEARS_IN_OPERATION} years of experience in developing market systems across global and domestic value chains, we bring proven strategies, localized insights, and a track record of real-world impact.`;

export const WHY_CHOOSE_US = [
  {
    title: 'Qualified Experts',
    text: 'As a women-owned and women-led social enterprise, we pride ourselves on an expert team driven by values of equity, excellence, and Afrocentric innovation.',
  },
  {
    title: 'We Are Connected',
    text: "We're deeply connected to a robust ecosystem of sector specialists, research institutions, and market actors—giving you access to cutting-edge insights, partnerships, and growth opportunities.",
  },
];

/** Track-record figures from the original site. Years are calculated from FOUNDED_YEAR. */
export const TRACK_RECORD = [
  { value: String(YEARS_IN_OPERATION), label: 'Years Experience' },
  { value: '3000', label: 'Extension Services' },
  { value: '26', label: 'Research Studies' },
  { value: '7', label: 'Agrarian Projects' },
  { value: '32', label: 'Nutrition Gardens' },
];

export const CONSULTING_SERVICES = [
  {
    title: 'Agricultural Extension Services (Mazao Safi Division)',
    summary:
      'Through our Mazao Safi platform, we deliver next generation agricultural extension and advisory services powered by our FarmDataPod digital system. Youth-led, tech-enabled, and farmer focused, our network of trained agricultural advisors supported by a core team of technical experts works closely with smallholders to boost productivity, enable compliance with food safety standards, and drive sustainable growth from the ground up.',
    points: [
      'Extension and Advisory Packages: Farm Pod data registration using the RASTA model (Register, Analyze, Share, Train and coach farmers to adjust action on the ground), with e-learning for young graduate extension agents.',
      'Inputs and Technology Package: pre-competitive partnerships with input and technology providers to improve availability, accessibility and affordability of inputs.',
      'Aggregation & Market Facilitation Package: commercial buyers sustain demand under result-based extension, lowering costs and improving commercial viability.',
      'Sustainability Certification Package: implementation services for reaching and maintaining certification through the digital platform.',
    ],
  },
  {
    title: 'Research and Impact Studies',
    summary:
      'We collaborate with development partners and private sector actors to conduct actionable research and in-depth market system diagnostics across agricultural sectors. Our impact studies go beyond data—they fuel evidence-based policymaking, strategic investment decisions, and scalable interventions that improve livelihoods, optimize value chains, and accelerate agri-sector transformation across Africa.',
    points: [
      'Research partner to major development research organizations, universities and the private sector.',
      'Research in agriculture, renewable energy, and water for productive use.',
      'Topics include gender, food safety, environmental and social compliance, inclusivity, skills development, and labour.',
    ],
  },
  {
    title: 'Implementation of Agrarian Projects',
    summary:
      'From concept to execution, we design and implement large-scale agricultural programs that create real impact for farmers, agribusinesses, and communities. In partnership with development organizations, we focus on projects that strengthen agri-SMEs, streamline supply chains, build institutional capacity, and deliver long-term results in food system resilience, compliance, and inclusive market access.',
    points: [
      'Helping SMEs organize their supply chains, build long-term connections to farmers and other suppliers, and optimize internal systems.',
      'Food systems for peri-urban dwellers (nutrition and kitchen gardens), institutions (companies and schools), and slum dwellers.',
      'Environmental Social Governance (ESG) strategy design for companies.',
    ],
  },
  {
    title: 'Agri-Nutrition Gardens Construction & Implementation',
    summary:
      'Our innovative Agri-Nutrition Garden model is engineered for food security and water efficiency. Each garden features a smart base-reservoir irrigation system that stores water for gradual crop uptake, ensuring high-yield, nutrient-rich produce even in water-scarce settings. These gardens support household nutrition, empower women and youth, and serve as practical learning labs in schools and communities.',
    points: [
      'Kitchen gardens for urban and peri-urban dwellings: fresh, nutritious produce at the doorstep, improving food security and cutting food spending.',
      'Nutrition gardens for schools and institutions: base water reservoir feeding crops by capillary action through an irrigation wick; package includes quality seedlings, organic and biological inputs, a production manual, and access to the Mazao Safi e-learning platform.',
    ],
  },
];

export const NUTRITION_GARDEN_PHOTOS = Array.from({ length: 12 }, (_, i) => `/images/services/agri-nutrition/${i + 1}.jpg`);

export const RESEARCH_PORTFOLIO = [
  { period: '2022', country: 'Kenya', summary: 'Evaluation of opportunities for food safety public diplomacy to promote access to safe and healthy food for all in Kenya.' },
  { period: '2022', country: 'Kenya', summary: 'Evaluation of opportunities to reduce food waste and food loss in Nairobi urban markets through locally driven innovations and partnerships between food retailers and the circular economy. Development of gender and sexual harassment model policies and training of management and gender committees.' },
  { period: '2020–2021', country: 'Tanzania', summary: "Support to 16 companies in horticulture on women's labour issues, focusing on gender violence and sexual harassment." },
  { period: '2019–2021', country: 'Tanzania', summary: "Increasing competitiveness of Tanzania's horticulture, tea and coffee sectors through wider adoption of standards. Developed guidelines and conducted TOT for 150 extension workers and 15 auditors on sustainability standards, focusing on gender and youth." },
  { period: '2016–2020', country: 'Kenya', summary: 'Higher-education practical training project by Wageningen University with Meru University and Tradecare Africa. Tradecare helped 6 TVETs mainstream gender and marginalized communities in curriculum development, policies and procedures.' },
  { period: '2020–2021', country: 'Ethiopia', summary: 'Multi-country, multi-year project analyzing industry organisations and key business partners in tea, coffee and horticulture value chains. The goal was to design technical-assistance and financial packages that bring smallholder farmers, especially women, into national and international value chains.' },
];

/** "Our Partners & Network" (About page). Replaced the former "Subsidiaries" section. */
export const PARTNER_NETWORK_INTRO =
  'TradeCare does not work alone. We collaborate with certification bodies, buyers, universities and producer groups so that every farmer we train can be assured, traced and sold to a buyer who pays for quality.';

export const PARTNER_NETWORK = [
  {
    name: 'React Cert Africa',
    role: 'Certification partner',
    image: '/images/blog/react cert logo.png',
    href: 'https://www.reactcertafrica.com',
    points: [
      'Independent product and management system certification body, operating since 2017.',
      'Accredited to a combined management system of ISO/IEC 17021:2015 and ISO/IEC 17065:2012.',
      'Certifies against ISO 9001, ISO 14000, ISO 22000, GLOBALG.A.P. Integrated Farm Assurance (IFA), KS 17058 Part II and Chain of Custody.',
      'Approval to offer FSSC 22000 in progress.',
    ],
  },
];

export const PAST_PROJECTS = [
  {
    title: 'Piloting Delivery System for Fruits & Vegetables',
    category: 'Logistics Solution',
    period: '2020–2021',
    image: '/images/projects/Untitled design/1.png',
    text: 'A pilot to deliver fresh fruits and vegetables from GLOBALG.A.P.-certified export-horticulture farmers into a streamlined domestic market supply chain.',
  },
  {
    title: 'Agri-Nutrition Improvement Project',
    category: 'Agriculture Solution',
    period: '2021–2022 · with Fairtrade Africa',
    image: '/images/projects/2.png',
    text: "Built agri-nutrition gardens on 22 flower farms across Kenya. The fresh fruits and vegetables were sold to workers at low cost. Also trained and built the capacity of workers' committees on sustainable management, and prepared organic growing guides for end users.",
  },
  {
    title: 'Macadamia Value Chain Development Project',
    category: 'Development Solution',
    period: '2016–2020 · with FMS and Jungle Nuts · Embu County',
    image: '/images/projects/3.png',
    text: 'Focused on macadamia productivity, quality, and aggregation. Mobilized 2,000 farmers into clusters of 100. Helped the clusters link to markets, plant more macadamia, and aggregate and market their nuts together.',
  },
  {
    title: 'Voluntary Sustainability Standards (VSS) Capacity Building',
    category: 'Consultancy Solution',
    period: 'Tanzania · tea, coffee, horticulture',
    image: '/images/projects/4.png',
    text: 'Prepared VSS guides and trained 30 extension workers to teach farmers how to implement VSS.',
  },
];

export const PAST_PARTNERS = ['Fairtrade Africa', 'FMS', 'Jungle Nuts', 'Wageningen University', 'Meru University'];

/** Staff from the original site. Joyce Gema is omitted: she is already on the Team page. */
export const WIDER_TEAM = [
  { name: 'Rose Githumbi', role: 'Business Development Manager', image: '/images/Rose Formatted.png' },
  { name: 'Lisa Marie', role: 'Admin', image: '/images/team/4.png' },
  { name: 'Tabitha Wanjiku', role: 'Accountant', image: '/images/team/3.png' },
  { name: 'Owen Francis', role: 'Technical Engineer', image: '/images/team/2.png' },
  { name: 'Stanley Muhuhi', role: 'Agronomist', image: '/images/team/5.png' },
];
