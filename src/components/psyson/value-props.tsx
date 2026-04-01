import { UserPlus, Users, ShieldCheck, BookOpen } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const values = [
  {
    icon: UserPlus,
    title: "Terapia online con enfoque cristiano",
    description: "Profesionales certificados que acompanan desde una cosmovision compartida.",
    gradient: "from-blue-100 to-blue-50",
    iconColor: "text-primary",
  },
  {
    icon: Users,
    title: "Acceso para empleados y sus familias",
    description: "Conyuge e hijos dependientes hasta los 25 anos incluidos en la cobertura.",
    gradient: "from-emerald-100 to-emerald-50",
    iconColor: "text-accent",
  },
  {
    icon: ShieldCheck,
    title: "Reportes anonimos para la organizacion",
    description: "Metricas agregadas sin comprometer la privacidad individual.",
    gradient: "from-indigo-100 to-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    icon: BookOpen,
    title: "Formacion y asesoria para equipos y lideres",
    description: "Capacitacion en salud emocional empresarial con valores cristianos.",
    gradient: "from-amber-100 to-amber-50",
    iconColor: "text-amber-600",
  },
]

export function ValueProps() {
  return (
    <section className="py-24 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary mb-4">
            <span className="w-5 h-0.5 bg-primary rounded" />
            Nuestra propuesta
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            PsySon combina atencion profesional, privacidad y coherencia espiritual
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="group border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <CardContent className="p-8 flex gap-5">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center flex-shrink-0`}>
                  <value.icon className={`w-6 h-6 ${value.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
