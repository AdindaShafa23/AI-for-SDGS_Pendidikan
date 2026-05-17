'use client'

import { useState } from 'react'
import { X, Wrench, MapPin, Cpu } from 'lucide-react'
import { SDG } from '@/data/sdgs'

interface SDGCardProps {
  sdg: SDG
  compact?: boolean
}

export default function SDGCard({ sdg, compact = false }: SDGCardProps) {
  const [expanded, setExpanded] = useState(false)

  if (compact) {
    return (
      <button
        onClick={() => setExpanded(true)}
        className={`sdg-${sdg.id} glass rounded-xl p-4 text-left hover:-translate-y-1 transition-all duration-200 hover:shadow-lg group w-full`}
        style={{ '--sdg-hover': sdg.color } as React.CSSProperties}
      >
        <div className="flex items-start gap-3">
          <span className="text-2xl">{sdg.emoji}</span>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span
                className="text-[10px] font-mono font-bold px-2 py-0.5 rounded"
                style={{ background: `${sdg.color}20`, color: sdg.color }}
              >
                SDG {sdg.id}
              </span>
            </div>
            <p className="text-white font-semibold text-sm leading-tight group-hover:text-opacity-80">
              {sdg.title}
            </p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-3">
          <div className="flex justify-between text-xs text-gray-600 mb-1">
            <span>Progress AI</span>
            <span style={{ color: sdg.color }}>{sdg.progress}%</span>
          </div>
          <div className="h-1 bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${sdg.progress}%`, background: sdg.color }}
            />
          </div>
        </div>

        {expanded && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(5,14,29,0.9)', backdropFilter: 'blur(8px)' }}
            onClick={() => setExpanded(false)}
          >
            <SDGDetailModal sdg={sdg} onClose={() => setExpanded(false)} />
          </div>
        )}
      </button>
    )
  }

  return (
    <>
      <button
        onClick={() => setExpanded(true)}
        className="glass rounded-2xl p-6 text-left hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl group w-full relative overflow-hidden"
      >
        {/* Color accent */}
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{ background: sdg.color }}
        />
        <div
          className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-5 blur-xl"
          style={{ background: sdg.color }}
        />

        <div className="flex items-start gap-4 mb-4">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
            style={{ background: `${sdg.color}18`, border: `1px solid ${sdg.color}30` }}
          >
            {sdg.emoji}
          </div>
          <div>
            <span
              className="text-xs font-mono font-bold mb-1 block"
              style={{ color: sdg.color }}
            >
              SDG {sdg.id}
            </span>
            <h3 className="font-display font-bold text-white text-lg leading-tight group-hover:opacity-80 transition-opacity">
              {sdg.title}
            </h3>
          </div>
        </div>

        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
          {sdg.description}
        </p>

        {/* Progress */}
        <div>
          <div className="flex justify-between text-xs mb-1.5">
            <span className="text-gray-600">Progress AI Indonesia</span>
            <span className="font-semibold" style={{ color: sdg.color }}>{sdg.progress}%</span>
          </div>
          <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{ width: `${sdg.progress}%`, background: `linear-gradient(90deg, ${sdg.color}, ${sdg.color}99)` }}
            />
          </div>
        </div>

        <div className="mt-4 flex items-center gap-1.5 text-sm font-medium" style={{ color: sdg.color }}>
          <span>Lihat detail</span>
          <span className="text-xs">→</span>
        </div>
      </button>

      {expanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(5,14,29,0.92)', backdropFilter: 'blur(12px)' }}
          onClick={() => setExpanded(false)}
        >
          <SDGDetailModal sdg={sdg} onClose={() => setExpanded(false)} />
        </div>
      )}
    </>
  )
}

function SDGDetailModal({ sdg, onClose }: { sdg: SDG; onClose: () => void }) {
  return (
    <div
      className="glass rounded-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto p-6 relative"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-white p-1.5 rounded-lg hover:bg-white/5 transition-colors"
      >
        <X size={16} />
      </button>

      {/* Header */}
      <div
        className="flex items-center gap-4 mb-5 pb-5"
        style={{ borderBottom: `1px solid ${sdg.color}20` }}
      >
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
          style={{ background: `${sdg.color}18`, border: `2px solid ${sdg.color}40` }}
        >
          {sdg.emoji}
        </div>
        <div>
          <span className="text-xs font-mono font-bold block mb-1" style={{ color: sdg.color }}>
            SDG {sdg.id} — {sdg.shortTitle}
          </span>
          <h2 className="font-display font-bold text-white text-xl">{sdg.title}</h2>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-5">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-500">Progress AI Indonesia</span>
          <span className="font-bold" style={{ color: sdg.color }}>{sdg.progress}%</span>
        </div>
        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{ width: `${sdg.progress}%`, background: sdg.color }}
          />
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed mb-5">{sdg.description}</p>

      {/* AI Role */}
      <div className="glass-light rounded-xl p-4 mb-4">
        <h4 className="flex items-center gap-2 text-white font-semibold text-sm mb-2">
          <Cpu size={14} className="text-emerald-400" />
          Peran AI
        </h4>
        <p className="text-gray-400 text-sm leading-relaxed">{sdg.aiRole}</p>
      </div>

      {/* Indonesia Case */}
      <div className="glass-light rounded-xl p-4 mb-4">
        <h4 className="flex items-center gap-2 text-white font-semibold text-sm mb-2">
          <MapPin size={14} className="text-cyan-400" />
          Studi Kasus Indonesia
        </h4>
        <p className="text-gray-400 text-sm leading-relaxed">{sdg.indonesiaCase}</p>
      </div>

      {/* Tools */}
      <div>
        <h4 className="flex items-center gap-2 text-white font-semibold text-sm mb-3">
          <Wrench size={14} className="text-purple-400" />
          AI Tools Relevan
        </h4>
        <div className="flex flex-wrap gap-2">
          {sdg.tools.map((tool) => (
            <span
              key={tool}
              className="text-xs px-3 py-1 rounded-full font-medium"
              style={{ background: `${sdg.color}18`, color: sdg.color, border: `1px solid ${sdg.color}30` }}
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
