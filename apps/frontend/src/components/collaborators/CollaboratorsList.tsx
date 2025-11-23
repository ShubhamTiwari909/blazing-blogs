import React from 'react'
import type { CollaboratorsListProps } from './types'
import Image from 'next/image'
import { contructImageUrl } from '@/lib/utils'
import { Calendar, Mail } from 'lucide-react'

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
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {collaborators.docs.map((collaborator, index) => (
        <div
          key={collaborator.id}
          className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 dark:border-slate-700/20 hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
        >
          <div className="flex flex-col items-center mb-6">
            {collaborator.image && typeof collaborator.image === 'object' ? (
              <Image
                src={contructImageUrl(collaborator.image._key as string)}
                alt={collaborator.username}
                width={100}
                height={100}
                className="object-cover w-40 h-40 rounded-full"
              />
            ) : (
              <>
                <div
                  className={`inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r ${getRandomGradient(index)} rounded-full shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-3xl font-bold text-white">
                    {getInitials(collaborator.username)}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {collaborator.username}
                </h3>
              </>
            )}
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
              <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-sm break-all">{collaborator.email}</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
              <Calendar className="w-5 h-5 text-purple-600 dark:text-purple-400" />
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

          <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span>Active Collaborator</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CollaboratorsList
