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

export const metadata: Metadata = {
  metadataBase: new URL("https://nathansou.com"),
  title: {
    default: "Nathan Sou — Builder, Traveler, Indie Dev",
    template: "%s | Nathan Sou",
  },
  description:
    "Personal site of Nathan Sou — founder of climbing cat, CTO at devil child studio. Travel guides, tech blog, and product showcase.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nathansou.com",
    siteName: "Nathan Sou",
    title: "Nathan Sou — Builder, Traveler, Indie Dev",
    description:
      "Personal site of Nathan Sou — founder of climbing cat, CTO at devil child studio. Travel guides, tech blog, and product showcase.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nathan Sou — Builder, Traveler, Indie Dev",
    description:
      "Personal site of Nathan Sou — founder of climbing cat, CTO at devil child studio.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
