
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
    sBtag:'Section B', sBtitle:'CPD Modules', sBdesc:'6 accredited professional development modules (CPD 01 to 06) totaling 20 training hours.', sBhint:'20 Hours Training', sBbtn:'Open &rarr;',
    sCtag:'Section C • DCAIS', sCtitle:'Student DCAIS Activities', sCdesc:'Monitor what DCAIS activities your students are doing across Grades 3–8. Inspect curriculum instructions and templates.', sChint:'Grades 3–8 Activities', sCbtn:'Open &rarr;',
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
    sBtag:'सेक्शन B', sBtitle:'CPD मॉड्यूल', sBdesc:'6 मान्यता प्राप्त प्रशिक्षण मॉड्यूल — CPD 01 से 06 — कुल 20 घंटे।', sBhint:'20 घंटे प्रशिक्षण', sBbtn:'खोलें &rarr;',
    sCtag:'सेक्शन C • DCAIS', sCtitle:'छात्र DCAIS गतिविधियाँ', sCdesc:'देखें कक्षा 3 से 8 तक आपके छात्र कौन सी DCAIS गतिविधियाँ कर रहे हैं।', sChint:'कक्षा 3–8 गतिविधियाँ', sCbtn:'खोलें &rarr;',
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

/* ===== CPD DATA (20 HOURS • 6 MODULES READY • 4 PENDING • TOTAL 10) ===== */
var CPD_RECORDINGS_HUB_URL = 'https://drive.google.com/drive/folders/1BeRQWOL4WCnDoKfScvP6hFcqVl7JKsj8?usp=sharing';
var CPD_CALENDAR_URL = 'https://new.express.adobe.com/webpage/kCbIh0WBMLVse';

var CPD_MODULES = [
  {
    code: 'CPD-01',
    chapter: 'Level A | Chapter-1',
    chapterHi: 'लेवल A | अध्याय-1',
    titleEn: 'Implementation of NEP 2020 & SDGs in Schools through Digital Creativity',
    titleHi: 'डिजिटल रचनात्मकता के माध्यम से NEP 2020 एवं SDGs का क्रियान्वयन',
    duration: '3.5 hrs',
    durationHi: '3.5 घंटे',
    levelEn: 'Foundation (Level A)',
    levelHi: 'बुनियाद (लेवल A)',
    descEn: 'Introduction to Adobe Express for project-based learning, cross-curricular integration, aligning lesson plans with NEP 2020 and SDG goals, and Generative AI in the classroom.',
    descHi: 'प्रोजेक्ट-आधारित शिक्षण, पाठ्यचर्या एकीकरण, NEP 2020 और SDG लक्ष्यों के साथ पाठ योजनाओं का संयोजन और कक्षा में जनरेटिव AI का उपयोग।',
    outcomesEn: [
      'Align lesson plans with NEP 2020 & SDG principles (Quality Education, Climate Action, Gender Equality)',
      'Introduction to Adobe Express for project-based learning and digital portfolios',
      'Learn to use Generative AI in the classroom to enhance teaching strategies'
    ],
    outcomesHi: [
      'NEP 2020 और SDG सिद्धांतों (गुणवत्तापूर्ण शिक्षा, जलवायु कार्य, लैंगिक समानता) के साथ पाठ योजनाओं का संयोजन',
      'प्रोजेक्ट-आधारित शिक्षण और डिजिटल पोर्टफोलियो के लिए Adobe Express का परिचय',
      'शिक्षण रणनीतियों को बढ़ाने के लिए कक्षा में जनरेटिव AI का उपयोग'
    ],
    courseLink: 'https://new.express.adobe.com/publishedV2/urn:aaid:sc:VA6C2:5023fc43-fdb6-4e41-a7aa-399b5cb69347?promoid=Y69SGM5H&mv=other',
    recordingLink: 'https://drive.google.com/file/d/1Z5jV25HlniKZAscEWHY86UEzVwIATCCC/view?usp=sharing',
    week1Assignment: 'https://docs.google.com/forms/d/e/1FAIpQLSfinGi6YEIC8sCKYzBZiZOXJWq3MmpQfCYGY6x-Tn6VjxbYwA/viewform',
    week1LabelEn: 'Submit Assignment (Week-1)',
    week1LabelHi: 'असाइनमेंट जमा करें (सप्ताह-1)',
    week2Assignment: 'https://docs.google.com/forms/d/e/1FAIpQLSfCC3fwmPoZzasOOD-l0Ger2y4moQnfI8CPu5mO0HhgN8fZvg/viewform?usp=dialog',
    week2LabelEn: 'Submit Assignment (Week-2)',
    week2LabelHi: 'असाइनमेंट जमा करें (सप्ताह-2)'
  },
  {
    code: 'CPD-02',
    chapter: 'Level A | Chapter-2',
    chapterHi: 'लेवल A | अध्याय-2',
    titleEn: 'Enhance Classroom Organization with Adobe Express Lesson Plans & Calendars',
    titleHi: 'Adobe Express पाठ योजनाओं और कैलेंडरों से कक्षा संगठन सुदृढ़ करना',
    duration: '3.5 hrs',
    durationHi: '3.5 घंटे',
    levelEn: 'Foundation (Level A)',
    levelHi: 'बुनियाद (लेवल A)',
    descEn: 'Design and customize visually engaging lesson plans using Adobe Express, improve clarity and organization, and build interactive annual activity calendars on Adobe Webpages.',
    descHi: 'Adobe Express का उपयोग करके आकर्षक पाठ योजनाएं तैयार करें, स्पष्टता और संगठन में सुधार करें, और Adobe Webpages पर इंटरैक्टिव वार्षिक कैलेंडर बनाएं।',
    outcomesEn: [
      'Design & customize visually engaging lesson plans in Adobe Express',
      'Design digital calendars to streamline scheduling and track academic events',
      'Design Annual Activity Calendars on Adobe Webpages integrating lesson roadmaps'
    ],
    outcomesHi: [
      'Adobe Express में आकर्षक पाठ योजनाएं डिजाइन और कस्टमाइज़ करना',
      'शैक्षणिक कार्यक्रमों को ट्रैक करने और शेड्यूल सुव्यवस्थित करने के लिए डिजिटल कैलेंडर डिजाइन करना',
      'पाठ योजनाओं को एकीकृत करते हुए Adobe Webpages पर वार्षिक गतिविधि कैलेंडर बनाना'
    ],
    courseLink: 'https://new.express.adobe.com/publishedV2/urn:aaid:sc:VA6C2:3e519e66-75af-48d9-8dc6-f1d53c26ad96?promoid=Y69SGM5H&mv=other',
    recordingLink: 'https://drive.google.com/file/d/1fYm4v_44uNc0BCOZd_2F-4HIM5__oJ8E/view?usp=sharing',
    week1Assignment: 'https://docs.google.com/forms/d/e/1FAIpQLSez25EvvIfSasZo6_EuSMhq8E-aCSPvA2Sb_2GdeQIz_vjgtA/viewform?usp=sharing&ouid=100381120956091401245',
    week1LabelEn: 'Submit Assignment 1',
    week1LabelHi: 'असाइनमेंट 1 जमा करें',
    week2Assignment: 'https://docs.google.com/forms/d/e/1FAIpQLSchBRxr4rMtxbR529B0uB2JN23zUjv4lwvjRssCrhTR7Hyc2Q/viewform?usp=header',
    week2LabelEn: 'Submit Assignment 2',
    week2LabelHi: 'असाइनमेंट 2 जमा करें'
  },
  {
    code: 'CPD-03',
    chapter: 'Level A | Chapter-3',
    chapterHi: 'लेवल A | अध्याय-3',
    titleEn: 'Socio-Emotional Learning (SEL) in the Classroom Using Adobe Express',
    titleHi: 'Adobe Express द्वारा कक्षा में सामाजिक-भावनात्मक शिक्षण (SEL)',
    duration: '3.5 hrs',
    durationHi: '3.5 घंटे',
    levelEn: 'Foundation (Level A)',
    levelHi: 'बुनियाद (लेवल A)',
    descEn: 'Understand SEL core competencies (Self-Awareness, Relationship Skills), explore the role of digital creativity in emotional expression, and utilize creative collaboration tools.',
    descHi: 'SEL प्रमुख दक्षताओं (आत्म-जागरूकता, संबंध कौशल) को समझें, भावनात्मक अभिव्यक्ति में डिजिटल रचनात्मकता की भूमिका और सहयोगी टूल का उपयोग करें।',
    outcomesEn: [
      'Understand SEL Core Competencies to integrate SEL strategies into activities',
      'Fostering emotional intelligence: digital storytelling & reflective journals',
      'Utilize creative tools for student collaboration and relationship-building'
    ],
    outcomesHi: [
      'गतिविधियों में SEL रणनीतियों को एकीकृत करने के लिए SEL प्रमुख दक्षताओं को समझना',
      'भावनात्मक बुद्धिमत्ता को बढ़ावा: डिजिटल स्टोरीटेलिंग और चिंतनशील पत्रिकाएं',
      'छात्र सहयोग और संबंध-निर्माण के लिए रचनात्मक टूल्स का उपयोग'
    ],
    courseLink: 'https://new.express.adobe.com/id/urn:aaid:sc:VA6C2:85668525-2093-52ea-a732-30fbaee8b5d5?invite=true&accept=true%3Fpreload%3Dsharesheet&promoid=Z2G1FQKR&mv=other',
    recordingLink: 'https://drive.google.com/file/d/1-YnZlFJ7v6T30yD_iWxTR1EzpEb2LOe7/view?usp=sharing',
    week1Assignment: 'https://docs.google.com/forms/d/e/1FAIpQLSdDAUiVtoqTkT8CelqQHkD0ZnAZEFn6kqNh5PTRRa7tosx2uw/viewform?usp=sharing&ouid=100381120956091401245',
    week1LabelEn: 'Submit Assignment (Week-1)',
    week1LabelHi: 'असाइनमेंट जमा करें (सप्ताह-1)',
    week2Assignment: 'https://forms.gle/hFnSNvWabNRtVCWa9',
    week2LabelEn: 'Submit Assignment (Week-2)',
    week2LabelHi: 'असाइनमेंट जमा करें (सप्ताह-2)'
  },
  {
    code: 'CPD-04',
    chapter: 'Level A | Chapter-4',
    chapterHi: 'लेवल A | अध्याय-4',
    titleEn: 'Designing Formative Assessments and Holiday Assignments',
    titleHi: 'रचनात्मक मूल्यांकन और अवकाश गृहकार्य तैयार करना',
    duration: '3.0 hrs',
    durationHi: '3.0 घंटे',
    levelEn: 'Foundation (Level A)',
    levelHi: 'बुनियाद (लेवल A)',
    descEn: 'Learn to create interactive and visually engaging formative assessments for 360-degree holistic evaluation aligned to NEP 2020, and develop creative holiday assignments.',
    descHi: 'NEP 2020 के अनुरूप 360-डिग्री समग्र मूल्यांकन के लिए इंटरैक्टिव रचनात्मक मूल्यांकन और छुट्टियों के लिए रचनात्मक प्रोजेक्ट तैयार करें।',
    outcomesEn: [
      'Create interactive formative assessments for 360-degree holistic evaluation',
      'Design engaging holiday assignments encouraging comprehensive skill development',
      'Publish guided creative activities on Adobe Express for the classroom'
    ],
    outcomesHi: [
      '360-डिग्री समग्र मूल्यांकन के लिए इंटरैक्टिव रचनात्मक मूल्यांकन तैयार करना',
      'कौशल विकास को प्रोत्साहित करने वाले आकर्षक अवकाश कार्य डिजाइन करना',
      'कक्षा में उपयोग के लिए Adobe Express पर निर्देशित रचनात्मक गतिविधियां प्रकाशित करना'
    ],
    courseLink: 'https://express.adobe.com/publishedV2/urn:aaid:sc:VA6C2:31554989-64cd-458b-be2b-3da630ce4ef6?promoid=Y69SGM5H&mv=other',
    recordingLink: 'https://drive.google.com/file/d/1rAi6dXpcmyqBfQVdtT2uvyaALqOWk_63/view?usp=sharing',
    week1Assignment: 'https://tinyurl.com/cpd4assignment1',
    week1LabelEn: 'Submit Assignment (Week-1)',
    week1LabelHi: 'असाइनमेंट जमा करें (सप्ताह-1)',
    week2Assignment: 'https://tinyurl.com/cpd4assignment2',
    week2LabelEn: 'Submit Assignment (Week-2)',
    week2LabelHi: 'असाइनमेंट जमा करें (सप्ताह-2)'
  },
  {
    code: 'CPD-05',
    chapter: 'Level B | Chapter-5',
    chapterHi: 'लेवल B | अध्याय-5',
    titleEn: 'Subject Integration: Language, Science, Social Studies & Art Lessons',
    titleHi: 'विषय एकीकरण: भाषा, विज्ञान, सामाजिक अध्ययन एवं कला शिक्षण',
    duration: '3.5 hrs',
    durationHi: '3.5 घंटे',
    levelEn: 'Integration (Level B)',
    levelHi: 'एकीकरण (लेवल B)',
    descEn: 'Transform subject-specific teaching: Generative AI and audio animations in Literature, visual storytelling in Science & Social Studies, and digital canvas with motion illustration in Art.',
    descHi: 'विषय-विशिष्ट शिक्षण को रूपांतरित करें: साहित्य में जनरेटिव AI और ऑडियो एनिमेशन, विज्ञान व सामाजिक अध्ययन में विज़ुअल स्टोरीटेलिंग, और कला में डिजिटल कैनवस।',
    outcomesEn: [
      'Transform Language & Literature with Generative AI and audio-based animation',
      'Innovative pedagogies: Visual communication & storytelling in Science and Social Studies',
      'Digital Canvas: Integrate technology & motion illustration into Art lessons'
    ],
    outcomesHi: [
      'जनरेटिव AI और ऑडियो एनिमेशन के साथ भाषा एवं साहित्य शिक्षण का रूपांतरण',
      'नवाचारी शिक्षाशास्त्र: विज्ञान और सामाजिक अध्ययन में दृश्य संचार और स्टोरीटेलिंग',
      'डिजिटल कैनवस: कला कक्षाओं में प्रौद्योगिकी और मोशन इलस्ट्रेशन का एकीकरण'
    ],
    courseLink: 'https://new.express.adobe.com/publishedV2/urn:aaid:sc:VA6C2:e10d2c17-8724-452a-be78-1eeb768d022e?promoid=Y69SGM5H&mv=other',
    recordingLink: 'https://drive.google.com/file/d/15FZJslPAnWcvaCqcE9K7ogOcTB_Vvni6/view?usp=sharing',
    week1Assignment: 'https://forms.gle/aFGjT2HgXH7NyVH4A',
    week1LabelEn: 'Submit Assignment (Week-1)',
    week1LabelHi: 'असाइनमेंट जमा करें (सप्ताह-1)',
    week2Assignment: 'https://forms.gle/1tx2dNKcKsiWjcjX9',
    week2LabelEn: 'Submit Assignment (Week-2)',
    week2LabelHi: 'असाइनमेंट जमा करें (सप्ताह-2)'
  },
  {
    code: 'CPD-06',
    chapter: 'Level B | Chapter-6',
    chapterHi: 'लेवल B | अध्याय-6',
    titleEn: 'Leveraging Creative Thinking & AI-Enabled Pedagogies to Enhance Learning Outcomes',
    titleHi: 'सीखने के परिणामों को बेहतर बनाने हेतु रचनात्मक सोच एवं AI शिक्षाशास्त्र का उपयोग',
    duration: '3.0 hrs',
    durationHi: '3.0 घंटे',
    levelEn: 'Pedagogy & AI (Level B)',
    levelHi: 'शिक्षाशास्त्र एवं AI (लेवल B)',
    descEn: 'Analyze engagement challenges, apply creative thinking strategies, implement AI-enabled personalized learning, and customize NCERT/CBSE bundles via Adobe Express Classrooms and Gallery.',
    descHi: 'कक्षा सहभागिता चुनौतियों का विश्लेषण करें, रचनात्मक रणनीतियाँ लागू करें, व्यक्तिगत शिक्षण हेतु AI अपनाएं और NCERT/CBSE बंडलों को कस्टमाइज़ करें।',
    outcomesEn: [
      'Analyze classroom engagement challenges and apply creative thinking strategies',
      'Integrate AI-enabled approaches to support personalized and interactive learning',
      'Deploy NCERT/CBSE bundles & collect assignments using the Classrooms Gallery feature'
    ],
    outcomesHi: [
      'कक्षा सहभागिता चुनौतियों का विश्लेषण और रचनात्मक शिक्षण रणनीतियाँ लागू करना',
      'व्यक्तिगत एवं इंटरैक्टिव शिक्षण हेतु AI-सक्षम दृष्टिकोण का एकीकरण',
      'NCERT/CBSE बंडल लागू करना और क्लासरूम गैलरी फीचर से असाइनमेंट एकत्र करना'
    ],
    courseLink: 'https://new.express.adobe.com/publishedV2/urn:aaid:sc:VA6C2:44453fd3-5a6b-5bf0-9b60-ae7259e7fa93?promoid=Y69SGM5H&mv=other',
    recordingLink: 'https://drive.google.com/file/d/13wQ3JlkchsMAw24q2wzyYjWUhR9lewEZ/view?usp=sharing',
    week1Assignment: 'https://tinyurl.com/cpd6assignment1',
    week1LabelEn: 'Submit Assignment 1',
    week1LabelHi: 'असाइनमेंट 1 जमा करें',
    week2Assignment: 'https://tinyurl.com/cpd6assignment1',
    week2LabelEn: 'Submit Assignment 2',
    week2LabelHi: 'असाइनमेंट 2 जमा करें'
  }
];

function toggleTileDetails(id) {
  var el = document.getElementById(id);
  var btn = document.getElementById('btn-' + id);
  var chev = document.getElementById('chev-' + id);
  if (!el || !btn) return;
  var isOpen = (el.style.display !== 'none');
  el.style.display = isOpen ? 'none' : 'block';
  if (chev) {
    chev.innerHTML = isOpen ? '▼' : '▲';
  }
}
window.toggleTileDetails = toggleTileDetails;

function renderCpdSectionHtml() {
  var isHi = (currentLang === 'hi');

  var bannerHtml =
    '<div style="background:linear-gradient(135deg,#FA0F00 0%,#7A0000 100%);color:#FFF;border-radius:var(--radius);padding:24px 28px;margin-bottom:24px;display:flex;align-items:center;justify-content:space-between;gap:18px;flex-wrap:wrap;box-shadow:0 6px 20px rgba(250,15,0,0.18);">' +
      '<div>' +
        '<div style="display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,0.18);border:1px solid rgba(255,255,255,0.3);padding:4px 12px;border-radius:999px;font-size:.72rem;font-weight:800;letter-spacing:.05em;text-transform:uppercase;margin-bottom:8px;">' +
          '⭐ ' + (isHi ? 'PM SHRI वार्षिक CPD कैलेंडर' : 'PM SHRI Annual CPD Training') +
        '</div>' +
        '<h3 style="font-size:1.35rem;font-weight:900;letter-spacing:-.02em;line-height:1.25;margin-bottom:6px;">' +
          (isHi ? '20 घंटे सतत व्यावसायिक विकास (6 मॉड्यूल उपलब्ध • 4 जल्द • कुल 10)' : '20 Hours Continuous Professional Development (6 of 10 Modules Ready • 4 Coming Soon)') +
        '</h3>' +
        '<p style="font-size:.86rem;color:rgba(255,255,255,0.9);max-width:680px;line-height:1.5;">' +
          (isHi ? 'NEP 2020 और यूनेस्को ESD सिद्धांतों के अनुरूप डिजिटल रचनात्मकता, AI शिक्षाशास्त्र और क्लासरूम प्रोजेक्ट्स में 6 प्रमाणित मॉड्यूल पूरा करें। शेष 4 मॉड्यूल जल्द अपलोड किए जाएंगे।' :
                  'Accredited training framework equipping educators with digital creativity, Generative AI pedagogies, and classroom project implementation. 6 certified modules available now; remaining 4 modules will be uploaded soon.') +
        '</p>' +
      '</div>' +
      '<div style="display:flex;gap:10px;flex-wrap:wrap;">' +
        '<a href="' + CPD_CALENDAR_URL + '" target="_blank" class="btn" style="background:#FFF;color:#FA0F00;font-weight:800;font-size:.84rem;padding:10px 18px;border-radius:999px;box-shadow:0 2px 8px rgba(0,0,0,0.15);">' +
          '📅 ' + (isHi ? 'वार्षिक CPD कैलेंडर खोलें ↗' : 'Open Annual Calendar ↗') +
        '</a>' +
        '<a href="' + CPD_RECORDINGS_HUB_URL + '" target="_blank" class="btn" style="background:rgba(255,255,255,0.18);border:1.5px solid rgba(255,255,255,0.5);color:#FFF;font-weight:800;font-size:.84rem;padding:10px 18px;border-radius:999px;">' +
          '🎥 ' + (isHi ? 'सभी सेशन रिकॉर्डिंग्स ↗' : 'All Session Recordings ↗') +
        '</a>' +
      '</div>' +
    '</div>';

  var cardsHtml = CPD_MODULES.map(function(m, idx) {
    var title = isHi ? m.titleHi : m.titleEn;
    var desc = isHi ? m.descHi : m.descEn;
    var chapter = isHi ? m.chapterHi : m.chapter;
    var outcomes = isHi ? m.outcomesHi : m.outcomesEn;
    var cpdDetailId = 'cpd-detail-' + idx;

    return '<div class="rc" style="display:flex;flex-direction:column;justify-content:space-between;">' +
      '<div>' +
        '<div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:12px;height:26px;">' +
          '<span style="font-size:.74rem;font-weight:800;color:var(--ink-2);background:var(--surface-3);padding:3px 10px;border-radius:999px;border:1px solid var(--border);">' + m.code + '</span>' +
          '<span style="font-size:.74rem;font-weight:800;color:var(--red);background:var(--red-bg);padding:3px 10px;border-radius:999px;border:1px solid var(--red-border);">' + chapter + '</span>' +
        '</div>' +
        '<h4 style="font-size:1.02rem;font-weight:800;line-height:1.35;height:4.1em;min-height:4.1em;margin-bottom:8px;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;color:var(--ink);">' + title + '</h4>' +
        '<p style="font-size:.82rem;line-height:1.45;color:var(--ink-2);height:2.9em;min-height:2.9em;margin-bottom:14px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">' + desc + '</p>' +
      '</div>' +

      '<div style="margin-top:auto;padding-top:14px;border-top:1px solid var(--border);display:flex;flex-direction:column;gap:8px;">' +
        '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">' +
          '<a href="' + m.courseLink + '" target="_blank" class="btn btn-primary" style="height:36px;justify-content:center;font-size:.82rem;font-weight:700;padding:0 6px;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' +
            '🚀 ' + (isHi ? 'कोर्स खोलें ↗' : 'Go to Course ↗') +
          '</a>' +
          '<a href="' + m.recordingLink + '" target="_blank" class="btn" style="height:36px;justify-content:center;font-size:.82rem;font-weight:700;padding:0 6px;background:#4F46E5;color:#FFFFFF;border-radius:var(--radius-sm);text-align:center;text-decoration:none;box-shadow:0 2px 4px rgba(79,70,229,0.2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' +
            '🎥 ' + (isHi ? 'रिकॉर्डिंग ↗' : 'Recording ↗') +
          '</a>' +
        '</div>' +
        '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">' +
          '<a href="' + m.week1Assignment + '" target="_blank" class="btn btn-ghost" style="height:34px;justify-content:center;font-size:.78rem;font-weight:700;padding:0 6px;background:var(--surface-2);border:1.5px solid var(--border);color:var(--ink);text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" title="' + (isHi ? 'असाइनमेंट 1 खोलें' : 'Open Assignment 1') + '">' +
            '📋 ' + (isHi ? 'असाइनमेंट 1 ↗' : 'Assignment 1 ↗') +
          '</a>' +
          '<a href="' + m.week2Assignment + '" target="_blank" class="btn btn-ghost" style="height:34px;justify-content:center;font-size:.78rem;font-weight:700;padding:0 6px;background:var(--surface-2);border:1.5px solid var(--border);color:var(--ink);text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" title="' + (isHi ? 'असाइनमेंट 2 खोलें' : 'Open Assignment 2') + '">' +
            '📋 ' + (isHi ? 'असाइनमेंट 2 ↗' : 'Assignment 2 ↗') +
          '</a>' +
        '</div>' +

        '<button id="btn-' + cpdDetailId + '" class="tile-toggle-btn" onclick="toggleTileDetails(\'' + cpdDetailId + '\')">' +
          '<span style="display:flex;align-items:center;gap:6px;">' +
            '<span>📖</span> <span>' + (isHi ? 'पाठ्यक्रम एवं उद्देश्य' : 'Curriculum & Objectives') + '</span>' +
          '</span>' +
          '<span id="chev-' + cpdDetailId + '" style="font-size:.7rem;color:var(--ink-3);">▼</span>' +
        '</button>' +
        '<div id="' + cpdDetailId + '" style="display:none;margin-top:8px;padding-top:10px;border-top:1px dashed var(--border);animation:fadeIn .2s ease;">' +
          '<div style="font-size:.74rem;font-weight:800;color:var(--ink-3);margin-bottom:4px;text-transform:uppercase;letter-spacing:.04em;">' +
            (isHi ? 'मॉड्यूल अवलोकन:' : 'Module Overview:') +
          '</div>' +
          '<p style="font-size:.8rem;color:var(--ink-2);line-height:1.5;margin-bottom:10px;">' + desc + '</p>' +
          '<div style="font-size:.74rem;font-weight:800;color:var(--red);margin-bottom:6px;text-transform:uppercase;letter-spacing:.04em;">' +
            '🎯 ' + (isHi ? 'प्रमुख उद्देश्य एवं दक्षताएं:' : 'Key Learning Objectives:') +
          '</div>' +
          '<ul style="font-size:.78rem;color:var(--ink-2);padding-left:18px;margin-bottom:8px;line-height:1.45;">' +
            outcomes.map(function(o){ return '<li style="margin-bottom:4px;">' + o + '</li>'; }).join('') +
          '</ul>' +
        '</div>' +
      '</div>' +
    '</div>';
  }).join('');

  var pendingCardHtml =
    '<div class="rc" style="display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;background:var(--surface-2);border:2px dashed var(--border);padding:28px 20px;min-height:300px;">' +
      '<div style="font-size:2.2rem;margin-bottom:10px;">⏳</div>' +
      '<span style="font-size:.74rem;font-weight:800;color:var(--ink-3);background:var(--surface-3);padding:3px 12px;border-radius:999px;border:1px solid var(--border);margin-bottom:10px;">' +
        'CPD-07 &bull; CPD-08 &bull; CPD-09 &bull; CPD-10' +
      '</span>' +
      '<h4 style="font-size:1.02rem;font-weight:800;color:var(--ink);margin-bottom:8px;line-height:1.35;">' +
        (isHi ? 'शेष 4 CPD मॉड्यूल (07–10) जल्द अपलोड किए जाएंगे' : 'Remaining 4 CPD Modules (07–10) Coming Soon') +
      '</h4>' +
      '<p style="font-size:.82rem;color:var(--ink-2);max-width:320px;line-height:1.5;margin-bottom:14px;">' +
        (isHi ? 'कुल 10 में से पहले 6 मॉड्यूल उपलब्ध हैं। अध्यापक प्रशिक्षण के अगले 4 मॉड्यूल (CPD 07–10) के आधिकारिक लिंक जल्द ही यहां उपलब्ध कराए जाएंगे।' :
                '6 of 10 modules available now. Course links, session recordings, and Google Form assignments for modules 07 to 10 will be uploaded soon.') +
      '</p>' +
      '<span style="display:inline-flex;align-items:center;gap:6px;font-size:.78rem;font-weight:700;color:var(--ink-3);background:var(--surface);border:1px solid var(--border);padding:5px 14px;border-radius:999px;">' +
        '🔒 ' + (isHi ? '4 मॉड्यूल शेष (कुल 10)' : '4 Modules Pending (10 Total)') +
      '</span>' +
    '</div>';

  return bannerHtml + '<div class="rg">' + cardsHtml + pendingCardHtml + '</div>';
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
      '<a href="../student/#section-7" target="_blank" class="btn btn-primary" style="padding:10px 22px;font-size:.85rem;">' +
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

        var studentViewBtn = '<a href="../student/#section-7" target="_blank" class="btn btn-dark" style="font-size:.74rem;padding:6px 12px;">🔗 ' + (isHi ? 'छात्र पोर्टल में देखें ↗' : 'View in Student Portal ↗') + '</a>';

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
      var teacherIdUrl = 'https://tinyurl.com/kvsteacherid';
      var idRequestUrl = 'https://tinyurl.com/Kvs-idcreationtemplate';
      var mobileTutorialUrl = 'https://drive.google.com/file/d/1yFK5JO38uod0BPn-qLobvRnHtxviJQRS/view?usp=sharing';
      var desktopTutorialUrl = 'https://tinyurl.com/adobeloginsteps';

      var bannerHtml =
        '<div style="background:linear-gradient(135deg,#1E1B4B 0%,#312E81 100%);color:#FFF;border-radius:var(--radius);padding:24px 28px;margin-bottom:24px;display:flex;align-items:center;justify-content:space-between;gap:18px;flex-wrap:wrap;box-shadow:0 6px 20px rgba(30,27,75,0.22);">' +
          '<div>' +
            '<div style="display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,0.18);border:1px solid rgba(255,255,255,0.3);padding:4px 12px;border-radius:999px;font-size:.72rem;font-weight:800;letter-spacing:.05em;text-transform:uppercase;margin-bottom:8px;">' +
              '⭐ Institutional Access &amp; Account Provisioning' +
            '</div>' +
            '<h3 style="font-size:1.35rem;font-weight:900;letter-spacing:-.02em;line-height:1.25;margin-bottom:6px;">' +
              'Adobe Express Teacher ID &amp; Login Support Hub' +
            '</h3>' +
            '<p style="font-size:.86rem;color:rgba(255,255,255,0.9);max-width:700px;line-height:1.5;">' +
              'Empowering educators with seamless institutional sign-in. Locate your pre-provisioned Teacher ID in the master sheet, submit an ID request if your email is missing, and follow step-by-step video tutorials for mobile and browser login.' +
            '</p>' +
          '</div>' +
          '<div style="display:flex;gap:10px;flex-wrap:wrap;">' +
            '<a href="https://new.express.adobe.com/" target="_blank" class="btn" style="background:#FA0F00;color:#FFF;font-weight:800;font-size:.84rem;padding:10px 18px;border-radius:999px;box-shadow:0 4px 12px rgba(250,15,0,0.35);">' +
              '🚀 Quick Login to Adobe Express ↗' +
            '</a>' +
            '<a href="' + teacherIdUrl + '" target="_blank" class="btn" style="background:#FFF;color:#1E1B4B;font-weight:800;font-size:.84rem;padding:10px 18px;border-radius:999px;box-shadow:0 2px 8px rgba(0,0,0,0.15);">' +
              '📊 Find Teacher ID ↗' +
            '</a>' +
            '<a href="' + idRequestUrl + '" target="_blank" class="btn" style="background:rgba(255,255,255,0.18);border:1.5px solid rgba(255,255,255,0.5);color:#FFF;font-weight:800;font-size:.84rem;padding:10px 18px;border-radius:999px;">' +
              '📝 Request Adobe ID ↗' +
            '</a>' +
          '</div>' +
        '</div>';

      var coreCards = [
        {
          num: '01',
          tag: 'Master Directory Worksheet',
          title: 'Find Your Adobe Teacher ID',
          desc: 'Access the centralized master Google Spreadsheet containing pre-provisioned Adobe Express email accounts for KVS teachers across all regions.',
          details: [
            'Search your name, employee code, or school using Ctrl+F',
            'Verify the official domain assigned to your institutional profile',
            'Use this verified email ID to sign into Adobe Express'
          ],
          url: teacherIdUrl,
          btn: 'Open Master Sheet ↗',
          btnStyle: 'background:#FA0F00;color:#FFF;',
          accentColor: '#FA0F00',
          accentBg: 'rgba(250,15,0,0.08)',
          icon: '📊'
        },
        {
          num: '02',
          tag: 'Account Request Form',
          title: 'Adobe ID Creation Request',
          desc: 'If a teacher still cannot find their email ID in the master worksheet, submit an official request through this template to have an Adobe ID generated.',
          details: [
            'Fill in teacher name, school name, region, and official school email',
            'Direct submission routed to the administrative provisioning team',
            'Ensures all eligible educators receive active institutional licenses'
          ],
          url: idRequestUrl,
          btn: 'Submit ID Request ↗',
          btnStyle: 'background:#059669;color:#FFF;',
          accentColor: '#059669',
          accentBg: 'rgba(5,150,105,0.08)',
          icon: '📝'
        },
        {
          num: '03',
          tag: 'Smartphone & Tablet Guide',
          title: 'Mobile Login Tutorial',
          desc: 'Step-by-step video demonstration guiding you through signing in to the official Adobe Express application on Android and iOS mobile devices.',
          details: [
            'How to download and launch the Adobe Express mobile app',
            'Selecting "Sign in with Company or School Account"',
            'Entering your institutional credentials for instant access'
          ],
          url: mobileTutorialUrl,
          btn: 'Watch Mobile Tutorial ↗',
          btnStyle: 'background:#4F46E5;color:#FFF;',
          accentColor: '#4F46E5',
          accentBg: 'rgba(79,70,229,0.08)',
          icon: '📱'
        },
        {
          num: '04',
          tag: 'Browser Sign-In Guide',
          title: 'Desktop / Laptop Login Tutorial',
          desc: 'Detailed instructional video and guide demonstrating how to log in via web browser (Chrome, Edge, Firefox) on desktop or laptop computers.',
          details: [
            'Open new.express.adobe.com in any web browser',
            'Choose "Log in with School Account" (Enterprise ID)',
            'Complete SSO authentication to reach your Educator Workspace'
          ],
          url: desktopTutorialUrl,
          btn: 'Watch Desktop Tutorial ↗',
          btnStyle: 'background:#2563EB;color:#FFF;',
          accentColor: '#2563EB',
          accentBg: 'rgba(37,99,235,0.08)',
          icon: '💻'
        }
      ];

      var cardsHtml = '<div class="access-cards-grid" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(340px,1fr));gap:20px;margin-bottom:28px;">' +
        coreCards.map(function(c) {
          return '<div class="access-card" style="background:var(--surface);border:1.5px solid var(--border);border-radius:var(--radius);padding:22px 24px;display:flex;flex-direction:column;justify-content:space-between;box-shadow:0 4px 14px rgba(0,0,0,0.03);">' +
            '<div>' +
              '<div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:12px;">' +
                '<span style="display:inline-flex;align-items:center;gap:6px;font-size:.74rem;font-weight:800;color:' + c.accentColor + ';background:' + c.accentBg + ';padding:4px 10px;border-radius:999px;border:1px solid ' + c.accentColor + '22;">' +
                  '<span>' + c.icon + '</span> <span>' + c.tag + '</span>' +
                '</span>' +
                '<span style="font-size:.72rem;font-weight:800;letter-spacing:.04em;color:var(--ink-3);background:var(--surface-3);padding:3px 9px;border-radius:999px;border:1px solid var(--border);">' +
                  'STEP ' + c.num +
                '</span>' +
              '</div>' +
              '<h4 style="font-size:1.15rem;font-weight:900;color:var(--ink);margin-bottom:8px;line-height:1.3;">' + c.title + '</h4>' +
              '<p style="font-size:.84rem;color:var(--ink-2);line-height:1.5;margin-bottom:14px;">' + c.desc + '</p>' +
              '<div style="background:var(--surface-2);border:1px solid var(--border);border-radius:10px;padding:12px 14px;margin-bottom:16px;">' +
                '<div style="font-size:.72rem;font-weight:800;color:var(--ink-3);text-transform:uppercase;letter-spacing:.04em;margin-bottom:8px;display:flex;align-items:center;gap:6px;">' +
                  '<span>📌</span> <span>Key Instructions & Steps:</span>' +
                '</div>' +
                '<div style="display:flex;flex-direction:column;gap:6px;">' +
                  c.details.map(function(d, idx) {
                    return '<div style="display:flex;align-items:flex-start;gap:8px;font-size:.8rem;color:var(--ink-2);line-height:1.45;">' +
                      '<span style="display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:50%;background:rgba(0,0,0,0.06);color:var(--ink);font-size:.68rem;font-weight:800;flex-shrink:0;margin-top:1px;">' + (idx + 1) + '</span>' +
                      '<span>' + d + '</span>' +
                    '</div>';
                  }).join('') +
                '</div>' +
              '</div>' +
            '</div>' +
            '<div style="display:flex;gap:10px;align-items:center;margin-top:auto;padding-top:14px;border-top:1px solid var(--border);">' +
              '<a href="' + c.url + '" target="_blank" class="btn" style="' + c.btnStyle + 'flex:1;min-width:0;display:inline-flex;align-items:center;justify-content:center;gap:6px;font-size:.84rem;font-weight:800;padding:10px 14px;border-radius:var(--radius-sm);text-align:center;text-decoration:none;white-space:nowrap;box-shadow:0 2px 6px rgba(0,0,0,0.12);">' +
                c.btn +
              '</a>' +
              '<button onclick="navigator.clipboard.writeText(\'' + c.url + '\').then(function(){ alert(\'Link copied to clipboard!\'); })" class="btn btn-ghost" style="flex-shrink:0;height:38px;padding:0 14px;display:inline-flex;align-items:center;gap:4px;font-size:.78rem;font-weight:700;background:var(--surface-2);border:1.5px solid var(--border);border-radius:var(--radius-sm);color:var(--ink);white-space:nowrap;" title="Copy Link">' +
                '📋 Copy' +
              '</button>' +
            '</div>' +
          '</div>';
        }).join('') +
      '</div>';

      var guideHtml =
        '<div style="background:var(--surface-2);border:1.5px solid var(--border);border-radius:var(--radius);padding:22px 24px;margin-bottom:24px;">' +
          '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;flex-wrap:gap:8px;">' +
            '<div style="font-weight:900;color:var(--ink);font-size:1.05rem;">' +
              '🚀 Quick Login Checklist (Step-by-Step)' +
            '</div>' +
            '<span style="font-size:.76rem;font-weight:800;color:var(--red);background:var(--red-bg);padding:3px 10px;border-radius:999px;border:1px solid var(--red-border);">' +
              '4 Easy Steps' +
            '</span>' +
          '</div>' +
          '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;">' +
            '<div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-sm);padding:14px;">' +
              '<div style="font-weight:900;font-size:.88rem;color:var(--red);margin-bottom:4px;">Step 1: Find ID</div>' +
              '<div style="font-size:.8rem;color:var(--ink-2);line-height:1.45;">Open the Teacher ID Sheet and find your assigned official school email ID.</div>' +
            '</div>' +
            '<div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-sm);padding:14px;">' +
              '<div style="font-weight:900;font-size:.88rem;color:#059669;margin-bottom:4px;">Step 2: Request if Missing</div>' +
              '<div style="font-size:.8rem;color:var(--ink-2);line-height:1.45;">If not found, submit the ID Creation Template to have your ID provisioned.</div>' +
            '</div>' +
            '<div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-sm);padding:14px;">' +
              '<div style="font-weight:900;font-size:.88rem;color:#4F46E5;margin-bottom:4px;">Step 3: Watch Tutorial</div>' +
              '<div style="font-size:.8rem;color:var(--ink-2);line-height:1.45;">Watch the mobile or browser login video to follow the exact sign-in steps.</div>' +
            '</div>' +
            '<div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-sm);padding:14px;display:flex;flex-direction:column;justify-content:space-between;">' +
              '<div>' +
                '<div style="font-weight:900;font-size:.88rem;color:var(--ink);margin-bottom:4px;">Step 4: Login &amp; Create</div>' +
                '<div style="font-size:.8rem;color:var(--ink-2);line-height:1.45;margin-bottom:8px;">Select "Company or School Account" to log in and start creating projects.</div>' +
              '</div>' +
              '<a href="https://new.express.adobe.com/" target="_blank" class="btn btn-primary" style="padding:7px 12px;font-size:.76rem;font-weight:800;justify-content:center;text-decoration:none;border-radius:var(--radius-sm);">' +
                '🚀 Log In to Express ↗' +
              '</a>' +
            '</div>' +
          '</div>' +
        '</div>';

      return bannerHtml + guideHtml + cardsHtml;
    }
  },
  'B': {
    letter: '📚',
    tag: 'Section B • Professional Development',
    title: 'CPD Training Modules (20 Hours)',
    desc: 'Six progressive accredited modules totaling 20 hours designed to equip educators with foundational to subject-specific digital creativity and AI pedagogy.',
    render: function() { return renderCpdSectionHtml(); }
  },
  'C': {
    letter: '🔭',
    tag: 'Section C • Student DCAIS Activities',
    title: 'Student DCAIS Activities',
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
        '<div class="pstat"><div class="pstat-n">20 hrs</div><div class="pstat-l">Accredited Training</div></div>' +
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
