"use client";

import { useAuth } from '../../../contexts/auth-context';
import { DashboardSidebar } from './dashboard-sidebar';
import { ProfileSection } from './profile-section';
import { FavoritesSection } from './favorites-section';
import { ActivitySection } from './activity-section';
import { StatsSection } from './stats-section';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';

export function DashboardContent() {
  const { isAuthenticated, isLoading } = useAuth();
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      redirect('/');
    }
  }, [isLoading, isAuthenticated]);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-muted rounded w-64 mb-6"></div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="h-96 bg-muted rounded"></div>
            <div className="lg:col-span-3 h-96 bg-muted rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  const renderSection = () => {
    switch (activeSection) {
      case 'profile':
        return <ProfileSection />;
      case 'favorites':
        return <FavoritesSection />;
      case 'activity':
        return <ActivitySection />;
      default:
        return <StatsSection />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Mi Dashboard</h1>
        <p className="text-muted-foreground">
          Gestiona tus prompts, favoritos y actividad
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <DashboardSidebar 
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
        <div className="lg:col-span-3">
          {renderSection()}
        </div>
      </div>
    </div>
  );
}