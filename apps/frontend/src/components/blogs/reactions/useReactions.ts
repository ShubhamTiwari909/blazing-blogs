'use client'
import type { Reaction, ReactionsProps } from './types'
import { useMutation } from '@tanstack/react-query'
import { useAuthSessionStore } from '@/lib/store/useAuthSession'
import { updateReaction } from './helpers'
import { useState } from 'react'

export const useReactions = ({ id, reactionCounts, userReactions }: ReactionsProps) => {
  const { sessionClient } = useAuthSessionStore()
  const [reactions, setReactions] = useState(reactionCounts)
  const [hasReacted, setHasReacted] = useState(userReactions)

  const { error, isPending, mutate } = useMutation({
    mutationFn: ({ reaction }: { reaction: Reaction }) =>
      updateReaction({ user: sessionClient?.user, id, reaction }),
    onSuccess: (data) => {
      setReactions(data.reactions)
      setHasReacted(data.userReactions)
    },
  })
  return { reactions, hasReacted, error, isPending, mutate }
}
