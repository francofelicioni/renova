"use client"
import { Star } from "lucide-react"
import Image from "next/image"

export default function SocialProof() {
  const testimonials = [
    {
      name: "María",
      goal: "Recomposición corporal",
      quote:
        "Antes entrenaba sin rumbo y sentía que no avanzaba. Con Renova empecé a registrar cargas, ajustar mi comida y entrenar con intención. En 3 meses mi fuerza subió y mi cuerpo cambió más que en los últimos 2 años.",
      image: "/profile2.jpg",
    },
    {
      name: "Julián",
      goal: "Orden y estructura",
      quote:
        "Siempre fui constante, pero vivía estancado. El plan de Renova me dio una progresión clara y una rutina pensada para mi tiempo y mi nivel. Hoy sé exactamente por qué y cómo entreno cada ejercicio.",
      image: "/profile3.jpg",
    },
    {
      name: "Marcos",
      goal: "Acompañamiento premium",
      quote:
        "Venía de probar varias rutinas genéricas sin resultados. Con el acompañamiento cercano de Renova pude ajustar mi sueño, mi nutrición y mi técnica. El cambio físico fue grande, pero el de hábitos fue todavía mayor.",
      image: "/profile1.jpg",
    },
  ]

  return (
    <section className="py-16 sm:py-24 px-4 bg-background" id="testimonios">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 text-foreground text-center tracking-tight">
          Historias reales
        </h2>
        <p className="text-center text-muted-foreground mb-16 sm:mb-20 text-base sm:text-lg">
          Testimonios de personas que ya entrenaban y hoy sienten que su esfuerzo se ve en el espejo.
        </p>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <article
              key={i}
              className="bg-card border border-border/50 rounded-xl p-6 sm:p-8 hover:border-accent/50 transition-all duration-300 group hover:shadow-lg hover:shadow-accent/5 flex flex-col"
              itemScope
              itemType="https://schema.org/Review"
            >
              <div className="flex gap-1 mb-6" aria-label="5 estrellas">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 text-accent fill-accent" aria-hidden="true" />
                ))}
              </div>

              <p className="text-foreground mb-8 leading-relaxed text-sm sm:text-base flex-1" itemProp="reviewBody">
                "{testimonial.quote}"
              </p>

              <div className="pt-6 border-t border-border flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-accent/10">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    itemProp="image"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm sm:text-base" itemProp="author">
                    {testimonial.name}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.goal}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
