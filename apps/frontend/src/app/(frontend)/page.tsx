import Hero from '@/components/home/Hero'
import { METADATA } from './metadata'

export const metadata = METADATA

export default async function HomePage() {
  return <Hero />
}
