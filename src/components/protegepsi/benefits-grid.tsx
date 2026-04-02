import { Heart, DollarSign, Scale, PieChart, Award } from "lucide-react";

const benefits = [
  {
    num: "01",
    icon: <Heart size={22} />,
    title: "Protege o capital humano e reduz sofrimento",
  },
  {
    num: "02",
    icon: <DollarSign size={22} />,
    title: "Evita custos com afastamentos e rotatividade",
  },
  {
    num: "03",
    icon: <Scale size={22} />,
    title: "Previne passivos trabalhistas e autuações",
  },
  {
    num: "04",
    icon: <PieChart size={22} />,
    title: "Oferece dados confiáveis para decisões estratégicas",
  },
  {
    num: "05",
    icon: <Award size={22} />,
    title: "Fortalece a imagem institucional com responsabilidade social",
  },
];

export default function BenefitsGrid() {
  return (
    <section id="beneficios" className="bg-[var(--pp-beige)] py-24 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="text-center font-[family-name:var(--font-manrope)] text-3xl font-extrabold text-[var(--pp-text-dark)] md:text-4xl">
          Benefícios para a empresa
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.num}
              className="group relative rounded-2xl border border-[var(--pp-text-dark)]/5 bg-white p-7 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              <span className="font-[family-name:var(--font-manrope)] text-5xl font-extrabold text-[var(--pp-blue)]/10 absolute top-4 right-6 select-none">
                {b.num}
              </span>
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--pp-blue)]/10 text-[var(--pp-blue)] transition-colors group-hover:bg-[var(--pp-blue)]/15">
                {b.icon}
              </div>
              <h3 className="font-[family-name:var(--font-manrope)] text-base font-bold text-[var(--pp-text-dark)] leading-snug">
                {b.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
