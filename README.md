# IdeaVault 🏛️

Un marketplace profesional para prompts de IA organizados por profesiones. Los usuarios pueden descubrir, compartir y monetizar prompts para cineastas, programadores, marketers y más.

## 🎯 Concepto de Negocio

**IdeaVault** es un marketplace freemium donde:
- **Usuarios anónimos**: Ven solo previews de prompts
- **Usuarios registrados**: Acceso completo a prompts gratuitos
- **Usuarios premium**: Acceso a colecciones premium y contenido pagado
- **Creadores**: Pueden monetizar sus prompts y colecciones

### Categorías Principales
- 🎬 **Cineastas**: Guiones, storyboards, diálogos, post-producción
- 💻 **Programadores**: Frontend, backend, mobile, DevOps, testing
- 📈 **Marketers**: Copywriting, social media, email marketing, SEO
- 🎨 **Diseñadores**: Diseño gráfico, ilustración, fotografía
- 🏢 **Consultores**: Business intelligence, reportes, estrategia
- 🎓 **Educadores**: Contenido educativo, evaluaciones, investigación

## 🏗️ Stack Tecnológico

- **Frontend**: Next.js 14 + TypeScript + CSS personalizado
- **Componentes**: shadcn/ui components + Lucide React icons
- **Estilos**: CSS personalizado (Tailwind-like utilities)
- **Datos**: Mock data para desarrollo
- **Arquitectura**: App Router de Next.js 14

## 📁 Estructura del Proyecto

```
ideavault/
├── src/
│   ├── app/
│   │   ├── globals.css           # Estilos principales
│   │   ├── layout.tsx            # Layout principal
│   │   ├── page.tsx              # Homepage
│   │   └── prompt/[id]/
│   │       └── page.tsx          # Página de detalles de prompt
│   ├── components/
│   │   └── ui/
│   │       ├── button.tsx        # Componente Button de shadcn
│   │       └── terminal.tsx      # Componente Terminal personalizado
│   ├── data/
│   │   └── mock.ts               # Datos mock para desarrollo
│   ├── lib/
│   │   └── utils.ts              # Utilidades (cn function)
│   └── types/
│       └── index.ts              # Tipos TypeScript
├── public/                       # Assets estáticos
├── package.json                  # Dependencias
└── README.md                     # Este archivo
```

## 🎨 Componentes Principales

### 1. **Componente Terminal**
```typescript
// Muestra prompts con aspecto de terminal
<Terminal title="Claude Code - React Generator">
  {promptContent}
</Terminal>

// Preview con restricción para usuarios no logueados
<PromptPreview 
  preview="Create a responsive navigation component with..."
  isLoggedIn={false}
/>
```

### 2. **Cards de Prompt**
- Preview limitado para usuarios no logueados
- Navegación a página de detalles
- Métricas de engagement (likes, copias, vistas)
- Sistema de categorías y tags

### 3. **Páginas Implementadas**
- **Homepage** (`/`): Grid de prompts y categorías
- **Detalles de Prompt** (`/prompt/[id]`): Contenido completo o bloqueado

## 📊 Tipos de Datos

### Principales Interfaces
```typescript
interface Prompt {
  id: string;
  title: string;
  description: string;
  content: string;          // Contenido completo del prompt
  preview: string;          // Preview para usuarios no logueados
  categoryId: string;
  subcategoryId: string;
  aiToolId: string;
  author: User;
  likes: number;
  copies: number;
  views: number;
  tags: string[];
  isPremium: boolean;
}

interface Category {
  id: string;
  name: string;
  emoji: string;
  description: string;
  subcategories: Subcategory[];
  promptCount: number;
}

interface AITool {
  id: string;
  name: string;
  type: 'chatbot' | 'ide' | 'cli' | 'generative' | 'specialized';
  description: string;
}
```

## 🚀 Para Retomar el Desarrollo

### 1. **Estado Actual**
- ✅ Homepage completamente funcional
- ✅ Página de detalles de prompt
- ✅ Componente Terminal con estilo de código
- ✅ Sistema de categorías
- ✅ Datos mock realistas
- ✅ Estilos CSS completos
- ✅ Responsive design

### 2. **Iniciar el Proyecto**
```bash
cd ideavault
npm install
npm run dev
```

### 3. **Próximas Funcionalidades a Implementar**

#### **Autenticación**
- [ ] Página de login/registro
- [ ] Integración con NextAuth.js
- [ ] OAuth con Google/GitHub
- [ ] Estados de usuario (anónimo/registrado/premium)

#### **Base de Datos**
- [ ] Configurar Prisma ORM
- [ ] Base de datos PostgreSQL (Neon.tech gratis)
- [ ] Migrar datos mock a BD real
- [ ] APIs para CRUD de prompts

#### **Funcionalidades de Usuario**
- [ ] Dashboard de usuario
- [ ] Sistema de favoritos
- [ ] Historial de copias
- [ ] Perfil de usuario
- [ ] Subir nuevos prompts

#### **Búsqueda y Filtros**
- [ ] Buscador funcional
- [ ] Filtros por categoría/herramienta
- [ ] Ordenamiento (popular, reciente, más copiado)
- [ ] Paginación

#### **Monetización**
- [ ] Integración con Stripe
- [ ] Prompts premium
- [ ] Sistema de suscripciones
- [ ] Comisiones a creadores

#### **Social Features**
- [ ] Sistema de comentarios
- [ ] Ratings y reviews
- [ ] Seguir a autores
- [ ] Notificaciones

## 🛠️ Comandos Útiles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run lint         # Linter
npm run type-check   # Verificar tipos TypeScript

# Si hay problemas con Tailwind, usar estilos CSS actuales
# Los estilos están en src/app/globals.css (CSS personalizado)
```

## 🎯 Objetivos del Marketplace

1. **Facilitar el descubrimiento** de prompts de calidad
2. **Organizar por profesiones** para fácil navegación
3. **Motivar la creación** de contenido premium
4. **Generar ingresos** para creadores
5. **Crear comunidad** alrededor de prompts de IA

## 🔧 Problemas Conocidos

- **Tailwind v4 vs v3**: Actualmente usando CSS personalizado
- **Permisos WSL**: Problemas con npm install en algunos entornos
- **Node version**: Requiere Node 18+ (recomendado Node 20+)

## 📝 Datos de Prueba

El proyecto incluye datos mock realistas:
- 3 prompts de ejemplo (React, Cinematic, Marketing)
- 6 categorías principales con subcategorías
- 20+ herramientas de IA categorizadas
- 3 usuarios de ejemplo

## 🎨 Diseño y UX

- **Color scheme**: Azul profesional con acentos púrpura y verde
- **Tipografía**: System fonts modernas
- **Iconos**: Lucide React
- **Layout**: Mobile-first responsive
- **Terminal theme**: Fondo negro con texto verde (estilo hacker)

---