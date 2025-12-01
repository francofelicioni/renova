import Hero from "@/components/hero"
import HowItWorks from "@/components/how-it-works"
import Profiles from "@/components/profiles"
import PricingCards from "@/components/pricing-cards"
import LeadMagnet from "@/components/lead-magnet"
import About from "@/components/about"
import SocialProof from "@/components/social-proof"
import FAQ from "@/components/faq"
import FinalCta from "@/components/final-cta"
import ContactForm from "@/components/contact-form"

export const metadata = {
  title: "Renova Training – Recomposición corporal para personas que ya entrenan",
  description:
    "Entrenamiento, nutrición y hábitos para personas ocupadas que ya van al gimnasio y quieren resultados reales. Planes online personalizados, seguimiento y soporte real.",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background" role="main">
      <Hero />
      <HowItWorks />
      <Profiles />
      <PricingCards />
      <FinalCta />
      <LeadMagnet />
      <About />
      <SocialProof />
      <FAQ />
      <ContactForm />
    </main>
  )
}
