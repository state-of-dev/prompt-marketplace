import { PrismaClient } from '@prisma/client'
import { mockCategories, mockAITools, mockPrompts } from '../src/data/mock'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Iniciando seeding de la base de datos...')

  // Crear un usuario por defecto
  const user = await prisma.user.create({
    data: {
      email: 'demo@ideavault.com',
      username: 'demo_user',
      name: 'Usuario Demo',
      isPremium: false,
    },
  })
  console.log('✅ Usuario demo creado')

  // Insertar categorías
  for (const categoryData of mockCategories) {
    const category = await prisma.category.create({
      data: {
        id: categoryData.id,
        name: categoryData.name,
        emoji: categoryData.emoji,
        description: categoryData.description,
        promptCount: categoryData.promptCount,
      },
    })

    // Insertar subcategorías
    for (const subcategoryData of categoryData.subcategories) {
      await prisma.subcategory.create({
        data: {
          id: subcategoryData.id,
          name: subcategoryData.name,
          description: subcategoryData.description,
          promptCount: subcategoryData.promptCount,
          categoryId: category.id,
        },
      })
    }
  }
  console.log('✅ Categorías y subcategorías creadas')

  // Insertar herramientas IA
  for (const toolData of mockAITools) {
    await prisma.aITool.create({
      data: {
        id: toolData.id,
        name: toolData.name,
        type: toolData.type,
        description: toolData.description,
        website: toolData.website,
        isActive: toolData.isActive,
      },
    })
  }
  console.log('✅ Herramientas IA creadas')

  // Insertar prompts
  for (const promptData of mockPrompts) {
    await prisma.prompt.create({
      data: {
        id: promptData.id,
        title: promptData.title,
        description: promptData.description,
        content: promptData.content,
        preview: promptData.preview,
        isPublic: promptData.isPublic,
        isPremium: promptData.isPremium,
        price: promptData.price,
        tags: promptData.tags,
        likes: promptData.likes,
        copies: promptData.copies,
        views: promptData.views,
        categoryId: promptData.categoryId,
        subcategoryId: promptData.subcategoryId,
        aiToolId: promptData.aiToolId,
        authorId: user.id, // Usar el usuario demo como autor
      },
    })
  }
  console.log('✅ Prompts creados')

  console.log('🎉 Seeding completado exitosamente!')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })