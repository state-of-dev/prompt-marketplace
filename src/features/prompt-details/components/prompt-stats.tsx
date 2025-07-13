"use client";

import { Heart, Copy, Eye, Calendar } from 'lucide-react';
import { Prompt } from '../../../types';

interface PromptStatsProps {
  prompt: Prompt;
}

export function PromptStats({ prompt }: PromptStatsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-muted/50 rounded-lg">
      <div className="flex items-center space-x-2">
        <Heart className="h-4 w-4 text-red-500" />
        <span className="text-sm font-medium">{prompt.likes.toLocaleString()} likes</span>
      </div>
      <div className="flex items-center space-x-2">
        <Copy className="h-4 w-4 text-blue-500" />
        <span className="text-sm font-medium">{prompt.copies.toLocaleString()} copias</span>
      </div>
      <div className="flex items-center space-x-2">
        <Eye className="h-4 w-4 text-green-500" />
        <span className="text-sm font-medium">{prompt.views.toLocaleString()} vistas</span>
      </div>
      <div className="flex items-center space-x-2">
        <Calendar className="h-4 w-4 text-purple-500" />
        <span className="text-sm font-medium">{prompt.createdAt.toLocaleDateString()}</span>
      </div>
    </div>
  );
}