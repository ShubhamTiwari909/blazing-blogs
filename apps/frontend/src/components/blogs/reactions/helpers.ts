import type { FetchReactionsCountProps, UpdateReactionProps } from "./types"

export const fetchReactionsCount = async ({ session, id }: FetchReactionsCountProps) => {
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

export const updateReaction = async ({ user, id, reaction }: UpdateReactionProps) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs/update/reaction`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user?.passkey} ${user?.email}`,
        },
        body: JSON.stringify({
          id,
          userName: user?.name,
          userEmail: user?.email,
          userImage: user?.image,
          reaction,
        }),
      })
    const data = await response.json()
    return data
}