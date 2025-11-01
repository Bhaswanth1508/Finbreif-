import React from 'react'


export default function MarketOverview({ data, loading }: any) {
return (
<div className="bg-zinc-800/40 p-6 rounded-2xl shadow-md">
<h2 className="text-xl font-semibold">Today’s Market Overview</h2>


<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="p-4 bg-zinc-900/60 rounded-2xl">
<p className="text-sm text-zinc-400">Nifty</p>
<div className="flex items-end gap-4">
<p className="text-3xl font-bold">{loading ? '—' : data?.nifty}</p>
<p className="text-sm text-green-300">{loading ? '' : data?.nifty_change}</p>
</div>
</div>


<div className="p-4 bg-zinc-900/60 rounded-2xl">
<p className="text-sm text-zinc-400">Sensex</p>
<div className="flex items-end gap-4">
<p className="text-3xl font-bold">{loading ? '—' : data?.sensex}</p>
<p className="text-sm text-green-300">{loading ? '' : data?.sensex_change}</p>
</div>
</div>
</div>
</div>
)
}
