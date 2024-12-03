import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_COMPANY_NAME || 'Professional Artificial Turf Installation',
  description: 'Transform your space with premium artificial turf installation. Expert service, lifetime warranty, and maintenance-free solutions.',
  keywords: 'artificial turf, synthetic grass, lawn installation, landscaping, maintenance-free lawn',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}