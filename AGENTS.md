# AGENTS.md — Mexico qua những trang sách · Hà Nội 2026

You are the autonomous Builder for a Vietnamese literary landing page presenting Mexican books and authors to readers in Vietnam, timed to the **Lễ hội Văn hóa Thế giới tại Hà Nội 2026**.

The Human has approved the editorial direction and supplied:
- Embassy of Mexico in Vietnam identity image;
- Nhã Nam logo;
- a detailed research/content pack in `reference-notes/research-content-pack.md`.

Follow:
**SCAN → MATERIALIZE REFERENCE ASSETS → BUILD → VERIFY → REFINE → DONE**.

Do not stop for routine approval. Make reversible implementation decisions autonomously.
Stop only for a Level-3 blocker involving:
- scope/business change;
- unresolved official-title conflict;
- critical rights/asset ambiguity that prevents safe rendering;
- meaningful architecture change;
- destructive/security-sensitive action.

## Read before implementation
Read all files under `codex-pack/`, plus:
- `source-assets/remote-assets.json`
- `reference-notes/research-content-pack.md`

The Blueprint is PRE-APPROVED.

## Festival framing
Official current event name/date context:
- **Lễ hội Văn hóa Thế giới tại Hà Nội 2026**
- theme: **Hội tụ di sản – Kiến tạo tương lai**
- 01–04/10/2026
- principal festival venue includes Hoàng thành Thăng Long.

This landing page is **NOT** the official festival website unless the Human later explicitly says so.
Do not use or invent a festival logo/official-organizer claim.
Safe framing:
> “Một tuyển chọn văn chương Mexico tại Việt Nam, thực hiện nhân dịp Lễ hội Văn hóa Thế giới tại Hà Nội 2026.”

## Brand framing
Use the supplied Embassy of Mexico in Vietnam and Nhã Nam identity assets in a restrained co-presenting lockup.
Do not invent legal partnership wording beyond the supplied branding context.

## Technical default
Reuse an existing suitable app if present.
If greenfield, default to a static-first implementation:
- Next.js App Router + TypeScript if the workspace is already Vercel/Next-oriented;
- otherwise Vite vanilla + semantic HTML/CSS/minimal JS is acceptable.

Choose the simpler implementation that preserves SEO and maintainability.
Do not add a CMS/backend/database.

## Content quality
Vietnamese-first editorial copy.
English/Spanish original titles as supporting metadata.
Avoid cliché “Mexico tourism” writing and generic Latin America clichés.

Do not reduce the page to “magical realism”, sombreros, cactus, papel picado or flag-color decoration.

## Image rules
- Supplied logos are approved local assets.
- Author portraits and covers in `remote-assets.json` are **reference assets pending rights clearance**.
- The Human explicitly stated rights will be cleared later.
- Attempt to materialize them locally for the working build; preserve source/credit metadata.
- If a remote binary cannot be fetched, use the remote URL only during development and report it.
- Never replace a real author with an AI-generated portrait.

## Verification
Before DONE:
- build/lint;
- browser QA;
- keyboard QA;
- mobile/desktop screenshots;
- all author modules;
- all available book covers;
- no fake purchase links;
- no fake official-festival status;
- Git clean;
- final commit.
