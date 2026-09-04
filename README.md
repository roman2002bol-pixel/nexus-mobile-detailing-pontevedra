# NEXUS Mobile Detailing of Ponte Vedra – Website

A complete, static (HTML/CSS/JS only – no build step, no dependencies) 9-page
website, built mobile-first for a mobile detailing business launching in
Ponte Vedra Beach, FL / St. Johns County.

## 1. Preview it right now

Just double-click `index.html` (or any other page) – it opens directly in
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
areas/                 One page per service-area – see note below on why
  ponte-vedra-beach.html   there's only one to start
css/style.css          All design/styling – one file, no framework
js/main.js             Mobile nav, image placeholders, form handling
images/README.txt      Exact filenames the site expects – drop your photos in
```

**Why only one area page (unlike a typical multi-city detailing site):**
Google's spam updates specifically target sites that publish many
near-identical templated location pages before they have real, distinct
content to put on each one – even a handful counts if the pages are thin.
Ponte Vedra Beach is genuinely fleshed out (real neighborhoods, a Ponte
Vedra-specific FAQ, its own schema). Add a page for Nocatee, St. Johns, or
Jacksonville only once you have real, specific things to say about that
area – jobs done there, local landmarks, actual coverage confirmed – not
by copy-pasting this file and swapping the city name.

## 3. Before you launch – placeholders to replace

**Phone number & email – live, real values.** Every page uses the real
business number `(904) 871-4634` (as text, `tel:+19048714634`, and
`sms:+19048714634`) and `nexusmobiledetailingh@gmail.com`. If either ever
changes, update it everywhere in one shot:

```powershell
# Run from the project folder in PowerShell – updates every file at once.
Get-ChildItem -Recurse -Include *.html,*.js | ForEach-Object {
  (Get-Content $_.FullName -Raw) `
    -replace '\(904\) 871-4634', '(YOUR) NEW-NUMBER' `
    -replace '\+19048714634', '+1YOURNEWNUMBER' `
    -replace 'nexusmobiledetailingh@gmail\.com', 'your-new-email@example.com' |
    Set-Content $_.FullName -NoNewline
}
```
Use the same digits-only format (`+1XXXXXXXXXX`) for the `tel:`/`sms:` version
so click-to-call and click-to-text work correctly.

**Pricing** – the prices on every page ($120/$160/$280/$750 base rates) are
starting estimates based on market research for the Ponte Vedra Beach area
(affluent, premium-detailing-friendly), not confirmed real costs. Adjust
them once you know your actual product/labor costs and what local
competitors (MXD Mobile Detailing, Jax Pro Detailing, All Star Mobile Car
Detailing, etc.) are charging.

**Images** – see `images/README.txt` for the exact filenames. Drop matching
files into `/images` and every placeholder box disappears automatically.
The homepage hero also expects a background photo at `images/hero-bg.png`
(a wide, moody shot works best – see the CSS notes in section 6).

**Reviews** (`reviews.html` and the homepage) – the review cards are marked
`[Add a real Google review here]` on purpose. Don't invent testimonials –
copy your actual current Google reviews in, word for word, or embed Google's
own review widget. There's also a "Leave a Review" button that needs your
Google Business Profile Place ID (instructions are in an HTML comment right
above it in `reviews.html`).

**Set up a Google Business Profile before or alongside launch.** For a
mobile, service-area business like this one, your Google Business Profile
matters more for local search and AI Overview visibility than almost
anything on this site. Do this early, not as an afterthought.

**Live scheduling (Setmore)** – `contact.html`'s "Choose a Package & Book
a Time" button is live, pointing to the real, verified account at
`https://nexusmobiledetailingh.setmore.com` (note the "h" – the plain
`nexusmobiledetailing.setmore.com` belongs to an unrelated business in
another state; don't "simplify" the URL). All 17 services and their
pricing are already synced to match this site. If you add a new package
or change a price here, update it in the Setmore dashboard too – the two
aren't linked automatically.

**Do not just guess a Setmore subdomain** if you ever need to redo this
– names are first-come-first-served and plenty are already taken by
unrelated businesses.
- Optional – for an in-page popup instead of opening a new tab: in the
  Setmore dashboard go to Booking Page → Add to Website, copy the embed
  snippet it generates, and send it over to swap in.

**Booking form** (`contact.html`) – the form currently has no backend, so a
submission opens a pre-filled email as a fallback (nothing is ever lost, but
it's not fully automatic). To wire it up properly, pick one:
- **Netlify Forms** (easiest, free): host the site on Netlify, add
  `data-netlify="true"` and a hidden `form-name` input to the `<form>` tag –
  submissions land in your Netlify dashboard automatically.
- **Formspree** or similar: set the form's `action` to your Formspree
  endpoint and set `data-endpoint-ready="true"` on the `<form>` tag.
- Your own backend: same as above, point `action` at your endpoint.

**About page** – the story/history text is intentionally generic. Swap in
your real founding story, certifications, and specifics – that's what
actually builds trust, more than any stock copy can.

**Logo** – the header uses a clean text-based "NX / NEXUS / Mobile
Detailing" wordmark, so the site looks finished with zero extra assets. If
you get a real logo file later, replace the `<span class="logo-mark">NX</span>`
+ `<span class="logo-text">…</span>` block (appears identically near the top
of every page) with an `<img src="images/logo.jpg" alt="NEXUS Mobile
Detailing">`. See section 7 for how to get a logo made.

## 4. Deploying

**Live now, on real infrastructure.** This repo auto-deploys on every push
to `main` to two places at once:
- **Vercel** (production) – `https://www.nexusmobiledetailingh.com` is the
  real domain (Cloudflare-managed DNS, apex `nexusmobiledetailingh.com`
  308-redirects to `www.`). Also reachable at the default
  `https://nexus-mobile-detailing-pontevedra.vercel.app`.
- **GitHub Pages** – `https://roman2002bol-pixel.github.io/nexus-mobile-detailing-pontevedra/`,
  set up before Vercel was connected. Now redundant since Vercel serves the
  real domain, but harmless to leave running – every page's `canonical` tag
  points at the real `www.nexusmobiledetailingh.com` regardless of which
  URL served the request, so none of this reads as duplicate content to
  Google.

Any other static host would also work since there's no server-side code
(Netlify, Cloudflare Pages, traditional FTP hosting, etc.) – just not
needed here, the two above already cover it.

## 5. SEO already built in

- Unique `<title>` and meta description per page, targeting the keyword set
  ("mobile detailing Ponte Vedra Beach", "ceramic coating Ponte Vedra",
  "interior car detailing near me", etc.) naturally in H1s and opening
  paragraphs – not stuffed.
- `AutoDetailing` + `FAQPage` structured data (JSON-LD) on the homepage, all
  4 service pages, and the Ponte Vedra Beach area page – built in from day
  one this time, not retrofitted later.
- Visible FAQ sections matching the FAQ schema exactly (Google's guidelines
  require this – never let the two drift apart).
- Fast by default: no JS frameworks, no icon-font/CDN requests, no heavy
  animation – just one CSS file and one small JS file.
- `llms.txt` at the project root for AI-agent discovery (ChatGPT, Claude,
  Perplexity, etc. – see llmstxt.org).

## 6. Lead tracking (Google Analytics 4)

Google Business Profile is verified – the next piece is knowing which
channel each lead actually came from (Maps listing vs. organic search vs.
a call vs. the quote form vs. the Setmore booking link).

**Already wired up in the code, waiting on a GA4 property:**
`js/main.js` fires distinct GA4 events for every real contact action –
`click_to_call` (tel: links), `click_to_text` (sms: links),
`click_to_email` (mailto: links), `setmore_booking` (any link to
`*.setmore.com` – our actual primary booking path), and `quote_form`
(the fallback quote form's mailto submit) – all sent as `generate_lead`
events with a distinguishing `event_label`, so they show up in GA4/Search
Console as one real "leads" metric instead of guesswork.

**Deliberately not using GA4's built-in Enhanced Measurement "click"
event for this** – it fires for *any* outbound link (tel:/mailto: links
included, but also the map embed, social links, anything leaving the
site), so marking it as a Key Event would count every one of those as a
"lead", not just real contact attempts. The named events above are the
accurate way to do it.

**To finish activating tracking** (needs a free Google Analytics account
– create the property yourself, then hand off the ID):
1. Create a GA4 property at [analytics.google.com](https://analytics.google.com) and grab its
   Measurement ID (`G-XXXXXXXXXX`).
2. Send that ID over – the `gtag.js` snippet gets added to every page's
   `<head>` in one pass, and the events above start reporting immediately
   (no other code changes needed, they're already firing – they just have
   nowhere to send to yet).
3. In GA4, go to **Admin → Events**, find `generate_lead`, and mark it as
   a **Key Event** (GA4's current name for what used to be called a
   "conversion").
4. Optional but recommended – in your Google Business Profile's Website
   field, point it at
   `https://www.nexusmobiledetailingh.com/?utm_source=google_maps&utm_medium=organic&utm_campaign=gbp_listing`
   so GA4 can tell "came from the Maps listing" apart from plain organic
   search, which otherwise get bucketed together.

**Not something this repo can set up** (all need your own accounts):
Google Business Profile's own **Performance** tab already tracks direct
"Call" taps on the Maps card itself, separately from anything above – no
setup needed there, it's automatic. Instant lead notifications (e.g. a
Telegram bot via a Formspree/Web3Forms webhook) and call forwarding on
your phone carrier are also entirely outside the website – set those up
directly with those services when you're ready.

## 7. Design notes (why it doesn't look like a template)

The visual system leans on the brand name and the setting: "NEXUS" is
where the manicured Ponte Vedra golf-club coastline meets the Atlantic –
a literal meeting point of land, sea, and client. Instead of the generic
water-droplet/bubble graphics most detailing sites use, the palette pairs
a deep navy-charcoal base with a warm brass/gold accent (`--ink` / `--accent`
in `css/style.css`, top `:root` block – change those variables there to
retheme the whole site in one place), evoking the area's country-club
premium feel rather than a generic "car wash blue."

The homepage hero is set up for a full-bleed photo background (`.hero` in
`css/style.css`) rather than a stock before/after graphic. Drop your photo
in as `images/hero-bg.png`; until then it just shows the plain background,
nothing breaks.

## 8. Getting a real logo made

The current header/footer logo is a clean text wordmark ("NX" mark +
"NEXUS / Mobile Detailing"), so the site looks finished with zero extra
assets – there's no rush to replace it. When you're ready for a real mark,
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
> understated – not a cartoon car, not a generic droplet clip-art icon.

A few things that reliably improve logo-generation results with any tool:
- Ask for several distinct concepts/variations, not one "final" image.
- Explicitly ban gradients and drop shadows – they don't scale down well.
- Request it on a plain white or transparent background, mark only (no
  mockup, no business card, no environment).
- Once you like a direction, ask the tool to "simplify further" or "reduce
  to flat shapes" – first outputs from most AI image tools are usually
  more detailed than a logo should be.
