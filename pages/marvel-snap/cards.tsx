import { getAllHeros } from '../../models/mavel-snap/hero';
import { MarvelSnapPageLayout } from './index'
import type { MSHero } from '@prisma/client';
import { kebabCase } from 'lodash-es'
import Image from 'next/image';

const Cards = ({ heros }: { heros: MSHero[] }) => {
  return (
    <div className='container mx-auto py-10'>
      <div className='flex'>
      {heros.map(hero => (
        <div key={hero.id}>
          <Image src={`/images/marvel-snap/heros/${kebabCase(hero.name)}.webp`} width="163" height="163" alt={hero.name_zhtw} />
        </div>
      ))}
      </div>
    </div>
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