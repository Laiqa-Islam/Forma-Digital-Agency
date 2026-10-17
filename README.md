# FORMA — independent creative studio

A Next.js recreation of Landor's visual structure, adapted to a forest / ivory / mint palette, original copy, and the supplied local imagery. FORMA is the working name, not a final business identity.

## Run locally

```sh
npm install
npm run dev
```

Open http://127.0.0.1:3000.

```sh
npm run typecheck
npm run build
npm start
```

Node.js 20.9 or newer is required. On this Windows environment, Next.js compilation needed execution outside the restricted filesystem sandbox. This was a path access restriction, not a code failure.

## Included

- Homepage with full-screen supplied video, oversized serif wordmark, parallax, expanding introduction surface, video modal, Swiper carousel, animated typography, service cards, dotted world graphic, and gradient footer.
- Two-column work index and eight individual case studies, including galleries, motion, story sections, and next-project navigation.
- Contact page with searchable locations, live time zones, interactive map markers and zoom, validated enquiry form, and downloadable enquiry.
- Filterable careers grid and accessible role-detail dialogs.
- Mobile navigation, privacy preference storage, legal pages, and a custom 404.
- Local variable fonts, font licenses, and local media; no remote font dependency.
- Reduced-motion support and controls for background video.

## Edit the content

- Project content: `src/lib/projects.ts`.
- Palette, spacing, type, and responsive rules: `src/app/globals.css`.
- Homepage: `src/components/home.tsx`.
- Scroll animation: `src/components/motion.tsx`.
- Navigation, footer, privacy preferences: `src/components/site-shell.tsx`.
- Contact and careers: `src/components/contact.tsx` and `src/components/careers.tsx`.

## Integration status

This is a local portfolio concept, not a deployed business site. The form prepares and downloads an enquiry entirely in the browser; it does not send email. The roles are clearly marked examples, not live vacancies. Locations indicate collaboration time zones, not claimed physical offices. No analytics, third-party maps, CMS, or recruitment platform is connected. The language control explains that only English is available.

Before using the project for a real business, replace the working identity and concept content, connect the intended form delivery provider, and supply actual contact and recruitment details.

## Asset provenance

All imagery and videos were copied from the user-supplied `C:/Users/Lenovo/Downloads/Assets` folder. Reference imagery retains its owners' rights and is described as concept/reference material. The design does not claim those reference works as commissioned FORMA client work. Bodoni Moda and Manrope use the SIL Open Font License; license texts are in `public/fonts`.

`docs/design-reference.md` records the inspected reference and the adaptation boundaries.
