import { getPostHogClient } from '@/lib/posthog-server'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { data } = await request.json()

    if (!data) {
      return NextResponse.json({ error: 'Data is required' }, { status: 400 })
    }

    const googleSheetUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL

    if (!googleSheetUrl) {
      return NextResponse.json({ error: 'Google Sheet URL is not configured' }, { status: 500 })
    }

    const response = await fetch(googleSheetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        rows: data,
      }),
    })

    const responseText = await response.text()

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to submit to Google Sheet', details: responseText },
        { status: response.status },
      )
    }

    // Capture server-side contact form submission event
    const posthog = getPostHogClient()
    const distinctId = data?.email || 'anonymous_google_sheet_form'
    posthog.capture({
      distinctId,
      event: 'google_sheet_submitted',
      properties: {
        source: 'api',
        submitted_at: new Date().toISOString(),
      },
    })

    return NextResponse.json({ success: true, message: responseText })
  } catch (err) {
    console.error('Error submitting to Google Sheet:', err)
    return NextResponse.json({ error: 'Failed to submit to Google Sheet' }, { status: 500 })
  }
}
