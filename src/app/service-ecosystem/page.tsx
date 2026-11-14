import type { Metadata } from 'next';
import { ecosystemList, IMG } from '@/lib/site';
import { PageHeader } from '@/components/PageHeader';
import { ImageCard } from '@/components/ImageCard';
import { SectionTitle } from '@/components/SectionTitle';

export const metadata: Metadata = {
  title: 'Service Ecosystem',
  description: 'Train · Produce · Digitise · Assure · Connect: the five integrated products of the TradeCare Africa Service Ecosystem.',
};

export default function ServiceEcosystemPage() {
  return (
    <>
      <PageHeader title="Our Service Ecosystem" image={IMG.zaosafi} />
      <section className="section">
        <div className="container-site">
          <SectionTitle eyebrow="Service Ecosystem · Five Integrated Pillars" title="Train · Produce · Digitise · Assure · Connect"
            intro="Synchronizing Training, Field Agronomy, Digital Traceability, Accredited Certification, and Direct Offtake under one control tower." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {ecosystemList.map((d) => (
              <ImageCard key={d.slug} product={d.slug} href={d.href} image={d.image} kicker={`0${d.stepNumber} · ${d.verb}`} title={d.name} text={d.shortDesc} cta="Explore" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
