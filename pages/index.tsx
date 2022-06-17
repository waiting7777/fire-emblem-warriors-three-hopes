import Head from 'next/head'
import Hero from '../components/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Import Data - The Modern Gaming Data Resource</title>
        <meta name="description" content="Import Data - The Modern Gaming Data Resource" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <div className='container mx-auto p-6 min-h-screen'>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <div className='aspect-video'>
            <Image src='/images/fire-emblem.jpg' alt='Fire emblem warriors three hopes' width={1048} height={589} />
          </div>
        </div>
      </div>
    </div>
  )
}

