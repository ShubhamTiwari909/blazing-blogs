
import React from 'react'
import './styles.css'
import Navbar from '@/components/ui/navbar/Navbar'
import { SessionProvider } from 'next-auth/react'
import SigninSignout from '@/components/ui/navbar/SigninSignout'
import TanstackWrapper from './TanstackWrapper'
import Footer from '@/components/ui/Footer'

export default function RootLayout(props: { children: React.ReactNode }) {
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
