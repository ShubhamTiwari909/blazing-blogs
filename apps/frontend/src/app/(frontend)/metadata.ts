import type { Metadata } from "next";

export const METADATA: Metadata = {
    title: 'Blazing Blogs',
    description:
      'A passionate engineer and storyteller sharing insights on technology, creativity, and the journey of building meaningful digital experiences.',
    alternates: {
      canonical: 'https://blazing-blogs-frontend.vercel.app',
      languages: {
        'x-default': 'https://blazing-blogs-frontend.vercel.app',
      },
    },
    openGraph: {
      title: 'Blazing Blogs',
      description:
        'A passionate engineer and storyteller sharing insights on technology, creativity, and the journey of building meaningful digital experiences.',
      url: 'https://blazing-blogs-frontend.vercel.app',
    },
    twitter: {
      title: 'Blazing Blogs',
      description:
        'A passionate engineer and storyteller sharing insights on technology, creativity, and the journey of building meaningful digital experiences.',
    },
    robots: {
      index: true,
      follow: true,
    },
  }