import { getPostHogClient } from '@/lib/posthog-server'
import { NextResponse } from 'next/server'
import config from '@payload-config'
import { getPayload } from 'payload'

export async function POST(req: Request) {
  try {
    const { email, name } = await req.json()

    if (!email || !name) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const payload = await getPayload({ config })
    const posthog = getPostHogClient()

    const subscribed = await payload.find({
      collection: 'subscribers',
      where: { email: { equals: email } },
    })

    if (subscribed.docs.length > 0) {
      await payload.update({
        collection: 'subscribers',
        data: { isActive: true },
        where: { email: { equals: email } },
      })

      // Capture server-side reactivation event
      posthog.capture({
        distinctId: email,
        event: 'subscriber_reactivated',
        properties: {
          email,
          name,
          source: 'api',
        },
      })
    } else {
      await payload.create({
        collection: 'subscribers',
        data: { email, name },
      })

      // Capture server-side new subscriber event
      posthog.capture({
        distinctId: email,
        event: 'subscriber_created',
        properties: {
          email,
          name,
          source: 'api',
        },
      })

      // Identify user on server side
      posthog.identify({
        distinctId: email,
        properties: {
          email,
          name,
          subscribed_at: new Date().toISOString(),
        },
      })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Error subscribing to newsletter:', err)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const email = searchParams.get('email')
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }
    const payload = await getPayload({ config })
    const subscribers = await payload.find({
      collection: 'subscribers',
      where: { email: { equals: email } },
    })
    return NextResponse.json(subscribers)
  } catch (err) {
    console.error('Error getting subscribers:', err)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
