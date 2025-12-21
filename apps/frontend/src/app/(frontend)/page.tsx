import Hero from '@/components/home/Hero'
import { METADATA } from './metadata'
import React from 'react'

export const dynamic = 'force-static'

export const metadata = METADATA

export default async function HomePage() {
  return <Hero />
}
