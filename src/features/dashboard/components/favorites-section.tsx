"use client";

import { Card } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Badge } from '../../../components/ui/badge';
import { Heart, Copy, Eye, ExternalLink } from 'lucide-react';
import { LoadingSpinner } from '../../../components/ui/loading-spinner';
import { useDashboard } from '../../../hooks/use-dashboard';
import Link from 'next/link';

export function FavoritesSection() {
  const { favorites, loading, error, removeFavorite, trackActivity } = useDashboard();

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

  const handleCopy = async (promptId: string) => {
    await trackActivity(promptId, 'copy');
  };

  const handleRemoveFavorite = async (promptId: string) => {
    await removeFavorite(promptId);
  };


  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold mb-2">Mis Favoritos</h2>
          <p className="text-muted-foreground">
            Prompts que has guardado para usar más tarde
          </p>
        </div>
        <Badge variant="secondary">
          {favoritePrompts.length} prompts
        </Badge>
      </div>

      {favoritePrompts.length === 0 ? (
        <Card className="p-8 text-center">
          <Heart className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-lg font-semibold mb-2">No tienes favoritos aún</h3>
          <p className="text-muted-foreground mb-4">
            Explora prompts y guarda los que más te gusten
          </p>
          <Button>
            <Link href="/">Explorar Prompts</Link>
          </Button>
        </Card>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {favoritePrompts.map((prompt) => (
            <Card key={prompt.id} className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold">{prompt.title}</h3>
                    {prompt.isPremium && (
                      <Badge className="bg-amber-100 text-amber-800 border-amber-200">
                        Premium
                      </Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground mb-2">
                    {prompt.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{prompt.category}</span>
                    <span>•</span>
                    <span>{prompt.aiTool}</span>
                    <span>•</span>
                    <span>Guardado {prompt.addedAt}</span>
                  </div>
                </div>
                
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-rose-500 hover:text-rose-600"
                  onClick={() => handleRemoveFavorite(prompt.id)}
                >
                  <Heart className="h-4 w-4 fill-current" />
                </Button>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Heart className="h-4 w-4" />
                    <span>{prompt.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Copy className="h-4 w-4" />
                    <span>{prompt.copies}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    <span>{prompt.views}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleCopy(prompt.id)}
                  >
                    <Copy className="h-4 w-4 mr-1" />
                    Copiar
                  </Button>
                  <Button variant="default" size="sm" asChild>
                    <Link href={`/prompt/${prompt.id}`} className="flex items-center">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Ver
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}