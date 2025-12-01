"use client"

type FAQItemProps = {
  question: string
  answer: string
}

function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <details className="group rounded-xl border border-border bg-card/80 p-4 sm:p-5">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
        <span className="text-sm sm:text-base font-semibold text-foreground">{question}</span>
        <span className="text-xl text-muted-foreground group-open:rotate-180 transition-transform duration-200">⌄</span>
      </summary>
      <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">{answer}</p>
    </details>
  )
}

export default function FAQ() {
  const faqs: FAQItemProps[] = [
    {
      question: "¿Necesito experiencia previa entrenando?",
      answer:
        "No es obligatorio, pero Renova está especialmente pensado para personas que ya entrenan. Si estás empezando desde cero, el plan Renova Prime te da un acompañamiento más cercano para construir bases sólidas.",
    },
    {
      question: "¿En qué se diferencia Renova de una rutina genérica de internet?",
      answer:
        "No usamos plantillas copiadas y pegadas. Analizamos tu contexto, tu historial, tus tiempos y tu nivel para diseñar un plan que realmente puedas seguir, con seguimiento y ajustes continuos.",
    },
    {
      question: "¿Puedo entrenar en un gimnasio comercial normal?",
      answer:
        "Sí. Los planes están pensados para que puedas entrenar en un gimnasio comercial estándar. Si entrenás en casa o en un box, también adaptamos el plan al equipamiento que tengas.",
    },
    {
      question: "¿Incluyen planes de nutrición?",
      answer:
        "Sí. Todos los planes incluyen lineamientos de nutrición y Renova Start y Advance incluyen un plan simple o completo ajustado a tu objetivo. En Prime profundizamos además en hábitos de estilo de vida.",
    },
    {
      question: "¿Cuánto tiempo mínimo recomiendan para ver cambios?",
      answer:
        "Depende de tu punto de partida, pero recomendamos al menos 12 semanas de trabajo consistente para ver cambios claros en recomposición corporal y rendimiento.",
    },
  ]

  return (
    <section id="faq" className="bg-background px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <header className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Preguntas frecuentes</h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">
            Respuestas claras y realistas para que sepas si Renova encaja con vos.
          </p>
        </header>

        <div className="space-y-4">
          {faqs.map((item) => (
            <FAQItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}


