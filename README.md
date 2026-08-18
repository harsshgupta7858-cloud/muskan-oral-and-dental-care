# Website Development Specification (README)

**Target AI / Developer:** Antigravity Gemini 3.7 Flash  
**Project:** Responsive Web Application for Dental Clinic  
**Client:** Muskan Oral and Dental Care  

---

## 1. Project Overview & Objective

The primary objective of this project is to construct a lightweight, high-converting, mobile-first responsive web application for **Muskan Oral and Dental Care**.

### **Primary Goal**
- **Drive Direct Conversions via WhatsApp**: Every call-to-action (CTA), appointment booking trigger, and emergency contact link must route patients directly to WhatsApp with pre-filled context messages.

---

## 2. Business & Practice Information

* **Clinic Name:** Muskan Oral and Dental Care
* **Lead Practitioner:** Dr. Zakir Hussain
* **Address:** Doctor Zakir Hussain Road Gowaltoli, near Chisti Nagar, Hazaribagh, Jharkhand 825301
* **Primary CTA Destination:** WhatsApp (`https://wa.me/<PHONE_NUMBER>?text=...`)

---

## 3. Technology Stack & Constraints

To maintain optimal performance, zero dependencies, and instant load times, the following rules apply:

* **HTML5:** Semantic markup (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`).
* **CSS3:** Native CSS using Custom Properties (CSS Variables), Flexbox, CSS Grid, and Media Queries.
* **JavaScript:** Vanilla JavaScript (ES6+) for interactive logic (mobile drawer menu, accordion FAQ, before/after visual sliders).
* **FORBIDDEN:** Do NOT use external frameworks or utility libraries (No React, Vue, Tailwind CSS, Bootstrap, jQuery, etc.).

---

## 4. Brand Color Palette (Extracted from Logo)

The visual theme is derived directly from the fresh mint and teal tones of the new brand identity:

| Element | Color Name | Hex Code | Usage |
| :--- | :--- | :--- | :--- |
| **Primary Brand Color** | Fresh Mint Green | `#82D4BB` | Outer circular swirl accent, primary highlights, soft backgrounds |
| **Secondary Accent** | Clean Cyan / Teal | `#56C5C5` | Central tooth symbol, primary headings, key icon accents |
| **Conversion CTA Color** | WhatsApp Green | `#25D366` | Conversion CTAs, sticky WhatsApp widget |
| **Background Neutral** | Pure White / Light Slate | `#FFFFFF` / `#F8FAFC` | Page backgrounds, section containers, card wrappers |
| **Text Dark** | Deep Slate Gray | `#2C3E50` | Primary typography, body text, section headers |
| **Text Muted** | Cool Slate | `#7F8C8D` | Secondary text, subtitles, footer copyright details |

---

## 5. Required Assets & Media Handling

1. **`logo.png`**:
   * **Location**: Root directory.
   * **Usage**: Render in the sticky navigation header (top-left), footer, and set/generate as browser favicon.
2. **Doctor Photo (`doctor.png`)**:
   * **Condition**: **NOT available**.
   * **Handling**: Do NOT expect `doctor.png`. Use an elegant SVG avatar placeholder, an stylized graphic frame, or clean CSS styling for Dr. Zakir Hussain's profile card in the doctor section.

---

## 6. Site Architecture & Layout Structure

### **Key Pages / Single-Page Sections:**
1. **Sticky Header & Navigation:**
   * Prominent display of `logo.png` on the top left.
   * Navigation items (Home, About, Services, Results, Testimonials, FAQ, Contact).
   * Direct "Book on WhatsApp" action button.

2. **Hero Section:**
   * Headline: *Gentle Care for Your Family's Healthiest Smiles*.
   * Subheadline highlighting **Dr. Zakir Hussain's** commitment to oral health.
   * Primary CTA: **Book Appointment on WhatsApp** with pre-filled message: `"Hello Dr. Zakir Hussain, I would like to schedule a dental checkup."`

3. **Doctor & Clinic Section:**
   * Highlights **Dr. Zakir Hussain** sitting as the lead dental practitioner at Gowaltoli, Hazaribagh.
   * Styled info card detailing qualifications, patient care philosophy, and hygiene standards (without requiring `doctor.png`).

4. **Key Dental Services:**
   * Preventive Dental Checkups & Cleaning
   * Teeth Whitening & Smile Enhancement
   * Painless Root Canal Treatments (RCT)
   * Dental Crowns, Bridges & Restorations
   * Pediatric & Family Dentistry
   * Orthodontics & Tooth Alignment

5. **Interactive Before & After Gallery (Patient Results):**
   * Visual transformation cards with side-by-side or drag-comparison sliders built with pure HTML/CSS/JS.

6. **Patient Reviews & Testimonials:**
   * Patient feedback cards featuring 5-star rating badges and direct Google Review links.

7. **Frequently Asked Questions (Accordion FAQ):**
   * Collapsible FAQ sections addressing appointment timings, treatment safety, and location directions.

8. **Location & Contact Section:**
   * Embedded Google Map pointing to: *Doctor Zakir Hussain Road Gowaltoli, near Chisti Nagar, Hazaribagh, Jharkhand 825301*.
   * Operating hours and direct phone/WhatsApp contact link.

9. **Footer:**
   * Incorporates `logo.png`, quick navigation links, address info, and floating WhatsApp widget.

---

## 7. Performance & Conversion Features

1. **Floating WhatsApp CTA Widget:**
   * Sticky bottom-right position with a subtle pulse animation.
   * Text prompt: `"Chat with Dr. Zakir's Team"`.

2. **Contextual Query Routing:**
   * Pre-filled message strings for specific services (e.g., `"Hi Dr. Zakir, I need an inquiry regarding Teeth Cleaning at Muskan Oral Care."`).

3. **SEO & Local Schema:**
   * Included `schema.org` JSON-LD markup for `Dentist` / `LocalBusiness` for Hazaribagh region targeting.

---

## 8. Deliverables Checklist for Opus 4.6

- [ ] `index.html` — Clean semantic HTML utilizing `logo.png`.
- [ ] `styles.css` — Custom CSS using extracted mint & teal palette variables.
- [ ] `script.js` — Lightweight JS for drawer navigation, accordion, sliders, and WhatsApp deep links.