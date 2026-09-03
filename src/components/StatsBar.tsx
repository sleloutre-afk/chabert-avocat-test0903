export default function StatsBar() {
  const stats = [
    { value: '2020', label: 'Prestation de serment' },
    { value: '4', label: 'Domaines d\'expertise' },
    { value: 'Toulouse', label: 'Barreau' },
    { value: 'EN', label: 'Juridique bilingue' },
  ]

  return (
    <section style={{ background: '#101218', borderTop: '1px solid rgba(176,136,64,0.2)', borderBottom: '1px solid rgba(176,136,64,0.2)' }}>
      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.8rem', color: '#b08840', marginBottom: '4px', fontVariantNumeric: 'tabular-nums' }}>{s.value}</div>
            <div style={{ fontFamily: 'var(--font-lato)', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#726a58' }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
