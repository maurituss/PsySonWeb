"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "¿Cómo se garantiza la confidencialidad?",
    answer: "Toda la información clínica está protegida con encriptación de grado bancario. RRHH solo recibe datos agregados y anonimizados, nunca nombres ni detalles individuales.",
  },
  {
    question: "¿Qué incluye la cobertura familiar?",
    answer: "Cónyuge e hijos dependientes hasta 25 años pueden acceder al mismo beneficio. Cada miembro tiene su propio perfil privado.",
  },
  {
    question: "¿Cuánto tarda la implementación?",
    answer: "El proceso completo toma aproximadamente 2 semanas, incluyendo configuración técnica, materiales de comunicación interna y capacitación del equipo de RRHH.",
  },
  {
    question: "¿Qué pasa si un empleado necesita ayuda urgente?",
    answer: "Contamos con línea de crisis 24/7 atendida por profesionales capacitados. Además, nuestro sistema detecta señales de alerta para activar protocolos de emergencia.",
  },
  {
    question: "¿Cómo se asignan los terapeutas?",
    answer: "Los usuarios pueden elegir su terapeuta según especialidad, idioma, horario y enfoque pastoral. También pueden cambiar de profesional en cualquier momento.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary mb-4">
            <span className="w-5 h-0.5 bg-primary rounded" />
            Preguntas frecuentes
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Resolvemos tus dudas
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={cn(
                "border rounded-2xl overflow-hidden transition-all duration-300",
                openIndex === index
                  ? "border-primary/30 shadow-lg shadow-primary/5"
                  : "border-border hover:border-primary/20"
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-card hover:bg-secondary/50 transition-colors"
              >
                <span className="font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300",
                  openIndex === index
                    ? "bg-primary rotate-180"
                    : "bg-secondary"
                )}>
                  <ChevronDown className={cn(
                    "w-4 h-4 transition-colors",
                    openIndex === index ? "text-primary-foreground" : "text-muted-foreground"
                  )} />
                </div>
              </button>
              <div className={cn(
                "overflow-hidden transition-all duration-300",
                openIndex === index ? "max-h-48" : "max-h-0"
              )}>
                <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
