import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getAllHeros = async () => {
  const allHeros = await prisma.mSHero.findMany()
  return allHeros
}