'use client'

import { wagmiAdapter, projectId, networks } from '@/config'
import { createAppKit } from '@reown/appkit/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { type ReactNode } from 'react'
import { cookieToInitialState, WagmiProvider, type Config } from 'wagmi'

const queryClient = new QueryClient()

const metadata = {
  name: 'Salamander',
  description: 'Trustless AI Trading Agents — Any Chain, Any DEX, Any Strategy',
  url: 'https://themasterclaw.github.io/salamander',
  icons: ['https://raw.githubusercontent.com/TheMasterClaw/salamander/master/docs/favicon.ico'],
}

createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: networks as any,
  metadata,
  features: {
    analytics: true,
  },
  themeMode: 'dark',
  themeVariables: {
    '--w3m-accent': '#22c55e',
    '--w3m-border-radius-master': '2px',
  },
})

export default function Providers({ children, cookies }: { children: ReactNode; cookies: string | null }) {
  const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig as Config, cookies)

  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig as Config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  )
}
