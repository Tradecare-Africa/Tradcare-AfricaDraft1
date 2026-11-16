import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, X } from 'lucide-react';
import { COMPETITOR_COMPARISON, FOUNDER_DATA, MARKET_DATA } from '@/data/tradecareData';
import { SITE } from '@/lib/site';
import { CONSULTING_SERVICES, MISSION, NUTRITION_GARDEN_PHOTOS, RESEARCH_PORTFOLIO, PARTNER_NETWORK, PARTNER_NETWORK_INTRO, TRACK_RECORD, WHY_CHOOSE_US, WHY_CHOOSE_US_INTRO } from '@/data/companyContent';
import { PageHeader } from '@/components/PageHeader';
import { ServicesSidebar } from '@/components/ServicesSidebar';
import { SectionTitle } from '@/components/SectionTitle';

export const metadata: Metadata = { title: 'About' };

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About TradeCare Africa" image="/images/african-agriculture/african-field-worker.jpg" />
      <section className="section">
        <div className="container-site grid gap-12 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div>
            <span className="eyebrow">Who We Are</span>
            <h2 className="mb-6">{SITE.tagline}</h2>
            <div className="prose-site">
              <p>{SITE.description}</p>
              <p>{WHY_CHOOSE_US_INTRO}</p>
            </div>
            <Link href="/founder" className="card mt-8 flex items-center justify-between gap-4 p-5 transition hover:border-primary">
              <span>
                <span className="eyebrow">Our Founder</span>
                <span className="block font-bold text-ink">Meet {FOUNDER_DATA.name}, {FOUNDER_DATA.role}</span>
              </span>
              <ArrowRight className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            </Link>
          </div>
          <ServicesSidebar />
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-site">
          <SectionTitle eyebrow="Market Opportunity" title="Sizing the market" />
          <div className="grid gap-6 md:grid-cols-3">
            {[MARKET_DATA.tam, MARKET_DATA.sam, MARKET_DATA.som].map((m) => (
              <div key={m.label} className="rounded-lg bg-cream p-8 shadow-md">
                <p className="text-4xl font-extrabold text-primary">{m.value}</p>
                <p className="mt-2 font-bold text-ink">{m.label}</p>
                <p className="mt-2 text-sm">{m.subtext}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {MARKET_DATA.revenueDrivers.map((r) => (
              <div key={r.stream} className="rounded-lg border border-line p-6">
                <span className="eyebrow">{r.division}</span>
                <p className="font-bold text-ink">{r.stream}</p>
                <p className="mt-2 text-sm">{r.formula}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <SectionTitle eyebrow="Competitive Defensibility" title="One company runs all 5 stages. Nobody else in Kenya does." />
          <div className="overflow-x-auto rounded-lg bg-white shadow-md">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-ink-bg text-white">
                <tr>
                  <th scope="col" className="px-5 py-4">Provider</th>
                  {COMPETITOR_COMPARISON.stages.map((s) => <th key={s} scope="col" className="px-3 py-4 text-center">{s}</th>)}
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {COMPETITOR_COMPARISON.entities.map((e) => (
                  <tr key={e.name} className={e.highlight ? 'bg-primary-tint' : ''}>
                    <th scope="row" className="px-5 py-4 font-normal">
                      <span className="block font-bold text-ink">{e.name}</span>
                      <span className="text-xs text-body-light">{e.type} · {e.note}</span>
                    </th>
                    {e.stages.map((on, i) => (
                      <td key={i} className="px-3 py-4 text-center">
                        {on ? <Check className="mx-auto h-5 w-5 text-primary" aria-label="Yes" /> : <X className="mx-auto h-5 w-5 text-line" aria-label="No" />}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Our Mission</span>
            <p className="border-l-4 border-primary pl-5 text-xl font-medium text-ink italic">{MISSION}</p>
            <div className="mt-10 grid grid-cols-2 gap-6">
              {TRACK_RECORD.map((s) => (
                <div key={s.label} className="rounded-lg bg-cream p-6">
                  <p className="text-4xl font-extrabold text-primary">{s.value}</p>
                  <p className="mt-1 text-sm font-bold text-ink">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionTitle eyebrow="Why Choose Us" title="Why You Should Choose Our Services" intro={WHY_CHOOSE_US_INTRO} />
            <ul className="space-y-6">
              {WHY_CHOOSE_US.map((w) => (
                <li key={w.title}>
                  <h3 className="mb-2 text-lg">{w.title}</h3>
                  <p className="text-sm">{w.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <SectionTitle eyebrow="Consulting" title="The Global Networking Expertise Provider"
            intro="Tradecare is an agricultural consultancy that works with private sector, development actors and third sectors on projects directly intervening to improve agricultural market and food systems to policy interventions and advocacy to raise awareness and agenda setting." />
          <div className="grid gap-8 md:grid-cols-2">
            {CONSULTING_SERVICES.map((s) => (
              <article key={s.title} className="card p-8">
                <h3 className="mb-3 text-xl">{s.title}</h3>
                <p className="mb-4 text-sm">{s.summary}</p>
                <ul className="list-disc space-y-2 pl-5 text-sm">{s.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </article>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-3 gap-3 sm:grid-cols-6">
            {NUTRITION_GARDEN_PHOTOS.map((src, i) => (
              <div key={src} className="relative aspect-square overflow-hidden rounded-lg">
                <Image quality={90} src={src} alt={`Agri-nutrition garden ${i + 1}`} fill sizes="(min-width:640px) 16vw, 33vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-site">
          <SectionTitle eyebrow="Research and Impact Studies" title="Research portfolio" />
          <div className="overflow-x-auto rounded-lg shadow-md">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-ink-bg text-white">
                <tr>
                  <th scope="col" className="px-5 py-4">Period</th>
                  <th scope="col" className="px-5 py-4">Country</th>
                  <th scope="col" className="px-5 py-4">Summary</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {RESEARCH_PORTFOLIO.map((r) => (
                  <tr key={r.summary}>
                    <td className="px-5 py-4 align-top font-bold whitespace-nowrap text-ink">{r.period}</td>
                    <td className="px-5 py-4 align-top">{r.country}</td>
                    <td className="px-5 py-4">{r.summary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="partners" className="section scroll-mt-28">
        <div className="container-site">
          <SectionTitle eyebrow="Working together" title="Our Partners & Network" intro={PARTNER_NETWORK_INTRO} />
          <div className={`grid gap-8 ${PARTNER_NETWORK.length > 1 ? 'md:grid-cols-2' : 'max-w-2xl'}`}>
            {PARTNER_NETWORK.map((s) => (
              <article key={s.name} className="card overflow-hidden">
                <div className="relative aspect-[16/9] bg-white">
                  <Image quality={90} src={s.image} alt={s.name} fill sizes="(min-width:768px) 50vw, 100vw" className="object-contain" />
                </div>
                <div className="p-5 sm:p-8">
                  <span className="eyebrow">{s.role}</span>
                  <h3 className="mb-4 text-xl">{s.name}</h3>
                  <ul className="list-disc space-y-2 pl-5 text-sm">{s.points.map((p) => <li key={p}>{p}</li>)}</ul>
                  {s.href && <a href={s.href} target="_blank" rel="noopener" className="mt-5 inline-flex min-h-11 items-center text-sm font-bold text-primary underline hover:text-primary-dark">Visit website</a>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
