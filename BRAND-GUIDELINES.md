# TradeCare Africa — Brand & Design Guardrails

> **Source of truth** for colour and typography across every TradeCare Africa web property.
> Extracted from the live site (`src/app/globals.css`, `src/app/layout.tsx`).
> Any new project, page, or design doc **must** use these tokens. Do not introduce new colours or typefaces without updating this file first.

---

## 1. Colour palette

### Brand colours
| Token | Hex | Brand name | Role |
|---|---|---|---|
| `primary` | `#DD5C36` | Cherry Grove | Main accent: CTAs, links, eyebrows, focus rings, selection |
| `primary-hover` | `#EB7857` | Cherry Grove (light) | Hover state for primary |
| `primary-dark` | `#B33E20` | Cherry Grove 90% | Pressed state; accent text on light tints |
| `primary-tint` | `#FDE8E2` | Cherry Grove highlight | Soft highlight backgrounds, callouts |
| `secondary` | `#327039` | Forest Fern | Secondary accent: agriculture, growth, success |
| `wheat` | `#F0BE49` | Wheat Field Sunrise | Sparing highlight: badges, stats, decoration (never body text) |
| `ink` / `ink-bg` | `#133020` | Tilled Earth | Headings; dark sections (header/footer/hero bands) |
| `link-light` | `#F8EDD9` | Alabaster Hay | Text and links on dark `ink-bg` |

### Neutrals
| Token | Hex | Role |
|---|---|---|
| `cream` | `#FAF7F2` | Default page background |
| `white` | `#FFFFFF` | Cards and raised surfaces |
| `body` | `#3A4F41` | Body text |
| `body-light` | `#6A7E72` | Secondary text, captions, metadata |
| `line` | `#E5DFD3` | Borders, dividers |

### Derived accessibility tokens (see full design doc §3.5)
| Token | Hex | Role |
|---|---|---|
| `input-border` | `#6A7E72` | Input outlines (same value as `body-light`) |
| `danger` / `info` | `#B42318` / `#1D5FA8` | Status only (success = Forest Fern, warning = Wheat with ink text) |

### Contrast: accepted brand exception
The website colours are kept exactly as they are. Three uses fall below WCAG 2.2 AA for small text, and this is accepted as a brand decision:
- White on Cherry Grove buttons (3.7:1) and on the `#EB7857` hover (2.9:1).
- Cherry Grove eyebrows and links on cream or white (3.5–3.7:1).
- `body-light` small text on cream (4.1:1).

To limit the impact, keep Cherry Grove text short and bold, always underline inline links, and never set paragraphs in Cherry Grove or Wheat.

### Usage rules
- **60 / 30 / 10:** cream and white surfaces (60), Tilled Earth ink and body text (30), Cherry Grove accents (10).
- Use **one** primary CTA colour: Cherry Grove. Forest Fern is never the colour of a primary button.
- Wheat is decorative only. Don't use it for text on light backgrounds because the contrast is too low.
- On dark (`#133020`) sections, use white for headings and Alabaster Hay `#F8EDD9` for body and links.
- Don't use pure black (`#000`) for text. Use `ink` or `body`. Black is allowed only in image-overlay gradients.
- Focus states: a 2px `primary` outline with a 2px offset. Text selection: `primary` background with white text.

---

## 2. Typography

**Typeface:** [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans). It is the only typeface.
Weights 300–800, normal and italic. Fallback: `ui-sans-serif, system-ui, sans-serif`.

| Element | Size (mobile → desktop) | Weight | Other |
|---|---|---|---|
| Display / H1 | `text-5xl` → `text-6xl` (48–60px) | 800 ExtraBold | `tracking-tight`, colour `ink` |
| H2 | `text-3xl` → `text-4xl` (30–36px) | 800 | `tracking-tight` |
| H3 / H4 | `text-xl` → `text-2xl` (20–24px) | 800 | `tracking-tight` |
| Eyebrow (label above a heading) | `text-xs` (12px) | 700 Bold | UPPERCASE, `tracking-[0.05em]`, colour `primary` |
| Lead paragraph | `text-lg` (18px) | 400 | `leading-relaxed` |
| Body | `text-base` (16px) | 400 | `leading-relaxed`, colour `body` |
| Small / meta | `text-sm` (14px) | 400–500 | colour `body-light` |
| Button | `text-sm` (14px) | 700 | UPPERCASE, `tracking-wide` |

Rules:
- Headings are always ExtraBold (800) with tight tracking. Body text is Regular (400) with relaxed line height.
- Use uppercase only for eyebrows and buttons.
- Use no more than three weights on a page: 400, 700 and 800 (500 is allowed for meta text).

---

## 3. Shape, spacing and components
- **Radius:** `md` 0.5rem (buttons, cards), `lg` 0.75rem, `xl` 1rem.
- **Container:** max-width 80rem (`max-w-7xl`) with side padding of 16, 24 or 32px depending on screen size.
- **Section rhythm:** `py-16` on mobile and `py-24` on desktop.
- **Primary button:** `primary` background, white text, `rounded-lg`, padding 28 × 14px, uppercase bold 14px, hover changes it to `primary-hover`.
- **Eyebrow:** 12px bold uppercase, `tracking-[0.05em]`, `primary`.
- **Card:** white background, `rounded-lg`, `shadow-md`, and on hover it lifts 4px with `shadow-xl`.

---

## 4. Copy-paste tokens

**Tailwind v4 (`@theme`)**
```css
@theme {
  --font-sans: "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif;
  --color-primary: #dd5c36;
  --color-primary-hover: #eb7857;
  --color-primary-dark: #b33e20;
  --color-primary-tint: #fde8e2;
  --color-secondary: #327039;
  --color-wheat: #f0be49;
  --color-ink: #133020;
  --color-ink-bg: #133020;
  --color-body: #3a4f41;
  --color-body-light: #6a7e72;
  --color-link-light: #f8edd9;
  --color-cream: #faf7f2;
  --color-line: #e5dfd3;
  --color-focus: #dd5c36;
  /* status only */
  --color-input-border: #6a7e72;
  --color-danger: #b42318;
  --color-info: #1d5fa8;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
}
```

**Plain CSS / other frameworks:** use the same names as `:root { --tc-primary: #dd5c36; ... }`.

---

## 5. Checklist before shipping
- [ ] Only colours from this file are used, with no stray hex values.
- [ ] Plus Jakarta Sans is the only font loaded.
- [ ] Headings are 800 weight and `ink` coloured; body text is 400 weight and `body` coloured.
- [ ] Each section has a single primary CTA, in Cherry Grove.
- [ ] Text on dark sections uses white or Alabaster Hay.
- [ ] Focus outlines are visible on every interactive element.
