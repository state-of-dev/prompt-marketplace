import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET /api/prompts - Obtener prompts con filtros
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '12')
    const category = searchParams.get('category')
    const aiTool = searchParams.get('aiTool')
    const search = searchParams.get('search')
    const isPremium = searchParams.get('premium')

    const skip = (page - 1) * limit

    // Construir filtros
    const where: {
      isPublic: boolean;
      categoryId?: string;
      aiToolId?: string;
      isPremium?: boolean;
      OR?: Array<{
        title?: { contains: string; mode: 'insensitive' };
        description?: { contains: string; mode: 'insensitive' };
        tags?: { has: string };
      }>;
    } = {
      isPublic: true,
    }

    if (category) {
      where.categoryId = category
    }

    if (aiTool) {
      where.aiToolId = aiTool
    }

    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
        { tags: { has: search } },
      ]
    }

    if (isPremium !== null) {
      where.isPremium = isPremium === 'true'
    }

    // Obtener prompts con relaciones
    const [prompts, total] = await Promise.all([
      prisma.prompt.findMany({
        where,
        include: {
          author: {
            select: {
              id: true,
              name: true,
              username: true,
              image: true,
              isPremium: true,
            },
          },
          category: true,
          subcategory: true,
          aiTool: true,
        },
        orderBy: {
          createdAt: 'desc',
        },
        skip,
        take: limit,
      }),
      prisma.prompt.count({ where }),
    ])

    const hasMore = skip + limit < total

    return NextResponse.json({
      data: prompts,
      total,
      page,
      limit,
      hasMore,
    })
  } catch (error) {
    console.error('Error fetching prompts:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}