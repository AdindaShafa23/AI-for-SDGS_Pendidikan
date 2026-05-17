import { TrendingUp, TrendingDown } from 'lucide-react'

interface DashboardCardProps {
  label: string
  value: string
  change: string
  trend: 'up' | 'down'
  description: string
  color: string
  icon?: React.ReactNode
}

export default function DashboardCard({
  label,
  value,
  change,
  trend,
  description,
  color,
  icon,
}: DashboardCardProps) {
  return (
    <div
      className="glass rounded-2xl p-6 relative overflow-hidden group hover:border-white/10 transition-all duration-300 hover:-translate-y-1"
      style={{ '--card-color': color } as React.CSSProperties}
    >
      {/* Background glow */}
      <div
        className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-5 blur-2xl pointer-events-none"
        style={{ background: color }}
      />

      {/* Icon */}
      {icon && (
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
          style={{ background: `${color}18`, border: `1px solid ${color}25` }}
        >
          <div style={{ color }}>{icon}</div>
        </div>
      )}

      {/* Value */}
      <div className="mb-1">
        <span className="font-display font-bold text-3xl text-white">{value}</span>
      </div>

      {/* Change badge */}
      <div className="flex items-center gap-2 mb-3">
        <span
          className={`flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full ${
            trend === 'up'
              ? 'bg-emerald-500/15 text-emerald-400'
              : 'bg-red-500/15 text-red-400'
          }`}
        >
          {trend === 'up' ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
          {change}
        </span>
        <span className="text-gray-600 text-xs">YoY</span>
      </div>

      {/* Label */}
      <div>
        <p className="text-white font-semibold text-sm mb-0.5">{label}</p>
        <p className="text-gray-500 text-xs">{description}</p>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 opacity-30"
        style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
      />
    </div>
  )
}
