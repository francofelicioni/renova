"use client"

export default function Hero() {
  const scrollToPricing = () => {
    const element = document.getElementById("pricing")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-background to-[#0f0f0f] px-4 py-20"
      id="hero"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Hero Image */}
        <div className="mb-12 relative text-center">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-transparent blur-3xl -z-10"></div>
          <img
            src="/fitness-couple-training-form.jpg"
            alt="Pareja de hombre y mujer realizando entrenamiento fitness con forma perfecta en el gimnasio"
            className="w-full max-w-md mx-auto rounded-lg shadow-2xl border border-accent/30"
            loading="eager"
            width={500}
            height={400}
          />
        </div>

        {/* Main Heading */}
        <div className="text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-foreground text-balance leading-tight tracking-tight">
            Transformación Visible en 12 Semanas.
            <span className="block text-accent mt-3 relative inline-block">
              Garantizado.
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto text-balance leading-relaxed font-light">
            Coaching intensivo y personalizado para definir, ganar músculo o alcanzar tu pico de rendimiento. Deja de
            adivinar, empieza a progresar.
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToPricing}
            className="inline-flex items-center justify-center px-10 py-4 bg-accent text-accent-foreground font-bold text-lg rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 transform hover:scale-105 relative group overflow-hidden"
            aria-label="Reservar cupo FAST-TRACK"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-accent to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
            Reservar Mi Cupo FAST-TRACK (Solo 10 Plazas)
          </button>
        </div>

        <div className="mt-20 pt-20 border-t border-accent/10">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-foreground mb-12">
            Resultados Reales de Nuestros Clientes
          </h2>

          {/* Before-After Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-accent/30 transition-shadow duration-300">
              <img
                src="/before-after-1.jpg"
                alt="Transformación antes y después de cliente - ganancia muscular masculina"
                className="w-full h-40 md:h-48 object-cover"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-accent/30 transition-shadow duration-300">
              <img
                src="/before-after-2.jpg"
                alt="Transformación antes y después de cliente - definición corporal"
                className="w-full h-40 md:h-48 object-cover"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-accent/30 transition-shadow duration-300">
              <img
                src="/before-after-3.jpg"
                alt="Transformación antes y después de cliente - recomposición corporal"
                className="w-full h-40 md:h-48 object-cover"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-accent/30 transition-shadow duration-300">
              <img
                src="/before-after-4.jpg"
                alt="Transformación antes y después de cliente - mejora física"
                className="w-full h-40 md:h-48 object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Trust Message */}
          <p className="text-center text-muted-foreground mt-8 text-sm md:text-base font-light">
            Transformaciones verificadas de clientes reales en 12 semanas con nuestro método FAST-TRACK
          </p>
        </div>
      </div>
    </section>
  )
}
