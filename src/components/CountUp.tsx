'use client';

import { useEffect, useRef, useState } from 'react';

/** Animates a number from 0 to `end` once it scrolls into view. */
export function CountUp({ end, prefix = '', suffix = '', duration = 1800, decimals = 0 }: {
  end: number; prefix?: string; suffix?: string; duration?: number; decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(end);
      return;
    }
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        setValue(end * (1 - Math.pow(1 - p, 3)));
        if (p < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    observer.observe(el);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, [end, duration]);

  const formatted = value.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  return <span ref={ref}>{prefix}{formatted}{suffix}</span>;
}
