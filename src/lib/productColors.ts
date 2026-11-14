/**
 * Service Ecosystem product colour identities.
 *
 * Hex values are defined ONCE, as CSS custom properties in `src/app/globals.css`
 * (--color-<slug>, --color-<slug>-solid, --color-<slug>-ink, --color-<slug>-tint).
 * Source: the proposal app palette preserved in legacy-vite/src/data/tradecareData.ts.
 *
 * Usage: put `{...productTheme(slug)}` (a `data-product` attribute) on a wrapper,
 * then use the generic utilities inside it:
 *   bg-product / border-product        → identity accent (decoration only)
 *   bg-product-solid + text-white      → buttons, active tabs, badges (AA ≥ 4.5:1)
 *   text-product-ink                   → product-coloured text on white or tint (AA)
 *   bg-product-tint                    → icon chips, badge backgrounds, hover fills
 */
export const PRODUCT_SLUGS = ['academy', 'zaosafi', 'farmdatapod', 'tcert', 'market'] as const;
export type ProductSlug = (typeof PRODUCT_SLUGS)[number];

export const productColors: Record<ProductSlug, { paletteName: string; accentVar: string }> = {
  academy: { paletteName: 'Deep Azure (Train)', accentVar: 'var(--color-academy)' },
  zaosafi: { paletteName: 'La Salle Green (Produce)', accentVar: 'var(--color-zaosafi)' },
  farmdatapod: { paletteName: 'Turf Green (Digitise)', accentVar: 'var(--color-farmdatapod)' },
  tcert: { paletteName: 'Teal (Assure)', accentVar: 'var(--color-tcert)' },
  market: { paletteName: 'Cherry Grove (Connect)', accentVar: 'var(--color-market)' },
};

export function productTheme(slug: ProductSlug) {
  return { 'data-product': slug } as const;
}
