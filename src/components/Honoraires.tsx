export default function Honoraires() {
  return (
    <section id="honoraires" style={{ background: '#f6f3ee', padding: '96px 24px' }}>
      <div className="max-w-5xl mx-auto">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{ fontFamily: 'var(--font-lato)', fontSize: '0.72rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#b08840', marginBottom: '12px' }}>Honoraires</p>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: '#1c1f28', fontWeight: 400, margin: '0 0 20px' }}>
            Transparence et clarté
          </h2>
          <p style={{ fontFamily: 'var(--font-lato)', color: '#726a58', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
            Les honoraires sont fixés librement, en concertation avec le client, conformément aux règles du Barreau de Toulouse et à l'article 10 de la loi du 31 décembre 1971.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              titre: 'Taux horaire',
              desc: 'Facturation au temps passé pour les missions de conseil récurrentes, la rédaction de contrats et la gestion de dossiers contentieux.',
            },
            {
              titre: 'Forfait',
              desc: 'Honoraire déterminé en amont pour les prestations bien définies : rédaction d\'un contrat, audit contractuel, avis juridique.',
            },
            {
              titre: 'Abonnement',
              desc: 'Formule adaptée aux entreprises souhaitant un accompagnement juridique régulier avec un interlocuteur dédié.',
            },
          ].map((item, i) => (
            <div key={i} style={{ padding: '36px 28px', background: '#ede8df', borderTop: '2px solid rgba(176,136,64,0.4)' }}>
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.1rem', color: '#1c1f28', fontWeight: 400, marginBottom: '14px' }}>{item.titre}</h3>
              <p style={{ fontFamily: 'var(--font-lato)', color: '#726a58', lineHeight: 1.7, margin: 0, fontSize: '0.9rem' }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ background: '#ede8df', padding: '32px 36px', borderLeft: '3px solid #b08840' }}>
          <p style={{ fontFamily: 'var(--font-lato)', color: '#726a58', lineHeight: 1.75, margin: 0 }}>
            Une convention d'honoraires est systématiquement proposée avant toute mission. Elle précise le mode de calcul, les modalités de facturation et les conditions de règlement. Maître Chabert s'engage à une information transparente sur le coût prévisionnel de chaque intervention.
          </p>
        </div>
      </div>
    </section>
  )
}
