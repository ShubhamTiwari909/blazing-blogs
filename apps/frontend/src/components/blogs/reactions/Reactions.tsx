'use client'
import { Typography } from '@/components/atoms/typography'
import { Button } from '@/components/ui/button'
import type { ReactionsProps } from './types'
import { useSession } from 'next-auth/react'
import { generateReactionMap } from './data'
import React, { useState } from 'react'
import Image from 'next/image'

const Reactions = ({ id, userReactions, reactionCounts }: ReactionsProps) => {
  const { data: session } = useSession()
  const [reactions, setReactions] = useState(reactionCounts)
  const [hasReacted, setHasReacted] = useState(userReactions)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleReaction = (reaction: 'heart' | 'unicorn' | 'confetti' | 'fireworks' | 'party') => {
    if (!session?.user?.email || isLoading) return

    setIsLoading(true)
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs/update/reactions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session.user.passkey} ${session.user.email}`,
      },
      body: JSON.stringify({
        id,
        userName: session.user.name,
        userEmail: session.user.email,
        userImage: session.user.image,
        reaction,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setReactions(data.reactions)
        setHasReacted(data.userReactions)
      })
      .catch((error) => {
        console.error('Error updating reactions:', error)
        setError('Error updating reactions, please try again later')
        setTimeout(() => {
          setError(null)
        }, 3000)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  if (!session?.user) return null

  const reactionsMap = generateReactionMap(reactions)

  return (
    <ul className="relative flex flex-wrap items-center gap-1">
      {reactionsMap?.map((reaction) => (
        <Button
          onClick={() => handleReaction(reaction.name)}
          key={reaction.name}
          disabled={isLoading}
          variant="outline"
          className={`flex cursor-pointer items-center gap-1 px-2 hover:border-violet-800 hover:bg-white disabled:opacity-50 ${hasReacted[reaction.name] ? 'border-violet-500' : 'border-gray-500'}`}
        >
          <Image src={reaction.icon} alt={reaction.name} width={24} height={24} />
          <Typography
            as="p"
            size="xxs"
            color="secondary"
            className={hasReacted[reaction.name] ? 'text-violet-500' : 'text-gray-600'}
          >
            {reaction.count}
          </Typography>
        </Button>
      ))}
      {error && (
        <Typography
          as="p"
          size="xxs"
          color="inherit"
          className="absolute right-0 -bottom-4 z-100 text-xs text-red-500 lg:right-5 lg:-bottom-12"
        >
          {error}
        </Typography>
      )}
    </ul>
  )
}

export default Reactions
