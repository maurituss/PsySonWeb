"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-2xl border border-[var(--pp-cyan)]/30 bg-[var(--pp-cyan)]/5 p-8 text-center">
        <p className="font-[family-name:var(--font-manrope)] text-lg font-bold text-[var(--pp-text-light)]">
          Obrigado pelo contato!
        </p>
        <p className="mt-2 text-sm text-[var(--pp-text-light)]/60">
          Nossa equipe entrará em contato em breve.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          required
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-[family-name:var(--font-manrope)] text-sm text-[var(--pp-text-light)] placeholder-[var(--pp-text-light)]/30 outline-none transition-colors focus:border-[var(--pp-cyan)]/40"
        />
        <input
          type="text"
          name="empresa"
          placeholder="Empresa"
          required
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-[family-name:var(--font-manrope)] text-sm text-[var(--pp-text-light)] placeholder-[var(--pp-text-light)]/30 outline-none transition-colors focus:border-[var(--pp-cyan)]/40"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          type="text"
          name="cargo"
          placeholder="Cargo"
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-[family-name:var(--font-manrope)] text-sm text-[var(--pp-text-light)] placeholder-[var(--pp-text-light)]/30 outline-none transition-colors focus:border-[var(--pp-cyan)]/40"
        />
        <input
          type="text"
          name="colaboradores"
          placeholder="Número de colaboradores"
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-[family-name:var(--font-manrope)] text-sm text-[var(--pp-text-light)] placeholder-[var(--pp-text-light)]/30 outline-none transition-colors focus:border-[var(--pp-cyan)]/40"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          required
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-[family-name:var(--font-manrope)] text-sm text-[var(--pp-text-light)] placeholder-[var(--pp-text-light)]/30 outline-none transition-colors focus:border-[var(--pp-cyan)]/40"
        />
        <input
          type="tel"
          name="telefone"
          placeholder="Telefone / WhatsApp"
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-[family-name:var(--font-manrope)] text-sm text-[var(--pp-text-light)] placeholder-[var(--pp-text-light)]/30 outline-none transition-colors focus:border-[var(--pp-cyan)]/40"
        />
      </div>
      <textarea
        name="mensagem"
        placeholder="Mensagem (opcional)"
        rows={3}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-[family-name:var(--font-manrope)] text-sm text-[var(--pp-text-light)] placeholder-[var(--pp-text-light)]/30 outline-none transition-colors focus:border-[var(--pp-cyan)]/40 resize-none"
      />
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--pp-blue)] px-8 py-4 font-[family-name:var(--font-manrope)] text-base font-bold text-white shadow-lg shadow-[var(--pp-blue)]/25 transition-all hover:shadow-xl hover:shadow-[var(--pp-blue)]/30 hover:-translate-y-0.5 sm:w-auto"
      >
        <Send size={16} />
        Solicitar apresentação
      </button>
    </form>
  );
}
