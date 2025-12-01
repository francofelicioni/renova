"use client"

export default function About() {
  return (
    <section id="quienes-somos" className="bg-background px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <header className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Quién está detrás de Renova Training
          </h2>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          <article className="rounded-2xl border border-border bg-card/90 p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-2">Fran</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Soy Fran, desarrollador web y apasionado del entrenamiento de fuerza. Después de años entrenando por mi
              cuenta, logré una recomposición corporal muy grande al empezar a entrenar con planificación, técnica y
              hábitos bien trabajados. Hoy uso mi experiencia como alumno y mi cambio físico como ejemplo para
              acompañar a personas que están en el mismo camino.
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-card/90 p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-2">Juani (Nano)</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Juani (Nano) es entrenador con más de 9 años de experiencia trabajando con todo tipo de personas: desde
              quienes recién empiezan hasta atletas que buscan rendir mejor. Dirige un box de entrenamiento en
              Argentina y se especializa en programación de fuerza, técnica de los ejercicios básicos y acompañar
              procesos de recomposición corporal de forma realista y sostenible.
            </p>
          </article>
        </div>

        <p className="mt-8 text-center text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto">
          Combinamos experiencia técnica y experiencia real como alumnos para crear programas online que se puedan
          seguir en la vida real, sin recetas mágicas ni promesas vacías.
        </p>
      </div>
    </section>
  )
}


