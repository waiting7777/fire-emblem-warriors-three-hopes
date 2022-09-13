import Layout from "../../components/marvel-snap/Layout"
import type { NextPageWithLayout } from '../_app'
import type { ReactElement } from 'react'

const MarvelSnap: NextPageWithLayout = () => {
  return (
    <div>home</div>
  )
}

export const MarvelSnapPageLayout = (page: ReactElement) => <Layout>{page}</Layout>;

MarvelSnap.getLayout = MarvelSnapPageLayout;

export default MarvelSnap