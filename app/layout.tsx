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
  metadataBase: new URL("https://renovatraining.com"),
  title: "Renova Training – Recomposición corporal para personas que ya entrenan",
  description:
    "Entrenamiento, nutrición y hábitos para personas ocupadas que ya van al gimnasio y quieren resultados reales. Planes online personalizados, seguimiento y soporte real.",
  keywords: [
    "recomposición corporal",
    "entrenamiento personalizado online",
    "nutrición para personas ocupadas",
    "ganar músculo y perder grasa",
    "planes de entrenamiento gimnasio",
    "coaching online entrenamiento",
  ],
  authors: [{ name: "Renova Training" }],
  creator: "Renova Training",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://renovatraining.com",
    title: "Renova Training – Recomposición corporal para personas que ya entrenan",
    description:
      "Planes online de entrenamiento, nutrición y hábitos para personas ocupadas que ya entrenan y quieren resultados reales.",
    siteName: "Renova Training",
    images: [
      {
        url: "https://renovatraining.com/renova-logo.png",
        width: 1200,
        height: 630,
        alt: "Renova Training – Entrenamiento y recomposición corporal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Renova Training – Recomposición corporal para personas que ya entrenan",
    description:
      "Entrenamiento, nutrición y hábitos para personas ocupadas que ya van al gimnasio y quieren resultados reales.",
    creator: "@renovatraining",
    images: ["https://renovatraining.com/renova-logo.png"],
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
    canonical: "https://renovatraining.com",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  generator: "v0.app",
  icons: {
    icon: "/apple-touch-icon.png",
    apple: "/apple-touch-icon.png",
  },
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
        <link rel="icon" href="/apple-touch-icon.png" sizes="any" />
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
