"use client";

import { TrendingUp, AlertTriangle, FileWarning } from "lucide-react";

const stats = [
  {
    icon: <AlertTriangle size={24} />,
    number: "472.328",
    label: "afastamentos por saúde mental em 2024",
  },
  {
    icon: <TrendingUp size={24} />,
    number: "+68%",
    label: "em relação ao ano anterior",
  },
  {
    icon: <FileWarning size={24} />,
    number: "NR-1",
    label: "com foco em riscos psicossociais e exigência de adaptação",
  },
];

export default function StatsCards() {
  return (
    <section className="relative bg-[var(--pp-dark-alt)] py-24 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="text-center font-[family-name:var(--font-manrope)] text-3xl font-extrabold text-[var(--pp-text-light)] md:text-4xl">
          A saúde mental no trabalho já é uma{" "}
          <span className="bg-gradient-to-r from-[var(--pp-blue)] to-[var(--pp-cyan)] bg-clip-text text-transparent">
            pauta crítica
          </span>{" "}
          para as empresas
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-white/10 bg-white/5 p-8 text-center transition-all hover:border-[var(--pp-cyan)]/30 hover:bg-white/[0.07]"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--pp-cyan)]/10 text-[var(--pp-cyan)] transition-colors group-hover:bg-[var(--pp-cyan)]/20">
                {stat.icon}
              </div>
              <p className="font-[family-name:var(--font-manrope)] text-4xl font-extrabold text-[var(--pp-text-light)] md:text-5xl">
                {stat.number}
              </p>
              <p className="mt-3 font-[family-name:var(--font-manrope)] text-sm leading-relaxed text-[var(--pp-text-light)]/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Impact statement */}
        <div className="mt-14 rounded-2xl border border-[var(--pp-blue)]/20 bg-[var(--pp-blue)]/5 px-8 py-6 text-center">
          <p className="font-[family-name:var(--font-manrope)] text-lg font-medium leading-relaxed text-[var(--pp-text-light)]/80 md:text-xl">
            Ansiedade, depressão e esgotamento impactam desempenho, aumentam
            afastamentos e fragilizam equipes.
          </p>
        </div>
      </div>
    </section>
  );
}
