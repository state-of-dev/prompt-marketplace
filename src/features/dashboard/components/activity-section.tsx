"use client";

import { Card } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { Heart, Copy, Eye, Calendar } from 'lucide-react';

export function ActivitySection() {
  // TODO: Estos datos vendrán de la API
  const activities = [
    {
      id: '1',
      type: 'copy',
      action: 'Copiaste',
      promptTitle: 'React Component Generator',
      timestamp: '2025-01-13 14:30',
      category: 'Programadores'
    },
    {
      id: '2', 
      type: 'favorite',
      action: 'Agregaste a favoritos',
      promptTitle: 'Cinema Storyboard Creator',
      timestamp: '2025-01-13 12:15',
      category: 'Cineastas'
    },
    {
      id: '3',
      type: 'view',
      action: 'Viste',
      promptTitle: 'Marketing Copy Template',
      timestamp: '2025-01-13 10:45',
      category: 'Marketers'
    },
    {
      id: '4',
      type: 'copy',
      action: 'Copiaste',
      promptTitle: 'Backend API Documentation',
      timestamp: '2025-01-12 16:20',
      category: 'Programadores'
    },
    {
      id: '5',
      type: 'favorite',
      action: 'Agregaste a favoritos',
      promptTitle: 'Logo Design Brief',
      timestamp: '2025-01-12 14:10',
      category: 'Diseñadores'
    },
    {
      id: '6',
      type: 'view',
      action: 'Viste',
      promptTitle: 'Business Strategy Analysis',
      timestamp: '2025-01-12 11:30',
      category: 'Consultores'
    }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'copy':
        return <Copy className="h-4 w-4 text-blue-500" />;
      case 'favorite':
        return <Heart className="h-4 w-4 text-rose-500" />;
      case 'view':
        return <Eye className="h-4 w-4 text-emerald-500" />;
      default:
        return <Calendar className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'copy':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'favorite':
        return 'bg-rose-100 text-rose-800 border-rose-200';
      case 'view':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Hace menos de 1h';
    if (diffInHours < 24) return `Hace ${diffInHours}h`;
    if (diffInHours < 48) return 'Ayer';
    return date.toLocaleDateString('es-ES');
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Historial de Actividad</h2>
        <p className="text-muted-foreground">
          Todas tus interacciones con prompts en IdeaVault
        </p>
      </div>

      <div className="space-y-3">
        {activities.map((activity) => (
          <Card key={activity.id} className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {getActivityIcon(activity.type)}
                <div>
                  <p className="font-medium">
                    {activity.action}{' '}
                    <span className="text-primary">{activity.promptTitle}</span>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {formatDate(activity.timestamp)}
                  </p>
                </div>
              </div>
              
              <Badge 
                variant="outline" 
                className={getActivityColor(activity.type)}
              >
                {activity.category}
              </Badge>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6 bg-muted/50">
        <div className="text-center">
          <Calendar className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            Has tenido <span className="font-semibold text-foreground">{activities.length} interacciones</span> en los últimos 7 días
          </p>
        </div>
      </Card>
    </div>
  );
}