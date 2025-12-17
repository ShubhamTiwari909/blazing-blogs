import React from 'react'

import { DatabaseProps } from '@/components/healthcheck/types'
import PagesLists from './PagesLists'
import { Card } from './Card'

const Database = ({ database }: DatabaseProps) => {
  const { pages, media, users } = database
  return (
    <div className="mb-8">
      <h2 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-gray-100">
        Database Collections
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div>
          <Card title="Pages" item={pages} icon="📄" />
          {pages.slugs ? <PagesLists pages={pages} /> : null}
        </div>
        <Card title="Media" item={media} icon="🖼️" />
        <Card title="Users" item={users} icon="👥" />
      </div>
    </div>
  )
}

export default Database
