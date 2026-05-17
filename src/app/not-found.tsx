import Link from 'next/link'
import { Home, ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="font-display font-black text-9xl text-white/5 mb-4 select-none">404</div>
        <div className="text-5xl mb-6">🌍</div>
        <h1 className="font-display font-bold text-3xl text-white mb-4">
          Halaman Tidak Ditemukan
        </h1>
        <p className="text-gray-500 mb-8 leading-relaxed">
          Sepertinya halaman yang kamu cari belum ada, atau sudah dipindahkan.
          Kembali ke beranda dan jelajahi platform kami.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
          >
            <Home size={16} />
            Kembali ke Beranda
          </Link>
          <Link
            href="/sdgs"
            className="flex items-center justify-center gap-2 px-6 py-3 glass text-white font-medium rounded-xl hover:bg-white/5 transition-colors"
          >
            Jelajahi SDGs <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  )
}
