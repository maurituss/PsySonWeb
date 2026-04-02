import { ArrowRight, MessageCircle } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-[var(--pp-dark)] py-24 md:py-28"
    >
      {/* Background decorations */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[var(--pp-blue)]/5 blur-[120px]" />

      <div className="relative mx-auto max-w-[800px] px-6 text-center">
        <h2 className="font-[family-name:var(--font-manrope)] text-3xl font-extrabold leading-tight text-[var(--pp-text-light)] md:text-4xl">
          Estruture a proteção psicossocial da sua empresa com{" "}
          <span className="bg-gradient-to-r from-[var(--pp-blue)] to-[var(--pp-cyan)] bg-clip-text text-transparent">
            método, tecnologia e respaldo técnico
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl font-[family-name:var(--font-manrope)] text-lg leading-relaxed text-[var(--pp-text-light)]/70">
          Fale com a equipe da PsySon e conheça a melhor configuração do
          ProtegePsi para o porte da sua operação.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-2xl bg-[var(--pp-blue)] px-8 py-4 font-[family-name:var(--font-manrope)] text-base font-bold text-white shadow-lg shadow-[var(--pp-blue)]/25 transition-all hover:shadow-xl hover:shadow-[var(--pp-blue)]/30 hover:-translate-y-0.5"
          >
            Solicitar apresentação
            <ArrowRight size={18} />
          </a>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-[var(--pp-text-light)]/20 px-8 py-4 font-[family-name:var(--font-manrope)] text-base font-semibold text-[var(--pp-text-light)] transition-all hover:border-[var(--pp-cyan)]/40 hover:text-[var(--pp-cyan)]"
          >
            <MessageCircle size={18} />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
