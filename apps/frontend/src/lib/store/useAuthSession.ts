import { devtools } from 'zustand/middleware'
import type { AuthSessionState } from './types'
import { create } from 'zustand'

export const useAuthSessionStore = create<AuthSessionState>()(
  devtools(
    (set) => ({
        sessionClient: null,
        setSessionClient: (sessionClient) => set({ sessionClient }),
        status: 'loading',
        setStatus: (status) => set({ status }),
    }),
  ),
)