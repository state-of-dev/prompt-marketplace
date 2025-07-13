"use client";

import { motion } from 'framer-motion';
import { TrendingUp, Heart, Sparkles } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { ThemeToggle } from '../../../components/theme-toggle';
import Link from 'next/link';

export function Header() {
  return (
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
  );
}