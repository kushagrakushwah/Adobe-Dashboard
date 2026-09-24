/**
 * Adobe Express for Education - Enterprise Client Engine
 * Dual-Mode Data Provider (Offline file:// safe & HTTP CMS ready)
 */

let appData = null;
let currentLang = localStorage.getItem('adobe_edu_lang') || 'en';
let activeMonthIndex = 0;
let teacherSearchQuery = '';

// 1. Dual Data Provider (Zero CORS failure guarantee)
async function initData() {
  if (window.ADOBE_DATA) {
    appData = window.ADOBE_DATA;
    startApp();
    return;
  }

  try {
    const res = await fetch('data.json');
    if (!res.ok) throw new Error('data.json fetch failed');
    appData = await res.json();
    startApp();
  } catch (err) {
    console.warn('Fallback to local window.ADOBE_DATA or error:', err);
  }
}

function startApp() {
  setupLanguageToggle();
  renderCommonUI();

  const page = document.body.dataset.page;
  if (page === 'home') {
    renderHome();
  } else if (page === 'teacher') {
    setupTeacherSearch();
    renderTeacher();
  } else if (page === 'student') {
    renderStudent();
    setupStudentKeyboardNav();
  }
}

// 2. Language Switcher (EN / हिं)
function setupLanguageToggle() {
  const toggleBtn = document.getElementById('langToggleBtn');
  if (!toggleBtn) return;

  const enSpan = toggleBtn.querySelector('[data-lang="en"]');
  const hiSpan = toggleBtn.querySelector('[data-lang="hi"]');

  function updateToggleUI() {
    if (currentLang === 'hi') {
      hiSpan.classList.add('active');
      enSpan.classList.remove('active');
    } else {
      enSpan.classList.add('active');
      hiSpan.classList.remove('active');
    }
    document.documentElement.lang = currentLang;
  }

  updateToggleUI();

  toggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'hi' : 'en';
    localStorage.setItem('adobe_edu_lang', currentLang);
    updateToggleUI();
    renderCommonUI();

    const page = document.body.dataset.page;
    if (page === 'home') renderHome();
    if (page === 'teacher') renderTeacher();
    if (page === 'student') renderStudent();

    showToast(currentLang === 'hi' ? 'भाषा बदलकर हिंदी कर दी गई' : 'Language switched to English');
  });
}

// 3. Common Global UI Renderer
function renderCommonUI() {
  if (!appData) return;
  const c = appData.common;

  document.querySelectorAll('[data-bind="siteTitle"]').forEach(el => el.textContent = c.siteTitle[currentLang]);
  document.querySelectorAll('[data-bind="homeLink"]').forEach(el => el.textContent = c.homeLink[currentLang]);
  document.querySelectorAll('[data-bind="teacherLink"]').forEach(el => el.textContent = c.teacherLink[currentLang]);
  document.querySelectorAll('[data-bind="studentLink"]').forEach(el => el.textContent = c.studentLink[currentLang]);
  document.querySelectorAll('[data-bind="backHome"]').forEach(el => el.textContent = c.backHome[currentLang]);
}

// 4. Toast Notification System
function showToast(message) {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-msg';
  toast.innerHTML = `<span>✓</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 2600);
}

window.copyToClipboard = function(text, event) {
  if (event) event.stopPropagation();
  navigator.clipboard.writeText(text).then(() => {
    const msg = appData ? appData.common.linkCopied[currentLang] : 'Copied!';
    showToast(msg);
  });
};

// 5. Home Page Renderer
function renderHome() {
  if (!appData) return;
  const h = appData.home;
  const c = appData.common;

  const badgeEl = document.getElementById('homeBadge');
  if (badgeEl) badgeEl.textContent = h.badge[currentLang];

  const titleEl = document.getElementById('homeTitle');
  if (titleEl) titleEl.textContent = h.welcomeTitle[currentLang];

  const subtitleEl = document.getElementById('homeSubtitle');
  if (subtitleEl) subtitleEl.textContent = h.welcomeSubtitle[currentLang];

  // Stats
  const statsContainer = document.getElementById('homeStats');
  if (statsContainer && h.stats) {
    statsContainer.innerHTML = h.stats.map(s => `
      <div class="stat-item">
        <span class="stat-num">${s.num}</span>
        <span class="stat-label">${s.label[currentLang]}</span>
      </div>
    `).join('');
  }

  // Teacher Card
  const tTag = document.getElementById('tCardTag');
  const tTitle = document.getElementById('tCardTitle');
  const tDesc = document.getElementById('tCardDesc');
  const tList = document.getElementById('tCardBullets');
  const tBtn = document.getElementById('tCardBtn');

  if (tTag) tTag.textContent = h.teacherCardBadge[currentLang];
  if (tTitle) tTitle.textContent = h.teacherCardTitle[currentLang];
  if (tDesc) tDesc.textContent = h.teacherCardDesc[currentLang];
  if (tBtn) tBtn.textContent = (currentLang === 'hi' ? 'शिक्षक पोर्टल खोलें' : 'Enter Teacher Portal') + ' →';

  if (tList && h.teacherHighlights) {
    tList.innerHTML = h.teacherHighlights.map(hi => `
      <li><span class="check-icon">✓</span> <span>${hi[currentLang]}</span></li>
    `).join('');
  }

  // Student Card
  const sTag = document.getElementById('sCardTag');
  const sTitle = document.getElementById('sCardTitle');
  const sDesc = document.getElementById('sCardDesc');
  const sList = document.getElementById('sCardBullets');
  const sBtn = document.getElementById('sCardBtn');

  if (sTag) sTag.textContent = h.studentCardBadge[currentLang];
  if (sTitle) sTitle.textContent = h.studentCardTitle[currentLang];
  if (sDesc) sDesc.textContent = h.studentCardDesc[currentLang];
  if (sBtn) sBtn.textContent = (currentLang === 'hi' ? 'विद्यार्थी पोर्टल खोलें' : 'Enter Student Portal') + ' →';

  if (sList && h.studentHighlights) {
    sList.innerHTML = h.studentHighlights.map(hi => `
      <li><span class="check-icon">✓</span> <span>${hi[currentLang]}</span></li>
    `).join('');
  }
}

// 6. Teacher Portal Setup & Renderer
function setupTeacherSearch() {
  const searchInput = document.getElementById('teacherSearchInput');
  if (!searchInput) return;

  searchInput.placeholder = appData ? appData.common.searchPlaceholder[currentLang] : 'Search...';
  searchInput.addEventListener('input', (e) => {
    teacherSearchQuery = e.target.value.toLowerCase().trim();
    renderTeacherModules();
  });
}

function renderTeacher() {
  if (!appData) return;
  const t = appData.teacher;
  const c = appData.common;

  document.getElementById('teacherPageTitle').textContent = t.title[currentLang];
  document.getElementById('teacherPageSubtitle').textContent = t.subtitle[currentLang];

  // A. Adobe ID & Password Section
  document.getElementById('adobeIdTitle').textContent = t.adobeIdSection.title[currentLang];
  document.getElementById('adobeIdDesc').textContent = t.adobeIdSection.desc[currentLang];

  const noticeBanner = document.getElementById('adobeNoticeBanner');
  if (noticeBanner && t.adobeIdSection.helpBanner) {
    noticeBanner.innerHTML = `
      <div class="notice-icon">💡</div>
      <div class="notice-content">
        <h4>${t.adobeIdSection.helpBanner.title[currentLang]}</h4>
        <p>${t.adobeIdSection.helpBanner.text[currentLang]}</p>
      </div>
    `;
  }

  const adobeList = document.getElementById('adobeActionList');
  if (adobeList) {
    adobeList.innerHTML = t.adobeIdSection.items.map(item => `
      <div class="action-row">
        <div class="action-left">
          <div class="action-icon">${item.icon || '🔑'}</div>
          <div class="action-info">
            <h4>${item.title[currentLang]}</h4>
            <p>${item.desc[currentLang]}</p>
          </div>
        </div>
        <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="btn-open">
          ${item.action[currentLang]} ↗
        </a>
      </div>
    `).join('');
  }

  // B. CPD Section Header
  document.getElementById('cpdTitle').textContent = t.cpdSection.title[currentLang];
  document.getElementById('cpdDesc').textContent = t.cpdSection.desc[currentLang];

  // C. DCAIS Section Header
  document.getElementById('dcaisTitle').textContent = t.dcaisSection.title[currentLang];
  document.getElementById('dcaisDesc').textContent = t.dcaisSection.desc[currentLang];

  const coreList = document.getElementById('dcaisCoreList');
  if (coreList) {
    coreList.innerHTML = t.dcaisSection.coreResources.map(r => `
      <div class="dcais-card">
        <div>
          <div class="dcais-card-header">
            <span class="dcais-card-icon">${r.icon || '📚'}</span>
            <h4>${r.title[currentLang]}</h4>
          </div>
          <p>${r.desc[currentLang]}</p>
        </div>
        <a href="${r.link}" target="_blank" rel="noopener noreferrer" class="btn-open" style="align-self: flex-start;">
          ${r.badge ? r.badge[currentLang] : c.openBtn[currentLang]} ↗
        </a>
      </div>
    `).join('');
  }

  document.getElementById('dcaisActivitiesHeading').textContent = t.dcaisSection.activitiesTitle[currentLang];

  renderTeacherModules();
}

function renderTeacherModules() {
  if (!appData) return;
  const t = appData.teacher;
  const q = teacherSearchQuery;

  // Filter CPD Modules
  const cpdAccordion = document.getElementById('cpdAccordion');
  if (cpdAccordion) {
    const filteredCPD = t.cpdSection.modules.filter(m => {
      if (!q) return true;
      const title = m.title[currentLang].toLowerCase();
      const obj = m.objective[currentLang].toLowerCase();
      const code = m.code.toLowerCase();
      return title.includes(q) || obj.includes(q) || code.includes(q);
    });

    if (filteredCPD.length === 0) {
      cpdAccordion.innerHTML = `<p style="padding: 20px; color: var(--adobe-sub-grey); text-align: center;">No CPD modules match "${q}".</p>`;
    } else {
      cpdAccordion.innerHTML = filteredCPD.map((m, idx) => `
        <div class="accordion-item ${idx === 0 && !q ? 'open' : (q ? 'open' : '')}" data-cpd-id="${m.id}">
          <div class="accordion-header" role="button" tabindex="0" onclick="toggleAccordion(this)" onkeydown="handleAccordionKey(event, this)">
            <div class="accordion-title-wrap">
              <span class="badge-tag">${m.code}</span>
              <span class="badge-hours">${m.hours || 'Accredited'}</span>
              <span class="accordion-title">${m.title[currentLang]}</span>
            </div>
            <span class="accordion-icon" aria-hidden="true">▼</span>
          </div>
          <div class="accordion-content">
            <div class="detail-grid">
              <div class="detail-block">
                <h5>${currentLang === 'hi' ? 'उद्देश्य एवं परिणाम' : 'Objective & Outcomes'}</h5>
                <p>${m.objective[currentLang]}</p>
              </div>
              <div class="detail-block">
                <h5>${currentLang === 'hi' ? 'शिक्षण सामग्री व संसाधन' : 'Curated Resources'}</h5>
                <p>${m.content[currentLang]}</p>
              </div>
              <div class="detail-block">
                <h5>${currentLang === 'hi' ? 'असाइनमेंट प्रोजेक्ट' : 'Assignment Task'}</h5>
                <p>${m.assignment[currentLang]}</p>
              </div>
            </div>
            <div class="link-buttons-row">
              <a href="${m.contentLink}" target="_blank" rel="noopener noreferrer" class="btn-open">
                ${currentLang === 'hi' ? 'सामग्री खोलें' : 'Open Course Material'} ↗
              </a>
              <a href="${m.assignmentLink}" target="_blank" rel="noopener noreferrer" class="btn-secondary">
                ${currentLang === 'hi' ? 'असाइनमेंट बनाएं' : 'Design in Express'} ✦
              </a>
              <a href="${m.submissionLink}" target="_blank" rel="noopener noreferrer" class="btn-secondary">
                ${currentLang === 'hi' ? 'प्रोजेक्ट सबमिट करें' : 'Submit for Certification'} ✓
              </a>
              <button onclick="copyToClipboard('${m.contentLink}', event)" class="btn-secondary" style="margin-left: auto;">
                📋 ${appData.common.copyLink[currentLang]}
              </button>
            </div>
          </div>
        </div>
      `).join('');
    }
  }

  // Filter DCAIS Modules
  const dcaisModulesList = document.getElementById('dcaisModulesList');
  if (dcaisModulesList) {
    const filteredDCAIS = t.dcaisSection.modules.filter(mod => {
      if (!q) return true;
      const title = mod.title[currentLang].toLowerCase();
      const code = mod.code.toLowerCase();
      const hasAct = mod.activities.some(a => a.name[currentLang].toLowerCase().includes(q));
      return title.includes(q) || code.includes(q) || hasAct;
    });

    if (filteredDCAIS.length === 0) {
      dcaisModulesList.innerHTML = `<p style="padding: 20px; color: var(--adobe-sub-grey); text-align: center;">No DCAIS activities match "${q}".</p>`;
    } else {
      dcaisModulesList.innerHTML = filteredDCAIS.map((mod, idx) => `
        <div class="accordion-item ${q ? 'open' : ''}" style="margin-bottom: 12px;">
          <div class="accordion-header" role="button" tabindex="0" onclick="toggleAccordion(this)" onkeydown="handleAccordionKey(event, this)">
            <div class="accordion-title-wrap">
              <span class="badge-tag" style="background: var(--adobe-ink);">${mod.code}</span>
              <span class="accordion-title">${mod.title[currentLang]}</span>
            </div>
            <span class="accordion-icon" aria-hidden="true">▼</span>
          </div>
          <div class="accordion-content">
            <div style="display: flex; flex-direction: column; gap: 10px;">
              ${mod.activities.map(act => `
                <div style="display: flex; justify-content: space-between; align-items: center; background: var(--adobe-panel-grey); padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid var(--adobe-border-light);">
                  <div style="display: flex; align-items: center; gap: 10px;">
                    <span style="background: var(--adobe-white); border: 1px solid var(--adobe-border); font-size: 0.78rem; font-weight: 800; padding: 2px 8px; border-radius: var(--radius-pill);">${act.id}</span>
                    <span style="font-weight: 700; font-size: 1rem; color: var(--adobe-ink);">${act.name[currentLang]}</span>
                  </div>
                  <div style="display: flex; gap: 8px;">
                    <a href="${act.link}" target="_blank" rel="noopener noreferrer" class="btn-open" style="padding: 6px 16px; font-size: 0.85rem;">
                      ${appData.common.openBtn[currentLang]} ↗
                    </a>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `).join('');
    }
  }
}

window.toggleAccordion = function(headerEl) {
  const item = headerEl.parentElement;
  item.classList.toggle('open');
};

window.handleAccordionKey = function(event, headerEl) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    toggleAccordion(headerEl);
  }
};

// 7. Student Portal Setup & Renderer
function renderStudent() {
  if (!appData) return;
  const s = appData.student;

  document.getElementById('studentPageTitle').textContent = s.title[currentLang];
  document.getElementById('studentPageSubtitle').textContent = s.subtitle[currentLang];

  // Flow steps
  const flowBar = document.getElementById('studentFlowBar');
  if (flowBar) {
    flowBar.innerHTML = s.flowSteps.map((step, idx) => `
      <div class="flow-step-item">
        <span class="flow-num">${step.step}</span>
        <span>${step[currentLang]}</span>
      </div>
      ${idx < s.flowSteps.length - 1 ? '<span class="flow-arrow">→</span>' : ''}
    `).join('');
  }

  // Month pills
  const pillContainer = document.getElementById('monthPillContainer');
  if (pillContainer) {
    pillContainer.innerHTML = s.months.map((m, idx) => `
      <button class="month-pill-btn ${idx === activeMonthIndex ? 'active' : ''}" 
              role="tab" 
              aria-selected="${idx === activeMonthIndex}"
              onclick="selectMonth(${idx})">
        ${m.monthName[currentLang]}
      </button>
    `).join('');
  }

  renderActiveMonth();
}

window.selectMonth = function(idx) {
  activeMonthIndex = idx;
  const pills = document.querySelectorAll('.month-pill-btn');
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
};

function setupStudentKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (document.body.dataset.page !== 'student') return;
    if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') return;

    if (e.key === 'ArrowRight') {
      const next = (activeMonthIndex + 1) % appData.student.months.length;
      selectMonth(next);
    } else if (e.key === 'ArrowLeft') {
      const prev = (activeMonthIndex - 1 + appData.student.months.length) % appData.student.months.length;
      selectMonth(prev);
    }
  });
}

function renderActiveMonth() {
  if (!appData) return;
  const m = appData.student.months[activeMonthIndex];
  const c = appData.common;

  const card = document.getElementById('activeMonthCard');
  if (!card) return;

  const skillsHtml = m.skills ? m.skills.map(sk => `<span class="skill-pill">#${sk}</span>`).join('') : '';
  const durationHtml = m.duration ? `<span class="duration-pill">⏱ ${m.duration}</span>` : '';

  card.innerHTML = `
    <div class="month-badge-row">
      <span class="month-badge">${m.monthName[currentLang]} • ${currentLang === 'hi' ? 'विशेष गतिविधि' : 'Curriculum Project'}</span>
      <span class="month-theme-tag">${m.theme ? m.theme[currentLang] : ''}</span>
    </div>
    <h3 class="month-activity-name">${m.activityName[currentLang]}</h3>
    <p class="month-activity-desc">${m.desc[currentLang]}</p>
    
    <div class="skills-tags-row">
      ${skillsHtml}
      ${durationHtml}
    </div>

    <div class="student-action-row">
      <a href="${m.tutorialLink}" target="_blank" rel="noopener noreferrer" class="btn-student-action btn-tutorial">
        ▶ ${c.watchTutorial[currentLang]}
      </a>
      <a href="${m.activityLink}" target="_blank" rel="noopener noreferrer" class="btn-student-action btn-activity">
        ✦ ${c.openActivity[currentLang]}
      </a>
      <a href="${m.submissionLink}" target="_blank" rel="noopener noreferrer" class="btn-student-action btn-submit">
        ✓ ${c.submitActivity[currentLang]}
      </a>
      <button onclick="copyToClipboard(window.location.href, event)" class="btn-secondary" style="margin-left: auto;">
        📋 ${c.copyLink[currentLang]}
      </button>
    </div>
  `;
}

// Initial kickoff
document.addEventListener('DOMContentLoaded', initData);
