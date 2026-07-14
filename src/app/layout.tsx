import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = "https://faiz-rehman.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Faiz Ur Rehman — Software Engineer | Full-Stack, AI Automation & Quality",
    template: "%s — Faiz Ur Rehman",
  },
  description:
    "Software engineer specializing in full-stack development, AI-powered automation, and quality engineering. I believe reliable software starts with understanding the system behind it — not just making it work.",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Faiz Ur Rehman",
    title: "Faiz Ur Rehman — Software Engineer",
    description:
      "Full-stack development, AI automation, and quality engineering. Based in Bahrain, working globally.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: { index: true, follow: true },
};

const themeInit = `(function(){try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark"){document.documentElement.dataset.theme=t}else{document.documentElement.dataset.theme="dark"}}catch(e){document.documentElement.dataset.theme="dark"}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="noise min-h-full flex flex-col">
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <JsonLd />
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
