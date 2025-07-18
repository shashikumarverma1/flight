// store/useUserStore.ts
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

type User = {
  name: string
  email: string
}

type UserStore = {
  user: User | null
  setUser: (user: User) => void
  clearUser: () => void
}

const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: 'user-storage',
    //   storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => () => console.log('✅ Zustand store rehydrated'),
    }
  )
)

export default useUserStore
