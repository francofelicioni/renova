// Datos de la página /afuera (argentinos que viven en el exterior).
// Si cambia el número de WhatsApp, el mensaje o los precios, se edita acá.

export const WHATSAPP_NUMBER = "5491124980468"
export const WHATSAPP_MESSAGE = "Hola Fran! Vi tu página para argentinos que viven afuera y quiero info."
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export type AfueraPlan = {
  id: "base" | "plus"
  name: string
  price: number
  tagline: string
  bullets: string[]
  ctaLabel: string
  primary: boolean
}

export const afueraPlans: AfueraPlan[] = [
  {
    id: "base",
    name: "RENOVA BASE",
    price: 80,
    tagline: "Plan claro y seguimiento semanal.",
    bullets: [
      "Plan de entrenamiento personalizado, en una planilla pensada para usar desde el celular",
      "Pautas generales de alimentación y hábitos",
      "Devolución semanal en audio con lo que vi en tu planilla",
      "Llamada de inicio de ciclo (40 min)",
    ],
    ctaLabel: "Elegir Renova Base",
    primary: true,
  },
  {
    id: "plus",
    name: "RENOVA PLUS",
    price: 120,
    tagline: "Más cercanía y revisión de técnica.",
    bullets: [
      "Todo lo de Renova Base",
      "Mensaje de seguimiento a mitad de semana",
      "Llamada de seguimiento a mitad de ciclo (20 min)",
      "Revisión de técnica por video",
    ],
    ctaLabel: "Elegir Renova Plus",
    primary: false,
  },
]

export const PLAN_EVENT = "afuera:plan"
