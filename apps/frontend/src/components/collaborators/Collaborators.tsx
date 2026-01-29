import BackgroundDecoration from '@/components/ui/BackgroundDecoration'
import CollaboratorSkeleton from './CollaboratorSkeleton'
import CollaboratorsList from './CollaboratorsList'
import React, { Suspense } from 'react'
import Header from './Header'
import CollaboratorClientWrapper from './CollaboratorClientWrapper'

const Collaborators = () => {
  return (
    <CollaboratorClientWrapper>
      <div className="min-h-screen">
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
    </CollaboratorClientWrapper>
  )
}

export default Collaborators
