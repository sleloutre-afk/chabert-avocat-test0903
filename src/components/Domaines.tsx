import Image from 'next/image'

const domaines = [
  {
    titre: 'Distribution commerciale',
    texte: 'Structuration et sécurisation des réseaux de distribution — contrats de distribution sélective, exclusive ou franchise, relations fournisseurs-distributeurs, négociations et rédaction des contrats cadres. Expertise sectorielle agroalimentaire et vitivinicole.',
    svg: '/icons/commercial.svg',
  },
  {
    titre: 'Droit de la concurrence',
    texte: 'Conseil et défense en matière de pratiques restrictives de concurrence, ententes, abus de position dominante, contrôle des concentrations. Veille réglementaire et accompagnement lors de procédures devant les autorités de concurrence.',
    svg: '/icons/concurrence.svg',
  },
  {
    titre: 'Droit de la consommation',
    texte: 'Mise en conformité des pratiques commerciales, rédaction et révision des conditions générales de vente, pratiques promotionnelles, publicité comparative, démarchage. Accompagnement lors de contrôles administratifs et litiges consommateurs.',
    svg: '/icons/consommation.svg',
  },
  {
    titre: 'Contrats d\'affaires & IP/IT',
    texte: 'Rédaction et négociation de contrats commerciaux complexes, accords de confidentialité, transferts de technologie. Conseil en propriété intellectuelle et en droit du numérique dans un contexte de transactions commerciales.',
    svg: '/icons/ntic.svg',
  },
]

export default function Domaines() {
  return (
    <section id="domaines" style={{ background: '#ede8df', padding: '96px 24px' }}>
      <div className="max-w-6xl mx-auto">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{ fontFamily: 'var(--font-lato)', fontSize: '0.72rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#b08840', marginBottom: '12px' }}>Domaines d'intervention</p>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: '#1c1f28', fontWeight: 400, margin: 0 }}>
            Expertise au service des entreprises
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {domaines.map((d, i) => (
            <div key={i} style={{ background: '#f6f3ee', padding: '40px 36px', borderTop: '3px solid #b08840' }}>
              <div style={{ marginBottom: '20px' }}>
                <Image src={d.svg} alt="" width={40} height={40} style={{ filter: 'brightness(0) saturate(100%) invert(57%) sepia(37%) saturate(600%) hue-rotate(5deg) brightness(90%)' }} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.2rem', color: '#1c1f28', fontWeight: 400, marginBottom: '16px' }}>{d.titre}</h3>
              <p style={{ fontFamily: 'var(--font-lato)', color: '#726a58', lineHeight: 1.75, margin: 0, fontSize: '0.92rem' }}>{d.texte}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
