# Accredian Enterprise Landing Page (Internship Assignment Task)

This repository contains a responsive, high-performance clone of the [Accredian Enterprise Website](https://enterprise.accredian.com/). It has been built as part of the evaluation assignment task for the **Full Stack Developer Intern** application.

The application is built using **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**, featuring interactive custom L&D carousels, client marques, and a functional lead ingestion API.

---

## 🚀 Live Demo & Repository
- **Vercel Live Deployment:** [Deployed Live Link](https://enterprise-accredian-clone.vercel.app/)
- **GitHub Repository:** [accredian](https://github.com/madhav-kr-singh/enterprise-accredian-clone.git)

---

## 🛠️ Approach Taken

1. **Complete Responsive UI (Mobile + Desktop):**
   - **Clean and Structured UI:** Follows a mobile-first design system optimizing typography, grids, and mobile-bleed image cells for smaller screens before scaling up.
   - **Reusable Components:** Highly modular components (e.g. `TrustBar`, `EnquiryModal`, `CourseSegmentation`) cleanly structured to avoid code duplication.
   - **Smooth Navigation:** Implemented a sticky glassmorphism header with smooth anchor scrolling between sections.
   - **Interactive Header:** Sticky glassmorphism header with navigation anchoring and a custom floating mobile category dropdown card.
   - **Seamless Marquee (`TrustBar`):** Infinite logo carousel displaying corporate partnerships (Reliance, HCL, IBM, ADP, Bayer, CRIF) scrolling with zero visual restarts.
   - **Stats Section:** Vertical columns on desktop, transitioning into horizontal row-based badge cards on mobile.
   - **Accredian Edgeusp:** Full-width strategic diagram scaling proportionally inside `max-w-7xl` boundaries using native SVG properties.
   - **CAT Framework & Domain Expertise:** Responsive grid mapping corporate competencies and syllabus structures.
   - **L&D Course Carousel:** Mobile-optimized infinite sliding slideshow that locks single product cards on track without scrolling backwards.
   - **Support Headset Banner (Final CTA):** High-fidelity card layout with concentric ring backgrounds, double-rim squircle outline, and a mirrored smiley agent headset icon.
   - **Light Footer:** Solid white background (`bg-white`) footer featuring flat social assets and left-aligned contact detail layouts.

2. ⭐ **Bonus Task Completed (Lead Capture & API Backend):**
   - **Added a Lead Capture Form:** Designed a desktop split-screen popover (`EnquiryModal`) displaying a modern glass office background image (`/asset/enquiry.webp`) on the left and high-contrast minimal input fields on the right. Includes international phone flags (`🇮🇳 +91`) and custom hamburger-style dropdowns.
   - **Stored Data via API (Next.js API route):** Built an asynchronous Next.js route handler (`POST /api/enquire`) that validates payloads on the backend and acts as a mock database by securely appending the data into a local `enquiries.json` file.

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
   git clone https://github.com/madhav-kr-singh/enterprise-accredian-clone.git
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

## 🤖 AI Usage Explanation

This project was developed by pairing with AI tools, strictly following the intern assignment guidelines.

### Where AI Helped
- **Antigravity AI Agent:** Used the Antigravity agent to accelerate the boilerplate structure for the Next.js App Router, JSON API endpoint, and technical SEO canonical updates.
- **Form Validation Scaffolds:** Rapidly set up basic React validation states (`success`, `loading`, `error`) and standard form fields.
- **Base CSS Variables:** Bootstrapped the color configuration matching Accredian's blue brand tones.

### Manual Refinements & Performance Fixes (My Code Enhancements)
- **Double-Track Marquee:** Replaced triplicated marquee arrays with two identical content tracks translating by exactly `-50%`. This removed sub-pixel round-off errors, resulting in a 100% seamless infinite marquee.
- **Custom Inline SVG Coordinates:** Coded custom SVGs for social platforms and the support smiley headset to ensure crisp scaling, then mirrored the headset SVG horizontally (`-scale-x-100`) to match the mockup logo.
- **Enquiry Modal Dropdowns:** Replaced native browser dropdown lists with custom-styled React float-popovers that slide down like the mobile navigation categories overlay.
- **Dynamic Mobile Aspect-Ratios:** Swapped the USP diagrams to use native `<img>` tags (`w-full h-auto`) to scale cleanly inside the `max-w-7xl` container without fixed container height restrictions.
- **Scroll Buffer Protection:** Patched scrolling height offsets in modal containers (`pb-36`) so absolute dropdown overlays expand without clipping on smaller mobile viewports.
- **Technical SEO & Core Web Vitals:** Refactored the `PageShell` component to use static imports instead of `next/dynamic`, replacing a blank "CSR shell" with full Server-Side Rendering (SSR). This eliminated a massive element render delay, dramatically improving Largest Contentful Paint (LCP) and ensuring Googlebot instantly crawls the full page structure.
- **Advanced Security & Indexing Headers:** Implemented strict HTTP headers in `next.config.ts`, including `Content-Security-Policy`, `X-Content-Type-Options`, and conditional `X-Robots-Tag: noindex, nofollow` specifically targeting Vercel preview environments to prevent duplicate-content indexing penalties.
- **GEO (Generative Engine Optimization):** Engineered an `llms.txt` file structured explicitly for AI search crawlers (ChatGPT, Perplexity) citing key organizational metrics. Successfully requested indexing and passed the Google Search Console "Live Test" with zero errors.

---

## 🔮 Improvements I would make with more time
1. **Production Database:** Sync `/api/enquire` to a serverless Postgres database (like Neon or Supabase) rather than writing to a local JSON file.
2. **Sales Notifications:** Integrate automated L&D email routing via SendGrid or Resend to alert L&D staff in real-time upon submission.
3. **Leads Dashboard (`/admin`):** Build a secure, authenticated dashboard displaying submitted leads in a searchable grid with CSV export options.
