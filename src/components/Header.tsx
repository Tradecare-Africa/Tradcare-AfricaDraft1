'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ChevronDown, Mail, MapPin, Menu, Phone, X } from 'lucide-react';
import { NAV, SITE } from '@/lib/site';
import { Socials } from './Socials';

function isActive(pathname: string, href: string) {
  return href === '/' ? pathname === '/' : pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const tel = `tel:${SITE.phone.replace(/\s/g, '')}`;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar */}
      <div className="hidden bg-ink-bg py-2.5 text-xs text-link-light lg:block">
        <div className="container-site flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 transition hover:text-white">
              <Mail className="h-4 w-4 text-primary" aria-hidden="true" /> {SITE.email}
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" aria-hidden="true" /> {SITE.address} · {SITE.fieldHubs.replace('Field Hubs: ', 'Hubs: ')}
            </span>
          </div>
          <Socials />
        </div>
      </div>

      {/* Main nav */}
      <div className="container-site flex h-16 items-center sm:h-20 justify-between gap-6">
        <Link href="/" aria-label={`${SITE.name} home`} className="shrink-0">
          <Image src={SITE.logo} alt={SITE.name} width={318} height={158} priority className="h-10 w-auto sm:h-12" />
        </Link>

        <nav aria-label="Main" className="hidden h-full lg:block">
          <ul className="flex h-full items-center gap-5 xl:gap-8">
            {NAV.map((item) => {
              const active = isActive(pathname, item.href);
              const linkCls = `flex items-center gap-1 whitespace-nowrap font-bold transition hover:text-primary ${active ? 'text-primary' : 'text-ink'}`;
              return (
                <li key={item.href} className="group relative flex h-full items-center">
                  <Link href={item.href} className={linkCls} aria-current={active ? 'page' : undefined}>
                    {item.label}
                    {item.children && <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" aria-hidden="true" />}
                  </Link>
                  {item.children && (
                    <ul className="invisible absolute top-full left-0 w-64 translate-y-2 rounded-b-md bg-white py-2 opacity-0 shadow-lg transition duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link href={c.href} className={`block px-5 py-2.5 text-sm font-semibold transition hover:bg-cream hover:text-primary ${pathname === c.href ? 'text-primary' : 'text-ink'}`}>
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <a href={tel} className="hidden items-center gap-3 xl:flex">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white">
            <Phone className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block text-xs text-body-light">Call Us</span>
            <span className="font-bold text-ink">{SITE.phone}</span>
          </span>
        </a>

        <button type="button" onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center rounded-md text-ink transition hover:text-primary lg:hidden">
          <Menu className="h-7 w-7" />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-50 lg:hidden ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open} inert={!open}>
        <div onClick={() => setOpen(false)} className={`absolute inset-0 bg-black/60 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`} />
        <div role="dialog" aria-modal="true" aria-label="Menu"
          className={`absolute inset-y-0 left-0 flex w-80 max-w-[85vw] flex-col overflow-y-auto bg-ink-bg text-link-light transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex items-center justify-between border-b border-white/10 p-5">
            <Image src={SITE.logoLight} alt={SITE.name} width={640} height={254} className="h-10 w-auto" />
            <button type="button" onClick={() => setOpen(false)} aria-label="Close menu" tabIndex={open ? 0 : -1}
              className="flex h-11 w-11 items-center justify-center rounded-md transition hover:text-white">
              <X className="h-6 w-6" />
            </button>
          </div>
          <ul className="flex-1 divide-y divide-white/10 px-5">
            {NAV.map((item) => (
              <li key={item.href}>
                {item.children ? (
                  <details className="group">
                    <summary tabIndex={open ? 0 : -1} className="flex min-h-11 cursor-pointer list-none items-center justify-between py-4 font-bold text-white [&::-webkit-details-marker]:hidden">
                      {item.label}
                      <ChevronDown className="h-4 w-4 text-primary transition group-open:rotate-180" aria-hidden="true" />
                    </summary>
                    <ul className="space-y-1 pb-4 pl-3">
                      <li><Link href={item.href} tabIndex={open ? 0 : -1} className="flex min-h-11 items-center py-2 text-sm transition hover:text-white">All {item.label}</Link></li>
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link href={c.href} tabIndex={open ? 0 : -1} className="flex min-h-11 items-center py-2 text-sm transition hover:text-white">{c.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link href={item.href} tabIndex={open ? 0 : -1}
                    className={`block py-4 font-bold transition hover:text-primary ${isActive(pathname, item.href) ? 'text-primary' : 'text-white'}`}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="space-y-3 border-t border-white/10 p-5 text-sm">
            <a href={tel} tabIndex={open ? 0 : -1} className="flex min-h-11 items-center gap-2 transition hover:text-white"><Phone className="h-4 w-4 text-primary" aria-hidden="true" />{SITE.phone}</a>
            <a href={`mailto:${SITE.email}`} tabIndex={open ? 0 : -1} className="flex min-h-11 items-center gap-2 break-all transition hover:text-white"><Mail className="h-4 w-4 text-primary" aria-hidden="true" />{SITE.email}</a>
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" aria-hidden="true" />{SITE.address}</p>
            <div className="pt-2"><Socials size="md" /></div>
          </div>
        </div>
      </div>
    </header>
  );
}
