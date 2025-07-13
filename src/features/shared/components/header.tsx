"use client";

import { motion } from 'framer-motion';
import { TrendingUp, Heart, Sparkles, LogOut, User, Crown } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { ThemeToggle } from '../../../components/theme-toggle';
import { useAuth } from '../../../contexts/auth-context';
import { signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  const { user, isAuthenticated, isPremium, isLoading } = useAuth();
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
            
            {isLoading ? (
              <div className="w-8 h-8 rounded-full bg-muted animate-pulse" />
            ) : isAuthenticated && user ? (
              <div className="flex items-center space-x-3">
                {isPremium && (
                  <div className="flex items-center space-x-1 px-2 py-1 bg-amber-100 dark:bg-amber-900/30 rounded-full">
                    <Crown className="h-3 w-3 text-amber-600" />
                    <span className="text-xs font-medium text-amber-700 dark:text-amber-400">
                      Premium
                    </span>
                  </div>
                )}
                
                <div className="flex items-center space-x-2">
                  {user.image ? (
                    <Image
                      src={user.image}
                      alt={user.name || 'Usuario'}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <User className="h-4 w-4 text-primary-foreground" />
                    </div>
                  )}
                  
                  <div className="hidden md:block">
                    <p className="text-sm font-medium">
                      {user.name || 'Usuario'}
                    </p>
                  </div>
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => signOut()}
                  className="flex items-center space-x-1"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="hidden md:inline">Salir</span>
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => signIn('google')}
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
                >
                  Google
                </Button>
                <Button
                  size="sm"
                  onClick={() => signIn('github')}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700"
                >
                  GitHub
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
}