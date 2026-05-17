'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Zap, ArrowRight, RotateCcw, ExternalLink, CheckCircle2 } from 'lucide-react'
import { quizQuestions, getQuizResult } from '@/data/quiz'
import { sdgsData } from '@/data/sdgs'

export default function QuizPage() {
  const [step, setStep] = useState(0) // 0 = intro, 1..n = questions, n+1 = result
  const [answers, setAnswers] = useState<string[]>([])
  const [selected, setSelected] = useState<string | null>(null)

  const totalSteps = quizQuestions.length
  const isIntro = step === 0
  const isResult = step > totalSteps
  const currentQuestion = quizQuestions[step - 1]

  const handleStart = () => {
    setStep(1)
    setAnswers([])
    setSelected(null)
  }

  const handleSelect = (value: string) => {
    setSelected(value)
  }

  const handleNext = () => {
    if (!selected) return
    const newAnswers = [...answers, selected]
    setAnswers(newAnswers)
    setSelected(null)
    setStep(step + 1)
  }

  const handleReset = () => {
    setStep(0)
    setAnswers([])
    setSelected(null)
  }

  const result = isResult ? getQuizResult(answers) : null
  const resultSDGs = result ? sdgsData.filter((s) => result.sdgIds.includes(s.id)) : []

  return (
    <div className="pt-24 pb-20 px-4 min-h-screen flex flex-col">
      <div className="max-w-2xl mx-auto w-full flex-1 flex flex-col">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-yellow-400 text-sm font-mono font-semibold tracking-wider uppercase mb-4">
            <Zap size={14} />
            AI SDGs Quiz
          </div>
          <h1 className="font-display font-black text-4xl text-white mb-3">
            Temukan{' '}
            <span className="gradient-text">SDG-mu</span>
          </h1>
          <p className="text-gray-400">3 pertanyaan, rekomendasi personal, dan AI tools yang cocok untukmu.</p>
        </div>

        {/* Progress bar (questions) */}
        {!isIntro && !isResult && (
          <div className="mb-8">
            <div className="flex justify-between text-xs text-gray-600 mb-2">
              <span>Pertanyaan {step} dari {totalSteps}</span>
              <span>{Math.round((step / totalSteps) * 100)}%</span>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400 transition-all duration-500"
                style={{ width: `${(step / totalSteps) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* ─── INTRO ─────────────────────────────────────────── */}
        {isIntro && (
          <div className="glass rounded-3xl p-10 text-center flex-1 flex flex-col items-center justify-center">
            <div className="text-7xl mb-6 animate-float">🎯</div>
            <h2 className="font-display font-bold text-2xl text-white mb-4">
              Siap menemukan peran AI terbaik untukmu?
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed max-w-sm">
              Quiz ini akan mencocokkan minat dan passionmu dengan SDGs dan AI tools yang paling relevan untuk karier atau kontribusimu.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {['3 Pertanyaan', '< 2 Menit', 'Hasil Personal', 'Gratis'].map((tag) => (
                <span key={tag} className="px-3 py-1.5 glass rounded-lg text-xs text-emerald-400 border border-emerald-500/20 font-medium">
                  ✓ {tag}
                </span>
              ))}
            </div>
            <button
              onClick={handleStart}
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-2xl hover:opacity-90 transition-opacity shadow-lg shadow-emerald-500/20"
            >
              <Zap size={18} />
              Mulai Quiz
              <ArrowRight size={16} />
            </button>
          </div>
        )}

        {/* ─── QUESTION ───────────────────────────────────────── */}
        {!isIntro && !isResult && currentQuestion && (
          <div className="glass rounded-3xl p-8 flex-1 flex flex-col">
            <h2 className="font-display font-bold text-2xl text-white mb-8 text-center">
              {currentQuestion.question}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
              {currentQuestion.options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleSelect(opt.value)}
                  className={`flex items-center gap-4 p-5 rounded-2xl text-left transition-all duration-200 border ${
                    selected === opt.value
                      ? 'bg-emerald-500/10 border-emerald-500/40 shadow-lg shadow-emerald-500/10'
                      : 'glass-light border-white/5 hover:border-white/10 hover:bg-white/5'
                  }`}
                >
                  <span className="text-3xl flex-shrink-0">{opt.emoji}</span>
                  <div>
                    <span className="text-white font-semibold text-sm">{opt.label}</span>
                    {selected === opt.value && (
                      <CheckCircle2 size={14} className="text-emerald-400 mt-1" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-8 flex justify-between items-center">
              <button
                onClick={handleReset}
                className="text-gray-600 text-sm hover:text-gray-400 flex items-center gap-1.5 transition-colors"
              >
                <RotateCcw size={12} />
                Mulai ulang
              </button>
              <button
                onClick={handleNext}
                disabled={!selected}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                  selected
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:opacity-90'
                    : 'bg-white/5 text-gray-600 cursor-not-allowed'
                }`}
              >
                {step === totalSteps ? 'Lihat Hasil' : 'Lanjut'}
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        )}

        {/* ─── RESULT ─────────────────────────────────────────── */}
        {isResult && result && (
          <div className="space-y-6">
            {/* Result card */}
            <div className="glass rounded-3xl p-8 text-center">
              <div className="text-5xl mb-4">🎉</div>
              <p className="text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-3">
                Hasil Quiz-mu
              </p>
              <h2 className="font-display font-bold text-3xl text-white mb-4">
                {result.title}
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">{result.description}</p>

              {/* Matched SDGs */}
              <div className="flex justify-center gap-3 mb-6">
                {resultSDGs.map((sdg) => (
                  <div
                    key={sdg.id}
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
                    style={{ background: `${sdg.color}20`, border: `2px solid ${sdg.color}40` }}
                    title={sdg.title}
                  >
                    {sdg.emoji}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {resultSDGs.map((sdg) => (
                  <span
                    key={sdg.id}
                    className="text-xs px-2 py-1 rounded-lg font-semibold"
                    style={{ background: `${sdg.color}18`, color: sdg.color }}
                  >
                    SDG {sdg.id}: {sdg.shortTitle}
                  </span>
                ))}
              </div>
            </div>

            {/* AI Tools */}
            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold text-white mb-4">🔧 AI Tools yang Direkomendasikan</h3>
              <div className="flex flex-wrap gap-2">
                {result.tools.map((tool) => (
                  <span key={tool} className="px-3 py-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-xl text-sm font-medium">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold text-white mb-4">📚 Mulai Belajar Dari Sini</h3>
              <div className="space-y-3">
                {result.resources.map((res) => (
                  <a
                    key={res.name}
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 glass-light rounded-xl hover:bg-white/5 transition-colors group"
                  >
                    <span className="text-white text-sm font-medium group-hover:text-emerald-400 transition-colors">
                      {res.name}
                    </span>
                    <ExternalLink size={13} className="text-gray-500" />
                  </a>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleReset}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 glass rounded-xl text-white hover:bg-white/5 transition-all font-medium"
              >
                <RotateCcw size={16} />
                Ulangi Quiz
              </button>
              <Link
                href="/sdgs"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
              >
                Jelajahi SDGs
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
