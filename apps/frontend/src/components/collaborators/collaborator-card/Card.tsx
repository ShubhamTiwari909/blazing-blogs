import React from 'react'
import { Typography } from '@/components/atoms/typography'
import { CollaboratorCardProps } from './types'
import CollaboratorImage from './Image'
import type { Media } from '@/payload-types'
import Content from './Content'

const CollaboratorCard = ({ collaborator, index }: CollaboratorCardProps) => {
  return (
    <div
            key={collaborator.id}
            className="group rounded-3xl border border-white/20 bg-white/70 p-8 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl dark:border-slate-700/20 dark:bg-slate-800/70"
          >
            <CollaboratorImage image={collaborator.image as Media} username={collaborator.username} index={index} />
            <Content username={collaborator.username} email={collaborator.email} profession={collaborator.profession} createdAt={collaborator.createdAt} />

            <div className="mt-6 border-t border-slate-200 pt-6 dark:border-slate-700">
              <div className="flex items-center justify-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <div
                  className={`h-2 w-2 rounded-full ${collaborator.status === 'active' ? 'bg-green-500' : 'bg-red-500'} animate-pulse`}
                />
                <Typography as="p" size="xxs" color="inherit" weight="medium">
                  {collaborator.status === 'active'
                    ? 'Active Collaborator'
                    : 'Inactive Collaborator'}
                </Typography>
              </div>
            </div>
          </div>
  )
}

export default CollaboratorCard