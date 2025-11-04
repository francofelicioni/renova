import { Zap, Cpu, Target } from "lucide-react"

export default function WhyOurMethod() {
  const keyPoints = [
    {
      icon: Cpu,
      title: "Ciencia",
      description: "Basado en evidencia científica probada",
    },
    {
      icon: Target,
      title: "Personalización",
      description: "Adaptado 100% a tu perfil y objetivo",
    },
    {
      icon: Zap,
      title: "Adherencia",
      description: "Sistema sostenible que funciona a largo plazo",
    },
  ]

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-8 text-foreground text-center tracking-tight">
          ¿Por Qué Nuestro Método?
        </h2>

        <div className="bg-gradient-to-br from-card to-card/50 border border-border/50 rounded-xl p-10 md:p-16 mb-16 backdrop-blur-sm">
          <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed font-light">
            No todos los programas de entrenamiento son iguales. El progreso real requiere un sistema personalizado que
            se adapte a TI, no a un templado genérico.
          </p>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
            Nuestro enfoque combina <span className="text-accent font-semibold">ciencia basada en evidencia</span> con{" "}
            <span className="text-accent font-semibold">adherencia sostenible</span>. No se trata solo de trabajar duro,
            sino de trabajar inteligente. Ajustamos tu programa cada semana según tus resultados reales, garantizando
            que siempre estés en el camino correcto hacia la transformación que buscas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {keyPoints.map((point, i) => {
            const Icon = point.icon
            return (
              <div
                key={i}
                className="bg-card border border-border/50 rounded-lg p-8 text-center hover:border-accent/50 transition-all duration-300 group"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{point.title}</h3>
                <p className="text-sm text-muted-foreground">{point.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
