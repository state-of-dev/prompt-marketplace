import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Limpiar datos existentes
  await prisma.userActivity.deleteMany()
  await prisma.prompt.deleteMany()
  await prisma.subcategory.deleteMany()
  await prisma.category.deleteMany()
  await prisma.aITool.deleteMany()
  await prisma.user.deleteMany()

  console.log('🗑️  Datos existentes eliminados')

  // Crear usuarios
  const users = await Promise.all([
    prisma.user.create({
      data: {
        id: 'user1',
        email: 'john.doe@example.com',
        username: 'johndoe',
        name: 'John Doe',
        isPremium: false,
      }
    }),
    prisma.user.create({
      data: {
        id: 'user2',
        email: 'jane.smith@example.com',
        username: 'janesmith',
        name: 'Jane Smith',
        isPremium: true,
      }
    }),
    prisma.user.create({
      data: {
        id: 'user3',
        email: 'alex.dev@example.com',
        username: 'alexdev',
        name: 'Alex Developer',
        isPremium: false,
      }
    })
  ])

  console.log('👥 Usuarios creados:', users.length)

  // Crear herramientas IA
  const aiTools = await Promise.all([
    prisma.aITool.create({
      data: {
        id: 'chatgpt',
        name: 'ChatGPT',
        type: 'chatbot',
        description: 'Modelo de lenguaje conversacional de OpenAI'
      }
    }),
    prisma.aITool.create({
      data: {
        id: 'claude',
        name: 'Claude',
        type: 'chatbot',
        description: 'Asistente de IA de Anthropic'
      }
    }),
    prisma.aITool.create({
      data: {
        id: 'cursor',
        name: 'Cursor',
        type: 'ide',
        description: 'Editor de código con IA integrada'
      }
    }),
    prisma.aITool.create({
      data: {
        id: 'dalle',
        name: 'DALL-E',
        type: 'generative',
        description: 'Generador de imágenes con IA'
      }
    }),
    prisma.aITool.create({
      data: {
        id: 'midjourney',
        name: 'Midjourney',
        type: 'generative',
        description: 'Generador de arte e imágenes'
      }
    })
  ])

  console.log('🤖 AI Tools creadas:', aiTools.length)

  // Crear categorías y subcategorías
  const categories = await Promise.all([
    prisma.category.create({
      data: {
        id: 'programmers',
        name: 'Programadores',
        emoji: '💻',
        description: 'Prompts para desarrollo de software y programación',
        subcategories: {
          create: [
            { id: 'frontend', name: 'Frontend', description: 'React, Vue, Angular, CSS' },
            { id: 'backend', name: 'Backend', description: 'APIs, bases de datos, servidores' },
            { id: 'mobile', name: 'Mobile', description: 'iOS, Android, React Native' },
            { id: 'devops', name: 'DevOps', description: 'CI/CD, Docker, Kubernetes' }
          ]
        }
      }
    }),
    prisma.category.create({
      data: {
        id: 'filmmakers',
        name: 'Cineastas',
        emoji: '🎬',
        description: 'Prompts para producción audiovisual y cinematografía',
        subcategories: {
          create: [
            { id: 'scripts', name: 'Guiones', description: 'Escritura de guiones y diálogos' },
            { id: 'storyboard', name: 'Storyboard', description: 'Planificación visual de escenas' },
            { id: 'postproduction', name: 'Postproducción', description: 'Edición y efectos' }
          ]
        }
      }
    }),
    prisma.category.create({
      data: {
        id: 'marketers',
        name: 'Marketers',
        emoji: '📈',
        description: 'Prompts para marketing digital y copywriting',
        subcategories: {
          create: [
            { id: 'copywriting', name: 'Copywriting', description: 'Textos persuasivos y publicitarios' },
            { id: 'social-media', name: 'Social Media', description: 'Contenido para redes sociales' },
            { id: 'email-marketing', name: 'Email Marketing', description: 'Campañas de email' }
          ]
        }
      }
    })
  ])

  console.log('📂 Categorías creadas:', categories.length)

  // Obtener subcategorías para los prompts
  const frontendSubcat = await prisma.subcategory.findFirst({ where: { name: 'Frontend' } })
  const scriptsSubcat = await prisma.subcategory.findFirst({ where: { name: 'Guiones' } })
  const copywritingSubcat = await prisma.subcategory.findFirst({ where: { name: 'Copywriting' } })

  // Crear prompts
  const prompts = await Promise.all([
    prisma.prompt.create({
      data: {
        id: 'prompt1',
        title: 'React Component Generator',
        description: 'Genera componentes React funcionales con TypeScript y mejores prácticas',
        content: `Eres un experto desarrollador React con TypeScript. Crea un componente React funcional que cumpla con los siguientes requisitos:

REQUISITOS:
- Usar TypeScript con tipos explícitos
- Implementar props interface
- Incluir useState y useEffect si es necesario
- Seguir mejores prácticas de React
- Incluir comentarios explicativos
- Usar CSS modules o styled-components para estilos

ESTRUCTURA:
1. Interface de props
2. Componente funcional
3. Hooks necesarios
4. JSX con accessibility
5. Export default

EJEMPLO DE USO:
Quiero un componente de tarjeta de producto que reciba: title, price, image, description, onAddToCart

Genera el código completo con TypeScript.`,
        preview: 'Eres un experto desarrollador React con TypeScript. Crea un componente React funcional que cumpla con los siguientes requisitos...',
        categoryId: categories[0].id,
        subcategoryId: frontendSubcat!.id,
        aiToolId: 'claude',
        authorId: users[0].id,
        likes: 234,
        copies: 156,
        views: 1200,
        tags: ['react', 'typescript', 'component', 'frontend']
      }
    }),
    prisma.prompt.create({
      data: {
        id: 'prompt2',
        title: 'Cinema Storyboard Creator',
        description: 'Crea storyboards detallados para escenas cinematográficas',
        content: `Eres un director de cine experimentado especializado en storyboarding. Ayúdame a crear un storyboard detallado para una escena.

INFORMACIÓN REQUERIDA:
- Género de la película
- Duración estimada de la escena
- Personajes involucrados
- Ubicación/ambiente
- Objetivo narrativo de la escena

FORMATO DE SALIDA:
Para cada toma incluye:
1. NÚMERO DE TOMA: [X]
2. TIPO DE PLANO: (Primer plano, plano medio, plano general, etc.)
3. ÁNGULO DE CÁMARA: (Normal, contrapicado, picado, holandés)
4. MOVIMIENTO: (Fija, paneo, travelling, zoom)
5. DURACIÓN: [segundos]
6. DESCRIPCIÓN VISUAL: [Qué se ve en pantalla]
7. AUDIO/DIÁLOGO: [Sonidos, música, diálogos]
8. NOTAS DE DIRECCIÓN: [Instrucciones especiales]

EJEMPLO:
Escena: Confrontación en oficina corporativa, thriller psicológico, 2 minutos, protagonista descubre traición.`,
        preview: 'Eres un director de cine experimentado especializado en storyboarding. Ayúdame a crear un storyboard detallado...',
        categoryId: categories[1].id,
        subcategoryId: scriptsSubcat!.id,
        aiToolId: 'chatgpt',
        authorId: users[1].id,
        likes: 189,
        copies: 89,
        views: 850,
        isPremium: true,
        price: 9.99,
        tags: ['storyboard', 'cinema', 'directing', 'film']
      }
    }),
    prisma.prompt.create({
      data: {
        id: 'prompt3',
        title: 'Marketing Copy Template',
        description: 'Plantillas profesionales para copy de marketing digital efectivo',
        content: `Eres un copywriter senior especializado en marketing digital con 10+ años de experiencia. Crea copy persuasivo y efectivo.

INFORMACIÓN DEL PRODUCTO/SERVICIO:
- Nombre:
- Público objetivo:
- Propuesta de valor única:
- Precio:
- Competencia principal:
- Canal de distribución:

TIPOS DE COPY A GENERAR:
1. HEADLINE PRINCIPAL (6 variaciones)
2. SUBHEADLINE (3 opciones)
3. BULLET POINTS DE BENEFICIOS (5-7 puntos)
4. CALL TO ACTION (4 variaciones)
5. COPY PARA REDES SOCIALES (Instagram, LinkedIn, Twitter)
6. EMAIL SUBJECT LINES (10 opciones)
7. COPY DE URGENCIA/ESCASEZ

FRAMEWORKS A USAR:
- AIDA (Atención, Interés, Deseo, Acción)
- PAS (Problem, Agitation, Solution)
- Before/After/Bridge

TONO Y ESTILO:
- Profesional pero cercano
- Orientado a beneficios
- Crear urgencia sin sonar desesperado
- Incluir prueba social cuando sea relevante

Genera copy completo para campaña de lanzamiento.`,
        preview: 'Eres un copywriter senior especializado en marketing digital con 10+ años de experiencia...',
        categoryId: categories[2].id,
        subcategoryId: copywritingSubcat!.id,
        aiToolId: 'claude',
        authorId: users[2].id,
        likes: 312,
        copies: 234,
        views: 1560,
        tags: ['copywriting', 'marketing', 'sales', 'conversion']
      }
    })
  ])

  console.log('📝 Prompts creados:', prompts.length)

  // Crear algunas actividades de usuario
  await Promise.all([
    prisma.userActivity.create({
      data: {
        userId: users[0].id,
        promptId: prompts[1].id,
        type: 'favorite'
      }
    }),
    prisma.userActivity.create({
      data: {
        userId: users[0].id,
        promptId: prompts[2].id,
        type: 'copy'
      }
    }),
    prisma.userActivity.create({
      data: {
        userId: users[1].id,
        promptId: prompts[0].id,
        type: 'view'
      }
    }),
    prisma.userActivity.create({
      data: {
        userId: users[1].id,
        promptId: prompts[0].id,
        type: 'copy'
      }
    })
  ])

  console.log('📊 Actividades de usuario creadas')

  console.log('✅ Seed completado exitosamente!')
}

main()
  .catch((e) => {
    console.error('❌ Error en seed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })