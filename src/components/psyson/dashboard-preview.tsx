"use client"

import { useEffect, useRef } from "react"
import { Shield } from "lucide-react"

const kpis = [
  { value: "248", label: "Sesiones totales", color: "text-foreground" },
  { value: "92%", label: "Satisfaccion", color: "text-primary" },
  { value: "76%", label: "Adopcion", color: "text-accent" },
]

const chartData = [
  { label: "Ansiedad", value: 78, color: "from-primary to-primary/70" },
  { label: "Estres laboral", value: 65, color: "from-accent to-accent/70" },
  { label: "Relaciones", value: 52, color: "from-indigo-500 to-indigo-400" },
  { label: "Duelo", value: 38, color: "from-primary/70 to-blue-400" },
]

export function DashboardPreview() {
  const barsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll("[data-width]")
            bars.forEach((bar, index) => {
              setTimeout(() => {
                const width = bar.getAttribute("data-width")
                ;(bar as HTMLElement).style.width = `${width}%`
              }, index * 100)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (barsRef.current) {
      observer.observe(barsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Dashboard Preview */}
          <div className="order-2 lg:order-1">
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-xl">
              {/* Browser Toolbar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-secondary border-b border-border">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <div className="flex-1 ml-4 bg-card rounded-md px-4 py-1.5 border border-border">
                  <span className="text-xs text-muted-foreground">app.psyson.org/dashboard</span>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6">
                {/* KPIs */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {kpis.map((kpi, index) => (
                    <div key={index} className="bg-secondary rounded-xl p-5 text-center border border-border">
                      <div className={`text-3xl font-bold ${kpi.color}`}>
                        {kpi.value}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1 font-medium">
                        {kpi.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart */}
                <div>
                  <h4 className="text-sm font-bold text-foreground mb-4">
                    Motivos de consulta principales
                  </h4>
                  <div ref={barsRef} className="space-y-4">
                    {chartData.map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <span className="text-sm text-muted-foreground w-24 flex-shrink-0">
                          {item.label}
                        </span>
                        <div className="flex-1 h-3 bg-secondary rounded-full overflow-hidden">
                          <div
                            data-width={item.value}
                            className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: "0%" }}
                          />
                        </div>
                        <span className="text-sm font-bold text-foreground w-10 text-right">
                          {item.value}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Privacy Notice */}
                <div className="mt-6 bg-emerald-50 rounded-xl px-4 py-3 flex items-center gap-3">
                  <Shield className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-sm text-emerald-700 font-medium">
                    Datos agregados y anonimizados. Ningun nombre individual es visible.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary mb-4">
              <span className="w-5 h-0.5 bg-primary rounded" />
              Para RRHH
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Panel de gestion para Recursos Humanos
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Visualiza el impacto del programa sin comprometer la confidencialidad. 
              Metricas claras para tomar decisiones informadas sobre el bienestar de tu equipo.
            </p>

            <ul className="space-y-4">
              {[
                "Metricas de uso y satisfaccion en tiempo real",
                "Reportes descargables para directivos",
                "Alertas de tendencias sin datos personales",
                "Integracion con sistemas de RRHH existentes",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
