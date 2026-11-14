'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/** Scroll-snap carousel; children are the cards. */
export function CardCarousel({ children, label }: { children: React.ReactNode[]; label: string }) {
  const track = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: 'smooth' });
  };
  const btn =
    'flex h-12 w-12 items-center justify-center rounded-full border-2 border-line text-ink transition hover:border-primary hover:bg-primary hover:text-white';

  return (
    <div aria-roledescription="carousel" aria-label={label}>
      <div ref={track} className="-mx-3 flex snap-x snap-mandatory overflow-x-auto scroll-smooth pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {children.map((child, i) => (
          <div key={i} className="w-full shrink-0 snap-start px-3 sm:w-1/2 lg:w-1/3">{child}</div>
        ))}
      </div>
      {children.length > 1 && (
        <div className="mt-4 flex gap-3">
          <button type="button" className={btn} onClick={() => scroll(-1)} aria-label={`Previous ${label.toLowerCase()}`}><ChevronLeft className="h-5 w-5" /></button>
          <button type="button" className={btn} onClick={() => scroll(1)} aria-label={`Next ${label.toLowerCase()}`}><ChevronRight className="h-5 w-5" /></button>
        </div>
      )}
    </div>
  );
}
