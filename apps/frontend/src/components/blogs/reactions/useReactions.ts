'use client'
import type { Reaction, ReactionsProps } from './types'
import { useMutation } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import { updateReaction } from './helpers'
import { useState } from 'react'

export const useReactions = ({ id, reactionCounts, userReactions }: ReactionsProps) => {
  const { data: session } = useSession()
  const [reactions, setReactions] = useState(reactionCounts)
  const [hasReacted, setHasReacted] = useState(userReactions)

  const { error, isPending, mutate } = useMutation({
    mutationFn: ({ reaction }: { reaction: Reaction }) =>
      updateReaction({ user: session?.user, id, reaction }),
    onSuccess: (data) => {
      setReactions(data.reactions)
      setHasReacted(data.userReactions)
    },
  })
  return { reactions, hasReacted, error, isPending, mutate }
}
