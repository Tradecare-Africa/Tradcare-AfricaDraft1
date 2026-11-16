import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { IMG } from '@/lib/site';

export function PageHeader({ title, image = IMG.hero, imageLayout = 'cover', crumbs = [] }: {
  title: string;
  image?: string;
  imageLayout?: 'cover' | 'portrait';
  crumbs?: { label: string; href?: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-ink-bg py-16 sm:py-24 lg:py-32">
      {imageLayout === 'portrait' ? (
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 sm:w-2/5 lg:w-1/3">
          <Image quality={90} src={image} alt="" fill priority sizes="(min-width:1024px) 33vw, 50vw" className="object-contain object-right" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-bg via-ink-bg/40 to-transparent" />
        </div>
      ) : (
        <Image quality={90} src={image} alt="" fill priority sizes="100vw" className="object-cover opacity-60" />
      )}
      <div className="container-site relative">
        <nav aria-label="Breadcrumb" className="mb-4 text-sm text-link-light">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li><Link href="/" className="transition hover:text-white">Home</Link></li>
            {crumbs.map((c) => (
              <li key={c.label} className="flex items-center gap-1.5">
                <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                {c.href ? <Link href={c.href} className="transition hover:text-white">{c.label}</Link> : <span>{c.label}</span>}
              </li>
            ))}
            <li className="flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="text-white" aria-current="page">{title}</span>
            </li>
          </ol>
        </nav>
        <h1 className="max-w-4xl text-[clamp(2rem,1.3rem+3.2vw,3.75rem)] leading-tight text-white">{title}</h1>
      </div>
    </section>
  );
}
