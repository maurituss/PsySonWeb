import Image from "next/image"
import { LeadForm } from "@/components/psyson/lead-form"
import { Shield, Clock, Users } from "lucide-react"

export function CTASection() {
  return (
    <section id="contacto" className="py-24 px-6 bg-[oklch(0.18_0.04_250)] relative overflow-hidden">
      {/* Background Image + Effects */}
      <div className="absolute inset-0">
        <Image
          src="/images/peace-nature.jpg"
          alt=""
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-[oklch(0.18_0.04_250/0.8)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,oklch(0.45_0.12_240/0.2),transparent_60%),radial-gradient(ellipse_40%_40%_at_80%_20%,oklch(0.65_0.14_175/0.15),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
              Transforma el bienestar de tu organizacion
            </h2>
            <p className="text-lg text-white/60 leading-relaxed mb-10 max-w-xl">
              Agenda una demo personalizada y descubre como PsySon puede
              acompanar a tus colaboradores y sus familias.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <p className="text-white/70 text-sm">Implementacion en menos de 2 semanas</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-emerald-400" />
                </div>
                <p className="text-white/70 text-sm">Cobertura para colaboradores y sus familias</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-accent" />
                </div>
                <p className="text-white/70 text-sm">100% confidencial con encriptacion de grado bancario</p>
              </div>
            </div>
          </div>

          {/* Right: Lead Form */}
          <LeadForm />
        </div>
      </div>
    </section>
  )
}
