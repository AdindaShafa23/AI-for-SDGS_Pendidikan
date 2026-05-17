import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'AI for SDGs Indonesia — Platform Edukasi AI & Pembangunan Berkelanjutan',
  description:
    'Platform edukasi interaktif tentang peran Kecerdasan Buatan (AI) dalam mendukung Tujuan Pembangunan Berkelanjutan (SDGs) di Indonesia.',
  keywords: ['AI', 'SDGs', 'Indonesia', 'edukasi', 'kecerdasan buatan', 'pembangunan berkelanjutan'],
  authors: [{ name: 'AI for SDGs Indonesia Community' }],
  openGraph: {
    title: 'AI for SDGs Indonesia',
    description: 'Platform edukasi AI untuk Pembangunan Berkelanjutan Indonesia',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="noise-overlay mesh-bg min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
