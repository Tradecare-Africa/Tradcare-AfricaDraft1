import Link from 'next/link';
import Image from 'next/image';
import { Download, Mail, MapPin, Navigation, Phone } from 'lucide-react';
import { LOCATION, SITE } from '@/lib/site';
import { Socials } from './Socials';
import { NewsletterForm } from './NewsletterForm';

export function Footer() {
  return (
    <footer className="bg-ink-bg text-link-light">
      <div className="container-site grid gap-10 py-12 sm:grid-cols-2 sm:py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Link href="/" aria-label={`${SITE.name} home`} className="inline-block">
            <Image src={SITE.logoLight} alt={SITE.name} width={640} height={254} className="mb-5 h-16 w-auto" />
          </Link>
          <p className="mb-5 text-sm">{SITE.description}</p>
          <Socials size="md" />
        </div>

        <div>
          <h3 className="mb-5 text-lg text-white">Downloads</h3>
          <ul className="space-y-3 text-sm">
            {SITE.downloads.map((d) => (
              <li key={d.href}>
                <a href={d.href} target="_blank" rel="noopener" className="flex min-h-11 items-center gap-2 transition hover:text-white">
                  <Download className="h-4 w-4 text-primary" aria-hidden="true" /> {d.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs">Certification issued independently by TCert · Independent Standards Body</p>
        </div>

        <div>
          <h3 className="mb-5 text-lg text-white">Newsletter</h3>
          <NewsletterForm />
        </div>

        <div>
          <h3 className="mb-5 text-lg text-white">Contact</h3>
          <ul className="space-y-4 text-sm">
            <li>
              <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="flex min-h-11 items-start gap-3 py-1 transition hover:text-white">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" /> {SITE.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="flex min-h-11 items-start gap-3 py-1 break-all transition hover:text-white">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" /> {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              {/* TODO(confirm): address text unchanged; only the map pin moved to -1.2283976, 36.7431617 */}
              <a href={LOCATION.mapsUrl} target="_blank" rel="noopener" className="transition hover:text-white">
                {SITE.address}<br />{SITE.fieldHubs}
              </a>
            </li>
            <li>
              <a href={LOCATION.directionsUrl} target="_blank" rel="noopener"
                className="inline-flex min-h-11 items-center gap-3 font-bold text-white underline underline-offset-4 transition hover:text-link-light">
                <Navigation className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" /> Get directions
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-sm">
        <div className="container-site">
          © {new Date().getFullYear()} {SITE.legalName}. Founded 2014 by Joyce Wambui Gema · Agricultural Consultancy Award Winner 2023.
        </div>
      </div>
    </footer>
  );
}
