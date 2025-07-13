"use client";

import { motion } from 'framer-motion';
import { Search, Eye, ArrowRight, Code2, Palette, Megaphone, Camera, BookOpen, Calculator } from 'lucide-react';
import { mockCategories } from '../../../data/mock';
import { Button } from '../../../components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../../../components/ui/card';

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

const categoryIcons = {
  'cat1': Code2,
  'cat2': Camera, 
  'cat3': Megaphone,
  'cat4': Palette,
  'cat5': Calculator,
  'cat6': BookOpen
};

export function CategoriesSection() {
  return (
    <section className="py-24">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-12"
        >
          <div>
            <h2 className="text-3xl font-bold mb-2">Categorías Principales</h2>
            <p className="text-muted-foreground">Encuentra prompts especializados para tu profesión</p>
          </div>
          <Button variant="outline" className="group">
            <Search className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform text-indigo-500" />
            Filtros
          </Button>
        </motion.div>
        
        <motion.div 
          className="grid gap-6 md:grid-cols-3"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {mockCategories.slice(0, 3).map((category) => {
            const IconComponent = categoryIcons[category.id as keyof typeof categoryIcons] || Code2;
            return (
              <motion.div key={category.id} variants={fadeInUp}>
                <Card className="group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer border-2 hover:border-primary/20">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 group-hover:from-blue-100 group-hover:to-indigo-100 dark:group-hover:from-blue-800/30 dark:group-hover:to-indigo-800/30 transition-colors">
                        <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="group-hover:text-primary transition-colors">{category.name}</CardTitle>
                      </div>
                    </div>
                    <CardDescription className="line-clamp-2">{category.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="pt-0">
                    <div className="flex items-center justify-between w-full">
                      <p className="text-sm text-muted-foreground flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{category.promptCount.toLocaleString()} prompts</span>
                      </p>
                      <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                    </div>
                  </CardFooter>
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary/50 to-primary opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}