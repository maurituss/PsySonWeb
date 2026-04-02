import { Search, MonitorSmartphone, Stethoscope, ShieldCheck } from "lucide-react";

const bullets = [
  { icon: <Search size={20} />, label: "Diagnóstico estruturado" },
  { icon: <MonitorSmartphone size={20} />, label: "Plataforma de coleta e análise" },
  { icon: <Stethoscope size={20} />, label: "Supervisão técnica especializada" },
  { icon: <ShieldCheck size={20} />, label: "Governança, documentação e suporte" },
];

export default function SolutionIntro() {
  return (
    <section id="solucao" className="bg-[var(--pp-beige)] py-24 md:py-28">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-6 lg:grid-cols-2 lg:items-center">
        {/* Left: copy */}
        <div>
          <h2 className="font-[family-name:var(--font-manrope)] text-3xl font-extrabold leading-tight text-[var(--pp-text-dark)] md:text-4xl">
            Uma solução completa para{" "}
            <span className="text-[var(--pp-blue)]">proteção psicossocial</span>{" "}
            corporativa
          </h2>
          <p className="mt-6 font-[family-name:var(--font-manrope)] text-lg leading-relaxed text-[var(--pp-text-dark)]/70">
            O ProtegePsi foi desenvolvido para empresas que buscam reduzir
            riscos psicossociais, promover bem-estar no ambiente de trabalho e
            estruturar uma resposta consistente às exigências da NR-1.
          </p>
        </div>

        {/* Right: bullets */}
        <div className="grid gap-4 sm:grid-cols-2">
          {bullets.map((b, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-2xl border border-[var(--pp-text-dark)]/5 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--pp-blue)]/10 text-[var(--pp-blue)]">
                {b.icon}
              </div>
              <p className="font-[family-name:var(--font-manrope)] text-base font-semibold text-[var(--pp-text-dark)]">
                {b.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
