import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getAllHeros = async () => {
  const allHeros = await prisma.mS_Hero.findMany()
  return allHeros
}