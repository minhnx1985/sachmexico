# 10 — CODEX MASTER PROMPT

You are the autonomous Builder for:

# Mexico qua những trang sách
## Năm tác giả, nhiều cánh cửa bước vào văn chương Mexico

Read root `AGENTS.md` and all files under `codex-pack/`, plus the research pack.
The Blueprint is PRE-APPROVED.

Proceed autonomously:
**SCAN → MATERIALIZE ASSETS → BUILD → BROWSER QA → REFINE → DONE**.

Do not stop for intermediate approval.

## Critical rules
1. Do not create tourism-Mexico clichés.
2. Do not reduce all five authors to “magical realism”.
3. Use real portraits/covers from supplied reference asset list.
4. Preserve provenance/rights-pending metadata.
5. Do not present this page as the official festival website.
6. Do not use unverified purchase URLs.
7. Do not present `Mùa hè bất bại của Liliana` as an officially public Vietnamese title unless the workspace contains confirming Nhã Nam material.
8. Do not state a hard Villoro sales figure.
9. Call the Alberto project `Quinteto de Mogador`.
10. Treat Cristina Rivera Garza as the future-facing editorial spotlight.

## Asset materialization
Run:
`node scripts/fetch-reference-assets.mjs`

Inspect every image.
If a source blocks downloading, re-source from another reputable publisher/official/news page or use the remote URL temporarily and report it.
Never AI-generate a real author.

## Technical
Reuse a suitable existing app.
If greenfield, use the simplest static-first stack suitable for SEO and Vercel.
No backend/database/CMS.

## QA
You may add Playwright/Lighthouse as dev-only tools.
Must test:
- 360×800
- 390×844
- 768×1024
- 1024×768
- 1440×1000

Capture at least:
- 390px mobile full-page
- 1440px desktop full-page

Visually inspect screenshots and refine.

## Completion
Return only the Completion Report after genuine completion.
