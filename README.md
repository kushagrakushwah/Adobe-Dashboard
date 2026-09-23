# Adobe Express for Education — Enterprise Dashboard

[![GitHub Pages Deployment](https://img.shields.io/badge/Live-GitHub%20Pages-FA0F00?style=for-the-badge&logo=adobe&logoColor=white)](https://kushagrakushwah.github.io/Adobe-Dashboard/)
[![Adobe Spectrum](https://img.shields.io/badge/Design%20System-Adobe%20Spectrum-141414?style=for-the-badge)](https://spectrum.adobe.com/)
[![Bilingual](https://img.shields.io/badge/Localization-English%20%7C%20Hindi-blue?style=for-the-badge)](#)

A company-grade, production-ready web application for **Adobe Express for Education**. Built with completely isolated, dedicated sites for **Students** and **Teachers**.

---

## 🌐 Dedicated Site Links

* **🎒 Dedicated Student Site (Isolated from Teacher Site):**  
  👉 **[https://kushagrakushwah.github.io/Adobe-Dashboard/student/](https://kushagrakushwah.github.io/Adobe-Dashboard/student/)**  
  *(Students only see their 12-month activity dashboard. Zero links or access to teacher curriculum or credentials).*

* **👩‍🏫 Dedicated Teacher Site (Isolated from Student Site):**  
  👉 **[https://kushagrakushwah.github.io/Adobe-Dashboard/teacher/](https://kushagrakushwah.github.io/Adobe-Dashboard/teacher/)**  
  *(Educators have their own standalone hub with Adobe ID & Password guidance, CPD 1–5 modules, and DCAIS curriculum tree).*

* **🚀 Portal Gateway:**  
  👉 **[https://kushagrakushwah.github.io/Adobe-Dashboard/](https://kushagrakushwah.github.io/Adobe-Dashboard/)**

---

## 🏛️ Architecture & Separation

```text
dashboard/
├── student/                   # COMPLETELY ISOLATED STUDENT SITE
│   ├── index.html             # Student Entry Point (No teacher links)
│   ├── styles.css             # Student Spectrum Styling
│   ├── student.js             # Student Month & Flow Controller
│   └── data.js                # Student 12-Month Project Data
├── teacher/                   # COMPLETELY ISOLATED TEACHER SITE
│   ├── index.html             # Teacher Entry Point (No student links)
│   ├── styles.css             # Teacher Spectrum Styling
│   ├── teacher.js             # Teacher CPD & DCAIS Controller
│   └── data.js                # Teacher Credential & Curriculum Data
├── index.html                 # Central Gateway Portal
├── css/                       # Global Spectrum Styles
├── js/                        # Global App Controllers
└── data/                      # Global Content CMS
```

---
© Adobe Express for Education • Certified Digital Skills Program for Schools & Educators
