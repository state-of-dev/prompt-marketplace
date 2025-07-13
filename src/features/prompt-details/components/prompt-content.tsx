"use client";

import { motion } from 'framer-motion';
import { Star, Download } from 'lucide-react';
import { RestrictedContent } from '../../../components/ui/restricted-content';
import { Button } from '../../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Prompt, AITool } from '../../../types';

interface PromptContentProps {
  prompt: Prompt;
  aiTool: AITool | undefined;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

export function PromptContent({ prompt, aiTool }: PromptContentProps) {
  return (
    <motion.div variants={fadeInUp}>
      <Card className="border-2 hover:border-primary/20 transition-colors">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-amber-500" />
              <span>Contenido del Prompt</span>
            </CardTitle>
            <Button size="sm" className="group">
              <Download className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
              Descargar
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <RestrictedContent
            content={prompt.content}
            preview={prompt.preview}
            isPremium={prompt.isPremium}
            title={`${aiTool?.name} - ${prompt.title}`}
          />
        </CardContent>
      </Card>
    </motion.div>
  );
}