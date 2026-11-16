import Image from 'next/image';
import type { Metadata } from 'next';
import { TEAM_MEMBERS } from '@/data/tradecareData';
import { WIDER_TEAM } from '@/data/companyContent';
import { IMG } from '@/lib/site';
import { PageHeader } from '@/components/PageHeader';
import { SectionTitle } from '@/components/SectionTitle';

export const metadata: Metadata = { title: 'Team' };

export default function TeamPage() {
  return (
    <>
      <PageHeader title="Leadership & Service Ecosystem Leads" image={IMG.academy} />
      <section className="section">
        <div className="container-site">
          <SectionTitle center eyebrow="Our Team" title="One accountable control tower" />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {TEAM_MEMBERS.map((m) => (
              <article key={m.id} id={m.id} className="card flex scroll-mt-32 flex-col overflow-hidden">
                <div className="relative aspect-[16/10]">
                  <Image quality={90} src={m.image} alt={m.imageAlt} fill sizes="(min-width:1024px) 33vw, 100vw" className="object-cover" />
                  <span className="absolute top-4 left-4 rounded-md bg-primary px-3 py-1 text-xs font-bold text-white">{m.verb}</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="eyebrow">{m.role}</span>
                  <h3 className="mb-3 text-xl">{m.name}</h3>
                  <p className="mb-4 text-sm">{m.bio}</p>
                  <ul className="mb-4 list-disc space-y-1 pl-5 text-xs">{m.credentials.map((c) => <li key={c}>{c}</li>)}</ul>
                  <p className="mb-5 border-l-4 border-primary pl-4 text-sm text-ink italic">“{m.quote}”</p>
                  <div className="mt-auto rounded-lg bg-cream p-4">
                    <p className="text-2xl font-extrabold text-primary">{m.keyMetric.value}</p>
                    <p className="text-xs">{m.keyMetric.label}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-site">
          <SectionTitle center eyebrow="Our People" title="Our Expert Personnel to Provide Agri-Consultant Solution Services" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {WIDER_TEAM.map((m) => (
              <article key={m.name} className="card overflow-hidden text-center">
                <div className="relative aspect-[37/44]">
                  <Image quality={90} src={m.image} alt={`${m.name}, ${m.role}`} fill sizes="(min-width:1024px) 20vw, (min-width:640px) 50vw, 100vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg">{m.name}</h3>
                  <p className="text-sm text-primary">{m.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
