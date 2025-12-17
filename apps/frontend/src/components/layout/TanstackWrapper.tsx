'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { ChildrenProps } from './types'
import React from 'react'

export default function TanstackWrapper(props: ChildrenProps) {
  const { children } = props

  // Create a QueryClient instance
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 60 * 1000, // 5 minutes
            refetchOnWindowFocus: false,
          },
        },
      }),
  )

  return (
    <QueryClientProvider client={queryClient}>
      <main>{children}</main>
    </QueryClientProvider>
  )
}
