import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Carolina M.",
    role: "Directora de RRHH",
    company: "Empresa tecnologica, 450 empleados",
    quote:
      "PsySon fue un antes y un despues. La adopcion supero el 80% en el primer mes y el feedback de los equipos es increible.",
    rating: 5,
  },
  {
    name: "Fernando L.",
    role: "CEO",
    company: "Agencia de marketing, 120 empleados",
    quote:
      "Queriamos un programa de salud mental que respetara los valores de nuestra cultura. PsySon fue la respuesta.",
    rating: 5,
  },
  {
    name: "Lucia R.",
    role: "Gerenta de People",
    company: "Fintech, 300 empleados",
    quote:
      "El dashboard nos da visibilidad real sin comprometer la privacidad. Podemos medir el impacto y justificar la inversion.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonios" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--psyson-azul-oscuro)] text-center">
          Lo que dicen nuestros clientes
        </h2>
        <p className="mt-4 text-gray-600 text-center text-lg">
          Empresas reales, resultados reales
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[var(--warm-bg)] rounded-2xl p-6 border border-gray-100"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed text-sm">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--psyson-celeste-light)] flex items-center justify-center text-[var(--psyson-azul-claro)] font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--psyson-azul-oscuro)]">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role} · {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
