import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function CGV() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#f6f3ee', minHeight: '100vh' }}>
        <div style={{ background: '#1c1f28', padding: '120px 24px 64px' }}>
          <div className="max-w-3xl mx-auto">
            <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: '#f6f3ee', fontWeight: 400, margin: 0 }}>Conditions générales de vente</h1>
          </div>
        </div>

        <div style={{ padding: '64px 24px' }}>
          <div className="max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-lato)', color: '#726a58', lineHeight: 1.8 }}>
            <section style={{ marginBottom: '40px' }}>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.2rem', color: '#1c1f28', fontWeight: 400, marginBottom: '16px' }}>1. Objet</h2>
              <p>Les présentes conditions générales régissent les prestations d'avocat fournies par Maître Clémentine Chabert, avocate inscrite au Barreau de Toulouse (N° 207), dont le cabinet est situé 2, rue Jean Giono, 31130 Balma.</p>
            </section>

            <section style={{ marginBottom: '40px' }}>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.2rem', color: '#1c1f28', fontWeight: 400, marginBottom: '16px' }}>2. Honoraires</h2>
              <p>Les honoraires sont fixés librement en accord avec le client, conformément à l'article 10 de la loi du 31 décembre 1971. Une convention d'honoraires est établie avant tout commencement de mission. Les honoraires peuvent être calculés au temps passé, sous forme de forfait ou d'abonnement selon la nature de la mission.</p>
            </section>

            <section style={{ marginBottom: '40px' }}>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.2rem', color: '#1c1f28', fontWeight: 400, marginBottom: '16px' }}>3. Facturation et paiement</h2>
              <p>Les factures sont payables à réception, sauf délai convenu dans la convention d'honoraires. En cas de retard de paiement, des pénalités sont applicables conformément aux dispositions légales. Maître Chabert se réserve le droit de suspendre toute mission en cas de non-règlement des honoraires échus.</p>
            </section>

            <section style={{ marginBottom: '40px' }}>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.2rem', color: '#1c1f28', fontWeight: 400, marginBottom: '16px' }}>4. Secret professionnel</h2>
              <p>Maître Chabert est soumise au secret professionnel absolu conformément à l'article 66-5 de la loi du 31 décembre 1971. Toutes les informations communiquées dans le cadre de la relation avocat-client sont strictement confidentielles.</p>
            </section>

            <section style={{ marginBottom: '40px' }}>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.2rem', color: '#1c1f28', fontWeight: 400, marginBottom: '16px' }}>5. Responsabilité</h2>
              <p>Maître Chabert est couverte par une assurance responsabilité civile professionnelle conformément aux obligations de la profession. Sa responsabilité ne peut être engagée qu'en cas de faute prouvée dans l'exécution de la mission convenue.</p>
            </section>

            <section style={{ marginBottom: '40px' }}>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.2rem', color: '#1c1f28', fontWeight: 400, marginBottom: '16px' }}>6. Médiation</h2>
              <p>En cas de litige relatif aux honoraires, le client peut saisir le Bâtonnier du Barreau de Toulouse ou le médiateur de la consommation compétent.</p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.2rem', color: '#1c1f28', fontWeight: 400, marginBottom: '16px' }}>7. Droit applicable</h2>
              <p>Les présentes conditions sont soumises au droit français. En cas de litige, et après tentative de résolution amiable, les juridictions compétentes sont celles du ressort du Tribunal judiciaire de Toulouse.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
