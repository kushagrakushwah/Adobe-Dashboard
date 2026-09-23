/**
 * Adobe Express for Education - Dedicated Student Dashboard Controller
 */
(function () {
  let lang = localStorage.getItem('adobe_student_lang') || 'en';
  let activeMonth = 0;
  const data = window.STUDENT_DATA;

  function init() {
    setupLanguage();
    setupKeyboard();
    renderAll();
  }

  function setupLanguage() {
    const switcher = document.getElementById('langSwitcher');
    if (!switcher) return;

    const enBtn = switcher.querySelector('[data-lang="en"]');
    const hiBtn = switcher.querySelector('[data-lang="hi"]');

    function update() {
      if (lang === 'hi') {
        hiBtn.classList.add('active');
        enBtn.classList.remove('active');
      } else {
        enBtn.classList.add('active');
        hiBtn.classList.remove('active');
      }
      document.documentElement.lang = lang;
    }

    update();

    switcher.addEventListener('click', () => {
      lang = lang === 'en' ? 'hi' : 'en';
      localStorage.setItem('adobe_student_lang', lang);
      update();
      renderAll();
      showToast(lang === 'hi' ? 'भाषा बदलकर हिंदी कर दी गई' : 'Language switched to English');
    });
  }

  function renderAll() {
    if (!data) return;
    const s = data.student;
    const c = data.common;

    // Headings
    document.getElementById('siteTitle').textContent = c.siteTitle[lang];
    document.getElementById('tagline').textContent = c.tagline[lang];
    document.getElementById('studentHeading').textContent = s.title[lang];
    document.getElementById('studentSubheading').textContent = s.subtitle[lang];

    // Flow steps
    const flowBar = document.getElementById('flowBar');
    if (flowBar) {
      flowBar.innerHTML = s.flowSteps.map((step, idx) => `
        <div class="flow-node">
          <span class="flow-badge">${step.step}</span>
          <span>${step[lang]}</span>
        </div>
        ${idx < s.flowSteps.length - 1 ? '<span class="flow-sep">→</span>' : ''}
      `).join('');
    }

    // Month pills
    const pillContainer = document.getElementById('pillsContainer');
    if (pillContainer) {
      pillContainer.innerHTML = s.months.map((m, idx) => `
        <button class="month-pill ${idx === activeMonth ? 'active' : ''}" 
                role="tab" 
                aria-selected="${idx === activeMonth}"
                onclick="window.selectMonth(${idx})">
          ${m.monthName[lang]}
        </button>
      `).join('');
    }

    renderActiveCard();
  }

  window.selectMonth = function(idx) {
    if (!data || idx < 0 || idx >= data.student.months.length) return;
    activeMonth = idx;

    const pills = document.querySelectorAll('.month-pill');
    pills.forEach((p, i) => {
      if (i === idx) {
        p.classList.add('active');
        p.setAttribute('aria-selected', 'true');
        p.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } else {
        p.classList.remove('active');
        p.setAttribute('aria-selected', 'false');
      }
    });

    renderActiveCard();
  };

  function renderActiveCard() {
    if (!data) return;
    const m = data.student.months[activeMonth];
    const c = data.common;

    const card = document.getElementById('activeCard');
    if (!card) return;

    const skillsHtml = m.skills ? m.skills.map(sk => `<span class="pill-skill">#${sk}</span>`).join('') : '';
    const durationHtml = m.duration ? `<span class="pill-duration">⏱ ${m.duration}</span>` : '';

    card.innerHTML = `
      <div class="card-badge-row">
        <span class="card-month-badge">${m.monthName[lang]} • ${lang === 'hi' ? 'माहवार प्रोजेक्ट' : 'Curriculum Project'}</span>
        <span class="card-theme-badge">${m.theme ? m.theme[lang] : ''}</span>
      </div>
      <h2 class="card-activity-name">${m.activityName[lang]}</h2>
      <p class="card-desc">${m.desc[lang]}</p>

      <div class="card-meta-row">
        ${skillsHtml}
        ${durationHtml}
      </div>

      <div class="action-btn-group">
        <a href="${m.tutorialLink}" target="_blank" rel="noopener noreferrer" class="btn-tutorial">
          ▶ ${c.watchTutorial[lang]}
        </a>
        <a href="${m.activityLink}" target="_blank" rel="noopener noreferrer" class="btn-activity">
          ✦ ${c.openActivity[lang]}
        </a>
        <a href="${m.submissionLink}" target="_blank" rel="noopener noreferrer" class="btn-submit">
          ✓ ${c.submitActivity[lang]}
        </a>
        <button onclick="window.copyLink(window.location.href, event)" class="btn-copy">
          📋 ${c.copyLink[lang]}
        </button>
      </div>
    `;
  }

  function setupKeyboard() {
    document.addEventListener('keydown', (e) => {
      if (!data) return;
      if (e.key === 'ArrowRight') {
        window.selectMonth((activeMonth + 1) % data.student.months.length);
      } else if (e.key === 'ArrowLeft') {
        window.selectMonth((activeMonth - 1 + data.student.months.length) % data.student.months.length);
      }
    });
  }

  window.copyLink = function(text, event) {
    if (event) event.stopPropagation();
    navigator.clipboard.writeText(text).then(() => {
      showToast(data.common.linkCopied[lang]);
    });
  };

  function showToast(msg) {
    let anchor = document.getElementById('toastAnchor');
    if (!anchor) {
      anchor = document.createElement('div');
      anchor.id = 'toastAnchor';
      document.body.appendChild(anchor);
    }
    const t = document.createElement('div');
    t.className = 'toast-box';
    t.innerHTML = `<span>✓</span> <span>${msg}</span>`;
    anchor.appendChild(t);
    setTimeout(() => {
      t.style.opacity = '0';
      t.style.transform = 'translateY(12px)';
      t.style.transition = 'all 0.3s ease';
      setTimeout(() => t.remove(), 300);
    }, 2500);
  }

  document.addEventListener('DOMContentLoaded', init);
})();
