import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[var(--pp-dark)] py-12">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-8 px-6 md:flex-row md:justify-between">
        {/* Left: logo + text */}
        <div className="text-center md:text-left">
          <Image
            src="/logo-horizontal.png"
            alt="PsySon"
            width={120}
            height={32}
            className="mx-auto h-8 w-auto brightness-0 invert md:mx-0"
          />
          <p className="mt-3 max-w-xs text-xs leading-relaxed text-[var(--pp-text-light)]/40">
            ProtegePsi é uma solução da PsySon para proteção psicossocial
            corporativa, com foco em saúde mental e conformidade com a NR-1.
          </p>
        </div>

        {/* Center: links */}
        <nav className="flex flex-wrap justify-center gap-6 text-xs text-[var(--pp-text-light)]/50">
          <a href="#" className="transition-colors hover:text-[var(--pp-cyan)]">
            Política de Privacidade
          </a>
          <a href="#contato" className="transition-colors hover:text-[var(--pp-cyan)]">
            Contato
          </a>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--pp-cyan)]"
          >
            WhatsApp
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--pp-cyan)]"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="inline h-3.5 w-3.5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> LinkedIn
          </a>
        </nav>

        {/* Right: LGPD */}
        <p className="max-w-xs text-center text-[10px] leading-relaxed text-[var(--pp-text-light)]/30 md:text-right">
          Em conformidade com a Lei Geral de Proteção de Dados (LGPD). Seus
          dados são tratados com segurança e sigilo.
        </p>
      </div>
    </footer>
  );
}
