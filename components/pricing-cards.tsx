"use client"
import { Check } from "lucide-react"

type PricingCardProps = {
  title: string
  tagline: string
  description: string
  bullets: string[]
  highlight?: boolean
  note?: string
  ctaLabel: string
}

function PricingCard({ title, tagline, description, bullets, highlight, note, ctaLabel }: PricingCardProps) {
  const scrollToApplication = () => {
    const element = document.getElementById("aplicar")
    element?.scrollIntoView({ behavior: "smooth" })
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
      <h3 className="text-2xl sm:text-3xl font-bold text-foreground">{title}</h3>
      <p className="mt-1 text-sm font-semibold text-accent">{tagline}</p>
      <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">{description}</p>

      <ul className="mt-6 space-y-3 flex-1">
        {bullets.map((item) => (
          <li key={item} className="flex gap-3 items-start text-sm sm:text-base text-foreground/90">
            <Check className="mt-1 h-4 w-4 flex-shrink-0 text-accent" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 space-y-3">
        <p className="text-sm text-muted-foreground font-medium">Consultar precio · Adaptamos el plan a tu contexto.</p>
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
  return (
    <section id="planes" className="py-16 sm:py-24 px-4 bg-background">
      <div className="mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Planes Renova
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Elegí el plan que mejor encaje con tu punto de partida y tu nivel de acompañamiento.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <PricingCard
            title="Renova Start"
            tagline="Orden y estructura para quienes ya entrenan."
            description="Para personas que van al gimnasio, están motivadas, pero necesitan una rutina clara y un plan de nutrición simple para dejar de improvisar."
            bullets={[
              "Plan de entrenamiento mensual personalizado",
              "Plan de nutrición simple ajustado a tu objetivo",
              "Ajustes cada 2 semanas según tu feedback",
              "Plantillas Renova para registrar cargas y progresión",
              "Acceso a grupo privado de comunidad",
            ]}
            ctaLabel="Quiero Renova Start"
          />

          <PricingCard
            title="Renova Advance"
            tagline="Para quienes ya entrenan en serio y quieren romper el estancamiento."
            description="Ideal si entrenás 3–5 veces por semana, ya tenés experiencia y buscás un sistema más técnico, con progresión real y seguimiento cercano."
            bullets={[
              "Plan de entrenamiento semanalizado 100% personalizado",
              "Plan nutricional completo y flexible",
              "Ajustes semanales según progreso y feedback",
              "Análisis de técnica con envío de videos (2–4 por semana)",
              "Seguimiento por chat con respuesta en 24h",
              "Tablero de progresión (fuerza, medidas, hábitos)",
            ]}
            highlight
            ctaLabel="Quiero Renova Advance"
            note="Recomendado para el perfil disciplinado estancado y motivado desorganizado."
          />

          <PricingCard
            title="Renova Prime"
            tagline="Transformación completa con acompañamiento premium."
            description="Para quienes quieren un cambio profundo en su físico y estilo de vida: entrenamiento, nutrición, hábitos y soporte cercano."
            bullets={[
              "Todo lo incluido en Renova Advance",
              "Sesiones 1:1 online (mensuales o quincenales, según definamos)",
              "Plan de hábitos y estilo de vida personalizado",
              "Revisión de técnica ilimitada según necesidad",
              "Análisis de sueño, estrés y energía",
              "Prioridad máxima en respuestas y soporte",
            ]}
            ctaLabel="Quiero Renova Prime"
            note="Pensado especialmente para el perfil principiante frustrado o quienes quieren un cambio integral."
          />
        </div>

        <p className="mt-8 text-center text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto">
          Si no sabés qué plan elegir, aplicá al programa y te ayudamos a decidir en base a tu caso.
        </p>
      </div>
    </section>
  )
}
