

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
