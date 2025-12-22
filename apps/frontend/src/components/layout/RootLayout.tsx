import SigninSignout from '@/components/ui/navbar/SigninSignout'
import Navbar from '@/components/ui/navbar/Navbar'
import { SessionProvider } from 'next-auth/react'
import TanstackWrapper from './TanstackWrapper'
import type { ChildrenProps } from './types'
import Footer from '@/components/ui/footer/Footer'
import React from 'react'
import './styles.css'

export default function RootLayout(props: ChildrenProps) {
  const { children } = props

  return (
    <SessionProvider>
      <Navbar>
        <SigninSignout />
      </Navbar>
      <TanstackWrapper>{children}</TanstackWrapper>
      <Footer />
    </SessionProvider>
  )
}
