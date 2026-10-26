"use client"

import Image from "next/image"

export default function About() {
  return (
    <section id="quienes-somos" className="bg-background px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <header className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Quién está detrás de Renova Training
          </h2>
        </header>

        <article className="mx-auto max-w-2xl rounded-2xl border border-border bg-card/90 overflow-hidden shadow-sm">
          <div className="flex flex-col">
            <div className="relative w-full h-84 sm:h-72 md:h-120">
              <Image
                src="/fran.jpg"
                alt="Fran, fundador de Renova Training"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-2">Fran</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Soy Fran, personal trainer y apasionado del entrenamiento de fuerza. Después de años entrenando por mi
                cuenta, logré una recomposición corporal muy grande al empezar a entrenar con planificación, técnica y
                hábitos bien trabajados.
              </p>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Hoy uso mi experiencia como alumno y mi cambio físico como ejemplo para acompañar a personas que están
                en el mismo camino.
              </p>
            </div>
          </div>
        </article>

        <p className="mt-8 text-center text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto">
          Creo programas online que se puedan seguir en la vida real, sin recetas mágicas ni promesas vacías.
        </p>
      </div>
    </section>
  )
}
