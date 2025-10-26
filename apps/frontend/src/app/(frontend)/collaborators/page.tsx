import { queryCollaborators } from '@/lib/fetch-utils/query-all-pages'
import Collaborators from '@/components/collaborators/Collaborators'

const CollaboratorsPage = async () => {
  const collaborators = await queryCollaborators()
  return <Collaborators collaborators={collaborators} />
}

export default CollaboratorsPage
