import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { slug, blogId } = await request.json()
    const cookieStore = await cookies()
    
    if (!slug) {
      return NextResponse.json(
        { error: 'Slug is required' }, 
        { status: 400 }
      )
    }
    
    // Also revalidate the specific path
    revalidatePath(`/${slug}`)
      // Overwrite with an expired cookie
    cookieStore.set(`aiSummary-${blogId}`, "", {
      path: "/",               // must match how it was originally set
      httpOnly: true,          // keep consistent
      secure: process.env.NODE_ENV === "production", 
      expires: new Date(0),    // epoch = immediately expired
    });
    
    return NextResponse.json({ 
      revalidated: true, 
      path: `/blogs/${slug}`,
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