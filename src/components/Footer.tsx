import Link from 'next/link'
import { Cpu, Github, Globe, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-400 flex items-center justify-center">
                <Cpu size={15} className="text-white" />
              </div>
              <div>
                <span className="font-display font-bold text-white text-sm block">AI for SDGs</span>
                <span className="text-[10px] text-emerald-400 font-mono">INDONESIA</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Platform edukasi open source tentang peran AI dalam mendukung SDGs Indonesia.
            </p>
          </div>

          {/* Navigasi */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Navigasi</h4>
            <ul className="space-y-2.5">
              {[
                { href: '/', label: 'Beranda' },
                { href: '/dashboard', label: 'Dashboard' },
                { href: '/news', label: 'Berita AI' },
                { href: '/sdgs', label: 'SDGs Explorer' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-gray-500 hover:text-emerald-400 text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Fitur */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Fitur</h4>
            <ul className="space-y-2.5">
              {[
                { href: '/quiz', label: 'AI SDGs Quiz' },
                { href: '/learn', label: 'Modul Belajar' },
                { href: '/dashboard', label: 'Data & Statistik' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-gray-500 hover:text-emerald-400 text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Referensi */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Referensi</h4>
            <ul className="space-y-2.5">
              {[
                { href: 'https://sdgs.un.org', label: 'UN SDGs' },
                { href: 'https://ai.google/responsibilities/social-good', label: 'Google AI for Good' },
                { href: 'https://ourworldindata.org', label: 'Our World in Data' },
                { href: 'https://github.com', label: 'GitHub Repository' },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-emerald-400 text-sm transition-colors flex items-center gap-1.5"
                  >
                    <Globe size={11} />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © 2024 AI for SDGs Indonesia. Open source — bebas digunakan & dikembangkan.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-gray-600 text-xs flex items-center gap-1">
              Dibuat dengan <Heart size={10} className="text-red-500 fill-red-500" /> untuk Indonesia
            </span>
            <a
              href="https://github.com/ai-for-sdgs-indonesia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <Github size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
