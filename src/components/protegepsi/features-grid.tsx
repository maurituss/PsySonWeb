import {
  ClipboardCheck,
  Monitor,
  HeartPulse,
  Target,
  FileCheck2,
  CalendarCheck,
} from "lucide-react";

const features = [
  {
    icon: <ClipboardCheck size={24} />,
    title: "Diagnóstico validado",
    desc: "Instrumentos científicos e revisão normativa para mapear riscos psicossociais.",
  },
  {
    icon: <Monitor size={24} />,
    title: "Plataforma tecnológica",
    desc: "Coleta contínua de dados, dashboards e KPIs acionáveis.",
  },
  {
    icon: <HeartPulse size={24} />,
    title: "Supervisão clínica contínua",
    desc: "Acompanhamento por especialistas em saúde e segurança do trabalho.",
  },
  {
    icon: <Target size={24} />,
    title: "Planos de intervenção",
    desc: "Ações por unidade, treinamento de líderes e acompanhamento.",
  },
  {
    icon: <FileCheck2 size={24} />,
    title: "Governança para auditoria",
    desc: "Documentação organizada e rastreável.",
  },
  {
    icon: <CalendarCheck size={24} />,
    title: "Entrega por marcos",
    desc: "Implementação progressiva com validação e menor risco operacional.",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="bg-[var(--pp-dark)] py-24 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="text-center font-[family-name:var(--font-manrope)] text-3xl font-extrabold text-[var(--pp-text-light)] md:text-4xl">
          O que o ProtegePsi{" "}
          <span className="bg-gradient-to-r from-[var(--pp-blue)] to-[var(--pp-cyan)] bg-clip-text text-transparent">
            oferece
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center font-[family-name:var(--font-manrope)] text-base text-[var(--pp-text-light)]/60">
          Entregáveis concretos para proteger sua operação e suas pessoas.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-white/10 bg-white/5 p-7 transition-all hover:border-[var(--pp-cyan)]/30 hover:bg-white/[0.07]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--pp-blue)]/20 to-[var(--pp-cyan)]/20 text-[var(--pp-cyan)] transition-colors group-hover:from-[var(--pp-blue)]/30 group-hover:to-[var(--pp-cyan)]/30">
                {f.icon}
              </div>
              <h3 className="font-[family-name:var(--font-manrope)] text-lg font-bold text-[var(--pp-text-light)]">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--pp-text-light)]/60">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
