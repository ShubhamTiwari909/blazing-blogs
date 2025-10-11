'use client'
import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import { Button } from '../../ui/button'
import Image from 'next/image'

type Reactions = {
  confetti: number
  fireworks: number
  heart: number
  party: number
  unicorn: number
}

const Reactions = ({
  id,
  userReactions,
  uniqueReactions,
}: {
  id: string
  userReactions: {
    heart: boolean
    unicorn: boolean
    confetti: boolean
    fireworks: boolean
    party: boolean
  }
  uniqueReactions: Reactions
}) => {
  const { data: session } = useSession()
  const [reactions, setReactions] = useState(uniqueReactions)
  const [hasReacted, setHasReacted] = useState(userReactions)
  const [isLoading, setIsLoading] = useState(false)

  const handleReaction = (reaction: 'heart' | 'unicorn' | 'confetti' | 'fireworks' | 'party') => {
    if (!session?.user?.email || isLoading) return

    setIsLoading(true)
    fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs/update/reactions?id=${id}&userName=${session.user.name}&userEmail=${session.user.email}&userImage=${session.user.image}&reaction=${reaction}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.user.passkey} ${session.user.email}`,
        },
      },
    )
      .then((response) => response.json())
      .then((data) => {
        setReactions(data.reactions)
        setHasReacted(data.userReactions)
      })
      .catch((error) => {
        console.error('Error updating likes:', error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  if (!session?.user) return null

  const reactionsMap: {
    name: 'heart' | 'unicorn' | 'confetti' | 'fireworks' | 'party'
    icon: string
    count: number
  }[] = [
    {
      name: 'heart',
      icon: '/heart.svg',
      count: reactions.heart,
    },

    {
      name: 'unicorn',
      icon: '/unicorn.svg',
      count: reactions.unicorn,
    },
    {
      name: 'confetti',
      icon: '/confetti.svg',
      count: reactions.confetti,
    },
    {
      name: 'fireworks',
      icon: '/fireworks.webp',
      count: reactions.fireworks,
    },
    {
      name: 'party',
      icon: '/party.jpg',
      count: reactions.party,
    },
  ]

  return (
    <ul className='flex items-center gap-1 relative'>
      {reactionsMap?.map((reaction) => (
        <Button
          onClick={() => handleReaction(reaction.name)}
          key={reaction.name}
          disabled={isLoading}
          variant="outline"
          className={`cursor-pointer flex items-center gap-1 px-2 disabled:opacity-50 hover:bg-transparent hover:border-violet-800 ${hasReacted[reaction.name] ? 'border-violet-500' : 'border-gray-500'}`}
        >
          <Image
            src={reaction.icon}
            alt={reaction.name}
            width={24}
            height={24}
          />
          <p className={hasReacted[reaction.name] ? 'text-violet-500' : 'text-gray-600'}>
            {reaction.count}
          </p>
        </Button>
      ))}
    </ul>
  )
}

export default Reactions
