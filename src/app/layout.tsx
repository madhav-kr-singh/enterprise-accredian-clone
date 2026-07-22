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
  title: "Accredian Enterprise — Cultivate High-Performance Corporate Teams",
  description: "Accredian Enterprise offers customized L&D solutions, Gen-AI cohort bootcamps, and real-time competency tracking for tech, product, and leadership growth.",
  icons: {
    icon: "https://res.cloudinary.com/dpr83w1ub/image/upload/v1784746945/tab-icon_mypayy.webp",
  },
  keywords: [
    "Corporate Upskilling",
    "L&D Solutions",
    "Employee Training Programs",
    "Gen-AI Enterprise Training",
    "Product Management Leadership",
    "Executive Education",
    "Tech Competency Framework",
    "Strategic Skill Enhancement"
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
    title: "Accredian Enterprise — Cultivate High-Performance Corporate Teams",
    description: "Accelerate your corporate growth with customized curricula, sandbox environments, and expert L&D mentorship.",
    siteName: "Accredian Enterprise",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accredian Enterprise — Cultivate High-Performance Corporate Teams",
    description: "Accelerate your corporate growth with customized curricula, sandbox environments, and expert L&D mentorship.",
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
                  "@type": "Organization",
                  "@id": "https://enterprise.accredian.com/#organization",
                  "name": "Accredian",
                  "url": "https://enterprise.accredian.com",
                  "logo": "https://enterprise.accredian.com/asset/imgi_1_logo.webp",
                  "sameAs": [
                    "https://www.linkedin.com/company/accredian",
                    "https://twitter.com/accredian",
                    "https://www.instagram.com/accredian"
                  ],
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+91-9999999999",
                    "contactType": "customer service",
                    "email": "enterprise@accredian.com"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://enterprise.accredian.com/#website",
                  "url": "https://enterprise.accredian.com",
                  "name": "Accredian Enterprise",
                  "description": "Cultivate High-Performance Corporate Teams through customized upskilling.",
                  "publisher": {
                    "@id": "https://enterprise.accredian.com/#organization"
                  }
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
