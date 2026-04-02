export function DashboardPreview() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--psyson-azul-oscuro)]">
            Panel de RRHH en tiempo real
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Metricas anonimas y agregadas para que tu equipo de RRHH pueda medir el impacto sin comprometer la privacidad.
          </p>
        </div>

        {/* Dashboard mockup */}
        <div className="bg-[var(--warm-bg)] rounded-2xl border border-gray-200 p-6 sm:p-8 max-w-4xl mx-auto">
          {/* Top bar */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-sm text-gray-500">Dashboard corporativo</p>
              <p className="text-lg font-bold text-[var(--psyson-azul-oscuro)]">Resumen mensual</p>
            </div>
            <div className="text-xs bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-gray-500">
              Abril 2026
            </div>
          </div>

          {/* KPI row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Sesiones", value: "312", change: "+18%" },
              { label: "Satisfaccion", value: "94%", change: "+2%" },
              { label: "Adopcion", value: "78%", change: "+5%" },
              { label: "NPS", value: "72", change: "+8" },
            ].map((kpi) => (
              <div key={kpi.label} className="bg-white rounded-xl p-4 border border-gray-100">
                <p className="text-xs text-gray-500 mb-1">{kpi.label}</p>
                <p className="text-2xl font-bold text-[var(--psyson-azul-oscuro)]">{kpi.value}</p>
                <p className="text-xs text-[var(--psyson-celeste)] font-medium mt-1">{kpi.change}</p>
              </div>
            ))}
          </div>

          {/* Chart placeholder */}
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <p className="text-sm font-semibold text-[var(--psyson-azul-oscuro)] mb-4">Motivos de consulta (anonimo)</p>
            <div className="space-y-3">
              {[
                { label: "Ansiedad", pct: 32, color: "var(--psyson-celeste)" },
                { label: "Estres laboral", pct: 28, color: "var(--psyson-verde)" },
                { label: "Relaciones", pct: 18, color: "var(--psyson-celeste)" },
                { label: "Autoestima", pct: 14, color: "var(--psyson-azul-claro)" },
                { label: "Otros", pct: 8, color: "var(--psyson-verde)" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="text-xs text-gray-500 w-24 shrink-0">{item.label}</span>
                  <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${item.pct}%`, backgroundColor: item.color }}
                    />
                  </div>
                  <span className="text-xs font-medium text-gray-600 w-8 text-right">{item.pct}%</span>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-4 text-xs text-gray-400 text-center">
            🔒 Todos los datos son anonimos y agregados. Ningun dato individual es accesible.
          </p>
        </div>
      </div>
    </section>
  )
}
