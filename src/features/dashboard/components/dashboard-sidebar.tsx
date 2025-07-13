"use client";

import { BarChart3, Heart, User, Activity } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Card } from '../../../components/ui/card';

interface DashboardSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const menuItems = [
  {
    id: 'overview',
    label: 'Resumen',
    icon: BarChart3,
    description: 'Estadísticas generales'
  },
  {
    id: 'favorites',
    label: 'Favoritos',
    icon: Heart,
    description: 'Prompts guardados'
  },
  {
    id: 'activity',
    label: 'Actividad',
    icon: Activity,
    description: 'Historial de acciones'
  },
  {
    id: 'profile',
    label: 'Perfil',
    icon: User,
    description: 'Configuración personal'
  }
];

export function DashboardSidebar({ activeSection, onSectionChange }: DashboardSidebarProps) {
  return (
    <Card className="p-4 h-fit">
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <Button
              key={item.id}
              variant={isActive ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => onSectionChange(item.id)}
            >
              <Icon className="mr-2 h-4 w-4" />
              <div className="text-left">
                <div className="font-medium">{item.label}</div>
                <div className="text-xs text-muted-foreground hidden md:block">
                  {item.description}
                </div>
              </div>
            </Button>
          );
        })}
      </nav>
    </Card>
  );
}