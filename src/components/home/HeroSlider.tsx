'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export type Slide = { word: string; title: string; text: string; cta: string; href: string; image: string; alt: string };

/**
 * Auto-advancing crossfade hero.
 * Pauses on hover, on keyboard focus inside, and when the tab is hidden.
 * Never autoplays under prefers-reduced-motion. Supports swipe on touch.
 */
export function HeroSlider({ slides, interval = 5000 }: { slides: Slide[]; interval?: number }) {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const touchX = useRef<number | null>(null);

  const go = useCallback((i: number) => setIndex((i + slides.length) % slides.length), [slides.length]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReducedMotion(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    const onVis = () => setHidden(document.visibilityState === 'hidden');
    document.addEventListener('visibilitychange', onVis);
    return () => {
      mq.removeEventListener('change', sync);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, []);

  const playing = !(hovered || focused || hidden || reducedMotion) && slides.length > 1;

  useEffect(() => {
    if (!playing) return;
    const t = setTimeout(() => go(index + 1), interval);
    return () => clearTimeout(t);
  }, [index, playing, interval, go]);

  const onTouchStart = (e: React.TouchEvent) => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
    touchX.current = null;
  };

  const ctrl = 'flex h-11 w-11 items-center justify-center rounded-full border-2 border-white/70 bg-black/20 text-white transition hover:border-primary hover:bg-primary sm:h-12 sm:w-12';

  return (
    <section aria-roledescription="carousel" aria-label="Highlights"
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node)) setFocused(false); }}
      onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}
      className="relative h-[max(560px,85svh)] max-h-[760px] touch-pan-y overflow-hidden bg-ink-bg">
      {slides.map((s, i) => {
        const active = i === index;
        return (
          <div key={s.title} role="group" aria-roledescription="slide" aria-label={`${i + 1} of ${slides.length}`}
            aria-hidden={!active} inert={!active}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out motion-reduce:transition-none ${active ? 'z-10 opacity-100' : 'z-0 opacity-0'}`}>
            {/* Hero images load eagerly; only the first is high priority (LCP). */}
            <Image quality={90} src={s.image} alt={s.alt} fill priority={i === 0} loading={i === 0 ? undefined : 'eager'}
              fetchPriority={i === 0 ? 'high' : 'low'} sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20 sm:to-transparent" />
            <div className="container-site relative flex h-full items-center pb-24 sm:pb-20">
              <div className="relative max-w-2xl">
                {/* Watermark: wide-tracked word with a soft white-to-transparent gradient fill and a brand accent rule. */}
                <span aria-hidden="true" className="pointer-events-none mb-3 block select-none">
                  <span className="inline-block whitespace-nowrap bg-gradient-to-b from-white/75 via-white/40 to-white/5 bg-clip-text pr-2 text-[clamp(2.25rem,9.5vw,6rem)] leading-[0.9] font-extrabold tracking-[0.06em] text-transparent uppercase drop-shadow-[0_4px_18px_rgba(0,0,0,0.35)]">
                    {s.word}
                  </span>
                  <span className="mt-3 block h-1 w-16 rounded-full bg-primary" />
                </span>
                <h1 className={`relative mb-4 text-[clamp(1.75rem,1.1rem+3vw,3rem)] leading-tight font-extrabold text-white transition duration-1000 motion-reduce:transition-none sm:mb-5 ${active ? 'translate-y-0' : 'translate-y-6'}`}>
                  {s.title}
                </h1>
                <p className="relative mb-6 line-clamp-4 max-w-xl text-base text-white/90 sm:mb-8 lg:text-lg">{s.text}</p>
                <Link href={s.href} className="btn-primary min-h-11">{s.cta}</Link>
              </div>
            </div>
          </div>
        );
      })}

      <div className="absolute bottom-6 left-0 z-20 w-full sm:bottom-8">
        <div className="container-site flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-6">
          <div className="flex gap-2 sm:gap-3">
            <button type="button" onClick={() => go(index - 1)} aria-label="Previous slide" className={ctrl}>
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button type="button" onClick={() => go(index + 1)} aria-label="Next slide" className={ctrl}>
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div className="flex items-center">
            {slides.map((s, i) => (
              <button key={s.title} type="button" onClick={() => go(i)} aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index} className="group flex h-11 w-7 items-center justify-center">
                <span className={`block h-2.5 rounded-full transition-all ${i === index ? 'w-6 bg-primary' : 'w-2.5 bg-white/60 group-hover:bg-white'}`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
