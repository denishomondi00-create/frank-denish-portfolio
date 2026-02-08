import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-space",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  preload: true,
});

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://frank-denish-portfolio.vercel.app"),
  title: "Frank Denish Omondi | Technical Support & Automation Specialist",
  description: "Building resilient digital systems and AI-assisted platforms across Africa. Specializing in civic technology, automation, and intelligent systems.",
  keywords: ["automation", "civic technology", "AI systems", "Kenya", "software engineer", "full-stack developer"],
  authors: [{ name: "Frank Denish Omondi" }],
  openGraph: {
    title: "Frank Denish Omondi | Technical Support & Automation Specialist",
    description: "Building resilient digital systems and AI-assisted platforms across Africa.",
    url: "https://frankdenish.com",
    siteName: "Frank Denish Omondi Portfolio",
    images: ['/images/og-image.png'],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frank Denish Omondi | Technical Support & Automation Specialist",
    description: "Building resilient digital systems and AI-assisted platforms across Africa.",
    images: ['/images/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-sans bg-slate-50 text-slate-900 antialiased`}>
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}