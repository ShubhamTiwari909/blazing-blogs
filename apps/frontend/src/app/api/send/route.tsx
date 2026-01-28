import { html } from '@/components/subscribe/email-templates/welcome'
import { hashEmail } from '@/lib/hash-email'
import { getPostHogClient } from '@/lib/posthog-server'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const WELCOME_EMAIL_SENT_EVENT = 'welcome_email_sent'

export async function POST(req: Request) {
  const { email, name, analyticsConsent } = await req.json()

  if (!email || !name) {
    return NextResponse.json({ error: 'Email and name are required' }, { status: 400 })
  }

  const posthog = getPostHogClient()

  try {
    const { data, error } = await resend.emails.send({
      from: 'Blazing Blogs <onboarding@resend.dev>',
      to: [email],
      subject: 'Welcome to the blazing blogs newsletter',
      html: html(name),
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    if (analyticsConsent === true) {
      posthog.capture({
        distinctId: hashEmail(email),
        event: WELCOME_EMAIL_SENT_EVENT,
        properties: {
          name,
          source: 'api',
          sent_at: new Date().toISOString(),
        },
      })
      await posthog.flush()
    }

    return NextResponse.json({ success: true, data }, { status: 200 })
  } catch (error) {
    console.error('Email send error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
