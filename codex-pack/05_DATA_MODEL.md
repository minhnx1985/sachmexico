# 05 — DATA MODEL

Use a central data file, not hard-coded component copy.

Suggested model:

```ts
interface Author {
  slug: string
  name: string
  years?: string
  tagline: string
  bio: string
  portraitLocal?: string
  portraitRemote?: string
  portraitSourcePage: string
  portraitCredit?: string
  accent: string
  motif: 'books' | 'maze' | 'mogador' | 'gothic' | 'archive'
}

interface Book {
  slug: string
  authorSlug: string
  titleVi?: string
  titleViStatus?: 'official' | 'working' | 'none'
  titleOriginal: string
  translator?: string
  vietnamStatus: 'active' | 'historical' | 'coming-soon'
  publisherVi?: string
  yearVi?: number
  coverLocal?: string
  coverRemote?: string
  coverSourcePage?: string
  purchaseUrl?: string
  description: string[]
  editorialReviewRequired?: boolean
}

interface PressItem {
  title: string
  outlet: string
  date?: string
  url: string
  authorSlug: string
  thumbnailStrategy: 'author' | 'book'
}
```

Rules:
- `purchaseUrl` only when verified.
- old books remain visible without pretending they are in stock.
- `Mùa hè bất bại của Liliana` stays `working` until confirmed.
- images have provenance fields.
