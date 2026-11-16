import Link from 'next/link';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import { ECOSYSTEM_PATH, SITE, ecosystemList } from '@/lib/site';
import { productTheme } from '@/lib/productColors';

export function ServicesSidebar({ active }: { active?: string }) {
  return (
    <aside className="space-y-8">
      <div className="rounded-lg bg-white p-6 shadow-md">
        <h3 className="mb-4 text-lg"><Link href={ECOSYSTEM_PATH} className="transition hover:text-primary">Service Ecosystem</Link></h3>
        <ul className="space-y-2">
          {ecosystemList.map((d) => {
            const isActive = d.slug === active;
            return (
              <li key={d.slug} {...productTheme(d.slug)}>
                <Link
                  href={d.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex min-h-11 items-center justify-between rounded-md px-4 py-3 text-sm font-bold transition ${
                    isActive ? 'bg-product-solid text-white' : 'bg-cream text-ink hover:bg-product-tint hover:text-product-ink'
                  }`}
                >
                  {d.name}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="rounded-lg bg-ink-bg p-6 text-link-light shadow-md">
        <h3 className="mb-2 text-lg text-white">Partner With TradeCare</h3>
        <p className="mb-5 text-sm">Response time within 24 hours.</p>
        <p className="mb-2 flex items-center gap-2 text-sm">
          <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
          <a href={`mailto:${SITE.email}`} className="transition hover:text-white">{SITE.email}</a>
        </p>
        <p className="mb-5 flex items-center gap-2 text-sm">
          <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
          <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="transition hover:text-white">{SITE.phone}</a>
        </p>
        <Link href="/contact" className="btn-primary w-full">Contact Us</Link>
      </div>
    </aside>
  );
}
