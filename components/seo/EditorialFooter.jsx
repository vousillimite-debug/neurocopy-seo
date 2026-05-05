export default function EditorialFooter() {
  const year = new Date().getFullYear()
  return (
    <footer
      style={{
        background: '#1a1a2e',
        color: '#a29bfe',
        padding: '2rem 0',
        marginTop: '4rem',
        fontSize: '0.85rem',
      }}
    >
      <div className="container" style={{ textAlign: 'center' }}>
        <p>© {year} NeuroCopy SEO — Tous droits réservés.</p>
        <p style={{ marginTop: '0.5rem', color: '#6c757d' }}>
          Contenu généré par IA, optimisé pour le référencement naturel.
        </p>
      </div>
    </footer>
  )
}
