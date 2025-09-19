import { lexicalEditor, LinkFeature } from '@payloadcms/richtext-lexical'
import { Tab } from 'payload'

export const Content: Tab = {
  name: 'content',
  fields: [
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
