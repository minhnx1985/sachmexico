# Asset validation — 23 September 2026

All 11 supplied reference slots were materialized, decoded with Pillow, visually inspected, and optimized to local WebP. Original supplied logos were inspected and retained. No AI-generated portraits, remote display URLs, or press image hotlinks are used.

## Replacement record

- Juan Villoro: original El Tiempo URL returned 403. Official author homepage provided a photo of the author seated at his desk. Other homepage images (a street scene and unrelated book cover) were inspected and rejected. Credit remains unconfirmed.
- Octavio Paz: supplied Gaceta UNAM photograph downloaded successfully. Photographer must be confirmed.
- Alberto Ruy-Sánchez: supplied Milenio URL returned 404. Official author website photograph used, credited **Nina Subin**.
- Carlos Fuentes: supplied enhanced commercial image replaced. El Colegio Nacional image was an official painted portrait; inspected and replaced with a photograph credited **Gustavo Benítez / Presidencia de la República**, via Wikimedia Commons. Commons records a public-domain release; pending-clearance status conservatively retained in project metadata.
- Cristina Rivera Garza: supplied Éditions Globe portrait downloaded successfully. Source filename refers to Michalski; precise photographer attribution remains to be confirmed, not invented.
- Cuốn sách Hoang dã and Mê cung cô độc: initial third-party temporary binaries replaced with official Nhã Nam product cover images.
- Nàng Aura: supplied Fahasa cover downloaded and visually validated.
- Liliana: supplied Penguin Libros image returned 403. Replaced by an English Hogarth edition cover from Penguin Random House; labeled as English.
- Tên của khí trời: supplied Gandhi image returned 404. Replaced with a Spanish edition cover from Penguin Random House.
- Làn da của đất: supplied Sanborns image returned 403. Replaced with Spanish Los jardines secretos de Mogador cover from Penguin Random House.
- Đôi môi của nước: no original binary supplied; publisher product pages located, but retrieval returned 403. Uses the Blueprint-approved typographic title treatment, explicitly labeled as not a verified cover. No fabricated cover or unrelated image.

Source URLs, credits, rights states, local paths and checksums are recorded in the asset manifests. The source archive supplied by the user is retained intact.

## User-supplied Vietnamese covers — update

The user supplied `TEN CUA KHI TROI.jpg`, `DOI MOI CUA NUOC.jpg`, and `Lan da cua dat.jpg`. All three were visually matched to their titles and decoded successfully. Local optimized WebP copies now replace the two Spanish references and the typographic fallback everywhere, including hero, author section, gallery, press thumbnail and dialogs. Originals are preserved at project root. See `source-assets/supplied-covers.json` for dimensions and checksums. Earlier replacement notes above describe the initial build; the Spanish assets are retained only as source history. The supplied front cover confirms the Làn da của đất subtitle “Những khu vườn bí mật thành Mogador”; the synopsis review flag remains pending physical-book/back-cover verification.
