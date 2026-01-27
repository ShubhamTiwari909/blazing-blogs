import { Typography } from '@/components/atoms/typography'
import { auth } from '@/lib/auth'
import Link from 'next/link'

const QuickLinks = async () => {
  const session = await auth()
  const defaultNavItems = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blogs' },
    { name: 'Articles', href: '/articles' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Collaborators', href: '/collaborators' },
  ]

  const loggedInNavItems = [
    { name: 'Subscribe', href: '/subscribe' },
    process.env.ADMIN_EMAIL === session?.user.email
      ? { name: 'Health Check', href: '/healthcheck' }
      : {},
  ]
  const navItems = [...defaultNavItems, ...(session?.user.email ? loggedInNavItems : [])]
  return (
    <div>
      <Typography as="h3" variant="p" weight="semibold" color="white" className="mb-4">
        Quick Links
      </Typography>
      <ul className="space-y-3">
        {navItems.map((item) =>
          item.href ? (
            <li key={item.name}>
              <Link
                href={item.href}
                className="group relative inline-block text-slate-400 transition-colors duration-200 hover:text-white"
              >
                {item.name}
                <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300 group-hover:w-full"></div>
              </Link>
            </li>
          ) : null,
        )}
      </ul>
    </div>
  )
}

export default QuickLinks
