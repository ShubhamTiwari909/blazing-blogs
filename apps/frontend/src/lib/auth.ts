import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import { randomBytes } from 'node:crypto'

/**
 * Configuration for NextAuth authentication.
 * Sets up providers and handles user sign-in with additional user registration.
 */
export const { auth, handlers, signIn, signOut } = NextAuth({
  // Authentication providers
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }), // Google provider for authentication
  ],
  // Secret key for encrypting session data
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    signIn: async ({ user }) => {
      await fetch(`${process.env.BACKEND_URL}/users/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...user, passkey: generatePasskey() }),
      })
      return true // Allow sign-in to proceed
    },
    session: async ({ session }) => {
      const response = await fetch(
        `${process.env.BACKEND_URL}/users/search?email=${session?.user?.email}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      const data = await response.json()
      session.user.passkey = data.passkey // Add passkey to session user object
      return session
    },
  },

  trustHost: true,
})

/**
 * Generate a cryptographically-strong random passkey.
 *
 * @param bytes Number of random bytes (32 bytes ≈ 256 bits). Use ≥16.
 * @param encoding "base64url" (default) | "hex"
 */
export function generatePasskey(bytes = 32, encoding: 'base64url' | 'hex' = 'base64url'): string {
  const buf = randomBytes(bytes)
  return encoding === 'hex' ? buf.toString('hex') : buf.toString('base64url') // URL-safe, no padding
}
