import { Typography } from '@/components/atoms/typography'
import { Link } from '@payloadcms/ui'

const About = () => {
  return (
    <div>
      <Typography as="h3" variant="p" weight="semibold" color="white" className="mb-4">
        About
      </Typography>
      <Typography as="p" size="xxs" color="inherit" className="mb-4 text-slate-400">
        I believe in the power of code to solve real-world problems and create meaningful
        connections.
      </Typography>
      <Link
        href="/contact"
        className="inline-block rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg"
      >
        Contact Me
      </Link>
    </div>
  )
}

export default About
