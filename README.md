# Kelas portfolio

A responsive portfolio built with Next.js App Router, TypeScript, and CSS. Includes an animated SVG hero, pointer parallax, magnetic link, scroll reveals, project filters, three static case studies, service accordions, responsive navigation, and an accessible native contact dialog. Respects reduced-motion preferences.

## Run

```powershell
cd E:\kelas-portfolio
npm install
npm run dev
```

Open http://127.0.0.1:3107. `npm run build` creates a static export in `out/`. `npm run typecheck` checks TypeScript. A static export can be hosted on any static web host; it does not use `next start`.

## Make it yours

Edit `src/data/portfolio.ts` for your name, role, location, bio, email, and projects. The name and projects are illustrative placeholders, not verified professional claims. Email inquiries are disabled until you supply your email. Once configured, submitting the contact form opens a prefilled message in the visitor's email application; it does not send mail through a server.

Update page metadata in `src/app/layout.tsx`. Project mockups are in `src/components/project-art.tsx`; replace them with your actual work. Styles live in `src/app/globals.css`. Fonts load from Google Fonts with system fallbacks.

## Design study

The composition is an original synthesis, not a reproduction of another designer's website. References reviewed:

- [Dennis Snellenberg](https://dennissnellenberg.com/) — large typographic hierarchy, generous spacing, interactive personality. Applied to the introduction, magnetic work link, and expressive contact section.
- [Gil Huybrecht](https://gilhuybrecht.com/) — project-first presentation and visual case studies. Applied to the large featured project and supporting project grid.
- [Brittany Chiang](https://brittanychiang.com/) — clear biography, project context, and accessible navigation. Applied to semantic structure, project detail pages, and readable supporting content.
- [Bruno Simon](https://bruno-simon.com/) — portfolio as a playful demonstration of creative development. Applied as a lightweight interactive flower rather than recreating the site's 3D world.

The shared palette, spacing scale, typography, and motion easing keep the sections coherent. No source code, branding, or project imagery was copied from the reference portfolios. Awwwards portfolio listing and Dennis pages were attempted but timed out in this environment; no award ranking was independently verified. Browser inspection was blocked by the computer-use tool's URL verification restriction.

Landscape photograph: [Unsplash](https://images.unsplash.com/photo-1464822759023-fed622ff2c3b), downloaded to `public/images/landscape.jpg`.

## Verification and hosting

Production build and TypeScript validation passed. The home page, all three case-study routes, and the landscape image returned HTTP 200 in local HTTP checks. Interactive browser and visual QA remain unverified because the computer-use tool stopped browser access.

A private Sites project was registered in `.openai/hosting.json`, but source synchronization failed (initially a Git host DNS error, then a source-helper failure). No hosted deployment is claimed. The complete source and the generated `out/` directory are available locally.

## Updated project showcase

The work section now includes the six owner-supplied projects plus the existing Personal Portfolio. Edit `src/data/projects.ts` for project descriptions, implementation details, technology lists, and category filters. Profile and experience content remain in `src/data/user-data.ts`. `src/components/project-showcase.tsx` renders the filterable gallery; `src/app/work.css` contains its responsive layout and original CSS/SVG product illustrations. Each project has a statically exported case study.

Design research reviewed on 26 November 2026:
- [Dennis Snellenberg on Awwwards](https://www.awwwards.com/sites/dennis-snellenberg): restrained palette, transitions, and microinteractions.
- [Dennis Snellenberg’s live portfolio](https://dennissnellenberg.com/): clear work hierarchy and project-focused navigation.
- [Awwwards Hot Right Now 2023](https://assets.awwwards.com/awards/gallery/2023/07/HOT-RIGHT-NOW-BOOK-2023.pdf): portfolio presentation reference.

The redesign uses an original asymmetric gallery, large typography, green accents, accessible category controls, technology tags, and distinct product illustrations. No award or affiliation is claimed. Illustrations are labeled as illustrative; they are not production screenshots. Dates are omitted where the supplied project descriptions did not provide them.
