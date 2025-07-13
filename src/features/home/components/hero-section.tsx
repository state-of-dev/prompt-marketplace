"use client";

import { motion } from 'framer-motion';
import { Search, Users, Zap, BarChart3, Clock } from 'lucide-react';
import { Input } from '../../../components/ui/input';
import { Badge } from '../../../components/ui/badge';

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

export function HeroSection() {
  return (
    <section className="border-b bg-gradient-to-b from-background to-muted/50">
      <div className="container py-24 md:py-32">
        <motion.div 
          className="mx-auto max-w-4xl text-center"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp} className="flex justify-center mb-6">
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800">
              <Zap className="h-4 w-4 mr-2 text-emerald-600 dark:text-emerald-400" />
              Más de 10,000 prompts disponibles
            </Badge>
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          >
            Marketplace de{" "}
            <span className="text-primary relative">
              Prompts de IA
              <motion.div 
                className="absolute bottom-0 left-0 w-full h-1 bg-primary/30"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              />
            </span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="mt-6 text-xl leading-8 text-muted-foreground max-w-2xl mx-auto"
          >
            Descubre, comparte y monetiza prompts para cineastas, programadores, marketers y más
          </motion.p>
          
          <motion.div variants={fadeInUp} className="mt-10 flex justify-center">
            <div className="relative w-full max-w-lg group">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 group-hover:text-blue-500 transition-colors" />
              <Input
                type="search"
                placeholder="Buscar prompts..."
                className="pl-10 h-12 text-base border-2 transition-all duration-300 focus:border-primary/50 focus:ring-4 focus:ring-primary/10"
              />
            </div>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="mt-8 flex items-center justify-center space-x-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-blue-500" />
              <span>25k+ usuarios</span>
            </div>
            <div className="flex items-center space-x-2">
              <BarChart3 className="h-4 w-4 text-purple-500" />
              <span>98% satisfacción</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-orange-500" />
              <span>Actualizado diariamente</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}