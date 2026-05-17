import { Cpu, TrendingUp, Users, Globe, Activity, Zap, BarChart2 } from 'lucide-react'
import DashboardCard from '@/components/DashboardCard'
import { AIAdoptionChart, SectorPieChart, SDGsProgressChart, AIImpactChart, EducationGrowthChart } from '@/components/Charts'
import { keyStats } from '@/data/stats'

const iconMap = [<Cpu key="cpu" size={18} />, <TrendingUp key="ti" size={18} />, <Users key="u" size={18} />, <Globe key="g" size={18} />]

export default function DashboardPage() {
  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-emerald-400 text-sm font-mono font-semibold tracking-wider uppercase mb-4">
            <Activity size={14} />
            Dashboard Analitik
          </div>
          <h1 className="font-display font-black text-5xl text-white mb-3">
            AI Indonesia{' '}
            <span className="gradient-text">dalam Angka</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Visualisasi data ekosistem AI Indonesia dan progres pencapaian SDGs berbasis kecerdasan buatan.
          </p>
        </div>

        {/* ─── KEY STATS ─────────────────────────────────── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {keyStats.map((stat, i) => (
            <DashboardCard
              key={stat.label}
              {...stat}
              trend={stat.trend as 'up' | 'down'}
              icon={iconMap[i]}
            />
          ))}
        </div>

        {/* ─── CHARTS ROW 1 ──────────────────────────────── */}
        <div className="grid lg:grid-cols-5 gap-6 mb-6">
          {/* Adoption Chart — wider */}
          <div className="lg:col-span-3 glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-display font-semibold text-white text-lg">Pertumbuhan Adopsi AI</h3>
                <p className="text-gray-600 text-sm">Adopsi & jumlah startup 2019–2024</p>
              </div>
              <div className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
                +34% YoY
              </div>
            </div>
            <AIAdoptionChart />
          </div>

          {/* Sector Pie */}
          <div className="lg:col-span-2 glass rounded-2xl p-6">
            <div className="mb-6">
              <h3 className="font-display font-semibold text-white text-lg">Distribusi Sektor AI</h3>
              <p className="text-gray-600 text-sm">Startup per vertikal industri</p>
            </div>
            <SectorPieChart />
          </div>
        </div>

        {/* ─── CHARTS ROW 2 ──────────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {/* SDGs Progress */}
          <div className="glass rounded-2xl p-6">
            <div className="mb-6">
              <h3 className="font-display font-semibold text-white text-lg">Progress SDGs Berbasis AI</h3>
              <p className="text-gray-600 text-sm">Kontribusi AI per tujuan SDGs prioritas</p>
            </div>
            <SDGsProgressChart />
          </div>

          {/* AI Impact Prediction */}
          <div className="glass rounded-2xl p-6">
            <div className="mb-6">
              <h3 className="font-display font-semibold text-white text-lg">Proyeksi Dampak AI 2024–2030</h3>
              <p className="text-gray-600 text-sm">GDP, lapangan kerja, dan pengurangan karbon</p>
            </div>
            <AIImpactChart />
          </div>
        </div>

        {/* ─── EDUCATION GROWTH ──────────────────────────── */}
        <div className="glass rounded-2xl p-6 mb-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-display font-semibold text-white text-lg">Pertumbuhan Pelajar AI</h3>
              <p className="text-gray-600 text-sm">Total pelajar AI literacy di Indonesia (2024)</p>
            </div>
            <div className="flex items-center gap-2 text-purple-400 text-sm font-semibold">
              <BarChart2 size={14} />
              49.200+ pelajar aktif
            </div>
          </div>
          <EducationGrowthChart />
        </div>

        {/* ─── SDGs Progress Cards ───────────────────────── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { sdg: 'SDG 4', label: 'Pendidikan Berkualitas', progress: 79, color: '#c5192d', detail: 'Ruangguru, Zenius, Prakerja digital' },
            { sdg: 'SDG 3', label: 'Kehidupan Sehat', progress: 71, color: '#4c9f38', detail: 'Halodoc AI, Prixa, KlikDokter' },
            { sdg: 'SDG 8', label: 'Pekerjaan Layak', progress: 73, color: '#a21942', detail: 'Glints, Kalibrr, GoTo UMKM AI' },
            { sdg: 'SDG 11', label: 'Kota Berkelanjutan', progress: 58, color: '#fd9d24', detail: 'Bandung Smart City, Jakarta Flood AI' },
            { sdg: 'SDG 13', label: 'Penanganan Iklim', progress: 52, color: '#3f7e44', detail: 'KLHK Deforestation AI, Fairatmos' },
            { sdg: 'SDG 7', label: 'Energi Bersih', progress: 61, color: '#fcc30b', detail: 'PLN Predictive AI, Xurya Solar' },
          ].map((item) => (
            <div key={item.sdg} className="glass rounded-2xl p-5 hover:-translate-y-1 transition-transform">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold px-2 py-1 rounded" style={{ background: `${item.color}18`, color: item.color }}>
                  {item.sdg}
                </span>
                <span className="text-white font-bold text-lg">{item.progress}%</span>
              </div>
              <h4 className="font-semibold text-white mb-1">{item.label}</h4>
              <p className="text-gray-600 text-xs mb-3">{item.detail}</p>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all"
                  style={{ width: `${item.progress}%`, background: item.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
