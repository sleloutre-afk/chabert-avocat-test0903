export default function Citation() {
  return (
    <section style={{ background: '#1c1f28', padding: '80px 24px' }}>
      <div className="max-w-3xl mx-auto" style={{ textAlign: 'center' }}>
        <div style={{ width: '1px', height: '48px', background: 'linear-gradient(to bottom, transparent, rgba(176,136,64,0.6))', margin: '0 auto 32px' }} />
        <blockquote style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.2rem, 2.5vw, 1.65rem)', color: '#f6f3ee', fontWeight: 400, fontStyle: 'italic', lineHeight: 1.5, margin: '0 0 28px' }}>
          « Le droit commercial n'est pas une contrainte — c'est un levier de compétitivité que chaque entreprise devrait maîtriser. »
        </blockquote>
        <cite style={{ fontFamily: 'var(--font-lato)', fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#b08840', fontStyle: 'normal' }}>
          Maître Clémentine Chabert — Avocate au Barreau de Toulouse
        </cite>
        <div style={{ width: '1px', height: '48px', background: 'linear-gradient(to top, transparent, rgba(176,136,64,0.6))', margin: '32px auto 0' }} />
      </div>
    </section>
  )
}
