import {
  CardAnimationWrapper,
  CardContainerAnimationWrapper,
} from '@/components/ui/animations/AnimationWrappers'

import { queryCollaborators } from '@/lib/fetch-utils/query-all-pages'
import CollaboratorCard from './collaborator-card/Card'
import { Typography } from '../atoms/typography'
import { LuUsers } from 'react-icons/lu'
import React from 'react'

const CollaboratorsList = async () => {
  const collaborators = await queryCollaborators()

  if (!collaborators?.docs || collaborators.docs.length === 0) {
    return (
      <div className="py-20 text-center">
        <div className="mb-6 inline-flex h-24 w-24 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700">
          <LuUsers className="h-12 w-12 text-slate-400 dark:text-slate-500" />
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
    )
  }

  return (
    <CardContainerAnimationWrapper className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {collaborators?.docs?.map((collaborator, index) => (
        <CardAnimationWrapper index={index} key={collaborator.id}>
          <CollaboratorCard collaborator={collaborator} index={index} />
        </CardAnimationWrapper>
      ))}
    </CardContainerAnimationWrapper>
  )
}

export default CollaboratorsList
