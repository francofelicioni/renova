"use client"

import { useState } from "react"

export default function LeadMagnet() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!email || !email.includes("@")) {
      setError("Ingresá un email válido.")
      return
    }

    setIsSubmitting(true)
    try {
      const response = await fetch('/api/lead-magnet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok || !data.ok) {
        throw new Error(data.error || 'Failed to submit email')
      }

      setSubmitted(true)
      setEmail("") // Reset email field
      setTimeout(() => setSubmitted(false), 3000)
    } catch (error) {
      console.error('Error submitting lead magnet:', error)
      setError('Hubo un error al enviar. Por favor, intentá nuevamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="guia-gratuita" className="bg-gradient-to-b from-[#050608] via-background to-background px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl rounded-3xl border border-accent/30 bg-card/90 px-6 py-10 sm:px-10 sm:py-12 shadow-xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Guía gratuita: 5 ajustes para recomponer tu cuerpo si ya entrenás
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground">
            Dejá tu correo y te enviamos una guía práctica con los 5 ajustes clave en entrenamiento, nutrición y hábitos
            que usamos con nuestros clientes para que empiecen a ver resultados reales.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center max-w-xl mx-auto"
          noValidate
        >
          <div className="flex-1">
            <label htmlFor="lead-email" className="sr-only">
              Email
            </label>
            <input
              id="lead-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className="w-full rounded-lg border border-border bg-input px-4 py-3 text-sm sm:text-base text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting || submitted}
            className="w-full sm:w-auto rounded-lg bg-accent px-6 py-3 text-sm sm:text-base font-semibold text-accent-foreground transition-all duration-300 hover:bg-accent/90 shadow-md shadow-accent/30 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitted ? "Enviado" : isSubmitting ? "Enviando..." : "Quiero la guía"}
          </button>
        </form>
        {error && <p className="mt-2 text-xs text-red-400 text-center">{error}</p>}

        <p className="mt-4 text-[11px] sm:text-xs text-muted-foreground text-center">
          No mandamos spam. Solo contenido útil y novedades de Renova Training.
        </p>
      </div>
    </section>
  )
}



