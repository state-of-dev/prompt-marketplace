"use client";

import { Card } from '../../../components/ui/card';
import { Heart, Copy, Eye, TrendingUp } from 'lucide-react';

export function StatsSection() {
  // TODO: Estos datos vendrán de la API
  const stats = [
    {
      title: 'Prompts Favoritos',
      value: '24',
      change: '+12%',
      icon: Heart,
      color: 'text-rose-500'
    },
    {
      title: 'Prompts Copiados',
      value: '156',
      change: '+23%',
      icon: Copy,
      color: 'text-blue-500'
    },
    {
      title: 'Prompts Vistos',
      value: '89',
      change: '+8%',
      icon: Eye,
      color: 'text-emerald-500'
    },
    {
      title: 'Popularidad',
      value: '67%',
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
          {[
            'Copiaste "React Component Generator"',
            'Agregaste "Cinema Prompt" a favoritos',
            'Viste "Marketing Copy Template"',
            'Copiaste "Backend API Documentation"'
          ].map((activity, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm">{activity}</span>
              <span className="text-xs text-muted-foreground ml-auto">
                Hace {index + 1}h
              </span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}