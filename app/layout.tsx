import type { Metadata } from "next";
import { Geist, Space_Mono } from "next/font/google"; // Removed Geist_Mono as we are replacing it or adding alongside
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Mohd Afzal | Software Engineer | Web3 & AI Developer",
  description: "Software Engineer specializing in Web3, AI, and full-stack development. Building crypto analytics platforms, social media AI agents, and scalable web solutions. Based in Bengaluru, India.",
  keywords: ["Mohd Afzal", "Software Engineer", "Web3 Developer", "AI Engineer", "Full Stack Developer", "Crypto Analytics", "Next.js", "React", "Blockchain"],
  authors: [{ name: "Mohd Afzal" }],
  creator: "Mohd Afzal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mohdafzal.dev",
    title: "Mohd Afzal | Software Engineer",
    description: "Software Engineer specializing in Web3, AI, and full-stack development. Building innovative crypto analytics and AI-powered solutions.",
    siteName: "Mohd Afzal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohd Afzal | Software Engineer",
    description: "Software Engineer specializing in Web3, AI, and full-stack development",
    creator: "@0x_Afzal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          geistSans.variable,
          spaceMono.variable,
          "antialiased min-h-screen flex flex-col bg-background text-foreground"
        )}
      >
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
