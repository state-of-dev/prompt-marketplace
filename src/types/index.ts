export interface User {
  id: string;
  email: string;
  username: string;
  name: string;
  avatar?: string;
  isPremium: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: string;
  name: string;
  emoji: string;
  description: string;
  subcategories: Subcategory[];
  promptCount: number;
}

export interface Subcategory {
  id: string;
  name: string;
  categoryId: string;
  description: string;
  promptCount: number;
}

export interface AITool {
  id: string;
  name: string;
  type: 'chatbot' | 'ide' | 'cli' | 'generative' | 'specialized';
  description: string;
  website?: string;
  isActive: boolean;
}

export interface Prompt {
  id: string;
  title: string;
  description: string;
  content: string;
  preview: string;
  categoryId: string;
  subcategoryId: string;
  aiToolId: string;
  authorId: string;
  author: User;
  isPublic: boolean;
  isPremium: boolean;
  price?: number;
  tags: string[];
  likes: number;
  copies: number;
  views: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  authorId: string;
  author: User;
  prompts: Prompt[];
  isPremium: boolean;
  price?: number;
  isPublic: boolean;
  tags: string[];
  subscribers: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserActivity {
  id: string;
  userId: string;
  promptId: string;
  type: 'like' | 'copy' | 'favorite' | 'view';
  createdAt: Date;
}

export interface Subscription {
  id: string;
  userId: string;
  collectionId?: string;
  authorId?: string;
  type: 'collection' | 'author' | 'premium';
  status: 'active' | 'cancelled' | 'expired';
  price: number;
  startDate: Date;
  endDate?: Date;
}

export interface SearchFilters {
  category?: string;
  subcategory?: string;
  aiTool?: string;
  author?: string;
  tags?: string[];
  isPremium?: boolean;
  priceRange?: {
    min: number;
    max: number;
  };
  sortBy?: 'newest' | 'popular' | 'mostCopied' | 'trending';
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}