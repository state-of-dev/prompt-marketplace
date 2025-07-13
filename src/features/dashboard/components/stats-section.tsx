"use client";

import { Card } from '../../../components/ui/card';
import { Heart, Copy, Eye, TrendingUp } from 'lucide-react';
import { useDashboard } from '../../../hooks/use-dashboard';
import { LoadingSpinner } from '../../../components/ui/loading-spinner';

export function StatsSection() {
  const { stats, activities, loading, error } = useDashboard();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <Card className="p-6 text-center">
        <p className="text-destructive">{error}</p>
      </Card>
    );
  }

  const statsData = [
    {
      title: 'Prompts Favoritos',
      value: stats?.favorites.toString() || '0',
      change: '+12%',
      icon: Heart,
      color: 'text-rose-500'
    },
    {
      title: 'Prompts Copiados',
      value: stats?.copies.toString() || '0',
      change: '+23%',
      icon: Copy,
      color: 'text-blue-500'
    },
    {
      title: 'Prompts Vistos',
      value: stats?.views.toString() || '0',
      change: '+8%',
      icon: Eye,
      color: 'text-emerald-500'
    },
    {
      title: 'Popularidad',
      value: `${stats?.popularity || 0}%`,
      change: '+15%',
      icon: TrendingUp,
      color: 'text-amber-500'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Resumen de Actividad</h2>
        <p className="text-muted-foreground">
          Tu actividad en IdeaVault en los últimos 30 días
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-emerald-600 font-medium">
                    {stat.change} vs mes anterior
                  </p>
                </div>
                <Icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </Card>
          );
        })}
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Actividad Reciente</h3>
        <div className="space-y-3">
          {activities.slice(0, 4).map((activity) => {
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
              <div key={activity.id} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">
                  {activity.action} "{activity.promptTitle}"
                </span>
                <span className="text-xs text-muted-foreground ml-auto">
                  {formatDate(activity.timestamp)}
                </span>
              </div>
            );
          })}
          {activities.length === 0 && (
            <p className="text-sm text-muted-foreground text-center py-4">
              No hay actividad reciente
            </p>
          )}
        </div>
      </Card>
    </div>
  );
}