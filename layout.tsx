import '../styles/globals.css'
import { ReactNode } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


export const metadata = {
title: 'FinBrief',
description: 'Daily AI-powered stock market summaries — simple, fast, and clear.'
}


export default function RootLayout({ children }: { children: ReactNode }) {
return (
<html lang="en">
<body>
<Navbar />
<main className="container-custom mt-8 mb-16">{children}</main>
<Footer />
</body>
</html>
)
}
