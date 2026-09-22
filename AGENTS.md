# Prototype Instructions

## Approved Guit Design direction

- Preserve the approved composition in `design-reference.png`: split opening and asymmetric project presentation.
- Home contains general design work, with a premium dark treatment and limited copy. `/fivem` contains FiveM work with tropical sunset scenery inspired by GTA VI.
- Separate complete project pages from individual pieces that expand in a lightbox. Preserve original artwork and collaboration credits.
- Contact leads to `https://discord.gg/pM6tQah`. No contact form requested.
- FiveM plans: Essentials R$237, Signature R$374, Elite R$667. Animated logo GIF and the two distinct animated banners are included in all plans; Signature adds the animated 1920x1080 MP4 loadscreen (about 30 seconds); Elite adds animated Discord header and 15 VIP shop pieces.
- Do not publish without the user's request.

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

- General (non-FiveM) logo gallery: VØID, VISION, Mais+Code, Stories que Engajam, Aqua Beleza. Use the supplied original images, preserve their full composition, and support click-to-enlarge.
- In the general-logo grid thumbnails, use cover cropping so every artwork fills its square; the lightbox still shows the complete original.
- On mobile, the final image contact section is one compact image-backed block with the copy over it, rather than separate or oversized text and image areas.

- Updated menu preference: retain a subtle box, but avoid heavy prominence or a dated look. Use a fine border, soft translucent background, restrained corners, no shadow or filled active tabs, and an understated outlined Discord CTA.
- On the standard studio page, emphasize the FiveM navigation link in pink. Give the header Discord CTA a pink outline and fill the whole button pink on hover, matching the site's primary Discord buttons.
- The standard-page FiveM navigation label uses a shiny-text effect: pink base with a narrow white highlight sweeping across it and a short pause between cycles. Frame it with a restrained pink outline and faint glow, strengthening slightly on hover. Respect the reduced-motion preference.

- Include a discreet floating back-to-top control on all pages after scrolling; compact icon on mobile, hidden while the image dialog is open.
- When the footer enters the viewport, lift the back-to-top control above it so it never overlaps the copyright or footer links.

- Keep copy minimal: concise section names, no repeated promotional eyebrows or support slogans. Preserve project names/credits, plan prices and complete inclusions.

- FiveM hero direction updated: simple cel-shaded GTA-inspired object illustration (purple sports car and open violet sky), based on supplied references; use fivem-car-hero.png instead of the busy coastal city scene.
- FiveM logo gallery includes the supplied Baixada RJ, FOX West, Revolution RP, and Cidadela Customs artworks. Preserve each complete composition and allow click-to-enlarge.
- Use the supplied Guit v.8 symbol as the shared header, footer, and favicon mark. Render the symbol white with CSS and crop its transparent padding consistently.
- After 72 px of scrolling, the top navigation follows the page as a compact floating bar. Use Motion React for its entrance and layout transition; on mobile keep it to one row with tighter links and an icon-only Discord action.
- On the home Projects section, present the featured Umidifica artwork as one full-width banner. Do not include a secondary detail tile beside it.

- Plans use increasing visual emphasis: neutral Essentials, pink Signature, warm gold Elite, with one/two/three illuminated level bars. Below them keep only the MP4 loadscreen note and offer an optional Mastodon add-on: 3 server profile banners for +R$87, with contact via Discord.
- Refinements stay subtle: one-time short entrances, gentle arrow/button responses and manual hero fades. Honor reduced-motion settings. Reserve the header space to avoid scroll jumps; captions sit below artwork and the lightbox offers fit-to-screen plus detail zoom. Keep the single Umidifica banner visible on mobile. Consolidated refinements live in src/polish.css.
- Arrow hover motion must follow the icon direction: right and left arrows move horizontally only; diagonal arrows may move diagonally. Apply this consistently to text links across all pages.

- Studio hero now fills the full opening behind the header and introduction, like /fivem. Use a strong fading dark overlay at the bottom for project details, and rotate the three projects every five seconds with manual selection only. This supersedes the previous split-opening/manual-only carousel preference.
- Keep the navigation above all page content, including the compact scrolling state. The header brand pairs the white Guit symbol with the supplied `guit-inkbleed.png` wordmark. Rename the home section to Social Media. FiveM gallery order is Social media, Logotipos, Logotipos animados, then Ícones Loja VIP; use the supplied FiveZ Brasil artwork for social and VIP assets.
