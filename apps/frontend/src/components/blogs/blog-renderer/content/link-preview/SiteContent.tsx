import { Typography } from '@/components/atoms/typography'
import { SiteContentProps } from './types'

const SiteContent = ({ title, description }: SiteContentProps) => {
  return (
    <div className="space-y-3">
      {title ? (
        <Typography
          as="h2"
          variant="h2"
          size="lg"
          weight="bold"
          color="primary"
          className="transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400"
        >
          {title}
        </Typography>
      ) : null}
      {description ? (
        <Typography as="p" size="xxs" color="secondary" className="line-clamp-4">
          {description}
        </Typography>
      ) : null}
    </div>
  )
}

export default SiteContent
