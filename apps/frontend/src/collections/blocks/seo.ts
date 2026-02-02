import {
  MetaTitleField,
  MetaDescriptionField,
  MetaImageField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

import type { Tab } from 'payload'

export const SeoTab: Tab = {
  name: 'seo',
  label: 'SEO',
  interfaceName: 'Seo',
  fields: [
    OverviewField({
      titlePath: 'meta.title',
      descriptionPath: 'meta.description',
      imagePath: 'meta.image',
    }),
    MetaTitleField({
      hasGenerateFn: true,
      overrides: {
        required: true,
      },
    }),
    MetaImageField({
      relationTo: 'media',
      overrides: {
        required: true,
        filterOptions: {
          mimeType: {
            contains: 'image',
          },
        },
      },
    }),
    MetaDescriptionField({
      hasGenerateFn: true,
      overrides: {
        required: true,
      },
    }),
    PreviewField({
      hasGenerateFn: true,
      titlePath: 'meta.title',
      descriptionPath: 'meta.description',
    }),
  ],
}
