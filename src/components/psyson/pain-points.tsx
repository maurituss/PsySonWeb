import { Link2, TrendingDown, Settings } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const painPoints = [
  {
    icon: Link2,
    title: "Falta de afinidad cultural",
    description: "Los colaboradores no siempre conectan con propuestas desconectadas de sus valores y cosmovision.",
  },
  {
    icon: TrendingDown,
    title: "Baja adopcion",
    description: "Si el beneficio no genera confianza, la gente simplemente no lo usa y la inversion se pierde.",
  },
  {
    icon: Settings,
    title: "Complejidad operativa",
    description: "RR.HH. necesita una solucion clara, confidencial y facil de administrar sin friccion.",
  },
]

export function PainPoints() {
  return (
    <section id="solucion" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            No alcanza con ofrecer cualquier solucion de salud mental
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Muchas organizaciones quieren cuidar a su gente, pero encuentran opciones 
            genericas, poco alineadas con su cultura o dificiles de implementar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {painPoints.map((pain, index) => (
            <Card 
              key={index} 
              className="group relative border-border hover:border-destructive/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-destructive/80 to-destructive/40 rounded-b opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-destructive/10 flex items-center justify-center mb-6">
                  <pain.icon className="w-7 h-7 text-destructive" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {pain.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pain.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
