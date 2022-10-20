import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getAllLocations = async () => {
  const allHeros = await prisma.mS_Location.findMany()
  return allHeros
}