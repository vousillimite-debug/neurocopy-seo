import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

/**
 * Récupère une page SEO par son slug
 * @param {string} slug
 * @returns {Promise<Object|null>}
 */
export async function getPageBySlug(slug) {
  const { data, error } = await supabase
    .from('pages')
    .select('*')
    .eq('slug', slug)
    .eq('statut', 'publie')
    .single()

  if (error) {
    console.error('Supabase error:', error.message)
    return null
  }
  return data
}

/**
 * Récupère tous les slugs publiés (pour getStaticPaths)
 * @returns {Promise<string[]>}
 */
export async function getAllSlugs() {
  const { data, error } = await supabase
    .from('pages')
    .select('slug')
    .eq('statut', 'publie')

  if (error) {
    console.error('Supabase error:', error.message)
    return []
  }
  return data.map((row) => row.slug)
}
