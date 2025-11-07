import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aviso Legal | Fitness Coaching",
  description: "Aviso legal de nuestro sitio web de fitness coaching y entrenamientos personalizados.",
}

export default function AvisoLegal() {
  return (
    <main className="min-h-screen bg-background py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12 tracking-tight">Aviso Legal</h1>

        <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Información General</h2>
            <p>
              Este sitio web es propiedad de Fitness Coaching y se proporciona únicamente para fines informativos y
              educativos. El contenido no constituye asesoramiento médico, legal o profesional.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Limitación de Responsabilidad</h2>
            <p>
              El contenido de este sitio web se proporciona "tal cual". No ofrecemos garantías de ningún tipo,
              explícitas o implícitas. No somos responsables de ningún daño directo, indirecto o consecuente resultante
              del uso de este sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Derechos de Autor</h2>
            <p>
              Todo el contenido en este sitio web, incluyendo textos, imágenes, gráficos y videos, está protegido por
              derechos de autor. No está permitida la reproducción, distribución o transmisión sin el consentimiento
              previo por escrito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Descargo de Responsabilidad Médica</h2>
            <p>
              El contenido de este sitio no debe considerarse como diagnóstico, tratamiento, cura o prevención de
              ninguna enfermedad. Consulta con un médico antes de iniciar cualquier programa de ejercicio o dieta.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Enlaces Externos</h2>
            <p>
              Este sitio puede contener enlaces a sitios web de terceros. No somos responsables del contenido de estos
              sitios externos ni de su política de privacidad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Cambios en el Aviso</h2>
            <p>
              Nos reservamos el derecho de cambiar este aviso legal en cualquier momento. Los cambios entrarán en vigor
              al ser publicados en este sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Contacto</h2>
            <p>
              Si tiene alguna pregunta sobre este Aviso Legal, contacte con nosotros a través del formulario de contacto
              en nuestro sitio web.
            </p>
          </section>
        </div>

        <div className="mt-12">
          <a href="/" className="text-accent hover:underline font-semibold transition-colors">
            ← Volver al inicio
          </a>
        </div>
      </div>
    </main>
  )
}
