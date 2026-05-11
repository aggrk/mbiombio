import type { Metadata } from "next";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["500", "600", "700"],
});

/* ── Metadata ────────────────────────────────────────────────
   Every field here is read by Google, Bing, and social
   previews. The description and keywords mirror the exact
   phrases people type when searching for delivery in Arusha.
─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  /* Primary */
  title: {
    default: "MbioMbio | Fastest Delivery Service in Arusha, Tanzania",
    template: "%s | MbioMbio Delivery Arusha",
  },
  description:
    "MbioMbio is Arusha's fastest delivery service. Motorcycle, car, and van deliveries across Arusha and Northern Tanzania. 15-minute pickup, live tracking, WhatsApp orders. Same-day delivery available.",

  /* Keywords — match real search queries */
  keywords: [
    "delivery service Arusha",
    "courier Arusha",
    "same day delivery Arusha",
    "package delivery Arusha Tanzania",
    "fast delivery Arusha",
    "motorcycle courier Arusha",
    "delivery company Arusha",
    "express delivery Arusha",
    "parcel delivery Arusha",
    "food delivery Arusha",
    "document delivery Arusha",
    "logistics Arusha Tanzania",
    "courier service Tanzania",
    "delivery Northern Tanzania",
    "MbioMbio delivery",
    "delivery near me Arusha",
    "on demand delivery Arusha",
    "van delivery Arusha",
    "last mile delivery Arusha",
    "WhatsApp delivery order Arusha",
  ],

  /* Canonical URL — replace with your real domain */
  metadataBase: new URL("https://www.mbiombio.com"),
  alternates: {
    canonical: "/",
  },

  /* Authorship */
  authors: [{ name: "MbioMbio Delivery", url: "https://www.mbiombio.com" }],
  creator: "MbioMbio Delivery",
  publisher: "MbioMbio Delivery",

  /* Open Graph — controls how the link looks when shared on
     WhatsApp, Facebook, Twitter, etc. */
  openGraph: {
    type: "website",
    locale: "en_TZ",
    url: "https://www.mbiombio.com",
    siteName: "MbioMbio Delivery",
    title: "MbioMbio | Fastest Delivery Service in Arusha, Tanzania",
    description:
      "Motorcycle, car, and van deliveries across Arusha and Northern Tanzania. 15-minute pickup, live tracking, WhatsApp orders.",
    // images: [
    //   {
    //     url: "/images/og-image.jpg", // create a 1200×630px image for best results
    //     width: 1200,
    //     height: 630,
    //     alt: "MbioMbio Delivery — Arusha's fastest courier service",
    //   },
    // ],
  },

  /* Twitter / X card */
  twitter: {
    card: "summary_large_image",
    title: "MbioMbio | Fastest Delivery in Arusha",
    description:
      "15-minute pickup. Motorcycles, cars & vans across Arusha and Northern Tanzania.",
    images: ["/images/og-image.jpg"],
  },

  /* Robots — tell Google to index everything */
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

  /* Favicon */
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  /* Verification — paste tokens from Google Search Console
     and Bing Webmaster Tools once you have them */
  // verification: {
  //   google: "YOUR_GOOGLE_VERIFICATION_TOKEN",
  //   yandex: "YOUR_YANDEX_TOKEN",
  // },
};

/* ── JSON-LD Structured Data ─────────────────────────────────
   This is the most powerful SEO addition. Google reads this
   and may show rich results (star ratings, business info,
   service area) directly in search results.
─────────────────────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.mbiombio.com/#business",
      name: "MbioMbio Delivery",
      alternateName: "MbioMbio",
      description:
        "Arusha's fastest delivery service. Motorcycle, car, and van deliveries across Arusha and Northern Tanzania with 15-minute pickup and live tracking.",
      url: "https://www.mbiombio.com",
      telephone: "+255758689802",
      email: "info@mbiombio.com",
      priceRange: "TSh 5,000 – TSh 25,000",
      currenciesAccepted: "TZS",
      paymentAccepted: "Cash, Mobile Money",
      // image: "https://www.mbiombio.com/images/og-image.jpg",
      logo: "https://www.mbiombio.com/images/logo.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Olasiti",
        addressLocality: "Arusha",
        addressRegion: "Arusha Region",
        addressCountry: "TZ",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -3.3869,
        longitude: 36.683,
      },
      areaServed: [
        {
          "@type": "City",
          name: "Arusha",
          "@id": "https://www.wikidata.org/wiki/Q51695",
        },
        {
          "@type": "AdministrativeArea",
          name: "Northern Tanzania",
        },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "07:00",
          closes: "20:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Sunday"],
          opens: "08:00",
          closes: "18:00",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Delivery Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Motorcycle Delivery",
              description:
                "Fast motorcycle courier for documents, food, and small packages within Arusha. 15–45 minute delivery.",
            },
            price: "5000",
            priceCurrency: "TZS",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Car Delivery",
              description:
                "Car delivery for medium and fragile items across Arusha. 30–90 minute delivery.",
            },
            price: "12000",
            priceCurrency: "TZS",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Van Delivery",
              description:
                "Van delivery for bulk orders and heavy cargo. Same-day delivery across Arusha and Northern Tanzania.",
            },
            price: "25000",
            priceCurrency: "TZS",
          },
        ],
      },
      sameAs: ["https://wa.me/255758689802"],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.mbiombio.com/#website",
      url: "https://www.mbiombio.com",
      name: "MbioMbio Delivery",
      description: "Arusha's fastest delivery service",
      publisher: {
        "@id": "https://www.mbiombio.com/#business",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://www.mbiombio.com/?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {/* JSON-LD injected in <head> — read by Google crawlers */}
        <Script
          id="json-ld-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
