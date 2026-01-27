import { DatabaseProps } from '@/components/healthcheck/types'
import { Typography } from '@/components/atoms/typography'
import { Card } from './Card'

const Database = ({ database }: DatabaseProps) => {
  const { pages, media, users } = database
  return (
    <div className="mb-8">
      <Typography
        as="h2"
        variant="h2"
        size="xl"
        weight="bold"
        color="secondary"
        className="mb-6 text-center"
      >
        Database Collections
      </Typography>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card title="Pages" item={pages} icon="📄" />
        <Card title="Media" item={media} icon="🖼️" />
        <Card title="Users" item={users} icon="👥" />
      </div>
    </div>
  )
}

export default Database
