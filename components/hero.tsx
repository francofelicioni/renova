"use client"

export default function Hero() {
  const scrollToPricing = () => {
    const element = document.getElementById("pricing")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-background to-[#0f0f0f] px-4 py-20">
      <div className="max-w-5xl mx-auto text-center">
        {/* Hero Image */}
        <div className="mb-12 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-transparent blur-3xl -z-10"></div>
          <img
            src="/athlete-performing-perfect-squat-form.jpg"
            alt="Atleta realizando una sentadilla con forma perfecta"
            className="w-full max-w-md mx-auto rounded-lg shadow-2xl border border-accent/30"
          />
        </div>

        {/* Main Heading */}
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
        >
          <span className="absolute inset-0 bg-gradient-to-r from-accent to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
          Reservar Mi Cupo FAST-TRACK (Solo 10 Plazas)
        </button>
      </div>
    </section>
  )
}
