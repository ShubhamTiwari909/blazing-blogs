// storage-adapter-import-placeholder
import { uploadthingStorage } from '@payloadcms/storage-uploadthing'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import path from 'path'

import { Collaborators } from './collections/Collaborators'
import { Subscribers } from './collections/Subscribers'
import { DevToBlogs } from './globals/DevToBlogs'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Page } from './collections/Page'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Page, Collaborators, Subscribers],
  globals: [DevToBlogs],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  plugins: [
    payloadCloudPlugin(),
    seoPlugin({
      generateTitle: () => `Personal Blog by Shubham`,
      generateDescription: () => `Personal Blog by Shubham`,
      generateURL: ({ doc }) => `https://blazing-blogs-frontend.vercel.app/${doc.slug}`,
    }),
    uploadthingStorage({
      collections: {
        media: true,
      },
      options: {
        token: process.env.UPLOADTHING_TOKEN,
        acl: 'public-read',
      },
    }),
  ],
})
