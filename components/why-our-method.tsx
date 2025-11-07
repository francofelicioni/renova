export default function WhyOurMethod() {
  const problems = [
    {
      problem: "Rutinas improvisadas",
      solution: "Diseñamos un plan hecho para vos (objetivo, tiempo, equipo disponible).",
    },
    {
      problem: "No registrar nada",
      solution:
        "Implementamos un sistema simple de anotación y métricas (peso, repeticiones, RIR, fotos y perímetros).",
    },
    {
      problem: "Estancamiento",
      solution: "Ajustes semanales para romper mesetas sin sobrecargar articulaciones.",
    },
    {
      problem: "Dudas con la comida",
      solution: "Te enseño a comer para tu objetivo (sin dietas imposibles).",
    },
  ]

  return (
    <section className="py-16 sm:py-24 px-4 bg-background" id="metodo">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-10 sm:mb-12 text-foreground text-center tracking-tight">
          ¿Por Qué Nuestro Método?
        </h2>

        <div className="bg-gradient-to-br from-card to-card/50 border border-border/50 rounded-xl p-6 sm:p-10 md:p-16 mb-12 sm:mb-16 backdrop-blur-sm">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 sm:mb-8 leading-tight">
            Entrenás. Te esforzás. ¿Por qué no ves resultados?
          </h3>

          <p className="text-base sm:text-lg md:text-xl text-foreground mb-5 sm:mb-6 leading-relaxed font-light">
            Si vas al gimnasio y sentís que podrías estar mejor, no es falta de voluntad: es falta de un plan que
            funcione.
          </p>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed font-light">
            Sin una estructura clara, el progreso se diluye: hoy pecho, mañana "lo que salga", no anotás, no medís, no
            sabés si mejoraste.
          </p>

          <p className="text-base sm:text-lg md:text-xl text-accent font-semibold leading-relaxed">
            Yo te doy método, foco y seguimiento para que cada semana avances.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8 text-center">
            Lo que te está frenando (y cómo lo resolvemos)
          </h3>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {problems.map((item, i) => (
              <div
                key={i}
                className="bg-card border border-border/50 rounded-lg p-6 sm:p-8 hover:border-accent/50 transition-all duration-300 group"
              >
                <div className="mb-4">
                  <h4 className="text-lg sm:text-xl font-semibold text-accent mb-2 sm:mb-3">{item.problem}</h4>
                  <p className="text-foreground leading-relaxed text-sm sm:text-base">
                    <span className="text-accent font-semibold">→</span> {item.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
