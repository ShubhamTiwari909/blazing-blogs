import type { User } from '@/payload-types'

export type CollaboratorsProps = {
  collaborators: { type: string; docs: User[] } | undefined
}

export type CollaboratorsListProps = {
  collaborators: { docs: User[] }
}