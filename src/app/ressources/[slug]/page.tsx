import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getArticle, getArticles } from '@/lib/articles'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export async function generateStaticParams() {
  return getArticles().map(a => ({ slug: a.slug }))
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  return (
    <>
      <Navbar />
      <main style={{ background: '#f6f3ee', minHeight: '100vh' }}>
        <div style={{ background: '#1c1f28', padding: '120px 24px 64px' }}>
          <div className="max-w-3xl mx-auto">
            <Link href="/ressources" style={{ fontFamily: 'var(--font-lato)', fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#b08840', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '24px' }}>
              ← Retour aux ressources
            </Link>
            <p style={{ fontFamily: 'var(--font-lato)', fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#b08840', marginBottom: '16px' }}>{article.categorie}</p>
            <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: '#f6f3ee', fontWeight: 400, lineHeight: 1.28, margin: '0 0 20px' }}>{article.titre}</h1>
            <p style={{ fontFamily: 'var(--font-lato)', fontSize: '0.8rem', color: '#726a58', margin: 0 }}>
              {new Date(article.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })} · Cabinet Chabert Avocat
            </p>
          </div>
        </div>

        <div style={{ padding: '64px 24px' }}>
          <div className="max-w-3xl mx-auto">
            <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.1rem', color: '#1c1f28', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '40px', paddingBottom: '40px', borderBottom: '1px solid #d8d0c0' }}>
              {article.resume}
            </p>
            <div
              className="article-body"
              style={{ fontFamily: 'var(--font-lato)', color: '#726a58', lineHeight: 1.85, fontSize: '1rem' }}
              dangerouslySetInnerHTML={{ __html: article.contenu }}
            />

            <div style={{ marginTop: '56px', paddingTop: '40px', borderTop: '1px solid #d8d0c0', background: '#ede8df', padding: '36px', marginLeft: '-0px' }}>
              <p style={{ fontFamily: 'var(--font-lato)', fontSize: '0.8rem', color: '#726a58', lineHeight: 1.7, margin: '0 0 16px' }}>
                Cet article est fourni à titre informatif et ne constitue pas un conseil juridique. Pour toute situation spécifique, consultez un avocat.
              </p>
              <Link href="#contact" style={{ fontFamily: 'var(--font-lato)', fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#b08840', textDecoration: 'none', borderBottom: '1px solid rgba(176,136,64,0.4)', paddingBottom: '2px' }}>
                Prendre contact avec Maître Chabert →
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
