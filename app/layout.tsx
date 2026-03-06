import type { Metadata } from "next";
import { Inter, DM_Serif_Display, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  weight: "400",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const siteTitle = "nathan sou — builder, traveler, indie dev";
const siteDescription =
  "personal site of nathan sou — founder of climbing cat, cto at devil child studio. travel guides, tech blog, and product showcase.";

export const metadata: Metadata = {
  metadataBase: new URL("https://nathansou.com"),
  title: { default: siteTitle, template: "%s | nathan sou" },
  description: siteDescription,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nathansou.com",
    siteName: "nathan sou",
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${dmSerif.variable} ${jetbrains.variable} antialiased`}
      >
        <Nav />
        <main className="min-h-[calc(100vh-140px)]">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
