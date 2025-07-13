"use client";

import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/auth-context';

interface DashboardStats {
  favorites: number;
  copies: number;
  views: number;
  popularity: number;
  totalActivities: number;
}

interface FavoritePrompt {
  id: string;
  title: string;
  description: string;
  category: string;
  aiTool: string;
  author: {
    name: string;
    image: string;
  };
  likes: number;
  copies: number;
  views: number;
  isPremium: boolean;
  addedAt: string;
}

interface Activity {
  id: string;
  type: string;
  action: string;
  promptTitle: string;
  timestamp: string;
  category: string;
}

export function useDashboard() {
  const { isAuthenticated } = useAuth();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [favorites, setFavorites] = useState<FavoritePrompt[]>([]);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchStats = async () => {
    if (!isAuthenticated) return;
    
    try {
      setLoading(true);
      const response = await fetch('/api/dashboard/stats');
      
      if (!response.ok) {
        throw new Error('Error al cargar estadísticas');
      }
      
      const data = await response.json();
      setStats(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  const fetchFavorites = async () => {
    if (!isAuthenticated) return;
    
    try {
      setLoading(true);
      const response = await fetch('/api/dashboard/favorites');
      
      if (!response.ok) {
        throw new Error('Error al cargar favoritos');
      }
      
      const data = await response.json();
      setFavorites(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  const fetchActivities = async (limit = 20) => {
    if (!isAuthenticated) return;
    
    try {
      setLoading(true);
      const response = await fetch(`/api/dashboard/activity?limit=${limit}`);
      
      if (!response.ok) {
        throw new Error('Error al cargar actividades');
      }
      
      const data = await response.json();
      setActivities(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  const addFavorite = async (promptId: string) => {
    if (!isAuthenticated) return false;
    
    try {
      const response = await fetch('/api/dashboard/favorites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ promptId }),
      });
      
      if (!response.ok) {
        throw new Error('Error al agregar favorito');
      }
      
      // Refrescar favoritos
      await fetchFavorites();
      await fetchStats();
      
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
      return false;
    }
  };

  const removeFavorite = async (promptId: string) => {
    if (!isAuthenticated) return false;
    
    try {
      const response = await fetch(`/api/dashboard/favorites?promptId=${promptId}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Error al remover favorito');
      }
      
      // Refrescar favoritos
      await fetchFavorites();
      await fetchStats();
      
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
      return false;
    }
  };

  const trackActivity = async (promptId: string, type: 'copy' | 'favorite' | 'view') => {
    if (!isAuthenticated) return false;
    
    try {
      const response = await fetch('/api/dashboard/activity', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ promptId, type }),
      });
      
      if (!response.ok) {
        throw new Error('Error al registrar actividad');
      }
      
      // Refrescar datos según el tipo
      if (type === 'favorite') {
        await fetchFavorites();
      }
      await fetchStats();
      await fetchActivities();
      
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
      return false;
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchStats();
      fetchFavorites();
      fetchActivities();
    }
  }, [isAuthenticated]);

  return {
    stats,
    favorites,
    activities,
    loading,
    error,
    fetchStats,
    fetchFavorites,
    fetchActivities,
    addFavorite,
    removeFavorite,
    trackActivity,
  };
}