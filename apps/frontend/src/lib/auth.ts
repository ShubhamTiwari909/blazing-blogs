import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import { decrypt } from '@repo/encryption/encrypt-decrypt'
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
      const response = await fetch(
        `${process.env.BACKEND_URL}/users/search?email=${session?.user?.email}`,
        {
          method: 'GET',
        },
      )
      const data = await response.json()
      const decryptPasskey = await decrypt(data.passkey, process.env.ENCRYPTION_SECRET!)
      session.user.passkey = decryptPasskey // Add passkey to session user object
      return session
    },
  },

  trustHost: true,
})
