import Head from 'next/head'
import { getPageBySlug, getAllSlugs } from '../lib/supabase'
import EditorialHeader from '../components/seo/EditorialHeader'
import EditorialFooter from '../components/seo/EditorialFooter'
import Breadcrumb from '../components/seo/Breadcrumb'
import FaqAccordion from '../components/seo/FaqAccordion'
import CtaInline from '../components/seo/CtaInline'
import CtaFinal from '../components/seo/CtaFinal'

export default function SeoPage({ page }) {
  if (!page) {
    return (
      <main className="container" style={{ paddingTop: '4rem' }}>
        <h1>Page introuvable</h1>
        <p>Cette page n'existe pas ou n'est pas encore publiée.</p>
      </main>
    )
  }

  const schemaOrg = {
    '@context': 'https://schema.org',
    '@type': page.schema_type || 'Article',
    headline: page.h1,
    description: page.meta_description,
    url: page.canonical,
  }

  return (
    <>
      <Head>
        <title>{page.meta_title}</title>
        <meta name="description" content={page.meta_description} />
        {page.canonical && <link rel="canonical" href={page.canonical} />}
        {page.og_title && <meta property="og:title" content={page.og_title} />}
        {page.og_description && <meta property="og:description" content={page.og_description} />}
        {page.og_type && <meta property="og:type" content={page.og_type} />}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </Head>

      <EditorialHeader />

      <main style={{ maxWidth: '860px', margin: '0 auto', padding: '48px 24px 80px', background: '#000000', color: '#ffffff', minHeight: '100vh' }}>
        {page.breadcrumb?.length > 0 && <Breadcrumb items={page.breadcrumb} />}

        <h1 style={{ marginTop: '1.5rem' }}>{page.h1}</h1>

        {page.reponse_directe && (
          <div
            style={{
              background: '#f0eeff',
              borderLeft: '4px solid #6c63ff',
              padding: '1rem 1.5rem',
              borderRadius: '0 8px 8px 0',
              margin: '1.5rem 0',
            }}
          >
            <p style={{ margin: 0, fontWeight: 500 }}>{page.reponse_directe}</p>
          </div>
        )}

        {page.intro && <p>{page.intro}</p>}

        <CtaInline />

        {page.h2_sections?.map((section, i) => (
          <section key={i} style={{ marginTop: '2rem' }}>
            <h2>{section.h2}</h2>
            <p>{section.body}</p>
          </section>
        ))}

        {page.faq?.length > 0 && (
          <div style={{ marginTop: '3rem' }}>
            <h2>Questions fréquentes</h2>
            <FaqAccordion items={page.faq} />
          </div>
        )}

        <CtaFinal />
      </main>

      <EditorialFooter />
    </>
  )
}

export async function getStaticPaths() {
  const slugs = await getAllSlugs()
  const paths = slugs.map((slug) => ({ params: { slug } }))
  return { paths, fallback: 'blocking' }
}

export async function getStaticProps({ params }) {
  const page = await getPageBySlug(params.slug)
  if (!page) return { notFound: true }
  return {
    props: { page },
    revalidate: 60,
  }
}
