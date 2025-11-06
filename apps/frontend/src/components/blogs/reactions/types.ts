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
