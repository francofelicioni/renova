import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Términos y Condiciones | Fitness Coaching",
  description: "Términos y condiciones de uso de nuestro sitio web y servicios de fitness coaching.",
}

export default function Terminos() {
  return (
    <main className="min-h-screen bg-background py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12 tracking-tight">Términos y Condiciones</h1>

        <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Aceptación de Términos</h2>
            <p>
              Al acceder y utilizar este sitio web, aceptas estar vinculado por estos términos y condiciones. Si no
              estás de acuerdo con alguno de los términos, no debes utilizar este sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Uso del Sitio</h2>
            <p>
              Aceptas utilizar este sitio solo para propósitos legales y de una manera que no infrinja los derechos de
              terceros ni restrinja el uso y disfrute del sitio por otros usuarios. Específicamente, aceptas no:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>Acosar, abusar, amenazar u ofender a otros usuarios</li>
              <li>Publicar contenido ilegal, amenazante, abusivo, difamatorio, obsceno o de otro modo ofensivo</li>
              <li>Transmitir códigos maliciosos o virus</li>
              <li>Interferir con la funcionalidad del sitio</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Servicios de Coaching</h2>
            <p>
              Nuestros servicios de coaching son proporcionados por profesionales certificados. Los resultados varían
              según el compromiso individual, la adherencia al programa y otros factores personales. No garantizamos
              resultados específicos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Política de Pago</h2>
            <p>
              Los pagos deben realizarse según lo indicado en el momento de la contratación del servicio. Nos reservamos
              el derecho de cambiar nuestras tarifas con previo aviso.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Privacidad y Datos Personales</h2>
            <p>
              Tu privacidad es importante para nosotros. Por favor, consulta nuestra Política de Privacidad para
              entender nuestras prácticas respecto a la recopilación y uso de información personal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Limitación de Responsabilidad</h2>
            <p>
              En la máxima medida permitida por la ley, Fitness Coaching no será responsable de ningún daño indirecto,
              incidental, especial, consecuente o punitivo resultante de tu uso o incapacidad de usar este sitio o los
              servicios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Modificación de Términos</h2>
            <p>
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Tu uso continuado del sitio
              tras tales modificaciones constituye tu aceptación de los términos modificados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Ley Aplicable</h2>
            <p>
              Estos términos y condiciones se rigen por la ley aplicable en tu jurisdicción y están sujetos a la
              jurisdicción exclusiva de los tribunales competentes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Contacto</h2>
            <p>
              Si tienes preguntas sobre estos Términos y Condiciones, contacta con nosotros a través del formulario de
              contacto en nuestro sitio web.
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
