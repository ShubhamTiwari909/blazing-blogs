import AnimationBox from '@/components/ui/animations/AnimationBox'
import { Typography } from '@/components/atoms/typography'
import { LuDock } from 'react-icons/lu'

import SearchInput from './SearchInput'

const Header = ({ totalDocs }: { totalDocs: number }) => {
  return (
    <div className="mb-16 text-center">
      <SearchInput />
      <AnimationBox className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
        <LuDock className="h-4 w-4" />
        {totalDocs} Blogs
      </AnimationBox>
      <AnimationBox>
        <Typography
          as="h1"
          variant="h1"
          size="5xl"
          weight="bold"
          className="mb-6 bg-gradient-to-r bg-clip-text text-center text-transparent"
        >
          Latest Blog Posts
        </Typography>
      </AnimationBox>
      <AnimationBox>
        <Typography
          as="p"
          size="base"
          color="inherit"
          className="mx-auto max-w-3xl text-center description"
        >
          Discover insights, tutorials, and stories from our community of passionate developers and
          creators
        </Typography>
      </AnimationBox>
    </div>
  )
}

export default Header
