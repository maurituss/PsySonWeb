"use client";

import {
  Search,
  Code2,
  Stethoscope,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

const steps = [
  {
    icon: <Search size={20} />,
    title: "Diagnóstico inicial",
    desc: "Levantamento dos riscos e revisão das práticas de RH",
  },
  {
    icon: <Code2 size={20} />,
    title: "Desenvolvimento tecnológico",
    desc: "Plataforma para coleta de dados e relatórios",
  },
  {
    icon: <Stethoscope size={20} />,
    title: "Supervisão técnica",
    desc: "Acompanhamento por especialistas em saúde mental ocupacional",
  },
  {
    icon: <BarChart3 size={20} />,
    title: "Intervenção e monitoramento",
    desc: "Planos de ação e treinamentos",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Governança e compliance",
    desc: "Documentação e suporte para auditorias",
  },
];

export default function ImplementationTimeline() {
  return (
    <section id="implementacao" className="bg-[var(--pp-dark)] py-24 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="text-center font-[family-name:var(--font-manrope)] text-3xl font-extrabold text-[var(--pp-text-light)] md:text-4xl">
          Implementação em{" "}
          <span className="bg-gradient-to-r from-[var(--pp-blue)] to-[var(--pp-cyan)] bg-clip-text text-transparent">
            8 semanas
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center font-[family-name:var(--font-manrope)] text-base text-[var(--pp-text-light)]/60">
          Processo claro com etapas validadas e entregas progressivas.
        </p>

        {/* Desktop: horizontal timeline */}
        <div className="mt-16 hidden lg:block">
          <div className="relative flex justify-between">
            {/* Connector line */}
            <div className="absolute left-[10%] right-[10%] top-6 h-0.5 bg-gradient-to-r from-[var(--pp-blue)] to-[var(--pp-cyan)]" />

            {steps.map((step, i) => (
              <div key={i} className="relative flex w-1/5 flex-col items-center px-3">
                {/* Dot */}
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[var(--pp-cyan)]/40 bg-[var(--pp-dark)] text-[var(--pp-cyan)]">
                  {step.icon}
                </div>
                <h3 className="mt-5 text-center font-[family-name:var(--font-manrope)] text-sm font-bold text-[var(--pp-text-light)]">
                  {step.title}
                </h3>
                <p className="mt-2 text-center text-xs leading-relaxed text-[var(--pp-text-light)]/50">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="mt-12 lg:hidden">
          <div className="relative border-l-2 border-[var(--pp-cyan)]/30 pl-8">
            {steps.map((step, i) => (
              <div key={i} className="relative pb-10 last:pb-0">
                {/* Dot on the line */}
                <div className="absolute -left-[calc(1rem+5px)] flex h-10 w-10 items-center justify-center rounded-full border-2 border-[var(--pp-cyan)]/40 bg-[var(--pp-dark)] text-[var(--pp-cyan)]">
                  {step.icon}
                </div>
                <h3 className="font-[family-name:var(--font-manrope)] text-base font-bold text-[var(--pp-text-light)]">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-[var(--pp-text-light)]/50">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
