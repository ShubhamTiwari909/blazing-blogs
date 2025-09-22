import React from 'react'
import { auth } from '@/lib/auth'
import { Session } from 'next-auth'
import Likes from './Likes'

const fetchLikesCount = async ({ session, id }: { session: Session; id: string }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs//get/has-liked?id=${id}&userEmail=${session.user.email}`,
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

const LikesWrapper = async ({ id }: { id: string }) => {
  const session = await auth()
  if (!session?.user) return null

  const likesCount = await fetchLikesCount({ session, id })

  return <Likes id={id} likesCount={likesCount} />
}

export default LikesWrapper
