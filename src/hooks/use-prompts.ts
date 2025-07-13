"use client"

import { useState, useEffect, useCallback } from 'react'
import type { Prompt, Category, AITool, PaginatedResponse } from '@/types'

interface UsePromptsParams {
  page?: number
  limit?: number
  category?: string
  aiTool?: string
  search?: string
  premium?: boolean
}

interface UsePromptsReturn {
  prompts: Prompt[]
  loading: boolean
  error: string | null
  total: number
  hasMore: boolean
  refetch: () => void
}

export function usePrompts(params: UsePromptsParams = {}): UsePromptsReturn {
  const [prompts, setPrompts] = useState<Prompt[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [total, setTotal] = useState(0)
  const [hasMore, setHasMore] = useState(false)

  const fetchPrompts = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)

      const searchParams = new URLSearchParams()
      
      if (params.page) searchParams.set('page', params.page.toString())
      if (params.limit) searchParams.set('limit', params.limit.toString())
      if (params.category) searchParams.set('category', params.category)
      if (params.aiTool) searchParams.set('aiTool', params.aiTool)
      if (params.search) searchParams.set('search', params.search)
      if (params.premium !== undefined) searchParams.set('premium', params.premium.toString())

      const response = await fetch(`/api/prompts?${searchParams}`)
      
      if (!response.ok) {
        throw new Error('Error al cargar prompts')
      }

      const data: PaginatedResponse<Prompt> = await response.json()
      
      setPrompts(data.data)
      setTotal(data.total)
      setHasMore(data.hasMore)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido')
    } finally {
      setLoading(false)
    }
  }, [params.page, params.limit, params.category, params.aiTool, params.search, params.premium])

  useEffect(() => {
    fetchPrompts()
  }, [fetchPrompts])

  return {
    prompts,
    loading,
    error,
    total,
    hasMore,
    refetch: fetchPrompts,
  }
}

// Hook para obtener un prompt específico
export function usePrompt(id: string) {
  const [prompt, setPrompt] = useState<Prompt | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return

    const fetchPrompt = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch(`/api/prompts/${id}`)
        
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Prompt no encontrado')
          }
          throw new Error('Error al cargar prompt')
        }

        const data = await response.json()
        setPrompt(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido')
      } finally {
        setLoading(false)
      }
    }

    fetchPrompt()
  }, [id])

  return { prompt, loading, error }
}

// Hook para categorías
export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch('/api/categories')
        
        if (!response.ok) {
          throw new Error('Error al cargar categorías')
        }

        const data = await response.json()
        setCategories(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido')
      } finally {
        setLoading(false)
      }
    }

    fetchCategories()
  }, [])

  return { categories, loading, error }
}

// Hook para herramientas IA
export function useAITools() {
  const [aiTools, setAITools] = useState<AITool[]>([])
  const [grouped, setGrouped] = useState<Record<string, AITool[]>>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchAITools = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch('/api/ai-tools')
        
        if (!response.ok) {
          throw new Error('Error al cargar herramientas IA')
        }

        const data = await response.json()
        setAITools(data.tools)
        setGrouped(data.grouped)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido')
      } finally {
        setLoading(false)
      }
    }

    fetchAITools()
  }, [])

  return { aiTools, grouped, loading, error }
}