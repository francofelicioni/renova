import { NextResponse } from "next/server"
import { sendEmail, FROM_EMAIL } from "@/lib/email"

const PLAN_LABELS: Record<string, string> = {
  base: "Renova Base (80 EUR/mes)",
  plus: "Renova Plus (120 EUR/mes)",
  "no-se": "Todavía no sabe",
}

const escapeHtml = (text: string) =>
  text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")

// Recorta y deja en una sola línea (para asunto y campos cortos)
const oneLine = (value: unknown, max: number) =>
  typeof value === "string" ? value.replace(/[\r\n]+/g, " ").trim().slice(0, max) : ""

// Recorta y conserva saltos de línea (para textos largos)
const multiLine = (value: unknown, max: number) => (typeof value === "string" ? value.trim().slice(0, max) : "")

export async function POST(req: Request) {
  try {
    const body = await req.json()

    // Campo trampa: si viene completo es un bot. Respondemos ok sin enviar nada.
    if (typeof body.web === "string" && body.web.trim() !== "") {
      return NextResponse.json({ ok: true })
    }

    const nombre = oneLine(body.nombre, 80)
    const pais = oneLine(body.pais, 80)
    const whatsapp = oneLine(body.whatsapp, 30)
    const email = oneLine(body.email, 120)
    const dias = oneLine(body.dias, 40)
    const lugar = oneLine(body.lugar, 40)
    const objetivo = multiLine(body.objetivo, 1000)
    const molestias = multiLine(body.molestias, 500)
    const plan = PLAN_LABELS[oneLine(body.plan, 20)] ?? PLAN_LABELS["no-se"]

    if (!nombre || !pais || !whatsapp || !objetivo) {
      return NextResponse.json({ ok: false, error: "Faltan datos obligatorios" }, { status: 400 })
    }

    const rows: Array<[string, string]> = [
      ["Nombre", nombre],
      ["País", pais],
      ["WhatsApp", whatsapp],
      ["Email", email || "(no dejó)"],
      ["Días por semana", dias || "(no indicó)"],
      ["Dónde entrena", lugar || "(no indicó)"],
      ["Plan de interés", plan],
    ]

    const text =
      rows.map(([label, value]) => `${label}: ${value}`).join("\n") +
      `\n\nObjetivo:\n${objetivo}` +
      `\n\nLesiones o molestias:\n${molestias || "(ninguna)"}`

    const html =
      rows.map(([label, value]) => `<p><strong>${label}:</strong> ${escapeHtml(value)}</p>`).join("") +
      `<p><strong>Objetivo:</strong></p><p>${escapeHtml(objetivo).replace(/\n/g, "<br>")}</p>` +
      `<p><strong>Lesiones o molestias:</strong></p><p>${escapeHtml(molestias || "(ninguna)").replace(/\n/g, "<br>")}</p>`

    await sendEmail({
      to: FROM_EMAIL,
      subject: `Nueva aplicación /afuera: ${nombre} (${pais})`,
      text,
      html,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Error enviando aplicación /afuera", error)
    return NextResponse.json({ ok: false, error: "No se pudo enviar" }, { status: 500 })
  }
}
