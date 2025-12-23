"use client"

export default function Hero() {
  const scrollToPricing = () => {
    const element = document.getElementById("planes")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToApplication = () => {
    const element = document.getElementById("aplicar")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      className="min-h-[80vh] flex items-center bg-background px-4 py-16 sm:py-20"
      id="hero"
    >
      <div className="max-w-6xl mx-auto w-full grid gap-12 lg:grid-cols-2 items-center">
        {/* Texto principal */}
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1 text-xs font-medium text-accent mb-4">
            Programas online personalizados · Seguimiento real · Resultados sostenibles
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-foreground leading-tight tracking-tight text-balance">
            Recomposición corporal{" "}
            <span className="block text-accent">
              para personas ocupadas que ya entrenan
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
            Si ya vas al gimnasio pero no ves los resultados que querés, Renova Training te da un sistema claro de
            entrenamiento, nutrición y hábitos para que progreses de verdad, sin perder tiempo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:items-center mb-4">
            <button
              onClick={scrollToApplication}
              className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-3 bg-accent text-accent-foreground font-semibold text-base rounded-lg hover:shadow-lg hover:shadow-accent/40 transition-all duration-300 transform hover:scale-[1.02]"
              aria-label="Aplicar al programa Renova Training"
            >
              Aplicar al programa
            </button>
            <button
              onClick={scrollToPricing}
              className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-3 border border-accent/60 text-accent font-semibold text-base rounded-lg hover:bg-accent/10 transition-all duration-300"
              aria-label="Ver planes Renova"
            >
              Ver planes
            </button>
          </div>

          <p className="text-xs sm:text-sm text-muted-foreground">
            Programas online personalizados · Seguimiento real · Resultados sostenibles
          </p>

          <p className="mt-6 text-sm text-muted-foreground max-w-md">
            ¿Estás empezando desde cero? También te guiamos a transformar tus hábitos, tu técnica y tu estilo de vida.
          </p>
        </div>

        {/* Lado visual */}
        <div className="relative">
          <div className="absolute -inset-10 bg-gradient-to-tr from-accent/20 via-transparent to-purple-500/10 blur-3xl -z-10" />
          <div className="rounded-2xl border border-accent/20 bg-card/90 shadow-2xl p-5 sm:p-6 flex flex-col gap-4">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl mb-2 bg-gradient-to-br from-accent/20 via-background to-background/80 flex items-center justify-center">
              <img
                src="/fitness-couple-training-form.jpg"
                alt="Entrenamiento de fuerza con buena técnica representando Renova Training"
                className="h-full w-full object-cover"
                loading="eager"
                width={640}
                height={480}
              />
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="rounded-lg border border-border/60 bg-background/60 p-3">
                <p className="text-muted-foreground">Enfoque principal</p>
                <p className="mt-1 font-semibold text-foreground">Recomposición corporal</p>
              </div>
              <div className="rounded-lg border border-border/60 bg-background/60 p-3">
                <p className="text-muted-foreground">Pensado para</p>
                <p className="mt-1 font-semibold text-foreground">Personas que ya entrenan</p>
              </div>
              <div className="rounded-lg border border-border/60 bg-background/60 p-3">
                <p className="text-muted-foreground">Formato</p>
                <p className="mt-1 font-semibold text-foreground">100% online personalizado</p>
              </div>
              <div className="rounded-lg border border-border/60 bg-background/60 p-3">
                <p className="text-muted-foreground">Acompañamiento</p>
                <p className="mt-1 font-semibold text-foreground">Entrenamiento, nutrición y hábitos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
