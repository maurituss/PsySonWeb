import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 px-6 bg-[oklch(0.18_0.04_250)] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,oklch(0.45_0.12_240/0.2),transparent_60%),radial-gradient(ellipse_40%_40%_at_80%_20%,oklch(0.65_0.14_175/0.15),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
          Transforma el bienestar de tu organizacion
        </h2>
        <p className="text-lg text-white/60 leading-relaxed mb-10 max-w-xl mx-auto">
          Agenda una demo personalizada y descubre como PsySon puede 
          acompanar a tus colaboradores y sus familias.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-white hover:bg-white/90 text-[oklch(0.18_0.04_250)] shadow-xl h-14 px-8 text-base font-semibold"
          >
            Solicitar demo gratuita
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white/20 text-white hover:bg-white/10 h-14 px-8 text-base"
          >
            Hablar con un asesor
          </Button>
        </div>
      </div>
    </section>
  )
}
