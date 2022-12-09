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
          <Link href="/tft">
            <div className='flex flex-col items-center'>
              <Image src='/images/tft/hero.webp' alt='TFT' width={1048} height={589} />
              <div className='font-bold text-center'>聯盟戰棋</div>
            </div>
          </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

