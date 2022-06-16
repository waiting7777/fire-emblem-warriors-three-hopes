import Head from 'next/head'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div>
      <Head>
        <title>聖火降魔錄 Fire Emblem</title>
        <meta name="description" content="聖火降魔錄 Fire Emblem 資料網站" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='container mx-auto'>
        <Hero />
        <h1 className='text-red-500'>聖火降魔錄 Fire Emblem</h1>
      </div>
    </div>
  )
}

