# AgriDirectSA-Part-2
Web Development

**Institution:** IIE Rosebank College  
**Student Name:** Olwethu Simphiwe Mkhize  
**Student Number:** ST10493769  
**Module:** Web Development (WEDE5020)  
**Academic Year:** 2026  

---

## 📌 Project Overview

This repository contains the Portfolio of Evidence (PoE) submission for **WEDE5020**, covering **Part 1 (Semantic HTML5 Architecture)**, **Part 2 (CSS Styling & Responsive Layouts)**, and **Part 3 (Dynamic JavaScript & Form Validation)**.

**AgriDirect SA** is a digital B2B marketplace platform connecting smallholder produce farmers directly with commercial buyers (restaurants, caterers, and grocers) to eliminate middleman markups.

---

## 🚀 Live Demo & Repository Links

* **GitHub Repository:** https://github.com/olwe366/AgriDirectSA-Part-2
* **GitHub Pages Deployment (AgriDirect SA):** https://olwe366.github.io/AgriDirectSA-Part-2/agridirect/Index.html

---

## 📁 Repository Folder Structure

```text
AgriDirectSA-Part-2/
│
├── README.md                     # Main Project Documentation
│
└── agridirect/                   # AgriDirect SA Project Files
    ├── Index.html                # Homepage
    ├── About.html                # About Us & Mission
    ├── Products.html             # Produce Catalogue (5 Fruits, 5 Vegetables, 5 Herbs)
    ├── Enquiry.html              # Bulk Produce Quotation Form
    ├── Contact.html              # Contact Page (Durban & Cape Town hubs, each with its own map)
    ├── CSS/
    │   └── style.css             # Layout, theme styling and mobile breakpoints
    ├── JS/
    │   └── script.js             # Form validation, mobile nav, live catalogue filter
    └── images/                   # Produce photos and category graphics
```

---

## 🛠️ Tech Stack

- **Markup:** HTML5 (Semantic Structure)
- **Styling:** CSS3 (Flexbox, CSS Grid, Media Queries, Custom Variables)
- **Scripting:** JavaScript (ES6+ DOM Operations, Client-side Validation)
- **Version Control:** Git & GitHub
- **Hosting:** GitHub Pages
- **Development Environment:** Visual Studio Code

---

## 📄 Website Features Summary

- **Produce Catalogue:** 15 listings across Vegetables, Fruits and Herbs, each filterable by category or search term.
- **Bulk Quotation Engine:** Client-side form validation on the Enquiry and Contact forms.
- **Responsive Layout:** Flexbox/Grid cards and a dedicated sub-480px breakpoint for small phones.
- **Dual Location Maps:** Durban and Cape Town hubs each embed their own Google Map on the Contact page.

---

## 📋 PoE Compliance Checklist

- [x] Part 1: Semantic HTML5 page layout and site structure.
- [x] Part 2: Responsive CSS styling, Grid/Flexbox systems, and mobile breakpoints.
- [x] Part 3: Client-side JavaScript form validation, event listeners, dynamic DOM filtering, and GitHub Pages staging.

## 👤 Author Information

- **Student:** Olwethu Simphiwe Mkhize
- **Student ID:** ST10493769
- **Institution:** IIE Rosebank College (Durban Campus)
- **Course:** Diploma in IT (Software Development)

# AgriDirect SA

A multi-page B2B marketplace concept connecting South African smallholder farmers with commercial buyers, built with plain HTML, CSS and JavaScript (no frameworks, no build step). This is the complete WEDE5020 Web Development submission, covering **Part 1** (semantic structure), **Part 2** (CSS styling & responsive layout) and **Part 3** (dynamic JavaScript & form validation).

> **Live site:** https://olwe366.github.io/AgriDirectSA-Part-2/agridirect/Index.html
> **Repository:** https://github.com/olwe366/AgriDirectSA-Part-2

---

## Table of Contents
1. [Features](#features)
2. [Pages](#pages)
3. [Tech Stack](#tech-stack)
4. [Project Structure](#project-structure)
5. [Getting Started](#getting-started)
6. [Deployment](#deployment)
7. [Known Limitations](#known-limitations)
8. [Documentation Files](#documentation-files)
9. [Author](#author)

---

## Features
- Produce catalogue of **15 listings** across Vegetables, Fruits and Herbs (5 each), filterable live by category and search term
- Every product card carries a `data-category` attribute, so the JS filter matches reliably instead of scanning visible text
- Enquiry and Contact forms with client-side validation (required fields, inline alerts)
- Two regional hubs on the Contact page — Durban and Cape Town — **each with its own embedded Google Map**
- Standardised footer across all five pages: brand blurb, quick links, contact emails
- Responsive, mobile-first layout: Flexbox/Grid, a 768px tablet/desktop breakpoint, and a dedicated sub-480px breakpoint for small phones
- JavaScript-driven collapsible navigation on mobile

## Pages
| Page | File | Purpose |
|---|---|---|
| Home | `Index.html` | Landing page, hero, 4 featured products |
| About | `About.html` | Mission, core pillars, call to action |
| Products | `Products.html` | Full 15-item catalogue with search/filter |
| Enquiry | `Enquiry.html` | Business enquiry form |
| Contact | `Contact.html` | Durban & Cape Town hubs, each with its own map, contact form |

## Tech Stack
- **HTML5** — semantic markup
- **CSS3** — custom properties, Flexbox, Grid, three-tier media queries (480px / 768px)
- **JavaScript (vanilla)** — DOM events, `data-category` filtering, form validation, mobile nav toggle
- **Git & GitHub** — version control, hosted on **GitHub Pages**

## Project Structure

agridirect/
├── Index.html
├── About.html
├── Products.html
├── Enquiry.html
├── Contact.html
├── CSS/
│ └── style.css
├── JS/
│ └── script.js
└── images/
├── tomatoes.jpg
├── spinach.jpg
└── 13 category SVG graphics (oranges, basil, butternut, red-onions,
potatoes, bananas, apples, watermelon, avocados, coriander,
mint, rosemary, thyme)

## Getting Started
No build step required.
- Open `agridirect/Index.html` directly in a browser, **or**
- Serve the folder locally for the most accurate preview:

  npx serve agridirect
   or right-click `Index.html` in VS Code and choose **Open with Live Server**.

## Deployment
Hosted on **GitHub Pages**, serving from the `main` branch root, so every page under `agridirect/` is reachable at:
https://olwe366.github.io/AgriDirectSA-Part-2/agridirect/<Index>.html

## Known Limitations
This is an academic prototype, not a production marketplace.
- Forms validate client-side only — no backend, so no email is actually sent; the "submitted" confirmation is a JS `alert()`, not a persisted record.
- Only the Tomatoes and Spinach listings use real photography; the other 13 products use flat SVG placeholder graphics in the site's colour palette.
- No image compression pipeline — product photos are hand-sized.

## Documentation Files
| File | Contents |
|---|---|
| [`CHANGELOG.md`](CHANGELOG.md) | Part 1–3 milestones, grouped by date |
| [`robots.txt`](robots.txt) | Crawler access rules |

## Author
Olwethu Simphiwe Mkhize, ST10493769 — Web Development (WEDE5020), IIE Rosebank College (Durban Campus)
