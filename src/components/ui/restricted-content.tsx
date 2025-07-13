"use client"

import { signIn } from "next-auth/react"
import { Button } from "./button"
import { Terminal, PromptPreview } from "./terminal"
import { useAuth } from "@/contexts/auth-context"
import { LogIn, Crown, Eye } from "lucide-react"

interface RestrictedContentProps {
  content: string
  preview: string
  isPremium?: boolean
  title?: string
  className?: string
}

export function RestrictedContent({ 
  content, 
  preview, 
  isPremium = false, 
  title = "Prompt",
  className 
}: RestrictedContentProps) {
  const { user, isAuthenticated, isPremium: userIsPremium, isAnonymous } = useAuth()

  // Usuario anónimo - solo preview
  if (isAnonymous) {
    return (
      <div className={className}>
        <PromptPreview preview={preview} isLoggedIn={false} />
        <div className="mt-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900">
          <div className="flex items-center gap-2 mb-2">
            <Eye className="h-5 w-5 text-gray-500" />
            <span className="font-medium text-gray-700 dark:text-gray-300">
              Vista previa
            </span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            Inicia sesión para ver el prompt completo y acceder a más funciones.
          </p>
          <div className="flex gap-2">
            <Button 
              onClick={() => signIn('google')}
              size="sm"
              className="flex items-center gap-2"
            >
              <LogIn className="h-4 w-4" />
              Iniciar con Google
            </Button>
            <Button 
              onClick={() => signIn('github')}
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <LogIn className="h-4 w-4" />
              Iniciar con GitHub
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // Usuario autenticado pero contenido premium
  if (isAuthenticated && isPremium && !userIsPremium) {
    return (
      <div className={className}>
        <PromptPreview preview={preview} isLoggedIn={true} />
        <div className="mt-4 p-4 border border-amber-200 dark:border-amber-700 rounded-lg bg-amber-50 dark:bg-amber-900/20">
          <div className="flex items-center gap-2 mb-2">
            <Crown className="h-5 w-5 text-amber-600" />
            <span className="font-medium text-amber-800 dark:text-amber-300">
              Contenido Premium
            </span>
          </div>
          <p className="text-sm text-amber-700 dark:text-amber-400 mb-3">
            Este prompt es exclusivo para usuarios premium. Actualiza tu cuenta para acceder.
          </p>
          <Button 
            size="sm"
            className="bg-amber-600 hover:bg-amber-700 text-white"
          >
            <Crown className="h-4 w-4 mr-2" />
            Obtener Premium
          </Button>
        </div>
      </div>
    )
  }

  // Usuario tiene acceso - mostrar contenido completo
  return (
    <div className={className}>
      <Terminal title={title} showCopy={true}>
        {content}
      </Terminal>
    </div>
  )
}