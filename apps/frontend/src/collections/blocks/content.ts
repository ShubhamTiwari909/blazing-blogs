import { FixedToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
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
      label: 'Tags',
      labels: {
        singular: 'Tag',
        plural: 'Tags',
      },
      admin: {
        components: {
          RowLabel: {
            path: '@/components/payload/dashboard/ArrayRowLabel',
            clientProps: {
              label: 'tag',
            },
          },
        },
      },
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
      filterOptions: {
        mimeType: {
          contains: 'image',
        },
      },
    },
    {
      name: 'aiSummary',
      type: 'text',
      label: 'AI Summary',
      admin: {
        readOnly: true,
        components: {
          afterInput: ['@/components/payload/dashboard/ai-summary/GeminiFieldSummary'],
        },
      },
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
                  FixedToolbarFeature({
                    applyToFocusedEditor: true,
                  }),
                ],
              }),
            },
          ],
        },
        {
          slug: 'pdfUpload',
          fields: [
            {
              name: 'pdfUpload',
              type: 'upload',
              label: 'PDF Upload',
              relationTo: 'media',
              required: true,
              filterOptions: {
                mimeType: {
                  contains: 'application/pdf',
                },
              },
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
        {
          slug: 'linkPreview',
          fields: [
            {
              name: 'link',
              type: 'text',
              label: 'Link',
              required: true,
            },
            {
              name: 'preview',
              type: 'json',
              label: 'Preview',
              admin: {
                readOnly: true,
              },
              hooks: {
                beforeValidate: [
                  async ({ data, siblingData, value }) => {
                    if (siblingData?.link && data) {
                      const response = await fetch(
                        `${process.env.NEXT_PUBLIC_SITE_URL}/api/url-preview?url=${encodeURIComponent(siblingData?.link)}`,
                      )
                      const responseData = await response.json()
                      value = responseData
                      return value
                    }
                    return null
                  },
                ],
              },
            },
          ],
        },
        {
          slug: 'ytIframe',
          labels: {
            singular: 'Youtube Iframe',
            plural: 'Youtube Iframes',
          },
          fields: [
            {
              name: 'ytIframe',
              type: 'text',
              label: 'YT Iframe',
              admin: {
                description: 'Add a Youtube link',
              },
            },
          ],
        },
      ],
    },
  ],
}
