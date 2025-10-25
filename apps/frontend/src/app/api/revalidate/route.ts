import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { slug } = await request.json()
    
    if (!slug) {
      return NextResponse.json(
        { error: 'Slug is required' }, 
        { status: 400 }
      )
    }
    
    // Also revalidate the specific path
    revalidatePath(`/${slug}`)
    
    return NextResponse.json({ 
      revalidated: true, 
      path: `/${slug}`,
      timestamp: new Date().toISOString()
    })
  } catch (err) {
    console.error('Error revalidating:', err)
    return NextResponse.json(
      { error: 'Failed to revalidate' }, 
      { status: 500 }
    )
  }
}