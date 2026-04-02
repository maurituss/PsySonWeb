import { Shield, Users, BarChart3, Heart } from "lucide-react"

const features = [
  {
    icon: Heart,
    title: "Terapia con proposito",
    description:
      "Profesionales que integran un enfoque basado en valores, brindando atencion con empatia y sentido.",
    color: "celeste" as const,
  },
  {
    icon: Users,
    title: "Para toda la familia",
    description:
      "Tus colaboradores y sus familias acceden al mismo beneficio. Porque el bienestar no termina en la oficina.",
    color: "verde" as const,
  },
  {
    icon: Shield,
    title: "100% confidencial",
    description:
      "Ni la empresa ni RRHH acceden a datos personales. Solo reciben estadisticas anonimas y agregadas.",
    color: "verde" as const,
  },
  {
    icon: BarChart3,
    title: "Metricas para RRHH",
    description:
      "Dashboard en tiempo real con adopcion, satisfaccion y tendencias. Datos para tomar decisiones.",
    color: "celeste" as const,
  },
]

const colorMap = {
  celeste: { bg: "bg-[var(--psyson-celeste-light)]", icon: "text-[var(--psyson-celeste)]" },
  verde: { bg: "bg-[var(--psyson-verde-light)]", icon: "text-[var(--psyson-verde)]" },
}

export function ValueProps() {
  return (
    <section id="para-quien" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--psyson-azul-oscuro)] text-center">
          Por que las empresas eligen PsySon
        </h2>
        <p className="mt-4 text-gray-600 text-center text-lg max-w-2xl mx-auto">
          Un programa de bienestar mental disenado para organizaciones que cuidan a su gente
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feat) => (
            <div
              key={feat.title}
              className="flex gap-5 p-6 rounded-2xl bg-[var(--warm-bg)] border border-gray-100"
            >
              <div className={`shrink-0 w-12 h-12 rounded-xl ${colorMap[feat.color].bg} flex items-center justify-center`}>
                <feat.icon className={`w-6 h-6 ${colorMap[feat.color].icon}`} />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-[var(--psyson-azul-oscuro)]">{feat.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{feat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
