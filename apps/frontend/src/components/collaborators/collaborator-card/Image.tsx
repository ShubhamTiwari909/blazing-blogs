import { Typography } from '@/components/atoms/typography'
import { contructImageUrl } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import { CollaboratorImageProps } from './types'


const getInitials = (username: string) => {
    return username
      .split(' ')
      .map((name) => name[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }
  
  const getRandomGradient = (index: number) => {
    const gradients = [
      'from-blue-500 to-blue-600',
      'from-purple-500 to-purple-600',
      'from-pink-500 to-pink-600',
      'from-indigo-500 to-indigo-600',
      'from-green-500 to-green-600',
      'from-orange-500 to-orange-600',
      'from-cyan-500 to-cyan-600',
      'from-rose-500 to-rose-600',
    ]
    return gradients[index % gradients.length]
  }

  
const CollaboratorImage = ({ image, username, index }: CollaboratorImageProps) => {
  return (
    <div className="mb-6 flex flex-col items-center">
    {image && typeof image === 'object' ? (
      <Image
        src={contructImageUrl(image._key as string)}
        alt={username}
        width={100}
        height={100}
        className="h-40 w-40 rounded-full object-cover"
      />
    ) : (
      <>
        <div
          className={`inline-flex h-24 w-24 items-center justify-center bg-gradient-to-r ${getRandomGradient(index)} mb-4 rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110`}
        >
          <Typography as="span" size="sm" color="white" weight="medium">
            {getInitials(username)}
          </Typography>
        </div>
        <Typography
          as="h3"
          variant="h3"
          size="base"
          weight="semibold"
          color="secondary"
          className="text-center transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400"
        >
          {username}
        </Typography>
      </>
    )}
  </div>
  )
}

export default CollaboratorImage