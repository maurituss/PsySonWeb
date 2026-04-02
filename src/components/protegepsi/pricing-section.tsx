import { Users, Building2, Briefcase, ArrowRight } from "lucide-react";

const plans = [
  {
    icon: <Users size={24} />,
    title: "Até 100 colaboradores",
    desc: "Solução dimensionada para pequenas e médias operações.",
  },
  {
    icon: <Building2 size={24} />,
    title: "De 100 a 500 colaboradores",
    desc: "Escopo ampliado com dashboards e supervisão dedicada.",
  },
  {
    icon: <Briefcase size={24} />,
    title: "Projetos customizados",
    desc: "Configuração sob medida para grandes organizações.",
  },
];

export default function PricingSection() {
  return (
    <section id="investimento" className="bg-[var(--pp-dark-alt)] py-24 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="text-center font-[family-name:var(--font-manrope)] text-3xl font-extrabold text-[var(--pp-text-light)] md:text-4xl">
          Investimento
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center font-[family-name:var(--font-manrope)] text-base text-[var(--pp-text-light)]/60">
          Planos sob consulta, conforme porte da empresa e escopo de implementação.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-white/10 bg-white/5 p-8 text-center transition-all hover:border-[var(--pp-blue)]/30 hover:bg-white/[0.07]"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--pp-blue)]/10 text-[var(--pp-blue)] transition-colors group-hover:bg-[var(--pp-blue)]/20">
                {plan.icon}
              </div>
              <h3 className="font-[family-name:var(--font-manrope)] text-lg font-bold text-[var(--pp-text-light)]">
                {plan.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--pp-text-light)]/50">
                {plan.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-2xl bg-[var(--pp-blue)] px-8 py-4 font-[family-name:var(--font-manrope)] text-base font-bold text-white shadow-lg shadow-[var(--pp-blue)]/25 transition-all hover:shadow-xl hover:shadow-[var(--pp-blue)]/30 hover:-translate-y-0.5"
          >
            Solicitar proposta
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
