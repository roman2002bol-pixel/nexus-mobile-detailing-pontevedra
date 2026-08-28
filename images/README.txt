IMAGE CHECKLIST — NEXUS Mobile Detailing of Ponte Vedra
==============================================
Drop files into this folder using the EXACT names below and every placeholder
box on the site will automatically be replaced with your real photo — no code
edits needed. Until a file exists, the page shows a labeled gray placeholder
instead of a broken image (the hero background is the one exception — it
just quietly shows the plain background until you add it, see below).

Recommended format: .jpg, optimized/compressed (mobile-first = fast loading).
Sizes below are a guide, not a hard requirement — object-fit:cover will crop
to match, so slightly different ratios are fine.

HOME PAGE
  hero-bg.png                1920x1200  full-bleed hero background photo (optional — CSS falls back cleanly without it)
  service-standard.png       800x600    Standard Detail row photo
  service-interior.png       800x600    Interior Only Deep Clean row photo
  service-full.png           800x600    Full Detail row photo
  service-ceramic.png        800x600    Ceramic Coating row photo

ABOUT PAGE
  equipment-1.jpg            800x600    mobile unit / water tank setup
  equipment-2.jpg            800x600    steam cleaning equipment
  equipment-3.jpg            800x600    polishing / ceramic coating equipment

SERVICE PAGES
  Each service detail page (services/full-detail.html etc.) reuses the
  same HOME PAGE photo for that package (service-full.png,
  service-standard.png, service-interior.png, service-ceramic.png) — no
  separate file needed.

SERVICE AREA PAGE
  area-ponte-vedra-beach.jpg 900x675   a shot taken in Ponte Vedra Beach if you
                                       have one, otherwise any strong before/after

LOGO / FAVICON
  The header currently uses a text-based "NX" wordmark (no image needed to
  look finished). If you have a real logo file, replace the <span class="logo-mark">
  and <span class="logo-text"> block in the header of every page with:
    <img class="logo-img" src="images/logo.jpg" alt="NEXUS Mobile Detailing">
  and drop your logo in as images/logo.jpg. See README.md in the project root
  for a ready-to-use AI logo-generation prompt if you don't have one yet.

OG IMAGE
  og-image.jpg               1200x630   used for link previews on social/text/iMessage
