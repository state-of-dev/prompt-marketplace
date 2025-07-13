"use client";

import { Card } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Badge } from '../../../components/ui/badge';
import { Heart, Copy, Eye, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export function FavoritesSection() {
  // TODO: Estos datos vendrán de la API
  const favoritePrompts = [
    {
      id: 'prompt1',
      title: 'React Component Generator',
      description: 'Genera componentes React funcionales con TypeScript',
      category: 'Programadores',
      aiTool: 'Claude',
      likes: 234,
      copies: 156,
      views: 1200,
      isPremium: false,
      addedAt: '2025-01-10'
    },
    {
      id: 'prompt2', 
      title: 'Cinema Storyboard Creator',
      description: 'Crea storyboards detallados para escenas cinematográficas',
      category: 'Cineastas',
      aiTool: 'DALL-E',
      likes: 189,
      copies: 89,
      views: 850,
      isPremium: true,
      addedAt: '2025-01-08'
    },
    {
      id: 'prompt3',
      title: 'Marketing Copy Template',
      description: 'Plantillas para copy de marketing digital efectivo',
      category: 'Marketers',
      aiTool: 'ChatGPT',
      likes: 312,
      copies: 234,
      views: 1560,
      isPremium: false,
      addedAt: '2025-01-05'
    }
  ];

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
                  <Button variant="outline" size="sm">
                    <Copy className="h-4 w-4 mr-1" />
                    Copiar
                  </Button>
                  <Button variant="default" size="sm">
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