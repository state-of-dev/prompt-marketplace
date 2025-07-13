"use client";

import { motion } from 'framer-motion';
import { ArrowLeft, BookmarkPlus, Share2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { PromptStats } from './prompt-stats';
import { Prompt, Category, AITool } from '../../../types';

interface PromptHeaderProps {
  prompt: Prompt;
  category: Category | undefined;
  aiTool: AITool | undefined;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

export function PromptHeader({ prompt, category, aiTool }: PromptHeaderProps) {
  const subcategory = category?.subcategories.find(sub => sub.id === prompt.subcategoryId);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Button variant="ghost" className="mb-8 p-0 group" asChild>
          <Link href="/" className="flex items-center space-x-2">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            <span>Volver al inicio</span>
          </Link>
        </Button>
      </motion.div>

      <motion.div variants={fadeInUp}>
        <Card className="mb-6 border-2 hover:border-primary/20 transition-colors">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <CardTitle className="text-3xl mb-3 leading-tight">{prompt.title}</CardTitle>
                <CardDescription className="text-lg leading-relaxed">{prompt.description}</CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="icon">
                    <BookmarkPlus className="h-5 w-5" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge className="bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800">
                {category?.name}
              </Badge>
              <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800">
                {subcategory?.name}
              </Badge>
              <Badge variant="outline" className="border-purple-200 text-purple-700 dark:border-purple-700 dark:text-purple-400">
                {aiTool?.name}
              </Badge>
              {prompt.tags.map(tag => (
                <Badge key={tag} className="bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800/50 dark:text-slate-300 dark:border-slate-700">
                  #{tag}
                </Badge>
              ))}
            </div>

            <PromptStats prompt={prompt} />
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
}