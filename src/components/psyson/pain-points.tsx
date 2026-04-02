import { Check, X } from "lucide-react"

const rows = [
  { feature: "Acceso inmediato sin listas de espera", psyson: true, traditional: false },
  { feature: "Sesiones online desde cualquier lugar", psyson: true, traditional: false },
  { feature: "Cobertura para familia del empleado", psyson: true, traditional: false },
  { feature: "Reportes anonimos para RRHH", psyson: true, traditional: false },
  { feature: "Terapeutas con enfoque de valores", psyson: true, traditional: false },
  { feature: "Implementacion en 2 semanas", psyson: true, traditional: false },
  { feature: "Costo por empleado accesible", psyson: true, traditional: false },
  { feature: "Confidencialidad total", psyson: true, traditional: true },
]

export function PainPoints() {
  return (
    <section id="beneficios" className="py-20 px-6 bg-[var(--warm-bg)]">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--navy)] text-center">
          PsySon vs. terapia tradicional
        </h2>
        <p className="mt-4 text-gray-600 text-center text-lg">
          Descubri por que las empresas eligen PsySon
        </p>

        <div className="mt-12 bg-white rounded-2xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
            <div className="p-4 text-sm font-semibold text-gray-500">Caracteristica</div>
            <div className="p-4 text-sm font-bold text-[var(--teal)] text-center">PsySon</div>
            <div className="p-4 text-sm font-semibold text-gray-500 text-center">Tradicional</div>
          </div>
          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-3 ${i < rows.length - 1 ? "border-b border-gray-100" : ""}`}
            >
              <div className="p-4 text-sm text-gray-700">{row.feature}</div>
              <div className="p-4 flex justify-center">
                {row.psyson ? (
                  <div className="w-6 h-6 rounded-full bg-[var(--teal)] flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                ) : (
                  <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                    <X className="w-3.5 h-3.5 text-gray-400" />
                  </div>
                )}
              </div>
              <div className="p-4 flex justify-center">
                {row.traditional ? (
                  <div className="w-6 h-6 rounded-full bg-[var(--teal)] flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                ) : (
                  <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                    <X className="w-3.5 h-3.5 text-gray-400" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
