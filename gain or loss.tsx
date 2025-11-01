export default function GainersLosers({ data, loading }: any) {
return (
<div className="bg-zinc-800/30 p-6 rounded-2xl shadow-md">
<h3 className="text-lg font-semibold">Top Gainers / Losers</h3>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<p className="text-sm text-zinc-400">Gainers</p>
<ul className="mt-2 space-y-2">
{loading ? (
<li>Loading...</li>
) : (
data?.gainers.map((g: string) => (
<li key={g} className="text-sm font-medium">{g}</li>
))
)}
</ul>
</div>


<div>
<p className="text-sm text-zinc-400">Losers</p>
<ul className="mt-2 space-y-2">
{loading ? (
<li>Loading...</li>
) : (
data?.losers.map((l: string) => (
<li key={l} className="text-sm font-medium">{l}</li>
))
)}
</ul>
</div>
</div>
</div>
)
}
