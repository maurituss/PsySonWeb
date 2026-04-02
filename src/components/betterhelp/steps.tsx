const steps = [
  {
    number: "1",
    title: "Agenda una demo",
    description: "Conversamos con tu equipo de RRHH para entender las necesidades de tu organizacion.",
  },
  {
    number: "2",
    title: "Personalizamos tu plan",
    description: "Configuramos la plataforma, seleccionamos terapeutas y definimos la cobertura.",
  },
  {
    number: "3",
    title: "Lanzamos en 2 semanas",
    description: "Tus colaboradores empiezan a usar PsySon con onboarding y soporte continuo.",
  },
]

export function Steps() {
  return (
    <section id="como-funciona" className="py-20 px-6 bg-[var(--warm-bg)]">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--psyson-azul-oscuro)] text-center">
          Como empezar
        </h2>
        <p className="mt-4 text-gray-600 text-center text-lg">
          Tres pasos simples para llevar bienestar mental a tu organizacion
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-14 h-14 rounded-full bg-[var(--psyson-celeste)] text-white font-bold text-xl flex items-center justify-center mx-auto">
                {step.number}
              </div>
              <h3 className="mt-5 font-semibold text-lg text-[var(--psyson-azul-oscuro)]">{step.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
