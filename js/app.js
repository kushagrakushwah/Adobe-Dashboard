/**
 * Adobe Express for Education - Enterprise Application Core
 * Dual-Mode Data Resolver & Language Controller
 */

window.AdobeApp = (function () {
  let appData = null;
  let currentLang = localStorage.getItem('adobe_dashboard_lang') || 'en';

  async function init() {
    // 1. Dual-Mode Data Resolution (100% offline file:// reliable & CMS ready)
    if (window.ADOBE_DASHBOARD_DATA) {
      appData = window.ADOBE_DASHBOARD_DATA;
    } else {
      try {
        const res = await fetch('data/content.json');
        if (!res.ok) throw new Error('Failed to fetch data/content.json');
        appData = await res.json();
      } catch (err) {
        console.error('Critical: Failed to load curriculum data', err);
        return;
      }
    }

    setupBilingualToggle();
    renderCommonElements();

    // Trigger page-specific controllers
    const pageId = document.body.dataset.page;
    if (pageId === 'home') {
      renderHomePage();
    } else if (pageId === 'teacher' && window.TeacherPortal) {
      window.TeacherPortal.init(appData, currentLang);
    } else if (pageId === 'student' && window.StudentPortal) {
      window.StudentPortal.init(appData, currentLang);
    }
  }

  function setupBilingualToggle() {
    const toggleContainer = document.getElementById('langSwitcher');
    if (!toggleContainer) return;

    const enBtn = toggleContainer.querySelector('[data-lang="en"]');
    const hiBtn = toggleContainer.querySelector('[data-lang="hi"]');

    function updateToggleUI() {
      if (currentLang === 'hi') {
        hiBtn.classList.add('active');
        enBtn.classList.remove('active');
      } else {
        enBtn.classList.add('active');
        hiBtn.classList.remove('active');
      }
      document.documentElement.lang = currentLang;
    }

    updateToggleUI();

    toggleContainer.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'hi' : 'en';
      localStorage.setItem('adobe_dashboard_lang', currentLang);
      updateToggleUI();
      renderCommonElements();

      const pageId = document.body.dataset.page;
      if (pageId === 'home') {
        renderHomePage();
      } else if (pageId === 'teacher' && window.TeacherPortal) {
        window.TeacherPortal.updateLanguage(currentLang);
      } else if (pageId === 'student' && window.StudentPortal) {
        window.StudentPortal.updateLanguage(currentLang);
      }

      showToast(currentLang === 'hi' ? 'भाषा बदलकर हिंदी कर दी गई' : 'Language switched to English');
    });
  }

  function renderCommonElements() {
    if (!appData) return;
    const c = appData.common;

    document.querySelectorAll('[data-bind="siteTitle"]').forEach(el => el.textContent = c.siteTitle[currentLang]);
    document.querySelectorAll('[data-bind="tagline"]').forEach(el => el.textContent = c.tagline[currentLang]);
    document.querySelectorAll('[data-bind="homeLink"]').forEach(el => el.textContent = c.homeLink[currentLang]);
    document.querySelectorAll('[data-bind="teacherLink"]').forEach(el => el.textContent = c.teacherLink[currentLang]);
    document.querySelectorAll('[data-bind="studentLink"]').forEach(el => el.textContent = c.studentLink[currentLang]);
    document.querySelectorAll('[data-bind="backHome"]').forEach(el => el.textContent = c.backHome[currentLang]);
  }

  function renderHomePage() {
    if (!appData) return;
    const h = appData.home;

    const badge = document.getElementById('heroBadge');
    if (badge) badge.textContent = h.badge[currentLang];

    const title = document.getElementById('heroTitle');
    if (title) title.textContent = h.welcomeTitle[currentLang];

    const subtitle = document.getElementById('heroSubtitle');
    if (subtitle) subtitle.textContent = h.welcomeSubtitle[currentLang];

    // Stats Grid
    const statsContainer = document.getElementById('statsGrid');
    if (statsContainer && h.stats) {
      statsContainer.innerHTML = h.stats.map(s => `
        <div class="stat-box">
          <span class="stat-value">${s.num}</span>
          <span class="stat-desc">${s.label[currentLang]}</span>
        </div>
      `).join('');
    }

    // Teacher Card
    const tCard = h.teacherCard;
    if (tCard) {
      const elTitle = document.getElementById('tCardTitle');
      const elBadge = document.getElementById('tCardBadge');
      const elDesc = document.getElementById('tCardDesc');
      const elBullets = document.getElementById('tCardBullets');
      const elCta = document.getElementById('tCardCta');

      if (elTitle) elTitle.textContent = tCard.title[currentLang];
      if (elBadge) elBadge.textContent = tCard.badge[currentLang];
      if (elDesc) elDesc.textContent = tCard.desc[currentLang];
      if (elCta) elCta.textContent = tCard.cta[currentLang];

      if (elBullets && tCard.highlights) {
        elBullets.innerHTML = tCard.highlights.map(hl => `
          <li><span class="check">✓</span> <span>${hl[currentLang]}</span></li>
        `).join('');
      }
    }

    // Student Card
    const sCard = h.studentCard;
    if (sCard) {
      const elTitle = document.getElementById('sCardTitle');
      const elBadge = document.getElementById('sCardBadge');
      const elDesc = document.getElementById('sCardDesc');
      const elBullets = document.getElementById('sCardBullets');
      const elCta = document.getElementById('sCardCta');

      if (elTitle) elTitle.textContent = sCard.title[currentLang];
      if (elBadge) elBadge.textContent = sCard.badge[currentLang];
      if (elDesc) elDesc.textContent = sCard.desc[currentLang];
      if (elCta) elCta.textContent = sCard.cta[currentLang];

      if (elBullets && sCard.highlights) {
        elBullets.innerHTML = sCard.highlights.map(hl => `
          <li><span class="check">✓</span> <span>${hl[currentLang]}</span></li>
        `).join('');
      }
    }
  }

  function showToast(message) {
    let anchor = document.getElementById('toastAnchor');
    if (!anchor) {
      anchor = document.createElement('div');
      anchor.id = 'toastAnchor';
      document.body.appendChild(anchor);
    }

    const toast = document.createElement('div');
    toast.className = 'spectrum-toast';
    toast.innerHTML = `<span>✓</span> <span>${message}</span>`;
    anchor.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(12px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  }

  function copyText(text, event) {
    if (event) event.stopPropagation();
    navigator.clipboard.writeText(text).then(() => {
      const msg = appData ? appData.common.linkCopied[currentLang] : 'Copied to clipboard!';
      showToast(msg);
    });
  }

  return {
    init,
    showToast,
    copyText,
    getLang: () => currentLang,
    getData: () => appData
  };
})();

document.addEventListener('DOMContentLoaded', window.AdobeApp.init);
