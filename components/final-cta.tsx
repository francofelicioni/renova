"use client"

import ContactForm from "./contact-form"

export default function FinalCta() {
  const scrollToApplication = () => {
    const element = document.getElementById("aplicar")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <section className="bg-background px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            ¿Listo para entrenar con intención?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Si querés dejar de improvisar y empezar a entrenar con un plan que tenga sentido, contanos en qué punto
            estás y te recomendamos el mejor camino dentro de Renova.
          </p>
          <button
            onClick={scrollToApplication}
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3 text-sm sm:text-base font-semibold text-accent-foreground shadow-md shadow-accent/30 transition-all hover:bg-accent/90"
          >
            Aplicar al programa
          </button>
        </div>
      </section>
    </>
  )
}


