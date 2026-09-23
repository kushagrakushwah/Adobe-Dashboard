# Adobe Express for Education — Enterprise Dashboard

[![GitHub Pages Deployment](https://img.shields.io/badge/Live-GitHub%20Pages-FA0F00?style=for-the-badge&logo=adobe&logoColor=white)](https://kushagrakushwah.github.io/Adobe-Dashboard/)
[![Adobe Spectrum](https://img.shields.io/badge/Design%20System-Adobe%20Spectrum-141414?style=for-the-badge)](https://spectrum.adobe.com/)
[![Bilingual](https://img.shields.io/badge/Localization-English%20%7C%20Hindi-blue?style=for-the-badge)](#)

A company-grade, production-ready web application for **Adobe Express for Education**. Designed for schools, educators, and students under the Ministry of Education & Adobe digital skills initiative.

---

## 🌐 Live Access Links

* **🚀 Live Portal (Home Page):** [https://kushagrakushwah.github.io/Adobe-Dashboard/](https://kushagrakushwah.github.io/Adobe-Dashboard/)
* **👩‍🏫 Teacher Portal:** [https://kushagrakushwah.github.io/Adobe-Dashboard/teacher.html](https://kushagrakushwah.github.io/Adobe-Dashboard/teacher.html)
* **🎒 Student Portal:** [https://kushagrakushwah.github.io/Adobe-Dashboard/student.html](https://kushagrakushwah.github.io/Adobe-Dashboard/student.html)

---

## 🏛️ Architecture & Feature Breakdown

### 1. Home Page (`index.html`)
* Role-based decision grid redirecting traffic to **TEACHER** and **STUDENT** portals.
* Verified program metrics banner: 5 CPD Modules, 12 Monthly Challenges, 16+ DCAIS Projects, 100% Free for Schools.
* Persistent header with brand logo, tagline, and **EN / हिं** language switcher.

### 2. Teacher Portal (`teacher.html`)
* **Section A (Adobe ID & Password):**
  * Institutional sign-in notice banner (`Company or School Account`).
  * Action cards for Adobe ID license verification, password security guidelines, direct Adobe Express portal launcher, self-service password recovery, and SSO setup (Google / Microsoft 365).
* **Section B (CPD – Continuous Professional Development):**
  * **CPD 1:** Introduction to Adobe Express in the Classroom (Foundations)
  * **CPD 2:** Visual Storytelling & Graphic Design for Educators (Design Pedagogy)
  * **CPD 3:** Interactive Media & Classroom Video Storytelling (Multimedia)
  * **CPD 4:** Collaborative Student Portfolios & Digital Web Pages (Portfolios)
  * **CPD 5:** Generative AI & Creative Pedagogies with Adobe Firefly (Emerging Tech)
  * Each module features **Objectives**, **Curated Resources**, **Assignment Tasks**, **Submission Links**, and a **Copy Link** action.
* **Section C (DCAIS Curriculum):**
  * Core downloads for *DCAIS E-Modules*, *Teacher Manual*, *Curriculum Book*, and *Activities Tree*.
  * Full 4-module interactive activity tree:
    * **Module 1 (Digital Art):** Activity 1.1, 1.2, 1.3
    * **Module 2 (Typography):** Activity 2.1, 2.2, 2.3
    * **Module 3 (Video & Motion):** Activity 3.1, 3.2, 3.3
    * **Module 4 (Web Portfolios):** Activity 4.1, 4.2, 4.3
* **Live Search Filter:** Real-time debounced search bar filtering CPD modules and DCAIS activities.

### 3. Student Portal (`student.html`)
* **4-Step Flow Bar:** `Select Month → Watch Tutorial → Open Activity → Submit Activity`.
* **12-Month Pill Dashboard:** January through December interactive pill selector with solid Adobe Red (`#FA0F00`) active highlight.
* **Keyboard Accessible:** Navigate months using **Left (←)** and **Right (→)** arrow keys anywhere on the page.
* **Active Month Showcase Card:**
  * Displays cultural/national curriculum theme (Republic Day, Earth Day, Independence Day, Gandhi Jayanti, etc.).
  * Skills tags, estimated completion duration, and action buttons:
    * `▶ Watch Tutorial` (direct YouTube guide)
    * `✦ Open in Express` (launches Adobe Express project template)
    * `✓ Submit Project` (Google Forms project link)

---

## 🎨 Design System & Localization
* **Adobe Spectrum Aesthetics:** Authentic brand tokens (`#FA0F00`, `#C90D00`, `#141414`, `#F4F4F6`), high-elevation shadows, smooth micro-interactions, and accessibility focus rings (`:focus-visible`).
* **Bilingual Engine:** Complete English and Hindi localization with instant header switching and `localStorage` persistence.
* **Dual-Mode Data Architecture:** Decoupled CMS (`data/content.json`) paired with zero-CORS standalone provider (`js/data.js`) for seamless offline (`file:///`) and live server deployments.

---

## 💻 Local Development
To run locally:
```bash
python serve.py
```
Opens automatically at `http://localhost:8000`.

---
© Adobe Express for Education • Certified Digital Skills Program for Schools & Educators
