import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
const {authors,books,press}=JSON.parse(await fs.readFile('src/content.json','utf8'));
const html=await fs.readFile('dist/index.html','utf8');
assert.equal(authors.length,5);assert.equal(books.length,7);assert.equal(press.length,7);
for(const a of authors){assert.ok(html.includes(`id="${a.slug}"`));await fs.access(`public${a.portrait}`);}
for(const b of books){assert.ok(html.includes(`id="detail-${b.slug}"`));if(b.cover)await fs.access(`public${b.cover}`);if(b.status!=='active')assert.equal(b.purchaseUrl,null);}
assert.deepEqual(books.filter(b=>b.purchaseUrl).map(b=>b.purchaseUrl),['https://nhanam.vn/cuon-sach-hoang-da','https://nhanam.vn/me-cung-co-doc']);
assert.ok(!html.includes('Mùa hè bất bại của Liliana'));
assert.ok(html.includes('Quinteto de Mogador'));
assert.ok(books.find(b=>b.slug==='lan-da-cua-dat').editorialReviewRequired);
assert.ok(html.includes('Đây không phải website chính thức của lễ hội.'));
for(const match of html.matchAll(/(?:src|href)="(\/[^"#]+)"/g))await fs.access(`dist${match[1]}`);
for(const match of html.matchAll(/href="#([^"]+)"/g))assert.ok(html.includes(`id="${match[1]}"`),`Broken anchor ${match[1]}`);
assert.ok(!/<img[^>]+src="https?:/.test(html));
console.log('PASS: content contract, local assets, anchor targets, purchase restrictions, editorial flag, static output.');
