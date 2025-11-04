"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    whatsapp: "",
    objetivo: "Definir",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to a server
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-b from-background to-[#0f0f0f] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent pointer-events-none"></div>

      <div className="max-w-2xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-foreground text-center tracking-tight">
          Hablemos de Tu Meta
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg font-light">
          Completa el formulario y nos pondremos en contacto dentro de 24 horas.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-card border border-border/50 rounded-xl p-8 md:p-12 space-y-6 backdrop-blur-sm"
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
            />
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
            />
          </div>

          <div>
            <label
              htmlFor="whatsapp"
              className="block text-foreground font-semibold mb-3 text-sm uppercase tracking-wide"
            >
              WhatsApp / Teléfono *
            </label>
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 font-light"
              placeholder="+34 600 123 456"
            />
          </div>

          <div>
            <label
              htmlFor="objetivo"
              className="block text-foreground font-semibold mb-3 text-sm uppercase tracking-wide"
            >
              ¿Cuál es tu objetivo principal? *
            </label>
            <select
              id="objetivo"
              name="objetivo"
              value={formData.objetivo}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 cursor-pointer font-light"
            >
              <option value="Definir">Definir / Bajar Grasa</option>
              <option value="Ganar Músculo">Ganar Músculo</option>
              <option value="Recomposición">Recomposición</option>
              <option value="Pico de Rendimiento">Pico de Rendimiento</option>
              <option value="Otro">Otro</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-accent text-accent-foreground font-bold text-lg rounded-lg hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-accent/30 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            {submitted ? (
              <>
                <span>✓ Formulario Enviado</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Hablemos de tu meta
              </>
            )}
          </button>

          <p className="text-xs text-muted-foreground text-center font-light">
            Protegemos tu privacidad. Consulta nuestro{" "}
            <a href="#" className="text-accent hover:underline transition-colors">
              Aviso Legal
            </a>{" "}
            y{" "}
            <a href="#" className="text-accent hover:underline transition-colors">
              Términos
            </a>
            .
          </p>
        </form>
      </div>
    </section>
  )
}
