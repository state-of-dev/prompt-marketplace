import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/prisma"

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  events: {
    async createUser({ user }) {
      // Crear username automático cuando se crea un usuario
      if (user.email && !user.username) {
        const username = user.email.split('@')[0] + '_' + Math.random().toString(36).substr(2, 4)
        await prisma.user.update({
          where: { id: user.id },
          data: { username }
        })
      }
    },
  },
  callbacks: {
    async session({ session, user }) {
      if (user) {
        session.user.id = user.id
        session.user.isPremium = user.isPremium || false
      }
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }