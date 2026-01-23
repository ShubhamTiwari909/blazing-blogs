import { PayloadSDK } from '@payloadcms/sdk'

export const sdk = new PayloadSDK({
  baseURL: `${process.env.NEXT_PUBLIC_SITE_URL}/api`,
})