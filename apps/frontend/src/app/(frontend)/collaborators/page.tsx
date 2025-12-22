import Collaborators from '@/components/collaborators/Collaborators'
import { METADATA } from './metadata'

export const dynamic = 'force-dynamic'
export const revalidate = 3600 // 1 hour

export const metadata = METADATA

const CollaboratorsPage = async () => {
  return <Collaborators />
}

export default CollaboratorsPage
