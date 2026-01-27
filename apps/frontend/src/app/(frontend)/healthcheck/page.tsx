import { HealthCheck } from '@/components/healthcheck/HealthCheck'
import { METADATA } from './metadata'

export const metadata = METADATA

const healthcheckPage = async () => {
  return <HealthCheck />
}
export default healthcheckPage
