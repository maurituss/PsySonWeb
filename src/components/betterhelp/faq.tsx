"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    q: "Es realmente confidencial?",
    a: "Si. La empresa no tiene acceso a informacion personal de los usuarios. Solo recibe reportes anonimos y agregados sobre adopcion y satisfaccion general.",
  },
  {
    q: "El beneficio cubre a la familia del empleado?",
    a: "Si. Cada colaborador puede extender el beneficio a su nucleo familiar directo (pareja e hijos), sin costo adicional en la mayoria de los planes.",
  },
  {
    q: "Cuanto tarda la implementacion?",
    a: "El proceso completo lleva aproximadamente 2 semanas: desde la configuracion hasta el onboarding de los empleados con materiales y soporte dedicado.",
  },
  {
    q: "Que pasa si alguien necesita ayuda urgente?",
    a: "Contamos con protocolos de crisis y derivacion inmediata. Ademas, nuestro equipo de soporte esta disponible 24/7 para situaciones de urgencia.",
  },
  {
    q: "Como se asignan los terapeutas?",
    a: "Cada usuario puede elegir su terapeuta segun especialidad, enfoque y disponibilidad. Tambien ofrecemos un matching automatico basado en preferencias.",
  },
  {
    q: "Que tipo de reportes recibe RRHH?",
    a: "Un dashboard con metricas agregadas: tasa de adopcion, satisfaccion, frecuencia de uso y tendencias. Todo anonimo, sin datos individuales.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 px-6 bg-[var(--warm-bg)]">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--psyson-azul-oscuro)] text-center">
          Preguntas frecuentes
        </h2>
        <p className="mt-4 text-gray-600 text-center text-lg">
          Todo lo que necesitas saber antes de empezar
        </p>

        <div className="mt-12 space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-medium text-[var(--psyson-azul-oscuro)] pr-4">{faq.q}</span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200",
                    openIndex === i && "rotate-180"
                  )}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 -mt-1">
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
