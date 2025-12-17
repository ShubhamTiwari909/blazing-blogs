import RootLayout from '@/components/layout/RootLayout'
import React from 'react'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default async function Layout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className={inter.className}>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
