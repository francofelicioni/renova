import Hero from "@/components/hero"
import WhyOurMethod from "@/components/why-our-method"
import PricingCards from "@/components/pricing-cards"
import SocialProof from "@/components/social-proof"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <WhyOurMethod />
      <PricingCards />
      <SocialProof />
      <ContactForm />
    </main>
  )
}
