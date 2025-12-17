import { Tab } from 'payload'

export const FeatureFlags: Tab = {
  name: 'featureFlags',
  fields: [
    {
      name: 'reactions',
      label: 'Reactions',
      type: 'select',
      defaultValue: 'enabled',
      options: [
        {
          label: 'Enabled',
          value: 'enabled',
        },
        {
          label: 'Disabled',
          value: 'disabled',
        },
      ],
    },
    {
      name: 'views',
      label: 'Views',
      type: 'select',
      defaultValue: 'enabled',
      options: [
        {
          label: 'Enabled',
          value: 'enabled',
        },
        {
          label: 'Disabled',
          value: 'disabled',
        },
      ],
    },
  ],
}
