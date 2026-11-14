import { FOUNDED_YEAR, YEARS_IN_OPERATION } from './companyContent';

export interface Division {
  id: 'train' | 'produce' | 'digitise' | 'assure' | 'connect';
  stepNumber: number;
  verb: string;
  name: string;
  tagline: string;
  shortDesc: string;
  brandColor: string;
  accentBg: string;
  textColor: string;
  problem: {
    stat: string;
    label: string;
    detail: string;
    summary: string;
  };
  drivers: string[];
  solution: {
    headline: string;
    subheadline?: string;
    pillars: { title: string; desc: string }[];
    statusBadge: 'LIVE TODAY' | 'IN TESTING' | 'IN DEVELOPMENT' | 'FULL SUITE OCT 2026';
    keyMetric: { value: string; label: string; citation: string };
  };
  methodologyName?: string;
  methodologySteps?: { letter: string; name: string; desc: string }[];
  synergyInput: string;
  synergyOutput: string;
  partners: string[];
}

export interface DivisionDetailed {

  id: 'academy' | 'zaosafi' | 'farmdatapod' | 'tcert' | 'market';
  stepNumber: number;
  verb: string;
  name: string;
  subtitle: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  brandColor: string;
  accentBg: string;
  textColor: string;
  badgeText: string;
  overview: string;
  services: {
    title: string;
    description: string;
    deliverables: string[];
    pricingModel: string;
  }[];
  benefits: {
    stakeholder: string;
    impact: string;
    metric: string;
  }[];
  targetAudience: {
    persona: string;
    description: string;
    keyNeed: string;
    solutionProvided: string;
  }[];
  howItIntegrates: {
    targetDivisionId: string;
    targetDivisionName: string;
    direction: 'receives_from' | 'passes_to';
    description: string;
  }[];
  uniqueCta: {
    primaryLabel: string;
    secondaryLabel: string;
    formCategory: string;
  };
  metrics: {
    value: string;
    label: string;
    source: string;
  }[];
  faq: {
    q: string;
    a: string;
  }[];
}

export const DIVISIONS_DETAILED: Record<string, DivisionDetailed> = {
  academy: {
    id: 'academy',
    stepNumber: 1,
    verb: 'TRAIN',
    name: 'TradeCare Academy',
    subtitle: 'Human Capital & Market Standards Extension',
    tagline: 'We build the people who can meet the standard.',
    heroHeadline: 'Training That Meets The Standard The Market Demands',
    heroSubheadline: 'Empowering agriculture graduates and smallholder farming communities with accredited, practical agronomy competencies co-developed with Wageningen and Meru Universities. Priced on measurable harvest outcomes, not seminar attendance.',
    brandColor: '#012A4A', // Deep Azure (Official Train Palette)
    accentBg: '#E3EEF7',
    textColor: '#012A4A',
    badgeText: 'Stage 01 · Human Capital Engine',
    overview: 'In Kenya, over 8 million smallholders face tightening export audits and supermarket standards, yet fewer than 5,000 public extension officers exist—a ratio of 1:1,600 mandated merely for subsistence yields. TradeCare Academy turns agriculture graduates into resident commercial agronomists stationed inside community hubs, delivering continuous field-level education.',

    services: [
      {
        title: 'Graduate Agronomist Residency Program',
        description: 'Rigorous 6-month intensive field immersion transforming university agriculture graduates into certified resident agronomists capable of managing farm typologies and supermarket compliance.',
        deliverables: [
          'Dual theoretical & practical certification with Meru University',
          'Field deployment to sedentary Zao Safi Hubs at 1:50 coaching ratio',
          'Proficiency in RASTA agronomic registration & global export MRLs',
        ],
        pricingModel: 'Cross-subsidized through hub operations & commercial offtake',
      },
      {
        title: 'Ecosystem Actor Masterclasses',
        description: 'Targeted compliance and capacity training for the surrounding actors whose practices impact crop safety: agrodealers, aggregators, spray teams, and cooperative boards.',
        deliverables: [
          'Certified Agrodealer chemical inventory & safe handling modules',
          'Safe sprayer operator training to prevent chemical residue drift',
          'Cooperative governance & digital audit readiness masterclasses',
        ],
        pricingModel: 'Tiered per-organization fee / Included in Hub subscription',
      },
      {
        title: 'Accredited Curriculum & Digital Knowledge Repository',
        description: 'Continuously updated courseware co-developed with Wageningen University & Research and Meru University of Science and Technology.',
        deliverables: [
          'Dynamic updates whenever EUDR or EU residue MRL rules change',
          'Multilingual micro-modules in English, Kiswahili, and local dialects',
          'Farmer competency scorecards tied directly to farm plot IDs',
        ],
        pricingModel: 'Priced on results: farmer yield gains & audit pass rates',
      },
    ],
    benefits: [
      {
        stakeholder: 'Smallholder Farmers',
        impact: 'Gain practical field coaching that boosts exportable harvest yield by 35–56% without high upfront tuition.',
        metric: '+35–56% Yield Gain',
      },
      {
        stakeholder: 'Agriculture Graduates',
        impact: 'Gain structured commercial employment and professional mentorship as salaried resident hub agronomists.',
        metric: '100% Placement in Hubs',
      },
      {
        stakeholder: 'Cooperatives & Packhouses',
        impact: 'Eliminate audit rejections and chemical spray drift violations across all member plots.',
        metric: '0% Residue Failure',
      },
    ],
    targetAudience: [
      {
        persona: 'Kenyan Agriculture Graduates',
        description: 'BSc and Diploma holders seeking hands-on commercial experience, agronomic leadership, and structured employment.',
        keyNeed: 'Bridging university theory into practical, market-aligned commercial farming skills.',
        solutionProvided: 'Full fellowship, field residency in Zao Safi Hubs, and certified accreditation.',
      },
      {
        persona: 'Smallholder Farmer Cooperatives',
        description: 'Producer groups with 100 to 2,000 members struggling with high rejection rates from formal supermarket buyers.',
        keyNeed: 'Consistent, affordable farmer training that actually changes daily field practice.',
        solutionProvided: 'Stationed resident agronomists providing continuous coaching throughout the crop cycle.',
      },
      {
        persona: 'Commercial Agrodealer Networks',
        description: 'Local input stockists who advise farmers on seeds, fertilizers, and crop protection chemicals.',
        keyNeed: 'Staying compliant with banned active ingredients and retailer chemical lists.',
        solutionProvided: 'Certified Agrodealer courseware and verified input recommendation guidelines.',
      },
    ],
    howItIntegrates: [
      {
        targetDivisionId: 'zaosafi',
        targetDivisionName: 'Zao Safi Hub (Produce)',
        direction: 'passes_to',
        description: 'Graduates and trained farmers immediately staff and populate the Zao Safi Hub, executing daily field coaching under the 1:50 agronomist ratio.',
      },
      {
        targetDivisionId: 'farmdatapod',
        targetDivisionName: 'FarmDataPod (Digitise)',
        direction: 'receives_from',
        description: 'FarmDataPod streams real-time regulatory shifts (EUDR, pesticide MRL revisions) to instantly update Academy courseware.',
      },
      {
        targetDivisionId: 'tcert',
        targetDivisionName: 'TCert (Assure)',
        direction: 'passes_to',
        description: 'Farmer competency scoring and verified training attendance records flow into TCert as mandatory compliance evidence.',
      },
      {
        targetDivisionId: 'market',
        targetDivisionName: 'TradeCare Market (Connect)',
        direction: 'receives_from',
        description: 'Premium buyer quality rejections or emerging market crop preferences feed backward into next season’s curriculum design.',
      },
    ],
    uniqueCta: {
      primaryLabel: 'Enroll in Academy Cohort',
      secondaryLabel: 'Commission Hub Training',
      formCategory: 'Farmer Academy',
    },
    metrics: [
      { value: '+35–56%', label: 'Empirical Yield Gain', source: 'Quasi-experimental study, 1,396 households (2025)' },
      { value: '1:50', label: 'Resident Agronomist Ratio', source: 'TradeCare sedentary hub standard' },
      { value: '2 Top Universities', label: 'Academic Partners', source: 'Wageningen & Meru University' },
    ],
    faq: [
      {
        q: 'How does TradeCare Academy differ from typical government extension?',
        a: 'Government extension in Kenya averages 1 officer for 1,600 farmers and focuses solely on basic subsistence food security. TradeCare Academy embeds graduate agronomists at a 1:50 ratio inside commercial hubs, coaching specifically to international buyer audit standards.',
      },
      {
        q: 'What does "priced on results, not attendance" mean?',
        a: 'Instead of charging struggling smallholders upfront seminar fees, Academy operational costs are cross-subsidized by the increased harvest value and premium offtake generated when the crop meets supermarket grade.',
      },
    ],
  },

  zaosafi: {
    id: 'zaosafi',
    stepNumber: 2,
    verb: 'PRODUCE',
    name: 'Zao Safi Extension (Hub)',
    subtitle: 'On-Farm Production & Resident Agronomy',
    tagline: 'We grow the crop to it, farm by farm.',
    heroHeadline: 'Transforming Smallholder Fields Into Commercial-Grade Producers',
    heroSubheadline: 'Training changes what a farmer knows; only continuous presence changes what a farmer does. Zao Safi Hubs deploy resident agronomists and the proprietary RASTA methodology to close the 0.5t to 8t marketable surplus gap.',
    brandColor: '#076333', // La Salle Green (Official Produce Palette)
    accentBg: '#FFFCE1', // Light Yellow Tint
    textColor: '#1B2E1F',
    badgeText: 'Stage 02 · Field Production Engine',
    overview: 'A smallholder producing 0.5 tons of surplus cannot compete with commercial estates producing 8 tons on the same acreage. Off-site training stops at the farm gate; the daily decisions that make or break a crop happen between sporadic visits. Zao Safi Hubs establish sedentary, hub-and-spoke production centers staffed by resident agronomists who coach farmers every step of the season.',

    services: [
      {
        title: 'Resident Agronomist Deployment (1:50 / 1:100)',
        description: 'Stationing resident agronomists directly within farmer communities. Agronomists carry intensive 1:50 ratios for high-value horticulture and 1:100 for extensive tree-crops.',
        deliverables: [
          'Weekly on-plot coaching during critical vegetative and flowering stages',
          'Soil testing, nutrient balancing, and biological pest control execution',
          'Pre-harvest interval (PHI) timing enforcement to eliminate chemical residues',
        ],
        pricingModel: 'Integrated into Hub membership & farm tier subscription',
      },
      {
        title: 'The RASTA Field Operational System',
        description: 'Our proprietary cyclical agronomy protocol: Register (every action), Analyse (against tier targets), Share (the gap), Train (close the gap), Act (execute with coaching).',
        deliverables: [
          'Live plot-level recording of seed variety, fertilizer, and irrigation dates',
          'Continuous benchmarking against commercial estate yield targets',
          'Progressive elevation of farmer tier classifications cycle after cycle',
        ],
        pricingModel: 'Standard operating procedure across all Zao Safi Hubs',
      },
      {
        title: 'Central Demonstration & Input Aggregation Hubs',
        description: 'Physical community hubs featuring active model plots demonstrating regenerative inputs, clean planting materials, and shared post-harvest tools.',
        deliverables: [
          'Local access to certified, audit-compliant seeds and biocontrol agents',
          'Cold storage collection points for prompt field heat removal',
          'Hands-on field days demonstrating organic pest management',
        ],
        pricingModel: 'Recovered through cross-subsidy and produce facilitation',
      },
    ],
    benefits: [
      {
        stakeholder: 'Smallholder Farmers',
        impact: 'Triple marketable surplus yields from 0.5 tons toward commercial levels while retaining 100% crop title.',
        metric: '3× Productivity Surge',
      },
      {
        stakeholder: 'Retailers & Buyers',
        impact: 'Receive predictable volumes of uniform, chemical-safe produce grown strictly to buyer specifications.',
        metric: '100% Traceable to Plot',
      },
      {
        stakeholder: 'Local Communities',
        impact: 'Create salaried agronomist jobs for local youth and stimulate agricultural rural economies.',
        metric: 'Month 15 Hub Profitability',
      },
    ],
    targetAudience: [
      {
        persona: 'Horticulture & Vegetable Cooperatives',
        description: 'Farming groups growing French beans, snow peas, avocados, or macadamia whose members lack consistent field guidance.',
        keyNeed: 'Achieving consistent export grade volume and passing chemical residue testing.',
        solutionProvided: 'Turnkey Zao Safi Hub establishment with dedicated resident agronomists.',
      },
      {
        persona: 'Commercial Food Processors & Exporters',
        description: 'Processors seeking reliable, ethical outgrower supply bases that comply with buyer audits.',
        keyNeed: 'Contracted outgrower management without having to build an in-house extension department.',
        solutionProvided: 'Outgrower hub management powered by the RASTA system and resident agronomists.',
      },
      {
        persona: 'County Governments & Development Partners',
        description: 'Agricultural boards aiming to lift smallholder cluster incomes sustainably above the poverty line.',
        keyNeed: 'Self-sustaining models that do not collapse when donor subsidy ends.',
        solutionProvided: 'Economically viable hubs that reach operational break-even within 15 months.',
      },
    ],
    howItIntegrates: [
      {
        targetDivisionId: 'academy',
        targetDivisionName: 'TradeCare Academy (Train)',
        direction: 'receives_from',
        description: 'Zao Safi Hubs are staffed exclusively by graduates trained and certified through TradeCare Academy.',
      },
      {
        targetDivisionId: 'farmdatapod',
        targetDivisionName: 'FarmDataPod (Digitise)',
        direction: 'passes_to',
        description: 'Every single RASTA observation, input record, and yield event captured by the agronomist is pushed directly into FarmDataPod.',
      },
      {
        targetDivisionId: 'tcert',
        targetDivisionName: 'TCert (Assure)',
        direction: 'passes_to',
        description: 'Zao Safi’s rigorous adherence to protocols provides the primary evidence basis for group certification audits.',
      },
      {
        targetDivisionId: 'market',
        targetDivisionName: 'TradeCare Market (Connect)',
        direction: 'passes_to',
        description: 'Graded, harvested produce carrying the Zao Safi quality mark is pooled for trade matching and refrigerated transport.',
      },
    ],
    uniqueCta: {
      primaryLabel: 'Establish a Zao Safi Hub',
      secondaryLabel: 'Request Hub Feasibility Study',
      formCategory: 'Hub Establishment',
    },
    metrics: [
      { value: '0.5t → 8t', label: 'Surplus Yield Gap Closed', source: 'TCA-BUD-MSCT-001 tier definitions' },
      { value: '144 / 275', label: 'Active RASTA Producers in Lari', source: 'TradeCare Kiambu deployment' },
      { value: '15 Months', label: 'Timeline to Hub Profitability', source: 'TradeCare operating plan' },
    ],
    faq: [
      {
        q: 'What is the RASTA methodology?',
        a: 'RASTA stands for Register, Analyse, Share, Train, and Act. It is TradeCare’s proprietary cyclical field coaching method where agronomists continuously record field data, identify performance gaps against tier benchmarks, share insights with the farmer, provide targeted micro-training, and guide immediate corrective action.',
      },
      {
        q: 'Do farmers lose ownership of their land or crop in a Zao Safi Hub?',
        a: 'Never. TradeCare Africa’s foundational mandate is that farmers retain 100% title and ownership of their land and harvest. We provide the agronomic infrastructure, digital ledger, and market linkage so they capture maximum commercial value.',
      },
    ],
  },

  farmdatapod: {
    id: 'farmdatapod',
    stepNumber: 3,
    verb: 'DIGITISE',
    name: 'Farm Data pod',
    subtitle: 'Bi-Directional Agricultural Intelligence Backbone',
    tagline: 'We record it — and read the market back.',
    heroHeadline: 'Two-Way Digital Backbone Linking Farm Plots With Global Markets',
    heroSubheadline: 'Paper records do not qualify under EUDR and retailer residue audits. Farm Data pod carries verified farm evidence outward to certifiers, and real-time market prices, buyer specs, and rule changes inward to farmers.',
    brandColor: '#4C7338', // Turf Green (Official FDP Digitise Palette)
    accentBg: '#E6F0E3', // Tint 10%
    textColor: '#2E3233',
    badgeText: 'Stage 03 · Digital Compliance Spine',
    overview: 'Most Kenyan farms hold no spray, input, or yield history—leaving them defenseless during buyer audits and completely cut off from formal markets. Furthermore, European Union Deforestation Regulation (EUDR) mandates exact GPS polygon plot geolocations, while retailers demand digital spray traceability. Farm Data pod captures every RASTA entry at source, turning invisible smallholder labor into verifiable institutional data.',

    services: [
      {
        title: 'EUDR & Compliance Plot Geolocation Mapping',
        description: 'Mobile GIS boundary capture recording precise polygon boundaries, deforestation-free risk assessments, and land tenure verification for every smallholder plot.',
        deliverables: [
          'GPS polygon mapping and satellite cross-referencing against forest benchmarks',
          'Immutable plot-level unique identifier (UID) linked to farmer identity and consent',
          'Standardized digital data package ready for European Union customs submission',
        ],
        pricingModel: 'US$6,000 / year cooperative platform license',
      },
      {
        title: 'Digital Spray & Input Ledger (MRL Assurance)',
        description: 'Source-level logging of every seed lot, biological application, fertilizer dosage, and chemical spray with automatic calculation of Pre-Harvest Intervals.',
        deliverables: [
          'Real-time verification against banned active ingredient registries',
          'Automated spray clearance countdown preventing premature harvesting',
          'Instant tamper-evident export audit report generation',
        ],
        pricingModel: 'Included in Farm Data pod enterprise platform tier',
      },
      {
        title: 'Two-Way Market Intelligence Feed',
        description: 'Bi-directional communication engine that feeds farm supply projections to buyers while transmitting live commodity spot prices and buyer specs down to hubs.',
        deliverables: [
          'Demand forecasting dashboard for contracted buyers and packhouses',
          'Automated Academy curriculum synchronization when retailer rules update',
          'SMS and in-app market price benchmarks for cooperative members',
        ],
        pricingModel: 'SaaS licensing for processors & trade partners',
      },
    ],
    benefits: [
      {
        stakeholder: 'Cooperative Managers',
        impact: 'Gain 100% real-time digital visibility into member production, harvest volumes, and audit readiness.',
        metric: '100% Consent Captured',
      },
      {
        stakeholder: 'International Exporters',
        impact: 'Fulfill EUDR and Maximum Residue Limit compliance requirements with pre-audited digital proof packets.',
        metric: 'Zero EUDR Rejections',
      },
      {
        stakeholder: 'Supermarket Chains',
        impact: 'Trace produce on retail shelves back to the exact GPS coordinates and harvest date of the smallholder plot.',
        metric: 'Plot-to-Shelf Traceability',
      },
    ],
    targetAudience: [
      {
        persona: 'Export Packhouses & Logistics Hubs',
        description: 'Exporters shipping fresh produce to Europe, the UK, or the Middle East facing stringent digital documentation mandates.',
        keyNeed: 'Automating EUDR plot geolocation and spray ledgers without hiring armies of manual data clerks.',
        solutionProvided: 'Farm Data pod digital compliance suite with instant audit trail generation.',
      },
      {
        persona: 'Agricultural Cooperatives & Federations',
        description: 'Cooperative societies needing modern management software to track member inputs, yields, and payments.',
        keyNeed: 'A rugged system that works reliably offline in rural areas and synchronizes with mobile devices.',
        solutionProvided: 'Turnkey Farm Data pod deployment with resident agronomist integration.',
      },
      {
        persona: 'Impact Investors & Carbon Offset Certifiers',
        description: 'Organizations tracking regenerative farming adoption, soil organic carbon, and land-use integrity.',
        keyNeed: 'Independently verifiable field data anchored to immutable GPS plots.',
        solutionProvided: 'Verified farm practice time-series telemetry.',
      },
    ],
    howItIntegrates: [
      {
        targetDivisionId: 'zaosafi',
        targetDivisionName: 'Zao Safi Hub (Produce)',
        direction: 'receives_from',
        description: 'Pulls raw field observations directly from agronomists executing the RASTA cycle on the ground.',
      },
      {
        targetDivisionId: 'academy',
        targetDivisionName: 'TradeCare Academy (Train)',
        direction: 'passes_to',
        description: 'Pushes regulatory rule changes to Academy course creators so training modules update dynamically.',
      },
      {
        targetDivisionId: 'tcert',
        targetDivisionName: 'TCert (Assure)',
        direction: 'passes_to',
        description: 'Serves as the unalterable evidentiary spine for TCert auditors—eliminating the need to reconstruct paper records.',
      },
      {
        targetDivisionId: 'market',
        targetDivisionName: 'TradeCare Market (Connect)',
        direction: 'passes_to',
        description: 'Supplies verified volume availability and quality specifications to registered buyers on TradeCare Market.',
      },
    ],
    uniqueCta: {
      primaryLabel: 'Request Farm Data pod Demo',
      secondaryLabel: 'EUDR Compliance Assessment',
      formCategory: 'FarmDataPod',
    },
    metrics: [
      { value: '100%', label: 'Farmer Consent & GPS Capture', source: 'Lari Horticulture Cooperative deployment' },
      { value: '26 Apr 2025', label: 'EU Residue Reg In Force', source: 'EU Official Journal Reg. 2024/2004' },
      { value: 'US$6,000/yr', label: 'Cooperative License Benchmark', source: 'TradeCare commercial price book' },
    ],
    faq: [
      {
        q: 'Does Farm Data pod require constant internet connectivity in rural farms?',
        a: 'No. Farm Data pod is built mobile-first with offline-first synchronization. Resident agronomists log data and capture GPS plot boundaries even in remote fields without cellular reception; the app automatically syncs when reconnecting to hub Wi-Fi or mobile data.',
      },
      {
        q: 'How does Farm Data pod prepare farmers for EUDR?',
        a: 'The EU Deforestation Regulation requires polygon geolocation for all plots and documented proof that the land was not deforested after December 31, 2020. Farm Data pod captures the exact boundary polygon, cross-references historical satellite data, and formats the submission packet required by European customs.',
      },
    ],
  },

  tcert: {
    id: 'tcert',
    stepNumber: 4,
    verb: 'ASSURE',
    name: 'TCert',
    subtitle: 'Independent Certification Authority & Standards Body',
    tagline: 'We certify it, independently.',
    heroHeadline: 'Accredited Certification That Unlocks Premium Global Offtake',
    heroSubheadline: 'Buyers do not buy a certificate; they buy confidence in the production system that created the crop. Operating since 2017 with independent accredited assurance on the international FLOCERT model.',
    brandColor: '#407E8C', // Teal (Official TCert Palette)
    accentBg: '#E8F2F3', // Tint 10%
    textColor: '#083A4F', // Navy (Official TCert Text)
    badgeText: 'Stage 04 · Independent Certification Authority',
    overview: 'A farmer’s own declaration opens no formal retail doors. Supermarkets, exporters, and international regulators demand an accredited certificate issued by an independent certification body. However, legacy certification was engineered for 500-acre colonial estates—a smallholder cannot bear that administrative cost alone. TCert utilizes verified Farm Data pod digital evidence and smallholder group certification to make world-class assurance affordable.',
    services: [
      {
        title: 'GLOBALG.A.P. & Smallholder Group Certification (Option 2)',
        description: 'Accredited auditing and certification for farmer cooperatives under Internal Control Systems (ICS), reducing individual smallholder audit costs by over 75%.',
        deliverables: [
          'Pre-audit gap analysis using Farm Data pod digital records',
          'Quality Management System (QMS) audit for cooperative ICS managers',
          'Accredited GLOBALG.A.P. certificate issuance recognized by European retailers',
        ],
        pricingModel: 'US$2,800 certifiable operation + annual surveillance fee',
      },
      {
        title: 'Organic & Regenerative Agriculture Certification',
        description: 'Rigorous organic verification compliant with East African Organic Standards (EAOPS), EU Organic regulations, and USDA NOP requirements.',
        deliverables: [
          'Chemical residue soil and foliage screening protocol management',
          '3-year conversion period documentation and transition certification',
          'Regenerative soil health and biodiversity verification',
        ],
        pricingModel: 'Tiered assessment based on acreage and cluster size',
      },
      {
        title: 'Food Safety Management Systems (FSMS & ISO 22000)',
        description: 'Complete auditing for packhouses, cold-chain transport providers, and processing facilities handling high-care fresh produce.',
        deliverables: [
          'HACCP hazard analysis and critical control point verification',
          'Traceability and product recall system stress testing',
          'Full ISO 22000 / FSSC 22000 certification issuance',
        ],
        pricingModel: 'Standard enterprise audit fee per facility',
      },
    ],
    benefits: [
      {
        stakeholder: 'Certified Smallholders',
        impact: 'Escape volatile informal market dumping prices and access formal supermarket supply contracts.',
        metric: 'Access to Tier-1 Offtake',
      },
      {
        stakeholder: 'Commercial Agribusinesses',
        impact: 'Pass international audits on the first inspection without rushed paperwork fabrication.',
        metric: 'Zero Paper Reconstruction',
      },
      {
        stakeholder: 'Supermarkets & Importers',
        impact: 'Mitigate food safety, brand reputation, and regulatory liability with accredited third-party certificates.',
        metric: 'International Recognition',
      },
    ],
    targetAudience: [
      {
        persona: 'Commercial Farms & Packhouses',
        description: 'Medium to large-scale horticulture, avocado, macadamia, and flower growers requiring annual audit renewal.',
        keyNeed: 'Fast, professional, internationally accredited certification without exorbitant expatriate auditor travel fees.',
        solutionProvided: 'Local accredited auditors issuing globally recognized certificates.',
      },
      {
        persona: 'Smallholder Farmer Groups & Cooperatives',
        description: 'Organized producer societies seeking to enter export markets under Group Certification schemes.',
        keyNeed: 'Overcoming the crippling paperwork burden and high costs of individual farm certification.',
        solutionProvided: 'Group certification backed by Farm Data pod digital Internal Control Systems.',
      },
      {
        persona: 'Agri-Processors & Food Brands',
        description: 'Processors requiring ISO 22000, HACCP, or Organic certification for value-added consumer retail packs.',
        keyNeed: 'End-to-end processing and cold-chain food safety compliance.',
        solutionProvided: 'Comprehensive FSMS certification and annual surveillance.',
      },
    ],
    howItIntegrates: [
      {
        targetDivisionId: 'farmdatapod',
        targetDivisionName: 'Farm Data pod (Digitise)',
        direction: 'receives_from',
        description: 'Auditors evaluate continuous digital field records from Farm Data pod as the primary audit trail, rejecting retrofitted paper.',
      },
      {
        targetDivisionId: 'zaosafi',
        targetDivisionName: 'Zao Safi Hub (Produce)',
        direction: 'receives_from',
        description: 'Resident agronomist coaching records and spray logs provide the verifiable proof that practices meet standard.',
      },
      {
        targetDivisionId: 'academy',
        targetDivisionName: 'TradeCare Academy (Train)',
        direction: 'receives_from',
        description: 'Training completion transcripts verify farmer competence as required by certification general regulations.',
      },
      {
        targetDivisionId: 'market',
        targetDivisionName: 'TradeCare Market (Connect)',
        direction: 'passes_to',
        description: 'Issues the official TCert credential that unlocks produce listing with premium pricing on TradeCare Market.',
      },
    ],
    uniqueCta: {
      primaryLabel: 'Apply for TCert Certification',
      secondaryLabel: 'Request Audit Quotation',
      formCategory: 'TCert Audits',
    },
    metrics: [
      { value: '300+', label: 'Paying Assurance Clients', source: 'Active operations since 2017' },
      { value: 'Accredited', label: 'Certification Standards', source: 'GLOBALG.A.P. & ISO-aligned independent body' },
      { value: 'FLOCERT Model', label: 'Governance Separation', source: 'Structural independence from trading operations' },
    ],
    faq: [
      {
        q: 'How does TCert maintain audit independence within the TradeCare ecosystem?',
        a: 'TCert operates as an independent certification body structurally separated from hub and trading operations based on the international FLOCERT model. Its certification decisions are governed by an independent technical committee with zero financial interest in crop sales.',
      },
      {
        q: 'What international standards does TCert certify?',
        a: 'Standards in scope include GLOBALG.A.P. (IFA, Smart, GFS), East African Organic Standards, ISO 22000 / Food Safety Management Systems, Social Compliance, and planned Rainforest Alliance credentials. It operates under accredited independent assurance frameworks.',
      },
    ],
  },


  market: {
    id: 'market',
    stepNumber: 5,
    verb: 'CONNECT',
    name: 'TradeCare Market',
    subtitle: 'Integrated Value Chain · From Kenyan Smallholder Farms to Global Markets',
    tagline: 'Connecting smallholder growers directly to verified agronomy, traceability, certification, and premium buyers.',
    heroHeadline: 'Direct Premium Offtake Connecting Certified Harvests to Tier-1 Buyers',
    heroSubheadline: 'A certificate is not a sale. Someone still has to aggregate, process, chill, and transport the crop. TradeCare Market connects certified Zao Safi produce directly to contracted domestic supermarkets and global exporters.',
    brandColor: '#DD5C36', // Cherry Grove
    accentBg: '#FDE8E2',
    textColor: '#8C2B0E',
    badgeText: 'Stage 05 · Commercial Trade Engine',
    overview: 'A farm that can fill a domestic supermarket order cannot fill an export sea container alone; capacity decides the market. Furthermore, smallholders who rely on a single buyer face complete economic ruin if that buyer cancels an order. TradeCare Market matches verified producer capacity with registered domestic retailers (Carrefour Kenya, QuickMart) and international buyers, backing every trade with contracted cold-chain logistics.',
    services: [
      {
        title: 'Registered Buyer Marketplace & Demand Matching',
        description: 'Direct procurement platform matching verified harvest volumes with registered domestic supermarket chains, regional processors, and European importers.',
        deliverables: [
          'Pre-season volume forward contracting with agreed quality price premiums',
          'Algorithmic capacity matching ensuring farmers supply multiple market tiers',
          'Only produce from the verified Zao Safi & TCert platform is listed',
        ],
        pricingModel: '2.5% trade facilitation fee on addressable GMV',
      },
      {
        title: 'Mazao Safi Consumer Quality Mark',
        description: 'Our proprietary consumer-facing brand signaling residue-tested, ethical, and fully traceable fresh produce on Kenyan supermarket shelves.',
        deliverables: [
          'QR-code consumer traceability linking retail packs back to the Kinale hub',
          'Shelf-life extension via cold-chain discipline and sanitized handling',
          'Premium shelf positioning in top retail stores across Nairobi',
        ],
        pricingModel: 'Included in TradeCare Market trade arrangement',
      },
      {
        title: 'Contracted Cold-Chain Haulage & Packhouse Access',
        description: 'Farmers access temperature-controlled transport and certified packhouse grading without incurring heavy capital expenditure.',
        deliverables: [
          'Signed agreements with dedicated refrigerated hauliers for daily farm-to-shelf transit',
          'Rapid field heat removal at village aggregation hubs',
          'Post-harvest loss reduction from standard 40% down to under 5%',
        ],
        pricingModel: 'Cost-sharing per kilogram transported',
      },
    ],
    benefits: [
      {
        stakeholder: 'Smallholder Farmers',
        impact: 'Earn 35% to 245% higher net incomes, protected from single-buyer collapse and predatory middlemen.',
        metric: '+245% Farmer Income',
      },
      {
        stakeholder: 'Supermarkets (Carrefour, QuickMart)',
        impact: 'Secure steady, reliable daily deliveries of audit-certified, chemical-safe produce that customers trust.',
        metric: 'Reliable Daily Deliveries',
      },
      {
        stakeholder: 'Consumers',
        impact: 'Enjoy healthy, residue-free vegetables verified safe and sourced ethically from local Kenyan farmers.',
        metric: 'Residue-Free Guarantee',
      },
    ],
    targetAudience: [
      {
        persona: 'Supermarket Chains & Retailers',
        description: 'Modern grocery retailers in East Africa (e.g. Carrefour, QuickMart) demanding consistent quality and food safety compliance.',
        keyNeed: 'Direct, ethical produce sourcing without dealing with fragmented brokers or uncertified smallholders.',
        solutionProvided: 'Consolidated Mazao Safi shipments with guaranteed cold-chain integrity and TCert verification.',
      },
      {
        persona: 'Fresh Produce Exporters & Importers',
        description: 'European, UK, and Middle East produce buyers needing EUDR-compliant, chemical-safe snow peas, avocados, and herbs.',
        keyNeed: 'Traceable export containers aggregated from certified smallholder clusters.',
        solutionProvided: 'Capacity-matched export batches with complete digital compliance dossiers.',
      },
      {
        persona: 'Institutional Food Service & Hospitality',
        description: 'Hotels, schools, and catering companies requiring transparent, farm-to-fork sourcing.',
        keyNeed: 'Guaranteed supply consistency, standardized grading, and transparent pricing.',
        solutionProvided: 'Contracted wholesale supply of certified Zao Safi produce.',
      },
    ],
    howItIntegrates: [
      {
        targetDivisionId: 'tcert',
        targetDivisionName: 'TCert (Assure)',
        direction: 'receives_from',
        description: 'Only produce with active, verified TCert credentials is permitted to list on TradeCare Market.',
      },
      {
        targetDivisionId: 'zaosafi',
        targetDivisionName: 'Zao Safi Hub (Produce)',
        direction: 'receives_from',
        description: 'Coordinates harvest schedules with resident agronomists to ensure cold-chain trucks arrive immediately upon picking.',
      },
      {
        targetDivisionId: 'farmdatapod',
        targetDivisionName: 'Farm Data pod (Digitise)',
        direction: 'receives_from',
        description: 'Supplies lot-level traceability and QR codes affixed to Mazao Safi retail packaging.',
      },
      {
        targetDivisionId: 'academy',
        targetDivisionName: 'TradeCare Academy (Train)',
        direction: 'passes_to',
        description: 'Closes the ecosystem loop: feeds buyer pricing signals and quality rejections back into Academy curriculum to adjust next season’s targets.',
      },
    ],
    uniqueCta: {
      primaryLabel: 'Register as Verified Buyer',
      secondaryLabel: 'Inquire for Produce Offtake',
      formCategory: 'Produce Offtake',
    },
    metrics: [
      { value: 'Carrefour & QuickMart', label: 'Contracted Retail Partners', source: 'Lari Kinale hub deployment' },
      { value: '2.5%', label: 'Trade Facilitation Fee', source: 'Below traditional 10–20% broker margins' },
      { value: '< 5%', label: 'Post-Harvest Losses', source: 'Refrigerated cold-chain vs 40% traditional losses' },
    ],
    faq: [
      {
        q: 'How does TradeCare Market prevent single-buyer risk for farmers?',
        a: 'Traditional outgrower schemes link a farmer to exactly one buyer; if that buyer cancels, the crop rots. TradeCare Market algorithmically matches each farm cluster’s capacity to multiple market tiers simultaneously: tier-1 supermarkets (Carrefour, QuickMart), regional processors, and export contracts.',
      },
      {
        q: 'What is the Mazao Safi mark?',
        a: 'Mazao Safi (Clean Produce in Kiswahili) is TradeCare’s registered consumer trust brand. It assures shoppers that the produce was grown under resident agronomist supervision, passed pesticide residue testing, was verified by TCert, and directly rewarded the farmer who grew it.',
      },
    ],
  },
};


export const BRAND_COLORS = {
  cherryGrove: {
    hex: '#DD5C36',
    name: 'Cherry Grove',
    role: 'Primary Brand Color',
    attribute: 'Energy, Connection, Momentum',
    hover: '#EB7857',
    active: '#F29677',
    highlight: '#FDE8E2',
  },
  forestFern: {
    hex: '#327039',
    name: 'Forest Fern',
    role: 'Secondary Color · Train',
    attribute: 'Growth, People, Sustainability',
  },
  wheatField: {
    hex: '#F0BE49',
    name: 'Wheat Field Sunrise',
    role: 'Secondary Color · Produce',
    attribute: 'Opportunity, Prosperity, Optimism',
  },
  tilledEarth: {
    hex: '#133020',
    name: 'Tilled Earth',
    role: 'Secondary Color · Assure & Digitise',
    attribute: 'Stability, Strength, Trust',
  },
  alabasterHay: {
    hex: '#F8EDD9',
    name: 'Alabaster Hay',
    role: 'Neutral Canvas',
    attribute: 'Balance, Clarity, Space',
  },
  borderAccent: '#A7C4A2',
  surfaceLight: '#F5F2EA',
};

export const DIVISIONS: Division[] = [
  {
    id: 'train',
    stepNumber: 1,
    verb: 'TRAIN',
    name: 'TradeCare Academy',
    tagline: 'We build the people who can meet the standard.',
    shortDesc: 'Building human capacity before crop cycles begin. Practical, graduate-led training that aligns farmer practices with rigorous international buyer audits.',
    brandColor: '#012A4A', // Deep Azure (Train Palette)
    accentBg: '#E3EEF7',
    textColor: '#012A4A',
    problem: {
      stat: '8M+',
      label: 'Kenyan farms audited',
      detail: 'Kenyan smallholder and medium-scale farms now sell into markets that audit them strictly. The gap is competence, not awareness.',
      summary: 'Untrained supply fails international audits and is shut out of the buyers that pay best.',
    },
    drivers: [
      'Extension serves food security, not markets: fewer than 5,000 public officers for 8 million farmers (1:1,600 ratio), mandated only to subsistence yield (Kilimo Trust / EAC, 2025).',
      'Graduates are not trained for market demand: Agriculture graduates leave with no practical, market-aligned training. Farms lack skilled advisers while graduates lack work.',
      'The audit bar keeps rising: Retailer audits and EU pesticide residue rules keep tightening. Digital advice alone moves yield by only 4% without hands-on field coaching.',
    ],
    solution: {
      headline: 'TradeCare Academy',
      subheadline: 'Practical, accredited agronomy education priced on results, not attendance.',
      statusBadge: 'IN TESTING',
      keyMetric: {
        value: '+35–56%',
        label: 'Yield gain achieved',
        citation: 'When practical training is combined with digital extension and guaranteed market access (Quasi-experimental study, 1,396 households, 2025).',
      },
      pillars: [
        {
          title: 'Graduate-Led Extension',
          desc: 'Agriculture graduates are trained and stationed in sedentary community hubs, driving market compliance farm by farm.',
        },
        {
          title: 'Ecosystem Training',
          desc: 'Comprehensive modules for agrodealers, aggregators, cooperatives, and processors surrounding each hub.',
        },
        {
          title: 'The Accredited Repository',
          desc: 'Open, accredited curriculum developed in collaboration with Wageningen and Meru Universities.',
        },
      ],
    },
    synergyInput: 'Receives real-time buyer standards and residue rule updates from FarmDataPod and TradeCare Market.',
    synergyOutput: 'Graduates and farmers equipped to implement disciplined field practices under Zao Safi Hubs.',
    partners: ['Wageningen University', 'Meru University of Science & Technology', 'Kilimo Trust'],
  },
  {
    id: 'produce',
    stepNumber: 2,
    verb: 'PRODUCE',
    name: 'Zao Safi Hub',
    tagline: 'We grow the crop to it, farm by farm.',
    shortDesc: 'Getting crops grown to international buyer specifications through in-house resident graduate agronomists and the proven RASTA methodology.',
    brandColor: '#076333', // La Salle Green (Produce Palette)
    accentBg: '#FFFCE1',
    textColor: '#1B2E1F',
    problem: {
      stat: '0.5 t vs 8 t',
      label: 'Marketable surplus per year',
      detail: 'Surplus per year on the same crop: the smallholder farms we support produce 0.5 tons compared to 8 tons achieved on a commercial estate.',
      summary: 'Training changes what a farmer knows. Only continuous field presence changes what a farmer does.',
    },
    drivers: [
      'Training stops at the farm gate: Advice given once, off-site, never becomes sustained practice in the field.',
      'Nobody stays for the full season: Public extension visits intermittently. The critical agronomy decisions that make or lose a crop are taken between visits.',
      'Farmers are not alike: Blanket advice fits nobody. Support must be tiered based on farmer capacity, farm typology, and soil chemistry.',
    ],
    solution: {
      headline: 'Zao Safi Hub',
      subheadline: 'In-house resident graduate agronomists at 1:50 intensive, 1:100 extensive ratios.',
      statusBadge: 'IN TESTING',
      keyMetric: {
        value: '3× Productivity',
        label: 'Surplus yield surge',
        citation: 'Measured in Embu macadamia cluster (20kg to 60+ kg per tree) and Lari horticulture hub.',
      },
      pillars: [
        {
          title: 'Dedicated Resident Agronomists',
          desc: '1:50 intensive coaching ratio ensures daily presence on critical spraying, pruning, and harvesting decisions.',
        },
        {
          title: 'Hub-and-Spoke Demo Farms',
          desc: 'Central model farms demonstrate real yield potential and act as localized testing grounds for regenerative inputs.',
        },
        {
          title: 'Cross-Subsidy Economics',
          desc: 'Hubs recover their operational costs via integrated assurance and trade facilitation rather than relying on farmer fees.',
        },
      ],
    },
    methodologyName: 'The RASTA Field Method',
    methodologySteps: [
      { letter: 'R', name: 'Register', desc: 'Every agronomic action captured at source on the farm.' },
      { letter: 'A', name: 'Analyse', desc: 'Compare real-time farm practices against tier-specific targets.' },
      { letter: 'S', name: 'Share', desc: 'Expose the exact yield and compliance gaps to the farmer.' },
      { letter: 'T', name: 'Train', desc: 'Deliver micro-coaching targeted precisely to close that identified gap.' },
      { letter: 'A', name: 'Act', desc: 'Farmer executes with agronomist coaching; each cycle sets a higher target.' },
    ],
    synergyInput: 'Translates knowledge from TradeCare Academy into daily physical field practice.',
    synergyOutput: 'Generates uncompromised, tamper-proof field records that feed directly into FarmDataPod.',
    partners: ['Lari Horticulture Cooperative', 'Kinale Farmers Group', 'Jungle Nuts'],
  },
  {
    id: 'digitise',
    stepNumber: 3,
    verb: 'DIGITISE',
    name: 'FarmDataPod',
    tagline: 'We record it — and read the market back.',
    shortDesc: 'A bi-directional digital data backbone carrying verified farm evidence outward to auditors, and premium market demand inward to farmers.',
    brandColor: '#4C7338', // Turf Green (Digital Solutions Palette)
    accentBg: '#E6F0E3',
    textColor: '#2E3233',
    problem: {
      stat: '0 Records',
      label: 'Standard smallholder documentation',
      detail: 'Most farms hold no spray, input, or yield history. Nothing to show an auditor. Nothing to show a tier-1 supermarket buyer.',
      summary: 'The farmer grows blind without knowing what the buyer wants, at what price, or to what export specification.',
    },
    drivers: [
      'Paper no longer qualifies: EU residue regulations require digitised spray ledgers; EUDR (EU Deforestation Regulation) mandates GPS plot polygon geolocation.',
      'Farm data alone is only half the picture: Capturing what happened on the farm does not predict what the market will buy, or at what price.',
      'The value chain is heavily fragmented: Buyers, agrodealers, aggregators, and processors each hoard separate data silos. Nobody sees the whole chain.',
    ],
    solution: {
      headline: 'FarmDataPod Platform',
      subheadline: 'Two-way digital control tower linking farm plot telemetry with international buyers.',
      statusBadge: 'IN TESTING',
      keyMetric: {
        value: '100% Consent',
        label: 'Digital data captured at source',
        citation: 'Live across all 275 Lari cooperative producers with GPS mapping and automated audit trail generation.',
      },
      pillars: [
        {
          title: 'The Connected Value Chain',
          desc: 'Buyers, agrodealers, and processors collaborate on one platform — market demand is built in advance, not awaited after harvest.',
        },
        {
          title: 'Curriculum Synchronization',
          desc: 'When an EU residue or retailer rule updates, Academy content and agronomist protocols update automatically in real-time.',
        },
        {
          title: 'Evidence on Demand',
          desc: 'Regulator, export certifier, supermarket buyer, and consumer verified from the exact same source record.',
        },
      ],
    },
    synergyInput: 'Ingests every RASTA field entry recorded live during Zao Safi Hub farm visits.',
    synergyOutput: 'Supplies TCert with zero-reconstruction audit trails and TradeCare Market with verifiable supply data.',
    partners: ['EUDR Compliance Taskforce', 'Kenya National Agritech Registry', 'GS1 Standards'],
  },
  {
    id: 'assure',
    stepNumber: 4,
    verb: 'ASSURE',
    name: 'TCert',
    tagline: 'We certify it, independently.',
    shortDesc: 'Independent, accredited certification authority issuing verified credentials (TCert) based on real-time FarmDataPod evidence rather than reconstructed paper.',
    brandColor: '#407E8C', // Teal (Official TCert Palette)
    accentBg: '#E8F2F3',
    textColor: '#083A4F', // Navy
    problem: {
      stat: 'Self-Declared',
      label: 'Produce rejected by formal markets',
      detail: 'A farmer’s own word opens no formal export market. Buyers, retailers, and international regulators require accredited third-party certification.',
      summary: 'Without accredited certification, high-quality organic produce is forced into the informal market at distress prices.',
    },
    drivers: [
      'Traditional certification was built for large estates: Cost, paperwork, and audit overhead assume a 500-acre single farm. A smallholder cannot bear this alone.',
      'Evidence is reconstructed after the fact: In standard audits, records are fabricated or retrofitted weeks before the inspector arrives—which modern audits reject.',
      'Requirements multiply relentlessly: Food safety, pesticide MRLs, social compliance, child labor prohibitions, and environmental rules each demand distinct proof.',
    ],
    solution: {
      headline: 'TCert Certification Body',
      subheadline: 'Structurally independent certification body operating on the international FLOCERT model.',
      statusBadge: 'LIVE TODAY',
      keyMetric: {
        value: '300+',
        label: 'Paying assurance clients',
        citation: 'Operating independent international compliance audits since 2017.',
      },
      pillars: [
        {
          title: 'Independent by Design',
          desc: 'Operating since 2017, TCert maintains complete governance separation from hub operations on the FLOCERT model.',
        },
        {
          title: 'Zero Paper Reconstruction',
          desc: 'Unbroken RASTA records held continuously in FarmDataPod constitute the real-time audit trail itself.',
        },
        {
          title: 'Smallholder Group Certification',
          desc: 'Aggregates smallholders under verified Internal Control Systems (ICS) to slash per-farmer audit costs by over 75%.',
        },
      ],
    },
    synergyInput: 'Validates raw production data and farm geolocations stream from FarmDataPod.',
    synergyOutput: 'Issues certified TCert credentials enabling produce to be listed with premium pricing on TradeCare Market.',
    partners: ['Independent Assurance', 'GLOBALG.A.P.', 'ISO 22000', 'Organic FSMS'],
  },
  {
    id: 'connect',
    stepNumber: 5,
    verb: 'CONNECT',
    name: 'TradeCare Market',
    tagline: 'We sell it to buyers who pay more.',
    shortDesc: 'Matching certified Zao Safi produce directly to contracted domestic, regional, and export buyers, supported by contracted cold-chain logistics.',
    brandColor: '#DD5C36', // Cherry Grove (Connect Palette)
    accentBg: '#FDE8E2',
    textColor: '#8C2B0E',
    problem: {
      stat: 'Certified, Unsold',
      label: 'The smallholder trap',
      detail: 'A certificate opens a door. It does not find the buyer, negotiate price, finance processing, or arrange refrigerated haulage.',
      summary: 'A farm that can fill a domestic supermarket order cannot fill an export maritime container alone. Capacity decides the market.',
    },
    drivers: [
      'One farmer, one buyer, all the risk: A single off-take relationship collapses the instant that buyer changes plans, leaving the farmer with zero recourse.',
      'Small individual volumes never reach big buyers: No single smallholder possesses export volume, and aggregating disparate farms is nobody’s core job.',
      'Processing and cold logistics are missing: Farmers who cannot chill or grade produce must dump it raw at the nearest local market for pennies.',
    ],
    solution: {
      headline: 'TradeCare Market',
      subheadline: 'Only produce from the Zao Safi platform is listed — 100% certified and traceable to the plot.',
      statusBadge: 'IN DEVELOPMENT',
      keyMetric: {
        value: '+245%',
        label: 'Net farmer income surge',
        citation: 'Proven in Embu macadamia supply chain with Jungle Nuts, now live in Kiambu with Carrefour & QuickMart.',
      },
      pillars: [
        {
          title: 'Registered Buyer Marketplace',
          desc: 'Tier-1 domestic supermarkets (Carrefour, QuickMart), regional processors, and European exporters on one verified platform.',
        },
        {
          title: 'Capacity & Standard Matching',
          desc: 'Each farm cluster is algorithmically matched to the exact markets its certified volume can satisfy—and always to multiple buyers.',
        },
        {
          title: 'Contract Processing & Cold Chain',
          desc: 'Farmers utilize contracted cold stores, refrigerated hauliers, and packhouses without having to fund capital equipment.',
        },
      ],
    },
    synergyInput: 'Draws exclusively from certified produce pools authenticated by TCert.',
    synergyOutput: 'Feeds live buyer price benchmarks and quality specs back to TradeCare Academy and Zao Safi Hubs to complete the ecosystem loop.',
    partners: ['Carrefour Kenya', 'QuickMart Supermarkets', 'Jungle Nuts', 'Contracted Cold-Chain Hauliers'],
  },
];

export const FOUNDER_DATA = {
  name: 'Joyce Wambui Gema',
  role: 'Founder & Managing Director',
  foundedYear: 2014,
  companyName: 'TradeCare Africa Limited',
  award: 'Agricultural Consultancy Award 2023',
  quote: 'Farmers must keep ownership of their land and their crop. Our duty is not to hand out charity, but to assemble the whole chain around them—so their hard work produces market-ready crops, verified proof, independent certification, and direct sales to buyers who pay what their produce is truly worth.',
  biography: [
    'Joyce Wambui Gema is a respected pioneer in African agricultural value-chain transformation. Over more than a decade of leadership at TradeCare Africa, she recognized that Kenya’s 8 million farmers were being failed by piecemeal interventions—isolated training seminars that stopped at the farm gate, technology apps that recorded data with no market attached, and certification schemes designed solely for colonial-era mega estates.',
    'Her breakthrough insight was structural: one company had to assemble and operate all five stages of the supply chain under a single control tower. Under her guidance, TradeCare Africa has grown from a specialized consultancy into an integrated Service Ecosystem comprising TradeCare Academy, Zao Safi Hubs, FarmDataPod, TCert, and TradeCare Market.',
    'In 2023, Joyce was honored with the Agricultural Consultancy Award in recognition of TradeCare’s transformational work lifting thousands of farming households in Embu, Kiambu, and across East Africa sustainably above the poverty line.',
  ],
  keyAchievements: [
    'Spearheaded the 10-year Embu organic macadamia initiative with Jungle Nuts, documented by IDH / NewForesight (2019).',
    'Established TCert in 2017 as an independent accredited certification body.',
    'Architected the RASTA field agronomy methodology and FarmDataPod digital compliance spine.',
    'Negotiated supply agreements with leading national retailers including Carrefour and QuickMart.',
  ],
};

export const CASE_STUDIES = [
  {
    id: 'embu',
    title: 'Embu Organic Macadamia Cluster',
    partner: 'Jungle Nuts Kenya',
    period: '2017–2019 (10-Year Modeled Cohort)',
    status: 'Proven & Independently Assessed',
    auditor: 'IDH / NewForesight (Public SDM Case Report, April 2019)',
    summary: 'Building a complete service delivery model across 1,800 organic macadamia farmers organized in 14 distinct village clusters.',
    metrics: [
      { value: '+245%', label: 'Net smallholder income by Year 10' },
      { value: '20 → 60+ kg', label: 'Annual yield per tree (tripled)' },
      { value: '3.15×', label: 'Above poverty line (up from 0.85×)' },
      { value: 'US$11.74', label: 'Farm-level value per $1 invested' },
    ],
    lessonsLearned: [
      'The cluster is the functional unit: Aggregation works best at 30–170 farmers. Today’s Zao Safi Hub is its institutional successor.',
      'Digital transparency builds trust: Unassailable records became the FarmDataPod and TCert compliance spine.',
      'Incentives must reward actual field practice: Premium prices must be directly tied to verifiable harvest quality.',
    ],
  },
  {
    id: 'lari',
    title: 'Lari Horticulture Cooperative (Kinale Hub)',
    partner: 'Lari Horticulture Cooperative Society',
    period: 'Active Operations (Running Now)',
    status: 'Live Deployment',
    auditor: 'TradeCare Producer Registration Records (August 2026)',
    summary: 'Deploying the full TradeCare suite for high-value cool-climate vegetables, snow peas, and brassicas in Kiambu County.',
    metrics: [
      { value: '275', label: 'Producers registered (100% of coop)' },
      { value: '144', label: 'Farmers actively running RASTA' },
      { value: '100%', label: 'Farmer data consent captured' },
      { value: 'Oct 2026', label: 'All producers into full CONNECT offtake' },
    ],
    buyers: ['Carrefour Kenya', 'QuickMart Supermarkets', 'Local Premium Wholesalers'],
    lessonsLearned: [
      'Resident agronomists coaching 1:50 ensure 0% pesticide residue rejection on supermarket shelves.',
      'GPS plot mapping prepares smallholders in advance for EUDR compliance ahead of enforcement deadlines.',
      'Cooperative members retain 100% crop title while accessing cold-chain haulage directly to Nairobi distribution hubs.',
    ],
  },
];

export const COMPETITOR_COMPARISON = {
  stages: ['Train', 'Produce', 'Digitise', 'Assure', 'Connect'],
  entities: [
    {
      name: 'TradeCare Africa',
      type: 'Integrated Ecosystem',
      stages: [true, true, true, true, true],
      highlight: true,
      note: 'One company runs all 5 stages. Nobody else in Kenya does.',
    },
    {
      name: 'Certification Bodies (SGS, BV, Control Union, AfriCert)',
      type: 'Pure Auditing',
      stages: [false, false, false, true, false],
      highlight: false,
      note: 'Issue paper audits. Do not train farmers, improve farm yields, or purchase crops.',
    },
    {
      name: 'Agritech Platforms (Apollo, iProcure, DigiCow)',
      type: 'Software / Input Credit',
      stages: [false, false, true, false, false],
      highlight: false,
      note: 'Provide digital tools or input loans. Cannot legally certify or guarantee buyer off-take.',
    },
    {
      name: 'NGO & Donor Programmes',
      type: 'Grant Funded',
      stages: [true, true, false, false, false],
      highlight: false,
      note: 'Offer episodic training and seeds. Collapse once donor funding cycle expires.',
    },
    {
      name: 'Produce Brokers & Middlemen',
      type: 'Trading Intermediaries',
      stages: [false, false, false, false, true],
      highlight: false,
      note: 'Speculative traders buying cheap at farm gate. Zero quality assistance or traceability.',
    },
  ],
  barriers: [
    {
      division: 'TRAIN',
      title: 'Curriculum Tied to Live Standards',
      desc: 'Built jointly with Wageningen and Meru Universities. A software content platform cannot replicate this practical agronomic rigour.',
    },
    {
      division: 'PRODUCE',
      title: 'The Cross-Subsidy Structure',
      desc: 'Zao Safi Hubs recover only part of their cost from extension fees; assurance and market fees carry the rest. Single-service competitors cannot build them commercially.',
    },
    {
      division: 'ASSURE',
      title: 'Independent Certification Authority',
      desc: 'TCert operating since 2017 as an independent accredited certification body. An agritech startup cannot legally issue a certificate at any valuation.',
    },
    {
      division: 'CONNECT',
      title: 'Tier-1 Buyers Already Under Contract',
      desc: 'Named retail buyers (Carrefour, QuickMart), signed refrigerated logistics agreements, and the recognized Mazao Safi consumer trust mark.',
    },
  ],
};

export const MARKET_DATA = {
  tam: {
    value: '~US$2.6B',
    label: 'Total Addressable Market',
    subtext: 'Digital agriculture & agri-services across Sub-Saharan Africa (CTA / Dalberg)',
  },
  sam: {
    value: 'US$105M/yr',
    label: 'Serviceable Addressable Market',
    subtext: 'Kenyan farmers within reach of a hub, plus the supply bases behind our assurance clients',
  },
  som: {
    value: 'US$14.5M/yr',
    label: 'Obtainable by 2032',
    subtext: '30,000 farmers across 30 regional hubs — under 1% of Kenya’s serviceable market',
  },
  revenueDrivers: [
    { division: 'TRAIN · PRODUCE', stream: 'Farmer Services', formula: 'Farmers by tier × US$55 / 251 / 808 per year' },
    { division: 'DIGITISE', stream: 'Platform Licences', formula: 'Cooperatives and packhouses × US$6,000 per year' },
    { division: 'ASSURE', stream: 'Certification Fees', formula: 'Certifiable operations × US$2,800 + annual surveillance' },
    { division: 'CONNECT', stream: 'Trade Facilitation', formula: 'Addressable GMV × 2.5% (well below our 10–20% book)' },
  ],
};

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  divisionId?: 'train' | 'produce' | 'digitise' | 'assure' | 'connect';
  divisionName: string;
  verb: string;
  brandColor: string;
  accentBg: string;
  textColor: string;
  credentials: string[];
  bio: string;
  quote: string;
  coreResponsibilities: string[];
  keyMetric: {
    value: string;
    label: string;
  };
  image: string;
  imageAlt: string;
  isFounder?: boolean;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'joyce-gema',
    name: 'Joyce Wambui Gema',
    role: 'Founder & Managing Director',
    divisionName: 'TradeCare Africa Limited',
    verb: 'LEAD',
    brandColor: '#DD5C36',
    accentBg: '#FDE8E2',
    textColor: '#133020',
    credentials: [
      'Agricultural Consultancy Award Winner 2023',
      'MSc Agriculture & Rural Development',
      '15+ Years Pioneer in East African Value Chain Design'
    ],
    bio: 'Founded TradeCare Africa in 2014 with a resolute conviction: smallholder farmers achieve lasting prosperity only when all five critical supply-chain stages operate under a single, accountable control tower.',
    quote: 'Farmers must keep ownership of their land and their crop. Our duty is not charity, but to assemble the whole chain around them so their hard work translates directly into premium market off-take.',
    coreResponsibilities: [
      'Ecosystem strategy, capital allocation, and cross-subsidy architecture across all 5 divisions',
      'Executive governance aligning smallholder farmer equity with formal institutional buyers',
      'Public-private partnerships with IDH, Wageningen, and national agricultural bodies'
    ],
    keyMetric: {
      value: `${YEARS_IN_OPERATION} Yrs`,
      label: `Proven operating track record since ${FOUNDED_YEAR}`
    },
    image: '/images/team/1.png',
    imageAlt: 'Joyce Wambui Gema, Founder and Managing Director of TradeCare Africa',
    isFounder: true
  },
  {
    id: 'david-mwangi',
    name: 'Dr. David Mwangi',
    role: 'Service Ecosystem Lead · TradeCare Academy',
    divisionId: 'train',
    divisionName: 'TradeCare Academy',
    verb: 'TRAIN',
    brandColor: '#012A4A',
    accentBg: '#E3EEF7',
    textColor: '#012A4A',
    credentials: [
      'PhD Tropical Agronomy (Wageningen Affiliate)',
      'MSc Crop Science & Applied Extension',
      'Lead Curriculum Developer with Meru University'
    ],
    bio: 'Pioneered the practical curriculum bridging university agriculture graduates into resident commercial agronomists stationed within farmer clusters.',
    quote: 'We do not sell lecture tickets; we measure success by the compliance and harvest yield of the farmer in the orchard.',
    coreResponsibilities: [
      'Curriculum co-development with Wageningen & Meru Universities',
      'Accredited certification for graduate agronomists in GLOBALG.A.P. & Kenya Organic Standards',
      'Field-level training modules for smallholder cooperatives and exporter cohorts'
    ],
    keyMetric: {
      value: '12,000+',
      label: 'Farmers and extension cadres trained to date'
    },
    image: '/images/academy_training_field_1793344044305.jpg',
    imageAlt: 'TradeCare Academy field agronomy training with smallholder farmers'
  },
  {
    id: 'grace-kinyua',
    name: 'Grace Muthoni Kinyua',
    role: 'Service Ecosystem Lead · Zao Safi Extension Hub',
    divisionId: 'produce',
    divisionName: 'Zao Safi Extension Hub',
    verb: 'PRODUCE',
    brandColor: '#076333',
    accentBg: '#E6F7E8',
    textColor: '#076333',
    credentials: [
      'BSc Horticulture & Plant Pathology',
      'GLOBALG.A.P. Registered Technical Consultant',
      '12 Years Field Operations & Aggregation Leadership'
    ],
    bio: 'Oversees on-farm operations across regional extension hubs, ensuring farmers transition from subsistence methods to precision agronomy and cold-chain readiness.',
    quote: 'Stationing agronomists at a 1:50 farmer ratio guarantees zero chemical residue rejections and consistent harvest quality.',
    coreResponsibilities: [
      'Managing resident extension agronomists across Lari, Kiambu, and Embu hubs',
      'Soil health management, biological pest regimes, and post-harvest handling protocols',
      'Pre-cooling and cooperative aggregation center quality control'
    ],
    keyMetric: {
      value: '3.15×',
      label: 'Poverty line multiple achieved for cluster producers'
    },
    image: '/images/zao_safi_harvest_1793344045547.jpg',
    imageAlt: 'Fresh export Hass avocados and vegetables managed by Zao Safi Extension'
  },
  {
    id: 'kelvin-ochieng',
    name: 'Eng. Kelvin Ochieng',
    role: 'Service Ecosystem Lead · Farm Data Pod',
    divisionId: 'digitise',
    divisionName: 'Farm Data Pod',
    verb: 'DIGITISE',
    brandColor: '#4C7338',
    accentBg: '#EBF4E5',
    textColor: '#133020',
    credentials: [
      'BSc Computer Engineering & Spatial GIS',
      'Certified Lead System Architect',
      'EUDR Compliance & Digital Traceability Specialist'
    ],
    bio: 'Architected the FarmDataPod digital compliance backbone, enabling offline GPS parcel mapping and tamper-proof traceability across thousands of fragmented plots.',
    quote: 'Data without a market connection is useless overhead. FarmDataPod records what buyers require to pay premium prices.',
    coreResponsibilities: [
      'GPS plot polygon mapping and satellite deforestation screening (EUDR readiness)',
      'Offline digital input tracking, spray records, and harvest batch generation',
      'API integrations connecting farmer cooperatives with financial and retail partners'
    ],
    keyMetric: {
      value: '100%',
      label: 'Smallholder verifiable consent and GPS traceability'
    },
    image: '/images/farm_data_pod_digital_1793344046730.jpg',
    imageAlt: 'Agronomist recording GPS compliance records on FarmDataPod'
  },
  {
    id: 'faith-karanja',
    name: 'Faith Njoki Karanja',
    role: 'Service Ecosystem Lead · TCert',
    divisionId: 'assure',
    divisionName: 'TCert (Assure)',
    verb: 'ASSURE',
    brandColor: '#407E8C',
    accentBg: '#E8F2F3',
    textColor: '#083A4F',
    credentials: [
      'Lead Auditor ISO 17065, ISO 22000 & GLOBALG.A.P.',
      'BSc Food Science & Technology',
      'Independent Conformity Assessment Authority'
    ],
    bio: 'Directs independent conformity assessment and audit operations at TCert, maintaining strict legal and structural separation from extension activities to guarantee audit objectivity.',
    quote: 'Buyers do not buy a certificate on paper; they buy confidence in an accredited, uncompromised system.',
    coreResponsibilities: [
      'Independent third-party conformity audits for smallholder groups and large packhouses',
      'Accredited certification under ISO 17065, GLOBALG.A.P. IFA, and Organic standards',
      'Surveillance audits and unannounced residue testing regimes'
    ],
    keyMetric: {
      value: 'Since 2017',
      label: 'Independent third-party accreditation and certification operations'
    },
    image: '/images/tcert_inspection_audit_1793344046749.jpg',
    imageAlt: 'TCert quality assurance inspector verifying export standards'
  },
  {
    id: 'samuel-kiprono',
    name: 'Samuel Kiprono',
    role: 'Service Ecosystem Lead · TradeCare Market',
    divisionId: 'connect',
    divisionName: 'TradeCare Market',
    verb: 'CONNECT',
    brandColor: '#DD5C36',
    accentBg: '#FDE8E2',
    textColor: '#133020',
    credentials: [
      'MBA Agribusiness Supply Chain Management',
      'MCIPS Chartered Procurement Professional',
      'Former Fresh Produce Commercial Export Director'
    ],
    bio: 'Leads commercial off-take agreements, cold-chain haulage, and market linkage partnerships with national retail chains (Carrefour, QuickMart) and international wholesale importers.',
    quote: 'When the preceding four stages are executed rigorously, market off-take is not a speculation—it is an assured commercial contract.',
    coreResponsibilities: [
      'Direct supplier contracts with Tier-1 supermarkets and European organic buyers',
      'Management of the Mazao Safi consumer trust mark and premium retail positioning',
      'Cold-chain logistics coordination from rural farm hubs to central consolidation centers'
    ],
    keyMetric: {
      value: '+10–20%',
      label: 'Average price premium delivered to hub producers over farm-gate brokers'
    },
    image: '/images/market_export_packhouse_1793344064517.jpg',
    imageAlt: 'TradeCare Market cold-chain export packhouse and logistics facility'
  }
];

