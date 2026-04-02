"use client";

import { ArrowRight, MessageCircle, Clock, BarChart3, Users } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[var(--pp-dark)]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--pp-dark)] via-[var(--pp-dark-alt)] to-[var(--pp-dark)]" />
      <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-[var(--pp-blue)]/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[var(--pp-cyan)]/5 blur-[100px]" />

      <div className="relative mx-auto grid max-w-[1200px] gap-12 px-6 pt-32 pb-20 lg:grid-cols-2 lg:items-center lg:pt-40 lg:pb-28">
        {/* Left: Copy */}
        <div>
          <span className="mb-4 inline-block rounded-full border border-[var(--pp-cyan)]/30 bg-[var(--pp-cyan)]/10 px-4 py-1.5 font-[family-name:var(--font-manrope)] text-xs font-semibold uppercase tracking-widest text-[var(--pp-cyan)]">
            Proteção Psicossocial Corporativa
          </span>

          <h1 className="mt-6 font-[family-name:var(--font-manrope)] text-4xl font-extrabold leading-[1.1] text-[var(--pp-text-light)] md:text-5xl lg:text-[3.4rem]">
            Sua empresa pronta para a{" "}
            <span className="bg-gradient-to-r from-[var(--pp-blue)] to-[var(--pp-cyan)] bg-clip-text text-transparent">
              NR-1
            </span>{" "}
            com diagnóstico, plataforma e plano de ação em saúde mental
          </h1>

          <p className="mt-6 max-w-xl font-[family-name:var(--font-manrope)] text-lg leading-relaxed text-[var(--pp-text-light)]/70">
            O ProtegePsi combina tecnologia, supervisão clínica e governança
            para identificar riscos psicossociais, orientar intervenções e apoiar
            a conformidade da sua empresa com a NR-1.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[var(--pp-blue)] px-8 py-4 font-[family-name:var(--font-manrope)] text-base font-bold text-white shadow-lg shadow-[var(--pp-blue)]/25 transition-all hover:shadow-xl hover:shadow-[var(--pp-blue)]/30 hover:-translate-y-0.5"
            >
              Solicitar apresentação
              <ArrowRight size={18} />
            </a>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[var(--pp-text-light)]/20 px-8 py-4 font-[family-name:var(--font-manrope)] text-base font-semibold text-[var(--pp-text-light)] transition-all hover:border-[var(--pp-cyan)]/40 hover:text-[var(--pp-cyan)]"
            >
              <MessageCircle size={18} />
              Falar com um especialista
            </a>
          </div>
        </div>

        {/* Right: Highlights card */}
        <div className="relative">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            {/* Decorative glow */}
            <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-[var(--pp-blue)]/20 blur-[60px]" />

            <div className="relative space-y-6">
              <HighlightCard
                icon={<Clock size={22} />}
                title="Implementação em 8 semanas"
                desc="Processo estruturado com marcos de entrega e validação progressiva"
              />
              <HighlightCard
                icon={<BarChart3 size={22} />}
                title="Relatórios, KPIs e planos de ação"
                desc="Dashboards com indicadores para tomada de decisão estratégica"
              />
              <HighlightCard
                icon={<Users size={22} />}
                title="Supervisão por especialistas"
                desc="Acompanhamento contínuo por profissionais em saúde ocupacional"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HighlightCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-4 rounded-2xl border border-white/5 bg-white/5 p-5 transition-colors hover:border-[var(--pp-cyan)]/20">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--pp-blue)] to-[var(--pp-cyan)] text-white">
        {icon}
      </div>
      <div>
        <h3 className="font-[family-name:var(--font-manrope)] text-base font-bold text-[var(--pp-text-light)]">
          {title}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-[var(--pp-text-light)]/60">
          {desc}
        </p>
      </div>
    </div>
  );
}
