# 🤝 Panduan Kontribusi

Terima kasih sudah tertarik untuk berkontribusi ke **AI for SDGs Indonesia**!

## 🚀 Setup Development

```bash
# Fork dan clone
git clone https://github.com/YOUR_USERNAME/ai-for-sdgs-indonesia.git
cd ai-for-sdgs-indonesia

# Install dependencies
npm install

# Jalankan dev server
npm run dev
```

## 📋 Jenis Kontribusi

### 🐛 Bug Reports
Buat issue baru dengan label `bug` dan sertakan:
- Deskripsi bug
- Langkah reproduksi
- Screenshot (jika ada)
- Environment (OS, browser, Node version)

### ✨ Feature Requests
Buat issue dengan label `enhancement` dan jelaskan:
- Fitur yang diinginkan
- Alasan / use case
- Mockup atau referensi (opsional)

### 🔧 Pull Requests

1. Fork repository
2. Buat branch: `git checkout -b feature/nama-fitur`
3. Commit dengan pesan deskriptif: `git commit -m 'feat: tambah xyz'`
4. Push: `git push origin feature/nama-fitur`
5. Buat Pull Request ke branch `main`

### Konvensi Commit

```
feat:     Fitur baru
fix:      Bug fix
docs:     Perubahan dokumentasi
style:    Format, missing semi colons, etc
refactor: Refactoring kode
test:     Menambah tests
chore:    Update build tasks, dll
```

## 📊 Menambah Data SDGs

Edit file `src/data/sdgs.ts` dan ikuti struktur yang ada:

```typescript
{
  id: 18, // ID SDGs (1-17)
  title: 'Judul dalam Bahasa Indonesia',
  shortTitle: 'Short Title',
  emoji: '🎯',
  color: '#hex-color', // Warna resmi UN SDGs
  description: 'Deskripsi SDG...',
  aiRole: 'Peran AI dalam SDG ini...',
  indonesiaCase: 'Studi kasus implementasi di Indonesia...',
  tools: ['Tool 1', 'Tool 2', 'Tool 3'],
  progress: 65, // 0-100
}
```

## 🗺 Roadmap

- [ ] Implementasi RSS feed real-time
- [ ] Halaman detail kursus
- [ ] AI Recommendation chatbot
- [ ] Multi-bahasa (Indonesia + English)
- [ ] Carbon tracker interaktif
- [ ] Project showcase komunitas
- [ ] Mode PWA
- [ ] API publik data SDGs AI Indonesia

## 📝 Code Style

- TypeScript strict mode
- Tailwind utility classes
- Komponen fungsional React
- Ekspor default untuk halaman
- Named export untuk komponen

---

Pertanyaan? Buka [Discussion](https://github.com/your-username/ai-for-sdgs-indonesia/discussions) atau hubungi maintainer.
