/**
 * Adobe Express for Education - Teacher Portal Controller
 * Manages Section A (Adobe ID), Section B (CPD 1-5), and Section C (DCAIS)
 */

window.TeacherPortal = (function () {
  let data = null;
  let lang = 'en';
  let searchQuery = '';

  function init(appData, currentLang) {
    data = appData;
    lang = currentLang;

    setupSearchInput();
    renderAll();
  }

  function updateLanguage(newLang) {
    lang = newLang;
    renderAll();
  }

  function setupSearchInput() {
    const input = document.getElementById('teacherSearchBox');
    if (!input) return;

    input.placeholder = data ? data.common.searchPlaceholder[lang] : 'Search...';
    input.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderCPDModules();
      renderDCAISActivities();
    });
  }

  function renderAll() {
    if (!data) return;
    const t = data.teacher;

    // Header
    const titleEl = document.getElementById('teacherHeading');
    const subEl = document.getElementById('teacherSubheading');
    if (titleEl) titleEl.textContent = t.title[lang];
    if (subEl) subEl.textContent = t.subtitle[lang];

    renderAdobeIDSection();
    renderCPDModules();
    renderDCAISSection();
  }

  // Section A: Adobe ID & Password
  function renderAdobeIDSection() {
    const sec = data.teacher.adobeIdSection;
    const title = document.getElementById('adobeIdTitle');
    const desc = document.getElementById('adobeIdDesc');
    const notice = document.getElementById('adobeNoticeBox');
    const list = document.getElementById('adobeActionGrid');

    if (title) title.textContent = sec.title[lang];
    if (desc) desc.textContent = sec.desc[lang];

    if (notice && sec.notice) {
      notice.innerHTML = `
        <div class="notice-icon">💡</div>
        <div class="notice-body">
          <h4>${sec.notice.title[lang]}</h4>
          <p>${sec.notice.text[lang]}</p>
        </div>
      `;
    }

    if (list && sec.items) {
      list.innerHTML = sec.items.map(item => `
        <div class="action-card-row">
          <div class="action-row-left">
            <div class="action-row-icon">${item.icon}</div>
            <div class="action-row-info">
              <h4>${item.title[lang]}</h4>
              <p>${item.desc[lang]}</p>
            </div>
          </div>
          <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="btn-spectrum-primary">
            ${item.action[lang]} ↗
          </a>
        </div>
      `).join('');
    }
  }

  // Section B: CPD Continuous Professional Development (CPD 1-5)
  function renderCPDModules() {
    const cpd = data.teacher.cpdSection;
    const title = document.getElementById('cpdHeading');
    const desc = document.getElementById('cpdDesc');
    const container = document.getElementById('cpdAccordionStack');

    if (title) title.textContent = cpd.title[lang];
    if (desc) desc.textContent = cpd.desc[lang];

    if (!container) return;

    const q = searchQuery;
    const filtered = cpd.modules.filter(m => {
      if (!q) return true;
      const tStr = m.title[lang].toLowerCase();
      const oStr = m.objective[lang].toLowerCase();
      const cStr = m.code.toLowerCase();
      return tStr.includes(q) || oStr.includes(q) || cStr.includes(q);
    });

    if (filtered.length === 0) {
      container.innerHTML = `<div style="text-align: center; padding: 24px; color: var(--spectrum-gray-600);">No CPD modules matching "${q}".</div>`;
      return;
    }

    container.innerHTML = filtered.map((m, idx) => `
      <div class="accordion-panel ${idx === 0 && !q ? 'open' : (q ? 'open' : '')}" data-module-id="${m.id}">
        <div class="accordion-trigger" role="button" tabindex="0" onclick="TeacherPortal.toggleAccordion(this)" onkeydown="TeacherPortal.handleKey(event, this)">
          <div class="accordion-meta-group">
            <span class="tag-badge">${m.code}</span>
            <span class="tag-hours">${m.hours}</span>
            <span class="accordion-heading-text">${m.title[lang]}</span>
          </div>
          <span class="accordion-chevron" aria-hidden="true">▼</span>
        </div>
        <div class="accordion-body">
          <div class="content-grid-3">
            <div class="content-callout">
              <h5>${lang === 'hi' ? 'उद्देश्य एवं परिणाम' : 'Objective & Core Outcomes'}</h5>
              <p>${m.objective[lang]}</p>
            </div>
            <div class="content-callout">
              <h5>${lang === 'hi' ? 'शिक्षण सामग्री व संसाधन' : 'Curated Resources & Guides'}</h5>
              <p>${m.content[lang]}</p>
            </div>
            <div class="content-callout">
              <h5>${lang === 'hi' ? 'असाइनमेंट प्रोजेक्ट' : 'Assignment Task'}</h5>
              <p>${m.assignment[lang]}</p>
            </div>
          </div>
          <div class="panel-action-bar">
            <a href="${m.contentLink}" target="_blank" rel="noopener noreferrer" class="btn-spectrum-primary">
              ${lang === 'hi' ? 'सामग्री खोलें' : 'Open Resources'} ↗
            </a>
            <a href="${m.assignmentLink}" target="_blank" rel="noopener noreferrer" class="btn-spectrum-secondary">
              ${lang === 'hi' ? 'असाइनमेंट लिंक' : 'Assignment Link'} ✦
            </a>
            <a href="${m.submissionLink}" target="_blank" rel="noopener noreferrer" class="btn-spectrum-secondary">
              ${lang === 'hi' ? 'सबमिशन लिंक' : 'Submission Link'} ✓
            </a>
            <button onclick="window.AdobeApp.copyText('${m.contentLink}', event)" class="btn-spectrum-secondary" style="margin-left: auto;">
              📋 ${data.common.copyLink[lang]}
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Section C: DCAIS Core Resources & Activities Tree
  function renderDCAISSection() {
    const dcais = data.teacher.dcaisSection;
    const title = document.getElementById('dcaisHeading');
    const desc = document.getElementById('dcaisDesc');
    const coreList = document.getElementById('dcaisCoreGrid');
    const treeTitle = document.getElementById('dcaisTreeHeading');

    if (title) title.textContent = dcais.title[lang];
    if (desc) desc.textContent = dcais.desc[lang];
    if (treeTitle) treeTitle.textContent = dcais.activitiesTreeTitle[lang];

    if (coreList && dcais.coreResources) {
      coreList.innerHTML = dcais.coreResources.map(r => `
        <div class="dcais-item-card">
          <div>
            <div class="dcais-item-header">
              <span class="dcais-item-icon">${r.icon}</span>
              <h4>${r.title[lang]}</h4>
            </div>
            <p>${r.desc[lang]}</p>
          </div>
          <a href="${r.link}" target="_blank" rel="noopener noreferrer" class="btn-spectrum-primary" style="align-self: flex-start;">
            ${r.badge[lang]} ↗
          </a>
        </div>
      `).join('');
    }

    renderDCAISActivities();
  }

  function renderDCAISActivities() {
    const dcais = data.teacher.dcaisSection;
    const container = document.getElementById('dcaisTreeContainer');
    if (!container) return;

    const q = searchQuery;
    const filtered = dcais.modules.filter(mod => {
      if (!q) return true;
      const tStr = mod.title[lang].toLowerCase();
      const cStr = mod.code.toLowerCase();
      const hasAct = mod.activities.some(a => a.name[lang].toLowerCase().includes(q) || a.code.toLowerCase().includes(q));
      return tStr.includes(q) || cStr.includes(q) || hasAct;
    });

    if (filtered.length === 0) {
      container.innerHTML = `<div style="text-align: center; padding: 24px; color: var(--spectrum-gray-600);">No DCAIS activities matching "${q}".</div>`;
      return;
    }

    container.innerHTML = filtered.map(mod => `
      <div class="accordion-panel ${q ? 'open' : ''}" style="margin-bottom: 12px;">
        <div class="accordion-trigger" role="button" tabindex="0" onclick="TeacherPortal.toggleAccordion(this)" onkeydown="TeacherPortal.handleKey(event, this)">
          <div class="accordion-meta-group">
            <span class="tag-badge" style="background: var(--spectrum-gray-900);">${mod.code}</span>
            <span class="accordion-heading-text">${mod.title[lang]}</span>
          </div>
          <span class="accordion-chevron" aria-hidden="true">▼</span>
        </div>
        <div class="accordion-body">
          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${mod.activities.map(act => `
              <div style="display: flex; justify-content: space-between; align-items: center; background: var(--spectrum-gray-100); padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid var(--spectrum-gray-200);">
                <div style="display: flex; align-items: center; gap: 12px;">
                  <span style="background: var(--spectrum-white); border: 1px solid var(--spectrum-gray-200); font-size: 0.78rem; font-weight: 800; padding: 3px 10px; border-radius: var(--radius-pill);">${act.code}</span>
                  <span style="font-weight: 700; font-size: 0.98rem; color: var(--spectrum-gray-900);">${act.name[lang]}</span>
                </div>
                <div style="display: flex; gap: 8px;">
                  <a href="${act.link}" target="_blank" rel="noopener noreferrer" class="btn-spectrum-primary" style="padding: 6px 18px; font-size: 0.85rem;">
                    ${data.common.openBtn[lang]} ↗
                  </a>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `).join('');
  }

  function toggleAccordion(headerEl) {
    const panel = headerEl.parentElement;
    panel.classList.toggle('open');
  }

  function handleKey(event, headerEl) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleAccordion(headerEl);
    }
  }

  return {
    init,
    updateLanguage,
    toggleAccordion,
    handleKey
  };
})();
