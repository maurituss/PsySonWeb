"use client"

import { useEffect, useRef, useState } from "react"
const steps = [
  {
    number: 1,
    title: "Agenda una demo",
    description: "Conversamos sobre las necesidades de tu organizacion y te mostramos la plataforma en vivo.",
  },
  {
    number: 2,
    title: "Personalizamos tu plan",
    description: "Definimos cobertura, numero de sesiones, idiomas y materiales de lanzamiento interno.",
  },
  {
    number: 3,
    title: "Lanzamiento en 2 semanas",
    description: "Activamos la plataforma, capacitamos a tu equipo de RRHH y comunicamos el beneficio.",
  },
]

export function Steps() {
  const [lineWidth, setLineWidth] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLineWidth(100)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="como-funciona" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary mb-4">
            <span className="w-5 h-0.5 bg-primary rounded" />
            Como funciona
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Implementacion rapida y sin friccion
          </h2>
        </div>

        <div className="rounded-3xl bg-gradient-to-r from-primary/10 to-accent/10 border border-border p-8 mb-12 text-center">
          <p className="text-foreground font-bold text-xl md:text-2xl">
            Cobertura para colaboradores y sus familias
          </p>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-1 bg-border rounded-full">
            <div 
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${lineWidth}%` }}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/80 mx-auto mb-6 flex items-center justify-center shadow-xl shadow-primary/30 relative z-10">
                  <span className="text-3xl font-bold text-primary-foreground">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
