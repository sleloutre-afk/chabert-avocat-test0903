export default function Contact() {
  return (
    <section id="contact" style={{ background: '#f6f3ee', padding: '96px 24px' }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-0" style={{ overflow: 'hidden' }}>
        {/* Infos */}
        <div style={{ background: '#1c1f28', padding: '64px 56px' }}>
          <p style={{ fontFamily: 'var(--font-lato)', fontSize: '0.72rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#b08840', marginBottom: '16px' }}>Contact</p>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', color: '#f6f3ee', fontWeight: 400, lineHeight: 1.25, margin: '0 0 32px' }}>
            Prendre rendez-vous
          </h2>
          <div style={{ width: '32px', height: '2px', background: '#b08840', marginBottom: '36px' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <p style={{ fontFamily: 'var(--font-lato)', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#726a58', marginBottom: '6px' }}>Adresse</p>
              <p style={{ fontFamily: 'var(--font-lato)', color: '#d8d0c0', lineHeight: 1.6, margin: 0 }}>
                2, rue Jean Giono<br />31130 Balma (Toulouse)
              </p>
            </div>
            <div>
              <p style={{ fontFamily: 'var(--font-lato)', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#726a58', marginBottom: '6px' }}>Téléphone</p>
              <a href="tel:+33659598090" style={{ fontFamily: 'var(--font-lato)', color: '#d8d0c0', textDecoration: 'none', letterSpacing: '0.04em' }}>
                06 59 59 80 90
              </a>
            </div>
            <div>
              <p style={{ fontFamily: 'var(--font-lato)', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#726a58', marginBottom: '6px' }}>E-mail</p>
              <a href="mailto:cchabert.avocat@gmail.com" style={{ fontFamily: 'var(--font-lato)', color: '#d8d0c0', textDecoration: 'none' }}>
                cchabert.avocat@gmail.com
              </a>
            </div>
            <div>
              <p style={{ fontFamily: 'var(--font-lato)', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#726a58', marginBottom: '6px' }}>Barreau</p>
              <p style={{ fontFamily: 'var(--font-lato)', color: '#d8d0c0', margin: 0 }}>
                Barreau de Toulouse · N° 207<br />
                Serment 2020
              </p>
            </div>
          </div>
        </div>

        {/* Image bureau */}
        <div style={{ position: 'relative', minHeight: '400px', overflow: 'hidden' }}>
          <img
            src="/office.png"
            alt="Cabinet Chabert Avocat"
            style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(28,31,40,0.25)' }} />
        </div>
      </div>
    </section>
  )
}
