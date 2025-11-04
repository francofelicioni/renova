"use client"
import { Star } from "lucide-react"

export default function SocialProof() {
  const testimonials = [
    {
      name: "Laura P.",
      goal: "Definición",
      quote:
        "En 10 semanas perdí 5kg de grasa sin perder músculo. El programa fue exactamente lo que necesitaba, ajustado cada semana según mi progreso. Increíble.",
    },
    {
      name: "Marcos G.",
      goal: "Recomposición",
      quote:
        "No es solo un programa, es un sistema. Me enseñó cómo alimentarme y entrenar correctamente. Ahora sigo solo los principios aprendidos.",
    },
    {
      name: "Ana M.",
      goal: "Pico de Rendimiento",
      quote:
        "Las videollamadas semanales marcaron la diferencia. El feedback técnico fue invaluable. Mi levantamiento mejoró un 20% en 12 semanas.",
    },
  ]

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-foreground text-center tracking-tight">
          Lo Que Dicen Nuestros Clientes
        </h2>
        <p className="text-center text-muted-foreground mb-20 text-lg">Resultados reales de personas como vos</p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="bg-card border border-border/50 rounded-xl p-8 hover:border-accent/50 transition-all duration-300 group hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>

              <p className="text-foreground mb-8 leading-relaxed text-lg">"{testimonial.quote}"</p>

              <div className="pt-6 border-t border-border">
                <p className="font-semibold text-foreground text-base">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.goal}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
