export interface NewsItem {
  title: string
  link: string
  pubDate: string
  summary: string
  source: string
  sourceLogo: string
  category: string
  image?: string
}

// Fallback static news when RSS is unavailable
export const staticNews: NewsItem[] = [
  {
    title: 'Indonesia Luncurkan Strategi Nasional AI 2024-2030 untuk Percepat SDGs',
    link: 'https://detik.com',
    pubDate: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    summary: 'Pemerintah Indonesia resmi meluncurkan Strategi Nasional Kecerdasan Buatan 2024-2030 yang berfokus pada penerapan AI untuk mendukung 17 tujuan SDGs. Roadmap ini mencakup investasi infrastruktur AI, pengembangan SDM digital, dan regulasi etika AI.',
    source: 'Detik.com',
    sourceLogo: '🔴',
    category: 'Kebijakan',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
  },
  {
    title: 'Ruangguru Kembangkan AI Tutor Berbahasa Daerah untuk 3T',
    link: 'https://kompas.com',
    pubDate: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    summary: 'Startup edtech unicorn Ruangguru mengumumkan pengembangan AI tutor yang mampu berkomunikasi dalam 12 bahasa daerah Indonesia, menyasar siswa di daerah 3T (Terdepan, Terluar, Tertinggal). Teknologi NLP ini diharapkan meningkatkan akses pendidikan berkualitas.',
    source: 'Kompas.com',
    sourceLogo: '🔵',
    category: 'Edukasi',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
  },
  {
    title: 'AI Deteksi Deforestasi Kalimantan Real-Time, Akurasi 94%',
    link: 'https://cnnindonesia.com',
    pubDate: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
    summary: 'Kementerian Lingkungan Hidup bersama LAPAN berhasil mengembangkan sistem AI berbasis citra satelit yang mampu mendeteksi deforestasi di Kalimantan secara real-time dengan akurasi 94%. Sistem ini mendukung target NDC Indonesia dalam pengurangan emisi karbon.',
    source: 'CNN Indonesia',
    sourceLogo: '🟡',
    category: 'Lingkungan',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80',
  },
  {
    title: 'Nodeflux Raih Pendanaan $20 Juta untuk Ekspansi Computer Vision ASEAN',
    link: 'https://detik.com',
    pubDate: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
    summary: 'Startup AI vision Indonesia, Nodeflux, berhasil meraih pendanaan Series B sebesar $20 juta. Perusahaan akan menggunakan dana ini untuk ekspansi teknologi computer vision ke pasar ASEAN dan pengembangan solusi smart city berbasis AI.',
    source: 'Detik.com',
    sourceLogo: '🔴',
    category: 'Startup',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
  },
  {
    title: 'BRIN Kembangkan AI untuk Prediksi Bencana Alam Indonesia',
    link: 'https://kompas.com',
    pubDate: new Date(Date.now() - 18 * 60 * 60 * 1000).toISOString(),
    summary: 'Badan Riset dan Inovasi Nasional (BRIN) meluncurkan proyek AI untuk sistem prediksi bencana alam yang mencakup gempa bumi, tsunami, dan banjir. Model machine learning ini memanfaatkan data historis 50 tahun untuk meningkatkan akurasi prediksi.',
    source: 'Kompas.com',
    sourceLogo: '🔵',
    category: 'Teknologi',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    title: 'GoTo Gunakan Generative AI untuk Tingkatkan Layanan UMKM',
    link: 'https://cnnindonesia.com',
    pubDate: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    summary: 'Grup GoTo mengintegrasikan Generative AI ke dalam ekosistem Tokopedia dan Gojek untuk membantu UMKM Indonesia membuat deskripsi produk otomatis, analisis pasar, dan rekomendasi harga berbasis data. Fitur ini telah digunakan oleh 2 juta seller aktif.',
    source: 'CNN Indonesia',
    sourceLogo: '🟡',
    category: 'Bisnis',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
  },
  {
    title: 'Halodoc Luncurkan Diagnosa AI Penyakit Tropis Pertama di Indonesia',
    link: 'https://detik.com',
    pubDate: new Date(Date.now() - 30 * 60 * 60 * 1000).toISOString(),
    summary: 'Platform kesehatan Halodoc meluncurkan modul AI khusus untuk diagnosa awal penyakit tropis seperti malaria, dengue, dan tuberkulosis. Teknologi ini dikembangkan bersama WHO dan Kemenkes untuk mendukung layanan kesehatan di daerah terpencil.',
    source: 'Detik.com',
    sourceLogo: '🔴',
    category: 'Kesehatan',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80',
  },
  {
    title: 'PLN Hemat Rp 2 Triliun dengan AI Predictive Maintenance',
    link: 'https://kompas.com',
    pubDate: new Date(Date.now() - 36 * 60 * 60 * 1000).toISOString(),
    summary: 'PT PLN (Persero) mengumumkan penghematan Rp 2 triliun melalui implementasi AI predictive maintenance untuk jaringan distribusi listrik nasional. Sistem ini mampu mendeteksi potensi kerusakan infrastruktur 72 jam sebelum terjadi.',
    source: 'Kompas.com',
    sourceLogo: '🔵',
    category: 'Energi',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
  },
]

export async function getNews(): Promise<NewsItem[]> {
  // In production, implement actual RSS fetching via API route
  // RSS sources: https://rss.detik.com/index.php/detikinet
  //              https://www.cnnindonesia.com/teknologi/rss
  //              https://rss.kompas.com/do/feed
  
  // For client-side, we use the static fallback data
  return staticNews
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
  const diffDays = Math.floor(diffHours / 24)

  if (diffHours < 1) return 'Baru saja'
  if (diffHours < 24) return `${diffHours} jam lalu`
  if (diffDays === 1) return 'Kemarin'
  if (diffDays < 7) return `${diffDays} hari lalu`

  return date.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export const newsCategories = ['Semua', 'Kebijakan', 'Edukasi', 'Teknologi', 'Startup', 'Lingkungan', 'Kesehatan', 'Energi', 'Bisnis']
