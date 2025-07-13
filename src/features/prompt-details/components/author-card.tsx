"use client";

import { motion } from 'framer-motion';
import { User, Star } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { Avatar, AvatarFallback } from '../../../components/ui/avatar';
import { Prompt } from '../../../types';

interface AuthorCardProps {
  prompt: Prompt;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

export function AuthorCard({ prompt }: AuthorCardProps) {
  return (
    <motion.div variants={fadeInUp}>
      <Card className="mb-6 border-2 hover:border-primary/20 transition-colors">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <User className="h-5 w-5 text-indigo-500" />
            <span>Autor</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-3 mb-4">
            <Avatar className="h-12 w-12">
              <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-lg font-semibold">
                {prompt.author.username.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h4 className="font-semibold text-lg">{prompt.author.username}</h4>
              <p className="text-muted-foreground">{prompt.author.name}</p>
              {prompt.author.isPremium && (
                <Badge className="mt-1 bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800">
                  <Star className="h-3 w-3 mr-1 text-amber-600 dark:text-amber-400" />
                  Premium
                </Badge>
              )}
            </div>
          </div>
          <Button variant="outline" className="w-full group">
            <User className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
            Ver perfil
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}