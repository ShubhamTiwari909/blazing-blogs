'use client'
import { Typography } from '@/components/atoms/typography'
import { Button } from '@/components/ui/Button'
import { useReactions } from './useReactions'
import type { ReactionsProps } from './types'
import { generateReactionMap } from './data'
import Image from 'next/image'
import React from 'react'

const Reactions = ({ id, userReactions, reactionCounts }: ReactionsProps) => {
  const { reactions, hasReacted, isPending, error, mutate } = useReactions({
    id,
    userReactions,
    reactionCounts,
  })
  const reactionsMap = generateReactionMap(reactions)

  return (
    <ul className="relative flex flex-wrap items-center gap-1">
      {reactionsMap?.map((reaction) => (
        <Button
          onClick={() => mutate({ reaction: reaction.name })}
          key={reaction.name}
          disabled={isPending}
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
      {error ? (
        <Typography
          as="p"
          size="xxs"
          color="inherit"
          className="absolute right-0 -bottom-4 z-100 w-full text-xs text-red-500 lg:right-5 lg:-bottom-7"
        >
          {error?.message ? 'Error updating, please try again later' : null}
        </Typography>
      ) : null}
    </ul>
  )
}

export default Reactions
