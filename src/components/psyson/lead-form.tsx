"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle, Loader2, Building2, Mail, Phone, User } from "lucide-react"

export function LeadForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")
    setErrorMsg("")

    const form = e.currentTarget
    const data = {
      nombre: (form.elements.namedItem("nombre") as HTMLInputElement).value,
      telefono: (form.elements.namedItem("telefono") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      organizacion: (form.elements.namedItem("organizacion") as HTMLInputElement).value,
    }

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error || "Error al enviar el formulario")
      }

      setStatus("success")
      form.reset()
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Error inesperado")
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white/[0.08] border border-white/10 rounded-3xl p-10 backdrop-blur-xl text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-emerald-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">
          Recibimos tu solicitud
        </h3>
        <p className="text-white/60 leading-relaxed">
          Un asesor de PsySon se pondrá en contacto contigo en las próximas 24 horas.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white/[0.08] border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl">
      <h3 className="text-xl font-bold text-white mb-2">
        Solicita una demo gratuita
      </h3>
      <p className="text-white/50 text-sm mb-8">
        Completa tus datos y te contactaremos para agendar una presentación personalizada.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
          <Input
            name="nombre"
            placeholder="Nombre completo"
            required
            className="bg-white/[0.06] border-white/10 text-white placeholder:text-white/30 h-12 pl-10 rounded-xl focus-visible:border-primary focus-visible:ring-primary/30"
          />
        </div>

        <div className="relative">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
          <Input
            name="telefono"
            type="tel"
            placeholder="Teléfono"
            required
            className="bg-white/[0.06] border-white/10 text-white placeholder:text-white/30 h-12 pl-10 rounded-xl focus-visible:border-primary focus-visible:ring-primary/30"
          />
        </div>

        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
          <Input
            name="email"
            type="email"
            placeholder="Correo electrónico"
            required
            className="bg-white/[0.06] border-white/10 text-white placeholder:text-white/30 h-12 pl-10 rounded-xl focus-visible:border-primary focus-visible:ring-primary/30"
          />
        </div>

        <div className="relative">
          <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
          <Input
            name="organizacion"
            placeholder="Organización"
            required
            className="bg-white/[0.06] border-white/10 text-white placeholder:text-white/30 h-12 pl-10 rounded-xl focus-visible:border-primary focus-visible:ring-primary/30"
          />
        </div>

        {status === "error" && (
          <p className="text-red-400 text-sm">{errorMsg}</p>
        )}

        <Button
          type="submit"
          disabled={status === "sending"}
          size="lg"
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/30 h-14 text-base font-semibold rounded-xl mt-2"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Enviando...
            </>
          ) : (
            "Solicitar demo gratuita"
          )}
        </Button>
      </form>

      <p className="text-white/30 text-xs text-center mt-6">
        Tus datos están protegidos. No compartimos tu información con terceros.
      </p>
    </div>
  )
}
