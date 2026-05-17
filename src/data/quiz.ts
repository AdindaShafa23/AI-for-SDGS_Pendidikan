export interface QuizQuestion {
  id: number
  question: string
  options: { label: string; value: string; emoji: string }[]
  type: 'single'
}

export interface QuizResult {
  sdgIds: number[]
  title: string
  description: string
  tools: string[]
  resources: { name: string; url: string }[]
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Bidang apa yang paling kamu minati?',
    type: 'single',
    options: [
      { label: 'Pendidikan & Belajar', value: 'education', emoji: '📚' },
      { label: 'Lingkungan & Alam', value: 'environment', emoji: '🌿' },
      { label: 'Kesehatan & Medis', value: 'health', emoji: '🏥' },
      { label: 'Teknologi & Inovasi', value: 'tech', emoji: '⚡' },
    ],
  },
  {
    id: 2,
    question: 'Apa tantangan terbesar yang ingin kamu selesaikan?',
    type: 'single',
    options: [
      { label: 'Kemiskinan & Ketimpangan', value: 'poverty', emoji: '🤝' },
      { label: 'Perubahan Iklim', value: 'climate', emoji: '🌍' },
      { label: 'Akses Informasi', value: 'access', emoji: '📡' },
      { label: 'Kesejahteraan Masyarakat', value: 'welfare', emoji: '💛' },
    ],
  },
  {
    id: 3,
    question: 'Bagaimana kamu ingin berkontribusi?',
    type: 'single',
    options: [
      { label: 'Membangun Teknologi AI', value: 'build', emoji: '🔧' },
      { label: 'Mengajar & Edukasi', value: 'teach', emoji: '🎓' },
      { label: 'Riset & Analisis Data', value: 'research', emoji: '🔬' },
      { label: 'Advokasi & Kebijakan', value: 'policy', emoji: '📋' },
    ],
  },
]

export const quizResults: Record<string, QuizResult> = {
  'education-poverty-teach': {
    sdgIds: [4, 1, 10],
    title: 'Pendidik AI untuk Inklusi Sosial',
    description: 'Kamu punya passion untuk memberdayakan masyarakat melalui pendidikan AI yang inklusif. Fokusmu pada SDG 4 (Pendidikan Berkualitas), SDG 1 (Tanpa Kemiskinan), dan SDG 10 (Mengurangi Ketimpangan).',
    tools: ['Khan Academy AI', 'Duolingo (NLP)', 'Ruangguru AI', 'Google Teachable Machine'],
    resources: [
      { name: 'AI4K12 Initiative', url: 'https://ai4k12.org' },
      { name: 'Elements of AI', url: 'https://elementsofai.com' },
    ],
  },
  'environment-climate-research': {
    sdgIds: [13, 15, 7],
    title: 'Ilmuwan AI untuk Planet Bumi',
    description: 'Kamu adalah seorang data scientist lingkungan yang akan menggunakan AI untuk melawan perubahan iklim. Fokusmu pada SDG 13 (Iklim), SDG 15 (Ekosistem Darat), dan SDG 7 (Energi Bersih).',
    tools: ['Google Earth Engine', 'ClimateAI', 'NASA Earthdata', 'Carbon Tracker API'],
    resources: [
      { name: 'Climate Change AI', url: 'https://climatechange.ai' },
      { name: 'Our World in Data', url: 'https://ourworldindata.org' },
    ],
  },
  'health-welfare-build': {
    sdgIds: [3, 2, 6],
    title: 'Inovator AI Kesehatan',
    description: 'Kamu adalah builder yang akan membangun solusi AI untuk masalah kesehatan masyarakat. Fokusmu pada SDG 3 (Kesehatan), SDG 2 (Ketahanan Pangan), dan SDG 6 (Air Bersih).',
    tools: ['TensorFlow Medical', 'Google Health AI', 'OpenMRS', 'WHO Health APIs'],
    resources: [
      { name: 'AI in Healthcare', url: 'https://health.google/for-clinicians/health-ai' },
      { name: 'WHO AI Ethics', url: 'https://www.who.int/publications/i/item/9789240029200' },
    ],
  },
  'tech-climate-build': {
    sdgIds: [9, 11, 7],
    title: 'Engineer Smart City & Industri 4.0',
    description: 'Kamu adalah engineer yang akan membangun infrastruktur cerdas. Fokusmu pada SDG 9 (Industri & Inovasi), SDG 11 (Kota Berkelanjutan), dan SDG 7 (Energi Bersih).',
    tools: ['TensorFlow', 'PyTorch', 'NVIDIA Jetson', 'Azure AI Platform'],
    resources: [
      { name: 'Google AI for Social Good', url: 'https://ai.google/responsibilities/social-good' },
      { name: 'UN Global Pulse', url: 'https://www.unglobalpulse.org' },
    ],
  },
  default: {
    sdgIds: [4, 8, 13],
    title: 'Generalis AI untuk SDGs',
    description: 'Kamu memiliki minat luas dalam penggunaan AI untuk SDGs. Mulai dari SDG 4 (Pendidikan), SDG 8 (Pertumbuhan Ekonomi), hingga SDG 13 (Iklim) – semuanya relevan untuk kontribusimu.',
    tools: ['ChatGPT', 'Google Bard', 'Hugging Face', 'Fast.ai'],
    resources: [
      { name: 'AI for Good Foundation', url: 'https://ai4good.org' },
      { name: 'UN SDGs', url: 'https://sdgs.un.org' },
    ],
  },
}

export function getQuizResult(answers: string[]): QuizResult {
  const key = answers.join('-')
  return quizResults[key] || quizResults.default
}
