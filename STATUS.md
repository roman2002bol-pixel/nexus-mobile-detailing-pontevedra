

## 2026-09-22 – practical content review

Removed generic hero metrics and added clearly labeled illustrative service scenarios. These are educational examples, not completed jobs or testimonials. User reports two real jobs on Google Business Profile; project facts and photos are still needed before publishing case studies. Primary local references are linked beside the applicable guidance. Existing contact placeholders on Savannah previews still require owner-provided production details.

Validation: all six existing static audits pass across the three sites (60 HTML pages). Mobile and desktop rendering reviewed in the local browser. Preserve these content changes when rebuilding; Foundation `build_pages.write` runs `content_review.apply_site`.

## 2026-10-02 – restore visible coverage around the Jacksonville Beach base

Cause: the launch version exposed only the dedicated Ponte Vedra Beach page, two homepage chips, a Ponte Vedra-centered map, and outdated expanding-coverage copy. The site did not show its actual base and wider service coverage clearly.

Implemented: Service Areas dropdown and six location links on all 10 pages; new service-areas.html hub with six distinct appointment-guidance sections; six homepage chips; map centered on the existing business base at 4300 S Beach Pkwy, Jacksonville Beach; consistent footer links, homepage FAQ/areaServed, sitemap and llms.txt. Owner explicitly confirmed Neptune Beach, Atlantic Beach and Palm Valley in this chat alongside existing Jacksonville Beach, Ponte Vedra Beach and Nocatee coverage. Other Jacksonville/St. Johns County addresses remain subject to confirmation. Existing Ponte Vedra page retained. No invented radius, travel time, branches or customer projects. Corrected outdated calendar claim in llms.txt and the About page's base badge.

Reusable technique: distinguish actual business coverage from standalone SEO pages. Give every confirmed area a useful, addressable hub section and expose those links consistently. A map of the base is labeled as a base, not a service boundary. Maintenance details are recorded in README.md.

Validation: all six static audits pass across 10 pages (links/assets, FAQ/schema parity, image reuse, markup hooks, SEO basics and US English). Browser review at 375px and 1440px confirmed the six-area mobile dropdown, area-anchor navigation, homepage grid and base map. Publication: commit 02a8606 deployed successfully to Vercel; the production service-areas.html page was opened and all six area sections verified on October 2, 2026.

## 2026-10-02 – subtle motion

Added one-time 420ms scroll entrances for below-the-fold section headings, cards, steps, examples and area grids; gentle desktop hover feedback on buttons/cards/area arrows; 220ms FAQ answer appearance. Shared assets cover all 10 pages, with cache versions updated. No external animation library, continuous animation, hero delay or layout shift. Content remains visible if JavaScript or IntersectionObserver is unavailable. Reduced-motion preference disables CSS motion and cancels/disconnects active scroll animations when changed. Touch devices do not receive the new hover effects.

Validation: JavaScript syntax, markup and internal-link checks pass across all 10 pages. Desktop (1280px) and mobile (375px) browser review completed with no console errors. Reduced-motion fallback reviewed in code. Publication: commit 0dfd253 deployed successfully to Vercel; production HTML verified to reference both 20261002-motion assets. Maintenance: see README.md motion notes.

## 2026-10-02 – additional block motion

Extended one-time entrances to the actual homepage service-row media/body, individual service-area chips, quote heading/introduction, CTA bands and local callouts. Sibling-based staggering (0/65/130ms) stays consistent instead of depending on observer batch order. Added transform-only hero text/CTA/trust entrance, preserving full text opacity and immediate heading visibility; slight desktop-only service-photo zoom and feature-icon tilt. Form controls remain unanimated. Reduced-motion rules still apply. Shared asset cache version: 20261002-blocks across 10 pages.

Validation: JavaScript syntax and markup checks passed; homepage and service rows reviewed in the local browser with no console errors. Published as e5b5f57: Vercel Production succeeded; production index.html verified with both 20261002-blocks assets. The root URL initially returned the previous cached HTML.

## 2026-10-12 – Search Console indexing investigation (findings only, no site changes)

Roman asked why half the pages show as not indexed. Checked in Search Console (property `https://www.nexusmobiledetailingh.com/`, account roman2002bol@gmail.com) and by direct HTTP requests.

**What Search Console shows.** Indexed 7, not indexed 7. The 7 indexed are `/`, `/about.html`, `/reviews.html`, `/contact.html`, `/services/ceramic-coating.html`, `/services/interior-deep-clean.html`, `/areas/ponte-vedra-beach.html`. All 7 "not indexed" are duplicates of pages that *are* indexed: six "Alternate page with proper canonical tag" (`/about`, `/reviews`, `/contact`, `/services/ceramic-coating`, `/services/interior-deep-clean`, `/areas/ponte-vedra-beach` -- the extensionless twins) and one "Page with redirect" (`/index.html` -> `/`). That is consolidation working, not lost pages. A "validate fix" had been started on the alternate-canonical group and shows Failed; that is expected, because those are not errors.

**The real gap: three pages Google has never seen.** URL Inspection reports "URL is unknown to Google" for `/services/full-detail.html`, `/services/standard-detail.html` and `/service-areas.html`, with no matching sitemap and no detected referring pages. **No sitemap has ever been submitted** for this property (Sitemaps report: 0 entries), so discovery depends entirely on crawling links on a new, low-authority site.

**Contributing configuration issue.** Every canonical, `og:url`, sitemap `<loc>` and internal link uses `.html`, but Cloudflare answers each `.html` URL with a 307 temporary redirect to the extensionless URL, whose canonical points back to `.html`. Nine of ten sitemap URLs therefore redirect. Google has tolerated it for six pages, but it is the source of the duplicate set and a weak, contradictory signal. Separately, the apex `nexusmobiledetailingh.com` serves the full site with 200 instead of redirecting to `www`.

**Hosting, confirmed:** the live domain is served by Cloudflare (Cloudflare IPs, `Server: cloudflare`, `CF-Cache-Status`, no Vercel headers, no `vercel.json`). The October 2 entry above mentions "Vercel Production"; that refers to the leftover Vercel project that still builds from GitHub, not to what visitors and Google receive.

**Proposals, not implemented (awaiting Roman):**
1. Submit `https://www.nexusmobiledetailingh.com/sitemap.xml` in Search Console.
2. Request indexing for the three unknown pages.
3. Switch canonical, `og:url`, sitemap and internal links to the extensionless URLs that return 200, so no listed URL redirects.
4. Add a Cloudflare redirect from the apex to `www` (needs Cloudflare dashboard access).

## 2026-10-12 – Indexing fixes implemented

Roman approved the proposals in the entry above.

**Implemented and verified live:**
1. **Clean URLs.** Canonical, `og:url`, JSON-LD, sitemap, `llms.txt` and all internal links now use extensionless URLs (commit 0eabdc9). Its Cloudflare Workers Build failed with no code cause; an empty commit (5051666) rebuilt successfully. On the live domain all 10 sitemap URLs return 200 with a self-referencing canonical, and every internal link checked returns 200 with no redirect.
2. **Sitemap submitted** in Search Console on 2026-10-12. It showed "Couldn't fetch" immediately after submission; the file returns 200 as `application/xml`, is valid, lists 10 URLs and is served to the Googlebot user agent, so this is the initial state. Recheck in a few days.
3. **Indexing requested** for `/services/full-detail`, `/services/standard-detail` and `/service-areas`; each confirmed "added to a priority crawl queue". Indexing itself is not guaranteed and has not happened yet.

**Not done:**
4. Apex-to-`www` redirect -- needs a Cloudflare redirect rule; the dashboard in Chrome was signed out, and signing in is Roman's step.

**Found while verifying, not fixed:** the entire repository is deployed as static assets, so `STATUS.md`, `README.md` and `.claude/` are publicly served on the business domain and could be indexed. A `.assetsignore` would exclude them. Awaiting Roman's decision.

Checks: `check_clean_urls`, `check_broken_links` (now resolving clean URLs), `check_seo_basics` and `check_markup_contract` pass.

## 2026-10-12 – Internal files removed from the live domain

**What changed.** Added `.assetsignore` (commit 35b976e), which Cloudflare's static-asset deploy reads: it excludes `.claude`, `*.md`, `.nojekyll`, `images/README.txt` and itself.

**Why.** The whole repository was deployed, so `STATUS.md`, `README.md` and every `.claude/` skill were publicly served on nexusmobiledetailingh.com and could be indexed under the business domain.

**Verification (live).** Workers Build succeeded. `STATUS.md`, `README.md`, `.claude/...`, `images/README.txt`, `.nojekyll` and `.assetsignore` now return 404; `/`, `/about`, `/contact`, `/services/full-detail`, `/service-areas`, `sitemap.xml`, `robots.txt`, `llms.txt`, CSS and JS still return 200. The GitHub Pages copy is unaffected by design (that host ignores the file; the repo is public there anyway).

**Found, not fixed:** every page's `og:image` points to `images/og-image.jpg`, which has never existed in the repo (404 on live and on GitHub Pages). Shared links therefore show no preview image. Needs a 1200x630 image chosen and added.
