# Accredian Enterprise Landing Page (Internship Assignment Task)

This repository contains a responsive, high-performance clone of the [Accredian Enterprise Website](https://enterprise.accredian.com/). It has been built as part of the evaluation assignment task for the **Full Stack Developer Intern** application.

The application is built using **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**, featuring interactive custom L&D carousels, client marques, and a functional lead ingestion API.

---

## 🚀 Live Demo & Repository
- **Vercel Live Deployment:** [Deployed Live Link](https://accredian-enterprise-intern.vercel.app/) *(To be configured upon Vercel import)*
- **GitHub Repository:** [accredian](https://github.com/madhav-kr-singh/enterprise-accredian-clone.git) *(To be linked upon repo import)*

---

## 🛠️ Assignment Scope & Features Implemented

1. **Fully Responsive Landing Page:**
   - **Hero Section:** Optimizes typography, grids, and mobile-bleed image cells. Implements custom checklist items mapping dynamic L&D value cards.
   - **Interactive Header:** Sticky glassmorphism header with navigation anchoring and a custom floating mobile category dropdown card.
   - **Seamless Marquee (`TrustBar`):** Infinite logo carousel displaying corporate partnerships (Reliance, HCL, IBM, ADP, Bayer, CRIF) scrolling with zero visual restarts.
   - **Stats Section:** Vertical columns on desktop, transitioning into horizontal row-based badge cards on mobile.
   - **Accredian Edgeusp:** Full-width strategic diagram scaling proportionally inside `max-w-7xl` boundaries using native SVG properties.
   - **CAT Framework & Domain Expertise:** Responsive grid mapping corporate competencies and syllabus structures.
   - **L&D Course Carousel:** Mobile-optimized infinite sliding slideshow that locks single product cards on track without scrolling backwards.
   - **Support Headset Banner (Final CTA):** High-fidelity card layout with concentric ring backgrounds, double-rim squircle outline, and a mirrored smiley agent headset icon.
   - **Light Footer:** Solid white background (`bg-white`) footer featuring flat social assets and left-aligned contact detail layouts.

2. **Lead Capture Integration (Bonus Task):**
   - **Enquiry Modal:** Desktop split-screen popover displaying a modern glass office background image (`/asset/enquiry.webp`) on the left and input fields on the right (hidden image on mobile).
   - **High-Contrast Minimal Inputs:** Bottom-border only input fields with dark placeholder legibility (`placeholder:text-text-secondary/80`).
   - **Custom Phone flag:** International flag code indicator with inline emoji prefix (`🇮🇳 +91`) and number inputs.
   - **Hamburger-style Select Dropdowns:** Custom floating dropdown menus built in React, matching the aesthetics of the mobile navbar hamburger menu overlay.
   - **Mock Database API:** An asynchronous route handler (`POST /api/enquire`) that validates payloads and appends them to a local JSON file (`enquiries.json`).

---

## 💻 Tech Stack
- **Framework:** Next.js 16.2.11 (App Router & Turbopack)
- **Language:** TypeScript (Strict type checks)
- **Styling:** Tailwind CSS v4 (CSS `@theme` variables setup)
- **Icons:** Lucide React
- **Animations:** Framer Motion (Transitions, springs, and modal exit states)

---

## ⚙️ Local Setup Instructions

### Prerequisites
- Node.js (v18.x or later recommended)
- npm or yarn

### Steps to Run Locally

1. **Clone this repository:**
   ```bash
   git clone <your-repo-link>
   cd accredian
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   *The hot-reloader will initialize. Access the site at [http://localhost:3000](http://localhost:3000).*

4. **Verify form ingestion:**
   Submit an enquiry through the pop-up modal or inline form, then inspect `enquiries.json` created in the project root.

5. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🤖 AI Usage & Pairing Explanation

This project was developed by pairing with AI tools, strictly following the intern assignment guidelines.

### Where AI Helped
- **Initial Setup & Scaffolding:** Accelerated the boilerplate structure for the Next.js App Router and JSON API endpoint.
- **Form Validation Scaffolds:** Rapidly set up basic React validation states (`success`, `loading`, `error`) and standard form fields.
- **Base CSS Variables:** Bootstrapped the color configuration matching Accredian's blue brand tones.

### Manual Refinements & Performance Fixes (My Code Enhancements)
- **Double-Track Marquee:** Replaced triplicated marquee arrays with two identical content tracks translating by exactly `-50%`. This removed sub-pixel round-off errors, resulting in a 100% seamless infinite marquee.
- **Custom Inline SVG Coordinates:** Coded custom SVGs for social platforms and the support smiley headset to ensure crisp scaling, then mirrored the headset SVG horizontally (`-scale-x-100`) to match the mockup logo.
- **Enquiry Modal Dropdowns:** Replaced native browser dropdown lists with custom-styled React float-popovers that slide down like the mobile navigation categories overlay.
- **Dynamic Mobile Aspect-Ratios:** Swapped the USP diagrams to use native `<img>` tags (`w-full h-auto`) to scale cleanly inside the `max-w-7xl` container without fixed container height restrictions.
- **Scroll Buffer Protection:** Patched scrolling height offsets in modal containers (`pb-36`) so absolute dropdown overlays expand without clipping on smaller mobile viewports.

---

## 🔮 Future Enhancements (With More Time)
1. **Production Database:** Sync `/api/enquire` to a serverless Postgres database (like Neon or Supabase) rather than writing to a local JSON file.
2. **Sales Notifications:** Integrate automated L&D email routing via SendGrid or Resend to alert L&D staff in real-time upon submission.
3. **Leads Dashboard (`/admin`):** Build a secure, authenticated dashboard displaying submitted leads in a searchable grid with CSV export options.
