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
  title: "FAST-TRACK Coaching - Transformación Visible en 12 Semanas",
  description: "Coaching intensivo y personalizado para definir, ganar músculo o alcanzar tu pico de rendimiento.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} bg-background text-foreground`}>{children}</body>
    </html>
  )
}
