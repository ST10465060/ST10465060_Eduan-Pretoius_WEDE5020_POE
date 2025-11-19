# Healing Hooves — WEDE5020 POE
Equine therapy informational site built for WEDE5020 (Web Development) Portfolio of Evidence.

- Student: ST10465060 — Eduan Pretorius
- Module: WEDE5020
- Term: 2025
- Goal: A small multi‑page, accessible, responsive website with self‑hosted assets and clear documentation.

## Live Preview
- Live site: https://st10465060.github.io/ST10465060_Eduan-Pretoius_WEDE5020_POE/

---

## Repository structure (what’s in my folders)
This shows how my files are actually organised now.

- docs/ ← the live site (GitHub Pages uses this folder; **all HTML pages for the site are inside docs/**)
  - index.html, about.html, services.html, enquiry.html, contact.html
  - sitemap.html, sitemap.xml, robots.txt
  - css/
    - style.css
  - js/
    - main.js
  - screenshots/ ← device screenshots for Part 2/3 evidence
- downloads/
  - consent-form.pdf, info-brochure.pdf
- assets/
  - images/
    - home/ (homepage images)
    - about/ (about hero)
    - services/ (service card images)
    - contact/ (contact/banner)
  - icons/ (SVG icons)
  - fonts/
    - Inter/ (OFL + font files)
    - Playfair Display/ (OFL + font files)
  - Logo/ (logo files)
  - SEO/ (OG image etc.)
- content/ ← evidence only (per page: text.md, images.md, links.md)
- sitemap/ ← planning notes only (not used by the live site)
- .gitattributes ← normalises line endings
- asset-attribution.txt ← full list of image/icon/font sources (in IIE Harvard–Anglia style, alphabetised)

---

## Pages
- Home (docs/index.html)
- About (docs/about.html)
- Services (docs/services.html)
- Enquiry (docs/enquiry.html)
- Contact (docs/contact.html)

All production pages for the site are stored in the `docs/` folder for GitHub Pages deployment.  
Consistent header/footer, navigation state, spacing, and typography across all pages.

---

## Part 1 — Summary (baseline)

- Separate external stylesheet (css/style.css) applied to all pages.
- Semantic HTML with headings, lists, and descriptive alt text.
- Base design tokens in :root (colors, spacing, font sizes).
- Typography:
  - Headings: Playfair Display (self‑hosted)
  - Body: Inter (self‑hosted)
- Layout utilities:
  - Max‑width container with responsive padding
  - Grid helpers: .grid-2, .grid-3, .grid-4
- Accessibility:
  - Skip link to main
  - Informative vs decorative images handled correctly
  - Labels associated with inputs

### Part 1 Fixes (after feedback)

- Corrected relative paths for images, fonts, and CSS.
- Fixed selector/typo issues and stray braces in CSS.
- Organized assets into clear folders; added asset-attribution.txt.
- Prepared for GitHub Pages (site files in /docs).

---

## Part 2 — CSS Styling & Responsive Design

Outcomes covered: selector specificity, layout systems, media queries, fluid units, responsive images, and evidence screenshots.

### What’s new in Part 2

- **Responsive strategy**
  - Breakpoints at 900px (tablet) and 640px (mobile).
  - Relative units (rem, %) and clamp() for fluid type/spacing.
- **Layout**
  - Grid/Flex combinations for sections and cards.
  - Sticky header where appropriate.
- **Images**
  - Hero and service images set with predictable aspect-ratio and object-fit.
  - Non‑critical images use loading="lazy".
  - Optimized JPG sizes and consistent cropping per page.
- **Enquiry form**
  - Rebuilt with accessible, responsive 2‑column `.form-grid`.
  - Proper use of `<fieldset>` for grouped controls; labels wrap inputs for larger tap targets.
- **Icons**
  - Narrow CSS rules to avoid icons stretching to full width; normalized sizes.
- **Housekeeping**
  - `.gitattributes` added to normalize line endings to LF for code/text (HTML, CSS, JS, SVG, MD).
  - Cleaned accidental nested copy of the project folder (duplicate path issue resolved).

### Accessibility highlights

- Skip link for keyboard users.
- Clear focus targets; form labels and required indicators.
- Decorative icons given empty `alt` and `aria-hidden`.

---

## Part 3 — JavaScript & Interaction (current)

Part 3 focuses on adding JavaScript functionality, improving interactivity, and tightening up documentation and attribution.

### What’s new in Part 3

- **main.js added**
  - New `docs/js/main.js` file created for front‑end behaviour.
  - Linked from relevant HTML pages (e.g. `contact.html`, `enquiry.html`) just before the closing `</body>` tag.
  - Handles basic client‑side behaviour such as:
    - Validating required form fields before “submission”.
    - Displaying user‑friendly feedback messages (success/error) without a real backend.
    - Clearing or resetting messages when the user edits fields.

- **Contact page improvements**
  - Fixed CSS and asset paths on `contact.html` so the shared stylesheet and icons load correctly from `docs/css/style.css` and `assets/`.
  - Embedded Google Maps using `<iframe>` for the practice locations.
  - Styled map containers so the maps fill their cards/boxes, with a consistent height and responsive behaviour across breakpoints.

- **Documentation & attribution**
  - `asset-attribution.txt` updated to use **IIE Harvard (Anglia) style**, following:
    - Correct format for web images, icons, and fonts.
    - Learning resources (e.g. W3Schools, WAI) listed as documentation references only.
    - Full list alphabetised by author/organisation, as required by The IIE guide.
  - References in this README kept in line with the same IIE Harvard–Anglia approach.

---

## Screenshots (evidence)

Stored in `docs/screenshots/`. This repo includes device screenshots to demonstrate responsive behaviour across desktop, tablet, and mobile (portrait/landscape).

Device previews (examples using current filenames):

- **Desktop**
  - ![Desktop (3)](docs/screenshots/Desktop%20(3).png)
  - ![Desktop (4)](docs/screenshots/Desktop%20(4).png)
- **iPad Pro**
  - ![iPad Pro (3)](docs/screenshots/iPad%20Pro%20(3).png)
  - ![iPad Pro (4)](docs/screenshots/iPad%20Pro%20(4).png)
  - ![iPad Pro Rotated (3)](docs/screenshots/iPad%20Pro%20Rotated%20(3).png)
  - ![iPad Pro Rotated (4)](docs/screenshots/iPad%20Pro%20Rotated%20(4).png)
- **iPhone 14 Pro Max**
  - ![iPhone 14 Pro Max (3)](docs/screenshots/iPhone%2014%20Pro%20Max%20(3).png)
  - ![iPhone 14 Pro Max (4)](docs/screenshots/iPhone%2014%20Pro%20Max%20(4).png)
  - ![iPhone 14 Pro Max Rotated (3)](docs/screenshots/iPhone%2014%20Pro%20Max%20Rotated%20(3).png)
  - ![iPhone 14 Pro Max Rotated (4)](docs/screenshots/iPhone%2014%20Pro%20Max%20Rotated%20(4).png)
- **Samsung Galaxy S20 Ultra**
  - ![S20 Ultra (3)](docs/screenshots/Samsung%20Galaxy%20S20%20Ultra%20(3).png)
  - ![S20 Ultra (4)](docs/screenshots/Samsung%20Galaxy%20S20%20Ultra%20(4).png)
  - ![S20 Ultra Rotated (3)](docs/screenshots/Samsung%20Galaxy%20S20%20Ultra%20Rotated%20(3).png)
  - ![S20 Ultra Rotated (4)](docs/screenshots/Samsung%20Galaxy%20S20%20Ultra%20Rotated%20(4).png)

If filenames change later (e.g. `home-desktop.png`, `services-mobile.png`), these links should be updated to match.

---

## How to Run Locally

- **VS Code + Live Server:**
  - Open this repository in VS Code.
  - Right‑click `docs/index.html` → “Open with Live Server”.
- Or open `docs/index.html` directly in a browser (some features behave better via a local server).

All production HTML files live in the `docs/` folder.

---

## Deployment (GitHub Pages)

- Repo **Settings → Pages → Source**: `main` branch, folder: `/docs`.
- After it builds, the live URL is:

  - https://st10465060.github.io/ST10465060_Eduan-Pretoius_WEDE5020_POE/

---

## Asset Management

- All assets and their licenses are documented in **asset-attribution.txt** (repo root).
- Images (Pexels), Icons (IconScout), Fonts (Google Fonts, OFL).
- Learning resources consulted (W3Schools, WAI) are recorded there as **documentation references only**.
- Fonts are self‑hosted; `LICENSE‑OFL.txt` kept inside each font family folder.
- `asset-attribution.txt` now follows **The IIE Harvard (Anglia) style** and is **alphabetised by author/organisation**.

---

## Git & Repo Housekeeping

- Line endings normalized via `.gitattributes` to LF for HTML, CSS, JS, SVG, MD.
- Cleaned an accidental nested copy of the project folder that duplicated `index.html` and `css/style.css`.
- Standard push flow used:
  - `git add -A`
  - `git commit -m "…"`
  - `git push`

---

## References (IIE Harvard style)

**Learning resources**

- W3Schools. 2025. CSS Grid Layout. Available at: https://www.w3schools.com/css/css_grid.asp [Accessed 26 Sep 2025].  
- W3Schools. 2025. HTML Forms. Available at: https://www.w3schools.com/html/html_forms.asp [Accessed 26 Sep 2025].  
- W3Schools. 2025. Responsive Images. Available at: https://www.w3schools.com/howto/howto_css_image_responsive.asp [Accessed 26 Sep 2025].  
- W3C Web Accessibility Initiative (WAI). 2025. Images Concepts: Alt Text. Available at: https://www.w3.org/WAI/tutorials/images/ [Accessed 26 Sep 2025].

**Referencing guide**

- The IIE. 2025. The IIE Harvard (Anglia) Style Reference Guide. [PDF supplied in module] [Accessed 26 Sep 2025].

Full image, icon, and font source list is in **asset-attribution.txt** (repo root). Font OFL licenses are inside `assets/fonts/`. Per‑page image choices are logged in `content//images.md`.

---

## Changelog

- **2025‑11‑19 — Part 3: JavaScript & documentation**
  - Added `docs/js/main.js` for front‑end behaviour (form validation and user feedback).
  - Linked `main.js` into relevant HTML pages in `docs/`.
  - Fixed/confirmed CSS and asset paths on `docs/contact.html` so styling loads correctly.
  - Embedded and styled Google Maps `<iframe>` sections on the contact page so maps fill their cards responsively.
  - Updated `asset-attribution.txt` to IIE Harvard (Anglia) style and alphabetised all entries (images, icons, fonts, and learning references).
  - Updated this README to:
    - Explicitly note that all HTML pages live in `docs/`.
    - Describe new Part 3 JavaScript and contact‑page changes.

- **2025‑09‑26 — Part 2**
  - Responsive layouts (grid/flex), `clamp()` for type/spacing.
  - Enquiry: rebuilt accessible 2‑column form; stacks on small screens.
  - Images: consistent aspect-ratio, `object-fit`, and lazy loading.
  - Hero corrected on Home; services/about heroes made responsive.
  - Icon sizing normalized; avoided over-broad `img` selectors for SVGs.
  - Screenshots captured and added under `docs/screenshots/`.
  - `.gitattributes` added; repository normalized to LF line endings.
  - Cleaned nested folder duplication and updated README.
  - `asset-attribution.txt` populated with initial W3Schools references (documentation only).

- **2025‑08‑28 — Part 1**
  - Part 1 structure, base styles, and initial assets added.
  - Asset attribution created; self‑hosted fonts integrated.

---

## Known Limitations

- Map sections show embedded Google Maps but there is no dynamic JS API key-based integration.
- Forms are front‑end only (no backend submission).
- Content and contact details are sample placeholders.

## Contact

- Eduan Pretorius — ST10465060

