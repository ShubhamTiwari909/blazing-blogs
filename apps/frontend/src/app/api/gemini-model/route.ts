import { GoogleGenAI } from '@google/genai'
import csrf from 'csrf'
import { NextResponse } from 'next/server'

const genAI = new GoogleGenAI({ apiKey: process.env.GOOGLE_GEMINI_API || '' })

const tokens = new csrf()
const secret = process.env.CSRF_SECRET || tokens.secretSync()

// Define the grounding tool
const groundingTool = {
  googleSearch: {},
}

// Configure generation settings
const config = {
  tools: [groundingTool],
}

/**
 * API route for generating content using Gemini AI model.
 */
export async function POST(req: Request): Promise<Response> {
  /**
   * Get the prompt from the request body.
   */
  const data = await req.json()
  const text = data.text || ''
  const prompt = `"Summarize the following blog in a clear, concise, and engaging way. Highlight the main idea, key points, and takeaways. The summary should be easy to skim, use simple language, and be suitable for readers who want a quick overview without reading the full blog. Keep it under 150 words. Blog content: ${text}`
  const token = data.csrfToken || ''

  // Validate CSRF token
  if (!tokens.verify(secret, token)) {
    return NextResponse.json({ error: 'Invalid CSRF token' }, { status: 403 })
  }

  /**
   * Use the Gemini AI model to generate content from the prompt.
   */
  const result = await genAI.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt,
    config,
  })

  /**
   * Return the generated content as a JSON response.
   */
  return new Response(
    JSON.stringify({
      summary: result.text,
    }),
  )
}
