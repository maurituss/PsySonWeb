"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "O que muda para as empresas com a atualização da NR-1?",
    a: "A NR-1 atualizada exige que as empresas identifiquem e gerenciem riscos psicossociais dentro do Programa de Gerenciamento de Riscos (PGR). Isso inclui fatores como sobrecarga de trabalho, assédio, pressão excessiva e falta de suporte organizacional.",
  },
  {
    q: "Em quanto tempo o ProtegePsi pode ser implementado?",
    a: "O processo completo de implementação é realizado em 8 semanas, dividido em etapas progressivas com validação e entrega por marcos, minimizando riscos operacionais.",
  },
  {
    q: "Como funciona a coleta de dados?",
    a: "Utilizamos instrumentos científicos validados e uma plataforma tecnológica própria para coleta contínua de dados, garantindo sigilo e conformidade com a LGPD.",
  },
  {
    q: "Que tipo de relatórios a empresa recebe?",
    a: "A empresa recebe dashboards com KPIs acionáveis, relatórios de diagnóstico por unidade, planos de intervenção e documentação para auditoria e governança.",
  },
  {
    q: "O ProtegePsi substitui atendimento psicológico individual?",
    a: "Não. O ProtegePsi é uma solução de gestão de riscos psicossociais corporativos. Ele complementa — mas não substitui — o atendimento clínico individual.",
  },
  {
    q: "O projeto inclui suporte para auditorias?",
    a: "Sim. A etapa de governança e compliance garante documentação organizada e rastreável, facilitando processos de auditoria interna e externa.",
  },
  {
    q: "O escopo muda de acordo com o número de colaboradores?",
    a: "Sim. O ProtegePsi é dimensionado conforme o porte da empresa, com planos específicos para operações de até 100, de 100 a 500 e acima de 500 colaboradores.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[var(--pp-beige)] py-24 md:py-28">
      <div className="mx-auto max-w-[800px] px-6">
        <h2 className="text-center font-[family-name:var(--font-manrope)] text-3xl font-extrabold text-[var(--pp-text-dark)] md:text-4xl">
          Perguntas frequentes
        </h2>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="rounded-2xl border border-[var(--pp-text-dark)]/5 bg-white shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-[family-name:var(--font-manrope)] text-base font-semibold text-[var(--pp-text-dark)]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-[var(--pp-blue)] transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-200 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-[var(--pp-text-dark)]/60">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
