import fs from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const manifestPath = path.join(root, 'source-assets', 'remote-assets.json');
const assets = JSON.parse(await fs.readFile(manifestPath, 'utf8'));

const results = [];
for (const asset of assets) {
  const target = path.join(root, asset.target);
  await fs.mkdir(path.dirname(target), { recursive: true });

  try {
    await fs.access(target);
    results.push({ id: asset.id, status: 'exists', target: asset.target });
    continue;
  } catch { /* Missing asset: continue with download. */ }

  try {
    const res = await fetch(asset.download_url, {
      redirect: 'follow',
      signal: AbortSignal.timeout(30000),
      headers: {
        'user-agent': 'Mozilla/5.0 (compatible; editorial-reference-asset-fetch/1.0)',
        'accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
      }
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const type = res.headers.get('content-type') || '';
    if (!type.startsWith('image/')) throw new Error(`Unexpected content-type: ${type}`);

    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 5000) throw new Error(`Suspiciously small image: ${buf.length} bytes`);

    await fs.writeFile(target, buf);
    results.push({ id: asset.id, status: 'downloaded', target: asset.target, bytes: buf.length });
  } catch (error) {
    results.push({ id: asset.id, status: 'failed', url: asset.download_url, error: String(error) });
  }
}

const report = path.join(root, 'source-assets', 'REFERENCE_FETCH_REPORT.json');
await fs.writeFile(report, JSON.stringify(results, null, 2) + '\n');
console.table(results.map(({ id, status, target, error }) => ({ id, status, target, error })));

if (results.some(r => r.status === 'failed')) {
  console.warn('\nSome reference assets could not be fetched. Re-source or use the documented remote URL during development; do not fabricate substitutes.');
}
