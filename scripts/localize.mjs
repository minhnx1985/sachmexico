// Translate visible template text and accessibility/metadata strings at build time.
// URLs, element IDs, book slugs and scripts are deliberately left unchanged.
export function localizeHtml(html, dictionary) {
  const escapeHtml = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('"', '&quot;');
  const entries = Object.entries(dictionary).flatMap(([key, value]) => [[key, escapeHtml(value)], [escapeHtml(key), escapeHtml(value)]]);
  entries.sort((a, b) => b[0].length - a[0].length);
  const pattern = new RegExp(entries.map(([key]) => key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'), 'g');
  const translations = new Map(entries);
  const translate = text => text.replace(pattern, key => translations.get(key));
  return html.split(/(<[^>]+>)/g).map(part => part.startsWith('<')
    ? part.replace(/\b(alt|aria-label|content|title)="([^"]*)"/g, (_, attribute, value) => `${attribute}="${translate(value)}"`)
    : translate(part)).join('');
}
