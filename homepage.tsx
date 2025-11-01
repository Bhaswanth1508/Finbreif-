'use client'


import MarketOverview from '../components/MarketOverview'
import GainersLosers from '../components/GainersLosers'
import SectorPerformance from '../components/SectorPerformance'
import AISummary from '../components/AISummary'
import SubscribeBox from '../components/SubscribeBox'
import { useEffect, useState } from 'react'


type SummaryData = {
nifty: number
nifty_change: string
sensex: number
sensex_change: string
gainers: string[]
losers: string[]
fii: string
dii: string
sector_performance: Record<string, number>
summary: string
}


export default function Home() {
const [data, setData] = useState<SummaryData | null>(null)
const [loading, setLoading] = useState(true)


useEffect(() => {
fetch('/api/summary/today')
.then((res) => res.json())
.then((json) => setData(json))
.catch((err) => console.error(err))
.finally(() => setLoading(false))
}, [])


return (
<div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2">
<MarketOverview data={data} loading={loading} />
<div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
<GainersLosers data={data} loading={loading} />
<AISummary data={data} loading={loading} />
</div>
</div>


<aside className="lg:col-span-1">
<div className="bg-zinc-800/40 p-6 rounded-2xl shadow-md">
<h3 className="text-lg font-semibold mb-3">Market Snapshot</h3>
<p className="text-sm text-zinc-300">FII / DII</p>
<div className="mt-3">
<p className="text-2xl font-semibold">{loading ? '—' : data?.fii}</p>
<p className="text-sm text-zinc-400">FII Today</p>
<p className="mt-3 text-2xl font-semibold">{loading ? '—' : data?.dii}</p>
<p className="text-sm text-zinc-400">DII Today</p>
</div>
</div>


<div className="mt-6 bg-zinc-800/40 p-6 rounded-2xl shadow-md">
<h3 className="text-lg font-semibold mb-3">Sector Performance</h3>
<SectorPerformance data={data?.sector_performance} loading={loading} />
</div>


<div className="mt-6">
<SubscribeBox />
</div>
</aside>
</div>
</div>
)
}
