import Link from 'next/link'
import { getArticles } from '@/lib/articles'

export default function Ressources() {
  const articles = getArticles().slice(0, 3)

  return (
    <section id="ressources" style={{ background: '#ede8df', padding: '96px 24px' }}>
      <div className="max-w-6xl mx-auto">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <p style={{ fontFamily: 'var(--font-lato)', fontSize: '0.72rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#b08840', marginBottom: '12px' }}>Ressources</p>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: '#1c1f28', fontWeight: 400, margin: 0 }}>
              Articles & Analyses
            </h2>
          </div>
          <Link href="/ressources" style={{ fontFamily: 'var(--font-lato)', fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#b08840', textDecoration: 'none', borderBottom: '1px solid rgba(176,136,64,0.4)', paddingBottom: '2px' }}>
            Voir tous les articles
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map(a => (
            <Link key={a.slug} href={`/ressources/${a.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
              <article style={{ background: '#f6f3ee', padding: '32px 28px', height: '100%', borderTop: '2px solid transparent', transition: 'border-color 0.2s' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderTopColor = '#b08840')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderTopColor = 'transparent')}
              >
                <p style={{ fontFamily: 'var(--font-lato)', fontSize: '0.68rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#b08840', marginBottom: '12px' }}>{a.categorie}</p>
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.05rem', color: '#1c1f28', fontWeight: 400, lineHeight: 1.4, marginBottom: '14px' }}>{a.titre}</h3>
                <p style={{ fontFamily: 'var(--font-lato)', fontSize: '0.88rem', color: '#726a58', lineHeight: 1.65, marginBottom: '20px' }}>{a.resume}</p>
                <span style={{ fontFamily: 'var(--font-lato)', fontSize: '0.72rem', color: '#b08840', letterSpacing: '0.08em' }}>Lire l'article →</span>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
