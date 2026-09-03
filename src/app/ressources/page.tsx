'use client'

import Link from 'next/link'
import { getArticles } from '@/lib/articles'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Ressources() {
  const articles = getArticles()

  return (
    <>
      <Navbar />
      <main style={{ background: '#f6f3ee', minHeight: '100vh' }}>
        <div style={{ background: '#1c1f28', padding: '120px 24px 64px' }}>
          <div className="max-w-4xl mx-auto">
            <p style={{ fontFamily: 'var(--font-lato)', fontSize: '0.72rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#b08840', marginBottom: '16px' }}>Ressources</p>
            <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#f6f3ee', fontWeight: 400, margin: 0 }}>
              Articles & Analyses juridiques
            </h1>
          </div>
        </div>

        <div style={{ padding: '64px 24px' }}>
          <div className="max-w-4xl mx-auto grid gap-6">
            {articles.map(a => (
              <Link key={a.slug} href={`/ressources/${a.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                <article style={{ background: '#fff', padding: '36px 40px', borderLeft: '3px solid transparent', transition: 'border-color 0.2s' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderLeftColor = '#b08840')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderLeftColor = 'transparent')}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '14px' }}>
                    <span style={{ fontFamily: 'var(--font-lato)', fontSize: '0.68rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#b08840' }}>{a.categorie}</span>
                    <span style={{ fontFamily: 'var(--font-lato)', fontSize: '0.75rem', color: '#726a58' }}>{new Date(a.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.2rem', color: '#1c1f28', fontWeight: 400, lineHeight: 1.38, marginBottom: '12px' }}>{a.titre}</h2>
                  <p style={{ fontFamily: 'var(--font-lato)', fontSize: '0.9rem', color: '#726a58', lineHeight: 1.65, margin: 0 }}>{a.resume}</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
