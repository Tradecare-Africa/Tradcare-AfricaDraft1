# Content notes

Content from `D:\Tradecare\tradecare-content.md` (the original tradecareafrica.com site)
was added to this project on 2026-11-13. It only fills gaps. No existing text was changed.
The new data lives in `src/data/companyContent.ts`.

## Where the two sources disagree (this project's version was kept)

| Topic | This project says | Original site says |
|---|---|---|
| Email | info@tradecareafrica.com | admin@tradecareafrica.com |
| Meaning of "Mazao Safi" | "Clean Produce" (Kiswahili) | "Safe harvest" |
| TCert | Independent assurance/certification body operating since 2017 (FLOCERT model) | T-Cert is a digital inspection platform, "under construction". The certification body founded in 2017 is **React Cert Africa** |
| Embu macadamia | 1,800 organic macadamia farmers in 14 clusters (current case study) | 2016–2020 project with FMS and Jungle Nuts: 2,000 farmers in clusters of 100. Shown separately under "Earlier projects" |
| Founder name | Joyce Wambui Gema | Joyce Gema (same person) |
| Phone | +254 781 050 960 | (+254) 781 050 960, plus a mobile, (+254) 114 171 636, which was added |

## Team

The Team page's existing cards (Dr. David Mwangi, Grace Muthoni Kinyua, Eng. Kelvin Ochieng,
Faith Njoki Karanja, Samuel Kiprono) do not appear on the original site. The original site's staff
(Rose Githumbi, Lisa Marie, Tabitha Wanjiku, Owen Francis, Stanley Muhuhi) were added as a separate
"Our People" section. Please confirm which list is accurate.

## Not added (no usable content in the source)

- Blog articles: titles only, no body text.
- Downloadable reports: titles only, no files.
- LinkedIn, X and Instagram: not set on the original site either.

## Change Log applied (2026-11-13)

Update 1 (founding year 2014 confirmed, "18+ years" was wrong):
- No "18" figure had been added to this project.
- Years in operation are now calculated as `current year - 2014` (`YEARS_IN_OPERATION` in
  `src/data/companyContent.ts`). This replaced two hardcoded "10+" figures: the homepage
  "Years Experience" badge and Joyce's key metric on the Team page.
- Added "Years Experience" to the About-page track record and the "Why Choose Us" intro sentence,
  both calculated.
- Founding year shows as 2014 everywhere (site description, footer, founder bio, About page).
- Left unchanged: "15+ Years Pioneer..." (Joyce's personal experience) and "12 Years Field
  Operations..." (another team member's personal experience). These are not company age.
- The site is statically generated, so the year count updates when the site is rebuilt.
