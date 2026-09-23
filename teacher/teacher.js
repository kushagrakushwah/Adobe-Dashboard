/**
 * Adobe Express for Education - Dedicated Teacher Portal Controller
 */
(function () {
  let lang = localStorage.getItem('adobe_teacher_lang') || 'en';
  let searchQuery = '';
  const data = window.TEACHER_DATA;

  function init() {
    setupLanguage();
    setupSearch();
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
      localStorage.setItem('adobe_teacher_lang', lang);
      update();
      renderAll();
      showToast(lang === 'hi' ? 'भाषा बदलकर हिंदी कर दी गई' : 'Language switched to English');
    });
  }

  function setupSearch() {
    const input = document.getElementById('searchBox');
    if (!input) return;
    input.placeholder = data ? data.common.searchPlaceholder[lang] : 'Search...';
    input.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderCPD();
      renderDCAIS();
    });
  }

  function renderAll() {
    if (!data) return;
    const t = data.teacher;
    const c = data.common;

    document.getElementById('siteTitle').textContent = c.siteTitle[lang];
    document.getElementById('tagline').textContent = c.tagline[lang];
    document.getElementById('teacherHeading').textContent = t.title[lang];
    document.getElementById('teacherSubheading').textContent = t.subtitle[lang];

    renderAdobeID();
    renderCPD();
    renderDCAIS();
  }

  function renderAdobeID() {
    const sec = data.teacher.adobeIdSection;
    document.getElementById('adobeIdTitle').textContent = sec.title[lang];
    document.getElementById('adobeIdDesc').textContent = sec.desc[lang];

    const notice = document.getElementById('noticeBox');
    if (notice && sec.notice) {
      notice.innerHTML = `
        <div class="notice-icon">💡</div>
        <div class="notice-text">
          <h4>${sec.notice.title[lang]}</h4>
          <p>${sec.notice.text[lang]}</p>
        </div>
      `;
    }

    const grid = document.getElementById('adobeGrid');
    if (grid && sec.items) {
      grid.innerHTML = sec.items.map(item => `
        <div class="action-row">
          <div class="action-left">
            <span class="action-icon">${item.icon}</span>
            <div>
              <h4>${item.title[lang]}</h4>
              <p>${item.desc[lang]}</p>
            </div>
          </div>
          <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="btn-primary">
            ${item.action[lang]} ↗
          </a>
        </div>
      `).join('');
    }
  }

  function renderCPD() {
    const cpd = data.teacher.cpdSection;
    document.getElementById('cpdTitle').textContent = cpd.title[lang];
    document.getElementById('cpdDesc').textContent = cpd.desc[lang];

    const container = document.getElementById('cpdStack');
    if (!container) return;

    const q = searchQuery;
    const filtered = cpd.modules.filter(m => {
      if (!q) return true;
      return m.title[lang].toLowerCase().includes(q) || m.objective[lang].toLowerCase().includes(q) || m.code.toLowerCase().includes(q);
    });

    if (filtered.length === 0) {
      container.innerHTML = `<div style="text-align: center; padding: 24px; color: var(--gray-600);">No CPD modules matching "${q}".</div>`;
      return;
    }

    container.innerHTML = filtered.map((m, idx) => `
      <div class="acc-panel ${idx === 0 && !q ? 'open' : (q ? 'open' : '')}">
        <div class="acc-trigger" role="button" tabindex="0" onclick="window.toggleAcc(this)" onkeydown="window.handleAccKey(event, this)">
          <div class="acc-meta">
            <span class="tag-badge">${m.code}</span>
            <span class="tag-hours">${m.hours}</span>
            <span class="acc-title">${m.title[lang]}</span>
          </div>
          <span class="acc-chevron">▼</span>
        </div>
        <div class="acc-body">
          <div class="detail-grid">
            <div class="detail-col">
              <h5>${lang === 'hi' ? 'उद्देश्य एवं परिणाम' : 'Objective & Core Outcomes'}</h5>
              <p>${m.objective[lang]}</p>
            </div>
            <div class="detail-col">
              <h5>${lang === 'hi' ? 'शिक्षण सामग्री व संसाधन' : 'Curated Resources & Guides'}</h5>
              <p>${m.content[lang]}</p>
            </div>
            <div class="detail-col">
              <h5>${lang === 'hi' ? 'असाइनमेंट प्रोजेक्ट' : 'Assignment Task'}</h5>
              <p>${m.assignment[lang]}</p>
            </div>
          </div>
          <div class="btn-row">
            <a href="${m.contentLink}" target="_blank" rel="noopener noreferrer" class="btn-primary">
              ${lang === 'hi' ? 'सामग्री खोलें' : 'Open Resources'} ↗
            </a>
            <a href="${m.assignmentLink}" target="_blank" rel="noopener noreferrer" class="btn-secondary">
              ${lang === 'hi' ? 'असाइनमेंट लिंक' : 'Assignment Link'} ✦
            </a>
            <a href="${m.submissionLink}" target="_blank" rel="noopener noreferrer" class="btn-secondary">
              ${lang === 'hi' ? 'सबमिशन लिंक' : 'Submission Link'} ✓
            </a>
            <button onclick="window.copyLink('${m.contentLink}', event)" class="btn-secondary" style="margin-left: auto;">
              📋 ${data.common.copyLink[lang]}
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  function renderDCAIS() {
    const dcais = data.teacher.dcaisSection;
    document.getElementById('dcaisTitle').textContent = dcais.title[lang];
    document.getElementById('dcaisDesc').textContent = dcais.desc[lang];
    document.getElementById('dcaisTreeTitle').textContent = dcais.activitiesTreeTitle[lang];

    const coreGrid = document.getElementById('dcaisCoreGrid');
    if (coreGrid && dcais.coreResources) {
      coreGrid.innerHTML = dcais.coreResources.map(r => `
        <div class="dcais-card">
          <div>
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
              <span style="font-size: 1.6rem;">${r.icon}</span>
              <h4 style="font-size: 1.15rem; font-weight: 800;">${r.title[lang]}</h4>
            </div>
            <p style="font-size: 0.94rem; color: var(--gray-600); margin-bottom: 16px;">${r.desc[lang]}</p>
          </div>
          <a href="${r.link}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="align-self: flex-start;">
            ${r.badge[lang]} ↗
          </a>
        </div>
      `).join('');
    }

    const treeContainer = document.getElementById('dcaisTreeContainer');
    if (!treeContainer) return;

    const q = searchQuery;
    const filtered = dcais.modules.filter(mod => {
      if (!q) return true;
      return mod.title[lang].toLowerCase().includes(q) || mod.code.toLowerCase().includes(q) || mod.activities.some(a => a.name[lang].toLowerCase().includes(q) || a.code.toLowerCase().includes(q));
    });

    if (filtered.length === 0) {
      treeContainer.innerHTML = `<div style="text-align: center; padding: 24px; color: var(--gray-600);">No DCAIS activities matching "${q}".</div>`;
      return;
    }

    treeContainer.innerHTML = filtered.map(mod => `
      <div class="acc-panel ${q ? 'open' : ''}" style="margin-bottom: 12px;">
        <div class="acc-trigger" role="button" tabindex="0" onclick="window.toggleAcc(this)" onkeydown="window.handleAccKey(event, this)">
          <div class="acc-meta">
            <span class="tag-badge" style="background: var(--ink);">${mod.code}</span>
            <span class="acc-title">${mod.title[lang]}</span>
          </div>
          <span class="acc-chevron">▼</span>
        </div>
        <div class="acc-body">
          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${mod.activities.map(act => `
              <div style="display: flex; justify-content: space-between; align-items: center; background: var(--gray-100); padding: 14px 18px; border-radius: 8px; border: 1px solid var(--gray-200);">
                <div style="display: flex; align-items: center; gap: 12px;">
                  <span style="background: var(--white); border: 1px solid var(--gray-200); font-size: 0.78rem; font-weight: 800; padding: 3px 10px; border-radius: 9999px;">${act.code}</span>
                  <span style="font-weight: 700; font-size: 0.98rem; color: var(--ink);">${act.name[lang]}</span>
                </div>
                <a href="${act.link}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="padding: 6px 18px; font-size: 0.85rem;">
                  ${data.common.openBtn[lang]} ↗
                </a>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `).join('');
  }

  window.toggleAcc = function(el) { el.parentElement.classList.toggle('open'); };
  window.handleAccKey = function(e, el) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleAcc(el); } };

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
