import type { Metadata } from 'next'
import { DM_Sans, Montserrat } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const sans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '700'],
})

const display = DM_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700'],
})

const logo = Montserrat({
  subsets: ['latin'],
  variable: '--font-logo',
  weight: ['700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Inmo Analista | Agencia inmobiliaria en Requena, Valencia',
  description: 'Compra, venta y alquiler de propiedades en Requena y la provincia de Valencia con asesoramiento cercano y profesional.',
  keywords: 'inmo analista, inmobiliaria requena, agencia inmobiliaria valencia, compra vivienda, venta vivienda, alquiler',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${sans.variable} ${display.variable} ${logo.variable}`}>
      <body className="bg-white text-stone-900 antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
