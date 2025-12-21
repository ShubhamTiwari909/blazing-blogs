import { StatusBadge } from '@/components/healthcheck/StatusBadge'
import type { CardProps } from '@/components/healthcheck/types'
import { Typography } from '@/components/atoms/typography'

export const Card = ({ title, item, icon }: CardProps) => (
  <div className="h-fit rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-shadow hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
    <div className="mb-4 flex items-center justify-between">
      <Typography
        as="h3"
        variant="h3"
        size="base"
        weight="semibold"
        color="secondary"
        className="flex items-center gap-2"
      >
        <Typography as="span" size="xxs" color="inherit" weight="medium">
          {icon}
        </Typography>
        {title}
      </Typography>
      <StatusBadge status={item.status} />
    </div>
    <div className="space-y-2">
      {item.total !== undefined && (
        <div className="flex items-center justify-between">
          <Typography as="p" size="xxs" color="inherit" weight="medium">
            Total
          </Typography>
          <Typography as="p" size="xxs" color="inherit" weight="bold">
            {item.total}
          </Typography>
        </div>
      )}
      {item.error && (
        <div className="mt-3 rounded-md bg-red-50 p-3 dark:bg-red-900/20">
          <Typography as="p" size="xxs" color="inherit" weight="medium" className="text-red-800">
            {item.error}
          </Typography>
        </div>
      )}
    </div>
  </div>
)
