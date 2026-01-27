import { Typography } from '@/components/atoms/typography'
import { StaticPage, StaticPagesProps } from './types'
import { StatusBadge } from './StatusBadge'

const StaticPages = ({ staticPages }: StaticPagesProps) => {
  return (
    <div>
      <Typography
        as="h2"
        variant="h2"
        size="xl"
        weight="bold"
        color="secondary"
        className="mb-6 text-center"
      >
        Static Pages
      </Typography>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {staticPages.map((page: StaticPage) => (
          <div
            key={page.url}
            className="rounded-lg border border-gray-200 bg-white p-5 shadow-md transition-shadow hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="mb-3 flex items-start justify-between">
              <Typography
                as="h3"
                variant="h3"
                size="base"
                weight="semibold"
                color="secondary"
                className="text-center"
              >
                {page.name}
              </Typography>
              <StatusBadge status={page.status} />
            </div>
            <div className="space-y-2">
              <div>
                <Typography
                  as="p"
                  size="xs"
                  color="inherit"
                  weight="medium"
                  className="mb-1 text-gray-500 uppercase"
                >
                  URL
                </Typography>
                <Typography
                  as="p"
                  size="xxs"
                  color="inherit"
                  weight="medium"
                  className="font-mono text-sm break-all text-gray-700"
                >
                  {page.url}
                </Typography>
              </div>
              <Typography
                as="p"
                size="xs"
                color="inherit"
                weight="medium"
                className={`text-sm ${page.status === 'OK' ? 'text-green-700' : 'text-red-700'}`}
              >
                {page.message}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StaticPages
