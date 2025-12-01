"use client"

type Profile = {
  title: string
  description: string
  icon: string
}

const profiles: Profile[] = [
  {
    title: "Disciplinado estancado",
    icon: "💪",
    description:
      "Entrenás hace rato, sos constante, pero sentís que tu físico no refleja todo ese esfuerzo. Querés mejorar técnica, progresar en fuerza y ver cambios reales en recomposición corporal.",
  },
  {
    title: "Motivado desorganizado",
    icon: "⚡️",
    description:
      "Vas al gimnasio, te gusta entrenar, pero no tenés una estructura clara. Hacés un poco de todo, copiás rutinas de redes y no sabés si realmente estás avanzando.",
  },
  {
    title: "Principiante frustrado",
    icon: "🌱",
    description:
      "Querés empezar (o volver) a entrenar y cambiar tu cuerpo, pero no sabés por dónde arrancar. Buscás un acompañamiento más cercano en entrenamiento, nutrición y hábitos.",
  },
]

export default function Profiles() {
  return (
    <section id="para-quien" className="bg-background px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <header className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            ¿Para quién es Renova?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Trabajamos con tres tipos de personas. Si te ves en alguna de estas, estás en el lugar correcto.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {profiles.map((profile) => (
            <article
              key={profile.title}
              className="flex h-full flex-col rounded-2xl border border-border bg-card/90 p-6 shadow-sm"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-foreground flex items-center gap-2">
                <span className="text-2xl" aria-hidden="true">
                  {profile.icon}
                </span>
                <span>{profile.title}</span>
              </h3>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                {profile.description}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto">
          Cada uno de nuestros planes está pensado para encajar mejor con uno de estos perfiles. Más abajo podés ver
          cuál se adapta a vos.
        </p>
      </div>
    </section>
  )
}


