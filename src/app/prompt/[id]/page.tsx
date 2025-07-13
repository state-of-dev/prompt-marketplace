"use client";

import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';
import { mockPrompts, mockAITools, mockCategories } from '../../../data/mock';
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
  const prompt = mockPrompts.find(p => p.id === id);
  
  if (!prompt) {
    notFound();
  }

  const aiTool = mockAITools.find(tool => tool.id === prompt.aiToolId);
  const category = mockCategories.find(cat => cat.id === prompt.categoryId);

  // Simulamos que el usuario NO está logueado
  const isLoggedIn = false;

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
            <PromptHeader prompt={prompt} category={category} aiTool={aiTool} />
            <PromptContent prompt={prompt} aiTool={aiTool} isLoggedIn={isLoggedIn} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <AuthorCard prompt={prompt} />
            <AIToolCard aiTool={aiTool} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}