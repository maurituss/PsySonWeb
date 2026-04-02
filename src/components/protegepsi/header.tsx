"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Solução", href: "#solucao" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Implementação", href: "#implementacao" },
  { label: "Especialistas", href: "#especialistas" },
  { label: "Investimento", href: "#investimento" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--pp-dark)]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-6 md:h-[72px] h-[60px]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/logo-horizontal.png"
            alt="ProtegePsi"
            width={140}
            height={36}
            className="h-9 w-auto brightness-0 invert"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-[family-name:var(--font-manrope)] text-sm font-medium text-[var(--pp-text-light)]/80 transition-colors hover:text-[var(--pp-cyan)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contato"
          className="hidden rounded-xl bg-[var(--pp-blue)] px-6 py-2.5 font-[family-name:var(--font-manrope)] text-sm font-semibold text-white transition-all hover:bg-[var(--pp-blue-muted)] hover:shadow-lg lg:inline-flex"
        >
          Solicitar apresentação
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-[var(--pp-text-light)] lg:hidden"
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-[var(--pp-dark)]/98 backdrop-blur-md lg:hidden">
          <nav className="mx-auto flex max-w-[1200px] flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 font-[family-name:var(--font-manrope)] text-sm font-medium text-[var(--pp-text-light)]/80 transition-colors hover:bg-white/5 hover:text-[var(--pp-cyan)]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-xl bg-[var(--pp-blue)] px-6 py-3 text-center font-[family-name:var(--font-manrope)] text-sm font-semibold text-white"
            >
              Solicitar apresentação
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
