# Mexico qua những trang sách

Vietnamese literary landing page for a five-author, seven-book selection, prepared around **Lễ hội Văn hóa Thế giới tại Hà Nội 2026**. This is not the official festival website.

## Run

Requires Node 20.19+ or 22.12+.

```sh
npm ci
npm run dev -- --port 5173
npm run build
npm run lint
npm run check
npm run preview
```

`npm run build` renders semantic HTML from `src/content.json` using `scripts/render.mjs`, then bundles the minimal dialog/filter enhancement through Vite. Deployable static output is in `dist/`. No backend, CMS, database, remote fonts, or image hotlinks. This handoff is a local working build, not a production publication.

## Editing

- `src/content.json`: authors, books, status, descriptions, press articles.
- `scripts/render.mjs`: semantic HTML sections and native dialog templates.
- `src/style.css`: responsive editorial design and reduced-motion rules.
- `src/main.js`: dialog and gallery filter interactions.
- `source-assets/remote-assets.json`: image provenance, credits, pending rights, original download URLs where replaced.
- `source-assets/REFERENCE_FETCH_REPORT.json`: decoded dimensions and SHA-256 checksums of all eleven materialized reference assets.
- `public/assets/`: locally optimized WebP display copies; source originals remain in `source-assets/`.
- `reports/`: browser QA evidence and completion report.

`index.html` is generated and committed for inspectability; edit the renderer/content rather than the generated file.

## Publication handoff

1. Clear portrait and cover rights with the owners. The existing metadata deliberately retains `reference_only_pending_clearance`, including a public-domain candidate whose attribution is documented.
2. The three Vietnamese Alberto covers supplied by the user are now integrated; provenance and checksums are in `source-assets/supplied-covers.json`.
3. Check **Làn da của đất** copy against the Nhã Nam physical edition/back cover. Its `editorialReviewRequired` field remains true.
4. Keep **Liliana’s Invincible Summer** as the public title until Nhã Nam officially confirms Vietnamese metadata. No preorder link exists.
5. Set the real domain/canonical and social-image URL only when a publication destination exists. Current title, description, Open Graph text, Vietnamese language, and favicon are included.

The only purchase links are the verified Nhã Nam pages for **Cuốn sách Hoang dã** and **Mê cung cô độc**. Historical titles do not imply current stock.
