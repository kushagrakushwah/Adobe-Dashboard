
/* ===== LANGUAGE SYSTEM ===== */
var currentLang = 'en';
var LANG = {
  en: {
    hdrSub:'Educator Workspace', hdrBadge:'Educator Portal',
    heroTag:'Educator &amp; Curriculum Hub', heroTitle:'Educator Hub &amp; Curriculum Portal',
    heroSub:'Manage school access, CPD training, student DCAIS monitoring, classroom resources, and certification — all in one place.',
    flow1:'School Access', flow2:'CPD Training', flow3:'DCAIS Monitor', flow4:'Certification',
    guideText:'<strong>Click any section card below</strong> to open its complete workspace in full-screen view.',
    backBtn:'Back to Sections',
    sAtag:'Section A', sAtitle:'Adobe ID &amp; Access', sAdesc:'School login, institutional account creation, single sign-on &amp; IT admin deployment guide.', sAhint:'5 Institutional Tools', sAbtn:'Open &rarr;',
    sBtag:'Section B', sBtitle:'CPD Modules', sBdesc:'5 accredited professional development modules (CPD-AE 01 to 05) totaling 48 training hours.', sBhint:'48 Hours Training', sBbtn:'Open &rarr;',
    sCtag:'Section C • DCAIS', sCtitle:'Student DCAIS Monitor (AIM)', sCdesc:'Monitor what DCAIS activities your students are doing across Grades 3–8. Inspect curriculum instructions and templates.', sChint:'Grades 3–8 Full Monitor', sCbtn:'Open &rarr;',
    sDtag:'Section D', sDtitle:'Classroom Resources', sDdesc:'Lesson plan templates, classroom printables, grading rubrics, tutorial videos, and project kits.', sDhint:'6 Resource Packs', sDbtn:'Open &rarr;',
    sEtag:'Section E', sEtitle:'Student Progress Tracker', sEdesc:'Monitor monthly activity completion rates, review submissions across grade bands, and evaluate portfolios.', sEhint:'Grade-wise Analytics', sEbtn:'Open &rarr;',
    sFtag:'Section F', sFtitle:'Community &amp; Support', sFdesc:'Connect with educators, attend live webinars, join the national forum, and get technical help.', sFhint:'500+ Educators Network', sFbtn:'Open &rarr;',
    sGtag:'Section G', sGtitle:'Certification Path', sGdesc:'Earn your Adobe Certified Educator credential. Track CPD hours and claim your digital badge.', sGhint:'4 Certification Levels', sGbtn:'Open &rarr;'
  },
  hi: {
    hdrSub:'शिक्षक कार्यक्षेत्र', hdrBadge:'शिक्षक पोर्टल',
    heroTag:'शिक्षक पैनल', heroTitle:'शिक्षक हब और पाठ्यक्रम विभाग',
    heroSub:'स्कूल एक्सेस, CPD प्रशिक्षण, DCAIS मॉनिटरिंग, कक्षा संसाधन और प्रमाणीकरण सब एक जगह पर।',
    flow1:'स्कूल एक्सेस', flow2:'CPD प्रशिक्षण', flow3:'DCAIS मॉनिटर', flow4:'प्रमाणीकरण',
    guideText:'<strong>नीचे किसी भी सेक्शन कार्ड पर क्लिक करें</strong> और उसे पूरी स्क्रीन पर खोलें।',
    backBtn:'वापस जाएं',
    sAtag:'सेक्शन A', sAtitle:'Adobe ID और एक्सेस', sAdesc:'स्कूल लॉगिन, संस्थागत खाता निर्माण, SSO और IT तैनाती गाइड।', sAhint:'5 संस्थागत टूल्स', sAbtn:'खोलें &rarr;',
    sBtag:'सेक्शन B', sBtitle:'CPD मॉड्यूल', sBdesc:'5 मान्यता प्राप्त प्रशिक्षण मॉड्यूल — CPD-AE 01 से 05 — कुल 48 घंटे।', sBhint:'48 घंटे प्रशिक्षण', sBbtn:'खोलें &rarr;',
    sCtag:'सेक्शन C • DCAIS', sCtitle:'छात्र DCAIS मॉनिटर (AIM)', sCdesc:'देखें कक्षा 3 से 8 तक आपके छात्र कौन सी DCAIS गतिविधियाँ कर रहे हैं।', sChint:'कक्षा 3–8 पूर्ण मॉनिटर', sCbtn:'खोलें &rarr;',
    sDtag:'सेक्शन D', sDtitle:'कक्षा संसाधन', sDdesc:'पाठ योजना टेम्पलेट, क्लासरूम प्रिंटेबल्स, ग्रेडिंग रूब्रिक्स और वीडियो।', sDhint:'6 संसाधन पैक', sDbtn:'खोलें &rarr;',
    sEtag:'सेक्शन E', sEtitle:'छात्र प्रगति ट्रैकर', sEdesc:'मासिक गतिविधि समाप्ति दर देखें और छात्र पोर्टफोलियो का मूल्यांकन करें।', sEhint:'कक्षावार विश्लेषण', sEbtn:'खोलें &rarr;',
    sFtag:'सेक्शन F', sFtitle:'समुदाय और सहायता', sFdesc:'शिक्षकों से जुड़ें, लाइव वेबिनार में भाग लें और तकनीकी सहायता पाएं।', sFhint:'500+ शिक्षक नेटवर्क', sFbtn:'खोलें &rarr;',
    sGtag:'सेक्शन G', sGtitle:'प्रमाणीकरण पथ', sGdesc:'Adobe सर्टिफाइड शिक्षक बनें। CPD घंटे ट्रैक करें और डिजिटल बैज क्लेम करें।', sGhint:'4 स्तरीय प्रमाणीकरण', sGbtn:'खोलें &rarr;'
  }
};

function toggleLang() {
  currentLang = (currentLang === 'en') ? 'hi' : 'en';
  var bEn = document.getElementById('langBtnEN');
  var bHi = document.getElementById('langBtnHI');
  if (bEn) bEn.classList.toggle('active', currentLang === 'en');
  if (bHi) bHi.classList.toggle('active', currentLang === 'hi');
  applyLang();
  if (location.hash === '#section-C') {
    var c = document.getElementById('secContent');
    if (c) c.innerHTML = renderDcaisMonitor();
  }
}

function applyLang() {
  var L = LANG[currentLang];
  var set = function(id, val) {
    var e = document.getElementById(id);
    if (e) e.innerHTML = val;
  };
  set('hdrSubLabel', L.hdrSub);
  set('hdrBadge', L.hdrBadge);
  set('heroTagText', L.heroTag);
  set('heroTitle', L.heroTitle);
  set('heroSub', L.heroSub);
  set('flow1', L.flow1);
  set('flow2', L.flow2);
  set('flow3', L.flow3);
  set('flow4', L.flow4);
  set('guideText', L.guideText);
  set('backBtnLabel', L.backBtn);
  set('sA-tag', L.sAtag); set('sA-title', L.sAtitle); set('sA-desc', L.sAdesc); set('sA-hint', L.sAhint); set('sA-btn', L.sAbtn);
  set('sB-tag', L.sBtag); set('sB-title', L.sBtitle); set('sB-desc', L.sBdesc); set('sB-hint', L.sBhint); set('sB-btn', L.sBbtn);
  set('sC-tag', L.sCtag); set('sC-title', L.sCtitle); set('sC-desc', L.sCdesc); set('sC-hint', L.sChint); set('sC-btn', L.sCbtn);
  set('sD-tag', L.sDtag); set('sD-title', L.sDtitle); set('sD-desc', L.sDdesc); set('sD-hint', L.sDhint); set('sD-btn', L.sDbtn);
  set('sE-tag', L.sEtag); set('sE-title', L.sEtitle); set('sE-desc', L.sEdesc); set('sE-hint', L.sEhint); set('sE-btn', L.sEbtn);
  set('sF-tag', L.sFtag); set('sF-title', L.sFtitle); set('sF-desc', L.sFdesc); set('sF-hint', L.sFhint); set('sF-btn', L.sFbtn);
  set('sG-tag', L.sGtag); set('sG-title', L.sGtitle); set('sG-desc', L.sGdesc); set('sG-hint', L.sGhint); set('sG-btn', L.sGbtn);
}

/* ===== CPD DATA ===== */
var CPD_MODULES = [
  { code:'CPD-AE-01', title:'Digital Creativity Foundations', duration:'10 hrs', level:'Foundation', desc:'Introduction to Adobe Express, digital design principles, and foundational visual literacy for classroom application.', outcomes:['Basic design workflow','Colour & Typography fundamentals','Creating your first classroom project'] },
  { code:'CPD-AE-02', title:'Visual Communication & Design', duration:'10 hrs', level:'Foundation', desc:'Deep dive into layout design, visual hierarchy, infographics, and presenting complex ideas through visual storytelling.', outcomes:['Layout hierarchy mastery','Infographic creation','Visual storytelling rubric'] },
  { code:'CPD-AE-03', title:'Collaborative Digital Projects', duration:'10 hrs', level:'Intermediate', desc:'Design cross-curricular, collaborative group projects for students. Manage team workflows in Adobe Express.', outcomes:['Group project frameworks','Assessment rubrics','Cross-curricular integration'] },
  { code:'CPD-AE-04', title:'Video & Animation for Education', duration:'8 hrs', level:'Intermediate', desc:'Produce educational video content, animated explainers, and multimedia classroom materials using Adobe Express video tools.', outcomes:['Educational video production','Animation principles','Classroom multimedia creation'] },
  { code:'CPD-AE-05', title:'Advanced Pedagogy & Certification Prep', duration:'10 hrs', level:'Mastery', desc:'Develop comprehensive DCAIS curriculum units, prepare your certification portfolio, and train fellow educators.', outcomes:['Full curriculum design','Peer training methodology','Adobe Educator portfolio preparation'] }
];

function renderCpdSectionHtml() {
  var stepsHtml = CPD_MODULES.map(function(m, i) {
    return (i > 0 ? '<div class="cpd-connector"></div>' : '') +
      '<div class="cpd-step"><div class="cpd-step-n">' + (i+1) + '</div><div class="cpd-step-l">' + m.level + '</div></div>';
  }).join('');
  var cardsHtml = CPD_MODULES.map(function(m) {
    return '<div class="rc">' +
      '<div><div class="rc-badge">' + m.code + ' • ' + m.duration + '</div><h4>' + m.title + '</h4><p>' + m.desc + '</p>' +
      '<ul style="font-size:.78rem;color:var(--ink-2);padding-left:18px;margin-bottom:14px;">' +
      m.outcomes.map(function(o){ return '<li style="margin-bottom:3px;">' + o + '</li>'; }).join('') +
      '</ul></div>' +
      '<a href="https://express.adobe.com/learn" target="_blank" class="btn btn-primary">Start Module &#8599;</a>' +
    '</div>';
  }).join('');
  return '<div class="cpd-steps">' + stepsHtml + '</div><div class="rg">' + cardsHtml + '</div>';
}

/* ===== DCAIS STUDENT MONITOR CONTROLLER ===== */
var teacherMonitorGrade = null;
var teacherSearchQuery = '';

function renderDcaisMonitor() {
  var isHi = (currentLang === 'hi');

  var portalLinkBanner =
    '<div style="display:flex;align-items:center;justify-content:space-between;background:var(--red-bg);border:1.5px solid var(--red-border);border-radius:var(--radius);padding:16px 20px;margin-bottom:22px;flex-wrap:wrap;gap:12px;">' +
      '<div>' +
        '<div style="font-weight:900;color:var(--red);font-size:.98rem;margin-bottom:3px;">🔗 ' +
          (isHi ? 'छात्र पोर्टल में DCAIS सेक्शन देखें' : 'View Student DCAIS Section Live') + '</div>' +
        '<div style="font-size:.82rem;color:var(--ink-2);">' +
          (isHi ? 'देखें कि छात्र अपनी स्क्रीन पर क्या देख रहे हैं। गतिविधियाँ टेस्ट करने के लिए क्लिक करें।' :
                  'Navigate to the student portal to inspect exactly what students see and test the creative workflow.') + '</div>' +
      '</div>' +
      '<a href="https://kushagrakushwah.github.io/Adobe-Dashboard/student/#section-7" target="_blank" class="btn btn-primary" style="padding:10px 22px;font-size:.85rem;">' +
        (isHi ? 'छात्र DCAIS स्टूडियो खोलें ↗' : 'Open Student DCAIS Studio ↗') + '</a>' +
    '</div>';

  if (!teacherMonitorGrade) {
    var gradeCards = [
      { id: '3', nameEn: 'Grade 3', nameHi: 'कक्षा 3', count: '32 activities', countHi: '32 गतिविधियाँ' },
      { id: '4', nameEn: 'Grade 4', nameHi: 'कक्षा 4', count: '32 activities', countHi: '32 गतिविधियाँ' },
      { id: '5', nameEn: 'Grade 5', nameHi: 'कक्षा 5', count: '32 activities', countHi: '32 गतिविधियाँ' },
      { id: '6', nameEn: 'Grade 6', nameHi: 'कक्षा 6', count: '18 activities', countHi: '18 गतिविधियाँ' },
      { id: '7', nameEn: 'Grade 7', nameHi: 'कक्षा 7', count: '18 activities', countHi: '18 गतिविधियाँ' },
      { id: '8', nameEn: 'Grade 8', nameHi: 'कक्षा 8', count: '18 activities', countHi: '18 गतिविधियाँ' },
      { id: 'kb', nameEn: 'Kaushal Bodh', nameHi: 'कौशल बोध', count: '18 projects', countHi: '18 प्रोजेक्ट्स' }
    ];

    var cardsGrid = '<div style="margin-bottom:14px;"><h3 style="font-size:1.15rem;font-weight:900;color:var(--ink);">' +
      (isHi ? 'कक्षावार पाठ्यक्रम चुनें:' : 'Select Grade to Inspect Activities:') + '</h3></div>' +
      '<div class="aim-grade-cards">' +
      gradeCards.map(function(g) {
        return '<div class="aim-gc" onclick="selectTeacherGrade(&quot;' + g.id + '&quot;)">' +
          '<div class="aim-gc-icon">🔭</div>' +
          '<h3>' + (isHi ? g.nameHi : g.nameEn) + '</h3>' +
          '<div class="aim-gc-cnt">' + (isHi ? g.countHi : g.count) + '</div>' +
          '<div class="aim-gc-btn">' + (isHi ? 'गतिविधियां देखें →' : 'Inspect Grade →') + '</div>' +
        '</div>';
      }).join('') +
      '</div>';

    return portalLinkBanner + cardsGrid;
  }

  var activities = [];
  var gradeLabel = '';

  if (teacherMonitorGrade === 'kb') {
    gradeLabel = isHi ? 'कौशल बोध प्रोजेक्ट्स' : 'Kaushal Bodh Curriculum';
    var kbData = (window.DCAIS_DATA && window.DCAIS_DATA.kaushalBodh) ? window.DCAIS_DATA.kaushalBodh : {};
    ['grade 6','grade 7','grade 8'].forEach(function(gk) {
      if (kbData[gk]) {
        kbData[gk].forEach(function(item) {
          activities.push({
            name: item.projectName,
            skills: item.formOfWork + ' • ' + (item.expressActivity || 'Creative Project'),
            instructions: item.finalDeliverable || item.adobeIntegration || item.keyActivities,
            link: item.templateLink || 'https://express.adobe.com',
            journalLink: item.learningJournalLink,
            book: ''
          });
        });
      }
    });
  } else {
    gradeLabel = isHi ? ('कक्षा ' + teacherMonitorGrade) : ('Grade ' + teacherMonitorGrade);
    var key = 'Grade ' + teacherMonitorGrade;
    if (isHi && (teacherMonitorGrade === '6' || teacherMonitorGrade === '7' || teacherMonitorGrade === '8')) {
      key = 'Grade ' + teacherMonitorGrade + ' (Hindi)';
    }
    activities = (window.DCAIS_DATA && window.DCAIS_DATA.aimActivities && window.DCAIS_DATA.aimActivities[key]) || [];
  }

  if (teacherSearchQuery) {
    var q = teacherSearchQuery.toLowerCase();
    activities = activities.filter(function(a) {
      return (a.name && a.name.toLowerCase().indexOf(q) !== -1) ||
             (a.skills && a.skills.toLowerCase().indexOf(q) !== -1) ||
             (a.instructions && a.instructions.toLowerCase().indexOf(q) !== -1);
    });
  }

  var navHtml =
    '<div class="aim-top-nav">' +
      '<div style="display:flex;align-items:center;gap:10px;">' +
        '<button class="aim-back-grade" onclick="selectTeacherGrade(null)">← ' + (isHi ? 'सभी कक्षाएं' : 'All Grades') + '</button>' +
        '<span style="font-size:.92rem;font-weight:900;color:var(--ink);">' + gradeLabel + ' (' + activities.length + ' ' + (isHi ? 'गतिविधियां' : 'activities') + ')</span>' +
      '</div>' +
      '<div class="aim-search">' +
        '<input type="text" placeholder="' + (isHi ? 'गतिविधि खोजें...' : 'Search activity...') + '" value="' + teacherSearchQuery + '" oninput="searchTeacherActivities(this.value)">' +
      '</div>' +
    '</div>';

  var actGridHtml = '';
  if (activities.length === 0) {
    actGridHtml = '<div style="background:var(--surface-2);border-radius:var(--radius);padding:32px;text-align:center;color:var(--ink-3);">' +
      '<h3>' + (isHi ? 'कोई गतिविधि नहीं मिली' : 'No activities found') + '</h3>' +
    '</div>';
  } else {
    actGridHtml = '<div class="aim-act-grid">' +
      activities.map(function(act, idx) {
        var numBadge = (isHi ? 'गतिविधि ' : 'Activity ') + (act.col || (idx + 1));
        var templateBtn = act.link ?
          '<a href="' + act.link + '" target="_blank" class="btn btn-primary" style="font-size:.76rem;padding:7px 14px;">🎨 ' + (isHi ? 'टेम्पलेट का पूर्वावलोकन ↗' : 'Preview Template ↗') + '</a>' :
          '<a href="https://express.adobe.com" target="_blank" class="btn btn-primary" style="font-size:.76rem;padding:7px 14px;">🎨 ' + (isHi ? 'Express खोलें ↗' : 'Open in Express ↗') + '</a>';
        
        var bookBtn = act.book ?
          '<a href="' + act.book + '" target="_blank" class="btn btn-ghost" style="font-size:.74rem;padding:6px 12px;">📖 ' + (isHi ? 'पुस्तक का स्क्रीनशॉट ↗' : 'Book Screenshot ↗') + '</a>' : '';

        var studentViewBtn = '<a href="https://kushagrakushwah.github.io/Adobe-Dashboard/student/#section-7" target="_blank" class="btn btn-dark" style="font-size:.74rem;padding:6px 12px;">🔗 ' + (isHi ? 'छात्र पोर्टल में देखें ↗' : 'View in Student Portal ↗') + '</a>';

        return '<div class="aim-card">' +
          '<div>' +
            '<div class="aim-badge">' + numBadge + '</div>' +
            '<h4 class="aim-title">' + act.name + '</h4>' +
            (act.skills ? '<div class="aim-skills">⚡ ' + act.skills + '</div>' : '') +
            (act.instructions ? '<div class="aim-instr">' + act.instructions + '</div>' : '') +
          '</div>' +
          '<div class="aim-actions">' +
            templateBtn +
            bookBtn +
            studentViewBtn +
          '</div>' +
        '</div>';
      }).join('') +
    '</div>';
  }

  return portalLinkBanner + navHtml + actGridHtml;
}

function selectTeacherGrade(g) {
  teacherMonitorGrade = g;
  teacherSearchQuery = '';
  document.getElementById('secContent').innerHTML = renderDcaisMonitor();
}

function searchTeacherActivities(q) {
  teacherSearchQuery = q;
  document.getElementById('secContent').innerHTML = renderDcaisMonitor();
}

/* ===== SECTIONS DATA ===== */
var TEACHER_SECTIONS_DATA = {
  'A': {
    letter: '🔑',
    tag: 'Section A • Institutional Access',
    title: 'Adobe ID &amp; Password Access Management',
    desc: 'Ensure seamless institutional access to Adobe Express for Education for your school or institution.',
    render: function() {
      return '<div class="notice"><div class="notice-t">Institutional Login Required</div><div class="notice-d">All teachers must use school-assigned Adobe IDs. Contact your IT administrator if you do not have institutional access credentials.</div></div>' +
      '<div class="al">' +
        '<div class="ai"><div class="ai-l"><div class="ai-dot"></div><div><div class="ai-t">School Admin Console</div><div class="ai-d">Manage institutional Adobe licenses, user permissions, and school-wide directory sync.</div></div></div><div class="ai-r"><a href="https://adminconsole.adobe.com" target="_blank" class="btn btn-primary">Open Console &#8599;</a></div></div>' +
        '<div class="ai"><div class="ai-l"><div class="ai-dot"></div><div><div class="ai-t">Create Adobe ID</div><div class="ai-d">Step-by-step account setup using your designated official school email address.</div></div></div><div class="ai-r"><a href="https://account.adobe.com" target="_blank" class="btn btn-primary">Create Account &#8599;</a></div></div>' +
        '<div class="ai"><div class="ai-l"><div class="ai-dot"></div><div><div class="ai-t">Password &amp; Security Settings</div><div class="ai-d">Reset credentials, manage two-factor authentication, and update recovery options.</div></div></div><div class="ai-r"><a href="https://account.adobe.com/security" target="_blank" class="btn btn-ghost">Manage Security &#8599;</a></div></div>' +
        '<div class="ai"><div class="ai-l"><div class="ai-dot"></div><div><div class="ai-t">IT Admin Deployment Guide</div><div class="ai-d">Enterprise deployment manual for school IT administrators to roll out Adobe Express across computer labs.</div></div></div><div class="ai-r"><a href="https://helpx.adobe.com/enterprise" target="_blank" class="btn btn-ghost">View Guide &#8599;</a></div></div>' +
        '<div class="ai"><div class="ai-l"><div class="ai-dot"></div><div><div class="ai-t">Single Sign-On (SSO) Integration</div><div class="ai-d">Connect your school institutional Google Workspace or Microsoft 365 for one-click logins.</div></div></div><div class="ai-r"><a href="https://helpx.adobe.com/enterprise/using/sso.html" target="_blank" class="btn btn-ghost">Setup SSO &#8599;</a></div></div>' +
      '</div>';
    }
  },
  'B': {
    letter: '📚',
    tag: 'Section B • Professional Development',
    title: 'CPD Training Modules (48 Hours)',
    desc: 'Five progressive accredited modules designed to equip educators with foundational to advanced digital creativity pedagogy.',
    render: function() { return renderCpdSectionHtml(); }
  },
  'C': {
    letter: '🔭',
    tag: 'Section C • Student DCAIS Monitor',
    title: 'Student DCAIS Activities Monitor (AIM)',
    desc: 'Explore the full DCAIS activity catalog (Grades 3–8) exactly as presented to students. Inspect templates, tasks, and test student activities.',
    render: function() { return renderDcaisMonitor(); }
  },
  'D': {
    letter: '📝',
    tag: 'Section D • Classroom Assets',
    title: 'Classroom Resources &amp; Printables',
    desc: 'Ready-to-use lesson plans, assessment rubrics, smartboard tutorial videos, and printable design thinking posters.',
    render: function() {
      return '<div class="rg">' +
        '<div class="rc"><div><div class="rc-badge">Templates</div><h4>Lesson Plan Templates</h4><p>Pre-designed lesson plan templates aligned with DCAIS curriculum standards for all grade levels.</p></div><a href="https://express.adobe.com/templates" target="_blank" class="btn btn-primary">Download Templates &#8599;</a></div>' +
        '<div class="rc"><div><div class="rc-badge">Printables</div><h4>Classroom Posters &amp; Cheatsheets</h4><p>Design thinking posters and Adobe Express quick reference cards, ready to print for school computer labs.</p></div><a href="https://express.adobe.com" target="_blank" class="btn btn-primary">Get Posters &#8599;</a></div>' +
        '<div class="rc"><div><div class="rc-badge">Assessment</div><h4>Standardized Grading Rubrics</h4><p>Comprehensive rubrics for evaluating student creative projects across beginner, intermediate, and advanced levels.</p></div><a href="https://express.adobe.com" target="_blank" class="btn btn-primary">View Rubrics &#8599;</a></div>' +
        '<div class="rc"><div><div class="rc-badge">Video</div><h4>Classroom Tutorial Videos</h4><p>Step-by-step instructional videos optimized for classroom smartboard projection and teacher-led demonstrations.</p></div><a href="https://express.adobe.com/learn" target="_blank" class="btn btn-primary">Watch Videos &#8599;</a></div>' +
        '<div class="rc"><div><div class="rc-badge">Project Kits</div><h4>Project Starter Kits</h4><p>Complete project packs with instructions, editable templates, and benchmark student exemplar outputs.</p></div><a href="https://express.adobe.com" target="_blank" class="btn btn-primary">Get Starter Kits &#8599;</a></div>' +
        '<div class="rc"><div><div class="rc-badge">Pedagogy</div><h4>Teacher Integration Manual</h4><p>Guide on embedding digital creativity into existing Science, Social Studies, and Language curricula.</p></div><a href="https://express.adobe.com" target="_blank" class="btn btn-primary">Read Guide &#8599;</a></div>' +
      '</div>';
    }
  },
  'E': {
    letter: '📊',
    tag: 'Section E • Student Submissions',
    title: 'Student Progress &amp; Activity Tracking',
    desc: 'Monitor monthly activity completion rates, review submissions across grade bands, and evaluate student portfolios.',
    render: function() {
      return '<div class="pstats">' +
        '<div class="pstat"><div class="pstat-n">500+</div><div class="pstat-l">Certified Teachers</div></div>' +
        '<div class="pstat"><div class="pstat-n">78%</div><div class="pstat-l">Avg Completion</div></div>' +
        '<div class="pstat"><div class="pstat-n">48 hrs</div><div class="pstat-l">Accredited Training</div></div>' +
        '<div class="pstat"><div class="pstat-n">12+</div><div class="pstat-l">Curriculum Units</div></div>' +
      '</div>' +
      '<div class="rg" style="margin-bottom:28px">' +
        '<div class="rc"><div><div class="rc-badge">Grades 6–8</div><h4>Middle School Tracker</h4><p>Monitor monthly completion rates, portfolio growth, and fundamental digital literacy milestones.</p></div><a href="https://express.adobe.com" target="_blank" class="btn btn-primary">View Dashboard &#8599;</a></div>' +
        '<div class="rc"><div><div class="rc-badge">Grades 9–10</div><h4>Secondary Tracker</h4><p>Track advanced project submissions, team collaboration, and CPD-aligned creative activities.</p></div><a href="https://express.adobe.com" target="_blank" class="btn btn-primary">View Progress &#8599;</a></div>' +
        '<div class="rc"><div><div class="rc-badge">Grades 11–12</div><h4>Senior Portfolio Reviews</h4><p>Evaluate senior portfolios, assess capstone assignments, and verify readiness for Adobe certification.</p></div><a href="https://express.adobe.com" target="_blank" class="btn btn-primary">Review Portfolios &#8599;</a></div>' +
      '</div>' +
      '<div style="background:var(--surface-2);border-radius:var(--radius);padding:24px;border:1.5px solid var(--border)">' +
        '<div class="sec-label" style="margin-top:0;">Classroom Activity Completion (Academic Year)</div>' +
        '<div class="plist">' +
          '<div><div class="pi-lbl"><span>Republic Day Poster &amp; Flyer Design</span><span class="pi-pct">78%</span></div><div class="pbar"><div class="pfill" style="width:78%"></div></div></div>' +
          '<div><div class="pi-lbl"><span>Cultural Festival Greeting Cards</span><span class="pi-pct">65%</span></div><div class="pbar"><div class="pfill" style="width:65%"></div></div></div>' +
          '<div><div class="pi-lbl"><span>Environmental Awareness Campaign Video</span><span class="pi-pct">52%</span></div><div class="pbar"><div class="pfill" style="width:52%"></div></div></div>' +
          '<div><div class="pi-lbl"><span>Digital Student Portfolio Showcase</span><span class="pi-pct">41%</span></div><div class="pbar"><div class="pfill" style="width:41%"></div></div></div>' +
          '<div><div class="pi-lbl"><span>Social Impact &amp; Community Storytelling</span><span class="pi-pct">33%</span></div><div class="pbar"><div class="pfill" style="width:33%"></div></div></div>' +
        '</div>' +
      '</div>';
    }
  },
  'F': {
    letter: '🤝',
    tag: 'Section F • Teacher Network',
    title: 'Community, Webinars &amp; Support',
    desc: 'Connect with 500+ certified educators, attend monthly live masterclasses, and access dedicated helpdesk assistance.',
    render: function() {
      return '<div class="rg">' +
        '<div class="rc"><div><div class="rc-badge">Live Events</div><h4>Monthly Educator Masterclasses</h4><p>Interactive live webinars with Adobe pedagogical experts. Access recordings and session decks anytime.</p></div><a href="https://express.adobe.com" target="_blank" class="btn btn-primary">Register for Webinar &#8599;</a></div>' +
        '<div class="rc"><div><div class="rc-badge">Peer Network</div><h4>National Educator Forum</h4><p>Exchange lesson ideas, curriculum rubrics, and project tips with certified educators from schools across India.</p></div><a href="https://community.adobe.com" target="_blank" class="btn btn-primary">Join Forum &#8599;</a></div>' +
        '<div class="rc"><div><div class="rc-badge">Technical Help</div><h4>Dedicated School Helpdesk</h4><p>Priority technical assistance for account provisioning, SSO configuration, and school lab setups.</p></div><a href="https://helpx.adobe.com" target="_blank" class="btn btn-primary">Contact Support &#8599;</a></div>' +
      '</div>';
    }
  },
  'G': {
    letter: '🏆',
    tag: 'Section G • Professional Accreditation',
    title: 'Certification Path &amp; Digital Badges',
    desc: 'Earn recognized Adobe Educator credentials, track your accredited CPD hours, and showcase your professional milestones.',
    render: function() {
      return '<div class="ach-grid">' +
        '<div class="ac earned"><div class="ac-icon">&#10003;</div><h4>Foundation Educator</h4><p>Completed CPD Modules 01 &amp; 02 (18 hours).</p><span class="ac-tag">Eligible</span></div>' +
        '<div class="ac earned"><div class="ac-icon">&#9654;</div><h4>Proficient Educator</h4><p>Completing CPD Modules 03 &amp; 04 (20 hours).</p><span class="ac-tag">In Progress</span></div>' +
        '<div class="ac locked"><div class="ac-icon">&#128274;</div><h4>Expert Educator</h4><p>Complete CPD Module 05 (10 hours).</p><span class="ac-tag">Locked</span></div>' +
        '<div class="ac locked"><div class="ac-icon">&#128274;</div><h4>Adobe Certified Educator</h4><p>Portfolio submission &amp; peer assessment review.</p><span class="ac-tag">Locked</span></div>' +
      '</div>' +
      '<div class="rg" style="margin-top:24px">' +
        '<div class="rc"><div><div class="rc-badge">Digital Credential</div><h4>Claim Educator Digital Badge</h4><p>Add verified Adobe Certified Educator credentials to your LinkedIn profile and professional resume.</p></div><a href="https://express.adobe.com" target="_blank" class="btn btn-primary">Claim Digital Badge &#8599;</a></div>' +
        '<div class="rc"><div><div class="rc-badge">Print Certificate</div><h4>Official Certificate of Completion</h4><p>Generate and download your official Ministry &amp; Adobe accredited training certificate in PDF format.</p></div><a href="https://express.adobe.com" target="_blank" class="btn btn-primary">Download Certificate &#8599;</a></div>' +
        '<div class="rc"><div><div class="rc-badge">Credit Tracker</div><h4>Track Annual CPD Credits</h4><p>View verified training transcript hours for institutional appraisal and annual certification renewals.</p></div><a href="https://express.adobe.com" target="_blank" class="btn btn-primary">View Credits &#8599;</a></div>' +
      '</div>';
    }
  }
};

/* ===== NAVIGATION CONTROLLER ===== */
function openSection(letter) {
  var data = TEACHER_SECTIONS_DATA[letter];
  if (!data) return;
  location.hash = '#section-' + letter;
  var crumb = document.getElementById('crumbName');
  if (crumb) crumb.innerHTML = data.tag;
  var badge = document.getElementById('secBadge');
  if (badge) badge.innerHTML = data.letter;
  var tag = document.getElementById('secTag');
  if (tag) tag.innerHTML = data.tag;
  var title = document.getElementById('secTitle');
  if (title) title.innerHTML = data.title;
  var desc = document.getElementById('secDesc');
  if (desc) desc.innerHTML = data.desc;
  var content = document.getElementById('secContent');
  if (content) content.innerHTML = data.render();

  var keys = Object.keys(TEACHER_SECTIONS_DATA);
  var idx = keys.indexOf(letter);
  var nextPrevHtml = '';
  if (idx > 0) nextPrevHtml += '<button class="btn btn-ghost" onclick="openSection(&quot;' + keys[idx-1] + '&quot;)">&#8592; Prev Section</button> ';
  if (idx < keys.length-1) nextPrevHtml += '<button class="btn btn-primary" onclick="openSection(&quot;' + keys[idx+1] + '&quot;)">Next Section &#8594;</button>';
  var np = document.getElementById('secNextPrev');
  if (np) np.innerHTML = nextPrevHtml;

  var dv = document.getElementById('dashboardView');
  if (dv) dv.style.display = 'none';
  var mh = document.getElementById('mainHero');
  if (mh) mh.style.display = 'none';
  var sv = document.getElementById('sectionView');
  if (sv) sv.style.display = 'block';

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showDashboard() {
  location.hash = '';
  var sv = document.getElementById('sectionView');
  if (sv) sv.style.display = 'none';
  var dv = document.getElementById('dashboardView');
  if (dv) dv.style.display = 'block';
  var mh = document.getElementById('mainHero');
  if (mh) mh.style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('hashchange', function() {
  var hash = location.hash;
  if (hash.indexOf('#section-') === 0) {
    var letter = hash.replace('#section-', '').toUpperCase();
    if (TEACHER_SECTIONS_DATA[letter]) {
      openSection(letter);
      return;
    }
  }
  showDashboard();
});

window.addEventListener('DOMContentLoaded', function() {
  var hash = location.hash;
  if (hash.indexOf('#section-') === 0) {
    var letter = hash.replace('#section-', '').toUpperCase();
    if (TEACHER_SECTIONS_DATA[letter]) {
      openSection(letter);
      return;
    }
  }
  showDashboard();
  applyLang();
});


// Explicit global bindings
window.openSection = openSection;
window.showDashboard = showDashboard;
window.toggleLang = toggleLang;
window.selectTeacherGrade = selectTeacherGrade;
window.searchTeacherActivities = searchTeacherActivities;

// Event delegation fallback
document.addEventListener('click', function(e) {
  var card = e.target.closest('.tile-card');
  if (card) {
    var sec = card.getAttribute('data-section');
    if (sec && typeof window.openSection === 'function') {
      window.openSection(sec);
    }
  }
});

console.log('Teacher Educator Hub initialized successfully.');
