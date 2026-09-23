/**
 * Adobe Express for Education - Student Portal Controller
 * Manages 12-Month Pill Dashboard, Keyboard Navigation, and Activity Showcase
 */

window.StudentPortal = (function () {
  let data = null;
  let lang = 'en';
  let activeMonthIndex = 0;

  function init(appData, currentLang) {
    data = appData;
    lang = currentLang;

    // Check if month persisted
    const saved = localStorage.getItem('adobe_student_month');
    if (saved !== null) {
      const idx = parseInt(saved, 10);
      if (!isNaN(idx) && idx >= 0 && idx < 12) {
        activeMonthIndex = idx;
      }
    }

    setupKeyboardControls();
    renderAll();
  }

  function updateLanguage(newLang) {
    lang = newLang;
    renderAll();
  }

  function renderAll() {
    if (!data) return;
    const s = data.student;

    const heading = document.getElementById('studentHeading');
    const subheading = document.getElementById('studentSubheading');
    if (heading) heading.textContent = s.title[lang];
    if (subheading) subheading.textContent = s.subtitle[lang];

    renderFlowBar();
    renderMonthPills();
    renderActiveMonth();
  }

  function renderFlowBar() {
    const flowBar = document.getElementById('studentFlowBar');
    if (!flowBar || !data.student.flowSteps) return;

    flowBar.innerHTML = data.student.flowSteps.map((step, idx) => `
      <div class="flow-step-node">
        <span class="flow-step-circle">${step.step}</span>
        <span>${step[lang]}</span>
      </div>
      ${idx < data.student.flowSteps.length - 1 ? '<span class="flow-step-divider">→</span>' : ''}
    `).join('');
  }

  function renderMonthPills() {
    const container = document.getElementById('monthPillScroller');
    if (!container || !data.student.months) return;

    container.innerHTML = data.student.months.map((m, idx) => `
      <button class="month-selector-pill ${idx === activeMonthIndex ? 'active' : ''}"
              role="tab"
              aria-selected="${idx === activeMonthIndex}"
              onclick="StudentPortal.selectMonth(${idx})">
        ${m.monthName[lang]}
      </button>
    `).join('');
  }

  function selectMonth(idx) {
    if (idx < 0 || idx >= data.student.months.length) return;
    activeMonthIndex = idx;
    localStorage.setItem('adobe_student_month', idx);

    const pills = document.querySelectorAll('.month-selector-pill');
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

    renderActiveMonth();
  }

  function renderActiveMonth() {
    const card = document.getElementById('activeMonthPanel');
    if (!card || !data.student.months) return;

    const m = data.student.months[activeMonthIndex];
    const c = data.common;

    const skillsHtml = m.skills ? m.skills.map(sk => `<span class="pill-skill">#${sk}</span>`).join('') : '';
    const durationHtml = m.duration ? `<span class="pill-duration">⏱ ${m.duration}</span>` : '';

    card.innerHTML = `
      <div class="showcase-badge-bar">
        <span class="showcase-pill-badge">${m.monthName[lang]} • ${lang === 'hi' ? 'माहवार प्रोजेक्ट' : 'Curriculum Project'}</span>
        <span class="showcase-theme-badge">${m.theme ? m.theme[lang] : ''}</span>
      </div>
      <h3 class="showcase-title">${m.activityName[lang]}</h3>
      <p class="showcase-desc">${m.desc[lang]}</p>

      <div class="showcase-meta-row">
        ${skillsHtml}
        ${durationHtml}
      </div>

      <div class="showcase-action-group">
        <a href="${m.tutorialLink}" target="_blank" rel="noopener noreferrer" class="btn-action-tutorial">
          ▶ ${c.watchTutorial[lang]}
        </a>
        <a href="${m.activityLink}" target="_blank" rel="noopener noreferrer" class="btn-action-activity">
          ✦ ${c.openActivity[lang]}
        </a>
        <a href="${m.submissionLink}" target="_blank" rel="noopener noreferrer" class="btn-action-submit">
          ✓ ${c.submitActivity[lang]}
        </a>
        <button onclick="window.AdobeApp.copyText(window.location.href, event)" class="btn-spectrum-secondary" style="margin-left: auto;">
          📋 ${c.copyLink[lang]}
        </button>
      </div>
    `;
  }

  function setupKeyboardControls() {
    document.addEventListener('keydown', (e) => {
      if (document.body.dataset.page !== 'student') return;
      if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') return;

      if (e.key === 'ArrowRight') {
        const next = (activeMonthIndex + 1) % data.student.months.length;
        selectMonth(next);
      } else if (e.key === 'ArrowLeft') {
        const prev = (activeMonthIndex - 1 + data.student.months.length) % data.student.months.length;
        selectMonth(prev);
      }
    });
  }

  return {
    init,
    updateLanguage,
    selectMonth
  };
})();
