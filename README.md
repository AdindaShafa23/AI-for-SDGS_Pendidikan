# 🌏 AI for SDGs Indonesia

> Platform edukasi open source tentang peran Kecerdasan Buatan (AI) dalam mendukung 17 Tujuan Pembangunan Berkelanjutan (SDGs) di Indonesia.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3-38bdf8?logo=tailwindcss)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## ✨ Fitur Utama

| Fitur | Deskripsi |
|---|---|
| 🏠 **Landing Page** | Hero section, statistik AI, featured SDGs, preview berita |
| 📊 **Dashboard Interaktif** | Charts Recharts, statistik ekosistem AI, SDGs progress |
| 📰 **Berita AI Indonesia** | Agregasi RSS dari Detik, Kompas, CNN Indonesia |
| 🌍 **SDGs Explorer** | 17 SDGs dengan penjelasan AI, studi kasus & tools Indonesia |
| 🎯 **Quiz Interaktif** | 3 pertanyaan → rekomendasi SDG & AI tools personal |
| 📚 **Modul Belajar** | 6 kursus AI literacy gratis, jalur belajar terstruktur |
| 🌙 **Dark Mode** | Desain premium dark theme |
| 📱 **Responsive** | Mobile-first, optimal di semua perangkat |
| ⚡ **Tanpa Login** | Bebas akses semua fitur tanpa akun |

---

## 🛠 Tech Stack

```
Frontend    →  Next.js 14 (App Router) + TypeScript
Styling     →  Tailwind CSS + Custom CSS Variables
Charts      →  Recharts (AreaChart, LineChart, BarChart, PieChart)
Icons       →  Lucide React
Animation   →  CSS Animations + Framer Motion ready
News        →  RSS Parser (rss-parser) + Static fallback
Deployment  →  Vercel (zero config)
```

---

## 🚀 Cara Menjalankan

### Prasyarat
- Node.js 18+
- npm / yarn / pnpm

### 1. Clone Repository

```bash
git clone https://github.com/your-username/ai-for-sdgs-indonesia.git
cd ai-for-sdgs-indonesia
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Jalankan Development Server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### 4. Build untuk Produksi

```bash
npm run build
npm start
```

---

## 📁 Struktur Folder

```
src/
├── app/
│   ├── page.tsx              # 🏠 Landing Page
│   ├── layout.tsx            # Root layout + metadata
│   ├── globals.css           # Global styles + design tokens
│   ├── dashboard/
│   │   └── page.tsx          # 📊 Dashboard dengan charts
│   ├── news/
│   │   └── page.tsx          # 📰 Berita AI Indonesia
│   ├── sdgs/
│   │   └── page.tsx          # 🌍 17 SDGs Explorer
│   ├── quiz/
│   │   └── page.tsx          # 🎯 Quiz Interaktif
│   └── learn/
│       └── page.tsx          # 📚 Modul Belajar
│
├── components/
│   ├── Navbar.tsx            # Navigasi responsive + sticky
│   ├── Footer.tsx            # Footer dengan links
│   ├── NewsCard.tsx          # Kartu berita (featured + list)
│   ├── DashboardCard.tsx     # Kartu statistik dashboard
│   ├── Charts.tsx            # Semua Recharts components
│   └── SDGCard.tsx           # SDG card + modal detail
│
├── data/
│   ├── sdgs.ts               # Data lengkap 17 SDGs
│   ├── stats.ts              # Data statistik & chart
│   └── quiz.ts               # Pertanyaan & hasil quiz
│
└── services/
    └── news.ts               # News service + static fallback
```

---

## 🔌 Integrasi RSS (Berita)

Untuk mengaktifkan RSS feed nyata, buat API Route:

```bash
src/app/api/news/route.ts
```

```typescript
import Parser from 'rss-parser'
import { NextResponse } from 'next/server'

const parser = new Parser()

const RSS_SOURCES = [
  { url: 'https://rss.detik.com/index.php/detikinet', source: 'Detik.com' },
  { url: 'https://www.cnnindonesia.com/teknologi/rss', source: 'CNN Indonesia' },
]

export async function GET() {
  try {
    const allItems = await Promise.allSettled(
      RSS_SOURCES.map(async ({ url, source }) => {
        const feed = await parser.parseURL(url)
        return feed.items.map(item => ({ ...item, source }))
      })
    )

    const items = allItems
      .filter(r => r.status === 'fulfilled')
      .flatMap(r => (r as PromiseFulfilledResult<any>).value)
      .sort((a, b) => new Date(b.pubDate!).getTime() - new Date(a.pubDate!).getTime())

    return NextResponse.json(items, {
      headers: { 'Cache-Control': 's-maxage=3600, stale-while-revalidate' }
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch news' }, { status: 500 })
  }
}
```

---

## 🌐 Deploy ke Vercel

### Cara 1: One-click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/ai-for-sdgs-indonesia)

### Cara 2: Via CLI

```bash
npm i -g vercel
vercel --prod
```

### Cara 3: GitHub Integration

1. Push ke GitHub
2. Buka [vercel.com](https://vercel.com)
3. Import repository
4. Deploy otomatis!

---

## 🤝 Cara Berkontribusi

Kami sangat menyambut kontribusi dari komunitas!

```bash
# 1. Fork repository ini
# 2. Buat branch baru
git checkout -b feature/nama-fitur

# 3. Commit perubahanmu
git commit -m 'feat: tambah fitur xyz'

# 4. Push ke branch
git push origin feature/nama-fitur

# 5. Buat Pull Request
```

### Area yang Bisa Dikontribusikan

- 📝 Menambah/memperbarui data SDGs Indonesia
- 🗞️ Menambah sumber berita RSS baru
- 🎨 Meningkatkan UI/UX komponen
- 📊 Menambah visualisasi data baru
- 🌐 Terjemahan konten
- 🐛 Bug fixes

---

## 📊 Data Sumber

Data yang digunakan dalam platform ini bersumber dari:

- [UN SDGs Official](https://sdgs.un.org) — Definisi & framework SDGs
- [Bappenas Indonesia](https://sdgs.bappenas.go.id) — Progress SDGs Indonesia
- [Google AI for Social Good](https://ai.google/responsibilities/social-good) — Referensi AI tools
- [Our World in Data](https://ourworldindata.org) — Data global
- [Kominfo](https://kominfo.go.id) — Ekosistem digital Indonesia

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah **MIT License** — bebas digunakan, dimodifikasi, dan didistribusikan.

Lihat file [LICENSE](LICENSE) untuk detail.

---

## 🙏 Referensi & Inspirasi

- [UN SDGs](https://sdgs.un.org)
- [Google AI for Social Good](https://ai.google/responsibilities/social-good)
- [Our World in Data](https://ourworldindata.org)
- [Climate Change AI](https://climatechange.ai)
- [AI for Good Foundation](https://ai4good.org)

---

<div align="center">

Dibuat dengan ❤️ untuk Indonesia yang lebih baik

**[Website](https://ai-for-sdgs.vercel.app)** · **[GitHub](https://github.com/your-username/ai-for-sdgs-indonesia)** · **[Kontribusi](CONTRIBUTING.md)**

</div>
