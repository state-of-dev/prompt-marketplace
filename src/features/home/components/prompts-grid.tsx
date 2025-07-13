"use client";

import { motion } from 'framer-motion';
import { Heart, Copy, Star, ArrowRight } from 'lucide-react';
import { usePrompts } from '../../../hooks/use-prompts';
import { PromptPreview } from '../../../components/ui/terminal';
import { LoadingState, ErrorState } from '../../../components/ui/loading-spinner';
import { Button } from '../../../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function PromptsGrid() {
  const { prompts, loading, error, refetch } = usePrompts({ limit: 6 });

  if (loading) {
    return (
      <section className="py-24 bg-muted/30">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Prompts Destacados</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Los prompts más populares y efectivos de nuestra comunidad
            </p>
          </motion.div>
          <LoadingState>Cargando prompts destacados...</LoadingState>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-24 bg-muted/30">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Prompts Destacados</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Los prompts más populares y efectivos de nuestra comunidad
            </p>
          </motion.div>
          <ErrorState error={error} onRetry={refetch} />
        </div>
      </section>
    );
  }
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Prompts Destacados</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Los prompts más populares y efectivos de nuestra comunidad
          </p>
        </motion.div>
        
        <motion.div 
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {prompts.map((prompt) => {
            
            return (
              <motion.div key={prompt.id} variants={fadeInUp}>
                <Link href={`/prompt/${prompt.id}`}>
                  <Card className="group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer h-full border-2 hover:border-primary/20">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                            {prompt.title}
                          </CardTitle>
                          <CardDescription className="line-clamp-2 mt-2">
                            {prompt.description}
                          </CardDescription>
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 180 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Star className="h-5 w-5 text-amber-400 group-hover:text-amber-500 transition-colors" />
                        </motion.div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge className="bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800">
                          {prompt.category?.name}
                        </Badge>
                        <Badge variant="outline" className="border-purple-200 text-purple-700 dark:border-purple-700 dark:text-purple-400 group-hover:border-purple-300 dark:group-hover:border-purple-600 transition-colors">
                          {prompt.aiTool?.name}
                        </Badge>
                      </div>

                      <PromptPreview 
                        preview={prompt.preview}
                        isLoggedIn={false}
                        className="mb-4"
                      />
                    </CardContent>

                    <CardFooter>
                      <div className="flex items-center justify-between w-full text-sm text-muted-foreground">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center space-x-1 group-hover:text-rose-500 transition-colors">
                            <Heart className="h-4 w-4 text-rose-500" />
                            <span>{prompt.likes.toLocaleString()}</span>
                          </span>
                          <span className="flex items-center space-x-1 group-hover:text-green-500 transition-colors">
                            <Copy className="h-4 w-4 text-green-500" />
                            <span>{prompt.copies.toLocaleString()}</span>
                          </span>
                        </div>
                        <span className="text-xs flex items-center space-x-1">
                          <span>por</span>
                          <span className="font-medium group-hover:text-indigo-600 transition-colors">{prompt.author?.username || prompt.author?.name}</span>
                        </span>
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" className="group">
            Ver todos los prompts
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}