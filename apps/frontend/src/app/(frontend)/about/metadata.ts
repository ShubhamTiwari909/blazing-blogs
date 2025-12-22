import { Metadata } from 'next'

export const METADATA: Metadata = {
  title: 'About Me | Blazing Blogs',
  description:
    'Passionate full-stack developer crafting digital experiences that make a difference. I believe in the power of code to solve real-world problems and create meaningful connections.',
  alternates: {
    canonical: 'https://blazing-blogs-frontend.vercel.app/about',
    languages: {
      'x-default': 'https://blazing-blogs-frontend.vercel.app/about',
    },
  },
  openGraph: {
    title: 'About Me | Blazing Blogs',
    description:
      'Passionate full-stack developer crafting digital experiences that make a difference. I believe in the power of code to solve real-world problems and create meaningful connections.',
    url: 'https://blazing-blogs-frontend.vercel.app/about',
  },
  twitter: {
    title: 'About Me | Blazing Blogs',
    description:
      'Passionate full-stack developer crafting digital experiences that make a difference. I believe in the power of code to solve real-world problems and create meaningful connections.',
  },
  robots: {
    index: true,
    follow: true,
  },
}
