import { CollectionConfig } from 'payload'

export const Subscribers: CollectionConfig = {
    slug: 'subscribers',
    admin: {
        useAsTitle: 'email',
    },
    fields: [
        {
            name: 'email',
            type: 'email',
            required: true,
            unique: true,
            admin: {
                readOnly: true,
            }
        },
        {
            name: 'name',
            type: 'text',
            required: true,
            admin: {
                readOnly: true,
            }
        },
        {
            name: 'subscribedAt',
            type: 'date',
            defaultValue: () => new Date(),
            admin: {
                readOnly: true,
            }
        },
        {
            name: 'isActive',
            type: 'checkbox',
            defaultValue: true,
            admin: {
                readOnly: true,
            }
        },
    ],
}
