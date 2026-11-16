import Image from 'next/image';
import type { Metadata } from 'next';
import { PAST_PARTNERS, PAST_PROJECTS } from '@/data/companyContent';
import { IMG, projectList } from '@/lib/site';
import { PageHeader } from '@/components/PageHeader';
import { ImageCard } from '@/components/ImageCard';
import { SectionTitle } from '@/components/SectionTitle';

export const metadata: Metadata = { title: 'Impact' };

export default function ProjectsPage() {
  return (
    <>
      <PageHeader title="Proven Impact" image={IMG.market} />
      <section className="section">
        <div className="container-site">
          <SectionTitle eyebrow="Case Studies" title="Embu & Lari"
            intro="Independently assessed outcomes and live deployments of the full TradeCare suite." />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projectList.map((p) => (
              <ImageCard key={p.id} href={p.href} image={p.image} kicker={p.status} title={p.title} text={p.summary} cta="View Project" />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-site">
          <SectionTitle eyebrow="Implemented Projects" title="Earlier projects"
            intro="We implement high-impact projects that help SMEs streamline their supply chains, build lasting relationships with farmers and suppliers, and optimize internal systems for growth and compliance." />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PAST_PROJECTS.map((p) => (
              <article key={p.title} className="card flex flex-col overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image quality={90} src={p.image} alt={p.title} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="eyebrow">{p.category}</span>
                  <h3 className="mb-2 text-lg">{p.title}</h3>
                  <p className="mb-3 text-xs text-body-light">{p.period}</p>
                  <p className="text-sm">{p.text}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-10 text-sm"><span className="font-bold text-ink">Partners and collaborators:</span> {PAST_PARTNERS.join(' · ')}</p>
        </div>
      </section>
    </>
  );
}
