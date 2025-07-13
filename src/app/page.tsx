"use client";

import { motion } from 'framer-motion';
import { Search, TrendingUp, Users, Zap, BarChart3, Clock, Eye, Heart, Copy, Star, ArrowRight, Sparkles, Code2, Palette, Megaphone, Camera, BookOpen, Calculator } from 'lucide-react';
import { mockCategories, mockPrompts, mockAITools } from '../data/mock';
import { PromptPreview } from '../components/ui/terminal';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { ThemeToggle } from '../components/theme-toggle';
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

const categoryIcons = {
  'cat1': Code2,
  'cat2': Camera, 
  'cat3': Megaphone,
  'cat4': Palette,
  'cat5': Calculator,
  'cat6': BookOpen
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header 
        className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Sparkles className="h-6 w-6 text-amber-500" />
                <span className="font-bold text-xl">IdeaVault</span>
              </motion.div>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-6">
              <Link
                href="#"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground flex items-center space-x-1"
              >
                <TrendingUp className="h-4 w-4 text-emerald-500" />
                <span>Explorar</span>
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground flex items-center space-x-1"
              >
                <Heart className="h-4 w-4 text-rose-500" />
                <span>Mis Favoritos</span>
              </Link>
            </nav>
            <div className="flex items-center space-x-3">
              <ThemeToggle />
              <Button className="relative overflow-hidden group">
                <span className="relative z-10">Iniciar Sesión</span>
                <div className="absolute inset-0 bg-primary/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
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

      {/* Categories */}
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
            {mockCategories.slice(0, 3).map((category, index) => {
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

      {/* Prompt Grid */}
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
            {mockPrompts.map((prompt, index) => {
              const aiTool = mockAITools.find(tool => tool.id === prompt.aiToolId);
              const category = mockCategories.find(cat => cat.id === prompt.categoryId);
              
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
                            {category?.name}
                          </Badge>
                          <Badge variant="outline" className="border-purple-200 text-purple-700 dark:border-purple-700 dark:text-purple-400 group-hover:border-purple-300 dark:group-hover:border-purple-600 transition-colors">
                            {aiTool?.name}
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
                            <span className="font-medium group-hover:text-indigo-600 transition-colors">{prompt.author.username}</span>
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
    </div>
  );
}
