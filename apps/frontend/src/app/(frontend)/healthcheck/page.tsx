import { HealthCheck } from '@/components/healthcheck/HealthCheck'
import { METADATA } from './metadata'
import React from 'react'

export const metadata = METADATA

const healthcheckPage = async () => {
  return <HealthCheck />
}
export default healthcheckPage
