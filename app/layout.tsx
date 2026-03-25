import type { Metadata } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond } from 'next/font/google';
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-playfair',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Iście Kwieciście - Ogrody, Florystyka, Aranżacja Roślin | Warszawa i okolice",
  description: "Kompleksowe usługi ogrodnicze, florystyka i aranżacja roślin w Warszawie i okolicach do 30km. Projektowanie ogrodów, bukiety ślubne, dekoracje kwiatowe. Profesjonalna obsługa.",
  keywords: "ogrody Warszawa, florystyka Warszawa, projektowanie ogrodów Warszawa, bukiety ślubne Warszawa, dekoracje kwiatowe, aranżacja roślin, ogrodnik Warszawa, florystyka okolice Warszawy, Iście Kwieciście",
  authors: [{ name: "Iście Kwieciście" }],
  openGraph: {
    title: "Iście Kwieciście - Ogrody, Florystyka, Aranżacja | Warszawa",
    description: "Kompleksowe usługi ogrodnicze, florystyka i aranżacja roślin w Warszawie i okolicach",
    type: "website",
    locale: "pl_PL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Iście Kwieciście',
    description: 'Kompleksowe usługi ogrodnicze, florystyka i aranżacja roślin w Warszawie i okolicach do 30km',
    url: 'https://isciekwieciscie.pl',
    telephone: '+48-123-456-789',
    email: 'kontakt@isciekwieciscie.pl',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Warszawa',
      addressCountry: 'PL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 52.2297,
      longitude: 21.0122,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Warszawa',
      },
      {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: 52.2297,
          longitude: 21.0122,
        },
        geoRadius: '30000',
      },
    ],
    priceRange: '$$',
    image: 'https://isciekwieciscie.pl/logo.png',
    sameAs: [
      'https://www.instagram.com/isciekwieciscie/',
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '14:00',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Usługi ogrodnicze i florystyczne',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Projektowanie ogrodów',
            description: 'Kompleksowe projektowanie i realizacja ogrodów w Warszawie i okolicach',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Florystyka ślubna',
            description: 'Bukiety ślubne, dekoracje weselne i kościelne',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Aranżacja roślin',
            description: 'Aranżacja balkonów, tarasów i wnętrz roślinami',
          },
        },
      ],
    },
  };

  return (
    <html lang="pl">
      <head>
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${cormorant.variable} antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
