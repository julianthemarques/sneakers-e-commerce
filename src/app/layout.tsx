import type { Metadata } from 'next'
import { Kumbh_Sans } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/common/header'

const inter = Kumbh_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sneakers E-commerce',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="px-24 py-10">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
