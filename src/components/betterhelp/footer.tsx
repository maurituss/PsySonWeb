import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  producto: [
    { label: "Para empresas", href: "#" },
    { label: "Para empleados", href: "#" },
    { label: "Precios", href: "#" },
    { label: "Recursos", href: "#" },
  ],
  empresa: [
    { label: "Nosotros", href: "#" },
    { label: "Equipo", href: "#" },
    { label: "Carreras", href: "#" },
    { label: "Contacto", href: "#" },
  ],
  legal: [
    { label: "Privacidad", href: "#" },
    { label: "Terminos", href: "#" },
    { label: "Cookies", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-12">
          <div className="max-w-sm">
            <Link href="/v2" className="mb-4 inline-block">
              <Image
                src="/logo-horizontal.png"
                alt="PsySon"
                width={130}
                height={38}
                className="h-9 w-auto"
              />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              Salud mental corporativa con proposito. Acompanamos a
              organizaciones y sus colaboradores en su bienestar integral.
            </p>
          </div>

          <div className="flex flex-wrap gap-16">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">
                Producto
              </h4>
              <ul className="space-y-3">
                {footerLinks.producto.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-gray-500 hover:text-[var(--psyson-celeste)] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">
                Empresa
              </h4>
              <ul className="space-y-3">
                {footerLinks.empresa.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-gray-500 hover:text-[var(--psyson-celeste)] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">
                Legal
              </h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-gray-500 hover:text-[var(--psyson-celeste)] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} PsySon. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
