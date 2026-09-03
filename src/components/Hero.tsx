import { MonogramCC } from './Navbar'

export default function Hero() {
  return (
    <section style={{ position: 'relative', height: '100vh', minHeight: '600px', background: '#1c1f28', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <img
          src="/hero.png"
          alt=""
          aria-hidden="true"
          className="hero-img"
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.18 }}
        />
      </div>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(28,31,40,0.3) 0%, rgba(28,31,40,0.65) 100%)' }} />

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 24px', maxWidth: '760px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
          <MonogramCC size={96} color="#b08840" />
        </div>
        <p style={{ fontFamily: 'var(--font-lato)', fontSize: '0.75rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#b08840', marginBottom: '20px' }}>
          Cabinet Chabert Avocat
        </p>
        <h1 style={{ fontFamily: 'var(--font-playfair)', color: '#f6f3ee', fontSize: 'clamp(2rem, 5vw, 3.4rem)', fontWeight: 400, lineHeight: 1.18, margin: '0 0 24px' }}>
          Maître Clémentine Chabert<br />
          <em style={{ color: '#b08840', fontStyle: 'italic' }}>Avocate à Toulouse</em>
        </h1>
        <p style={{ fontFamily: 'var(--font-lato)', color: '#d8d0c0', fontSize: '1.05rem', lineHeight: 1.7, margin: '0 0 40px', fontWeight: 300 }}>
          Distribution commerciale · Droit de la concurrence<br />
          Droit de la consommation · Contrats d'affaires
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#contact" style={{ display: 'inline-block', padding: '14px 32px', background: '#b08840', color: '#f6f3ee', fontFamily: 'var(--font-lato)', fontSize: '0.78rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', transition: 'background 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#886830')}
            onMouseLeave={e => (e.currentTarget.style.background = '#b08840')}
          >Prendre contact</a>
          <a href="#domaines" style={{ display: 'inline-block', padding: '14px 32px', border: '1px solid rgba(176,136,64,0.5)', color: '#d8d0c0', fontFamily: 'var(--font-lato)', fontSize: '0.78rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#b08840'; e.currentTarget.style.color = '#b08840' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(176,136,64,0.5)'; e.currentTarget.style.color = '#d8d0c0' }}
          >Domaines d'intervention</a>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <span style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, transparent, rgba(176,136,64,0.6))' }} />
      </div>
    </section>
  )
}
