
/* ===== LANGUAGE SYSTEM ===== */
var currentLang = 'en';

var LANG = {
  en: {
    hdrSub: 'Student Creative Studio',
    hdrBadge: 'Student Portal',
    heroTag: 'ðŸŽ¨ Creative Studio â€” For Students',
    heroTitle: 'Create Something New Every Month! ðŸŽ‰',
    heroSub: "Pick your project, watch a short video, create in Adobe Express, and show your teacher. It is that easy!",
    flow1: 'Pick Month',
    flow2: 'Watch Video',
    flow3: 'Make Art',
    flow4: 'Submit!',
    guideText: '<strong>Tap any box below</strong> to open it and start your creative work!',
    backBtn: 'Back to Sections',
    s1tag: 'Section 1',
    s1title: 'Monthly Creative Activities',
    s1desc: 'One fun art project for every month â€” January to December. Watch, make, submit!',
    s1hint: '12 Fun Challenges',
    s1btn: 'Open â†’',
    s2tag: 'Section 2',
    s2title: 'Skill Building Tracks',
    s2desc: 'Learn step-by-step: design posters, make videos, create social posts, and more!',
    s2hint: '5 Guided Tracks',
    s2btn: 'Open â†’',
    s3tag: 'Section 3',
    s3title: 'My Creative Portfolio',
    s3desc: 'See all the art you have made! Submit your work and share it with your teacher.',
    s3hint: 'Portfolio & Submissions',
    s3btn: 'Open â†’',
    s4tag: 'Section 4',
    s4title: 'How-To Videos',
    s4desc: 'Short videos that show you exactly how to use Adobe Express tools. Easy to follow!',
    s4hint: '5 Video Masterclasses',
    s4btn: 'Open â†’',
    s5tag: 'Section 5',
    s5title: 'Creative Tools',
    s5desc: 'Jump straight into making! Open posters, videos, cards, collages and more in Adobe Express.',
    s5hint: '8 Quick Launch Tools',
    s5btn: 'Open â†’',
    s6tag: 'Section 6',
    s6title: 'My Badges & Awards',
    s6desc: 'See what badges you have won! Keep doing projects to unlock more cool rewards.',
    s6hint: '6 Milestone Badges',
    s6btn: 'Open â†’',
    s7tag: 'Section 7 â€¢ DCAIS',
    s7title: 'DCAIS Activities',
    s7desc: 'Complete curriculum for Grades 3â€“8 from DCAIS. Select your grade, make posters, videos and earn your DCAIS certificate!',
    s7hint: '150+ Activities â€¢ Grades 3â€“8',
    s7btn: 'Open â†’'
  },
  hi: {
    hdrSub: 'à¤›à¤¾à¤¤à¥à¤° à¤•à¥à¤°à¤¿à¤à¤Ÿà¤¿à¤µ à¤¸à¥à¤Ÿà¥‚à¤¡à¤¿à¤¯à¥‹',
    hdrBadge: 'à¤›à¤¾à¤¤à¥à¤° à¤ªà¥‹à¤°à¥à¤Ÿà¤²',
    heroTag: 'ðŸŽ¨ à¤•à¥à¤°à¤¿à¤à¤Ÿà¤¿à¤µ à¤¸à¥à¤Ÿà¥‚à¤¡à¤¿à¤¯à¥‹ â€” à¤›à¤¾à¤¤à¥à¤°à¥‹à¤‚ à¤•à¥‡ à¤²à¤¿à¤',
    heroTitle: 'à¤¹à¤° à¤®à¤¹à¥€à¤¨à¥‡ à¤•à¥à¤› à¤¨à¤¯à¤¾ à¤¬à¤¨à¤¾à¤“! ðŸŽ‰',
    heroSub: 'à¤…à¤ªà¤¨à¤¾ à¤ªà¥à¤°à¥‹à¤œà¥‡à¤•à¥à¤Ÿ à¤šà¥à¤¨à¥‹, à¤›à¥‹à¤Ÿà¤¾ à¤µà¥€à¤¡à¤¿à¤¯à¥‹ à¤¦à¥‡à¤-à¥‹, Adobe Express à¤®à¥‡à¤‚ à¤¬à¤¨à¤¾à¤“, à¤”à¤° à¤Ÿà¥€à¤šà¤° à¤•à¥‹ à¤¦à¤¿à¤-à¤¾à¤“à¥¤ à¤¬à¤¸ à¤‡à¤¤à¤¨à¤¾ à¤¹à¥€!',
    flow1: 'à¤®à¤¹à¥€à¤¨à¤¾ à¤šà¥à¤¨à¥‹',
    flow2: 'à¤µà¥€à¤¡à¤¿à¤¯à¥‹ à¤¦à¥‡à¤-à¥‹',
    flow3: 'à¤†à¤°à¥à¤Ÿ à¤¬à¤¨à¤¾à¤“',
    flow4: 'à¤œà¤®à¤¾ à¤•à¤°à¥‹!',
    guideText: '<strong>à¤¨à¥€à¤šà¥‡ à¤•à¤¿à¤¸à¥€ à¤­à¥€ à¤¬à¥‰à¤•à¥à¤¸ à¤ªà¤° à¤Ÿà¥ˆà¤ª à¤•à¤°à¥‹</strong> à¤”à¤° à¤…à¤ªà¤¨à¤¾ à¤•à¥à¤°à¤¿à¤à¤Ÿà¤¿à¤µ à¤•à¤¾à¤® à¤¶à¥à¤°à¥‚ à¤•à¤°à¥‹!',
    backBtn: 'à¤µà¤¾à¤ªà¤¸ à¤œà¤¾à¤“',
    s1tag: 'à¤¸à¥‡à¤•à¥à¤¶à¤¨ 1',
    s1title: 'à¤®à¤¾à¤¸à¤¿à¤• à¤•à¥à¤°à¤¿à¤à¤Ÿà¤¿à¤µ à¤à¤•à¥à¤Ÿà¤¿à¤µà¤¿à¤Ÿà¥€',
    s1desc: 'à¤¹à¤° à¤®à¤¹à¥€à¤¨à¥‡ à¤à¤• à¤®à¤œà¤¼à¥‡à¤¦à¤¾à¤° à¤†à¤°à¥à¤Ÿ à¤ªà¥à¤°à¥‹à¤œà¥‡à¤•à¥à¤Ÿ â€” à¤œà¤¨à¤µà¤°à¥€ à¤¸à¥‡ à¤¦à¤¿à¤¸à¤‚à¤¬à¤° à¤¤à¤•à¥¤',
    s1hint: '12 à¤®à¤œà¤¼à¥‡à¤¦à¤¾à¤° à¤šà¥ˆà¤²à¥‡à¤‚à¤œ',
    s1btn: 'à¤-à¥‹à¤²à¥‹ â†’',
    s2tag: 'à¤¸à¥‡à¤•à¥à¤¶à¤¨ 2',
    s2title: 'à¤¸à¥à¤•à¤¿à¤² à¤Ÿà¥à¤°à¥ˆà¤•à¥à¤¸',
    s2desc: 'à¤ªà¥‹à¤¸à¥à¤Ÿà¤° à¤¬à¤¨à¤¾à¤“, à¤µà¥€à¤¡à¤¿à¤¯à¥‹ à¤¬à¤¨à¤¾à¤“, à¤¸à¥‹à¤¶à¤² à¤ªà¥‹à¤¸à¥à¤Ÿ à¤¬à¤¨à¤¾à¤“ â€” à¤•à¤¦à¤® à¤¦à¤° à¤•à¤¦à¤® à¤¸à¥€à¤-à¥‹!',
    s2hint: '5 à¤-à¤¾à¤‡à¤¡à¥‡à¤¡ à¤Ÿà¥à¤°à¥ˆà¤•à¥à¤¸',
    s2btn: 'à¤-à¥‹à¤²à¥‹ â†’',
    s3tag: 'à¤¸à¥‡à¤•à¥à¤¶à¤¨ 3',
    s3title: 'à¤®à¥‡à¤°à¤¾ à¤•à¥à¤°à¤¿à¤à¤Ÿà¤¿à¤µ à¤ªà¥‹à¤°à¥à¤Ÿà¤«à¥‹à¤²à¤¿à¤¯à¥‹',
    s3desc: 'à¤…à¤ªà¤¨à¥€ à¤¸à¤¾à¤°à¥€ à¤¬à¤¨à¤¾à¤ˆ à¤¹à¥à¤ˆ à¤•à¤²à¤¾à¤•à¥ƒà¤¤à¤¿à¤¯à¤¾à¤ à¤¦à¥‡à¤-à¥‹! à¤…à¤ªà¤¨à¤¾ à¤•à¤¾à¤® à¤œà¤®à¤¾ à¤•à¤°à¥‹ à¤”à¤° à¤Ÿà¥€à¤šà¤° à¤•à¥‹ à¤¦à¤¿à¤-à¤¾à¤“à¥¤',
    s3hint: 'à¤ªà¥‹à¤°à¥à¤Ÿà¤«à¥‹à¤²à¤¿à¤¯à¥‹ à¤”à¤° à¤¸à¤¬à¤®à¤¿à¤¶à¤¨',
    s3btn: 'à¤-à¥‹à¤²à¥‹ â†’',
    s4tag: 'à¤¸à¥‡à¤•à¥à¤¶à¤¨ 4',
    s4title: 'à¤•à¥ˆà¤¸à¥‡ à¤•à¤°à¥‡à¤‚ à¤µà¥€à¤¡à¤¿à¤¯à¥‹',
    s4desc: 'à¤›à¥‹à¤Ÿà¥‡ à¤µà¥€à¤¡à¤¿à¤¯à¥‹ à¤œà¥‹ à¤¦à¤¿à¤-à¤¾à¤¤à¥‡ à¤¹à¥ˆà¤‚ Adobe Express à¤•à¥‡ à¤Ÿà¥‚à¤²à¥à¤¸ à¤•à¥ˆà¤¸à¥‡ à¤‡à¤¸à¥à¤¤à¥‡à¤®à¤¾à¤² à¤•à¤°à¥‡à¤‚à¥¤',
    s4hint: '5 à¤µà¥€à¤¡à¤¿à¤¯à¥‹ à¤®à¤¾à¤¸à¥à¤Ÿà¤°à¤•à¥à¤²à¤¾à¤¸',
    s4btn: 'à¤-à¥‹à¤²à¥‹ â†’',
    s5tag: 'à¤¸à¥‡à¤•à¥à¤¶à¤¨ 5',
    s5title: 'à¤•à¥à¤°à¤¿à¤à¤Ÿà¤¿à¤µ à¤Ÿà¥‚à¤²à¥à¤¸',
    s5desc: 'à¤¸à¥€à¤§à¥‡ à¤¬à¤¨à¤¾à¤¨à¤¾ à¤¶à¥à¤°à¥‚ à¤•à¤°à¥‹! à¤ªà¥‹à¤¸à¥à¤Ÿà¤°, à¤µà¥€à¤¡à¤¿à¤¯à¥‹, à¤•à¤¾à¤°à¥à¤¡à¥à¤¸ à¤”à¤° à¤¬à¤¹à¥à¤¤ à¤•à¥à¤› Adobe Express à¤®à¥‡à¤‚ à¤¬à¤¨à¤¾à¤“à¥¤',
    s5hint: '8 à¤¤à¥à¤µà¤°à¤¿à¤¤ à¤²à¥‰à¤¨à¥à¤š à¤Ÿà¥‚à¤²à¥à¤¸',
    s5btn: 'à¤-à¥‹à¤²à¥‹ â†’',
    s6tag: 'à¤¸à¥‡à¤•à¥à¤¶à¤¨ 6',
    s6title: 'à¤®à¥‡à¤°à¥‡ à¤¬à¥ˆà¤œ à¤”à¤° à¤ªà¥à¤°à¤¸à¥à¤•à¤¾à¤°',
    s6desc: 'à¤¦à¥‡à¤-à¥‹ à¤¤à¥à¤®à¤¨à¥‡ à¤•à¥Œà¤¨ à¤¸à¥‡ à¤¬à¥ˆà¤œ à¤œà¥€à¤¤à¥‡ à¤¹à¥ˆà¤‚! à¤”à¤° à¤œà¤¼à¥à¤¯à¤¾à¤¦à¤¾ à¤ªà¥à¤°à¥‹à¤œà¥‡à¤•à¥à¤Ÿ à¤•à¤°à¥‹, à¤”à¤° à¤ªà¥à¤°à¤¸à¥à¤•à¤¾à¤° à¤ªà¤¾à¤“à¥¤',
    s6hint: '6 à¤®à¥€à¤² à¤•à¥‡ à¤ªà¤¤à¥à¤¥à¤° à¤•à¥‡ à¤¬à¥ˆà¤œ',
    s6btn: 'à¤-à¥‹à¤²à¥‹ â†’',
    s7tag: 'à¤¸à¥‡à¤•à¥à¤¶à¤¨ 7 â€¢ DCAIS',
    s7title: 'DCAIS à¤à¤•à¥à¤Ÿà¤¿à¤µà¤¿à¤Ÿà¥€à¤œà¤¼',
    s7desc: 'AIM à¤ªà¤¾à¤ à¥à¤¯à¤•à¥à¤°à¤® à¤•à¤•à¥à¤·à¤¾ 3 à¤¸à¥‡ 8 à¤¤à¤•à¥¤ à¤…à¤ªà¤¨à¥€ à¤•à¤•à¥à¤·à¤¾ à¤šà¥à¤¨à¥‡à¤‚, à¤ªà¥‹à¤¸à¥à¤Ÿà¤°, à¤µà¥€à¤¡à¤¿à¤¯à¥‹ à¤¬à¤¨à¤¾à¤à¤‚ à¤”à¤° DCAIS à¤ªà¥à¤°à¤®à¤¾à¤£à¤ªà¤¤à¥à¤° à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤•à¤°à¥‡à¤‚!',
    s7hint: '150+ à¤-à¤¤à¤¿à¤µà¤¿à¤§à¤¿à¤¯à¤¾à¤ â€¢ à¤•à¤•à¥à¤·à¤¾ 3â€“8',
    s7btn: 'à¤-à¥‹à¤²à¥‹ â†’'
  }
};

function toggleLang() {
  currentLang = (currentLang === 'en') ? 'hi' : 'en';
  var bEn = document.getElementById('langBtnEN');
  var bHi = document.getElementById('langBtnHI');
  if (bEn) bEn.classList.toggle('active', currentLang === 'en');
  if (bHi) bHi.classList.toggle('active', currentLang === 'hi');
  applyLang();
  if (location.hash === '#section-7') {
    var c = document.getElementById('secContent');
    if (c) c.innerHTML = renderDcaisSection();
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
  set('s1-tag', L.s1tag); set('s1-title', L.s1title); set('s1-desc', L.s1desc); set('s1-hint', L.s1hint); set('s1-btn', L.s1btn);
  set('s2-tag', L.s2tag); set('s2-title', L.s2title); set('s2-desc', L.s2desc); set('s2-hint', L.s2hint); set('s2-btn', L.s2btn);
  set('s3-tag', L.s3tag); set('s3-title', L.s3title); set('s3-desc', L.s3desc); set('s3-hint', L.s3hint); set('s3-btn', L.s3btn);
  set('s4-tag', L.s4tag); set('s4-title', L.s4title); set('s4-desc', L.s4desc); set('s4-hint', L.s4hint); set('s4-btn', L.s4btn);
  set('s5-tag', L.s5tag); set('s5-title', L.s5title); set('s5-desc', L.s5desc); set('s5-hint', L.s5hint); set('s5-btn', L.s5btn);
  set('s6-tag', L.s6tag); set('s6-title', L.s6title); set('s6-desc', L.s6desc); set('s6-hint', L.s6hint); set('s6-btn', L.s6btn);
  set('s7-tag', L.s7tag); set('s7-title', L.s7title); set('s7-desc', L.s7desc); set('s7-hint', L.s7hint); set('s7-btn', L.s7btn);
}

/* ===== MONTH DATA ===== */
var curMonth = 0;
var MONTHS = [
  { name: 'January', theme: 'Republic Day', activity: 'Republic Day Poster', desc: 'Make a colourful poster to celebrate Republic Day! Use bright red, white, and blue colours. Add the Indian flag and a patriotic message.', dur: '45 min', skills: ['Poster Design','Colour','Typography'], tutorial: 'https://www.youtube.com/results?search_query=adobe+express+poster+tutorial', create: 'https://express.adobe.com/sp/design/posters', submit: '#' },
  { name: 'February', theme: 'Friendship Day', activity: 'Friendship Greeting Card', desc: 'Make a lovely card for your best friend or family. Use hearts, nice colours, and a sweet message inside!', dur: '40 min', skills: ['Card Design','Colour Theory','Typography'], tutorial: 'https://www.youtube.com/results?search_query=adobe+express+card+tutorial', create: 'https://express.adobe.com/sp/design/cards', submit: '#' },
  { name: 'March', theme: 'Holi Festival', activity: 'Holi Fest Flyer', desc: 'Create a fun, colourful flyer for the Holi festival! Use lots of colours â€” pink, green, yellow â€” and write where and when your school Holi event is.', dur: '45 min', skills: ['Flyer Design','Vibrant Colours','Layout'], tutorial: 'https://www.youtube.com/results?search_query=adobe+express+flyer+tutorial', create: 'https://express.adobe.com/sp/design/flyers', submit: '#' },
  { name: 'April', theme: 'Earth Day', activity: 'Save the Earth Poster', desc: 'Make a poster that tells people how to save the Earth. Draw trees, water, or animals and write a message like "Plant More Trees!"', dur: '50 min', skills: ['Social Awareness','Poster Design','Illustration'], tutorial: 'https://www.youtube.com/results?search_query=adobe+express+poster+earth+day', create: 'https://express.adobe.com/sp/design/posters', submit: '#' },
  { name: 'May', theme: 'Mothers Day', activity: 'Mothers Day Card & Video', desc: 'Create a special card OR a short video message for your mom. Tell her why she is amazing! Share it with your family.', dur: '50 min', skills: ['Card Design','Video','Personal Message'], tutorial: 'https://www.youtube.com/results?search_query=adobe+express+mothers+day', create: 'https://express.adobe.com/sp/design/cards', submit: '#' },
  { name: 'June', theme: 'Yoga & Health', activity: 'International Yoga Day Post', desc: 'Make a social media post or poster about Yoga. Show a yoga pose or write about how yoga keeps us healthy.', dur: '40 min', skills: ['Health Awareness','Social Post Design','Layout'], tutorial: 'https://www.youtube.com/results?search_query=adobe+express+social+post', create: 'https://express.adobe.com/sp/design/social', submit: '#' },
  { name: 'July', theme: 'Independence Month', activity: 'Freedom Comic Strip', desc: 'Create a 4-panel comic strip about India freedom fighters. Use speech bubbles and bright illustrations.', dur: '60 min', skills: ['Comic Design','Storytelling','Illustration'], tutorial: 'https://www.youtube.com/results?search_query=adobe+express+comic+strip', create: 'https://express.adobe.com/sp/design/comics', submit: '#' },
  { name: 'August', theme: 'Independence Day', activity: 'Independence Day Celebration Video', desc: 'Make a short video (30-60 sec) to celebrate India Independence Day! Add photos, patriotic music, and your voice message.', dur: '60 min', skills: ['Video Editing','Narration','Music'], tutorial: 'https://www.youtube.com/results?search_query=adobe+express+video+tutorial', create: 'https://express.adobe.com/sp/design/videos', submit: '#' },
  { name: 'September', theme: 'Teachers Day', activity: 'Thank You Teacher Card', desc: 'Design a beautiful card to thank your favourite teacher! Add their name, a nice photo or illustration, and a message from your heart.', dur: '45 min', skills: ['Card Design','Personal Message','Typography'], tutorial: 'https://www.youtube.com/results?search_query=adobe+express+card', create: 'https://express.adobe.com/sp/design/cards', submit: '#' },
  { name: 'October', theme: 'Diwali Festive', activity: 'Diwali Greeting & Rangoli Design', desc: 'Create a Diwali greeting card with a beautiful digital rangoli design. Use gold, red, and orange colours. Wish everyone "Happy Diwali!"', dur: '55 min', skills: ['Festival Design','Colour','Cultural Art'], tutorial: 'https://www.youtube.com/results?search_query=adobe+express+diwali+poster', create: 'https://express.adobe.com/sp/design/cards', submit: '#' },
  { name: 'November', theme: 'My School', activity: 'School Brochure or Magazine Page', desc: 'Create a 1-page mini magazine or brochure about your school. Include school events, cool facts, and photos or illustrations!', dur: '55 min', skills: ['Layout Design','Content Writing','Brochure'], tutorial: 'https://www.youtube.com/results?search_query=adobe+express+brochure+tutorial', create: 'https://express.adobe.com/sp/design/flyers', submit: '#' },
  { name: 'December', theme: 'Year in Review', activity: 'My Creative Year Portfolio', desc: 'Look back at all 11 projects you made this year! Create a collage or presentation showing your 3 favourite works. You have come so far!', dur: '60 min', skills: ['Portfolio Design','Reflection','Collage'], tutorial: 'https://www.youtube.com/results?search_query=adobe+express+portfolio', create: 'https://express.adobe.com/sp/design/collages', submit: '#' }
];

function renderMonthSectionHtml() {
  var m = MONTHS[curMonth];
  var pillsHtml = MONTHS.map(function(mo, i) {
    return '<button class="mp' + (i === curMonth ? ' active' : '') + '" onclick="selectMonthTab(' + i + ')">' + mo.name + '</button>';
  }).join('');
  var cardHtml =
    '<div class="mcard">' +
      '<div class="mcard-row">' +
        '<span class="mcard-theme">' + m.theme + '</span>' +
        '<span class="mcard-dur">â± ' + m.dur + '</span>' +
      '</div>' +
      '<h3>âœ¨ ' + m.activity + '</h3>' +
      '<p>' + m.desc + '</p>' +
      '<div class="mcard-skills">' + m.skills.map(function(s){ return '<span class="mskill">' + s + '</span>'; }).join('') + '</div>' +
      '<div class="mcard-actions">' +
        '<a href="' + m.tutorial + '" target="_blank" class="btn btn-dark">â-¶ Watch Tutorial â†-</a>' +
        '<a href="' + m.create + '" target="_blank" class="btn btn-primary">ðŸŽ¨ Create in Adobe Express â†-</a>' +
        '<a href="' + m.submit + '" class="btn btn-outline">ðŸ“¤ Submit My Work</a>' +
      '</div>' +
    '</div>';
  return '<p style="font-size:.85rem;color:var(--ink-2);margin-bottom:14px;">Tap a month to see your activity:</p>' +
    '<div class="month-pills">' + pillsHtml + '</div>' +
    '<div id="activeMonthBox">' + cardHtml + '</div>';
}

function selectMonthTab(i) {
  curMonth = i;
  document.getElementById('secContent').innerHTML = renderMonthSectionHtml();
}

/* ===== FULL DCAIS (AIM) CONTROLLER ===== */
var selectedAimGrade = null;
var aimSearchQuery = '';

function renderDcaisSection() {
  var isHi = (currentLang === 'hi');
  
  var tipHtml =
    '<div class="aim-tip-box">' +
      '<div class="aim-tip-ico">ðŸ¼</div>' +
      '<div class="aim-tip-txt">' +
        '<strong>' + (isHi ? 'DCAIS à¤°à¤šà¤¨à¤¾à¤¤à¥à¤®à¤• à¤Ÿà¤¿à¤ª:' : 'AIM Creative Tip:') + '</strong> ' +
        (isHi ? 'à¤…à¤ªà¤¨à¥€ à¤•à¤•à¥à¤·à¤¾ à¤šà¥à¤¨à¥‡à¤‚ à¤”à¤° à¤µà¤¹ à¤-à¤¤à¤¿à¤µà¤¿à¤§à¤¿ à¤šà¥à¤¨à¥‡à¤‚ à¤œà¥‹ à¤†à¤ªà¤•à¥‹ à¤ªà¤¸à¤‚à¤¦ à¤¹à¥‹! à¤ªà¥à¤°à¤®à¤¾à¤£ à¤ªà¤¤à¥à¤° à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤•à¤°à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤ªà¥à¤°à¤¤à¤¿ à¤®à¤¾à¤¹ à¤•à¤® à¤¸à¥‡ à¤•à¤® à¤à¤• à¤-à¤¤à¤¿à¤µà¤¿à¤§à¤¿ à¤…à¤µà¤¶à¥à¤¯ à¤ªà¥‚à¤°à¥€ à¤•à¤°à¥‡à¤‚à¥¤' :
                'Pick your grade and select an activity that interests you! All students are advised to finish a minimum of one activity per month to earn the DCAIS certificate.') +
      '</div>' +
    '</div>';

  if (!selectedAimGrade) {
    var gradeCards = [
      { id: '3', nameEn: 'Grade 3', nameHi: 'à¤•à¤•à¥à¤·à¤¾ 3', count: '32 activities', countHi: '32 à¤-à¤¤à¤¿à¤µà¤¿à¤§à¤¿à¤¯à¤¾à¤' },
      { id: '4', nameEn: 'Grade 4', nameHi: 'à¤•à¤•à¥à¤·à¤¾ 4', count: '32 activities', countHi: '32 à¤-à¤¤à¤¿à¤µà¤¿à¤§à¤¿à¤¯à¤¾à¤' },
      { id: '5', nameEn: 'Grade 5', nameHi: 'à¤•à¤•à¥à¤·à¤¾ 5', count: '32 activities', countHi: '32 à¤-à¤¤à¤¿à¤µà¤¿à¤§à¤¿à¤¯à¤¾à¤' },
      { id: '6', nameEn: 'Grade 6', nameHi: 'à¤•à¤•à¥à¤·à¤¾ 6', count: '18 activities', countHi: '18 à¤-à¤¤à¤¿à¤µà¤¿à¤§à¤¿à¤¯à¤¾à¤' },
      { id: '7', nameEn: 'Grade 7', nameHi: 'à¤•à¤•à¥à¤·à¤¾ 7', count: '18 activities', countHi: '18 à¤-à¤¤à¤¿à¤µà¤¿à¤§à¤¿à¤¯à¤¾à¤' },
      { id: '8', nameEn: 'Grade 8', nameHi: 'à¤•à¤•à¥à¤·à¤¾ 8', count: '18 activities', countHi: '18 à¤-à¤¤à¤¿à¤µà¤¿à¤§à¤¿à¤¯à¤¾à¤' },
      { id: 'kb', nameEn: 'Kaushal Bodh', nameHi: 'à¤•à¥Œà¤¶à¤² à¤¬à¥‹à¤§', count: '18 projects', countHi: '18 à¤ªà¥à¤°à¥‹à¤œà¥‡à¤•à¥à¤Ÿà¥à¤¸' }
    ];

    var cardsGridHtml = '<div style="margin-bottom:14px;"><h3 style="font-size:1.2rem;font-weight:900;color:var(--ink);">' +
      (isHi ? 'à¤…à¤ªà¤¨à¥€ à¤•à¤•à¥à¤·à¤¾ à¤šà¥à¤¨à¥‡à¤‚:' : 'Select Your Grade') + '</h3></div>' +
      '<div class="aim-grade-cards">' +
      gradeCards.map(function(g) {
        return '<div class="aim-gc" onclick="selectAimGrade(&quot;' + g.id + '&quot;)">' +
          '<div class="aim-gc-icon">ðŸŽ“</div>' +
          '<h3>' + (isHi ? g.nameHi : g.nameEn) + '</h3>' +
          '<div class="aim-gc-cnt">' + (isHi ? g.countHi : g.count) + '</div>' +
          '<div class="aim-gc-btn">' + (isHi ? 'à¤•à¤•à¥à¤·à¤¾ à¤-à¥‹à¤²à¥‡à¤‚ â†’' : 'Explore Grade â†’') + '</div>' +
        '</div>';
      }).join('') +
      '</div>';

    return tipHtml + cardsGridHtml;
  }

  var activities = [];
  var gradeLabel = '';

  if (selectedAimGrade === 'kb') {
    gradeLabel = isHi ? 'à¤•à¥Œà¤¶à¤² à¤¬à¥‹à¤§ à¤ªà¥à¤°à¥‹à¤œà¥‡à¤•à¥à¤Ÿà¥à¤¸' : 'Kaushal Bodh Projects';
    var kbData = (window.DCAIS_DATA && window.DCAIS_DATA.kaushalBodh) ? window.DCAIS_DATA.kaushalBodh : {};
    ['grade 6','grade 7','grade 8'].forEach(function(gk) {
      if (kbData[gk]) {
        kbData[gk].forEach(function(item) {
          activities.push({
            name: item.projectName,
            skills: item.formOfWork + ' â€¢ ' + (item.expressActivity || 'Creative Project'),
            instructions: item.finalDeliverable || item.adobeIntegration || item.keyActivities,
            link: item.templateLink || 'https://express.adobe.com',
            journalLink: item.learningJournalLink,
            book: ''
          });
        });
      }
    });
  } else {
    gradeLabel = isHi ? ('à¤•à¤•à¥à¤·à¤¾ ' + selectedAimGrade) : ('Grade ' + selectedAimGrade);
    var key = 'Grade ' + selectedAimGrade;
    if (isHi && (selectedAimGrade === '6' || selectedAimGrade === '7' || selectedAimGrade === '8')) {
      key = 'Grade ' + selectedAimGrade + ' (Hindi)';
    }
    activities = (window.DCAIS_DATA && window.DCAIS_DATA.aimActivities && window.DCAIS_DATA.aimActivities[key]) || [];
  }

  if (aimSearchQuery) {
    var q = aimSearchQuery.toLowerCase();
    activities = activities.filter(function(a) {
      return (a.name && a.name.toLowerCase().indexOf(q) !== -1) ||
             (a.skills && a.skills.toLowerCase().indexOf(q) !== -1) ||
             (a.instructions && a.instructions.toLowerCase().indexOf(q) !== -1);
    });
  }

  var navHtml =
    '<div class="aim-top-nav">' +
      '<div style="display:flex;align-items:center;gap:10px;">' +
        '<button class="aim-back-grade" onclick="selectAimGrade(null)">â† ' + (isHi ? 'à¤¸à¤­à¥€ à¤•à¤•à¥à¤·à¤¾à¤à¤‚' : 'All Grades') + '</button>' +
        '<span style="font-size:.92rem;font-weight:900;color:var(--ink);">' + gradeLabel + ' (' + activities.length + ' ' + (isHi ? 'à¤-à¤¤à¤¿à¤µà¤¿à¤§à¤¿à¤¯à¤¾à¤‚' : 'activities') + ')</span>' +
      '</div>' +
      '<div class="aim-search">' +
        '<input type="text" placeholder="' + (isHi ? 'à¤-à¤¤à¤¿à¤µà¤¿à¤§à¤¿ à¤-à¥‹à¤œà¥‡à¤‚...' : 'Search activity...') + '" value="' + aimSearchQuery + '" oninput="searchAimActivities(this.value)">' +
      '</div>' +
    '</div>';

  var actGridHtml = '';
  if (activities.length === 0) {
    actGridHtml = '<div style="background:var(--surface-2);border-radius:var(--radius);padding:32px;text-align:center;color:var(--ink-3);">' +
      '<h3>' + (isHi ? 'à¤•à¥‹à¤ˆ à¤-à¤¤à¤¿à¤µà¤¿à¤§à¤¿ à¤¨à¤¹à¥€à¤‚ à¤®à¤¿à¤²à¥€' : 'No activities found') + '</h3>' +
      '<p style="font-size:.85rem;margin-top:6px;">' + (isHi ? 'à¤•à¥ƒà¤ªà¤¯à¤¾ à¤…à¤ªà¤¨à¤¾ à¤-à¥‹à¤œ à¤¶à¤¬à¥à¤¦ à¤¬à¤¦à¤²à¥‡à¤‚à¥¤' : 'Try clearing your search query.') + '</p>' +
    '</div>';
  } else {
    actGridHtml = '<div class="aim-act-grid">' +
      activities.map(function(act, idx) {
        var numBadge = (isHi ? 'à¤-à¤¤à¤¿à¤µà¤¿à¤§à¤¿ ' : 'Activity ') + (act.col || (idx + 1));
        var templateBtn = act.link ?
          '<a href="' + act.link + '" target="_blank" class="btn btn-primary" style="font-size:.76rem;padding:7px 14px;">ðŸŽ¨ ' + (isHi ? 'à¤Ÿà¥‡à¤®à¥à¤ªà¤²à¥‡à¤Ÿ à¤-à¥‹à¤²à¥‡à¤‚ â†-' : 'Open Template â†-') + '</a>' :
          '<a href="https://express.adobe.com" target="_blank" class="btn btn-primary" style="font-size:.76rem;padding:7px 14px;">ðŸŽ¨ ' + (isHi ? 'Express à¤-à¥‹à¤²à¥‡à¤‚ â†-' : 'Open in Express â†-') + '</a>';
        
        var bookBtn = act.book ?
          '<a href="' + act.book + '" target="_blank" class="btn btn-ghost" style="font-size:.74rem;padding:6px 12px;">ðŸ“- ' + (isHi ? 'à¤ªà¥à¤¸à¥à¤¤à¤• à¤•à¤¾ à¤¸à¥à¤•à¥à¤°à¥€à¤¨à¤¶à¥‰à¤Ÿ â†-' : 'Book Screenshot â†-') + '</a>' : '';

        var submitBtn = '<button class="btn btn-empty" style="font-size:.74rem;padding:6px 12px;" onclick="return false;" title="Teacher will provide the submission link soon">ðŸ“¤ ' + (isHi ? 'à¤ªà¥à¤°à¥‹à¤œà¥‡à¤•à¥à¤Ÿ à¤œà¤®à¤¾ à¤•à¤°à¥‡à¤‚' : 'Submit Activity Link') + '</button>';

        return '<div class="aim-card">' +
          '<div>' +
            '<div class="aim-badge">' + numBadge + '</div>' +
            '<h4 class="aim-title">' + act.name + '</h4>' +
            (act.skills ? '<div class="aim-skills">âš¡ ' + act.skills + '</div>' : '') +
            (act.instructions ? '<div class="aim-instr">' + act.instructions + '</div>' : '') +
          '</div>' +
          '<div class="aim-actions">' +
            templateBtn +
            bookBtn +
            submitBtn +
          '</div>' +
        '</div>';
      }).join('') +
    '</div>';
  }

  var subNotice =
    '<div style="background:var(--surface-2);border:1.5px dashed var(--border);border-radius:var(--radius);padding:14px;text-align:center;margin-top:20px;">' +
      '<p style="font-size:.8rem;color:var(--ink-3);">ðŸ“Œ ' +
      (isHi ? 'à¤¸à¤¬à¤®à¤¿à¤¶à¤¨ à¤²à¤¿à¤‚à¤• à¤†à¤ªà¤•à¥‡ à¤¶à¤¿à¤•à¥à¤·à¤• à¤¦à¥à¤µà¤¾à¤°à¤¾ à¤¬à¤¾à¤¦ à¤®à¥‡à¤‚ à¤…à¤ªà¤²à¥‹à¤¡ à¤•à¤¿à¤¯à¤¾ à¤œà¤¾à¤à¤-à¤¾à¥¤ <strong>à¤ªà¥à¤°à¥‹à¤œà¥‡à¤•à¥à¤Ÿ à¤œà¤®à¤¾ à¤•à¤°à¥‡à¤‚</strong> à¤¬à¤Ÿà¤¨ à¤œà¤²à¥à¤¦ à¤¸à¤•à¥à¤°à¤¿à¤¯ à¤¹à¥‹à¤-à¤¾à¥¤' :
              'Submission link will be uploaded by your teacher later. The <strong>Submit Activity Link</strong> buttons will become active then.') +
      '</p>' +
    '</div>';

  return tipHtml + navHtml + actGridHtml + subNotice;
}

function selectAimGrade(g) {
  selectedAimGrade = g;
  aimSearchQuery = '';
  document.getElementById('secContent').innerHTML = renderDcaisSection();
}

function searchAimActivities(q) {
  aimSearchQuery = q;
  document.getElementById('secContent').innerHTML = renderDcaisSection();
}

/* ===== SECTIONS DATA ===== */
var STUDENT_SECTIONS_DATA = {
  '1': {
    num: 'ðŸ“…',
    tag: 'Section 1 â€¢ Monthly Activities',
    title: 'Monthly Creative Activities',
    desc: 'Pick your month, watch the tutorial video, make your art in Adobe Express, and submit it!',
    render: function() { return renderMonthSectionHtml(); }
  },
  '2': {
    num: 'ðŸŽ¯',
    tag: 'Section 2 â€¢ Skill Tracks',
    title: 'Skill Building Tracks',
    desc: 'Learn specific creative skills step by step. Start simple and level up every week!',
    render: function() {
      return '<div class="rg">' +
        '<div class="rc"><img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=100&fit=crop&q=80" class="rc-thumb" crossorigin="anonymous" alt=""><div><div class="rc-badge">Design</div><h4>Poster &amp; Flyer Design</h4><p>Learn how to pick colours, use big text, and make eye-catching posters for school events!</p><div class="sbar"><div class="sbar-fill" style="width:75%"></div></div></div><a href="https://express.adobe.com/sp/design/posters" target="_blank" class="btn btn-primary">Start â†’</a></div>' +
        '<div class="rc"><img src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=100&fit=crop&q=80" class="rc-thumb" crossorigin="anonymous" alt=""><div><div class="rc-badge">Video</div><h4>Make Fun Videos</h4><p>Make short video clips, add music and voice, and share your story with the world!</p><div class="sbar"><div class="sbar-fill" style="width:50%"></div></div></div><a href="https://express.adobe.com/sp/design/videos" target="_blank" class="btn btn-primary">Start â†’</a></div>' +
        '<div class="rc"><img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=100&fit=crop&q=80" class="rc-thumb" crossorigin="anonymous" alt=""><div><div class="rc-badge">Social</div><h4>Social Media Posts</h4><p>Design cool Instagram posts and stories. Make your message look amazing!</p><div class="sbar"><div class="sbar-fill" style="width:35%"></div></div></div><a href="https://express.adobe.com/sp/design/social" target="_blank" class="btn btn-primary">Start â†’</a></div>' +
        '<div class="rc"><img src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?w=400&h=100&fit=crop&q=80" class="rc-thumb" crossorigin="anonymous" alt=""><div><div class="rc-badge">Typography</div><h4>Cool Text &amp; Lettering</h4><p>Make words look beautiful! Try different fonts, sizes, and text effects.</p><div class="sbar"><div class="sbar-fill" style="width:60%"></div></div></div><a href="https://express.adobe.com" target="_blank" class="btn btn-primary">Start â†’</a></div>' +
        '<div class="rc"><img src="https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?w=400&h=100&fit=crop&q=80" class="rc-thumb" crossorigin="anonymous" alt=""><div><div class="rc-badge">Illustration</div><h4>Digital Drawing &amp; Art</h4><p>Create your own digital drawings, stickers, and original artwork using Adobe tools.</p><div class="sbar"><div class="sbar-fill" style="width:20%"></div></div></div><a href="https://express.adobe.com" target="_blank" class="btn btn-primary">Start â†’</a></div>' +
      '</div>';
    }
  },
  '3': {
    num: 'ðŸ-¼ï¸',
    tag: 'Section 3 â€¢ My Portfolio',
    title: 'My Creative Portfolio',
    desc: 'All your art in one place! See how much you have made and share it with your teacher.',
    render: function() {
      return '<div class="pstats">' +
        '<div class="pstat"><div class="pstat-n">9/12</div><div class="pstat-l">Months Done</div></div>' +
        '<div class="pstat"><div class="pstat-n">83%</div><div class="pstat-l">Work Submitted</div></div>' +
        '<div class="pstat"><div class="pstat-n">3/6</div><div class="pstat-l">Badges Won</div></div>' +
        '<div class="pstat"><div class="pstat-n">14</div><div class="pstat-l">Projects Saved</div></div>' +
      '</div>' +
      '<div class="rg">' +
        '<div class="rc"><img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=100&fit=crop&q=80" class="rc-thumb" crossorigin="anonymous" alt=""><div><div class="rc-badge">Submit</div><h4>Send My Project</h4><p>Upload your finished Adobe Express project link or file for your teacher to see and grade.</p></div><a href="https://docs.google.com/forms/d/e/1FAIpQLScEzxzVqZp3ivr-C18TAimHJV-hXIFzVaVmR-q7Ab-031xVQA/viewform?usp=header" target="_blank" class="btn btn-primary">Submit Project â†’</a></div>' +
        '<div class="rc"><img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=100&fit=crop&q=80" class="rc-thumb" crossorigin="anonymous" alt=""><div><div class="rc-badge">Library</div><h4>See All My Work</h4><p>Browse all the posters, cards, and videos you have made this year!</p></div><a href="https://express.adobe.com" target="_blank" class="btn btn-outline">Open Library â†’</a></div>' +
        '<div class="rc"><img src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=100&fit=crop&q=80" class="rc-thumb" crossorigin="anonymous" alt=""><div><div class="rc-badge">Share</div><h4>Share With Friends</h4><p>Get a link to show your best art to your friends and family. They will love it!</p></div><a href="https://express.adobe.com" target="_blank" class="btn btn-outline">Share â†’</a></div>' +
      '</div>';
    }
  },
  '4': {
    num: 'ðŸŽ¬',
    tag: 'Section 4 â€¢ Video Tutorials',
    title: 'How-To Videos',
    desc: 'Watch short videos to learn how to use Adobe Express. Follow along and make something amazing!',
    render: function() {
      return '<div class="rg">' +
        '<div class="rc"><img src="https://images.unsplash.com/photo-1581726690015-c9861fa5057f?w=400&h=100&fit=crop&q=80" class="rc-thumb" crossorigin="anonymous" alt=""><div><div class="rc-badge">Beginner â€¢ 5 min</div><h4>First Steps in Adobe Express</h4><p>Tour the workspace, find the basic tools, and make your first design in 5 minutes!</p></div><a href="https://www.youtube.com/results?search_query=adobe+express+beginner+tutorial" target="_blank" class="btn btn-dark">â-¶ Watch â†’</a></div>' +
        '<div class="rc"><img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=100&fit=crop&q=80" class="rc-thumb" crossorigin="anonymous" alt=""><div><div class="rc-badge">Easy â€¢ 8 min</div><h4>Make a School Poster</h4><p>Learn how to pick colours and make a beautiful poster for your school notice board!</p></div><a href="https://www.youtube.com/results?search_query=adobe+express+poster+tutorial" target="_blank" class="btn btn-dark">â-¶ Watch â†’</a></div>' +
        '<div class="rc"><img src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=100&fit=crop&q=80" class="rc-thumb" crossorigin="anonymous" alt=""><div><div class="rc-badge">Medium â€¢ 12 min</div><h4>Make a Short Video</h4><p>Add music, your voice, and animated text to make a really cool short video!</p></div><a href="https://www.youtube.com/results?search_query=adobe+express+video+tutorial" target="_blank" class="btn btn-dark">â-¶ Watch â†’</a></div>' +
        '<div class="rc"><img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=100&fit=crop&q=80" class="rc-thumb" crossorigin="anonymous" alt=""><div><div class="rc-badge">Fun â€¢ 10 min</div><h4>Animated Stickers &amp; Text</h4><p>Make things move! Add cool animations to your designs and share as GIFs.</p></div><a href="https://www.youtube.com/results?search_query=adobe+express+animation+tutorial" target="_blank" class="btn btn-dark">â-¶ Watch â†’</a></div>' +
        '<div class="rc"><img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=100&fit=crop&q=80" class="rc-thumb" crossorigin="anonymous" alt=""><div><div class="rc-badge">Advanced â€¢ 15 min</div><h4>Design Your Own Logo</h4><p>Create a personal logo and brand mark. Make it look like a real company or brand!</p></div><a href="https://www.youtube.com/results?search_query=adobe+express+logo+tutorial" target="_blank" class="btn btn-dark">â-¶ Watch â†’</a></div>' +
      '</div>';
    }
  },
  '5': {
    num: 'ðŸ› ï¸',
    tag: 'Section 5 â€¢ Creative Tools',
    title: 'Jump In and Create!',
    desc: 'Tap any tool to start making right now. No need to wait â€” just pick and create!',
    render: function() {
      return '<div class="tools">' +
        '<a href="https://express.adobe.com/sp/design/posters" target="_blank" class="tool"><div class="tool-ico">ðŸª§</div><h4>Posters</h4><span>Flyers &amp; Art</span></a>' +
        '<a href="https://express.adobe.com/sp/design/videos" target="_blank" class="tool"><div class="tool-ico">ðŸ“¹</div><h4>Videos</h4><span>Clips &amp; Reels</span></a>' +
        '<a href="https://express.adobe.com/sp/design/cards" target="_blank" class="tool"><div class="tool-ico">ðŸ’Œ</div><h4>Cards</h4><span>Greetings</span></a>' +
        '<a href="https://express.adobe.com/sp/design/collages" target="_blank" class="tool"><div class="tool-ico">ðŸ-¼ï¸</div><h4>Collages</h4><span>Photo Grids</span></a>' +
        '<a href="https://express.adobe.com/sp/tools/remove-background" target="_blank" class="tool"><div class="tool-ico">âœ‚ï¸</div><h4>Remove BG</h4><span>1-Click Clear</span></a>' +
        '<a href="https://express.adobe.com/sp/design/bookcovers" target="_blank" class="tool"><div class="tool-ico">ðŸ“š</div><h4>Book Covers</h4><span>Novel Layout</span></a>' +
        '<a href="https://express.adobe.com/sp/design/comics" target="_blank" class="tool"><div class="tool-ico">ðŸ¦¸</div><h4>Comics</h4><span>4-Panel Strips</span></a>' +
        '<a href="https://express.adobe.com/sp/design/social" target="_blank" class="tool"><div class="tool-ico">ðŸ“±</div><h4>Social Posts</h4><span>Campaigns</span></a>' +
      '</div>' +
      '<div style="margin-top:24px;text-align:center">' +
        '<a href="https://express.adobe.com" target="_blank" class="btn btn-primary" style="padding:12px 28px;font-size:.9rem;">ðŸš€ Open Full Adobe Express â†-</a>' +
      '</div>';
    }
  },
  '6': {
    num: 'ðŸ†',
    tag: 'Section 6 â€¢ My Badges',
    title: 'My Badges &amp; Awards',
    desc: 'You earn badges by completing projects! Keep going to unlock more cool awards.',
    render: function() {
      return '<div class="ach-grid">' +
        '<div class="ac earned"><div class="ac-icon">âœ“</div><h4>First Project Done!</h4><p>You finished your very first creative challenge. Amazing start!</p><span class="ac-tag">Earned âœ“</span></div>' +
        '<div class="ac earned"><div class="ac-icon">ðŸ”¥</div><h4>3-Month Streak</h4><p>You submitted 3 months in a row! Great job keeping up!</p><span class="ac-tag">Earned âœ“</span></div>' +
        '<div class="ac earned"><div class="ac-icon">ðŸ“</div><h4>Portfolio Builder</h4><p>You saved 5 or more works to your portfolio. Well done!</p><span class="ac-tag">Earned âœ“</span></div>' +
        '<div class="ac locked"><div class="ac-icon">ðŸ”’</div><h4>Half-Year Creator</h4><p>Do 6 monthly projects to unlock this badge!</p><span class="ac-tag">Locked</span></div>' +
        '<div class="ac locked"><div class="ac-icon">ðŸ”’</div><h4>Year Champion</h4><p>Complete all 12 monthly challenges to win this badge!</p><span class="ac-tag">Locked</span></div>' +
        '<div class="ac locked"><div class="ac-icon">ðŸ”’</div><h4>Master Creator</h4><p>Get top marks across all your submissions to unlock this!</p><span class="ac-tag">Locked</span></div>' +
      '</div>';
    }
  },
  '7': {
    num: 'ðŸŒŸ',
    tag: 'Section 7 â€¢ DCAIS Activities',
    title: 'DCAIS Activities (AIM Curriculum)',
    desc: 'Complete curriculum for Grades 3â€“8 from AIM. Select your grade, complete activities, and earn your DCAIS certificate!',
    render: function() { return renderDcaisSection(); }
  }
};

/* ===== NAVIGATION CONTROLLER ===== */
function openSection(num) {
  var data = STUDENT_SECTIONS_DATA[num];
  if (!data) return;
  location.hash = '#section-' + num;
  var crumb = document.getElementById('crumbName');
  if (crumb) crumb.innerHTML = data.tag;
  var badge = document.getElementById('secBadge');
  if (badge) badge.innerHTML = data.num;
  var tag = document.getElementById('secTag');
  if (tag) tag.innerHTML = data.tag;
  var title = document.getElementById('secTitle');
  if (title) title.innerHTML = data.title;
  var desc = document.getElementById('secDesc');
  if (desc) desc.innerHTML = data.desc;
  var content = document.getElementById('secContent');
  if (content) content.innerHTML = data.render();

  var keys = Object.keys(STUDENT_SECTIONS_DATA);
  var idx = keys.indexOf(num);
  var nextPrevHtml = '';
  if (idx > 0) nextPrevHtml += '<button class="btn btn-ghost" onclick="openSection(&quot;' + keys[idx-1] + '&quot;)">â† Prev Section</button> ';
  if (idx < keys.length-1) nextPrevHtml += '<button class="btn btn-primary" onclick="openSection(&quot;' + keys[idx+1] + '&quot;)">Next Section â†’</button>';
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
    var num = hash.replace('#section-', '');
    if (STUDENT_SECTIONS_DATA[num]) {
      openSection(num);
      return;
    }
  }
  showDashboard();
});

window.addEventListener('DOMContentLoaded', function() {
  var hash = location.hash;
  if (hash.indexOf('#section-') === 0) {
    var num = hash.replace('#section-', '');
    if (STUDENT_SECTIONS_DATA[num]) {
      openSection(num);
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
window.selectMonthTab = selectMonthTab;
window.selectAimGrade = selectAimGrade;
window.searchAimActivities = searchAimActivities;

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

console.log('Student Creative Studio initialized successfully.');
