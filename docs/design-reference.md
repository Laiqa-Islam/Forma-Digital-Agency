# Reference review

Reviewed 17 October 2026, using the live website and supplied Wappalyzer CSV.

## Inspected page families

- https://landor.com/ — moving full-screen hero, giant serif wordmark, white introduction surface, showreel, featured-project slider, large typographic statement, service cards, purpose, location graphic, related practices, footer.
- https://landor.com/en/our-work/ — compact fixed header, centered title/introduction, two-column image grid, generous vertical spacing, project captions.
- https://landor.com/en/our-work/milan-symphony-orchestra/ — viewport-height visual opening, project pill and close control, breadcrumbs, large introduction, full-width media, paired images, narrative story.
- https://landor.com/en/contact-us/ — centered page introduction, search and scrollable location directory beside a map, contact form.
- https://landor.com/en/join-us/ — centered title, inline comma-separated filters, three-column role cards.

The homepage was scrolled from hero to footer. These are the primary page families; this review did not open every project or every third-party job posting.

## Technology evidence

The supplied CSV identifies React, Next.js, GSAP, Swiper, Lodash, VideoJS, and YouTube, plus services for analytics, consent, delivery, and bot protection. The implementation uses Next.js 16, React 19, GSAP ScrollTrigger, Swiper, and native video. Lodash and VideoJS are unnecessary for the scoped interactions. The CSV is evidence of detected technology, not source code or an animation specification.

## Design adaptation

| Reference pattern | Implementation |
| --- | --- |
| Large serif wordmark over moving image | FORMA in local Bodoni Moda over supplied blob video |
| Saturated blue / yellow | Forest #183e35, ivory #f8f8f3, mint #c3d8bd |
| Rounded introduction panel | Scroll-driven panel expansion |
| Full-width showreel | Supplied motion clip and native dialog player |
| Large project carousel | Seven featured concept studies, swipe, dots, arrows, autoplay |
| Large statement and three services | Original statement, strategy/design/digital |
| Map and team typography | Dotted world graphic and studio statement without invented statistics |
| Work listing | Two columns on desktop, one on mobile, eight supplied reference images |
| Case-study template | Eight routes with original concept descriptions, visual galleries and motion |
| Studio directory | Searchable collaboration time zones, original map, no invented addresses |
| Careers | Six illustrative roles with filtering and dialogs |
| Footer | Rounded actions, original emblem, gradient, policies |

This is a close visual and behavioral recreation with intentional identity, color, content, and asset changes. Pixel-for-pixel or frame-for-frame equivalence is not established. Landor's underlying source, proprietary fonts, exact animation curves, and project media were not copied.

## Verification

- Production build and TypeScript check passed.
- Desktop browser: hero, introduction, video dialog, carousel change, navigation, work grid, careers filtering and dialog, searchable locations, enquiry preparation and download.
- Browser-rendered responsive iframe at 375px: homepage, mobile menu, work index, case-study opening, contact directory, and careers grid; zero page-level horizontal overflow after correction. The contact directory intentionally scrolls horizontally inside its own container on mobile.
- Case-study layout also measured at a 768px iframe width with zero horizontal overflow.
- Responsive iframe testing is a layout check, not a real-device touch or Safari verification.
- All 15 content routes and the font/poster assets returned HTTP 200 in the final local checks.
- Not deployed; no delivery, recruitment, CMS, or analytics integration was tested.
