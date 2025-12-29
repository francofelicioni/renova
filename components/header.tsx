"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToPricing = () => {
    const element = document.getElementById("planes")
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  const scrollToApplication = () => {
    const element = document.getElementById("aplicar")
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/renova-logo-t.png"
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
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="sm:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <nav className="sm:hidden mt-4 pb-4 border-t border-border/40 pt-4 flex flex-col gap-4">
            <button
              onClick={scrollToPricing}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
            >
              Planes
            </button>
            <button
              onClick={scrollToApplication}
              className="text-sm font-medium text-accent hover:text-accent/80 transition-colors text-left"
            >
              Aplicar
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}

