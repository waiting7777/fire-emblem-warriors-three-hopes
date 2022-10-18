import Layout from "../../components/torchlight-infinite/Layout"
import type { NextPageWithLayout } from '../_app'
import type { ReactElement } from 'react'

const TorchlightInfinite: NextPageWithLayout = () => {
  return (
    <div>home</div>
  )
}

export const TorchlightInfinitePageLayout = (page: ReactElement) => <Layout>{page}</Layout>;

TorchlightInfinite.getLayout = TorchlightInfinitePageLayout;

export default TorchlightInfinite