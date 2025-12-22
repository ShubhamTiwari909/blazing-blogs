import { Metadata } from 'next'

export const METADATA: Metadata = {
  title: 'Blogs | Blazing Blogs',
  description:
    'A collection of blogs written by Shubham and his team mostly about web development and AI.',
  alternates: {
    canonical: 'https://blazing-blogs-frontend.vercel.app/blogs',
    languages: {
      'x-default': 'https://blazing-blogs-frontend.vercel.app/blogs',
    },
  },
  openGraph: {
    title: 'Blogs | Blazing Blogs',
    description:
      'A collection of blogs written by Shubham and his team mostly about web development and AI.',
    url: 'https://blazing-blogs-frontend.vercel.app/blogs',
  },
  twitter: {
    title: 'Blogs | Blazing Blogs',
    description:
      'A collection of blogs written by Shubham and his team mostly about web development and AI.',
  },
  robots: {
    index: true,
    follow: true,
  },
}
