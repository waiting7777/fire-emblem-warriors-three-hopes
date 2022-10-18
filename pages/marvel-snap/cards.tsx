import { getAllHeros } from '../../models/mavel-snap/hero';
import { MarvelSnapPageLayout } from './index'
import type { MS_Hero } from '@prisma/client';

const Cards = ({ heros }: { heros: MS_Hero[] }) => {
  return (
    <div>{JSON.stringify(heros)}</div>
  )
}

Cards.getLayout = MarvelSnapPageLayout;

export default Cards

export async function getServerSideProps() {
  // Fetch data from external API
  const heros = await getAllHeros()

  // Pass data to the page via props
  return { props: { heros } }
}