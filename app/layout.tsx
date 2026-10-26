import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
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
        <meta name="facebook-domain-verification" content="4lw3xqjf7wvh84799c2emjy0zzrp1c" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Renova Training",
              url: "https://renovatraining.com",
              logo: "https://renovatraining.com/renova-logo.png",
              sameAs: ["https://www.instagram.com/renova.training"],
            }),
          }}
        />

        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '2089620335185292');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} bg-background text-foreground`}>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2089620335185292&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
