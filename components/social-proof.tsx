"use client"
import { Star } from "lucide-react"
import Image from "next/image"

export default function SocialProof() {
  const testimonials = [
    {
      name: "Laura P.",
      goal: "Definición",
      quote: "En 10 semanas perdí 5kg de grasa sin perder músculo. El programa fue exactamente lo que necesitaba.",
      image: "/testimonial-laura.jpg",
    },
    {
      name: "Marcos G.",
      goal: "Recomposición",
      quote: "No es solo un programa, es un sistema. Me enseñó cómo alimentarme y entrenar correctamente.",
      image: "/testimonial-marcos.jpg",
    },
    {
      name: "Ana M.",
      goal: "Pico de Rendimiento",
      quote: "Las videollamadas semanales marcaron la diferencia. Mi levantamiento mejoró un 20% en 12 semanas.",
      image: "/testimonial-ana.jpg",
    },
  ]

  return (
    <section className="py-24 px-4 bg-background" id="testimonios">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-foreground text-center tracking-tight">
          Lo Que Dicen Nuestros Clientes
        </h2>
        <p className="text-center text-muted-foreground mb-20 text-lg">Resultados reales de personas como vos</p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <article
              key={i}
              className="bg-card border border-border/50 rounded-xl p-8 hover:border-accent/50 transition-all duration-300 group hover:shadow-lg hover:shadow-accent/5 flex flex-col"
              itemScope
              itemType="https://schema.org/Review"
            >
              <div className="flex gap-1 mb-6" aria-label="5 estrellas">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 text-accent fill-accent" aria-hidden="true" />
                ))}
              </div>

              <p className="text-foreground mb-8 leading-relaxed text-base flex-1" itemProp="reviewBody">
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
                  <p className="font-semibold text-foreground text-base" itemProp="author">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{testimonial.goal}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
