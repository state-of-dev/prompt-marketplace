"use client";

import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';
import { ArrowLeft, Heart, Copy, Star, Eye, Calendar, User, Sparkles, Clock, TrendingUp, BarChart3, Share2, BookmarkPlus, Download } from 'lucide-react';
import Link from 'next/link';
import { mockPrompts, mockAITools, mockCategories } from '../../../data/mock';
import { Terminal } from '../../../components/ui/terminal';
import { Button } from '../../../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { Avatar, AvatarFallback } from '../../../components/ui/avatar';
import { ThemeToggle } from '../../../components/theme-toggle';
import { use } from 'react';

interface PromptPageProps {
  params: Promise<{ id: string }>;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function PromptPage({ params }: PromptPageProps) {
  const { id } = use(params);
  const prompt = mockPrompts.find(p => p.id === id);
  
  if (!prompt) {
    notFound();
  }

  const aiTool = mockAITools.find(tool => tool.id === prompt.aiToolId);
  const category = mockCategories.find(cat => cat.id === prompt.categoryId);
  const subcategory = category?.subcategories.find(sub => sub.id === prompt.subcategoryId);

  // Simulamos que el usuario NO está logueado
  const isLoggedIn = false;

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
                href="/"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground flex items-center space-x-1"
              >
                <span>Inicio</span>
              </Link>
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Main Content */}
          <div className="lg:col-span-2">
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
                </CardContent>
              </Card>
            </motion.div>

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
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
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
                    <h4 className="font-semibold text-lg mb-2">{aiTool?.name}</h4>
                    <p className="text-muted-foreground leading-relaxed">{aiTool?.description}</p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="bg-slate-50 border-slate-200 text-slate-700 dark:bg-slate-800/50 dark:border-slate-700 dark:text-slate-300">
                      <Clock className="h-3 w-3 mr-1 text-orange-500" />
                      {aiTool?.type}
                    </Badge>
                  </div>
                  
                  {aiTool?.website && (
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
          </div>
        </motion.div>
      </div>
    </div>
  );
}