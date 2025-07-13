"use client"

import { cn } from "@/lib/utils"

interface LoadingSpinnerProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function LoadingSpinner({ className, size = "md" }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6", 
    lg: "w-8 h-8"
  }

  return (
    <div className={cn("animate-spin rounded-full border-2 border-gray-300 border-t-primary", sizeClasses[size], className)} />
  )
}

interface LoadingStateProps {
  children?: React.ReactNode
  className?: string
}

export function LoadingState({ children, className }: LoadingStateProps) {
  return (
    <div className={cn("flex items-center justify-center py-12", className)}>
      <div className="text-center">
        <LoadingSpinner size="lg" className="mx-auto mb-4" />
        {children && (
          <p className="text-muted-foreground">{children}</p>
        )}
      </div>
    </div>
  )
}

interface ErrorStateProps {
  error: string
  onRetry?: () => void
  className?: string
}

export function ErrorState({ error, onRetry, className }: ErrorStateProps) {
  return (
    <div className={cn("flex items-center justify-center py-12", className)}>
      <div className="text-center max-w-md">
        <div className="text-red-500 mb-4">
          <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold mb-2">Error al cargar datos</h3>
        <p className="text-muted-foreground mb-4">{error}</p>
        {onRetry && (
          <button 
            onClick={onRetry}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Reintentar
          </button>
        )}
      </div>
    </div>
  )
}