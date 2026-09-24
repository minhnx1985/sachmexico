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
const english=JSON.parse(await fs.readFile('src/content.en.json','utf8'));
const en=await fs.readFile('dist/en/index.html','utf8');
assert.deepEqual(english.authors.map(a=>a.slug),authors.map(a=>a.slug));
assert.deepEqual(english.books.map(b=>[b.slug,b.cover,b.purchaseUrl,b.status]),books.map(b=>[b.slug,b.cover,b.purchaseUrl,b.status]));
assert.ok(en.includes('<html lang="en">'));
assert.ok(en.includes('Mexico through books'));
assert.ok(en.includes('This is not the official festival website.'));
assert.ok(en.includes('Sources &amp; image credits'));
assert.ok(en.includes('Vietnamese covers supplied by Nhã Nam'));
assert.ok(html.includes('chúng tôi mời bạn đọc'));
for(const output of [html,en]){
  assert.ok(!output.includes('Chưa có liên kết phát hành hiện hành được xác nhận.'));
  assert.ok(!output.includes('người dùng cung cấp'));
  assert.ok(output.includes('href="/en/"'));
  for(const b of books)assert.ok(output.includes(`id="detail-${b.slug}"`));
}
console.log('PASS: bilingual routes, content parity, copy edits, metadata and credits.');
