import Head from 'next/head'
import Hero from '../components/Hero'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Import Data - The Gaming Data Resource</title>
        <meta name="description" content="Import Data - The Gaming Data Resource" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <div className='container py-12 min-h-screen'>
        <div className='grid md:grid-cols-3 gap-8'>
        <div className="rounded overflow-hidden shadow-lg cursor-pointer">
            <Link href="/torchlight-infinite">
              <div>
                <Image src='/images/torchlight-infinite/hero.png' alt='Torchlight Infinite' width={1048} height={589} />
              </div>
            </Link>
          </div>
          <div className="rounded overflow-hidden shadow-lg cursor-pointer">
            <Link href="/marvel-snap">
              <div>
                <Image src='/images/marvel-snap/hero.jpeg' alt='Marvel Snap' width={1048} height={589} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

