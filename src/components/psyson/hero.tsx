"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    label: "Para empresas",
    description: "Bienestar integral para tu equipo",
    icon: "🏢",
  },
  {
    label: "Para empleados",
    description: "Terapia online confidencial",
    icon: "👤",
  },
  {
    label: "Para familias",
    description: "Cobertura para toda la familia",
    icon: "👨‍👩‍👧",
  },
]

export function Hero() {
  return (
    <section className="pt-28 pb-20 px-6 bg-[var(--warm-bg)]">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--navy)] leading-tight tracking-tight">
          Tu equipo merece{" "}
          <span className="text-[var(--teal)]">sentirse bien</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Ofrece a tus colaboradores y sus familias acceso a atencion
          psicologica online profesional, confidencial y alineada con sus valores.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="bg-[var(--teal)] hover:bg-[var(--teal-dark)] text-white rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-[var(--teal)]/20">
            Comenzar ahora
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button variant="outline" className="rounded-full px-8 py-6 text-base font-semibold border-gray-300 text-gray-700 hover:bg-gray-50">
            Solicitar una demo
          </Button>
        </div>

        {/* Category cards - BetterHelp segmentation style */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.label}
              className="group bg-white rounded-2xl p-6 text-left border border-gray-200 hover:border-[var(--teal)] hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <span className="text-3xl">{cat.icon}</span>
              <h3 className="mt-3 font-semibold text-[var(--navy)] group-hover:text-[var(--teal)] transition-colors">
                {cat.label}
              </h3>
              <p className="mt-1 text-sm text-gray-500">{cat.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
