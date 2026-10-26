"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Send } from "lucide-react"
import { PLAN_EVENT } from "@/lib/afuera"
import { trackEvent } from "@/lib/tracking"
import WhatsappLink from "./whatsapp-link"

const initialData = {
  nombre: "",
  pais: "",
  whatsapp: "",
  email: "",
  objetivo: "",
  dias: "",
  lugar: "",
  molestias: "",
  plan: "no-se",
  web: "", // campo trampa para bots, tiene que quedar vacío
}

type FormData = typeof initialData

const inputClass =
  "w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 font-light"
const labelClass = "block text-foreground font-semibold mb-3 text-sm uppercase tracking-wide"

export default function ApplyForm() {
  const [data, setData] = useState<FormData>(initialData)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const onPlan = (e: Event) => {
      const plan = (e as CustomEvent<string>).detail
      setData((prev) => ({ ...prev, plan }))
    }
    window.addEventListener(PLAN_EVENT, onPlan)
    return () => window.removeEventListener(PLAN_EVENT, onPlan)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: Record<string, string> = {}
    if (!data.nombre.trim()) newErrors.nombre = "Decime tu nombre."
    if (!data.pais.trim()) newErrors.pais = "Indicá en qué país vivís."
    if (data.whatsapp.replace(/\D/g, "").length < 8) newErrors.whatsapp = "Pasame tu WhatsApp con código de país."
    if (data.email.trim() && !data.email.includes("@")) newErrors.email = "Ese email no parece válido."
    if (!data.objetivo.trim()) newErrors.objetivo = "Contame brevemente qué querés lograr."
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    setIsSubmitting(true)
    try {
      const response = await fetch("/api/afuera", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      const result = await response.json()
      if (!response.ok || !result.ok) throw new Error(result.error || "No se pudo enviar")
      trackEvent("Lead", { content_name: "afuera", plan: data.plan })
      setSubmitted(true)
      setData(initialData)
    } catch (error) {
      console.error("Error enviando el formulario", error)
      setErrors({ submit: "Hubo un error al enviar. Probá de nuevo o escribime por WhatsApp." })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-accent/40 bg-card p-8 text-center sm:p-12" role="status">
        <h3 className="mb-3 text-2xl font-bold text-foreground">Listo, recibí tu aplicación</h3>
        <p className="text-muted-foreground">
          Te escribo por WhatsApp apenas la lea, para ver si encajamos y contarte cómo sigue.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-xl border border-border/50 bg-card p-6 backdrop-blur-sm sm:p-8 md:p-12"
      name="aplicar-afuera"
      noValidate
    >
      <div>
        <label htmlFor="nombre" className={labelClass}>
          Nombre *
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={data.nombre}
          onChange={handleChange}
          maxLength={80}
          className={inputClass}
          placeholder="Tu nombre"
          autoComplete="given-name"
        />
        {errors.nombre && <p className="mt-1 text-xs text-red-400">{errors.nombre}</p>}
      </div>

      <div>
        <label htmlFor="pais" className={labelClass}>
          País donde vivís *
        </label>
        <input
          type="text"
          id="pais"
          name="pais"
          value={data.pais}
          onChange={handleChange}
          maxLength={80}
          className={inputClass}
          placeholder="España, Australia, Estados Unidos..."
          autoComplete="country-name"
        />
        {errors.pais && <p className="mt-1 text-xs text-red-400">{errors.pais}</p>}
      </div>

      <div>
        <label htmlFor="whatsapp" className={labelClass}>
          WhatsApp *
        </label>
        <input
          type="tel"
          id="whatsapp"
          name="whatsapp"
          value={data.whatsapp}
          onChange={handleChange}
          maxLength={30}
          className={inputClass}
          placeholder="Con código de país, ej: +34 ..."
          autoComplete="tel"
        />
        {errors.whatsapp && <p className="mt-1 text-xs text-red-400">{errors.whatsapp}</p>}
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email (opcional)
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          maxLength={120}
          className={inputClass}
          placeholder="tu@email.com"
          autoComplete="email"
        />
        {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="objetivo" className={labelClass}>
          Qué querés lograr *
        </label>
        <textarea
          id="objetivo"
          name="objetivo"
          value={data.objetivo}
          onChange={handleChange}
          maxLength={1000}
          rows={4}
          className={inputClass}
          placeholder="Contame en pocas palabras en qué punto estás y qué querés cambiar"
        />
        {errors.objetivo && <p className="mt-1 text-xs text-red-400">{errors.objetivo}</p>}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="dias" className={labelClass}>
            Días que entrenás por semana
          </label>
          <select id="dias" name="dias" value={data.dias} onChange={handleChange} className={inputClass}>
            <option value="">Elegí una opción</option>
            <option value="Todavía no entreno">Todavía no entreno</option>
            <option value="1 a 2">1 a 2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5 o más">5 o más</option>
          </select>
        </div>
        <div>
          <label htmlFor="lugar" className={labelClass}>
            Dónde entrenás
          </label>
          <select id="lugar" name="lugar" value={data.lugar} onChange={handleChange} className={inputClass}>
            <option value="">Elegí una opción</option>
            <option value="Gimnasio">Gimnasio</option>
            <option value="Casa">Casa</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="molestias" className={labelClass}>
          Lesiones o molestias (opcional)
        </label>
        <textarea
          id="molestias"
          name="molestias"
          value={data.molestias}
          onChange={handleChange}
          maxLength={500}
          rows={2}
          className={inputClass}
          placeholder="Si tenés algo que tenga que saber antes de armar tu plan"
        />
      </div>

      <div>
        <label htmlFor="plan" className={labelClass}>
          Plan de interés
        </label>
        <select id="plan" name="plan" value={data.plan} onChange={handleChange} className={inputClass}>
          <option value="no-se">Todavía no sé</option>
          <option value="base">Renova Base (80 €/mes)</option>
          <option value="plus">Renova Plus (120 €/mes)</option>
        </select>
      </div>

      {/* Campo trampa: las personas no lo ven, los bots lo completan */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="web">No completar</label>
        <input type="text" id="web" name="web" value={data.web} onChange={handleChange} tabIndex={-1} autoComplete="off" />
      </div>

      {errors.submit && <p className="text-sm text-red-400">{errors.submit}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-base font-semibold text-accent-foreground transition-all duration-300 hover:shadow-lg hover:shadow-accent/40 disabled:opacity-60"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        {isSubmitting ? "Enviando..." : "Quiero mi lugar"}
      </button>

      <p className="text-center text-xs text-muted-foreground">
        Al enviar aceptás que te contacte por WhatsApp. Más info en la{" "}
        <Link href="/privacy-policy" className="underline hover:text-foreground">
          política de privacidad
        </Link>
        .
      </p>

      <p className="text-center text-sm text-muted-foreground">
        ¿Preferís escribirme directo?{" "}
        <WhatsappLink source="form" className="font-semibold text-accent hover:underline">
          Abrir WhatsApp
        </WhatsappLink>
      </p>
    </form>
  )
}
