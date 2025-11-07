import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://fast-track-coaching.com"),
  title: "FAST-TRACK Coaching - Transformación Visible en 12 Semanas Garantizado",
  description:
    "Coaching intensivo y personalizado para definir, ganar músculo o alcanzar tu pico de rendimiento. Plan 100% personalizado con garantía de progreso. Transformación comprobada en 12 semanas.",
  keywords: [
    "coaching fitness",
    "entrenamiento personalizado",
    "nutrición deportiva",
    "ganancia muscular",
    "definición corporal",
    "transformación física",
  ],
  authors: [{ name: "FAST-TRACK Coaching" }],
  creator: "FAST-TRACK Coaching",

  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://fast-track-coaching.com",
    title: "FAST-TRACK Coaching - Transformación Visible en 12 Semanas",
    description: "Coaching intensivo y personalizado para definir, ganar músculo o alcanzar tu pico de rendimiento.",
    siteName: "FAST-TRACK Coaching",
    images: [
      {
        url: "https://fast-track-coaching.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FAST-TRACK Coaching - Transformación Física",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "FAST-TRACK Coaching - Transformación en 12 Semanas",
    description: "Plan personalizado con garantía de progreso. Hombre y mujer entrenando juntos.",
    creator: "@fasttrackcoaching",
    images: ["https://fast-track-coaching.com/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://fast-track-coaching.com",
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "FAST-TRACK Coaching",
              description: "Coaching intensivo de fitness personalizado con garantía de progreso",
              url: "https://fast-track-coaching.com",
              telephone: "+34600000000",
              areaServed: ["AR", "ES", "LA"],
              priceRange: "€€",
              image: "https://fast-track-coaching.com/og-image.jpg",
              sameAs: ["https://www.instagram.com/fasttrackcoaching", "https://www.tiktok.com/@fasttrackcoaching"],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "FAST-TRACK - Transformación Visible en 12 Semanas",
              description:
                "Programa de coaching intensivo personalizado con plan de entrenamiento, nutrición y seguimiento semanal",
              provider: {
                "@type": "LocalBusiness",
                name: "FAST-TRACK Coaching",
              },
              areaServed: "Worldwide",
              offers: {
                "@type": "AggregateOffer",
                priceCurrency: "EUR",
                highPrice: "299",
                lowPrice: "39",
                offerCount: "2",
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AggregateRating",
              ratingValue: "5.0",
              ratingCount: "3",
              bestRating: "5",
              worstRating: "1",
              name: "FAST-TRACK Coaching",
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} bg-background text-foreground`}>{children}</body>
    </html>
  )
}
