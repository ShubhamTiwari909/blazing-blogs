import React from 'react'
import { auth } from '@/lib/auth'
import { Session } from 'next-auth'
import Reactions from './Reactions'

const fetchReactionsCount = async ({ session, id }: { session: Session; id: string }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs/get/reactions?id=${id}&userEmail=${session.user.email}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session.user.passkey} ${session.user.email}`,
      },
    },
  )
  const data = await response.json()
  return data
}

const ReactionsWrapper = async ({ id }: { id: string }) => {
  const session = await auth()
  if (!session?.user) return null

  const reactionsCount = await fetchReactionsCount({ session, id })

  return <Reactions id={id} reactionCounts={reactionsCount.reactions} userReactions={reactionsCount.userReactions} />
}

export default ReactionsWrapper