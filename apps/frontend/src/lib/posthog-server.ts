import { PostHog } from 'posthog-node'

let posthogClient: PostHog | null = null

export function getPostHogClient() {
  if (!posthogClient) {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY
    if (!key) {
      console.warn('PostHog disabled: NEXT_PUBLIC_POSTHOG_KEY missing')
      return {
        capture: () => {},
        identify: () => {},
        shutdown: async () => {},
      } as unknown as PostHog
    }
    posthogClient = new PostHog(key, {
      host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      flushAt: 1,
      flushInterval: 0,
    })
  }
  return posthogClient
}
export async function shutdownPostHog() {
  if (posthogClient) {
    await posthogClient.shutdown()
  }
}
