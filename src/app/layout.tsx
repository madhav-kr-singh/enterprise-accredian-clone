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
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
