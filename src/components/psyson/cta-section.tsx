import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 px-6 bg-[var(--navy)]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight">
          Transforma el bienestar de tu organizacion
        </h2>
        <p className="mt-4 text-white/70 text-lg max-w-xl mx-auto">
          Sumate a las empresas que ya eligieron cuidar la salud mental de su equipo con PsySon.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="bg-[var(--teal)] hover:bg-[var(--teal-dark)] text-white rounded-full px-8 py-6 text-base font-semibold">
            Solicitar demo gratuita
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button variant="outline" className="rounded-full px-8 py-6 text-base font-semibold border-white/30 text-white hover:bg-white/10">
            Hablar con un asesor
          </Button>
        </div>
      </div>
    </section>
  )
}
