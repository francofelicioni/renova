import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import AfueraPlans from "@/components/afuera/plans"
import ApplyForm from "@/components/afuera/apply-form"
import WhatsappLink from "@/components/afuera/whatsapp-link"

const title = "Entrená con un argentino que vivió afuera | Renova Training"
const description =
  "Entrenamiento online para argentinos que viven en el exterior. Plan personalizado, devolución semanal en audio y llamada de inicio de ciclo. Cupos limitados."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/afuera" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://renovatraining.com/afuera",
    title,
    description,
    siteName: "Renova Training",
    images: [{ url: "https://renovatraining.com/renova-logo.png", width: 1200, height: 630, alt: "Renova Training" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["https://renovatraining.com/renova-logo.png"] },
}

const reasons = [
  {
    title: "Sé cómo es entrenar en otro país",
    text: "Viví 3 años en Australia y más de 6 en España. Entrené en gimnasios de los dos países, con otros horarios y lejos de casa.",
  },
  {
    title: "Te escribo yo",
    text: "Cada devolución la hago yo, mirando tu planilla. No hay bots ni mensajes copiados y pegados.",
  },
  {
    title: "Hablamos el mismo idioma",
    text: "Sos argentino, soy argentino. Nos entendemos rápido y sin vueltas, esté donde esté cada uno.",
  },
]

const steps = [
  {
    title: "Aplicás",
    text: "Completás un formulario corto con tu objetivo, tus días de entrenamiento y cualquier molestia que tenga que saber.",
  },
  {
    title: "Hablamos",
    text: "Te escribo por WhatsApp, vemos si encajamos y te cuento cómo sigue.",
  },
  {
    title: "Arrancás",
    text: "Hacemos la llamada de inicio de ciclo, recibís tu plan y cada semana te mando mi devolución en audio.",
  },
]

const faqs = [
  {
    question: "¿Tengo que vivir en algún país en particular?",
    answer:
      "No. Hoy entreno gente en Europa y Australia. Como la devolución semanal es en audio, no importa la diferencia horaria.",
  },
  {
    question: "¿Qué pasa si entreno en casa o en un gimnasio chico?",
    answer: "Adapto el plan a lo que tengas. Se puede entrenar bien en un gimnasio comercial, en uno chico o en casa.",
  },
  {
    question: "¿Incluye un plan de comidas?",
    answer:
      "Incluye pautas generales de alimentación y hábitos. Soy personal trainer, no nutricionista, así que no armo dietas médicas. Si tenés una condición de salud, lo mejor es que la veas con un nutricionista y yo adapto el entrenamiento.",
  },
  {
    question: "¿Cómo es la devolución semanal?",
    answer:
      "Cargás tus kilos y tus comentarios en la planilla. Yo la reviso y te mando un audio con lo que vi y los ajustes que hagan falta.",
  },
  {
    question: "¿Cómo se paga?",
    answer:
      "Se paga por mes, en euros, y no hay permanencia. Si vivís en otro país, coordinamos la forma de pago antes de arrancar.",
  },
  {
    question: "¿Cuánto tarda en verse un cambio?",
    answer:
      "Depende de tu punto de partida y de cuánto puedas sostener. Recomiendo un mínimo de 3 meses para ver cambios claros. Los resultados dependen de cada persona y no los garantizo.",
  },
]

export default function AfueraPage() {
  return (
    <main className="min-h-screen bg-background" role="main">
      <Header />

      {/* Hero */}
      <section className="flex items-center overflow-x-clip bg-background px-4 py-10 sm:py-20" id="hero">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1 text-xs font-medium text-accent">
              Para argentinos que viven afuera
            </p>
            <h1 className="mb-4 text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Entrená con un argentino que vivió afuera{" "}
              <span className="block text-accent">y te acompaña de cerca</span>
            </h1>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
              Soy Fran, personal trainer. Viví 3 años en Australia y más de 6 en España. Te armo el plan, te escribo yo
              cada semana y lo vamos ajustando juntos.
            </p>

            <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#aplicar"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-base font-semibold text-accent-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/40 sm:px-8"
              >
                Quiero mi lugar
              </a>
              <WhatsappLink
                source="hero"
                className="inline-flex items-center justify-center rounded-lg border border-accent/60 px-6 py-3 text-base font-semibold text-accent transition-all duration-300 hover:bg-accent/10 sm:px-8"
              >
                Escribime por WhatsApp
              </WhatsappLink>
            </div>
            <p className="text-xs text-muted-foreground sm:text-sm">Cupos limitados. Entreno online desde Buenos Aires.</p>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="absolute -inset-10 -z-10 bg-gradient-to-tr from-accent/20 via-transparent to-purple-500/10 blur-3xl" />
            <div className="overflow-hidden rounded-2xl border border-accent/20 bg-card/90 shadow-2xl">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/fran.jpg"
                  alt="Fran, personal trainer de Renova Training"
                  fill
                  priority
                  sizes="(min-width: 1024px) 420px, 90vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="grid grid-cols-2 gap-3 p-4 text-xs sm:text-sm">
                <div className="rounded-lg border border-border/60 bg-background/60 p-3">
                  <p className="text-muted-foreground">Australia</p>
                  <p className="mt-1 font-semibold text-foreground">Nov 2016 a oct 2019</p>
                </div>
                <div className="rounded-lg border border-border/60 bg-background/60 p-3">
                  <p className="text-muted-foreground">España</p>
                  <p className="mt-1 font-semibold text-foreground">Oct 2019 a dic 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué conmigo */}
      <section className="bg-background px-4 py-16 sm:py-20" id="por-que">
        <div className="mx-auto max-w-6xl">
          <h2 className="mx-auto mb-10 max-w-2xl text-center text-3xl font-bold tracking-tight text-foreground sm:mb-14 sm:text-4xl md:text-5xl">
            Por qué entrenar conmigo
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {reasons.map((item) => (
              <article key={item.title} className="rounded-2xl border border-border bg-card/90 p-6 sm:p-8">
                <h3 className="mb-3 text-lg font-semibold text-foreground sm:text-xl">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="bg-background px-4 py-16 sm:py-20" id="como-funciona">
        <div className="mx-auto max-w-6xl">
          <h2 className="mx-auto mb-10 max-w-2xl text-center text-3xl font-bold tracking-tight text-foreground sm:mb-14 sm:text-4xl md:text-5xl">
            Cómo funciona
          </h2>
          <ol className="grid gap-6 md:grid-cols-3">
            {steps.map((step, i) => (
              <li key={step.title} className="rounded-2xl border border-border bg-card/90 p-6 sm:p-8">
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent font-bold text-accent-foreground">
                  {i + 1}
                </span>
                <h3 className="mb-2 text-lg font-semibold text-foreground sm:text-xl">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Planes */}
      <section id="planes" className="scroll-mt-20 bg-background px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">Planes</h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Dos opciones, las dos con mi devolución semanal. Elegí la que se ajuste a lo que buscás.
            </p>
          </div>
          <AfueraPlans />
          <p className="mx-auto mt-8 max-w-xl text-center text-xs text-muted-foreground sm:text-sm">
            Precios por mes, en euros. Las pautas de alimentación son generales: soy personal trainer, no nutricionista.
            Cupos limitados.
          </p>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section id="faq" className="bg-background px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-foreground sm:mb-12 sm:text-4xl">
            Preguntas frecuentes
          </h2>
          <div className="space-y-4">
            {faqs.map((item) => (
              <details key={item.question} className="group rounded-xl border border-border bg-card/80 p-4 sm:p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-foreground sm:text-base">{item.question}</span>
                  <span
                    aria-hidden="true"
                    className="text-xl text-muted-foreground transition-transform duration-200 group-open:rotate-180"
                  >
                    ⌄
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Aplicar */}
      <section
        id="aplicar"
        className="relative scroll-mt-20 overflow-hidden bg-gradient-to-b from-background to-[#050608] px-4 py-16 sm:py-24"
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent" />
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Quiero mi lugar
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-base font-light text-muted-foreground sm:mb-16 sm:text-lg">
            Contame en qué punto estás y te escribo por WhatsApp para ver cómo seguimos.
          </p>
          <ApplyForm />
        </div>
      </section>

      <footer className="border-t border-border/40 bg-background px-4 py-8 text-center text-xs text-muted-foreground">
        <p>
          © Renova Training ·{" "}
          <Link href="/aviso-legal" className="underline hover:text-foreground">
            Aviso legal
          </Link>{" "}
          ·{" "}
          <Link href="/terminos" className="underline hover:text-foreground">
            Términos
          </Link>{" "}
          ·{" "}
          <Link href="/privacy-policy" className="underline hover:text-foreground">
            Privacidad
          </Link>
        </p>
      </footer>
    </main>
  )
}
