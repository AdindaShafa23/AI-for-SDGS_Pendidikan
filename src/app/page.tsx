import Link from 'next/link'
import { ArrowRight, Cpu, TrendingUp, Globe, BookOpen, BarChart2, Rss, Zap, ChevronRight } from 'lucide-react'
import { featuredSDGs } from '@/data/sdgs'
import { keyStats, sectorData } from '@/data/stats'
import { staticNews } from '@/services/news'
import NewsCard from '@/components/NewsCard'
import SDGCard from '@/components/SDGCard'

export default function HomePage() {
  const featuredNews = staticNews.slice(0, 3)

  return (
    <div className="pt-20">
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-24 overflow-hidden">
        {/* Decorative rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] rounded-full border border-emerald-500/5 animate-pulse-slow" />
          <div className="absolute w-[700px] h-[700px] rounded-full border border-cyan-500/3" />
          <div className="absolute w-[900px] h-[900px] rounded-full border border-white/2" />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-emerald-400 border border-emerald-500/20 mb-8 font-medium animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Platform Edukasi AI Terbuka — Open Source
        </div>

        {/* Headline */}
        <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl text-white mb-6 leading-tight max-w-4xl animate-slide-up">
          Kecerdasan Buatan{' '}
          <span className="gradient-text">untuk Indonesia</span>{' '}
          yang Berkelanjutan
        </h1>

        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed" style={{ animationDelay: '0.2s' }}>
          Pelajari bagaimana AI mendukung 17 Tujuan Pembangunan Berkelanjutan (SDGs) di Indonesia.
          Dashboard interaktif, berita terkini, quiz, dan modul edukasi — gratis untuk semua.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-lg shadow-emerald-500/20"
          >
            <BarChart2 size={18} />
            Lihat Dashboard
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/sdgs"
            className="flex items-center gap-2 px-8 py-4 glass text-white font-semibold rounded-2xl hover:bg-white/5 hover:-translate-y-0.5 transition-all"
          >
            <Globe size={18} />
            Jelajahi 17 SDGs
          </Link>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl w-full">
          {keyStats.map((stat) => (
            <div key={stat.label} className="glass rounded-2xl p-4 text-center hover:-translate-y-1 transition-transform">
              <p className="font-display font-bold text-2xl text-white mb-1">{stat.value}</p>
              <p className="text-gray-500 text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── WHAT IS AI for SDGs ───────────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-emerald-400 text-sm font-mono font-semibold tracking-wider uppercase mb-4 block">
                ✦ Tentang Platform
              </span>
              <h2 className="font-display font-bold text-4xl text-white mb-6 leading-tight">
                Mengapa AI Penting untuk SDGs Indonesia?
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Indonesia adalah salah satu negara dengan pertumbuhan ekosistem AI tercepat di Asia Tenggara.
                Dengan lebih dari 521 startup AI aktif dan investasi USD 318 juta di 2024, teknologi AI
                menjadi kunci akselerasi pencapaian SDGs.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Platform ini hadir untuk mengedukasi masyarakat Indonesia — dari pelajar hingga pembuat kebijakan —
                tentang bagaimana AI dapat dimanfaatkan secara etis dan inklusif untuk masa depan yang berkelanjutan.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Open Source', 'Tanpa Login', 'Data Real', 'Bahasa Indonesia'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 glass rounded-lg text-xs text-emerald-400 border border-emerald-500/20 font-medium">
                    ✓ {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <BarChart2 size={20} />, title: 'Dashboard Interaktif', desc: 'Visualisasi data AI & SDGs Indonesia secara real-time', color: '#10b981' },
                { icon: <Rss size={20} />, title: 'Berita Terkini', desc: 'Agregasi berita AI Indonesia dari media terpercaya', color: '#06b6d4' },
                { icon: <Globe size={20} />, title: 'SDGs Explorer', desc: 'Jelajahi 17 SDGs dan penerapan AI di Indonesia', color: '#818cf8' },
                { icon: <BookOpen size={20} />, title: 'Modul Edukasi', desc: 'Kursus mini AI literacy gratis untuk semua', color: '#fbbf24' },
              ].map((f) => (
                <div key={f.title} className="glass rounded-2xl p-5 hover:-translate-y-1 transition-transform">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: `${f.color}18`, color: f.color }}
                  >
                    {f.icon}
                  </div>
                  <h4 className="font-semibold text-white text-sm mb-1">{f.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURED SDGs ─────────────────────────────────────────────── */}
      <section className="py-24 px-4 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-cyan-400 text-sm font-mono font-semibold tracking-wider uppercase mb-4 block">
              ✦ SDGs Explorer
            </span>
            <h2 className="font-display font-bold text-4xl text-white mb-4">
              AI & Tujuan Pembangunan Berkelanjutan
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Klik kartu SDG untuk melihat penerapan AI, studi kasus Indonesia, dan tools relevan.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {featuredSDGs.map((sdg) => (
              <SDGCard key={sdg.id} sdg={sdg} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/sdgs"
              className="inline-flex items-center gap-2 px-6 py-3 glass rounded-xl text-white hover:bg-white/5 transition-all font-medium"
            >
              Lihat semua 17 SDGs
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── AI SECTOR BREAKDOWN ───────────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-purple-400 text-sm font-mono font-semibold tracking-wider uppercase mb-4 block">
              ✦ Ekosistem AI Indonesia
            </span>
            <h2 className="font-display font-bold text-4xl text-white mb-4">
              Distribusi Startup AI per Sektor
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sectorData.map((sector) => (
              <div key={sector.sector} className="glass rounded-2xl p-5 flex items-center gap-4 hover:-translate-y-1 transition-transform">
                <div
                  className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center font-display font-bold text-xl"
                  style={{ background: `${sector.color}18`, color: sector.color }}
                >
                  {sector.value}%
                </div>
                <div>
                  <p className="text-white font-semibold">{sector.sector}</p>
                  <div className="mt-1.5 h-1.5 w-32 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${sector.value * 2.9}%`, background: sector.color }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LATEST NEWS ───────────────────────────────────────────────── */}
      <section className="py-24 px-4 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-orange-400 text-sm font-mono font-semibold tracking-wider uppercase mb-4 block">
                ✦ Berita AI Indonesia
              </span>
              <h2 className="font-display font-bold text-4xl text-white">
                Terkini dari Detik, Kompas & CNN
              </h2>
            </div>
            <Link
              href="/news"
              className="hidden sm:flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium text-sm transition-colors"
            >
              Semua berita <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredNews.map((item, i) => (
              <NewsCard key={i} item={item} featured />
            ))}
          </div>

          <div className="sm:hidden text-center">
            <Link href="/news" className="inline-flex items-center gap-2 text-emerald-400 font-medium">
              Lihat semua berita <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA QUIZ ───────────────────────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="glass rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5 pointer-events-none" />
            <div className="relative">
              <div className="text-5xl mb-6">🎯</div>
              <h2 className="font-display font-bold text-4xl text-white mb-4">
                SDGs mana yang cocok untukmu?
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Ikuti quiz interaktif kami dan temukan SDG serta AI tools yang paling relevan
                dengan minat dan passionmu dalam 3 menit.
              </p>
              <Link
                href="/quiz"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-2xl hover:opacity-90 transition-opacity shadow-lg shadow-emerald-500/20"
              >
                <Zap size={18} />
                Mulai Quiz Sekarang
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
