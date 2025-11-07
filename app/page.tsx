import Hero from "@/components/hero"
import WhyOurMethod from "@/components/why-our-method"
import PricingCards from "@/components/pricing-cards"
import SocialProof from "@/components/social-proof"
import ContactForm from "@/components/contact-form"

export const metadata = {
  title: "FAST-TRACK Coaching - Transformación Garantizada",
  description: "Plan de coaching intensivo personalizado. Resultados reales en 12 semanas. Garantía de progreso.",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background" role="main">
      <Hero />
      <WhyOurMethod />
      <PricingCards />
      <SocialProof />
      <ContactForm />
    </main>
  )
}
