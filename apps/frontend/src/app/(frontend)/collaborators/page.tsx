import { queryCollaborators } from '@/lib/fetch-utils/query-all-pages'
import Collaborators from '@/components/collaborators/Collaborators'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Collaborators | Blazing Blogs',
  description: 'Meet the amazing people who make this project possible',
  alternates: {
    canonical: 'https://blazing-blogs-frontend.vercel.app/collaborators',
    languages: {
      'x-default': 'https://blazing-blogs-frontend.vercel.app/collaborators',
    },
  },
  openGraph: {
    title: 'Collaborators | Blazing Blogs',
    description: 'Meet the amazing people who make this project possible',
    url: 'https://blazing-blogs-frontend.vercel.app/collaborators',
  },
  twitter: {
    title: 'Collaborators | Blazing Blogs',
    description: 'Meet the amazing people who make this project possible',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const CollaboratorsPage = async () => {
  const collaborators = await queryCollaborators()
  return <Collaborators collaborators={collaborators} />
}

export default CollaboratorsPage
