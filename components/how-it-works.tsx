"use client"

type Step = {
  title: string
  subtitle: string
  description: string
}

const steps: Step[] = [
  {
    title: "Paso 1",
    subtitle: "Evaluación inicial",
    description:
      "Completás un cuestionario detallado sobre tu entrenamiento actual, historial, lesiones, alimentación y estilo de vida. Analizamos tu caso y definimos el punto de partida.",
  },
  {
    title: "Paso 2",
    subtitle: "Plan a medida",
    description:
      "Diseñamos un plan de entrenamiento y nutrición ajustado a tu nivel, tu tiempo disponible y tu objetivo de recomposición corporal. Sin plantillas genéricas.",
  },
  {
    title: "Paso 3",
    subtitle: "Seguimiento y ajustes",
    description:
      "Hacés el plan, nos mandás feedback y videos de técnica (según el plan) y vamos ajustando semana a semana para que sigas progresando sin lesionarte ni estancarte.",
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-background px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <header className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Cómo funciona Renova Training
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Un proceso simple, pensado para personas que ya entrenan y quieren dar el siguiente paso.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.subtitle}
              className="flex h-full flex-col rounded-2xl border border-border bg-card/90 p-6 shadow-sm"
            >
              <div className="mb-3 text-sm font-semibold text-accent">{step.title}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground">{step.subtitle}</h3>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}


