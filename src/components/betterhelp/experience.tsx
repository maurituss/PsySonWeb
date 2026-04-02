import { Check } from "lucide-react"

const steps = [
  "Agenda desde tu celular o computadora en menos de 1 minuto",
  "Elegi el terapeuta que mejor se adapte a tus necesidades",
  "Sesiones por videollamada, chat o telefono",
  "Recordatorios automaticos y seguimiento continuo",
  "Encriptacion de extremo a extremo en todas las comunicaciones",
  "Soporte disponible 24/7 para emergencias",
]

export function Experience() {
  return (
    <section className="py-20 px-6 bg-[var(--warm-bg-alt)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--psyson-azul-oscuro)] leading-tight">
              Una experiencia pensada para el bienestar
            </h2>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              Todo lo que necesitas para cuidar tu salud mental, en un solo lugar y con la mayor privacidad.
            </p>

            <ul className="mt-8 space-y-4">
              {steps.map((step) => (
                <li key={step} className="flex items-start gap-3">
                  <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[var(--psyson-celeste)] flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* App mockup */}
          <div className="flex justify-center">
            <div className="w-72 bg-white rounded-3xl shadow-xl border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[var(--psyson-celeste-light)]" />
                <div>
                  <p className="text-sm font-semibold text-[var(--psyson-azul-oscuro)]">Proxima sesion</p>
                  <p className="text-xs text-gray-500">Hoy, 18:00 hs</p>
                </div>
              </div>

              <div className="bg-[var(--warm-bg)] rounded-xl p-4 mb-4">
                <p className="text-xs text-gray-500 mb-1">Tu terapeuta</p>
                <p className="text-sm font-semibold text-[var(--psyson-azul-oscuro)]">Lic. Maria Gonzalez</p>
                <p className="text-xs text-gray-500">Psicologia clinica · 12 anos exp.</p>
              </div>

              <div className="space-y-2">
                <div className="bg-[var(--psyson-celeste)] text-white rounded-xl py-3 text-center text-sm font-semibold">
                  Unirme a sesion
                </div>
                <div className="border border-gray-200 rounded-xl py-3 text-center text-sm font-medium text-gray-600">
                  Reagendar
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-2 text-center">
                <div className="bg-gray-50 rounded-lg py-2">
                  <p className="text-xs text-gray-500">Sesiones</p>
                  <p className="text-sm font-bold text-[var(--psyson-azul-oscuro)]">8</p>
                </div>
                <div className="bg-gray-50 rounded-lg py-2">
                  <p className="text-xs text-gray-500">Racha</p>
                  <p className="text-sm font-bold text-[var(--psyson-azul-oscuro)]">4 sem</p>
                </div>
                <div className="bg-gray-50 rounded-lg py-2">
                  <p className="text-xs text-gray-500">Animo</p>
                  <p className="text-sm font-bold text-[var(--psyson-celeste)]">😊</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
