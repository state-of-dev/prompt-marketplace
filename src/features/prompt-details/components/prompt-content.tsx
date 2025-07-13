"use client";

import { motion } from 'framer-motion';
import { Star, Download } from 'lucide-react';
import { Terminal } from '../../../components/ui/terminal';
import { Button } from '../../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Prompt, AITool } from '../../../types';

interface PromptContentProps {
  prompt: Prompt;
  aiTool: AITool | undefined;
  isLoggedIn: boolean;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

export function PromptContent({ prompt, aiTool, isLoggedIn }: PromptContentProps) {
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
          {isLoggedIn ? (
            <Terminal title={`${aiTool?.name} - ${prompt.title}`}>
              {prompt.content}
            </Terminal>
          ) : (
            <div className="relative">
              <Terminal title="Preview" showCopy={false}>
                <div className="text-gray-400">
                  <span className="text-blue-400">$</span> {prompt.preview}
                  <span className="animate-pulse">_</span>
                </div>
              </Terminal>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent flex items-center justify-center">
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="bg-primary text-primary-foreground px-8 py-6 rounded-lg shadow-xl border border-primary/20">
                    <h3 className="text-lg font-semibold mb-2">Contenido Premium</h3>
                    <p className="text-primary-foreground/80 mb-4">Inicia sesión para acceder al prompt completo</p>
                    <div className="flex gap-3">
                      <Button variant="secondary" size="sm">
                        Iniciar Sesión
                      </Button>
                      <Button variant="outline" size="sm" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                        Registrarse
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}