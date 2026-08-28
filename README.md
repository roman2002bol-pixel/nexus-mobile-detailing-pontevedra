# NEXUS Mobile Detailing of Ponte Vedra — Website

A complete, static (HTML/CSS/JS only — no build step, no dependencies) 9-page
website, built mobile-first for a mobile detailing business launching in
Ponte Vedra Beach, FL / St. Johns County.

## 1. Preview it right now

Just double-click `index.html` (or any other page) — it opens directly in
your browser, no server needed. All internal links and images work relative
to the file structure, so keep the folders together as-is.

## 2. What's in here

```
index.html            Home
about.html
reviews.html
contact.html          Booking / quote form
services/
  full-detail.html
  standard-detail.html
  interior-deep-clean.html
  ceramic-coating.html
areas/                 One page per service-area — see note below on why
  ponte-vedra-beach.html   there's only one to start
css/style.css          All design/styling — one file, no framework
js/main.js             Mobile nav, image placeholders, form handling
images/README.txt      Exact filenames the site expects — drop your photos in
```

**Why only one area page (unlike a typical multi-city detailing site):**
Google's spam updates specifically target sites that publish many
near-identical templated location pages before they have real, distinct
content to put on each one — even a handful counts if the pages are thin.
Ponte Vedra Beach is genuinely fleshed out (real neighborhoods, a Ponte
Vedra-specific FAQ, its own schema). Add a page for Nocatee, St. Johns, or
Jacksonville only once you have real, specific things to say about that
area — jobs done there, local landmarks, actual coverage confirmed — not
by copy-pasting this file and swapping the city name.

## 3. Before you launch — placeholders to replace

**Phone number & email** — every page currently uses a placeholder number
`(904) 555-0148` (as text, `tel:+19045550148`, and `sms:+19045550148`) and
`info@nexusmobiledetailing.com`. Once you have a real business number,
replace it everywhere in one shot:

```powershell
# Run from the project folder in PowerShell — updates every file at once.
Get-ChildItem -Recurse -Include *.html,*.js | ForEach-Object {
  (Get-Content $_.FullName -Raw) `
    -replace '\(904\) 555-0148', '(YOUR) NEW-NUMBER' `
    -replace '\+19045550148', '+1YOURNEWNUMBER' `
    -replace 'info@nexusmobiledetailing\.com', 'your-real-email@example.com' |
    Set-Content $_.FullName -NoNewline
}
```
Use the same digits-only format (`+1XXXXXXXXXX`) for the `tel:`/`sms:` version
so click-to-call and click-to-text work correctly.

**Pricing** — the prices on every page ($180/$225/$360/$550 base rates) are
starting estimates based on market research for the Ponte Vedra Beach area
(affluent, premium-detailing-friendly), not confirmed real costs. Adjust
them once you know your actual product/labor costs and what local
competitors (MXD Mobile Detailing, Jax Pro Detailing, All Star Mobile Car
Detailing, etc.) are charging.

**Images** — see `images/README.txt` for the exact filenames. Drop matching
files into `/images` and every placeholder box disappears automatically.
The homepage hero also expects a background photo at `images/hero-bg.png`
(a wide, moody shot works best — see the CSS notes in section 6).

**Reviews** (`reviews.html` and the homepage) — the review cards are marked
`[Add a real Google review here]` on purpose. Don't invent testimonials —
copy your actual current Google reviews in, word for word, or embed Google's
own review widget. There's also a "Leave a Review" button that needs your
Google Business Profile Place ID (instructions are in an HTML comment right
above it in `reviews.html`).

**Set up a Google Business Profile before or alongside launch.** For a
mobile, service-area business like this one, your Google Business Profile
matters more for local search and AI Overview visibility than almost
anything on this site. Do this early, not as an afterthought.

**Live scheduling (Setmore)** — `contact.html` has a "Choose a Package &
Book a Time" button that currently points to a placeholder URL
(`nexusmobiledetailing.setmore.com`) that doesn't exist yet. To activate it:
1. Sign up free at [setmore.com](https://setmore.com).
2. Under Services, add your packages (Standard Detail, Interior Only Deep
   Clean, Full Detail, Ceramic Coating — Two Year and Three Year — plus any
   new offerings you want) with your own real durations, prices, and
   descriptions.
3. Set your working hours/staff.
4. Copy your real booking page link and paste it into the button's `href`
   in `contact.html` (search for `nexusmobiledetailing.setmore.com`).
5. Optional — for an in-page popup instead of opening a new tab: in the
   Setmore dashboard go to Booking Page → Add to Website, copy the embed
   snippet it generates, and send it over to swap in.

**Booking form** (`contact.html`) — the form currently has no backend, so a
submission opens a pre-filled email as a fallback (nothing is ever lost, but
it's not fully automatic). To wire it up properly, pick one:
- **Netlify Forms** (easiest, free): host the site on Netlify, add
  `data-netlify="true"` and a hidden `form-name` input to the `<form>` tag —
  submissions land in your Netlify dashboard automatically.
- **Formspree** or similar: set the form's `action` to your Formspree
  endpoint and set `data-endpoint-ready="true"` on the `<form>` tag.
- Your own backend: same as above, point `action` at your endpoint.

**About page** — the story/history text is intentionally generic. Swap in
your real founding story, certifications, and specifics — that's what
actually builds trust, more than any stock copy can.

**Logo** — the header uses a clean text-based "NX / NEXUS / Mobile
Detailing" wordmark, so the site looks finished with zero extra assets. If
you get a real logo file later, replace the `<span class="logo-mark">NX</span>`
+ `<span class="logo-text">…</span>` block (appears identically near the top
of every page) with an `<img src="images/logo.jpg" alt="NEXUS Mobile
Detailing">`. See section 7 for how to get a logo made.

## 4. Deploying

Any static host works since there's no server-side code:
- **Netlify** — drag the whole folder onto app.netlify.com/drop (also gets
  you free form handling, see above).
- **GitHub Pages / Cloudflare Pages** — push the folder to a repo, enable
  Pages.
- **Traditional hosting (GoDaddy, cPanel, etc.)** — upload the folder via
  FTP/File Manager as-is.

Once you have a domain, update the `<link rel="canonical">` tags and the
`AutoDetailing` JSON-LD block in `index.html` from the placeholder
`nexusmobiledetailing.com` to your real domain.

## 5. SEO already built in

- Unique `<title>` and meta description per page, targeting the keyword set
  ("mobile detailing Ponte Vedra Beach", "ceramic coating Ponte Vedra",
  "interior car detailing near me", etc.) naturally in H1s and opening
  paragraphs — not stuffed.
- `AutoDetailing` + `FAQPage` structured data (JSON-LD) on the homepage, all
  4 service pages, and the Ponte Vedra Beach area page — built in from day
  one this time, not retrofitted later.
- Visible FAQ sections matching the FAQ schema exactly (Google's guidelines
  require this — never let the two drift apart).
- Fast by default: no JS frameworks, no icon-font/CDN requests, no heavy
  animation — just one CSS file and one small JS file.
- `llms.txt` at the project root for AI-agent discovery (ChatGPT, Claude,
  Perplexity, etc. — see llmstxt.org).

## 6. Design notes (why it doesn't look like a template)

The visual system leans on the brand name and the setting: "NEXUS" is
where the manicured Ponte Vedra golf-club coastline meets the Atlantic —
a literal meeting point of land, sea, and client. Instead of the generic
water-droplet/bubble graphics most detailing sites use, the palette pairs
a deep navy-charcoal base with a warm brass/gold accent (`--ink` / `--accent`
in `css/style.css`, top `:root` block — change those variables there to
retheme the whole site in one place), evoking the area's country-club
premium feel rather than a generic "car wash blue."

The homepage hero is set up for a full-bleed photo background (`.hero` in
`css/style.css`) rather than a stock before/after graphic. Drop your photo
in as `images/hero-bg.png`; until then it just shows the plain background,
nothing breaks.

## 7. Getting a real logo made

The current header/footer logo is a clean text wordmark ("NX" mark +
"NEXUS / Mobile Detailing"), so the site looks finished with zero extra
assets — there's no rush to replace it. When you're ready for a real mark,
here's a prompt written for the brand's actual palette and concept, ready
to paste into an AI image tool (Midjourney, DALL·E, Ideogram, etc.):

> Minimalist flat vector logo mark for "NEXUS Mobile Detailing," a premium
> mobile car detailing service in a coastal Florida golf-community market.
> Combine a subtle car silhouette or shine/sparkle motif with a single
> clean horizon or wave line beneath it, suggesting where land meets sea.
> Clean geometric shapes, two-color only: deep navy (#10202b) and warm
> brass/gold (#c1903f) on a white background. No gradients, no
> photographic detail, no text in the mark itself. Must read clearly as a
> small icon (favicon-size) as well as large. Style: modern, premium,
> understated — not a cartoon car, not a generic droplet clip-art icon.

A few things that reliably improve logo-generation results with any tool:
- Ask for several distinct concepts/variations, not one "final" image.
- Explicitly ban gradients and drop shadows — they don't scale down well.
- Request it on a plain white or transparent background, mark only (no
  mockup, no business card, no environment).
- Once you like a direction, ask the tool to "simplify further" or "reduce
  to flat shapes" — first outputs from most AI image tools are usually
  more detailed than a logo should be.
