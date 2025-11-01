'use client'


import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'


export default function SectorPerformance({ data, loading }: any) {
if (loading) return <div className="h-40 flex items-center justify-center">Loading...</div>


const series = Object.entries(data || {}).map(([key, val]) => ({ name: key, value: Number(val) }))


return (
<div style={{ width: '100%', height: 220 }}>
<ResponsiveContainer>
<BarChart data={series} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
<XAxis dataKey="name" stroke="#94a3b8" />
<YAxis stroke="#94a3b8" />
<Tooltip />
<Bar dataKey="value" radius={[8, 8, 0, 0]} />
</BarChart>
</ResponsiveContainer>
</div>
)
}
