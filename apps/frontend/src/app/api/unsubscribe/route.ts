import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'


export async function POST(req: Request) {
    try {
        const { email } = await req.json()

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 })
        }

        const payload = await getPayload({ config })

        await payload.update({
            collection: 'subscribers',
            data: { isActive: false },
            where: { email: { equals: email } },
        })

        return NextResponse.json({ success: true })
    } catch (err) {
        console.error('Error subscribing to newsletter:', err)
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
    }
}