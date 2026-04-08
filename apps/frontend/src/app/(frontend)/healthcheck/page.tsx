import { HealthCheck } from '@/components/healthcheck/HealthCheck'
import { Suspense } from 'react'
import { METADATA } from './metadata'

export const metadata = METADATA

const healthcheckPage = async () => {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center">Loading...</div>}>
      <HealthCheck />
    </Suspense>
  )
}
export default healthcheckPage
