import BackgroundDecoration from '@/components/ui/BackgroundDecoration'
import { Typography } from '@/components/atoms/typography'
import CollaboratorsList from './CollaboratorsList'
import type { CollaboratorsProps } from './types'
import { Users } from 'lucide-react'
import Header from './Header'
import React from 'react'

const Collaborators = ({ collaborators }: CollaboratorsProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <BackgroundDecoration />
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <Header />

          {collaborators?.docs && collaborators.docs.length > 0 ? (
            <CollaboratorsList collaborators={collaborators} />
          ) : (
            <div className="py-20 text-center">
              <div className="mb-6 inline-flex h-24 w-24 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700">
                <Users className="h-12 w-12 text-slate-400 dark:text-slate-500" />
              </div>
              <Typography
                as="h2"
                variant="h2"
                size="2xl"
                weight="bold"
                color="secondary"
                className="mb-2 text-center"
              >
                No Collaborators Yet
              </Typography>
              <Typography as="p" size="xxs" color="inherit" className="text-slate-600">
                Check back later to meet our team
              </Typography>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Collaborators
