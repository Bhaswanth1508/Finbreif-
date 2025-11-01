import { NextResponse } from 'next/server'


export async function GET() {
const data = {
nifty: 22567,
nifty_change: '+0.65%',
sensex: 74789,
sensex_change: '+0.58%',
gainers: ['Tata Steel', 'Infosys', 'HDFC Life'],
losers: ["Dr Reddy's", 'HDFC Bank'],
fii: '+₹1,400 Cr',
dii: '-₹900 Cr',
sector_performance: { IT: 1.2, Pharma: -0.8, Metals: 2.3 },
summary:
'The markets closed higher today as gains in IT and Metal stocks lifted the indices. Investors cheered stronger global cues and domestic FII inflows. Broader participation was visible in midcaps.'
}


return NextResponse.json(data)
}
