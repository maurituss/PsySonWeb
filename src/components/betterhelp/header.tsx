"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#como-funciona", label: "Como funciona" },
    { href: "#beneficios", label: "Beneficios" },
    { href: "#para-quien", label: "Para quien" },
    { href: "#testimonios", label: "Testimonios" },
    { href: "#faq", label: "FAQ" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-sm"
          : "bg-white"
      )}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/v2" className="flex items-center">
            <Image
              src="/logo-horizontal.png"
              alt="PsySon"
              width={140}
              height={40}
              className="h-9 w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-[var(--psyson-celeste)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" className="text-sm font-medium text-gray-700 hover:text-[var(--psyson-celeste)]">
              Iniciar sesion
            </Button>
            <Button className="bg-[var(--psyson-celeste)] hover:bg-[var(--psyson-azul-claro)] text-white rounded-full px-6 text-sm font-semibold">
              Comenzar ahora
            </Button>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <nav className="flex flex-col p-6 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 font-medium py-3 hover:text-[var(--psyson-celeste)]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4 mt-2 border-t border-gray-100">
              <Button variant="outline" className="w-full rounded-full">
                Iniciar sesion
              </Button>
              <Button className="w-full bg-[var(--psyson-celeste)] hover:bg-[var(--psyson-azul-claro)] text-white rounded-full">
                Comenzar ahora
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
