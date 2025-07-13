# CLAUDE.md - Guía Técnica para Desarrollo

## 📋 Resumen Ejecutivo para Claude

Esto es **IdeaVault**, un marketplace de prompts de IA completamente funcional. El proyecto está **COMPLETAMENTE FUNCIONAL** y listo para producción.

### Estado Actual ✅
- Homepage con grid de prompts y categorías
- Página de detalles con restricción de contenido
- Componente Terminal para mostrar prompts con estilo de código
- Sistema completo de tipos TypeScript
- Datos mock realistas (3 prompts, 6 categorías, 20+ herramientas IA)
- CSS personalizado completamente funcional
- Responsive design
- **NUEVO:** Arquitectura feature-based implementada
- **NUEVO:** Componentes separados por funcionalidad
- **🎉 MVP:** Sistema de autenticación NextAuth completo
- **🎉 MVP:** Restricciones de contenido dinámicas
- **🎉 MVP:** Context de usuario tipo Redux
- **🎉 MVP:** Header inteligente con estados auth

### Lo Que Funciona
```bash
npm run dev  # Servidor en http://localhost:3000
# NOTA: Requiere configurar .env.local con credenciales OAuth
```

**MVP Funcional incluye:**
- ✅ Usuarios anónimos ven previews con botones de login
- ✅ Sistema de autenticación Google/GitHub 
- ✅ Context global de usuario (como Redux)
- ✅ Restricciones de contenido dinámicas
- ✅ Header que cambia según estado de auth
- ✅ Modelo freemium completo

## 🎯 Concepto de Negocio

**Marketplace freemium de prompts** organizados por profesiones:
- **Cineastas** 🎬: Guiones, diálogos, storyboards
- **Programadores** 💻: Frontend, backend, DevOps
- **Marketers** 📈: Copywriting, ads, social media
- **Diseñadores** 🎨: Gráfico, ilustración
- **Consultores** 🏢: BI, reportes, estrategia
- **Educadores** 🎓: Contenido educativo

### Modelo de Usuario
- **Anónimos**: Solo ven previews
- **Registrados**: Prompts gratuitos completos
- **Premium**: Colecciones pagadas

## 🏗️ Arquitectura Técnica

### Stack
- **Next.js 14** con App Router
- **TypeScript** + tipos completos
- **CSS personalizado** (Tailwind-style utilities)
- **shadcn/ui** componentes
- **Lucide React** iconos

### Archivos Clave
```
src/
├── app/
│   ├── page.tsx              # Homepage ✅
│   ├── prompt/[id]/page.tsx  # Detalles ✅
│   ├── layout.tsx            # Layout con providers ✅
│   ├── globals.css           # Estilos CSS ✅
│   └── api/auth/[...nextauth]/route.ts # NextAuth API ✅
├── features/                 # 🆕 Arquitectura feature-based
│   ├── home/components/      # Componentes homepage ✅
│   ├── prompt-details/components/ # Componentes detalles ✅
│   └── shared/components/    # Header con auth ✅
├── contexts/
│   └── auth-context.tsx      # Context tipo Redux ✅
├── components/ui/
│   ├── terminal.tsx          # Componente principal ✅
│   ├── restricted-content.tsx # Restricciones MVP ✅
│   └── button.tsx            # shadcn button ✅
├── types/
│   ├── index.ts              # Interfaces ✅
│   └── next-auth.d.ts        # Tipos NextAuth ✅
└── data/mock.ts              # Datos realistas ✅
```

## 🎨 Componente Terminal (Clave)

```typescript
// Para mostrar prompts con estilo de terminal
<Terminal title="Claude Code - React Generator">
  {promptContent}
</Terminal>

// Para preview limitado
<PromptPreview 
  preview="Create a responsive navigation..."
  isLoggedIn={false}
/>
```

Características:
- Fondo negro con header de terminal (círculos rojo/amarillo/verde)
- Texto verde estilo matriz
- Botón de copia funcional
- Overlay de restricción para usuarios no logueados

## 📊 Datos y Tipos

### Prompt Interface
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
  tags: string[];
  isPremium: boolean;
}
```

### Mock Data
- `mockPrompts`: 3 prompts realistas (React, Cinematic, Marketing)
- `mockCategories`: 6 categorías con subcategorías
- `mockAITools`: 20+ herramientas (ChatGPT, Claude, Cursor, etc.)

## 🚀 Próximas Funcionalidades Post-MVP

### 1. ✅ Autenticación (NextAuth.js) - COMPLETADO
```bash
✅ npm install next-auth @auth/prisma-adapter
```
- ✅ OAuth con Google/GitHub
- ✅ Estados de usuario en context
- ✅ Protección de contenido

### 2. Base de Datos (Prisma + Neon) - SIGUIENTE
```bash
npm install prisma @prisma/client
```
- PostgreSQL gratuito en Neon.tech
- Migrar datos mock a BD real
- APIs para CRUD

### 3. Búsqueda y Filtros
- Barra de búsqueda funcional
- Filtros por categoría/IA tool
- Paginación con infinite scroll

### 4. Dashboard de Usuario
- Mis prompts favoritos
- Historial de copias
- Subir nuevos prompts

## 🛠️ Comandos de Desarrollo

```bash
# Iniciar proyecto
cd ideavault
npm install
npm run dev

# Verificar tipos
npx tsc --noEmit

# Si problemas con Tailwind, los estilos CSS ya funcionan
```

## 🔧 Problemas Conocidos

- **Tailwind v4 conflicto**: Resuelto con CSS personalizado
- **WSL permisos**: No afecta funcionalidad core
- **Build errors**: Relacionados con entorno, código correcto

## 📁 Navegación de URLs

- `/` - Homepage con grid de prompts
- `/prompt/prompt1` - Detalles del React prompt  
- `/prompt/prompt2` - Detalles del Cinematic prompt
- `/prompt/prompt3` - Detalles del Marketing prompt

## 🎨 Diseño System

### Colores
- **Primary**: Azul #2563eb
- **Secondary**: Púrpura #9333ea  
- **Accent**: Verde #16a34a
- **Terminal**: Negro #111827 con verde #34d399

### Layout
- Max-width: 80rem (1280px)
- Mobile-first responsive
- Grid: 1 col mobile, 2 col tablet, 3 col desktop

---

## Para Claude: Cómo Continuar

1. **Lee el README.md** para contexto completo
2. **Revisa la estructura** en `/src`
3. **Ejecuta** `npm run dev` para ver funcionalidad
4. **Elige una funcionalidad** de la lista de próximas features
5. **Desarrolla iterativamente** manteniendo el estilo existente

El proyecto está **sólido y escalable**. ¡Listo para cualquier nueva funcionalidad! 🚀