import Link from 'next/link'
import { Activity } from 'lucide-react'


export default function Navbar() {
return (
<nav className="bg-transparent border-b border-zinc-800">
<div className="container-custom py-4 flex items-center justify-between">
<Link href="/" className="flex items-center gap-3">
<div className="bg-gradient-to-r from-indigo-500 to-emerald-400 p-2 rounded-2xl shadow-md">
<Activity className="text-white" />
</div>
<div>
<h1 className="text-lg font-bold">FinBrief</h1>
<p className="text-xs text-zinc-400">Daily market summaries</p>
</div>
</Link>


<div className="flex items-center gap-6">
<Link href="/about" className="text-sm text-zinc-300 hover:text-white">About</Link>
<Link href="/subscribe" className="px-3 py-2 rounded-md bg-zinc-700/40 text-sm">Subscribe</Link>
</div>
</div>
</nav>
)
}
