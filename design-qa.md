# Guit Design — design QA

final result: passed

Reviewed: 2026-09-17. Scope: local interactive prototype, not public deployment.

## Reference and evidence

Selected composition: `design-reference.png`, copied from the approved generated composition (exec-42ce124c-2c43-4f01-b15b-0b5ee7596e53.png).

Compared the reference and live implementation together in `qa-compare.html`: reference at 519.5 px display width and implementation at 1039 CSS px, scaled to 50%. Captured and inspected both upper and lower portions. Screenshot evidence is in the browser tool transcript; no screenshot PNG was saved separately. The comparison fixture remains reproducible locally.

Mobile: `qa-mobile.html` renders home, FiveM, and plans in 390 × 844 CSS px frames. Captured and visually inspected the hero, gallery, and single-column pricing cards. Final desktop home was captured again after resuming, with no browser console errors.

## Visual review

- Composition and hierarchy: dark split hero, original LRZ artwork, asymmetrical featured project, two-piece gallery, and dark-to-cloud contact section follow the approved composition.
- Typography and spacing: corrected hero wrapping, column proportions, section padding, heading sizes, and gallery density after comparison.
- Assets: real supplied logo, GIFs, and original Behance artwork; generated tropical scenery and contact backdrop. Original artwork is intentionally preserved rather than reproducing altered artwork inside the mockup.
- Color and surfaces: near-black studio shell, white hierarchy, pink actions; tropical sunset on FiveM.
- Responsive behavior: readable mobile hero, stacked projects, and single-column plans; no visible horizontal clipping in inspected frames.
- Interaction states: selected hero slide and gallery filters, open/closed image dialog, next image and Escape dismissal, expanded projects, and direct plans anchor checked.
- Content: general projects remain on home; FiveM artwork on its dedicated route. Prices, plan inclusions, and Discord destination match the supplied brief. Collaboration credits are retained on project pages.

## Functional checks

Passed: hero switching; project expansion; project navigation and LRZ credits; lightbox navigation and dismissal; FiveM social/animated-logo filters; Foco animation display; direct `/fivem#planos` scrolling; all inspected Discord links; no broken images on FiveM; browser error log empty.

Build passed. Sites packaging tests: 4 passed, 0 failed (asset serving, SPA fallback, API handling, packaging).

## Remaining notes

No open P0/P1/P2 issues in the reviewed scope. P3: the supplied opaque logo has a subtle dark rectangle against the dark header; a transparent original could refine this. Fine typographic spacing can be adjusted during user review.

The user has not supplied banner or loadscreen demo files; those deliverables are described in the plans without invented portfolio examples. This is a local preview; no public deployment was performed.

## General logo gallery update — 2026-09-17
Added the five user-supplied general-design logos in a dedicated home gallery. Original full images use contain sizing; captions remain outside artwork. Visually checked the responsive two-column gallery and Aqua Beleza dialog (5/5) in the browser. FiveM gallery unchanged. final result: passed.

## Navigation update — 2026-09-18
Replaced the minimal header with a framed translucent bar, active navigation state, and Discord CTA. Screenshots inspected on both home and FiveM. Checked element bounds at 1280 and 390 CSS px: navigation fits with no page overflow. Mobile uses two rows. Home-to-FiveM navigation verified. This intentionally updates the previously approved header in response to user feedback. final result: passed.

## Restrained navigation refinement — 2026-09-18
User requested a quieter box. Removed shadow and pink active fill; reduced border contrast and corner radius; changed header contact to a neutral outlined button. Reviewed screenshots of home and FiveM. Navigation layout and behavior unchanged. final result: passed.

## Back-to-top — 2026-09-18
Added shared floating control after 400 px scroll, respecting reduced motion. Inspected button placement, clicked it, and verified scrollY = 0 and button hidden afterward. final result: passed.

## Copy reduction — 2026-09-18
Removed repeated section eyebrows, gallery instructions, introductory support copy, plan taglines, and footer slogan. Shortened headings and CTA labels. Preserved plan prices, inclusions, technical notes, and project credits. Reviewed home and pricing screenshots and full FiveM accessibility content. final result: passed.

## FiveM hero illustration — 2026-09-18
Replaced cityscape with original generated cel-shaded sports-car artwork and open violet sky. Inspected generated art and rendered hero screenshot; heading and controls remain legible, and the responsive crop retains the car. Original prior asset retained. Prompt and generation method documented in hero-art-direction.md. final result: passed.

## Standard navigation conversion accents — 2026-09-18

Emphasized the FiveM link in pink only on the standard studio header. Changed the header Discord CTA to a pink outline with a full pink hover fill, while preserving the restrained boxed navigation. Inspected the rendered standard header and confirmed the FiveM header remains unchanged. final result: passed.

## FiveM logo gallery — 2026-09-18

Added the four supplied FiveM logo artworks: Baixada RJ, FOX West, Revolution RP, and Cidadela Customs. They preserve their full square compositions, appear under the Logotipos filter, and open in the shared four-item lightbox. Verified the filter, labels, Baixada RJ enlarged view, Escape dismissal, and production build. final result: passed.

## Animated FiveM navigation label — 2026-09-18

Added a slow pink, lilac, and blue animated gradient to the FiveM label in the standard-page navigation. The existing global reduced-motion rule disables the animation when requested. Inspected the rendered header and preserved the link's accessible name. final result: passed.

## Shiny FiveM navigation label — 2026-09-18

Replaced the multicolor gradient with the requested shiny-text treatment: a pink base and narrow white highlight sweeping across the label, followed by a short hold. Implemented with lightweight CSS instead of adding the motion runtime. The accessible link name remains FiveM and reduced-motion still disables animation. final result: passed.

## General-logo crops and mobile contact — 2026-09-18

Changed general-logo thumbnails to `object-fit: cover`, removing the internal padding so every artwork fills its square. The lightbox continues to display full originals. Reworked the mobile contact section into a 430 px image-backed block with centered vertical copy and controlled image positioning. Inspected both areas at 640 × 912; the gallery fills each square and the contact section remains a single continuous block above the footer. final result: passed.

## Guit v.8 site mark — 2026-09-18

Replaced the shared site mark and favicon with the supplied Guit v.8 PNG. Applied a white CSS filter and normalized the transparent padding so the symbol remains centered in the header and footer. Confirmed the served image, computed filter, and rendered mobile header. final result: passed.

## Compact sticky navigation — 2026-09-18

Added a Motion React navigation transition that activates after 72 px of scrolling. The header becomes a centered floating bar with reduced height, padding, and link spacing; on mobile it stays on one row, hides the brand wordmark, and reduces the Discord action to its icon. Inspected the scrolled state at 640 × 912 on both the studio and FiveM pages and completed a production build. final result: passed.

## Full-width Umidifica feature — 2026-09-22

Removed the secondary Umidifica detail tile from the home Projects section and expanded the primary artwork across the full content width. Verified the rendered desktop composition and production build. final result: passed.

## Back-to-top footer avoidance — 2026-09-22

Made the floating back-to-top control measure the visible footer overlap and lift itself above the footer as the page reaches the end. Verified that the control remains visible over the contact artwork while the copyright and footer links stay unobstructed. final result: passed.

## FiveM navigation outline — 2026-09-22

Added a thin pink outline and restrained ambient glow around the standard-page FiveM navigation item, retaining the animated shine text. The hover state strengthens the border and softly tints the background. Verified the treatment in the compact sticky navigation and completed a production build. final result: passed.

## Portfolio review

See audit/revisao.md for screenshots and the review of home, FiveM, galleries, project navigation, plans and contact. Fixed the hidden mobile feature, header flow, gallery fitting and footer layout. Added restrained motion with reduced-motion support. Desktop and 390 px viewport checked. final result: passed.
