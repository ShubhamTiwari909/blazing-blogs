import { GoogleGenAI } from '@google/genai'

const genAI = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API || '' })
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
export async function geminiSummary({ text }: { text: string }) {
  /**
   * Get the prompt from props.
   */
  const prompt = `"Summarize the following blog in a clear, concise, and engaging way. Highlight the main idea, key points, and takeaways. The summary should be easy to skim, use simple language, and be suitable for readers who want a quick overview without reading the full blog. Keep it under 150 words. Blog content: ${text}`

  /**
   * Use the Gemini AI model to generate content from the prompt.
   */
  const result = await genAI.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt,
    config,
  })

  /**
   * Return the generated content.
   */
  return result.text
}
