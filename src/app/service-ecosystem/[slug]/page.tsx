import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArrowLeftRight, CheckCircle2 } from 'lucide-react';
import { ECOSYSTEM_PATH, ecosystemList } from '@/lib/site';
import { productTheme } from '@/lib/productColors';
import { PageHeader } from '@/components/PageHeader';
import { ServicesSidebar } from '@/components/ServicesSidebar';
import { Accordion } from '@/components/Accordion';
import { ImageCard } from '@/components/ImageCard';
import { SectionTitle } from '@/components/SectionTitle';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ecosystemList.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const d = ecosystemList.find((x) => x.slug === slug);
  return d
    ? {
        title: `${d.detail.name} · Service Ecosystem`,
        description: d.detail.heroSubheadline,
        openGraph: { title: `${d.detail.name} · TradeCare Africa Service Ecosystem`, description: d.detail.heroSubheadline },
      }
    : {};
}

export default async function ServiceEcosystemProductPage({ params }: Props) {
  const { slug } = await params;
  const d = ecosystemList.find((x) => x.slug === slug);
  if (!d) notFound();
  const det = d.detail;

  return (
    <div {...productTheme(d.slug)}>
      <PageHeader title={det.name} image={d.image} crumbs={[{ label: 'Service Ecosystem', href: ECOSYSTEM_PATH }]} />

      <section className="section">
        <div className="container-site grid gap-12 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div>
            <span className="mb-3 inline-block rounded-full bg-product-tint px-3 py-1 text-xs font-bold tracking-[0.05em] text-product-ink uppercase">{det.badgeText}</span>
            <h2 className="mb-6">{det.heroHeadline}</h2>
            <div className="prose-site">
              <p className="text-lg font-medium text-ink">{det.heroSubheadline}</p>
              <p>{det.overview}</p>

              <h3>The challenge: {d.problem.stat} · {d.problem.label}</h3>
              <p>{d.problem.detail}</p>
              <ul>{d.drivers.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>

            {/* Metrics */}
            <div className="my-10 grid gap-4 sm:grid-cols-3">
              {det.metrics.map((m) => (
                <div key={m.label} className="rounded-lg border-l-4 border-product bg-white p-6 shadow-md">
                  <p className="text-2xl font-extrabold text-product-ink">{m.value}</p>
                  <p className="mt-1 text-sm font-bold text-ink">{m.label}</p>
                  <p className="mt-2 text-xs text-body-light">{m.source}</p>
                </div>
              ))}
            </div>

            <h3 className="mb-5 text-2xl">Services</h3>
            <Accordion
              items={det.services.map((s) => ({
                title: s.title,
                content: (
                  <div className="prose-site">
                    <p>{s.description}</p>
                    <ul>{s.deliverables.map((x) => <li key={x}>{x}</li>)}</ul>
                    <p className="mb-0 text-xs font-bold text-product-ink uppercase">Pricing: {s.pricingModel}</p>
                  </div>
                ),
              }))}
            />

            {d.methodologySteps && (
              <>
                <h3 className="mt-12 mb-5 text-2xl">{d.methodologyName}</h3>
                <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                  {d.methodologySteps.map((s, i) => (
                    <li key={i} className="rounded-lg bg-white p-5 shadow-md">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-product-solid text-lg font-extrabold text-white">{s.letter}</span>
                      <p className="mt-3 font-bold text-ink">{s.name}</p>
                      <p className="mt-1 text-xs">{s.desc}</p>
                    </li>
                  ))}
                </ol>
              </>
            )}

            <h3 className="mt-12 mb-5 text-2xl">Benefits</h3>
            <div className="grid gap-4 sm:grid-cols-3">
              {det.benefits.map((b) => (
                <div key={b.stakeholder} className="rounded-lg bg-white p-6 shadow-md">
                  <CheckCircle2 className="mb-3 h-6 w-6 text-product-ink" aria-hidden="true" />
                  <p className="font-bold text-ink">{b.stakeholder}</p>
                  <p className="mt-2 text-sm">{b.impact}</p>
                  <p className="mt-3 text-xs font-bold text-product-ink uppercase">{b.metric}</p>
                </div>
              ))}
            </div>

            <h3 className="mt-12 mb-5 text-2xl">Who we serve</h3>
            <Accordion
              items={det.targetAudience.map((t) => ({
                title: t.persona,
                content: (
                  <div className="prose-site">
                    <p>{t.description}</p>
                    <p><strong className="text-ink">Key need:</strong> {t.keyNeed}</p>
                    <p className="mb-0"><strong className="text-ink">What we provide:</strong> {t.solutionProvided}</p>
                  </div>
                ),
              }))}
            />

            <h3 className="mt-12 mb-5 text-2xl">How it integrates</h3>
            <ul className="space-y-4">
              {det.howItIntegrates.map((h) => (
                <li key={h.targetDivisionId} className="flex gap-4 rounded-lg bg-white p-5 shadow-md">
                  <ArrowLeftRight className="mt-1 h-5 w-5 shrink-0 text-product-ink" aria-hidden="true" />
                  <div>
                    <p className="font-bold text-ink">
                      {h.direction === 'passes_to' ? 'Passes to' : 'Receives from'}{' '}
                      <Link href={`${ECOSYSTEM_PATH}/${h.targetDivisionId}`} className="text-product-ink underline-offset-2 transition hover:underline">{h.targetDivisionName}</Link>
                    </p>
                    <p className="mt-1 text-sm">{h.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <h3 className="mt-12 mb-5 text-2xl">Frequently asked questions</h3>
            <Accordion items={det.faq.map((f) => ({ title: f.q, content: <p>{f.a}</p> }))} />

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href={`/contact?topic=${encodeURIComponent(det.uniqueCta.formCategory)}`} className="btn-product">{det.uniqueCta.primaryLabel}</Link>
              <Link href={`/contact?topic=${encodeURIComponent(det.uniqueCta.formCategory)}`}
                className="inline-flex min-h-11 items-center justify-center rounded-lg border-2 border-product-solid px-7 py-3 text-sm font-bold tracking-wide text-product-ink uppercase transition hover:bg-product-tint">
                {det.uniqueCta.secondaryLabel}
              </Link>
            </div>
          </div>

          <ServicesSidebar active={d.slug} />
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-site">
          <SectionTitle eyebrow="Service Ecosystem" title="Other Service Ecosystem products" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {ecosystemList.filter((x) => x.slug !== d.slug).map((x) => (
              <ImageCard key={x.slug} product={x.slug} href={x.href} image={x.image} kicker={`0${x.stepNumber} · ${x.verb}`} title={x.name} text={x.tagline} cta="Explore" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
