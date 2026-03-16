import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const baseUrl = "https://pbara.org.ng";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Pentecost Baptist Association - Royal Ambassadors",
  url: baseUrl,
  logo: `${baseUrl}/images/ra-logo.png`,
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "PBA Royal Ambassadors | Pentecost Baptist Association",
    template: "%s | PBA Royal Ambassadors",
  },
  description:
    "Royal Ambassadors of Nigeria — building godly boys into disciplined men of faith and integrity through the Pentecost Baptist Association.",
  keywords: ["Royal Ambassadors", "PBA", "Pentecost Baptist", "Nigeria", "Christian youth", "RA"],
  openGraph: {
    title: "PBA Royal Ambassadors | Pentecost Baptist Association",
    description: "Building godly ambassadors for Christ through discipline, character development, and the Word of God.",
    url: baseUrl,
    siteName: "PBA Royal Ambassadors",
    images: [{ url: "/images/ra-logo.png", width: 512, height: 512, alt: "Royal Ambassadors logo" }],
    locale: "en_NG",
    type: "website",
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
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-light-bg text-text-dark font-body antialiased">
        <Providers>
          <AnnouncementBar />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
