import { NextResponse } from 'next/server'

// NOTE: rss-parser is a server-side package
// Install: npm install rss-parser
// This route fetches real RSS feeds from Indonesian news sources

const RSS_SOURCES = [
  {
    url: 'https://rss.detik.com/index.php/detikinet',
    source: 'Detik.com',
    logo: '🔴',
  },
  {
    url: 'https://www.cnnindonesia.com/teknologi/rss',
    source: 'CNN Indonesia',
    logo: '🟡',
  },
]

export async function GET() {
  try {
    // Dynamic import to avoid edge runtime issues
    const Parser = (await import('rss-parser')).default
    const parser = new Parser({
      timeout: 5000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; AI-SDGs-Indonesia/1.0)',
      },
    })

    const results = await Promise.allSettled(
      RSS_SOURCES.map(async ({ url, source, logo }) => {
        const feed = await parser.parseURL(url)
        return feed.items.slice(0, 10).map((item) => ({
          title: item.title || '',
          link: item.link || '',
          pubDate: item.pubDate || new Date().toISOString(),
          summary: item.contentSnippet || item.content || '',
          source,
          sourceLogo: logo,
          category: 'Teknologi',
          image: (item as any).enclosure?.url || (item as any)['media:content']?.$.url || null,
        }))
      })
    )

    const items = results
      .filter((r): r is PromiseFulfilledResult<any[]> => r.status === 'fulfilled')
      .flatMap((r) => r.value)
      .sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime())

    if (items.length === 0) {
      return NextResponse.json(
        { error: 'No items fetched', fallback: true },
        { status: 503 }
      )
    }

    return NextResponse.json(items, {
      headers: {
        'Cache-Control': 's-maxage=3600, stale-while-revalidate=7200',
      },
    })
  } catch (error) {
    console.error('RSS fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch RSS feeds', fallback: true },
      { status: 500 }
    )
  }
}
