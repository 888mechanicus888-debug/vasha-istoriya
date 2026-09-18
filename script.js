const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');

document.querySelectorAll('.example-card').forEach(card => {
  card.addEventListener('click', () => {
    modalTitle.textContent = card.dataset.title || 'Пример работы';
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  });
});
document.querySelector('.modal-close').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
function closeModal(){
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

document.querySelector('.menu').addEventListener('click', () => {
  const nav = document.querySelector('nav');
  const actions = document.querySelector('.top-actions');
  const visible = nav.style.display === 'flex';
  nav.style.display = visible ? '' : 'flex';
  actions.style.display = visible ? '' : 'flex';
  if (!visible) {
    nav.style.position='absolute'; nav.style.top='60px'; nav.style.left='0'; nav.style.right='0';
    nav.style.padding='20px'; nav.style.background='#120b06'; nav.style.flexDirection='column'; nav.style.alignItems='center';
    actions.style.position='absolute'; actions.style.top='265px'; actions.style.left='0'; actions.style.right='0';
    actions.style.padding='15px'; actions.style.background='#120b06'; actions.style.justifyContent='center';
  }
});

document.getElementById('orderForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const service = document.getElementById('service').value;
  const start = encodeURIComponent([name, phone, service].join('|'));
  window.open(`https://t.me/vasha_istoriyabot?start=${start}`, '_blank', 'noopener');
});
