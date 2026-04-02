const stats = [
  { value: "15,000+", label: "Sesiones realizadas" },
  { value: "200+", label: "Terapeutas certificados" },
  { value: "95%", label: "Satisfaccion de usuarios" },
  { value: "120+", label: "Empresas confian en nosotros" },
]

export function TrustBar() {
  return (
    <section className="py-16 px-6 bg-white border-y border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-[var(--teal)]">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-gray-500 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
