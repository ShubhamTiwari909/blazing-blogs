'use client'
import { Heart } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { Button } from '../ui/button'

const Likes = ({ id }: { id: string }) => {
  const { data: session } = useSession()
  const [likes, setLikes] = useState(0)
  const [hasLiked, setHasLiked] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!session?.user?.email || !session?.user?.name || !session?.user?.image) return
    fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs/get/likes?id=${id}&userEmail=${session.user.email}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.user.passkey} ${session.user.email}`,
        },
      },
    )
      .then((response) => response.json())
      .then((data) => {
        setLikes(data.likes)
        setHasLiked(data.hasLiked)
      })
      .catch((error) => {
        console.error('Error updating likes:', error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [id, session?.user?.email, session?.user?.name, session?.user?.image, session?.user?.passkey])

  const handleLike = () => {
    if (!session?.user?.email || isLoading) return

    setIsLoading(true)
    fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs/update/likes?id=${id}&userName=${session.user.name}&userEmail=${session.user.email}&userImage=${session.user.image}`,
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
        setLikes(data.likes)
        setHasLiked(data.hasLiked)
      })
      .catch((error) => {
        console.error('Error updating likes:', error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  if (!session?.user) return null

  return (
    <Button
      onClick={handleLike}
      disabled={isLoading}
      variant="outline"
      className="cursor-pointer flex items-center gap-1 hover:opacity-80 transition-opacity disabled:opacity-50"
    >
      <Heart
        className={`w-4 h-4 ${
          hasLiked ? 'text-red-500 fill-red-500' : 'text-gray-600 hover:text-red-500'
        }`}
      />
      <p className={hasLiked ? 'text-red-500' : 'text-gray-600'}>{likes}</p>
    </Button>
  )
}

export default Likes
