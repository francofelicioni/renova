export type Plan = {
  id: string
  name: string
  price: number
  tagline: string
  description: string
  bullets: string[]
  ctaLabel: string
  highlight?: boolean
  note?: string
  targetProfile: string
}

export const plans: Plan[] = [
  {
    id: "advance",
    name: "RENOVA ADVANCE",
    price: 60,
    tagline: "Orden y estructura para dejar de improvisar.",
    description:
      "Para personas que van al gimnasio y están motivadas, pero no tienen una estructura clara. Ideal si querés progresar con un plan semanal y correcciones técnicas sin complicarte.",
    bullets: [
      "Planificación macro / meso / micro",
      "Rutina con actualización semanal (según progreso y feedback)",
      "Respuesta rápida a consultas (chat)",
      "Corrección de técnica con soporte por video",
      'Guía tipo "puesta a punto" (hábitos mínimos, registro de cargas y progresión)',
      "Grupo privado de WhatsApp (comunidad)",
    ],
    ctaLabel: "Elegir Renova Advance",
    targetProfile: "Motivado desorganizado",
  },
  {
    id: "power-up",
    name: "RENOVA POWER UP",
    price: 90,
    tagline: "Para quienes ya entrenan en serio y quieren romper el estancamiento.",
    description:
      "Entrenás hace tiempo y sos constante, pero querés un cambio visible. Más técnica, más progresión, mejor planificación y nutrición enfocada a recomposición corporal.",
    bullets: [
      "Planificación macro / meso / micro",
      "Rutina con actualización semanal (según progreso y feedback)",
      "Respuesta rápida a consultas (chat)",
      "Corrección de técnica con soporte por video",
      "Revisión técnica total (enfoque en básicos y ejecución)",
      "Plan nutricional con guía (déficit calórico, macros y distribución de proteínas/grasas/carbos)",
      "Objetivo de actividad: caminar 10k pasos (seguimiento simple)",
      "Grupo privado de WhatsApp (comunidad)",
    ],
    ctaLabel: "Elegir Renova Power Up",
    highlight: true,
    targetProfile: "Disciplinado estancado",
  },
  {
    id: "prime",
    name: "RENOVA PRIME",
    price: 140,
    tagline: "Transformación completa con acompañamiento premium.",
    description:
      "Si estás empezando desde cero (o volviendo después de mucho), este es tu camino con soporte cercano: técnica, nutrición, hábitos y seguimiento. Ideal si querés cambiar tu estilo de vida.",
    bullets: [
      "Camino técnico desde la planificación (aprendizaje + ejecución)",
      "Planificación macro / meso / micro",
      "Rutina con actualización semanal (según progreso y feedback)",
      "Respuesta rápida a consultas (chat)",
      "Corrección de técnica con soporte por video",
      "Plan nutricional con guía (déficit calórico, macros y distribución de proteínas/grasas/carbos)",
      "Objetivo de actividad: caminar 10k pasos (seguimiento simple)",
      "Soporte semanal por video 1:1 (sesión online)",
      "Seguimiento de comidas por Drive",
      "Planificación de alimentos (estructurar semana, opciones, adherencia)",
      "Grupo privado de WhatsApp (comunidad)",
    ],
    ctaLabel: "Elegir Renova Prime",
    targetProfile: "Principiante frustrado",
  },
]

