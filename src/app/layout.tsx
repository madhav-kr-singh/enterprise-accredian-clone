import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Enterprise AI & L&D Training India | Accredian Enterprise",
  description: "Accredian Enterprise delivers Gen AI bootcamps, IIT/IIM-certified cohort programs, and CAT-framework skill gap analysis for corporate teams. 10,000+ professionals trained across Reliance, HCL, IBM, ADP, and CRIF.",
  icons: {
    icon: "https://res.cloudinary.com/dpr83w1ub/image/upload/v1784746945/tab-icon_mypayy.webp",
  },
  keywords: [
    "Gen AI corporate training India",
    "enterprise upskilling program India",
    "corporate AI training program",
    "cohort based upskilling enterprise",
    "skill gap analysis enterprise",
    "CAT framework corporate training",
    "IIT IIM executive education corporate",
    "L&D solutions enterprise",
    "corporate upskilling solutions India",
    "employee AI training program",
    "leadership development program enterprise",
    "Accredian Enterprise training"
  ],
  authors: [{ name: "Accredian" }],
  creator: "Accredian L&D Team",
  publisher: "Accredian",
  alternates: {
    canonical: "https://enterprise.accredian.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://enterprise.accredian.com",
    title: "Enterprise AI & L&D Training India | Accredian Enterprise",
    description: "Gen AI bootcamps, IIT/IIM-certified cohort programs, and CAT-framework upskilling for corporate teams. 10,000+ professionals trained.",
    siteName: "Accredian Enterprise",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise AI & L&D Training India | Accredian Enterprise",
    description: "Gen AI bootcamps, IIT/IIM-certified cohort programs, and CAT-framework upskilling for corporate teams. 10,000+ professionals trained.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": ["Organization", "EducationOrganization"],
                  "@id": "https://enterprise.accredian.com/#organization",
                  "name": "Accredian Enterprise",
                  "url": "https://enterprise.accredian.com",
                  "logo": "https://res.cloudinary.com/dpr83w1ub/image/upload/v1784745100/imgi_1_logo_ioxpuz.webp",
                  "description": "Accredian Enterprise delivers Gen AI bootcamps, IIT/IIM-certified cohort programs, and CAT-framework skill gap analysis for corporate teams across India.",
                  "sameAs": [
                    "https://www.linkedin.com/company/accredian",
                    "https://twitter.com/accredian",
                    "https://www.instagram.com/accredian"
                  ],
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "customer service",
                    "email": "enterprise@accredian.com",
                    "areaServed": "IN"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://enterprise.accredian.com/#website",
                  "url": "https://enterprise.accredian.com",
                  "name": "Accredian Enterprise — Gen AI & L&D Training India",
                  "description": "Enterprise AI upskilling, cohort-based corporate training, and skill gap analysis. 10,000+ professionals trained across Reliance, HCL, IBM, ADP, and CRIF.",
                  "publisher": {
                    "@id": "https://enterprise.accredian.com/#organization"
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://enterprise.accredian.com/#faq",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "What is Gen AI enterprise training?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Gen AI enterprise training is a structured corporate upskilling program that teaches employees to apply Generative AI tools — such as LLMs, prompt engineering, and AI agents — to real business workflows. Accredian's Gen AI bootcamps are cohort-based, live instructor-led, and customized per team function."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How do companies upskill employees in AI?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Companies upskill employees in AI through: (1) Skill gap analysis to identify team-specific needs, (2) Customized curriculum design aligned with business goals, (3) Cohort-based live training with industry mentors, (4) Hands-on sandbox projects using real company data, (5) Post-training competency assessment and ROI tracking."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What is the CAT framework in corporate training?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The CAT Framework (Concept, Application, Tools) is Accredian's proprietary 3-stage training model. Concept — theoretical grounding in the domain. Application — real-world case studies and problem-solving. Tools — hands-on practice with industry-standard platforms. This framework ensures employees can immediately apply learning to their job roles."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How long does enterprise upskilling take?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Accredian Enterprise programs typically run 8–12 weeks for cohort-based upskilling. Awareness workshops can be completed in 1–2 days. Leadership elevation programs for CXOs run 4–6 months. Program duration is customized based on team size, domain depth, and organizational constraints."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What is the cost of corporate AI training in India?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Corporate AI training in India typically costs INR 1.5 lakh to INR 4 lakh for a 100-person awareness workshop, and INR 8 lakh to INR 25 lakh for multi-week role-specific cohort programs. Accredian Enterprise pricing is customized based on cohort size, program depth, and delivery format. Contact enterprise@accredian.com for a custom quote."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What domains does Accredian Enterprise cover?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Accredian Enterprise covers: Data Science & AI, Generative AI & LLMs, Product Management, Digital Business & Fintech, Leadership & CXO Development, Tech & Engineering Excellence, and Operations Management. Programs are available in collaboration with IITs, IIMs, XLRI, and SP Jain."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How to measure ROI of corporate training programs?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "ROI of corporate training is measured through: (1) Pre/post competency assessments to quantify skill improvement, (2) Project output quality scored by mentors, (3) Manager-reported productivity improvement 90 days post-training, (4) Retention rate of trained employees, (5) Business metric impact — e.g., AI tool adoption rate, time-to-delivery reduction. Accredian provides real-time ROI dashboards for enterprise clients."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Which companies has Accredian Enterprise trained?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Accredian Enterprise has trained 10,000+ professionals at organizations including Reliance, HCL, IBM, ADP, CRIF, and Bayer. Programs span technology, product, operations, and leadership functions across mid-size and Fortune 500 enterprises in India."
                      }
                    }
                  ]
                }
              ]
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
