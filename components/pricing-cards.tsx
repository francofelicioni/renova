"use client"
import { Check } from "lucide-react"
import { plans, type Plan } from "@/lib/plans"

type PricingCardProps = Plan & {
  onSelectPlan?: (planId: string) => void
}

function PricingCard({ name, price, tagline, description, bullets, highlight, note, ctaLabel, id, onSelectPlan }: PricingCardProps) {
  const scrollToApplication = () => {
    const element = document.getElementById("aplicar")
    element?.scrollIntoView({ behavior: "smooth" })
    if (onSelectPlan) {
      onSelectPlan(id)
    }
  }

  return (
    <article
      className={`flex flex-col h-full rounded-2xl border bg-card/90 p-6 sm:p-8 shadow-lg transition-all duration-300 ${
        highlight
          ? "border-accent shadow-accent/20 bg-gradient-to-br from-accent/10 via-card to-card"
          : "border-border hover:border-accent/60 hover:shadow-accent/10"
      }`}
    >
      {highlight && (
        <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-accent text-accent-foreground px-3 py-1 text-xs font-semibold">
          Más elegido
        </div>
      )}
      <div className="mb-3">
        <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-tight">{name}</h3>
        <div className="mt-2">
          <span className="text-3xl sm:text-4xl font-bold text-foreground">USD {price}</span>
          <span className="text-base text-muted-foreground ml-1">/mes</span>
        </div>
      </div>
      <p className="mt-2 text-sm font-semibold text-accent">{tagline}</p>
      <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">{description}</p>

      <ul className="mt-6 space-y-3 flex-1">
        {bullets.map((item) => (
          <li key={item} className="flex gap-3 items-start text-sm sm:text-base text-foreground/90">
            <Check className="mt-1 h-4 w-4 flex-shrink-0 text-accent" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <button
          onClick={scrollToApplication}
          className={`w-full rounded-lg px-4 py-3 text-sm sm:text-base font-semibold transition-all duration-300 ${
            highlight
              ? "bg-accent text-accent-foreground hover:bg-accent/90 shadow-md shadow-accent/30"
              : "border border-accent text-accent hover:bg-accent/10"
          }`}
          aria-label={ctaLabel}
        >
          {ctaLabel}
        </button>
      </div>

      {note && <p className="mt-3 text-xs text-muted-foreground">{note}</p>}
    </article>
  )
}

export default function PricingCards() {
  const handlePlanSelect = (planId: string) => {
    // Store selected plan in sessionStorage for form preselection
    if (typeof window !== "undefined") {
      sessionStorage.setItem("selectedPlan", planId)
    }
  }

  return (
    <section id="planes" className="py-16 sm:py-24 px-4 bg-background">
      <div className="mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Planes Renova
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Elegí el plan que mejor encaje con tu punto de partida y el nivel de acompañamiento que buscás.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.id} {...plan} onSelectPlan={handlePlanSelect} />
          ))}
        </div>

        <p className="mt-8 text-center text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto">
          Si no sabés qué plan elegir, aplicá al programa y te ayudamos a decidir en base a tu caso.
        </p>
      </div>
    </section>
  )
}
