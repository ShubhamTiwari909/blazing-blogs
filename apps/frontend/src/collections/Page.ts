import { lexicalEditor, LinkFeature } from '@payloadcms/richtext-lexical'
import { CollectionConfig } from 'payload'
import { slugFilter } from './utils/slugFilter'
import { generatePreviewPath } from './utils/generatePreviewPath'

export const Page: CollectionConfig = {
  slug: 'pages',
  folders: true,
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: slugFilter(data?.slug),
          collection: 'pages',
          req,
        })

        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: slugFilter(data?.slug),
        collection: 'pages',
        req,
      }),
  },
  fields: [
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'shortDescription',
      type: 'text',
      required: true,
    },
    {
      name: 'author',
      type: 'text',
      required: true,
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      label: 'Cover Image',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'blocks',
      type: 'blocks',
      required: true,
      blocks: [
        {
          slug: 'content',
          fields: [
            {
              name: 'content',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ defaultFeatures }) => [
                  ...defaultFeatures,
                  LinkFeature({
                    // Example showing how to customize the built-in fields
                    // of the Link feature
                    fields: ({ defaultFields }) => [
                      ...defaultFields,
                      {
                        name: 'rel',
                        label: 'Rel Attribute',
                        type: 'select',
                        hasMany: true,
                        options: ['noopener', 'noreferrer', 'nofollow'],
                        admin: {
                          description:
                            'The rel attribute defines the relationship between a linked resource and the current document. This is a custom link field.',
                        },
                      },
                    ],
                  }),
                ],
              }),
            },
          ],
        },
        {
          slug: 'codeBlock',
          fields: [
            {
              name: 'codeBlock',
              type: 'code',
            },
          ],
        },
      ],
    },
  ],
}
