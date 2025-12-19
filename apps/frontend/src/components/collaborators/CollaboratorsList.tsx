import {
  CardAnimationWrapper,
  CardContainerAnimationWrapper,
} from '../ui/text-animation/AnimationWrappers'
import { Briefcase, Calendar, Mail, User } from 'lucide-react'
import type { CollaboratorsListProps } from './types'
import { contructImageUrl } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

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

const CollaboratorsList = ({ collaborators }: CollaboratorsListProps) => {
  return (
    <CardContainerAnimationWrapper className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {collaborators.docs.map((collaborator, index) => (
        <CardAnimationWrapper index={index} key={collaborator.id}>
          <div
            key={collaborator.id}
            className="group rounded-3xl border border-white/20 bg-white/70 p-8 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl dark:border-slate-700/20 dark:bg-slate-800/70"
          >
            <div className="mb-6 flex flex-col items-center">
              {collaborator.image && typeof collaborator.image === 'object' ? (
                <Image
                  src={contructImageUrl(collaborator.image._key as string)}
                  alt={collaborator.username}
                  width={100}
                  height={100}
                  className="h-40 w-40 rounded-full object-cover"
                />
              ) : (
                <>
                  <div
                    className={`inline-flex h-24 w-24 items-center justify-center bg-gradient-to-r ${getRandomGradient(index)} mb-4 rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110`}
                  >
                    <span className="text-3xl font-bold text-white">
                      {getInitials(collaborator.username)}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                    {collaborator.username}
                  </h3>
                </>
              )}
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <User className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span className="text-sm break-all">{collaborator.username}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span className="text-sm break-all">{collaborator.email}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <Briefcase className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span className="text-sm break-all">{collaborator.profession}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <Calendar className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                <span className="text-sm">
                  Joined{' '}
                  {new Date(collaborator.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>
            </div>

            <div className="mt-6 border-t border-slate-200 pt-6 dark:border-slate-700">
              <div className="flex items-center justify-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <span
                  className={`h-2 w-2 rounded-full ${collaborator.status === 'active' ? 'bg-green-500' : 'bg-red-500'} animate-pulse`}
                ></span>
                <span>
                  {collaborator.status === 'active'
                    ? 'Active Collaborator'
                    : 'Inactive Collaborator'}
                </span>
              </div>
            </div>
          </div>
        </CardAnimationWrapper>
      ))}
    </CardContainerAnimationWrapper>
  )
}

export default CollaboratorsList
