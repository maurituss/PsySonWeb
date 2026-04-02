import type { Metadata } from 'next'
import { Poppins, Inter, Manrope } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-poppins'
});

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: '--font-manrope'
});

export const metadata: Metadata = {
  title: 'PsySon Corporativo — Salud mental para tu organizacion',
  description: 'Ofrece a tus colaboradores y sus familias acceso confidencial a atencion psicologica online con profesionales certificados por PsySon.',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${poppins.variable} ${inter.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
