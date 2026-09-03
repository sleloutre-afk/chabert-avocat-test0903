import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Maître Clémentine Chabert — Avocate à Toulouse',
  description: 'Cabinet Chabert Avocat — Droit de la distribution, droit de la concurrence, droit de la consommation et contrats d\'affaires à Toulouse.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
