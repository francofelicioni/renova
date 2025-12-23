"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Send } from "lucide-react"
import { plans } from "@/lib/plans"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    pais: "",
    nivel: "Entreno hace tiempo",
    plan: "",
    objetivo: "",
  })

  // Check for preselected plan from pricing cards
  useEffect(() => {
    if (typeof window !== "undefined") {
      const selectedPlan = sessionStorage.getItem("selectedPlan")
      if (selectedPlan) {
        setFormData((prev) => ({ ...prev, plan: selectedPlan }))
        sessionStorage.removeItem("selectedPlan") // Clear after use
      }
    }
  }, [])

  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: { [key: string]: string } = {}

    if (!formData.nombre.trim()) newErrors.nombre = "El nombre es obligatorio."
    if (!formData.email.includes("@")) newErrors.email = "Ingresá un email válido."
    if (!formData.pais.trim()) newErrors.pais = "Indicá tu país."
    if (!formData.objetivo.trim()) newErrors.objetivo = "Contanos brevemente tu objetivo."

    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) return

    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section
      id="aplicar"
      className="py-16 sm:py-24 px-4 bg-gradient-to-b from-background to-[#050608] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent pointer-events-none"></div>

      <div className="max-w-2xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground text-center tracking-tight">
          ¿Listo para aplicar a Renova?
        </h2>
        <p className="text-center text-muted-foreground mb-12 sm:mb-16 text-base sm:text-lg font-light max-w-2xl mx-auto">
          Si querés dejar de improvisar y empezar a entrenar con un plan que tenga sentido, contanos en qué punto estás
          y te recomendamos el mejor camino dentro de Renova.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-card border border-border/50 rounded-xl p-6 sm:p-8 md:p-12 space-y-6 backdrop-blur-sm"
          name="aplicar-programa"
        >
          <div>
            <label
              htmlFor="nombre"
              className="block text-foreground font-semibold mb-3 text-sm uppercase tracking-wide"
            >
              Nombre *
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 font-light"
              placeholder="Tu nombre"
              aria-required="true"
            />
            {errors.nombre && <p className="mt-1 text-xs text-red-400">{errors.nombre}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-foreground font-semibold mb-3 text-sm uppercase tracking-wide">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 font-light"
              placeholder="tu@email.com"
              aria-required="true"
            />
            {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
          </div>

          <div>
            <label
              htmlFor="pais"
              className="block text-foreground font-semibold mb-3 text-sm uppercase tracking-wide"
            >
              País *
            </label>
            <input
              type="text"
              id="pais"
              name="pais"
              value={formData.pais}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 font-light"
              placeholder="Argentina, España, etc."
              aria-required="true"
            />
            {errors.pais && <p className="mt-1 text-xs text-red-400">{errors.pais}</p>}
          </div>

          <div>
            <label
              htmlFor="nivel"
              className="block text-foreground font-semibold mb-3 text-sm uppercase tracking-wide"
            >
              Nivel actual *
            </label>
            <select
              id="nivel"
              name="nivel"
              value={formData.nivel}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 cursor-pointer font-light"
              aria-required="true"
            >
              <option value="Entreno hace tiempo">Entreno hace tiempo</option>
              <option value="Voy al gym pero sin rutina clara">Voy al gym pero sin rutina clara</option>
              <option value="Estoy empezando desde cero">Estoy empezando desde cero</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="plan"
              className="block text-foreground font-semibold mb-3 text-sm uppercase tracking-wide"
            >
              Plan de interés (opcional)
            </label>
            <select
              id="plan"
              name="plan"
              value={formData.plan}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 cursor-pointer font-light"
            >
              <option value="">No estoy seguro aún</option>
              {plans.map((plan) => (
                <option key={plan.id} value={plan.id}>
                  {plan.name} - USD {plan.price}/mes
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="objetivo"
              className="block text-foreground font-semibold mb-3 text-sm uppercase tracking-wide"
            >
              Objetivo principal *
            </label>
            <input
              type="text"
              id="objetivo"
              name="objetivo"
              value={formData.objetivo}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 font-light"
              placeholder="Ej: recomponer mi cuerpo, ganar fuerza, volver a entrenar, etc."
              aria-required="true"
            />
            {errors.objetivo && <p className="mt-1 text-xs text-red-400">{errors.objetivo}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-3 sm:py-4 bg-accent text-accent-foreground font-bold text-base sm:text-lg rounded-lg hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-accent/30 transform hover:scale-105 flex items-center justify-center gap-2"
            aria-label="Enviar aplicación al programa Renova"
          >
            {submitted ? (
              <>
                <span>✓ Aplicación enviada</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" aria-hidden="true" />
                Aplicar al programa
              </>
            )}
          </button>

          <p className="text-xs text-muted-foreground text-center font-light">
            Protegemos tu privacidad. Consulta nuestro{" "}
            <a href="/aviso-legal" className="text-accent hover:underline transition-colors" rel="noopener noreferrer">
              Aviso Legal
            </a>{" "}
            y{" "}
            <a href="/terminos" className="text-accent hover:underline transition-colors" rel="noopener noreferrer">
              Términos
            </a>
            .
          </p>
          <p className="text-xs text-muted-foreground text-center font-light mt-2">
            También podés escribirnos directamente a info@renovatraining.com o por Instagram @renova.training.
          </p>
        </form>
      </div>
    </section>
  )
}
