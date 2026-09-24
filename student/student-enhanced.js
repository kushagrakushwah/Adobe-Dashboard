// Student Enhanced JS
window.sToggle = function(id) {
  const sec = document.getElementById(id);
  const body = document.getElementById(id + '-body');
  if (!sec || !body) return;
  const isOpen = sec.classList.contains('s-section-open');
  const label = sec.querySelector('.s-toggle-label');
  if (isOpen) {
    sec.classList.remove('s-section-open');
    if (id !== 'monthSection') body.style.display = 'none';
    if (label) label.textContent = 'Expand';
  } else {
    sec.classList.add('s-section-open');
    body.style.display = 'block';
    if (label) label.textContent = 'Collapse';
    setTimeout(() => sec.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
  }
};

window.sScrollTo = function(id) {
  const sec = document.getElementById(id);
  if (!sec) return;
  if (!sec.classList.contains('s-section-open')) sToggle(id);
  else sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

window.sShowMore = function(ids, btn) {
  const first = document.getElementById(ids[0]);
  const isHidden = first && first.style.display === 'none';
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = isHidden ? 'block' : 'none';
  });
  const span = btn ? btn.querySelector('span') : null;
  if (span) span.textContent = isHidden ? '− Show Less' : '+ Show More';
};

window.sToggleStrip = function(btn) {
  const extras = document.querySelectorAll('.s-strip-hidden');
  const isHidden = extras.length > 0 && !extras[0].classList.contains('s-strip-visible');
  extras.forEach(el => {
    if (isHidden) el.classList.add('s-strip-visible');
    else el.classList.remove('s-strip-visible');
  });
  const span = btn ? btn.querySelector('span') : null;
  if (span) span.textContent = isHidden ? '− Show Less Months' : '+ Show All 12 Months';
};
