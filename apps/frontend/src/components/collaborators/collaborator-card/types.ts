import { Collaborator, Media } from '@/payload-types'

export type CollaboratorCardProps = {
  collaborator: Collaborator
  index: number
}
export type CollaboratorImageProps = {
  image: Media
  username: string
  index: number
}

export type ContentProps = {
  username: string
  email: string
  profession: string
  createdAt: string
}
