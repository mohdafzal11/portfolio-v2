import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  // The only literal colour outside globals.css: a browser meta value that
  // cannot reference a CSS variable. Keep in sync with --bg.
  themeColor: "#0a0a0a",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const SITE_URL = "https://mohdafzal.dev";
const DESCRIPTION =
  "Software engineer building AI agent infrastructure and full-stack Web3 platforms. Go and PostgreSQL backends, React and Next.js frontends, LLM orchestration. Based in Bengaluru, India.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  // Favicon comes from app/icon.png (Next's file convention) — the same
  // portrait used in the About section. No `icons` entry needed here; adding
  // one would emit a second, competing <link rel="icon">.
  title: "Mohd Afzal — Software Engineer",
  description: DESCRIPTION,
  keywords: [
    "Mohd Afzal",
    "Software Engineer",
    "Go Developer",
    "AI Agent Infrastructure",
    "Full Stack Developer",
    "Web3 Developer",
    "Next.js",
    "React",
    "PostgreSQL",
    "Bengaluru",
  ],
  authors: [{ name: "Mohd Afzal", url: SITE_URL }],
  creator: "Mohd Afzal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "Mohd Afzal — Software Engineer",
    description: DESCRIPTION,
    siteName: "Mohd Afzal",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohd Afzal — Software Engineer",
    description: DESCRIPTION,
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
    <html lang="en">
      <head>
        {/* Marks the document as JS-capable before first paint. The scroll
            reveal's hidden state is gated on this class, so without JS the
            content simply renders visible instead of staying at opacity 0. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
