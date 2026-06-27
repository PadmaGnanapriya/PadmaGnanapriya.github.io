import { profile } from '../data/profile'

export type Article = {
  title: string
  link: string
  pubDate: string
  thumbnail: string
  description: string
  categories: string[]
}

type Rss2JsonResponse = {
  status: string
  feed?: { title?: string; image?: string }
  items?: Array<{
    title: string
    link: string
    pubDate: string
    thumbnail: string
    description: string
    content: string
    categories: string[]
  }>
}

/** Pull the first image out of an HTML string (Medium often omits `thumbnail`). */
function firstImage(html: string): string {
  const match = html.match(/<img[^>]+src="([^">]+)"/i)
  return match ? match[1] : ''
}

/** Strip HTML tags and clamp to a short, clean excerpt. */
function excerpt(html: string, max = 140): string {
  const text = html
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  return text.length > max ? `${text.slice(0, max).trimEnd()}…` : text
}

/**
 * Fetch recent Medium posts via the free rss2json bridge (no API key needed
 * for low volume). Returns [] on any failure so the UI can degrade gracefully.
 *
 * To self-host or raise limits, sign up at https://rss2json.com and append
 * `&api_key=YOUR_KEY` to the URL below.
 */
export async function fetchMediumArticles(limit = 6): Promise<Article[]> {
  const feedUrl = `https://medium.com/feed/@${profile.mediumUsername}`
  const endpoint = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`

  try {
    const res = await fetch(endpoint)
    if (!res.ok) throw new Error(`rss2json responded ${res.status}`)
    const data: Rss2JsonResponse = await res.json()
    if (data.status !== 'ok' || !data.items) throw new Error('Feed unavailable')

    return data.items.slice(0, limit).map((item) => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      thumbnail: item.thumbnail || firstImage(item.content) || '',
      description: excerpt(item.description || item.content || ''),
      categories: item.categories ?? [],
    }))
  } catch (err) {
    console.warn('[medium] Could not load articles:', err)
    return []
  }
}
