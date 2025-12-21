import { queryCollaborators } from '@/lib/fetch-utils/query-all-pages'
import Collaborators from '@/components/collaborators/Collaborators'
import { METADATA } from './metadata'

export const revalidate = 3600 // 1 hour

export const metadata = METADATA

const CollaboratorsPage = async () => {
  const collaborators = await queryCollaborators()
  return <Collaborators collaborators={collaborators} />
}

export default CollaboratorsPage
