import Image from 'next/image'
import { ExternalLink, Clock, Tag } from 'lucide-react'
import { NewsItem, formatDate } from '@/services/news'

interface NewsCardProps {
  item: NewsItem
  featured?: boolean
}

const categoryColors: Record<string, string> = {
  Kebijakan: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
  Edukasi: 'bg-red-500/10 text-red-300 border-red-500/20',
  Teknologi: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
  Startup: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
  Lingkungan: 'bg-green-500/10 text-green-300 border-green-500/20',
  Kesehatan: 'bg-pink-500/10 text-pink-300 border-pink-500/20',
  Energi: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/20',
  Bisnis: 'bg-orange-500/10 text-orange-300 border-orange-500/20',
}

export default function NewsCard({ item, featured = false }: NewsCardProps) {
  if (featured) {
    return (
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block glass rounded-2xl overflow-hidden hover:border-emerald-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/5"
      >
        {/* Image */}
        <div className="relative h-52 overflow-hidden bg-gradient-to-br from-emerald-900/30 to-cyan-900/30">
          {item.image ? (
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-70"
              unoptimized
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20">
              🤖
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050e1d] via-transparent to-transparent" />
          {/* Source badge */}
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 rounded-lg bg-black/50 backdrop-blur-sm text-xs text-white font-medium border border-white/10">
              {item.sourceLogo} {item.source}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className={`text-xs px-2 py-0.5 rounded-md border font-medium ${categoryColors[item.category] || 'bg-gray-500/10 text-gray-300 border-gray-500/20'}`}>
              {item.category}
            </span>
            <span className="text-gray-600 text-xs flex items-center gap-1">
              <Clock size={10} />
              {formatDate(item.pubDate)}
            </span>
          </div>
          <h3 className="font-display font-semibold text-white text-lg leading-tight mb-2 group-hover:text-emerald-300 transition-colors line-clamp-2">
            {item.title}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4">
            {item.summary}
          </p>
          <div className="flex items-center gap-1.5 text-emerald-400 text-sm font-medium">
            Baca selengkapnya
            <ExternalLink size={13} />
          </div>
        </div>
      </a>
    )
  }

  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex gap-4 p-4 glass rounded-xl hover:border-emerald-500/20 transition-all duration-200 hover:bg-emerald-500/5"
    >
      {/* Thumbnail */}
      <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br from-slate-800 to-slate-900">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover opacity-70 group-hover:opacity-90 transition-opacity"
            unoptimized
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-2xl">
            📰
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1.5">
          <span className={`text-[10px] px-1.5 py-0.5 rounded border font-medium ${categoryColors[item.category] || 'bg-gray-500/10 text-gray-300 border-gray-500/20'}`}>
            {item.category}
          </span>
          <span className="text-gray-600 text-[10px] flex items-center gap-0.5">
            <Clock size={9} />
            {formatDate(item.pubDate)}
          </span>
        </div>
        <h3 className="font-semibold text-white text-sm leading-snug group-hover:text-emerald-300 transition-colors line-clamp-2 mb-1">
          {item.title}
        </h3>
        <p className="text-gray-600 text-xs">{item.source}</p>
      </div>
    </a>
  )
}
