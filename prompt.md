# Prompt para IdeaVault - Marketplace de Prompts de IA

## Descripción del Proyecto

Crea un marketplace completo llamado "IdeaVault" para comprar y vender prompts de IA con modelo freemium. Los usuarios anónimos ven previews, los registrados acceden a prompts gratuitos completos, y los premium a colecciones pagadas.

## Stack Técnico Requerido

```
- Next.js 14 con App Router
- TypeScript completo
- shadcn/ui componentes
- Tailwind CSS v3
- Framer Motion para animaciones
- Lucide React para iconos
- Tema yellow de shadcn (colores OKLCH exactos)
- Dark/Light mode funcional
```

## Estructura y Funcionalidades

### 1. Homepage Principal
- **Header sticky** con backdrop blur y navegación
- **Hero section** con buscador y estadísticas (25k usuarios, 98% satisfacción)
- **Grid de categorías** (3 principales) con hover effects
- **Grid de prompts destacados** con preview limitado
- **Animaciones scroll-triggered** suaves con Framer Motion

### 2. Página de Detalles de Prompt
- **Layout de 2 columnas** (contenido principal + sidebar)
- **Breadcrumb navigation** con botón de regreso animado
- **Información completa** del prompt con tags y estadísticas
- **Terminal component** personalizado para mostrar código
- **Sistema de restricción** para usuarios no logueados
- **Sidebar** con info del autor y herramienta IA

### 3. Componentes Especializados

#### Terminal Component
```
- Diseño tipo terminal de código (fondo negro)
- Header con círculos de semáforo (rojo, amarillo, verde)
- Texto verde estilo matriz con font monospace
- Botón de copia funcional
- Overlay de restricción para usuarios no premium
```

#### Theme System
```
- Dark/light mode toggle funcional
- Transiciones suaves entre temas
- Colores OKLCH del tema yellow de shadcn
- Fallback HSL para compatibilidad
```

## Categorías del Marketplace

### 6 Profesiones Principales:
1. **Cineastas** 🎬 - Guiones, diálogos, storyboards, post-producción
2. **Programadores** 💻 - Frontend, backend, mobile, DevOps, testing
3. **Marketers** 📈 - Copywriting, social media, email marketing, SEO
4. **Diseñadores** 🎨 - Diseño gráfico, ilustración, fotografía
5. **Consultores** 🏢 - Business intelligence, reportes, estrategia
6. **Educadores** 🎓 - Contenido educativo, evaluaciones, investigación

## Datos Mock Incluidos

### Prompts de Ejemplo (3):
1. **React Component Generator** - Para programadores
2. **Cinematic Scene Creator** - Para cineastas  
3. **Marketing Copy Optimizer** - Para marketers

### Herramientas IA (20+):
- **Chatbots**: ChatGPT, Claude, Gemini, Grok, DeepSeek
- **IDEs**: Cursor, Windsurf, GitHub Copilot, Codeium
- **CLI**: Claude Code, GitHub Copilot CLI, Warp AI
- **Generativas**: Midjourney, DALL-E, Stable Diffusion, Runway
- **Especializadas**: Notion AI, Figma AI, Canva AI

## Diseño y UX

### Estilo Visual:
- **Inspiración**: Dashboard oficial de shadcn/ui
- **Colores**: Tema yellow con acentos amarillos únicamente
- **Tipografía**: Inter font, pesos consistentes
- **Espaciado**: Sistema de 8px, containers max-w-6xl
- **Bordes**: border-2 en elementos principales, radius 0.65rem

### Animaciones:
- **Scroll triggered** con `whileInView`
- **Stagger animations** en grids
- **Hover effects** microinteracciones
- **Page transitions** fluidas
- **Transform hover** (-translate-y-2 en cards)

### Iconos Abundantes:
- **Navegación**: Sparkles, TrendingUp, Heart, Search
- **Categorías**: Code2, Camera, Megaphone, Palette, Calculator, BookOpen
- **Acciones**: BookmarkPlus, Share2, Download, Copy, Star
- **Estadísticas**: Eye, Calendar, Clock, BarChart3, Users

## Arquitectura de Datos

### Interfaces TypeScript:
```typescript
interface Prompt {
  id: string;
  title: string;
  description: string;
  content: string;      // Prompt completo
  preview: string;      // Para usuarios no logueados
  categoryId: string;
  aiToolId: string;
  author: User;
  likes: number;
  copies: number;
  views: number;
  tags: string[];
  isPremium: boolean;
  createdAt: Date;
}

interface Category {
  id: string;
  name: string;
  description: string;
  emoji: string;
  promptCount: number;
  subcategories: Subcategory[];
}

interface AITool {
  id: string;
  name: string;
  description: string;
  type: string;
  website?: string;
}
```

## Funcionalidades Específicas

### Modelo Freemium:
- **Anónimos**: Solo previews con overlay de restricción
- **Registrados**: Prompts gratuitos completos
- **Premium**: Acceso a colecciones exclusivas

### Componentes shadcn/ui:
- Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter
- Button con variantes (default, outline, ghost, secondary)
- Input con íconos integrados
- Badge para categorías y tags
- Avatar para perfiles de usuario

### Navegación:
- **Homepage**: `/` con grid de prompts y categorías
- **Detalles**: `/prompt/[id]` con información completa
- **Header sticky** con navegación consistente

## Prompt Específico para IA de Diseño

```
Crea un marketplace de prompts de IA llamado "IdeaVault" usando Next.js 14, TypeScript, shadcn/ui con tema yellow exacto (colores OKLCH), y Framer Motion. 

Incluye:
- Homepage con hero, 3 categorías (Cineastas, Programadores, Marketers), y grid de prompts
- Página de detalles con terminal component personalizado y sidebar
- 6 categorías profesionales con subcategorías específicas
- 20+ herramientas IA categorizadas
- 3 prompts de ejemplo completos
- Dark/light mode funcional
- Animaciones scroll-triggered suaves
- Iconos Lucide abundantes
- Modelo freemium con restricciones
- Sistema de preview limitado para no logueados
- Diseño exacto al dashboard de shadcn con espaciados profesionales

El terminal debe tener fondo negro, header con círculos de semáforo, texto verde, y funcionalidad de copia. Usa colores OKLCH del tema yellow, transiciones suaves, y efectos hover en todos los elementos.
```

---

## Archivos Clave a Generar

```
src/
├── app/
│   ├── page.tsx              # Homepage con categorías y prompts
│   ├── prompt/[id]/page.tsx  # Página de detalles
│   ├── layout.tsx            # Layout con ThemeProvider
│   └── globals.css           # Tema OKLCH y estilos
├── components/
│   ├── ui/
│   │   ├── terminal.tsx      # Componente principal único
│   │   ├── button.tsx        # shadcn button
│   │   ├── card.tsx          # shadcn card
│   │   ├── input.tsx         # shadcn input
│   │   ├── badge.tsx         # shadcn badge
│   │   └── avatar.tsx        # shadcn avatar
│   ├── theme-provider.tsx    # Provider personalizado
│   └── theme-toggle.tsx      # Toggle dark/light
├── types/
│   └── index.ts              # Interfaces TypeScript
├── data/
│   └── mock.ts               # Datos realistas
└── lib/
    └── utils.ts              # Utilidades shadcn
```

## Resultado Esperado

Una aplicación completamente funcional que rivalice con productos comerciales, con diseño profesional tipo dashboard de shadcn, animaciones fluidas, y arquitectura escalable para futuras funcionalidades como autenticación, base de datos, y monetización.