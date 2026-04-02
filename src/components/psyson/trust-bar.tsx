import { Monitor, Users, Shield, Clock, BookOpen, Globe } from "lucide-react"

const trustItems = [
  { icon: Monitor, label: "Atencion 100% online" },
  { icon: Users, label: "Colaboradores y familias" },
  { icon: Shield, label: "Estadisticas anonimas" },
  { icon: Clock, label: "Implementacion en 2 semanas" },
  { icon: BookOpen, label: "Formacion para lideres" },
  { icon: Globe, label: "Cobertura internacional" },
]

export function TrustBar() {
  return (
    <section className="py-6 bg-card border-b border-border relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 py-2"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-semibold text-foreground leading-tight">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
