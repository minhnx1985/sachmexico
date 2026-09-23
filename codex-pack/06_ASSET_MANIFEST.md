# 06 — ASSET MANIFEST

## Local approved assets

### Embassy of Mexico in Vietnam
`source-assets/logos/embassy-mexico-vietnam.png`

### Nhã Nam
`source-assets/logos/nhanam.jpg`

Use them in a restrained lockup/header/footer.

## Remote reference assets

See:
`source-assets/remote-assets.json`

The file includes:
- 5 author portraits;
- book covers for the core titles where a usable URL was found;
- source-page provenance;
- rights status.

All are marked:
`reference_only_pending_clearance`

The Human explicitly said rights clearance will be handled later.

## Materialization

Run:

```bash
node scripts/fetch-reference-assets.mjs
```

This should populate:
`source-assets/reference/`

If an origin blocks direct download:
- do not fabricate a substitute;
- keep the remote URL during development or re-source from another reputable page;
- document the final source.

## Missing/optional cover

A clean direct binary for *En los labios del agua* may need to be sourced during implementation from a reputable bookseller/publisher page.
Do not use the wrong cover simply to make the grid complete.
