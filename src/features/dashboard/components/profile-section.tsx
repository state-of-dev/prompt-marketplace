"use client";

import { useAuth } from '../../../contexts/auth-context';
import { Card } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Badge } from '../../../components/ui/badge';
import { Crown, Mail, User, Calendar } from 'lucide-react';
import Image from 'next/image';

export function ProfileSection() {
  const { user, isPremium } = useAuth();

  if (!user) return null;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Mi Perfil</h2>
        <p className="text-muted-foreground">
          Gestiona tu información personal y preferencias
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="text-center space-y-4">
            {user.image ? (
              <Image
                src={user.image}
                alt={user.name || 'Usuario'}
                width={80}
                height={80}
                className="rounded-full mx-auto"
              />
            ) : (
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto">
                <User className="h-8 w-8 text-primary-foreground" />
              </div>
            )}
            
            <div>
              <h3 className="text-lg font-semibold">{user.name}</h3>
              <p className="text-sm text-muted-foreground">{user.email}</p>
            </div>

            {isPremium && (
              <Badge className="bg-amber-100 text-amber-800 border-amber-200">
                <Crown className="h-3 w-3 mr-1" />
                Usuario Premium
              </Badge>
            )}

            <Button variant="outline" className="w-full">
              Cambiar Foto
            </Button>
          </div>
        </Card>

        <Card className="lg:col-span-2 p-6">
          <h3 className="text-lg font-semibold mb-4">Información Personal</h3>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Nombre Completo
                </label>
                <Input 
                  defaultValue={user.name || ''} 
                  placeholder="Tu nombre completo"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Email
                </label>
                <Input 
                  defaultValue={user.email || ''} 
                  disabled
                  className="bg-muted"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">
                Bio
              </label>
              <Input 
                placeholder="Cuéntanos sobre ti..."
                className="h-20"
              />
            </div>

            <div className="flex justify-end space-x-2">
              <Button variant="outline">Cancelar</Button>
              <Button>Guardar Cambios</Button>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Estadísticas de Cuenta</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-muted rounded-lg">
            <Mail className="h-6 w-6 mx-auto mb-2 text-blue-500" />
            <p className="text-2xl font-bold">24</p>
            <p className="text-sm text-muted-foreground">Prompts Favoritos</p>
          </div>
          
          <div className="text-center p-4 bg-muted rounded-lg">
            <Calendar className="h-6 w-6 mx-auto mb-2 text-emerald-500" />
            <p className="text-2xl font-bold">156</p>
            <p className="text-sm text-muted-foreground">Prompts Copiados</p>
          </div>
          
          <div className="text-center p-4 bg-muted rounded-lg">
            <Crown className="h-6 w-6 mx-auto mb-2 text-amber-500" />
            <p className="text-2xl font-bold">{isPremium ? 'Premium' : 'Gratuito'}</p>
            <p className="text-sm text-muted-foreground">Plan Actual</p>
          </div>
        </div>
      </Card>
    </div>
  );
}