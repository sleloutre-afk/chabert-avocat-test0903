export default function Cabinet() {
  return (
    <section id="cabinet" style={{ background: '#f6f3ee', padding: '96px 24px' }}>
      <div className="max-w-6xl mx-auto">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="cabinet-grid">

          {/* Photo */}
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-1.5rem', left: '-1.5rem', right: '1.5rem', bottom: '1.5rem', border: '1px solid rgba(176,136,64,0.22)' }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/chabert.png"
              alt="Maître Clémentine Chabert — Avocate au Barreau de Toulouse"
              style={{ width: '100%', height: '520px', objectFit: 'cover', objectPosition: 'center top', display: 'block', position: 'relative' }}
            />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '35%', background: 'linear-gradient(to top, rgba(28,31,40,0.50), transparent)' }} />
          </div>

          {/* Bio */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '32px', height: '1px', background: '#b08840' }} />
              <span style={{ fontFamily: 'var(--font-lato)', color: '#b08840', fontSize: '0.62rem', letterSpacing: '0.28em', textTransform: 'uppercase' }}>Le cabinet</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 400, color: '#1c1f28', lineHeight: 1.2, marginBottom: '1.5rem' }}>
              Maître Clémentine<br /><em style={{ color: '#b08840' }}>Chabert</em>
            </h2>

            <p style={{ fontFamily: 'var(--font-lato)', color: 'rgba(28,31,40,0.65)', fontSize: '0.88rem', lineHeight: 1.85, marginBottom: '1rem' }}>
              Maître Clémentine Chabert est avocate inscrite au <strong style={{ color: '#1c1f28' }}>Barreau de Toulouse depuis 2020</strong>. Titulaire d'un Master 2 en Droit de la distribution et Contrats d'affaires de l'Université de Montpellier (mention assez bien) et d'un CES Droit économique, elle a complété sa formation par le CAPA à l'EFB Paris en 2019-2020.
            </p>

            <p style={{ fontFamily: 'var(--font-lato)', color: 'rgba(28,31,40,0.65)', fontSize: '0.88rem', lineHeight: 1.85, marginBottom: '1rem' }}>
              Elle a exercé successivement au sein de <strong style={{ color: '#1c1f28' }}>Fidal</strong> à Bordeaux (2020-2022), puis de <strong style={{ color: '#1c1f28' }}>FORWARD AVOCATS</strong> (2022-2024), cabinet dédié au droit de la distribution et de la concurrence, avant de rejoindre <strong style={{ color: '#1c1f28' }}>Deloitte Société d'Avocats</strong> à Balma depuis 2024.
            </p>

            <p style={{ fontFamily: 'var(--font-lato)', color: 'rgba(28,31,40,0.65)', fontSize: '0.88rem', lineHeight: 1.85, marginBottom: '2rem' }}>
              Dotée d'une expertise sectorielle en <strong style={{ color: '#1c1f28' }}>agroalimentaire et vitivinicole</strong>, elle intervient en français et en anglais juridique auprès d'entreprises françaises et internationales dans leurs problématiques de distribution, de concurrence et de contrats d'affaires.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', paddingLeft: '1rem', borderLeft: '2px solid rgba(176,136,64,0.30)' }}>
              {[
                'M2 Droit de la distribution & Contrats d\'affaires — Montpellier (mention AB)',
                'CES Droit économique — M1 Droit de l\'Entreprise',
                'CAPA — EFB Paris (2020)',
                'Barreau de Toulouse — N° 207 — Serment 2020',
                'Anglais juridique maîtrisé',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#b08840', flexShrink: 0, marginTop: '0.45rem' }} />
                  <span style={{ fontFamily: 'var(--font-lato)', color: 'rgba(28,31,40,0.60)', fontSize: '0.80rem', lineHeight: 1.60 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
