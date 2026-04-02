import Image from "next/image";
import { UserRound } from "lucide-react";

const experts = [
  {
    name: "Lislei Freire Campitelli",
    role: "Psicóloga clínica, Diretora Técnica da PsySon Brasil",
    bio: "Responsável pela supervisão operacional e ética do ProtegePsi.",
  },
  {
    name: "Dr. Sérgio Henrique da Silva Santos",
    role: "Médico, pneumologista, perito federal",
    bio: "Especialista em regulação e gestão de saúde e consultor do ProtegePsi.",
  },
];

export default function ExpertsSection() {
  return (
    <section id="especialistas" className="bg-[var(--pp-beige)] py-24 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="text-center font-[family-name:var(--font-manrope)] text-3xl font-extrabold text-[var(--pp-text-dark)] md:text-4xl">
          Especialistas por trás do ProtegePsi
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center font-[family-name:var(--font-manrope)] text-base text-[var(--pp-text-dark)]/60">
          O ProtegePsi nasce da experiência da PsySon em atendimento psicológico
          e da atuação de especialistas em saúde, regulação e gestão.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {experts.map((expert, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[var(--pp-text-dark)]/5 bg-white p-8 shadow-sm"
            >
              <div className="flex items-start gap-5">
                {/* Avatar placeholder */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--pp-blue)] to-[var(--pp-cyan)] text-white">
                  <UserRound size={28} />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-manrope)] text-lg font-bold text-[var(--pp-text-dark)]">
                    {expert.name}
                  </h3>
                  <p className="mt-1 font-[family-name:var(--font-manrope)] text-sm font-medium text-[var(--pp-blue)]">
                    {expert.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--pp-text-dark)]/60">
                    {expert.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
