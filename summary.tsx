export default function AISummary({ data, loading }: any) {
return (
<div className="bg-zinc-900/60 p-6 rounded-2xl shadow-md">
<h3 className="text-lg font-semibold">AI Market Summary</h3>
<div className="mt-3 text-sm text-zinc-300 leading-relaxed">
{loading ? (
<p>Loading summary...</p>
) : (
(data?.summary || '').split('\n').map((p: string, i: number) => (
<p key={i} className="mt-2">{p}</p>
))
)}
</div>
</div>
)
}
