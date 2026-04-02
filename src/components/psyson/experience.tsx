import { Check, Star, Shield, Calendar, MessageCircle, Lock } from "lucide-react"

const features = [
  "Agenda sesiones en segundos desde cualquier dispositivo",
  "Elige terapeuta por especialidad, idioma o enfoque pastoral",
  "Sesiones por videollamada, con opcion de chat entre citas",
  "Recordatorios automaticos y reprogramacion sin penalidad",
  "Tu historial clinico protegido con encriptacion de grado bancario",
  "Soporte humano 24/7 para urgencias emocionales",
]

export function Experience() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary mb-4">
            <span className="w-5 h-0.5 bg-primary rounded" />
            Experiencia del usuario
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Una experiencia simple, privada y humana
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Features List */}
          <div>
            <ul className="space-y-5">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-accent" />
                  </span>
                  <span className="text-foreground leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Phone Mockup with background image */}
          <div className="flex justify-center relative">
            <div className="relative w-[300px] bg-foreground rounded-[40px] p-3 shadow-2xl shadow-foreground/20">
              <div className="w-24 h-6 bg-foreground rounded-full mx-auto -mt-1 relative z-10" />
              <div className="bg-card rounded-[32px] overflow-hidden">
                <div className="px-5 py-4">
                  {/* App Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-border mb-5">
                    <span className="font-bold text-foreground">PsySon</span>
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">MC</span>
                    </div>
                  </div>

                  {/* Next Session */}
                  <div className="mb-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                      Proxima sesion
                    </p>
                    <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-4 flex items-center gap-4">
                      <div className="bg-white/20 rounded-xl px-4 py-3 text-center">
                        <span className="text-xs text-white/80 uppercase font-semibold block">Mar</span>
                        <span className="text-2xl font-bold text-white">15</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-semibold">10:00 AM</p>
                        <p className="text-white/70 text-sm">Videollamada</p>
                      </div>
                      <div className="px-3 py-1.5 bg-white/20 rounded-full">
                        <span className="text-xs font-bold text-white">En 2h</span>
                      </div>
                    </div>
                  </div>

                  {/* Therapist */}
                  <div className="mb-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                      Tu terapeuta
                    </p>
                    <div className="bg-secondary rounded-2xl p-4 flex items-center gap-4 border border-border">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center">
                        <span className="text-white font-bold">DV</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-foreground">Dra. Valeria M.</p>
                        <p className="text-sm text-muted-foreground">Ansiedad · Parejas</p>
                        <div className="flex items-center gap-1 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                      </div>
                      <Shield className="w-5 h-5 text-accent" />
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-secondary rounded-xl p-3 flex flex-col items-center gap-1 border border-border">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-xs font-semibold text-muted-foreground">Agendar</span>
                    </div>
                    <div className="bg-secondary rounded-xl p-3 flex flex-col items-center gap-1 border border-border">
                      <MessageCircle className="w-4 h-4 text-muted-foreground" />
                      <span className="text-xs font-semibold text-muted-foreground">Chat</span>
                    </div>
                    <div className="bg-secondary rounded-xl p-3 flex flex-col items-center gap-1 border border-border">
                      <Lock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-xs font-semibold text-muted-foreground">Privado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
