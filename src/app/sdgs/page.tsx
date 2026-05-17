'use client'

import { useState } from 'react'
import { Globe, Search } from 'lucide-react'
import SDGCard from '@/components/SDGCard'
import { sdgsData } from '@/data/sdgs'

export default function SDGsPage() {
  const [search, setSearch] = useState('')

  const filtered = sdgsData.filter(
    (s) =>
      !search ||
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.shortTitle.toLowerCase().includes(search.toLowerCase()) ||
      s.description.toLowerCase().includes(search.toLowerCase())
  )

  const avgProgress = Math.round(sdgsData.reduce((sum, s) => sum + s.progress, 0) / sdgsData.length)

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="flex items-center justify-center gap-2 text-cyan-400 text-sm font-mono font-semibold tracking-wider uppercase mb-4">
            <Globe size={14} />
            SDGs Explorer
          </div>
          <h1 className="font-display font-black text-5xl text-white mb-4">
            17 Tujuan{' '}
            <span className="gradient-text">Pembangunan Berkelanjutan</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Klik setiap kartu untuk melihat bagaimana AI diterapkan untuk mendukung setiap SDG di Indonesia.
          </p>

          {/* Overall progress */}
          <div className="inline-flex items-center gap-4 glass rounded-2xl px-6 py-4 mb-8">
            <div className="text-center">
              <p className="font-display font-bold text-3xl text-white">{avgProgress}%</p>
              <p className="text-gray-500 text-xs">Rata-rata Progress AI</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <p className="font-display font-bold text-3xl text-white">17</p>
              <p className="text-gray-500 text-xs">SDGs Dipantau</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <p className="font-display font-bold text-3xl text-emerald-400">521+</p>
              <p className="text-gray-500 text-xs">Startup AI Aktif</p>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="relative max-w-md mx-auto mb-10">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Cari SDG atau topik..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full glass rounded-xl px-4 py-3 pl-10 text-white placeholder-gray-600 text-sm outline-none focus:border-emerald-500/30 transition-colors"
          />
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((sdg) => (
              <SDGCard key={sdg.id} sdg={sdg} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">🌍</div>
            <p className="text-gray-500">Tidak ada SDG yang cocok.</p>
            <button onClick={() => setSearch('')} className="mt-4 text-cyan-400 text-sm hover:underline">
              Reset pencarian
            </button>
          </div>
        )}

        {/* SDG color legend */}
        <div className="mt-16 glass rounded-2xl p-6">
          <h3 className="font-semibold text-white mb-4">Legenda Warna Resmi SDGs (UN)</h3>
          <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-9 gap-2">
            {sdgsData.map((s) => (
              <div key={s.id} className="text-center">
                <div className="w-8 h-8 rounded-lg mx-auto mb-1" style={{ background: s.color }} />
                <p className="text-gray-600 text-[10px]">SDG {s.id}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
