"use client"

import Image from "next/image"
import Link from "next/link"

export default function Header() {
  const scrollToPricing = () => {
    const element = document.getElementById("planes")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToApplication = () => {
    const element = document.getElementById("aplicar")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/renova-logo.png"
              alt="Renova Training"
              width={180}
              height={50}
              className="h-auto w-auto max-h-12 object-contain"
              priority
            />
          </Link>
          <nav className="hidden sm:flex items-center gap-6">
            <button
              onClick={scrollToPricing}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Planes
            </button>
            <button
              onClick={scrollToApplication}
              className="text-sm font-medium text-accent hover:text-accent/80 transition-colors"
            >
              Aplicar
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}

