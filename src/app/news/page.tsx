'use client'

import { useState } from 'react'
import { Search, Rss, ExternalLink } from 'lucide-react'
import NewsCard from '@/components/NewsCard'
import { staticNews, newsCategories } from '@/services/news'

export default function NewsPage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Semua')
  const [featured, ...rest] = staticNews

  const filtered = staticNews.filter((n) => {
    const matchCat = category === 'Semua' || n.category === category
    const matchSearch =
      !search ||
      n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.summary.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-orange-400 text-sm font-mono font-semibold tracking-wider uppercase mb-4">
            <Rss size={14} />
            Berita AI Indonesia
          </div>
          <h1 className="font-display font-black text-5xl text-white mb-3">
            AI Indonesia{' '}
            <span className="gradient-text">Hari Ini</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Kumpulan berita dan artikel terbaru seputar AI dari Detik.com, Kompas.com, dan CNN Indonesia.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Cari berita AI..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full glass rounded-xl px-4 py-3 pl-10 text-white placeholder-gray-600 text-sm outline-none focus:border-emerald-500/30 transition-colors"
            />
          </div>

          {/* Category filter */}
          <div className="flex gap-2 flex-wrap">
            {newsCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                  category === cat
                    ? 'bg-emerald-500 text-white'
                    : 'glass text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Source badges */}
        <div className="flex flex-wrap gap-3 mb-10">
          {[
            { name: 'Detik.com', url: 'https://rss.detik.com/index.php/detikinet', logo: '🔴' },
            { name: 'Kompas.com', url: 'https://rss.kompas.com/do/feed', logo: '🔵' },
            { name: 'CNN Indonesia', url: 'https://cnnindonesia.com/teknologi/rss', logo: '🟡' },
          ].map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 glass rounded-lg text-xs text-gray-400 hover:text-emerald-400 transition-colors"
            >
              {s.logo} {s.name}
              <Rss size={10} />
            </a>
          ))}
          <span className="flex items-center gap-1.5 px-3 py-2 text-xs text-gray-600">
            RSS Feed — diperbarui otomatis
          </span>
        </div>

        {/* Featured story */}
        {category === 'Semua' && !search && (
          <div className="mb-10">
            <p className="text-xs text-gray-600 font-semibold uppercase tracking-wider mb-4">📌 Berita Pilihan</p>
            <NewsCard item={featured} featured />
          </div>
        )}

        {/* News grid */}
        {filtered.length > 0 ? (
          <>
            <p className="text-xs text-gray-600 font-semibold uppercase tracking-wider mb-4">
              {category === 'Semua' && !search ? '📰 Berita Terbaru' : `🔎 ${filtered.length} hasil ditemukan`}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.slice(category === 'Semua' && !search ? 1 : 0).map((item, i) => (
                <NewsCard key={i} item={item} featured />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-gray-500">Tidak ada berita yang cocok dengan pencarianmu.</p>
            <button
              onClick={() => { setSearch(''); setCategory('Semua') }}
              className="mt-4 text-emerald-400 text-sm hover:underline"
            >
              Reset filter
            </button>
          </div>
        )}

        {/* RSS Info */}
        <div className="mt-16 glass rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0">
            <Rss size={18} className="text-orange-400" />
          </div>
          <div>
            <h4 className="font-semibold text-white mb-1">Tentang Sumber Berita</h4>
            <p className="text-gray-500 text-sm">
              Berita diambil via RSS feed resmi dari Detik.com, Kompas.com, dan CNN Indonesia.
              Untuk produksi, implementasi API Route Next.js dengan rss-parser untuk fetch otomatis setiap jam.
            </p>
          </div>
          <a
            href="https://rss.detik.com/index.php/detikinet"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto flex items-center gap-1.5 text-orange-400 text-sm whitespace-nowrap font-medium hover:underline"
          >
            RSS Detik <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </div>
  )
}
