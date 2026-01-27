import EstimateReading from '@/components/blogs/blogs-list/card/EstimateReading'
import ReactionsWrapper from '@/components/blogs/reactions/ReactionsWrapper'
import type { MetadataProps } from '@/components/blogs/blog-renderer/types'
import AiAnalysis from '@/components/blogs/ai-analysis/AiAnalysis'
import ViewsWrapper from '@/components/blogs/views/ViewsWrapper'
import { Typography } from '@/components/atoms/typography'
import Tags from '@/components/blogs/blog-renderer/Tags'
import { LuCalendarDays, LuUser } from 'react-icons/lu'

const Metadata = async ({
  id,
  author,
  createdAt,
  tags,
  aiSummary,
  blocks,
  featureFlags,
}: MetadataProps) => {
  return (
    <div className="space-y-10 border-b border-gray-200 pb-8">
      <div className="flex flex-wrap items-center gap-6">
        {author ? (
          <div className="flex items-center">
            <LuUser className="mr-2 h-5 w-5" />
            <Typography as="p" size="xxs" color="inherit" weight="medium">
              {author}
            </Typography>
          </div>
        ) : null}

        <div className="flex items-center">
          <LuCalendarDays className="mr-2 h-5 w-5" />
          <time dateTime={createdAt}>
            {new Date(createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>

        {tags && tags.length > 0 ? <Tags tags={tags} /> : null}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          {featureFlags?.views === 'enabled' ? <ViewsWrapper id={id} /> : null}
          {featureFlags?.reactions === 'enabled' ? <ReactionsWrapper id={id} /> : null}
        </div>
        <div className="flex items-center gap-4">
          <EstimateReading data={blocks} />
          {aiSummary ? <AiAnalysis aiSummary={aiSummary} /> : null}
        </div>
      </div>
    </div>
  )
}

export default Metadata
