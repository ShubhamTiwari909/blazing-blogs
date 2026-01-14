import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { data } = await request.json()

    if (!data) {
      return NextResponse.json({ error: 'Data is required' }, { status: 400 })
    }

    const googleSheetUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL

    if (!googleSheetUrl) {
      return NextResponse.json(
        { error: 'Google Sheet URL is not configured' },
        { status: 500 }
      )
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

    const responseText = await response.text();

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to submit to Google Sheet', details: responseText },
        { status: response.status }
      )
    }

    return NextResponse.json({ success: true, message: responseText })
  } catch (err) {
    console.error('Error submitting to Google Sheet:', err)
    return NextResponse.json(
      { error: 'Failed to submit to Google Sheet' },
      { status: 500 }
    )
  }
}
