import Link from 'next/link'
import { MonogramCC } from './Navbar'

export default function Footer() {
  return (
    <footer style={{ background: '#101218', borderTop: '1px solid rgba(176,136,64,0.15)', padding: '56px 24px 32px' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <MonogramCC size={40} color="#b08840" />
              <span style={{ fontFamily: 'var(--font-playfair)', color: '#f6f3ee', fontSize: '0.9rem', letterSpacing: '0.06em' }}>
                Clémentine Chabert
              </span>
            </div>
            <p style={{ fontFamily: 'var(--font-lato)', color: '#726a58', fontSize: '0.85rem', lineHeight: 1.7, margin: 0 }}>
              Avocate au Barreau de Toulouse.<br />
              Distribution · Concurrence · Consommation · Contrats
            </p>
          </div>

          <div>
            <p style={{ fontFamily: 'var(--font-lato)', fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b08840', marginBottom: '16px' }}>Navigation</p>
            {[
              { href: '#cabinet', label: 'Le Cabinet' },
              { href: '#domaines', label: 'Domaines' },
              { href: '#honoraires', label: 'Honoraires' },
              { href: '/ressources', label: 'Ressources' },
              { href: '#contact', label: 'Contact' },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{ display: 'block', fontFamily: 'var(--font-lato)', color: '#726a58', fontSize: '0.85rem', textDecoration: 'none', marginBottom: '8px', letterSpacing: '0.04em' }}>
                {l.label}
              </Link>
            ))}
          </div>

          <div>
            <p style={{ fontFamily: 'var(--font-lato)', fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b08840', marginBottom: '16px' }}>Coordonnées</p>
            <address style={{ fontStyle: 'normal' }}>
              <p style={{ fontFamily: 'var(--font-lato)', color: '#726a58', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '8px' }}>
                2, rue Jean Giono<br />31130 Balma (Toulouse)
              </p>
              <a href="tel:+33659598090" style={{ display: 'block', fontFamily: 'var(--font-lato)', color: '#726a58', fontSize: '0.85rem', textDecoration: 'none', marginBottom: '4px' }}>06 59 59 80 90</a>
              <a href="mailto:cchabert.avocat@gmail.com" style={{ display: 'block', fontFamily: 'var(--font-lato)', color: '#726a58', fontSize: '0.85rem', textDecoration: 'none' }}>cchabert.avocat@gmail.com</a>
            </address>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(176,136,64,0.1)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ fontFamily: 'var(--font-lato)', color: '#726a58', fontSize: '0.75rem', margin: 0 }}>
            © {new Date().getFullYear()} Maître Clémentine Chabert — Avocate au Barreau de Toulouse
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <Link href="/mentions-legales" style={{ fontFamily: 'var(--font-lato)', color: '#726a58', fontSize: '0.75rem', textDecoration: 'none' }}>Mentions légales</Link>
            <Link href="/cgv" style={{ fontFamily: 'var(--font-lato)', color: '#726a58', fontSize: '0.75rem', textDecoration: 'none' }}>CGV</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
