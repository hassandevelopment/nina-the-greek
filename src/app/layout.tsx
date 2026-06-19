import type { Metadata } from "next";
import { Cormorant_Garamond, Hanken_Grotesk } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nina-the-greek.vercel.app"),
  title: {
    default: "Nina The Greek | Greek Restaurant in Saar, Bahrain",
    template: "%s | Nina The Greek",
  },
  description:
    "Authentic Greek cuisine in the heart of Saar, Bahrain. Fresh Mediterranean flavours, warm hospitality, and a menu crafted with passion. Open daily 3 PM - 11 PM.",
  keywords: [
    "Greek restaurant",
    "Bahrain",
    "Saar",
    "Mediterranean food",
    "Greek food",
    "Nina The Greek",
    "dining Bahrain",
  ],
  authors: [{ name: "Nina The Greek" }],
  openGraph: {
    title: "Nina The Greek | Greek Restaurant in Saar, Bahrain",
    description:
      "Authentic Greek cuisine in the heart of Saar, Bahrain. Fresh Mediterranean flavours, warm hospitality, and a menu crafted with passion.",
    url: "https://nina-the-greek.vercel.app",
    siteName: "Nina The Greek",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nina The Greek Restaurant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nina The Greek | Greek Restaurant in Saar, Bahrain",
    description:
      "Authentic Greek cuisine in the heart of Saar, Bahrain. Fresh Mediterranean flavours and warm hospitality.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Nina The Greek",
  description:
    "Authentic Greek cuisine in the heart of Saar, Bahrain. Fresh Mediterranean flavours, warm hospitality, and a menu crafted with passion.",
  url: "https://nina-the-greek.vercel.app",
  image: "https://nina-the-greek.vercel.app/og-image.png",
  telephone: "+973 1732 2777",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Avenue 57",
    addressLocality: "Maqabah",
    addressRegion: "Saar",
    addressCountry: "BH",
  },
  servesCuisine: "Greek",
  priceRange: "$$",
  openingHours: "Mo-Su 15:00-23:00",
  sameAs: ["https://www.instagram.com/nina_the_greek/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${hanken.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-nina-cream text-nina-body font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
