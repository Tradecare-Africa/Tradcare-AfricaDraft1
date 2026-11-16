import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Mail, MapPin, Navigation, Phone, ShieldCheck } from 'lucide-react';
import { LOCATION, SITE } from '@/lib/site';
import { PageHeader } from '@/components/PageHeader';
import { ContactForm } from '@/components/ContactForm';
import { CONTACT_EXTRA } from '@/data/companyContent';

export const metadata: Metadata = { title: 'Contact' };

export default function ContactPage() {
  const items = [
    { Icon: MapPin, title: 'Central Operations', lines: [SITE.address, CONTACT_EXTRA.streetAddress, SITE.fieldHubs] },
    { Icon: Mail, title: 'Direct Email Inquiries', lines: [SITE.email, 'Response time within 24 hours'], href: `mailto:${SITE.email}` },
    { Icon: Phone, title: 'Phone', lines: [SITE.phone, `Mobile: ${CONTACT_EXTRA.phoneMobile}`], href: `tel:${SITE.phone.replace(/\s/g, '')}` },
    { Icon: ShieldCheck, title: 'TCert Assurance', lines: ['Operating independently since 2017', 'FLOCERT Structural Governance Separation Model'] },
  ];
  return (
    <>
      <PageHeader title="Contact Us" image="/images/african-agriculture/nigerian-tomato-farmer.jpg" />
      <section className="section">
        <div className="container-site grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="eyebrow">Partner With TradeCare</span>
            <h2 className="mb-6">{SITE.legalName}</h2>
            <p className="mb-10">{SITE.description}</p>
            <ul className="space-y-6">
              {items.map(({ Icon, title, lines, href }) => (
                <li key={title} className="flex gap-4 sm:gap-5">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-primary text-white"><Icon className="h-6 w-6" aria-hidden="true" /></span>
                  <div>
                    <h3 className="text-lg">{title}</h3>
                    {href ? <a href={href} className="text-sm transition hover:text-primary">{lines[0]}</a> : <p className="text-sm">{lines[0]}</p>}
                    {lines.slice(1).map((l) => <p key={l} className="text-xs text-body-light">{l}</p>)}
                    {title === 'Central Operations' && (
                      <a href={LOCATION.directionsUrl} target="_blank" rel="noopener"
                        className="mt-2 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-primary underline hover:text-primary-dark">
                        <Navigation className="h-4 w-4" aria-hidden="true" /> Get directions
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <Suspense><ContactForm /></Suspense>
        </div>
      </section>
      <section className="bg-white">
        <iframe
          src={LOCATION.embedUrl}
          title="Map: TradeCare Africa office, Nairobi"
          className="block h-[320px] w-full border-0 sm:h-[420px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
