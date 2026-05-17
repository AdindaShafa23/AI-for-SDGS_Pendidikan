import Link from 'next/link'
import { BookOpen, Play, Clock, Star, ChevronRight, Award, Zap, Brain } from 'lucide-react'

const courses = [
  {
    id: 1,
    title: 'Pengantar AI untuk Pemula',
    description: 'Mulai perjalananmu memahami Kecerdasan Buatan dari nol. Cocok untuk semua kalangan.',
    duration: '45 menit',
    level: 'Pemula',
    levelColor: '#10b981',
    modules: 5,
    rating: 4.9,
    emoji: '🤖',
    topics: ['Apa itu AI?', 'Sejarah AI', 'Machine Learning vs AI', 'AI di kehidupan sehari-hari', 'Etika AI'],
  },
  {
    id: 2,
    title: 'AI dan SDGs: Koneksi Penting',
    description: 'Pelajari bagaimana AI menjadi katalis percepatan pencapaian 17 SDGs di tingkat global dan Indonesia.',
    duration: '60 menit',
    level: 'Menengah',
    levelColor: '#06b6d4',
    modules: 6,
    rating: 4.8,
    emoji: '🌍',
    topics: ['SDGs Overview', 'AI untuk SDG 4 & 3', 'AI untuk SDG 13 & 7', 'Studi Kasus Indonesia', 'Tantangan & Peluang', 'Project Mini'],
  },
  {
    id: 3,
    title: 'Machine Learning untuk Lingkungan',
    description: 'Teknis namun accessible: bagaimana ML digunakan untuk mengatasi tantangan perubahan iklim.',
    duration: '90 menit',
    level: 'Lanjutan',
    levelColor: '#818cf8',
    modules: 8,
    rating: 4.7,
    emoji: '🌿',
    topics: ['Intro ML', 'Dataset Lingkungan', 'Model Prediksi Cuaca', 'Deteksi Deforestasi', 'Carbon Modeling', 'Tools & Libraries', 'Hands-on Colab', 'Presentasi Proyek'],
  },
  {
    id: 4,
    title: 'Prompt Engineering & Generative AI',
    description: 'Kuasai seni berkomunikasi dengan AI. Dari ChatGPT hingga Gemini, maksimalkan potensi AI generatif.',
    duration: '50 menit',
    level: 'Pemula',
    levelColor: '#10b981',
    modules: 5,
    rating: 4.9,
    emoji: '✨',
    topics: ['Apa itu Generative AI?', 'Teknik Prompting', 'Use Cases SDGs', 'Prompt untuk Edukasi', 'Latihan Praktis'],
  },
  {
    id: 5,
    title: 'AI Literacy untuk Pelajar Indonesia',
    description: 'Khusus dirancang untuk pelajar SMA-Mahasiswa yang ingin memulai perjalanan di dunia AI.',
    duration: '75 menit',
    level: 'Pemula',
    levelColor: '#10b981',
    modules: 7,
    rating: 4.8,
    emoji: '📚',
    topics: ['Mindset AI', 'AI Tools Gratis', 'Kompetisi AI Indonesia', 'Beasiswa AI', 'Portfolio AI', 'Komunitas', 'Next Steps'],
  },
  {
    id: 6,
    title: 'Etika AI & Keadilan Algoritma',
    description: 'Sisi kritis AI: bias, privasi, dan bagaimana membangun sistem AI yang adil untuk semua.',
    duration: '55 menit',
    level: 'Menengah',
    levelColor: '#06b6d4',
    modules: 6,
    rating: 4.6,
    emoji: '⚖️',
    topics: ['AI Bias', 'Data Privacy', 'Algorithmic Fairness', 'Regulasi AI Global', 'AI Indonesia & Hukum', 'Studi Kasus Etika'],
  },
]

const learningPaths = [
  {
    title: 'Jalur Pemula',
    desc: 'Mulai dari nol, kuasai dasar AI dalam 3 jam',
    courses: [1, 4, 5],
    color: '#10b981',
    emoji: '🌱',
  },
  {
    title: 'Jalur SDGs',
    desc: 'Fokus pada AI untuk pembangunan berkelanjutan',
    courses: [1, 2, 6],
    color: '#06b6d4',
    emoji: '🌍',
  },
  {
    title: 'Jalur Teknis',
    desc: 'Siap hands-on dengan ML dan data',
    courses: [1, 2, 3],
    color: '#818cf8',
    emoji: '⚡',
  },
]

export default function LearnPage() {
  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-red-400 text-sm font-mono font-semibold tracking-wider uppercase mb-4">
            <BookOpen size={14} />
            Modul Belajar AI
          </div>
          <h1 className="font-display font-black text-5xl text-white mb-4">
            Belajar AI{' '}
            <span className="gradient-text">Gratis</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Kursus mini AI literacy yang dirancang khusus untuk konteks Indonesia dan SDGs.
            Dari pemula hingga lanjutan — semua terbuka, tanpa biaya.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-lg mb-12">
          {[
            { v: '6', label: 'Kursus Tersedia', icon: <BookOpen size={14} />, c: '#10b981' },
            { v: '37', label: 'Total Modul', icon: <Brain size={14} />, c: '#06b6d4' },
            { v: 'Gratis', label: 'Selamanya', icon: <Award size={14} />, c: '#818cf8' },
          ].map((s) => (
            <div key={s.label} className="glass rounded-2xl p-4 text-center">
              <p className="font-display font-bold text-2xl text-white mb-1">{s.v}</p>
              <p className="text-gray-500 text-xs">{s.label}</p>
            </div>
          ))}
        </div>

        {/* ─── LEARNING PATHS ──────────────────────────────── */}
        <div className="mb-14">
          <h2 className="font-display font-bold text-2xl text-white mb-6">Jalur Belajar</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {learningPaths.map((path) => (
              <div
                key={path.title}
                className="glass rounded-2xl p-5 hover:-translate-y-1 transition-transform cursor-pointer group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                  style={{ background: `${path.color}18` }}
                >
                  {path.emoji}
                </div>
                <h3 className="font-semibold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                  {path.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{path.desc}</p>
                <div className="flex items-center gap-1.5 text-xs" style={{ color: path.color }}>
                  {path.courses.length} kursus
                  <ChevronRight size={12} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── COURSES ─────────────────────────────────────── */}
        <h2 className="font-display font-bold text-2xl text-white mb-6">Semua Kursus</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="glass rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 group flex flex-col"
            >
              {/* Card top */}
              <div className="p-6 flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{course.emoji}</div>
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: `${course.levelColor}18`, color: course.levelColor }}
                  >
                    {course.level}
                  </span>
                </div>

                <h3 className="font-display font-bold text-white text-lg mb-2 group-hover:text-emerald-300 transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{course.description}</p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-gray-600 mb-5">
                  <span className="flex items-center gap-1.5">
                    <Clock size={11} />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <BookOpen size={11} />
                    {course.modules} modul
                  </span>
                  <span className="flex items-center gap-1.5 text-yellow-400">
                    <Star size={11} className="fill-yellow-400" />
                    {course.rating}
                  </span>
                </div>

                {/* Topics */}
                <div className="flex flex-wrap gap-1.5">
                  {course.topics.slice(0, 3).map((t) => (
                    <span key={t} className="text-[10px] px-2 py-0.5 glass-light rounded-md text-gray-400">
                      {t}
                    </span>
                  ))}
                  {course.topics.length > 3 && (
                    <span className="text-[10px] px-2 py-0.5 glass-light rounded-md text-gray-600">
                      +{course.topics.length - 3} lagi
                    </span>
                  )}
                </div>
              </div>

              {/* CTA */}
              <div className="px-6 pb-6">
                <button className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/20 text-emerald-400 rounded-xl font-semibold text-sm hover:from-emerald-500/30 hover:to-cyan-500/30 transition-all">
                  <Play size={14} />
                  Mulai Belajar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Coming soon */}
        <div className="mt-12 glass rounded-2xl p-8 text-center">
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="font-display font-bold text-white text-xl mb-2">Lebih banyak kursus segera hadir</h3>
          <p className="text-gray-500 mb-6">
            Kami sedang mengembangkan modul untuk: Computer Vision, NLP Indonesia, AI untuk Hukum, dan AI untuk Pertanian.
          </p>
          <div className="inline-flex items-center gap-2 px-5 py-3 glass rounded-xl text-emerald-400 border border-emerald-500/20 font-medium text-sm">
            <Zap size={14} />
            Kontribusi di GitHub — Open Source!
          </div>
        </div>
      </div>
    </div>
  )
}
