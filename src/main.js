const dialog = document.querySelector('dialog');
let opener;
document.querySelectorAll('[data-book]').forEach(button => {
  button.addEventListener('click', () => {
    opener = button;
    const template = document.getElementById(`detail-${button.dataset.book}`);
    dialog.querySelector('.dialog-inner').replaceChildren(template.content.cloneNode(true));
    dialog.showModal();
    document.body.classList.add('modal-open');
    dialog.scrollTop = 0;
  });
});
dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const r = dialog.getBoundingClientRect();
  if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  opener?.focus({preventScroll: true});
});
dialog.addEventListener('keydown', event => {
  if (event.key !== 'Tab') return;
  const focusable = [...dialog.querySelectorAll('button, a[href]')];
  const first = focusable[0], last = focusable.at(-1);
  if (event.shiftKey && document.activeElement === first) {event.preventDefault();last.focus();}
  else if (!event.shiftKey && document.activeElement === last) {event.preventDefault();first.focus();}
});
document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
    let count = 0;
    document.querySelectorAll('.gallery-card').forEach(card => {
      card.hidden = filter !== 'all' && card.dataset.status !== filter;
      if (!card.hidden) count++;
    });
    document.getElementById('filter-result').textContent = document.documentElement.lang === 'en' ? `${count} ${count === 1 ? 'book' : 'books'}` : `${count} tác phẩm`;
  });
});

// Keep the current reading position when changing language.
document.querySelectorAll('[data-language]').forEach(link => {
  link.addEventListener('click', () => {
    link.href = `${link.dataset.language === 'en' ? '/en/' : '/'}${window.location.hash}`;
  });
});
