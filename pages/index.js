import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>NeuroCopy SEO — Contenu IA optimisé pour le référencement</title>
        <meta name="description" content="NeuroCopy génère du contenu SEO de haute qualité grâce à l'intelligence artificielle." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <h1>NeuroCopy SEO</h1>
        <p className="text-muted" style={{ fontSize: '1.2rem', marginTop: '0.5rem' }}>
          Contenu IA optimisé pour le référencement naturel.
        </p>

        <div style={{ marginTop: '3rem' }}>
          <h2>Pages disponibles</h2>
          <p>
            Les pages SEO sont générées dynamiquement depuis Supabase.{' '}
            <Link href="/test-page">Voir la page de test →</Link>
          </p>
        </div>
      </main>
    </>
  )
}
