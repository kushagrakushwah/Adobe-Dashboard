// Teacher Enhanced JS
window.tToggle = function(id) {
  const sec = document.getElementById(id);
  const body = document.getElementById(id + '-body');
  if (!sec || !body) return;
  const isOpen = sec.classList.contains('open');
  const label = sec.querySelector('.t-toggle-label');
  if (isOpen) {
    sec.classList.remove('open');
    body.style.display = 'none';
    if (label) label.textContent = 'Expand';
  } else {
    sec.classList.add('open');
    body.style.display = 'block';
    if (label) label.textContent = 'Collapse';
    setTimeout(() => sec.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
  }
};

window.tScrollTo = function(id) {
  const sec = document.getElementById(id);
  if (!sec) return;
  if (!sec.classList.contains('open')) tToggle(id);
  else sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

window.tShowMore = function(ids, btn) {
  const first = document.getElementById(ids[0]);
  const isHidden = first && first.style.display === 'none';
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = isHidden ? 'block' : 'none';
  });
  if (btn) btn.textContent = isHidden ? '− Show Less' : '+ Show More Resources';
};

window.tExpandAccordion = function(idx) {
  const acc = document.getElementById('cpdAccordion');
  if (!acc) return;
  const items = acc.querySelectorAll('.accordion-item');
  if (items[idx]) {
    items[idx].classList.add('open');
    const body = document.getElementById('cpdSection-body');
    if (body) body.style.display = 'block';
    document.getElementById('cpdSection').classList.add('open');
    const label = document.querySelector('#cpdSection .t-toggle-label');
    if (label) label.textContent = 'Collapse';
    setTimeout(() => items[idx].scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 200);
  }
};
