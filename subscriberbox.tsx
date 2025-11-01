'use client'


import { useState } from 'react'


export default function SubscribeBox() {
const [email, setEmail] = useState('')
const [msg, setMsg] = useState('')


async function onSubscribe(e: React.FormEvent) {
e.preventDefault()
setMsg('Subscribing...')
try {
const res = await fetch('/api/subscribe', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ email })
})
if (res.ok) setMsg('Subscribed!')
else setMsg('Failed to subscribe')
} catch (err) {
setMsg('Network error')
}
}


return (
<div className="bg-zinc-800/40 p-6 rounded-2xl shadow-md">
<h4 className="font-semibold mb-2">Subscribe for daily briefs</h4>
<form onSubmit={onSubscribe} className="flex gap-2">
<input
type="email"
required
placeholder="you@domain.com"
value={email}
onChange={(e) => setEmail(e.target.value)}
className="flex-1 p-3 rounded-lg bg-zinc-900/60 border border-zinc-700"
/>
<button className="px-4 py-2 rounded-lg bg-emerald-500 text-black font-semibold">Join</button>
</form>
{msg && <p className="mt-2 text-sm text-zinc-300">{msg}</p>}
</div>
)
}
