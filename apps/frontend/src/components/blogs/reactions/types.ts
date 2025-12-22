import type { Session, User } from 'next-auth'

export type Reactions = {
  confetti: number
  fireworks: number
  heart: number
  party: number
  unicorn: number
}

export type ReactionsProps = {
  id: string
  userReactions: {
    heart: boolean
    unicorn: boolean
    confetti: boolean
    fireworks: boolean
    party: boolean
  }
  reactionCounts: Reactions
}

export type Reaction = 'heart' | 'unicorn' | 'confetti' | 'fireworks' | 'party'

export type ReactionMap = {
  name: Reaction
  icon: string
  count: number
}[]

export type FetchReactionsCountProps = {
  session: Session
  id: string
}

export type UpdateReactionProps = {
  user?: User | null | undefined
  id: string
  reaction: Reaction
}
