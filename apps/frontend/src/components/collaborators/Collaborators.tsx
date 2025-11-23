import React from 'react'
import BackgroundDecoration from '@/components/ui/BackgroundDecoration'
import { Users } from 'lucide-react'
import type { CollaboratorsProps } from './types'
import Header from './Header'
import CollaboratorsList from './CollaboratorsList'

const Collaborators = ({ collaborators }: CollaboratorsProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <BackgroundDecoration />
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
         <Header />

          {collaborators?.docs && collaborators.docs.length > 0 ? (
            <CollaboratorsList collaborators={collaborators} />
          ) : (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-slate-200 dark:bg-slate-700 rounded-full mb-6">
                <Users className="w-12 h-12 text-slate-400 dark:text-slate-500" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                No Collaborators Yet
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                Check back later to meet our team
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Collaborators
