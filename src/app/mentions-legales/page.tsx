import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function MentionsLegales() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#f6f3ee', minHeight: '100vh' }}>
        <div style={{ background: '#1c1f28', padding: '120px 24px 64px' }}>
          <div className="max-w-3xl mx-auto">
            <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: '#f6f3ee', fontWeight: 400, margin: 0 }}>Mentions légales</h1>
          </div>
        </div>

        <div style={{ padding: '64px 24px' }}>
          <div className="max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-lato)', color: '#726a58', lineHeight: 1.8 }}>
            <section style={{ marginBottom: '40px' }}>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.2rem', color: '#1c1f28', fontWeight: 400, marginBottom: '16px' }}>Éditeur du site</h2>
              <p>Maître Clémentine Chabert, avocate inscrite au Barreau de Toulouse (N° 207).<br />
              2, rue Jean Giono — 31130 Balma<br />
              Tél. : 06 59 59 80 90<br />
              E-mail : cchabert.avocat@gmail.com</p>
            </section>

            <section style={{ marginBottom: '40px' }}>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.2rem', color: '#1c1f28', fontWeight: 400, marginBottom: '16px' }}>Réglementation professionnelle</h2>
              <p>Maître Clémentine Chabert est avocate au Barreau de Toulouse, soumise aux règles déontologiques de la profession d'avocat définies par la loi du 31 décembre 1971, modifiée, et le Règlement Intérieur National (RIN) de la profession d'avocat.<br />
              Ordre des avocats du Barreau de Toulouse — Place aux Herbes, 31000 Toulouse.</p>
            </section>

            <section style={{ marginBottom: '40px' }}>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.2rem', color: '#1c1f28', fontWeight: 400, marginBottom: '16px' }}>Hébergement</h2>
              <p>Ce site est hébergé par Vercel Inc., 340 Pine Street, Suite 701, San Francisco, California 94104, États-Unis.</p>
            </section>

            <section style={{ marginBottom: '40px' }}>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.2rem', color: '#1c1f28', fontWeight: 400, marginBottom: '16px' }}>Propriété intellectuelle</h2>
              <p>L'ensemble du contenu de ce site (textes, visuels, architecture) est la propriété exclusive de Maître Clémentine Chabert. Toute reproduction, même partielle, est interdite sans autorisation préalable.</p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.2rem', color: '#1c1f28', fontWeight: 400, marginBottom: '16px' }}>Données personnelles</h2>
              <p>Les informations recueillies via ce site sont destinées uniquement à Maître Chabert et ne sont pas transmises à des tiers. Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour l'exercer : cchabert.avocat@gmail.com.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
