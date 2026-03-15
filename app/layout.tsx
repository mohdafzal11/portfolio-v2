import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/profile.jpg",
  },
  title: "Mohd Afzal | Software Engineer | Web3 & AI Developer",
  description:
    "Software Engineer specializing in Web3, AI, and full-stack development. Building crypto analytics platforms, social media AI agents, and scalable web solutions. Based in Bengaluru, India.",
  keywords: [
    "Mohd Afzal",
    "Software Engineer",
    "Web3 Developer",
    "AI Engineer",
    "Full Stack Developer",
    "Crypto Analytics",
    "Next.js",
    "React",
    "Blockchain",
  ],
  authors: [{ name: "Mohd Afzal" }],
  creator: "Mohd Afzal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mohdafzal.dev",
    title: "Mohd Afzal | Software Engineer",
    description:
      "Software Engineer specializing in Web3, AI, and full-stack development. Building innovative crypto analytics and AI-powered solutions.",
    siteName: "Mohd Afzal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohd Afzal | Software Engineer",
    description:
      "Software Engineer specializing in Web3, AI, and full-stack development",
    creator: "@0x_Afzal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
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
      <body className={`${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
