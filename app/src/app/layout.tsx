import type { Metadata } from 'next'
import Providers from '@/context'
import './globals.css'

export const metadata: Metadata = {
  title: '🦎 Salamander — Trustless AI Trading Agents',
  description: 'Any Chain, Any DEX, Any Strategy. Built on ERC-8004.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
