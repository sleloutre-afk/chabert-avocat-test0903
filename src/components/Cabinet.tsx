export default function Cabinet() {
  return (
    <section id="cabinet" style={{ background: '#f6f3ee', padding: '96px 24px' }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p style={{ fontFamily: 'var(--font-lato)', fontSize: '0.72rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#b08840', marginBottom: '16px' }}>Le Cabinet</p>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: '#1c1f28', fontWeight: 400, lineHeight: 1.22, margin: '0 0 24px' }}>
            Une approche pragmatique<br />au service des entreprises
          </h2>
          <div style={{ width: '40px', height: '2px', background: '#b08840', marginBottom: '28px' }} />
          <p style={{ fontFamily: 'var(--font-lato)', color: '#726a58', lineHeight: 1.8, marginBottom: '20px' }}>
            Maître Clémentine Chabert est avocate inscrite au Barreau de Toulouse depuis 2020. Elle conseille et défend les entreprises dans leurs relations commerciales, qu'il s'agisse de structurer un réseau de distribution, de sécuriser leurs contrats ou de faire face à un litige concurrentiel.
          </p>
          <p style={{ fontFamily: 'var(--font-lato)', color: '#726a58', lineHeight: 1.8, marginBottom: '20px' }}>
            Formée à l'École de Formation du Barreau de Paris et titulaire d'un Master 2 en Droit de la distribution et Contrats d'affaires de l'Université de Montpellier, elle a exercé au sein de cabinets spécialisés à Bordeaux (FORWARD AVOCATS, Fidal) avant de rejoindre Deloitte Société d'Avocats.
          </p>
          <p style={{ fontFamily: 'var(--font-lato)', color: '#726a58', lineHeight: 1.8 }}>
            Dotée d'une expertise sectorielle en agroalimentaire et dans le secteur vitivinicole, elle intervient en français et en anglais juridique auprès d'entreprises françaises et internationales.
          </p>
        </div>

        <div style={{ background: '#ede8df', padding: '48px 40px' }}>
          <p style={{ fontFamily: 'var(--font-lato)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b08840', marginBottom: '24px' }}>Parcours</p>
          {[
            { period: 'Depuis 2024', role: 'Deloitte Société d\'Avocats', detail: 'Balma / Toulouse — Droit des affaires' },
            { period: '2022 – 2024', role: 'FORWARD AVOCATS', detail: 'Bordeaux — Distribution & Concurrence' },
            { period: '2020 – 2022', role: 'Fidal', detail: 'Bordeaux — Droit des affaires' },
            { period: '2019 – 2020', role: 'EFB Paris', detail: 'École de Formation du Barreau' },
            { period: '2018 – 2019', role: 'M2 Distribution & Contrats', detail: 'Université de Montpellier (Mention AB)' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '20px', paddingBottom: '20px', borderBottom: i < 4 ? '1px solid #d8d0c0' : 'none', marginBottom: i < 4 ? '20px' : 0 }}>
              <span style={{ fontFamily: 'var(--font-lato)', fontSize: '0.72rem', color: '#b08840', minWidth: '80px', paddingTop: '2px', letterSpacing: '0.04em' }}>{item.period}</span>
              <div>
                <div style={{ fontFamily: 'var(--font-playfair)', fontSize: '0.95rem', color: '#1c1f28', marginBottom: '2px' }}>{item.role}</div>
                <div style={{ fontFamily: 'var(--font-lato)', fontSize: '0.8rem', color: '#726a58' }}>{item.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
