
import Reactions from './Reactions'
import { auth } from '@/lib/auth'
import React from 'react'
import { fetchReactionsCount } from './helpers'

const ReactionsWrapper = async ({ id }: { id: string }) => {
  const session = await auth()
  if (!session?.user) return null

  const reactionsCount = await fetchReactionsCount({ session, id })

  return (
    <Reactions
      id={id}
      reactionCounts={reactionsCount.reactions}
      userReactions={reactionsCount.userReactions}
    />
  )
}

export default ReactionsWrapper
