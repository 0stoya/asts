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

The checked-in SVG files are temporary layout-safe placeholders. Replace them with final .webp/.avif photography once the image pack is approved, then update the matching paths in `src/config/seasons.ts` and project data.
