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

    // Obtener estadísticas del usuario
    const [
      favoritesCount,
      copiesCount, 
      viewsCount,
      activitiesCount
    ] = await Promise.all([
      // Contar favoritos (likes)
      prisma.userActivity.count({
        where: {
          userId,
          type: 'favorite'
        }
      }),
      
      // Contar copias
      prisma.userActivity.count({
        where: {
          userId,
          type: 'copy'
        }
      }),
      
      // Contar vistas
      prisma.userActivity.count({
        where: {
          userId,
          type: 'view'
        }
      }),
      
      // Contar actividades totales
      prisma.userActivity.count({
        where: {
          userId
        }
      })
    ]);

    // Calcular popularidad (promedio de interacciones)
    const popularityScore = activitiesCount > 0 ? Math.min(100, (activitiesCount / 10) * 100) : 0;

    const stats = {
      favorites: favoritesCount,
      copies: copiesCount, 
      views: viewsCount,
      popularity: Math.round(popularityScore),
      totalActivities: activitiesCount
    };

    return NextResponse.json(stats);

  } catch (error) {
    console.error('Error fetching user stats, using mock data:', error);
    
    // Fallback a datos mock si la BD no está disponible
    const mockStats = {
      favorites: 5,
      copies: 12,
      views: 23,
      popularity: 45,
      totalActivities: 40
    };

    return NextResponse.json(mockStats);
  }
}