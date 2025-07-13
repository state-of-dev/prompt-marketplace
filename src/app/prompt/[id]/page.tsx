"use client";

import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';
import { usePrompt } from '../../../hooks/use-prompts';
import { LoadingState, ErrorState } from '../../../components/ui/loading-spinner';
import { Header } from '../../../features/shared/components/header';
import { PromptHeader } from '../../../features/prompt-details/components/prompt-header';
import { PromptContent } from '../../../features/prompt-details/components/prompt-content';
import { AuthorCard } from '../../../features/prompt-details/components/author-card';
import { AIToolCard } from '../../../features/prompt-details/components/ai-tool-card';
import { use } from 'react';

interface PromptPageProps {
  params: Promise<{ id: string }>;
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function PromptPage({ params }: PromptPageProps) {
  const { id } = use(params);
  const { prompt, loading, error } = usePrompt(id);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <LoadingState>Cargando prompt...</LoadingState>
      </div>
    );
  }

  if (error || !prompt) {
    if (error === 'Prompt no encontrado') {
      notFound();
    }
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <ErrorState error={error || 'Error al cargar prompt'} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Main Content */}
          <div className="lg:col-span-2">
            <PromptHeader prompt={prompt} category={prompt.category} aiTool={prompt.aiTool} />
            <PromptContent prompt={prompt} aiTool={prompt.aiTool} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <AuthorCard prompt={prompt} />
            <AIToolCard aiTool={prompt.aiTool} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}