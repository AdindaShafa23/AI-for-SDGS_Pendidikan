'use client'

import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart,
} from 'recharts'
import { aiAdoptionData, sectorData, sdgsProgressData, aiImpactPrediction, educationGrowthData } from '@/data/stats'

const tooltipStyle = {
  backgroundColor: '#0f2040',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '12px',
  color: '#e8f4f0',
  fontSize: '12px',
  boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
}

export function AIAdoptionChart() {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <AreaChart data={aiAdoptionData}>
        <defs>
          <linearGradient id="adoptionGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="investGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
        <XAxis dataKey="year" tick={{ fill: '#7a9bb5', fontSize: 11 }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fill: '#7a9bb5', fontSize: 11 }} axisLine={false} tickLine={false} />
        <Tooltip contentStyle={tooltipStyle} />
        <Legend wrapperStyle={{ fontSize: '12px', color: '#7a9bb5' }} />
        <Area type="monotone" dataKey="adoption" name="Adopsi AI (%)" stroke="#10b981" fill="url(#adoptionGrad)" strokeWidth={2} dot={{ fill: '#10b981', r: 4 }} />
        <Area type="monotone" dataKey="startups" name="Startup AI" stroke="#06b6d4" fill="url(#investGrad)" strokeWidth={2} dot={{ fill: '#06b6d4', r: 4 }} />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export function SectorPieChart() {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <PieChart>
        <Pie
          data={sectorData}
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={110}
          paddingAngle={3}
          dataKey="value"
          nameKey="sector"
        >
          {sectorData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} opacity={0.85} />
          ))}
        </Pie>
        <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [`${v}%`, '']} />
        <Legend
          formatter={(value) => <span style={{ color: '#7a9bb5', fontSize: '11px' }}>{value}</span>}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

export function SDGsProgressChart() {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={sdgsProgressData} layout="vertical" barCategoryGap={8}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" horizontal={false} />
        <XAxis type="number" domain={[0, 100]} tick={{ fill: '#7a9bb5', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
        <YAxis type="category" dataKey="sdg" tick={{ fill: '#7a9bb5', fontSize: 11 }} axisLine={false} tickLine={false} width={50} />
        <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [`${v}%`, 'Progress']} />
        <Bar dataKey="progress" radius={[0, 6, 6, 0]}>
          {sdgsProgressData.map((entry, i) => (
            <Cell key={i} fill={entry.color} opacity={0.8} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}

export function AIImpactChart() {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <LineChart data={aiImpactPrediction}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
        <XAxis dataKey="year" tick={{ fill: '#7a9bb5', fontSize: 11 }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fill: '#7a9bb5', fontSize: 11 }} axisLine={false} tickLine={false} />
        <Tooltip contentStyle={tooltipStyle} />
        <Legend wrapperStyle={{ fontSize: '12px', color: '#7a9bb5' }} />
        <Line type="monotone" dataKey="gdp" name="GDP Impact (%)" stroke="#10b981" strokeWidth={2.5} dot={{ r: 4 }} />
        <Line type="monotone" dataKey="jobs" name="New Jobs (Juta)" stroke="#818cf8" strokeWidth={2.5} dot={{ r: 4 }} />
        <Line type="monotone" dataKey="carbon" name="Carbon Reduction (%)" stroke="#fbbf24" strokeWidth={2.5} dot={{ r: 4 }} strokeDasharray="5 3" />
      </LineChart>
    </ResponsiveContainer>
  )
}

export function EducationGrowthChart() {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <AreaChart data={educationGrowthData}>
        <defs>
          <linearGradient id="learnersGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#818cf8" stopOpacity={0.4} />
            <stop offset="95%" stopColor="#818cf8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
        <XAxis dataKey="month" tick={{ fill: '#7a9bb5', fontSize: 11 }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fill: '#7a9bb5', fontSize: 11 }} axisLine={false} tickLine={false} />
        <Tooltip contentStyle={tooltipStyle} />
        <Area type="monotone" dataKey="learners" name="Pelajar AI" stroke="#818cf8" fill="url(#learnersGrad)" strokeWidth={2} />
      </AreaChart>
    </ResponsiveContainer>
  )
}
