import { SITE } from '@/lib/site';

const PATHS: Record<string, string> = {
  LinkedIn:
    'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.6 8.65 21 11.2 21 14.5V21h-4v-5.8c0-1.4-.03-3.2-1.95-3.2-1.95 0-2.25 1.52-2.25 3.1V21H9z',
  Facebook:
    'M14 8.5V6.6c0-.8.2-1.3 1.4-1.3H17V2.2C16.6 2.1 15.5 2 14.2 2 11.4 2 10 3.6 10 6.3v2.2H7.5V12H10v10h4V12h2.7l.4-3.5z',
  'X (Twitter)':
    'M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.3L5.47 21H2.4l7.17-8.2L2 3h6.33l4.36 5.77zm-1.08 16.2h1.7L7.4 4.73H5.58z',
};

export function Socials({ size = 'sm' }: { size?: 'sm' | 'md' }) {
  const box = size === 'sm' ? 'h-7 w-7' : 'h-11 w-11';
  const icon = size === 'sm' ? 'h-3.5 w-3.5' : 'h-4 w-4';
  return (
    <ul className="flex items-center gap-2">
      {SITE.socials.map((s) => (
        <li key={s.label}>
          <a
            href={s.href}
            aria-label={s.label}
            className={`${box} flex items-center justify-center rounded-full bg-white/10 text-link-light transition hover:bg-primary hover:text-white`}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className={icon} aria-hidden="true">
              <path d={PATHS[s.label]} />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
