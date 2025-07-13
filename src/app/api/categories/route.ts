import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET /api/categories - Obtener todas las categorías
export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      include: {
        subcategories: {
          orderBy: {
            name: 'asc',
          },
        },
        _count: {
          select: {
            prompts: true,
          },
        },
      },
      orderBy: {
        name: 'asc',
      },
    })

    // Actualizar el contador de prompts en cada categoría
    const categoriesWithCount = categories.map(category => ({
      ...category,
      promptCount: category._count.prompts,
      subcategories: category.subcategories.map(sub => ({
        ...sub,
        // TODO: Agregar contador de prompts por subcategoría
      })),
    }))

    return NextResponse.json(categoriesWithCount)
  } catch (error) {
    console.error('Error fetching categories:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}