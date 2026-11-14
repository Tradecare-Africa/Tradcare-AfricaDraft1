import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { projectList } from '@/lib/site';
import { PageHeader } from '@/components/PageHeader';
import { ServicesSidebar } from '@/components/ServicesSidebar';
import { Accordion } from '@/components/Accordion';
import { ImageCard } from '@/components/ImageCard';
import { SectionTitle } from '@/components/SectionTitle';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projectList.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projectList.find((x) => x.id === slug);
  return p ? { title: p.title, description: p.summary } : {};
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = projectList.find((x) => x.id === slug);
  if (!p) notFound();
  const buyers = 'buyers' in p ? (p.buyers as string[]) : undefined;

  return (
    <>
      <PageHeader title={p.title} image={p.image} crumbs={[{ label: 'Impact', href: '/projects' }]} />
      <section className="section">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_340px]">
          <div>
            <span className="eyebrow">{p.status}</span>
            <h2 className="mb-6">{p.partner}</h2>
            <div className="prose-site">
              <p className="text-lg font-medium text-ink">{p.summary}</p>
              <ul>
                <li><strong className="text-ink">Period:</strong> {p.period}</li>
                <li><strong className="text-ink">Source:</strong> {p.auditor}</li>
                {buyers && <li><strong className="text-ink">Buyers:</strong> {buyers.join(', ')}</li>}
              </ul>
            </div>
            <div className="my-10 grid gap-4 sm:grid-cols-2">
              {p.metrics.map((m) => (
                <div key={m.label} className="rounded-lg bg-white p-6 shadow-md">
                  <p className="text-3xl font-extrabold text-primary">{m.value}</p>
                  <p className="mt-1 text-sm font-bold text-ink">{m.label}</p>
                </div>
              ))}
            </div>
            <h3 className="mb-5 text-2xl">Lessons learned</h3>
            <Accordion
              items={p.lessonsLearned.map((l, i) => {
                const [head, ...rest] = l.split(': ');
                return rest.length ? { title: head, content: <p>{rest.join(': ')}</p> } : { title: `Lesson ${i + 1}`, content: <p>{l}</p> };
              })}
            />
          </div>
          <ServicesSidebar />
        </div>
      </section>
      <section className="section bg-white">
        <div className="container-site">
          <SectionTitle eyebrow="Proven Impact" title="Similar projects" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projectList.filter((x) => x.id !== p.id).map((x) => (
              <ImageCard key={x.id} href={x.href} image={x.image} kicker={x.status} title={x.title} text={x.summary} cta="View Project" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
