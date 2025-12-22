import {
  CardAnimationWrapper,
  CardContainerAnimationWrapper,
} from '@/components/ui/animations/AnimationWrappers'

import type { CollaboratorsListProps } from './types'

import CollaboratorCard from './collaborator-card/Card'
import React from 'react'

const CollaboratorsList = ({ collaborators }: CollaboratorsListProps) => {
  return (
    <CardContainerAnimationWrapper className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {collaborators.docs.map((collaborator, index) => (
        <CardAnimationWrapper index={index} key={collaborator.id}>
          <CollaboratorCard collaborator={collaborator} index={index} />
        </CardAnimationWrapper>
      ))}
    </CardContainerAnimationWrapper>
  )
}

export default CollaboratorsList
