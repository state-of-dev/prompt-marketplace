"use client";

import { motion } from 'framer-motion';
import { BarChart3, Clock, ArrowLeft } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { AITool } from '../../../types';

interface AIToolCardProps {
  aiTool: AITool | undefined;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

export function AIToolCard({ aiTool }: AIToolCardProps) {
  if (!aiTool) return null;

  return (
    <motion.div variants={fadeInUp}>
      <Card className="border-2 hover:border-primary/20 transition-colors">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="h-5 w-5 text-emerald-500" />
            <span>Herramienta IA</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-muted/50 rounded-lg">
            <h4 className="font-semibold text-lg mb-2">{aiTool.name}</h4>
            <p className="text-muted-foreground leading-relaxed">{aiTool.description}</p>
          </div>
          
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="bg-slate-50 border-slate-200 text-slate-700 dark:bg-slate-800/50 dark:border-slate-700 dark:text-slate-300">
              <Clock className="h-3 w-3 mr-1 text-orange-500" />
              {aiTool.type}
            </Badge>
          </div>
          
          {aiTool.website && (
            <Button variant="outline" size="sm" className="w-full group" asChild>
              <a href={aiTool.website} target="_blank" rel="noopener noreferrer">
                <span>Visitar sitio web</span>
                <ArrowLeft className="h-4 w-4 ml-2 rotate-180 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}