import React from 'react'

import { Card } from '../Card'
import { DatabaseProps } from '../types'
import PagesLists from './PagesLists'

const Database = ({ database }: DatabaseProps) => {
  const { pages, media, users } = database
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
        Database Collections
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
