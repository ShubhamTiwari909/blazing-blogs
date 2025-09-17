import { describe, it, expect, beforeAll } from 'vitest'
import { getPayload, Payload } from 'payload'
import config from '@/payload.config'

describe('API Tests', () => {
  let payload: Payload

  beforeAll(async () => {
    // Mock UploadThing for testing
    payload = await getPayload({ config: config })
  })

  it('should find users', async () => {
    const users = await payload.find({
      collection: 'users',
    })
    expect(users).toBeDefined()
    expect(users.docs).toBeInstanceOf(Array)
  })
})
