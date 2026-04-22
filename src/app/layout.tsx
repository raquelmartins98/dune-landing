import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Buscamos al Peor Jugador del Mundo | PcComponentes Gaming',
  description: '¿Crees que eres el peor jugador del mundo? Demuéstralo y llévate un setup gaming valorado en 10.000€. Colaboración con PcComponentes.',
  keywords: ['gaming', 'peor jugador', 'PcComponentes', 'videojuego', 'concurso', 'setup gaming'],
  openGraph: {
    title: 'Buscamos al Peor Jugador del Mundo',
    description: 'Demuestra que eres el peor y llévate un setup de 10.000€',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
