import type { Collaborator } from '@/payload-types'

export type CollaboratorsProps = {
  collaborators: { type: string; docs: Collaborator[] } | undefined
}

export type CollaboratorsListProps = {
  collaborators: { docs: Collaborator[] }
}
