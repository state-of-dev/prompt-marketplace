import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { mockAITools } from '@/data/mock'

// GET /api/ai-tools - Obtener todas las herramientas IA
export async function GET() {
  try {
    const aiTools = await prisma.aITool.findMany({
      where: {
        isActive: true,
      },
      include: {
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

    // Agrupar por tipo
    type ToolWithCount = typeof aiTools[0] & { promptCount: number }
    const groupedTools = aiTools.reduce((acc: Record<string, ToolWithCount[]>, tool: typeof aiTools[0]) => {
      const type = tool.type
      if (!acc[type]) {
        acc[type] = []
      }
      acc[type].push({
        ...tool,
        promptCount: tool._count.prompts,
      })
      return acc
    }, {})

    return NextResponse.json({
      tools: aiTools.map(tool => ({
        ...tool,
        promptCount: tool._count.prompts,
      })),
      grouped: groupedTools,
    })
  } catch (error) {
    console.error('Error fetching AI tools, using mock data:', error)
    
    // Fallback a datos mock si la BD no está disponible
    const groupedTools = mockAITools.reduce((acc: Record<string, typeof mockAITools>, tool) => {
      const type = tool.type
      if (!acc[type]) {
        acc[type] = []
      }
      acc[type].push(tool)
      return acc
    }, {})
    
    return NextResponse.json({
      tools: mockAITools,
      grouped: groupedTools,
    })
  }
}