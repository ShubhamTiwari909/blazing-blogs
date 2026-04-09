import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'cloudUrl',
      type: 'text',
      label: 'Cloud URL',
      admin: {
        readOnly: true,
        description:
          'This is the URL that will be used to access the image in the cloud storage',
      },
      defaultValue: `https://570pc5yjce.ufs.sh/f/`,
      required: true,
      hooks: {
        afterRead: [
          ({ data }) => {
            if (data) {
              const baseUrl = 'https://570pc5yjce.ufs.sh/f/'
              data.cloudUrl = `${baseUrl}${data._key}`;
            }
          },
        ],
      },
    },
    {
      name:'type',
      label: 'Media Type',
      type:'text',
      required: true,
      admin: {
        readOnly: true,
      },
      hooks: {
        beforeValidate: [
          ({ data }) => {
            if (data) {
              data.type = data.mimeType
            }
          },
        ],
      },
    },
    {
      name: 'preview', // required
      type: 'ui', // required
      admin: {
        components: {
          Field: '@/components/payload/dashboard/ImagePreview',
        },
      },
    },
  ],
  upload: true,
  trash: true,
}
