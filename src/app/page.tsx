import Link from 'next/link';
import Image from 'next/image';
import { Award, FileText, Layers, ShieldCheck, Store } from 'lucide-react';
import { COMPETITOR_COMPARISON, FOUNDER_DATA, TEAM_MEMBERS } from '@/data/tradecareData';
import { ECOSYSTEM_PATH, IMG, SITE, ecosystemList, projectList } from '@/lib/site';
import { productTheme } from '@/lib/productColors';
import { YEARS_IN_OPERATION } from '@/data/companyContent';
import { PRODUCT_ICONS } from '@/lib/productIcons';
import { HeroSlider, type Slide } from '@/components/home/HeroSlider';
import { CardCarousel } from '@/components/home/CardCarousel';
import { CountUp } from '@/components/CountUp';
import { SectionTitle } from '@/components/SectionTitle';
import { ImageCard } from '@/components/ImageCard';

/** Hero image per product, chosen so the picture matches the slide's word (Train → training, Assure → inspection…). */
const HERO_IMAGES: Record<(typeof ecosystemList)[number]['slug'], { src: string; alt: string }> = {
  academy: { src: '/images/academy_training_field_1793344044305.jpg', alt: 'TradeCare Academy trainer leading a field training session with smallholder farmers' },
  zaosafi: { src: '/images/zao_safi_harvest_1793344045547.jpg', alt: 'Farmer with crates of freshly harvested avocados and vegetables' },
  farmdatapod: { src: '/images/farm_data_pod_digital_1793344046730.jpg', alt: 'Field officer recording farm data on a tablet in an orchard' },
  tcert: { src: '/images/tcert_inspection_audit_1793344046749.jpg', alt: 'Quality inspector checking produce on a packhouse line' },
  market: { src: '/images/market_export_packhouse_1793344064517.jpg', alt: 'Packed produce being loaded for market at a cold-chain warehouse' },
};

const slides: Slide[] = [
  {
    word: 'Ecosystem',
    title: 'One company. The whole chain.',
    text: 'A women-led Kenyan agri-services company trading since 2014. A complete Service Ecosystem operating under a single supply-chain control tower.',
    cta: 'Partner With TradeCare',
    href: '/contact',
    image: IMG.hero,
    alt: 'Lush terraced highland avocado and horticulture smallholder farms in Kenya at golden sunrise',
  },
  ...ecosystemList.map((d) => ({
    word: d.verb,
    title: d.detail.heroHeadline,
    text: d.tagline,
    cta: `Explore ${d.name}`,
    href: d.href,
    image: HERO_IMAGES[d.slug].src,
    alt: HERO_IMAGES[d.slug].alt,
  })),
];

const stats = [
  { end: 245, prefix: '+', suffix: '%', label: 'Net smallholder income by Year 10 (Embu)' },
  { end: 300, suffix: '+', label: 'Paying assurance clients since 2017' },
  { end: 1800, label: 'Organic macadamia farmers in 14 clusters' },
  { end: 275, label: 'Lari producers registered (100% of coop)' },
];

const BARRIER_ICONS = [Layers, Award, ShieldCheck, Store];

export default function HomePage() {
  return (
    <>
      <HeroSlider slides={slides} />

      {/* About */}
      <section className="section">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative pb-16 pl-4 sm:pl-6 lg:pr-16">
            <div aria-hidden="true" className="absolute -top-6 left-0 h-32 w-32 rounded-lg bg-primary/10 sm:h-48 sm:w-48" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
              <Image quality={90} src={IMG.academy} alt="African woman tending crops in a fertile field beneath a mountain"
                fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
            </div>
            <div className="absolute right-0 bottom-0 aspect-square w-2/5 overflow-hidden rounded-lg border-8 border-white shadow-lg">
              <Image quality={90} src={IMG.founder} alt="Joyce Wambui Gema, Founder and CEO of TradeCare Africa" fill sizes="(min-width:1024px) 20vw, 40vw" className="object-cover" />
            </div>
            {/* Company guideline is a PDF document, not a video: opens in a new tab (browser PDF viewer, with download). */}
            <a href={SITE.downloads[0].href} target="_blank" rel="noopener" type="application/pdf"
              aria-label="View company guideline (PDF, opens in a new tab)"
              className="absolute top-1/3 left-1/3 flex flex-col items-center gap-1 rounded-xl bg-white/95 px-4 py-3 text-ink shadow-xl ring-4 ring-primary/30 transition hover:ring-primary">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white sm:h-14 sm:w-14">
                <FileText className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
              </span>
              <span className="text-xs font-bold tracking-wide uppercase">View PDF</span>
            </a>
            <div className="absolute bottom-4 left-0 rounded-lg bg-ink-bg px-5 py-4 shadow-lg sm:left-4 sm:px-6 sm:py-5">
              <p className="text-3xl font-extrabold text-primary sm:text-4xl"><CountUp end={YEARS_IN_OPERATION} suffix="+" /></p>
              <p className="text-sm font-bold text-white">Years Experience</p>
            </div>
          </div>
          <div>
            <span className="eyebrow">About TradeCare Africa</span>
            <h2 className="mb-6">One company. <span className="text-primary">The whole chain.</span></h2>
            <div className="prose-site">
              <p>{SITE.description}</p>
              <p>{FOUNDER_DATA.biography[1]}</p>
              <p className="border-l-4 border-primary pl-5 font-medium text-ink italic">
                “Our Service Ecosystem unites all 5 stages under one roof: TradeCare Academy trains, Zao Safi coaches production, Farm Data Pod digitises records, TCert assures standards, and TradeCare Market connects farmers to high-value buyers.”
              </p>
            </div>
            <Link href="/about" className="btn-primary">More About Us</Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-white pb-32 lg:pb-40">
        <div className="container-site">
          <SectionTitle center eyebrow="Service Ecosystem · Five Integrated Pillars" title="One Service Ecosystem, One Control Tower"
            intro="Synchronizing Training, Field Agronomy, Digital Traceability, Accredited Certification, and Direct Offtake under one control tower." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {ecosystemList.map((d) => {
              const Icon = PRODUCT_ICONS[d.slug];
              return (
                <article key={d.slug} {...productTheme(d.slug)}
                  className="card group relative flex flex-col bg-white p-6 hover:shadow-xl sm:p-8">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-product-tint text-product-ink transition group-hover:bg-product-solid group-hover:text-white">
                    <Icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <span className="mb-3 inline-block self-start rounded-full bg-product-tint px-3 py-1 text-xs font-bold tracking-[0.05em] text-product-ink uppercase">
                    0{d.stepNumber} · {d.verb}
                  </span>
                  <h3 className="mb-3 text-xl">
                    <Link href={d.href} className="transition after:absolute after:inset-0 hover:text-product-ink">{d.name}</Link>
                  </h3>
                  <p className="text-sm">{d.shortDesc}</p>
                </article>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link href={ECOSYSTEM_PATH} className="btn-primary">Explore the Service Ecosystem</Link>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <div className="container-site relative z-10 -mt-16">
        <div className="relative overflow-hidden rounded-lg bg-primary px-6 py-10 shadow-xl sm:px-8 sm:py-12">
          <Image quality={90} src={IMG.hero} alt="" fill sizes="100vw" className="object-cover opacity-10 mix-blend-multiply" />
          <dl className="relative grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dd className="text-4xl font-bold text-white sm:text-5xl"><CountUp end={s.end} prefix={s.prefix} suffix={s.suffix} /></dd>
                <dt className="mt-2 text-sm font-medium text-white/90">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Projects */}
      <section className="section">
        <div className="container-site">
          <SectionTitle eyebrow="Proven Impact" title="Empirical results from the field"
            intro="Independently assessed outcomes and live deployments of the full TradeCare suite across Embu and Kiambu counties." />
          <CardCarousel label="Projects">
            {projectList.map((p) => (
              <ImageCard key={p.id} href={p.href} image={p.image} imageAlt={p.title} kicker={p.status} title={p.title} text={p.summary} cta="View Project" />
            ))}
          </CardCarousel>
        </div>
      </section>

      {/* CTA band */}
      <section className="relative overflow-hidden bg-ink-bg py-24 lg:py-32">
        <Image quality={90} src="/images/african-agriculture/nigeria-tomato-harvest.jpg" alt="" fill sizes="100vw" className="object-cover opacity-50" />
        <div className="container-site relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <h2 className="max-w-3xl text-[clamp(1.75rem,1.2rem+2.6vw,3rem)] text-white">
            Farmers keep their land and their crop. We assemble the <span className="text-primary">whole chain</span> around them.
          </h2>
          <Link href="/contact" className="btn-primary shrink-0">Partner With TradeCare</Link>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] sm:aspect-[4/5] overflow-hidden rounded-lg shadow-lg">
            <Image quality={90} src={IMG.tcert} alt="Vendor sorting onions at an outdoor market in Maiduguri, Nigeria"
              fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
          </div>
          <div>
            <span className="eyebrow">Why Choose TradeCare</span>
            <h2 className="mb-6">One company runs all 5 stages. Nobody else in Kenya does.</h2>
            <p className="mb-10">{FOUNDER_DATA.biography[0]}</p>
            <ul className="space-y-8">
              {COMPETITOR_COMPARISON.barriers.map((b, i) => {
                const Icon = BARRIER_ICONS[i % BARRIER_ICONS.length];
                return (
                  <li key={b.title} className="flex gap-5">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-primary text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="mb-1 text-lg">{b.title}</h3>
                      <p className="text-sm">{b.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* Leadership (blog/news slot) */}
      <section className="section bg-white">
        <div className="container-site">
          <SectionTitle center eyebrow="Leadership & Service Ecosystem Leads" title="The people behind the chain" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM_MEMBERS.slice(0, 3).map((m) => (
              <ImageCard key={m.id} href={`/team#${m.id}`} image={m.image} imageAlt={m.imageAlt} kicker={m.role} title={m.name} text={m.bio} cta="Meet the Team" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
