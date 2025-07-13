"use client"

import { createContext, useContext, ReactNode } from "react"
import { useSession } from "next-auth/react"
import type { AuthUser } from "@/types"

interface AuthContextType {
  user: AuthUser | null
  isLoading: boolean
  isAuthenticated: boolean
  isPremium: boolean
  isAnonymous: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const { data: session, status } = useSession()
  
  const isLoading = status === "loading"
  const isAuthenticated = !!session?.user
  const isAnonymous = !isAuthenticated
  
  const user: AuthUser | null = session?.user ? {
    id: session.user.id,
    name: session.user.name,
    email: session.user.email,
    image: session.user.image,
    isPremium: session.user.isPremium || false
  } : null
  
  const isPremium = user?.isPremium || false

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated,
    isPremium,
    isAnonymous
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}