import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET /api/prompts/[id] - Obtener prompt por ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const prompt = await prisma.prompt.findUnique({
      where: {
        id,
        isPublic: true,
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            username: true,
            image: true,
            isPremium: true,
            createdAt: true,
          },
        },
        category: true,
        subcategory: true,
        aiTool: true,
      },
    })

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt no encontrado' },
        { status: 404 }
      )
    }

    // Incrementar contador de vistas
    await prisma.prompt.update({
      where: { id },
      data: { views: { increment: 1 } },
    })

    return NextResponse.json(prompt)
  } catch (error) {
    console.error('Error fetching prompt:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}