"use client"
import { Check, Zap } from "lucide-react"

const features = {
  fastTrack: [
    "Plan de entrenamiento 100% personalizado (ajuste semanal)",
    "Cálculo de macros + plantillas de 4 comidas/día (ajuste quincenal)",
    "Check-in 1:1 semanal por videollamada (15–20 min)",
    "Análisis técnico por video (hasta 3 ejercicios/semana)",
    "Soporte por WhatsApp de lunes a viernes",
    "Plan de suplementación (según objetivo y presupuesto)",
    "Dashboard simple de progreso (peso, perímetros, RPE, fotos)",
    "Garantía de progreso: 2 semanas gratis si no mejoras en semana 3-4",
  ],
  programming: [
    "Rutina personalizada mensual (bloques de 4 semanas)",
    "Check-in semanal asíncrono (formulario + feedback escrito)",
    "1 ajuste/semana si hace falta (volumen, selección y cargas)",
    "Soporte por WhatsApp",
    "Orientaciones generales de nutrición (sin macros calculados)",
    '1 "form check" por mes (opción trimestral)',
  ],
}

export default function PricingCards() {
  const scrollToForm = () => {
    const element = document.getElementById("contact")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="pricing" className="py-16 sm:py-24 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 text-foreground text-center tracking-tight">
          Nuestras Ofertas
        </h2>
        <p className="text-center text-muted-foreground mb-16 sm:mb-20 text-base sm:text-lg max-w-2xl mx-auto">
          Elige el plan que se ajuste mejor a tu objetivo y disponibilidad
        </p>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-stretch max-w-5xl mx-auto">
          {/* FAST-TRACK Card - Premium */}
          <div className="bg-gradient-to-br from-accent/15 via-card to-card border-2 border-accent rounded-xl p-6 sm:p-8 lg:p-10 relative lg:z-20 shadow-2xl shadow-accent/10 group hover:shadow-accent/20 transition-all duration-300 flex flex-col h-full">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-xs sm:text-sm font-extrabold shadow-lg">
              <Zap className="size-4 " aria-hidden="true" />
              MÁS POPULAR
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 mt-6">FAST-TRACK</h3>
            <p className="text-muted-foreground mb-6 sm:mb-8 font-light text-sm sm:text-base">Transformación rápida y garantizada</p>

            <div className="mb-8 sm:mb-10">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-accent">€299</span>
                <span className="text-muted-foreground font-light">/12 sem</span>
              </div>
              <p className="text-sm text-muted-foreground mt-3 font-light">O 3× €110</p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <p className="text-sm text-accent font-semibold">Cupos limitados: 10 plazas/mes</p>
              </div>
            </div>

            <p className="text-foreground font-semibold mb-8 italic leading-relaxed">
              "En 8–12 semanas salís con un físico más definido/funcional y un sistema de hábitos que podés sostener."
            </p>

            <ul className="space-y-3 mb-10 flex-1">
              {features.fastTrack.map((feature, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-foreground text-sm md:text-base">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={scrollToForm}
              className="w-full py-3 sm:py-4 bg-accent text-accent-foreground font-bold rounded-lg hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-accent/30 transform hover:scale-105"
              aria-label="Quiero mi plan FAST-TRACK"
            >
              Quiero Mi Plan FAST-TRACK
            </button>

            <div className="mt-6 sm:mt-8 p-4 sm:p-5 bg-secondary/20 rounded-lg border border-secondary/40">
              <p className="text-sm font-bold text-secondary mb-2 flex items-center gap-2">✓ Garantía de Progreso</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Si en la semana 3–4 no hay métrica que mejore y cumpliste adherencia, sumo 2 semanas gratis.
              </p>
            </div>
          </div>

          {/* PROGRAMMING™ Card - Entry Level */}
          <div className="bg-card border border-border rounded-xl p-6 sm:p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-transparent group flex flex-col h-full">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">PROGRAMMING™</h3>
            <p className="text-muted-foreground mb-6 sm:mb-8 font-light text-sm sm:text-base">Para entrenamientos con estructura</p>

            <div className="mb-6 sm:mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl sm:text-5xl font-bold text-foreground">€39</span>
                <span className="text-muted-foreground font-light">/mes</span>
              </div>
              <p className="text-xs sm:text-sm text-accent/80 mt-3 font-medium">Precio de lanzamiento: €30/mes</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-4 font-light">
                Opción trimestral: €99 (incluye 1 form check/mes)
              </p>
            </div>

            <p className="text-foreground font-semibold mb-8 italic leading-relaxed">
              "Entrenás con estructura, progresás y no pensás la rutina. Simple y efectivo."
            </p>

            <ul className="space-y-3 mb-6 sm:mb-8 flex-1">
              {features.programming.map((feature, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-accent/70 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-foreground/90 text-sm md:text-base">{feature}</span>
                </li>
              ))}
            </ul>

            {/*
            <div className="mb-6 p-4 bg-secondary/20 rounded-lg border border-secondary/40">
              <p className="text-sm font-bold text-secondary mb-2 flex items-center gap-2">✓ Garantía de Progreso</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Si en la semana 3–4 no hay métrica que mejore y cumpliste adherencia, sumo 2 semanas gratis.
              </p>
            </div>
            */}

            <button
              onClick={scrollToForm}
              className="w-full py-3 border-2 border-accent text-accent font-bold rounded-lg hover:bg-accent/10 transition-all duration-300"
              aria-label="Empezar con plan PROGRAMMING"
            >
              Empezar con PROGRAMMING™
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
