import React from 'react'
import './styles.css'
import Navbar from '@/components/ui/navbar/Navbar'
import { SessionProvider } from 'next-auth/react'
import SigninSignout from '@/components/ui/navbar/SigninSignout'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <Navbar>
            <SigninSignout />
          </Navbar>
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  )
}
