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

    // Obtener prompts favoritos del usuario
    const favoriteActivities = await prisma.userActivity.findMany({
      where: {
        userId,
        type: 'favorite'
      },
      include: {
        prompt: {
          include: {
            category: true,
            aiTool: true,
            author: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    const favorites = favoriteActivities.map(activity => ({
      id: activity.prompt.id,
      title: activity.prompt.title,
      description: activity.prompt.description,
      category: activity.prompt.category.name,
      aiTool: activity.prompt.aiTool.name,
      author: {
        name: activity.prompt.author.name,
        image: activity.prompt.author.image
      },
      likes: activity.prompt.likes,
      copies: activity.prompt.copies,
      views: activity.prompt.views,
      isPremium: activity.prompt.isPremium,
      addedAt: activity.createdAt.toISOString().split('T')[0]
    }));

    return NextResponse.json(favorites);

  } catch (error) {
    console.error('Error fetching user favorites:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const userId = session.user.id;
    const { promptId } = await request.json();

    if (!promptId) {
      return NextResponse.json({ error: 'promptId requerido' }, { status: 400 });
    }

    // Verificar si el prompt existe
    const prompt = await prisma.prompt.findUnique({
      where: { id: promptId }
    });

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt no encontrado' }, { status: 404 });
    }

    // Crear o actualizar actividad de favorito
    const favorite = await prisma.userActivity.upsert({
      where: {
        userId_promptId_type: {
          userId,
          promptId,
          type: 'favorite'
        }
      },
      update: {
        createdAt: new Date()
      },
      create: {
        userId,
        promptId,
        type: 'favorite'
      }
    });

    return NextResponse.json({ success: true, favorite });

  } catch (error) {
    console.error('Error adding favorite:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const userId = session.user.id;
    const { searchParams } = new URL(request.url);
    const promptId = searchParams.get('promptId');

    if (!promptId) {
      return NextResponse.json({ error: 'promptId requerido' }, { status: 400 });
    }

    // Eliminar favorito
    await prisma.userActivity.delete({
      where: {
        userId_promptId_type: {
          userId,
          promptId,
          type: 'favorite'
        }
      }
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Error removing favorite:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}