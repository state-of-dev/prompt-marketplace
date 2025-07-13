import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const userId = session.user.id;
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '20');
    const offset = parseInt(searchParams.get('offset') || '0');

    // Obtener actividades del usuario
    const activities = await prisma.userActivity.findMany({
      where: {
        userId
      },
      include: {
        prompt: {
          include: {
            category: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      },
      take: limit,
      skip: offset
    });

    const formattedActivities = activities.map(activity => ({
      id: activity.id,
      type: activity.type,
      action: getActionText(activity.type),
      promptTitle: activity.prompt.title,
      timestamp: activity.createdAt.toISOString(),
      category: activity.prompt.category.name
    }));

    return NextResponse.json(formattedActivities);

  } catch (error) {
    console.error('Error fetching user activity:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

function getActionText(type: string): string {
  switch (type) {
    case 'copy':
      return 'Copiaste';
    case 'favorite':
      return 'Agregaste a favoritos';
    case 'view':
      return 'Viste';
    default:
      return 'Interactuaste con';
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const userId = session.user.id;
    const { promptId, type } = await request.json();

    if (!promptId || !type) {
      return NextResponse.json({ error: 'promptId y type requeridos' }, { status: 400 });
    }

    if (!['copy', 'favorite', 'view'].includes(type)) {
      return NextResponse.json({ error: 'Tipo de actividad inválido' }, { status: 400 });
    }

    // Verificar si el prompt existe
    const prompt = await prisma.prompt.findUnique({
      where: { id: promptId }
    });

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt no encontrado' }, { status: 404 });
    }

    // Para views, siempre crear nueva actividad
    // Para copy y favorite, usar upsert
    let activity;
    
    if (type === 'view') {
      activity = await prisma.userActivity.create({
        data: {
          userId,
          promptId,
          type
        }
      });
      
      // Incrementar contador de views en el prompt
      await prisma.prompt.update({
        where: { id: promptId },
        data: {
          views: {
            increment: 1
          }
        }
      });
    } else {
      activity = await prisma.userActivity.upsert({
        where: {
          userId_promptId_type: {
            userId,
            promptId,
            type
          }
        },
        update: {
          createdAt: new Date()
        },
        create: {
          userId,
          promptId,
          type
        }
      });

      // Incrementar contadores según el tipo
      if (type === 'copy') {
        await prisma.prompt.update({
          where: { id: promptId },
          data: {
            copies: {
              increment: 1
            }
          }
        });
      } else if (type === 'favorite') {
        await prisma.prompt.update({
          where: { id: promptId },
          data: {
            likes: {
              increment: 1
            }
          }
        });
      }
    }

    return NextResponse.json({ success: true, activity });

  } catch (error) {
    console.error('Error creating activity:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}