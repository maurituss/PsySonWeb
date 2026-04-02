import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote: "PsySon nos dio tranquilidad. Sabemos que nuestros colaboradores tienen acceso a ayuda profesional alineada con nuestra mision como organizacion.",
    name: "Maria Gonzalez",
    role: "Directora de RRHH, Fundacion Esperanza",
    initials: "MG",
  },
  {
    quote: "La adopcion fue altisima desde el primer mes. Los empleados agradecen tener un espacio confidencial con profesionales que entienden su fe.",
    name: "Carlos Rodriguez",
    role: "CEO, Editorial Gracia",
    initials: "CR",
  },
  {
    quote: "El dashboard nos permite ver el impacto sin comprometer la privacidad. Finalmente podemos justificar la inversion con datos reales.",
    name: "Ana Martinez",
    role: "VP de Personas, ONG Luz del Mundo",
    initials: "AM",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary mb-4">
            <span className="w-5 h-0.5 bg-primary rounded" />
            Testimonios
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group relative border-border hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
            >
              <span className="absolute top-6 right-6 text-6xl text-primary/10 font-serif leading-none">
                &ldquo;
              </span>
              <CardContent className="p-8 relative">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-8">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-white">{testimonial.initials}</span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
