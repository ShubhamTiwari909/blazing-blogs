import BackgroundDecoration from '@/components/ui/BackgroundDecoration'
import CollaboratorsList from './CollaboratorsList'
import Header from './Header'
import React, { Suspense } from 'react'
import CollaboratorSkeleton from './CollaboratorSkeleton'

const Collaborators = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <BackgroundDecoration />
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <Header />

          <Suspense fallback={<CollaboratorSkeleton />}>
            <CollaboratorsList />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default Collaborators
