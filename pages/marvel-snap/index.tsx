import Layout from "../../components/marvel-snap/Layout"
import type { NextPageWithLayout } from '../_app'
import type { ReactElement } from 'react'
import Image from "next/image"

const MarvelSnap: NextPageWithLayout = () => {
  return (
    <div>
      <div className="container py-10">
        <div className='bg-black mb-3 w-[797px] mx-auto'>
          <Image src="/images/marvel-snap/season-symbiote-invasion.webp" width="797" height="443" layout="responsive" alt="logo" />
        </div>
      </div>
    </div>
  )
}

export const MarvelSnapPageLayout = (page: ReactElement) => <Layout>{page}</Layout>;

MarvelSnap.getLayout = MarvelSnapPageLayout;

export default MarvelSnap