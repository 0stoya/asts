# Website image slots

The site deliberately keeps photography under `/public/images` so final assets can be dropped in without changing page code.

## Structure

- `brand/` — original logo, cleaned logo variants, vehicle photography
- `hero/spring/` — spring homepage hero
- `hero/summer/` — summer homepage hero
- `hero/autumn/` — autumn homepage hero
- `hero/winter/` — winter homepage hero
- `projects/tree-surgery/`
- `projects/hedge-cutting/`
- `projects/stump-grinding/`
- `projects/garden-clearance/`
- `projects/landscaping/`
- `before-after/` — paired project images for sliders
- `seasonal/spring/`, `summer/`, `autumn/`, `winter/`
- `social/` — Open Graph/social share artwork

The four seasonal homepage hero slots now use the V1 PNG artwork (`spring.png`, `summer.png`, `autumn.png`, `winter.png`), and `brand/logo.png` is wired into the site chrome. The older SVG hero files remain as layout-safe fallbacks/reference assets while the image pack develops. Project-card SVGs are still temporary placeholders until real project photography is added.


## V1 CTA / seasonal artwork

- `/images/quote.png` — quote CTA background artwork
- `/images/call.png` — call CTA background artwork
- `/images/photos.png` — photo-enquiry CTA background artwork
- `/images/seasonal/autumn/seasonal_autumn.png` — autumn seasonal advice background

Buttons and headings are rendered as real HTML over these assets so the site keeps responsive behaviour, accessibility and working interactions.
