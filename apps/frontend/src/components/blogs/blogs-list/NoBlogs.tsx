import { Typography } from '@/components/atoms/typography'

const NoBlogs = () => {
  return (
    <div className="py-12 text-center">
      <div className="text-lg text-gray-500">No blogs found</div>
      <Typography as="p" size="xxs" color="inherit" className="mt-2 text-gray-400">
        Check back later for new content!
      </Typography>
    </div>
  )
}

export default NoBlogs
