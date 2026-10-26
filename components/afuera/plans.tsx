"use client"

import { Check } from "lucide-react"
import { afueraPlans, PLAN_EVENT, type AfueraPlan } from "@/lib/afuera"

function PlanCard({ plan }: { plan: AfueraPlan }) {
  const choose = () => {
    window.dispatchEvent(new CustomEvent(PLAN_EVENT, { detail: plan.id }))
    document.getElementById("aplicar")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <article
      className={`flex h-full flex-col rounded-2xl border bg-card/90 p-6 shadow-lg sm:p-8 ${
        plan.primary ? "border-accent/60 shadow-accent/10" : "border-border"
      }`}
    >
      <h3 className="text-xl font-bold leading-tight text-foreground sm:text-2xl">{plan.name}</h3>
      <div className="mt-2">
        <span className="text-3xl font-bold text-foreground sm:text-4xl">{plan.price} €</span>
        <span className="ml-1 text-base text-muted-foreground">/mes</span>
      </div>
      <p className="mt-2 text-sm font-semibold text-accent">{plan.tagline}</p>

      <ul className="mt-6 flex-1 space-y-3">
        {plan.bullets.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-foreground/90 sm:text-base">
            <Check className="mt-1 h-4 w-4 flex-shrink-0 text-accent" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={choose}
        className={`mt-6 w-full rounded-lg px-4 py-3 text-sm font-semibold transition-all duration-300 sm:text-base ${
          plan.primary
            ? "bg-accent text-accent-foreground shadow-md shadow-accent/30 hover:bg-accent/90"
            : "border border-accent text-accent hover:bg-accent/10"
        }`}
      >
        {plan.ctaLabel}
      </button>
    </article>
  )
}

export default function AfueraPlans() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {afueraPlans.map((plan) => (
        <PlanCard key={plan.id} plan={plan} />
      ))}
    </div>
  )
}
