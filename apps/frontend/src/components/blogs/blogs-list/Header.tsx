import AnimationBox from '@/components/ui/animations/AnimationBox'
import { Typography } from '@/components/atoms/typography'

import SearchInput from './SearchInput'

const Header = () => {
  return (
    <div className="mb-16 text-center">
      <SearchInput />
      <AnimationBox>
        <Typography
          as="h1"
          variant="h1"
          size="5xl"
          weight="bold"
          className="mb-6 bg-linear-to-r bg-clip-text text-center text-transparent"
        >
          Latest Blog Posts
        </Typography>
      </AnimationBox>
      <AnimationBox>
        <Typography
          as="p"
          size="base"
          color="inherit"
          className="description mx-auto max-w-3xl text-center"
        >
          Discover insights, tutorials, and stories from our community of passionate developers and
          creators
        </Typography>
      </AnimationBox>
    </div>
  )
}

export default Header
