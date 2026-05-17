import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://ai-for-sdgs-indonesia.vercel.app'

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${base}/dashboard`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${base}/news`, lastModified: new Date(), changeFrequency: 'hourly', priority: 0.8 },
    { url: `${base}/sdgs`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/quiz`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/learn`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
  ]
}
