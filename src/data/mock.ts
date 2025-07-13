import { Category, AITool, Prompt, User } from '../types';

export const mockCategories: Category[] = [
  {
    id: 'cat1',
    name: 'Programadores',
    emoji: '💻',
    description: 'Prompts para desarrollo de software y tecnología',
    promptCount: 2891,
    subcategories: [
      { id: 'frontend', name: 'Frontend', categoryId: 'cat1', description: 'React, Vue, Angular, HTML/CSS', promptCount: 892 },
      { id: 'backend', name: 'Backend', categoryId: 'cat1', description: 'APIs, bases de datos, servidores', promptCount: 756 },
      { id: 'mobile', name: 'Móvil', categoryId: 'cat1', description: 'React Native, Flutter, Swift', promptCount: 445 },
      { id: 'devops', name: 'DevOps', categoryId: 'cat1', description: 'CI/CD, Docker, AWS, deployment', promptCount: 298 },
      { id: 'testing', name: 'Testing', categoryId: 'cat1', description: 'Unit tests, integration, QA', promptCount: 234 },
      { id: 'database', name: 'Base de Datos', categoryId: 'cat1', description: 'SQL, NoSQL, migrations', promptCount: 189 },
      { id: 'uiux', name: 'UI/UX', categoryId: 'cat1', description: 'Diseño de interfaces y experiencia', promptCount: 77 }
    ]
  },
  {
    id: 'cat2',
    name: 'Cineastas',
    emoji: '🎬',
    description: 'Prompts para creación audiovisual y narrativa',
    promptCount: 1240,
    subcategories: [
      { id: 'guiones', name: 'Guiones', categoryId: 'cat2', description: 'Escritura de guiones y narrativa', promptCount: 456 },
      { id: 'storyboards', name: 'Storyboards', categoryId: 'cat2', description: 'Conceptos visuales y storyboards', promptCount: 234 },
      { id: 'dialogos', name: 'Diálogos', categoryId: 'cat2', description: 'Creación de diálogos y personajes', promptCount: 189 },
      { id: 'postproduccion', name: 'Post-producción', categoryId: 'cat2', description: 'Edición y efectos', promptCount: 156 },
      { id: 'musica', name: 'Música y Audio', categoryId: 'cat2', description: 'Bandas sonoras y efectos de audio', promptCount: 205 }
    ]
  },
  {
    id: 'cat3',
    name: 'Marketers',
    emoji: '📈',
    description: 'Prompts para marketing digital y crecimiento',
    promptCount: 1567,
    subcategories: [
      { id: 'copywriting', name: 'Copywriting', categoryId: 'cat3', description: 'Textos publicitarios y ventas', promptCount: 567 },
      { id: 'social-media', name: 'Redes Sociales', categoryId: 'cat3', description: 'Contenido para redes sociales', promptCount: 445 },
      { id: 'email', name: 'Email Marketing', categoryId: 'cat3', description: 'Campañas de email y newsletters', promptCount: 234 },
      { id: 'seo', name: 'SEO', categoryId: 'cat3', description: 'Optimización para motores de búsqueda', promptCount: 189 },
      { id: 'ads', name: 'Publicidad', categoryId: 'cat3', description: 'Google Ads, Facebook Ads, campañas', promptCount: 132 }
    ]
  },
  {
    id: 'cat4',
    name: 'Diseñadores',
    emoji: '🎨',
    description: 'Prompts para diseño visual y creativo',
    promptCount: 983,
    subcategories: [
      { id: 'grafico', name: 'Diseño Gráfico', categoryId: 'cat4', description: 'Logos, branding, identidad visual', promptCount: 345 },
      { id: 'ilustracion', name: 'Ilustración', categoryId: 'cat4', description: 'Arte digital e ilustraciones', promptCount: 278 },
      { id: 'fotografia', name: 'Fotografía', categoryId: 'cat4', description: 'Conceptos fotográficos y edición', promptCount: 189 },
      { id: 'productos', name: 'Diseño de Productos', categoryId: 'cat4', description: 'Diseño industrial y productos', promptCount: 171 }
    ]
  },
  {
    id: 'cat5',
    name: 'Consultores',
    emoji: '🏢',
    description: 'Prompts para consultoría empresarial y análisis',
    promptCount: 756,
    subcategories: [
      { id: 'business', name: 'Business Intelligence', categoryId: 'cat5', description: 'Análisis de negocio y datos', promptCount: 234 },
      { id: 'reportes', name: 'Reportes', categoryId: 'cat5', description: 'Informes y presentaciones', promptCount: 189 },
      { id: 'estrategia', name: 'Estrategia', categoryId: 'cat5', description: 'Planificación estratégica', promptCount: 167 },
      { id: 'investigacion', name: 'Investigación', categoryId: 'cat5', description: 'Research y análisis de mercado', promptCount: 166 }
    ]
  },
  {
    id: 'cat6',
    name: 'Educadores',
    emoji: '🎓',
    description: 'Prompts para educación y formación académica',
    promptCount: 645,
    subcategories: [
      { id: 'contenido', name: 'Contenido Educativo', categoryId: 'cat6', description: 'Material didáctico y lecciones', promptCount: 234 },
      { id: 'evaluacion', name: 'Evaluación', categoryId: 'cat6', description: 'Exámenes y evaluaciones', promptCount: 156 },
      { id: 'curriculo', name: 'Currículos', categoryId: 'cat6', description: 'Planes de estudio y programas', promptCount: 134 },
      { id: 'investigacion-academica', name: 'Investigación', categoryId: 'cat6', description: 'Papers y investigación académica', promptCount: 121 }
    ]
  }
];

export const mockAITools: AITool[] = [
  // Chatbots
  { id: 'chatgpt', name: 'ChatGPT', type: 'Chatbot', description: 'Modelo de lenguaje conversacional de OpenAI', website: 'https://chat.openai.com', isActive: true },
  { id: 'claude', name: 'Claude', type: 'Chatbot', description: 'Asistente de IA conversacional de Anthropic', website: 'https://claude.ai', isActive: true },
  { id: 'gemini', name: 'Gemini', type: 'Chatbot', description: 'Modelo de lenguaje multimodal de Google', website: 'https://gemini.google.com', isActive: true },
  { id: 'grok', name: 'Grok', type: 'Chatbot', description: 'IA conversacional de xAI con humor', website: 'https://grok.com', isActive: true },
  { id: 'deepseek', name: 'DeepSeek', type: 'Chatbot', description: 'Modelo de lenguaje avanzado especializado en código', isActive: true },
  { id: 'perplexity', name: 'Perplexity', type: 'Chatbot', description: 'Motor de búsqueda potenciado por IA', website: 'https://perplexity.ai', isActive: true },

  // IDEs
  { id: 'cursor', name: 'Cursor', type: 'Editor de Código', description: 'Editor de código impulsado por IA', website: 'https://cursor.sh', isActive: true },
  { id: 'windsurf', name: 'Windsurf', type: 'Editor de Código', description: 'Entorno de desarrollo con IA integrada', isActive: true },
  { id: 'github-copilot', name: 'GitHub Copilot', type: 'Editor de Código', description: 'Asistente de programación de GitHub', website: 'https://github.com/features/copilot', isActive: true },
  { id: 'codeium', name: 'Codeium', type: 'Editor de Código', description: 'Autocompletado de código gratuito con IA', website: 'https://codeium.com', isActive: true },
  { id: 'replit', name: 'Replit', type: 'Editor de Código', description: 'IDE online con asistente de IA', website: 'https://replit.com', isActive: true },

  // CLI
  { id: 'claude-code', name: 'Claude Code', type: 'Línea de Comandos', description: 'Claude optimizado para desarrollo', isActive: true },
  { id: 'github-copilot-cli', name: 'GitHub Copilot CLI', type: 'Línea de Comandos', description: 'GitHub Copilot para terminal', isActive: true },
  { id: 'warp-ai', name: 'Warp AI', type: 'Línea de Comandos', description: 'Terminal inteligente con IA', website: 'https://warp.dev', isActive: true },

  // Generative
  { id: 'midjourney', name: 'Midjourney', type: 'Generación de Imágenes', description: 'Generación de imágenes artísticas con IA', website: 'https://midjourney.com', isActive: true },
  { id: 'dalle', name: 'DALL-E', type: 'Generación de Imágenes', description: 'Generación de imágenes de OpenAI', isActive: true },
  { id: 'stable-diffusion', name: 'Stable Diffusion', type: 'Generación de Imágenes', description: 'Generación de imágenes de código abierto', isActive: true },
  { id: 'leonardo-ai', name: 'Leonardo AI', type: 'Generación de Imágenes', description: 'Plataforma de arte y diseño con IA', website: 'https://leonardo.ai', isActive: true },
  { id: 'runway', name: 'Runway', type: 'Generación de Video', description: 'Herramientas creativas de IA para video', website: 'https://runway.com', isActive: true },
  { id: 'sora', name: 'Sora', type: 'Generación de Video', description: 'Generación de videos de OpenAI', isActive: true },
  { id: 'elevenlabs', name: 'ElevenLabs', type: 'Generación de Audio', description: 'Clonación y síntesis de voz con IA', website: 'https://elevenlabs.io', isActive: true },

  // Specialized
  { id: 'notion-ai', name: 'Notion AI', type: 'Especializado', description: 'Asistente de escritura integrado en Notion', website: 'https://notion.so', isActive: true },
  { id: 'figma-ai', name: 'Figma AI', type: 'Especializado', description: 'Herramientas de diseño con IA en Figma', website: 'https://figma.com', isActive: true },
  { id: 'canva-ai', name: 'Canva AI', type: 'Especializado', description: 'Suite de diseño automático de Canva', website: 'https://canva.com', isActive: true }
];

export const mockUsers: User[] = [
  {
    id: 'user1',
    email: 'alexdev@example.com',
    username: 'AlexDev',
    name: 'Alejandro Rodríguez',
    isPremium: true,
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-12-01')
  },
  {
    id: 'user2',
    email: 'maria.cine@example.com',
    username: 'MariaCine',
    name: 'María Santos',
    isPremium: false,
    createdAt: new Date('2024-02-20'),
    updatedAt: new Date('2024-11-30')
  },
  {
    id: 'user3',
    email: 'david.copy@example.com',
    username: 'DavidCopy',
    name: 'David Chen',
    isPremium: true,
    createdAt: new Date('2024-03-10'),
    updatedAt: new Date('2024-12-01')
  },
  {
    id: 'user4',
    email: 'ana.design@example.com',
    username: 'AnaDesign',
    name: 'Ana García',
    isPremium: false,
    createdAt: new Date('2024-04-05'),
    updatedAt: new Date('2024-11-28')
  },
  {
    id: 'user5',
    email: 'carlos.biz@example.com',
    username: 'CarlosBiz',
    name: 'Carlos López',
    isPremium: true,
    createdAt: new Date('2024-05-12'),
    updatedAt: new Date('2024-12-02')
  },
  {
    id: 'user6',
    email: 'prof.laura@example.com',
    username: 'ProfLaura',
    name: 'Laura Martínez',
    isPremium: false,
    createdAt: new Date('2024-06-18'),
    updatedAt: new Date('2024-11-29')
  }
];

// Función para crear prompts con más variedad
export function createMockPrompts(): Prompt[] {
  return [
    // PROGRAMADORES
    {
      id: 'prompt1',
      title: 'Generador de Componentes React',
      description: 'Crea componentes React modernos con TypeScript y Tailwind CSS',
      content: `You are an expert React developer. Create a [COMPONENT_TYPE] component that:

Requirements:
- Uses TypeScript with proper type definitions
- Implements Tailwind CSS for styling
- Follows React best practices and hooks
- Includes proper accessibility attributes
- Is responsive and mobile-friendly
- Uses modern ES6+ syntax

Component specifications:
- Name: [COMPONENT_NAME]
- Props: [COMPONENT_PROPS]
- Functionality: [COMPONENT_FUNCTIONALITY]
- Styling: [STYLING_REQUIREMENTS]

Please provide:
1. Complete component code
2. Type definitions
3. Usage example
4. Basic unit tests with Jest/React Testing Library

Make sure the component is production-ready and follows current React patterns.`,
      preview: 'Crea un componente de navegación responsivo con...',
      categoryId: 'cat1',
      subcategoryId: 'frontend',
      aiToolId: 'claude-code',
      authorId: 'user1',
      author: mockUsers[0],
      isPublic: true,
      isPremium: false,
      tags: ['react', 'typescript', 'tailwind', 'componente', 'frontend'],
      likes: 342,
      copies: 1205,
      views: 3421,
      createdAt: new Date('2024-11-15'),
      updatedAt: new Date('2024-11-20')
    },
    {
      id: 'prompt2',
      title: 'API REST con Node.js',
      description: 'Construye APIs robustas con autenticación y validación',
      content: `You are a backend developer expert. Create a RESTful API with the following specifications:

API Requirements:
- Framework: Express.js with TypeScript
- Database: [DATABASE_TYPE] (MongoDB/PostgreSQL/MySQL)
- Authentication: JWT tokens
- Validation: Input validation with Joi or Zod
- Error handling: Centralized error middleware
- Documentation: OpenAPI/Swagger specs

Endpoints to create:
- Authentication routes (login, register, refresh)
- CRUD operations for [RESOURCE_NAME]
- File upload functionality
- Rate limiting and security middleware

Please include:
1. Complete API structure
2. Database models/schemas
3. Middleware functions
4. Authentication logic
5. Error handling
6. API documentation
7. Basic test cases

Follow REST conventions and security best practices.`,
      preview: 'Construye una API completa con autenticación JWT...',
      categoryId: 'cat1',
      subcategoryId: 'backend',
      aiToolId: 'cursor',
      authorId: 'user1',
      author: mockUsers[0],
      isPublic: true,
      isPremium: false,
      tags: ['nodejs', 'api', 'backend', 'jwt', 'express'],
      likes: 289,
      copies: 743,
      views: 2156,
      createdAt: new Date('2024-11-12'),
      updatedAt: new Date('2024-11-18')
    },
    {
      id: 'prompt3',
      title: 'App Móvil React Native',
      description: 'Desarrolla aplicaciones móviles multiplataforma',
      content: `You are a React Native expert. Create a mobile app with the following features:

App Specifications:
- Platform: React Native with TypeScript
- Navigation: React Navigation v6
- State Management: Redux Toolkit or Zustand
- UI Framework: [UI_LIBRARY] (Native Base, Tamagui, etc.)
- Authentication: Firebase Auth or custom
- Backend Integration: REST API or GraphQL

Core Features:
- User authentication and registration
- [MAIN_FEATURE_1]
- [MAIN_FEATURE_2]
- Push notifications
- Offline support with async storage
- Dark/Light theme support

Please provide:
1. Project structure and setup
2. Navigation configuration
3. Authentication flow
4. Main screen components
5. API integration
6. State management setup
7. Push notification setup

Include best practices for performance and user experience.`,
      preview: 'Desarrolla una app de comercio electrónico con...',
      categoryId: 'cat1',
      subcategoryId: 'mobile',
      aiToolId: 'github-copilot',
      authorId: 'user1',
      author: mockUsers[0],
      isPublic: true,
      isPremium: false,
      tags: ['react-native', 'mobile', 'typescript', 'firebase', 'redux'],
      likes: 156,
      copies: 432,
      views: 1834,
      createdAt: new Date('2024-11-08'),
      updatedAt: new Date('2024-11-15')
    },

    // CINEASTAS
    {
      id: 'prompt4',
      title: 'Escena Cinematográfica Detallada',
      description: 'Genera descripciones de escenas para guiones profesionales',
      content: `You are a professional screenwriter and director. Create a vivid, cinematic scene description for:

Scene Context:
- Genre: [GENRE]
- Mood/Tone: [MOOD]
- Location: [LOCATION]
- Time: [TIME_OF_DAY]
- Characters: [CHARACTERS]
- Key Action: [MAIN_ACTION]

Requirements:
- Write in proper screenplay format
- Include specific visual details
- Describe camera movements and angles
- Add sound/audio cues
- Establish atmosphere and mood
- Keep dialogue natural and character-driven
- Length: [SCENE_LENGTH]

Format:
FADE IN:
EXT./INT. LOCATION - TIME

[Scene description with proper formatting]

CHARACTER
(parenthetical if needed)
Dialogue here.

Make the scene feel cinematic and engaging, with clear visual storytelling that would translate well to screen.`,
      preview: 'Describe una confrontación tensa en un callejón...',
      categoryId: 'cat2',
      subcategoryId: 'guiones',
      aiToolId: 'chatgpt',
      authorId: 'user2',
      author: mockUsers[1],
      isPublic: true,
      isPremium: false,
      tags: ['guion', 'escena', 'dialogo', 'cinematico', 'script'],
      likes: 198,
      copies: 456,
      views: 1234,
      createdAt: new Date('2024-11-10'),
      updatedAt: new Date('2024-11-18')
    },
    {
      id: 'prompt5',
      title: 'Desarrollo de Personajes',
      description: 'Crea personajes complejos y memorables para tus historias',
      content: `You are a character development expert and story consultant. Create a comprehensive character profile:

Character Basics:
- Name: [CHARACTER_NAME]
- Age: [AGE]
- Occupation: [JOB]
- Role in story: [PROTAGONIST/ANTAGONIST/SUPPORTING]

Character Development:
1. **Physical Description**: Distinctive features, mannerisms, style
2. **Personality**: Core traits, strengths, flaws, quirks
3. **Background**: Family, education, formative experiences
4. **Goals & Motivations**: What they want and why
5. **Internal Conflict**: Personal struggles and growth arc
6. **External Obstacles**: What stands in their way
7. **Relationships**: Key connections and dynamics
8. **Dialogue Voice**: How they speak uniquely
9. **Character Arc**: How they change throughout the story
10. **Secrets**: Hidden aspects that create depth

Genre Considerations: [GENRE]
Story Themes: [THEMES]

Provide a character that feels real, relatable, and serves the story's needs while being unique and memorable.`,
      preview: 'Desarrolla un antagonista carismático con motivaciones...',
      categoryId: 'cat2',
      subcategoryId: 'dialogos',
      aiToolId: 'claude',
      authorId: 'user2',
      author: mockUsers[1],
      isPublic: true,
      isPremium: false,
      tags: ['personaje', 'desarrollo', 'narrativa', 'story', 'character'],
      likes: 234,
      copies: 567,
      views: 1876,
      createdAt: new Date('2024-11-05'),
      updatedAt: new Date('2024-11-12')
    },

    // MARKETERS
    {
      id: 'prompt6',
      title: 'Framework de Copy AIDA',
      description: 'Crear copy persuasivo usando la fórmula AIDA probada',
      content: `You are a direct response copywriter. Create compelling marketing copy using the AIDA framework:

Product/Service: [PRODUCT_NAME]
Target Audience: [TARGET_AUDIENCE]
Key Benefit: [MAIN_BENEFIT]
Call to Action: [CTA]

AIDA Framework:

**ATTENTION** - Hook that stops the scroll
- Use curiosity, urgency, or bold claims
- Address pain points or desires
- Make it specific to [TARGET_AUDIENCE]

**INTEREST** - Build engagement and relevance  
- Explain the problem/opportunity
- Position your solution
- Use social proof or statistics

**DESIRE** - Create want and urgency
- List key benefits (not features)
- Use emotional triggers
- Include testimonials or case studies
- Address objections

**ACTION** - Clear, compelling CTA
- Remove friction
- Create urgency
- Offer guarantee or bonus

Requirements:
- Length: [COPY_LENGTH]
- Platform: [PLATFORM]
- Tone: [BRAND_TONE]
- Include emotional triggers
- A/B test variations

Provide 2-3 variations of the complete copy.`,
      preview: 'Escribe títulos que capten atención y conviertan...',
      categoryId: 'cat3',
      subcategoryId: 'copywriting',
      aiToolId: 'claude',
      authorId: 'user3',
      author: mockUsers[2],
      isPublic: true,
      isPremium: false,
      tags: ['copywriting', 'marketing', 'aida', 'ventas', 'conversion'],
      likes: 278,
      copies: 892,
      views: 2156,
      createdAt: new Date('2024-11-12'),
      updatedAt: new Date('2024-11-19')
    },
    {
      id: 'prompt7',
      title: 'Contenido para Redes Sociales',
      description: 'Genera posts virales para todas las plataformas sociales',
      content: `You are a social media expert who creates viral content. Generate engaging social media posts:

Campaign Details:
- Platform: [PLATFORM] (Instagram, TikTok, LinkedIn, Twitter, Facebook)
- Brand: [BRAND_NAME]
- Product/Service: [PRODUCT]
- Target Audience: [AUDIENCE]
- Campaign Goal: [GOAL] (awareness, engagement, sales, etc.)

Content Requirements:
- Hook: Attention-grabbing opening
- Value: Educational, entertaining, or inspiring content
- Call-to-Action: Clear next step
- Hashtags: Relevant and trending
- Visual Direction: Description for images/videos

Platform-Specific Considerations:
- Character limits and optimal length
- Best posting times
- Platform culture and trends
- Engagement tactics specific to platform

Please provide:
1. 5 different post variations
2. Hashtag strategy (mix of popular and niche)
3. Visual content descriptions
4. Optimal posting schedule
5. Engagement strategies

Make content shareable and aligned with current trends while maintaining brand voice.`,
      preview: 'Crea posts que generen engagement masivo en...',
      categoryId: 'cat3',
      subcategoryId: 'social-media',
      aiToolId: 'chatgpt',
      authorId: 'user3',
      author: mockUsers[2],
      isPublic: true,
      isPremium: false,
      tags: ['social-media', 'content', 'viral', 'engagement', 'hashtags'],
      likes: 312,
      copies: 1043,
      views: 2789,
      createdAt: new Date('2024-11-14'),
      updatedAt: new Date('2024-11-21')
    },

    // DISEÑADORES
    {
      id: 'prompt8',
      title: 'Conceptos de Branding Visual',
      description: 'Desarrolla identidades de marca completas y memorables',
      content: `You are a brand identity designer. Create a comprehensive visual brand concept:

Brand Information:
- Company: [COMPANY_NAME]
- Industry: [INDUSTRY]
- Target Audience: [TARGET_MARKET]
- Brand Personality: [PERSONALITY_TRAITS]
- Values: [CORE_VALUES]
- Competitors: [COMPETITOR_ANALYSIS]

Visual Identity Elements:

1. **Logo Concept**
   - Logo type (wordmark, symbol, combination)
   - Design rationale and meaning
   - Color variations (full color, monochrome, reverse)

2. **Color Palette**
   - Primary colors (2-3 colors with hex codes)
   - Secondary colors (supporting palette)
   - Color psychology and meaning
   - Usage guidelines

3. **Typography**
   - Primary typeface (headers, logo)
   - Secondary typeface (body text)
   - Font pairing rationale

4. **Visual Style**
   - Design principles (modern, classic, playful, etc.)
   - Imagery style and treatment
   - Graphic elements and patterns
   - Layout principles

5. **Applications**
   - Business cards
   - Letterhead
   - Website design direction
   - Social media templates
   - Packaging concepts

Provide detailed descriptions that a designer could execute.`,
      preview: 'Diseña una identidad completa para una startup...',
      categoryId: 'cat4',
      subcategoryId: 'grafico',
      aiToolId: 'midjourney',
      authorId: 'user4',
      author: mockUsers[3],
      isPublic: true,
      isPremium: false,
      tags: ['branding', 'logo', 'identidad', 'diseño', 'visual'],
      likes: 189,
      copies: 334,
      views: 1456,
      createdAt: new Date('2024-11-09'),
      updatedAt: new Date('2024-11-16')
    },
    {
      id: 'prompt9',
      title: 'Ilustraciones Conceptuales',
      description: 'Crea ilustraciones que comuniquen ideas complejas',
      content: `You are a conceptual illustrator. Create detailed illustration concepts that communicate complex ideas:

Project Brief:
- Concept: [MAIN_CONCEPT]
- Message: [KEY_MESSAGE]
- Audience: [TARGET_AUDIENCE]
- Medium: [DIGITAL/PRINT/ANIMATION]
- Style: [ARTISTIC_STYLE]

Illustration Elements:

1. **Composition**
   - Main focal point and hierarchy
   - Rule of thirds application
   - Balance and flow
   - Negative space usage

2. **Visual Metaphors**
   - Symbolic elements that represent the concept
   - Cultural considerations
   - Universal vs. specific imagery

3. **Color Strategy**
   - Emotional color choices
   - Contrast and harmony
   - Cultural color meanings
   - Accessibility considerations

4. **Style & Technique**
   - Art style (realistic, abstract, minimalist, etc.)
   - Texture and detail level
   - Line quality and weight
   - Shading and lighting approach

5. **Storytelling Elements**
   - Visual narrative flow
   - Character expressions and body language
   - Environmental details
   - Mood and atmosphere

Provide detailed descriptions for each element that would guide the creation of impactful conceptual illustrations.`,
      preview: 'Ilustra el concepto de transformación digital...',
      categoryId: 'cat4',
      subcategoryId: 'ilustracion',
      aiToolId: 'dalle',
      authorId: 'user4',
      author: mockUsers[3],
      isPublic: true,
      isPremium: false,
      tags: ['ilustracion', 'concepto', 'visual', 'arte', 'comunicacion'],
      likes: 145,
      copies: 278,
      views: 923,
      createdAt: new Date('2024-11-07'),
      updatedAt: new Date('2024-11-14')
    },

    // CONSULTORES
    {
      id: 'prompt10',
      title: 'Análisis de Business Intelligence',
      description: 'Genera insights de negocio accionables desde datos',
      content: `You are a business intelligence consultant. Create a comprehensive data analysis and insights report:

Business Context:
- Company: [COMPANY_NAME]
- Industry: [INDUSTRY]
- Business Model: [BUSINESS_MODEL]
- Key Metrics: [PRIMARY_KPIs]
- Time Period: [ANALYSIS_PERIOD]
- Data Sources: [DATA_SOURCES]

Analysis Framework:

1. **Executive Summary**
   - Key findings and recommendations
   - Business impact summary
   - Action priorities

2. **Data Analysis**
   - Trend analysis and patterns
   - Performance vs. benchmarks
   - Correlation insights
   - Anomaly detection

3. **Customer Insights**
   - Customer segmentation
   - Behavior patterns
   - Lifetime value analysis
   - Churn analysis

4. **Operational Insights**
   - Process efficiency metrics
   - Resource utilization
   - Bottleneck identification
   - Cost optimization opportunities

5. **Market Intelligence**
   - Competitive positioning
   - Market trends impact
   - Growth opportunities
   - Risk assessment

6. **Recommendations**
   - Specific action items
   - Implementation roadmap
   - Expected ROI
   - Success metrics

Present insights in clear, actionable format for C-level executives.`,
      preview: 'Analiza patrones de ventas para optimizar...',
      categoryId: 'cat5',
      subcategoryId: 'business',
      aiToolId: 'claude',
      authorId: 'user5',
      author: mockUsers[4],
      isPublic: true,
      isPremium: false,
      tags: ['business-intelligence', 'analisis', 'datos', 'insights', 'kpi'],
      likes: 167,
      copies: 234,
      views: 876,
      createdAt: new Date('2024-11-11'),
      updatedAt: new Date('2024-11-18')
    },

    // EDUCADORES
    {
      id: 'prompt11',
      title: 'Plan de Lección Interactivo',
      description: 'Diseña experiencias de aprendizaje engaging y efectivas',
      content: `You are an educational design expert. Create a comprehensive, interactive lesson plan:

Course Information:
- Subject: [SUBJECT_AREA]
- Topic: [LESSON_TOPIC]
- Grade Level: [STUDENT_LEVEL]
- Duration: [LESSON_LENGTH]
- Class Size: [NUMBER_OF_STUDENTS]
- Learning Environment: [IN_PERSON/ONLINE/HYBRID]

Lesson Structure:

1. **Learning Objectives**
   - Specific, measurable goals
   - Bloom's taxonomy levels
   - Skill development targets

2. **Pre-Assessment**
   - Prior knowledge check
   - Learning style identification
   - Engagement hooks

3. **Content Delivery**
   - Multi-modal presentation
   - Interactive elements
   - Real-world connections
   - Scaffolded learning progression

4. **Active Learning Activities**
   - Individual exercises
   - Group collaboration
   - Hands-on experiments/projects
   - Technology integration

5. **Assessment Methods**
   - Formative assessment checkpoints
   - Summative evaluation
   - Self-reflection opportunities
   - Peer assessment

6. **Differentiation Strategies**
   - Support for struggling learners
   - Enrichment for advanced students
   - Multiple learning styles accommodation
   - Accessibility considerations

Include detailed timing, materials needed, and adaptation suggestions.`,
      preview: 'Enseña conceptos de programación usando gamificación...',
      categoryId: 'cat6',
      subcategoryId: 'contenido',
      aiToolId: 'chatgpt',
      authorId: 'user6',
      author: mockUsers[5],
      isPublic: true,
      isPremium: false,
      tags: ['educacion', 'leccion', 'aprendizaje', 'interactivo', 'pedagogia'],
      likes: 123,
      copies: 189,
      views: 567,
      createdAt: new Date('2024-11-06'),
      updatedAt: new Date('2024-11-13')
    },

    // MÁS PROMPTS ADICIONALES PARA POBLAR LA BASE
    {
      id: 'prompt12',
      title: 'Configuración Docker para Desarrollo',
      description: 'Containeriza aplicaciones con Docker y Docker Compose',
      content: `Create a complete Docker setup for a [APPLICATION_TYPE] application...`,
      preview: 'Configura un entorno de desarrollo con Docker...',
      categoryId: 'cat1',
      subcategoryId: 'devops',
      aiToolId: 'cursor',
      authorId: 'user1',
      author: mockUsers[0],
      isPublic: true,
      isPremium: false,
      tags: ['docker', 'devops', 'containerizacion', 'desarrollo'],
      likes: 89,
      copies: 156,
      views: 445,
      createdAt: new Date('2024-11-04'),
      updatedAt: new Date('2024-11-11')
    },
    {
      id: 'prompt13',
      title: 'Storyboard para Comercial',
      description: 'Planifica secuencias visuales para publicidad',
      content: `Create a detailed storyboard for a [DURATION] commercial...`,
      preview: 'Diseña un comercial de 30 segundos que...',
      categoryId: 'cat2',
      subcategoryId: 'storyboards',
      aiToolId: 'midjourney',
      authorId: 'user2',
      author: mockUsers[1],
      isPublic: true,
      isPremium: false,
      tags: ['storyboard', 'comercial', 'publicidad', 'visual'],
      likes: 67,
      copies: 123,
      views: 334,
      createdAt: new Date('2024-11-03'),
      updatedAt: new Date('2024-11-10')
    },
    {
      id: 'prompt14',
      title: 'Campaña de Email Marketing',
      description: 'Secuencias automatizadas que nutren y convierten',
      content: `Design a complete email marketing campaign sequence...`,
      preview: 'Crea una secuencia de 7 emails para...',
      categoryId: 'cat3',
      subcategoryId: 'email',
      aiToolId: 'claude',
      authorId: 'user3',
      author: mockUsers[2],
      isPublic: true,
      isPremium: false,
      tags: ['email-marketing', 'automatizacion', 'nurturing', 'conversion'],
      likes: 145,
      copies: 298,
      views: 789,
      createdAt: new Date('2024-11-02'),
      updatedAt: new Date('2024-11-09')
    },
    {
      id: 'prompt15',
      title: 'Portafolio de Fotografía',
      description: 'Presenta tu trabajo fotográfico de forma profesional',
      content: `Create a compelling photography portfolio presentation...`,
      preview: 'Organiza tu portafolio para impresionar clientes...',
      categoryId: 'cat4',
      subcategoryId: 'fotografia',
      aiToolId: 'notion-ai',
      authorId: 'user4',
      author: mockUsers[3],
      isPublic: true,
      isPremium: false,
      tags: ['fotografia', 'portafolio', 'presentacion', 'profesional'],
      likes: 78,
      copies: 134,
      views: 456,
      createdAt: new Date('2024-11-01'),
      updatedAt: new Date('2024-11-08')
    }
  ];
}

export const mockPrompts = createMockPrompts();