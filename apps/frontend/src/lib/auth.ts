import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import { encrypt } from './encryption'
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
        body: JSON.stringify({ ...user }),
      })
      return true // Allow sign-in to proceed
    },
    session: async ({ session }) => {
      const encryptedEmail = await encrypt(session?.user?.email, process.env.ENCRYPTION_SECRET!)
      const response = await fetch(
        `${process.env.BACKEND_URL}/users/search?email=${encryptedEmail}`,
      )
      const data = await response.json()
      console.log(data)

      session.user.passkey = data.passkey
      console.log(session)

      return session
    },
  },

  trustHost: true,
})
