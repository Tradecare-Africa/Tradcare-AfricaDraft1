import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Award, Check, Quote } from 'lucide-react';
import { FOUNDER_DATA } from '@/data/tradecareData';
import { IMG, ECOSYSTEM_PATH } from '@/lib/site';
import { PageHeader } from '@/components/PageHeader';
import { SectionTitle } from '@/components/SectionTitle';

export const metadata: Metadata = {
  title: 'Our Founder: Joyce Wambui Gema',
  description:
    'Joyce Wambui Gema founded TradeCare Africa in 2014 to run the whole agricultural supply chain for Kenyan smallholder farmers under one company.',
};

const MILESTONES = [
  { year: '2014', text: 'Founded TradeCare Africa' },
  { year: '2017', text: 'Established TCert, independent assurance' },
  { year: '2019', text: 'IDH Embu macadamia study: +245% net income' },
  { year: '2023', text: 'Agricultural Consultancy Award winner' },
];

export default function FounderPage() {
  const f = FOUNDER_DATA;
  return (
    <>
      <PageHeader title="Our Founder" image={IMG.founder} imageLayout="portrait" />

      <section className="section">
        <div className="container-site grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="relative aspect-[37/44] overflow-hidden rounded-2xl shadow-lg">
              <Image quality={90} src={IMG.founder} alt={`${f.name}, ${f.role} of TradeCare Africa`} fill priority
                sizes="(min-width:1024px) 40vw, 100vw" className="object-cover object-top" />
            </div>
            <div className="card mt-6 p-5">
              <p className="flex items-center gap-2 text-xs font-bold tracking-[0.05em] text-secondary uppercase">
                <Award className="h-4 w-4 text-wheat" aria-hidden="true" /> National Industry Honour
              </p>
              <p className="mt-1 text-lg font-bold text-ink">{f.award}</p>
              <p className="mt-1 text-sm">Recognising more than a decade of work transforming smallholder agricultural value chains.</p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <span className="eyebrow">{f.role} · Since {f.foundedYear}</span>
            <h2 className="mb-6 text-[clamp(1.75rem,1.2rem+2vw,2.75rem)] leading-tight">{f.name}</h2>
            <div className="space-y-4">
              {f.biography.map((p) => <p key={p.slice(0, 32)}>{p}</p>)}
            </div>
            <figure className="mt-8 rounded-2xl border-l-4 border-primary bg-cream p-6">
              <Quote className="mb-3 h-6 w-6 text-primary" aria-hidden="true" />
              <blockquote className="text-lg leading-relaxed text-ink italic">“{f.quote}”</blockquote>
              <figcaption className="mt-3 text-sm font-bold text-primary">— {f.name}</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-site">
          <SectionTitle center eyebrow="Milestones" title="A decade of building the whole chain" />
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {MILESTONES.map((m) => (
              <li key={m.year} className="card p-6">
                <p className="text-3xl font-extrabold text-primary">{m.year}</p>
                <p className="mt-2 text-sm">{m.text}</p>
              </li>
            ))}
          </ol>

          <h3 className="mt-16 mb-6 text-2xl">Signature achievements</h3>
          <ul className="grid gap-4 md:grid-cols-2">
            {f.keyAchievements.map((a) => (
              <li key={a} className="flex items-start gap-3 rounded-xl border border-line bg-cream p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-white">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-sm text-ink">{a}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">Connect With Leadership</Link>
            <Link href={ECOSYSTEM_PATH}
              className="inline-flex min-h-11 items-center rounded-lg border border-line bg-cream px-6 font-bold text-ink transition hover:border-primary hover:text-primary">
              Explore the Service Ecosystem
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
