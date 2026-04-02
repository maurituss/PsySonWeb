"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Activity, Shield, CheckCircle } from "lucide-react"

export function Hero() {
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll("[data-count]")
            counters.forEach((counter) => {
              const target = parseInt(counter.getAttribute("data-count") || "0")
              const suffix = counter.getAttribute("data-suffix") || ""
              let current = 0
              const increment = target / 50
              const timer = setInterval(() => {
                current += increment
                if (current >= target) {
                  current = target
                  clearInterval(timer)
                }
                counter.textContent = Math.floor(current) + suffix
              }, 30)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[oklch(0.18_0.04_250)]">
      {/* Background Image + Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[oklch(0.18_0.04_250)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_40%,oklch(0.45_0.12_240/0.25),transparent_60%),radial-gradient(ellipse_50%_50%_at_20%_80%,oklch(0.65_0.14_175/0.15),transparent_50%)]" />
        <div className="absolute w-[500px] h-[500px] -top-[10%] -right-[5%] rounded-full bg-primary/30 blur-[100px]" />
        <div className="absolute w-[350px] h-[350px] -bottom-[15%] left-[5%] rounded-full bg-accent/30 blur-[80px]" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm text-white/70 font-medium">
                Confidencial · Accesible · Para organizaciones con identidad cristiana
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
              Salud mental para tu organización,{" "}
              <span className="bg-gradient-to-r from-[oklch(0.75_0.12_175)] to-[oklch(0.65_0.14_175)] bg-clip-text text-transparent">
                alineada con tus valores
              </span>
            </h1>

            <p className="text-lg text-white/60 leading-relaxed mb-10 max-w-xl">
              Ofrece a tus colaboradores y sus familias acceso confidencial a atención
              psicológica online con profesionales certificados por PsySon.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/30 h-14 px-8 text-base"
                onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
              >
                Solicitar demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm h-14 px-8 text-base"
                onClick={() => document.getElementById("solucion")?.scrollIntoView({ behavior: "smooth" })}
              >
                Conocer el programa
              </Button>
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-sm text-white/50">
                Presente en <strong className="text-white/80">119 países</strong> · <strong className="text-white/80">+120 organizaciones</strong> confían en PsySon
              </p>
            </div>
          </div>

          {/* Dashboard Card */}
          <div className="relative">
            <div className="bg-white/[0.08] border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Activity className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Dashboard PsySon</h3>
                  <p className="text-white/50 text-sm">Vista del programa corporativo</p>
                </div>
              </div>

              <div ref={statsRef} className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/[0.06] rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-white" data-count="248">0</div>
                  <div className="text-xs text-white/40 mt-1">Sesiones</div>
                </div>
                <div className="bg-white/[0.06] rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-[oklch(0.75_0.12_175)]" data-count="92" data-suffix="%">0%</div>
                  <div className="text-xs text-white/40 mt-1">Satisfacción</div>
                </div>
                <div className="bg-white/[0.06] rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-white" data-count="76" data-suffix="%">0%</div>
                  <div className="text-xs text-white/40 mt-1">Adopción</div>
                </div>
              </div>

              <div className="flex items-end gap-2 h-24 px-2">
                {[55, 70, 45, 90, 65, 80].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-md transition-all duration-1000"
                    style={{
                      height: `${height}%`,
                      background: i % 2 === 0
                        ? "oklch(0.45 0.12 240)"
                        : "oklch(0.65 0.14 175)"
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-white/10 border border-white/15 backdrop-blur-xl rounded-2xl p-4 flex items-center gap-3 animate-in slide-in-from-top-4 duration-700">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold">Sesión completada</p>
                <p className="text-white/50 text-xs">Hace 2 min</p>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white/10 border border-white/15 backdrop-blur-xl rounded-2xl p-4 flex items-center gap-3 animate-in slide-in-from-bottom-4 duration-700 delay-300">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold">100% confidencial</p>
                <p className="text-white/50 text-xs">Datos encriptados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
