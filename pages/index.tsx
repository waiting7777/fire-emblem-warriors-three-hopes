import Head from 'next/head'
import Hero from '../components/Hero'
import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr';

export default function Home() {
  const { data } = useSWR(
    `/api/page-views?slug=/`,
    async url => {
      const res = await fetch(url);
      return res.json();
    },
    { revalidateOnFocus: false }
  );
  const views = data?.pageViews || 0;

  return (
    <div>
      <Head>
        <title>Import Data - The Modern Gaming Data Resource</title>
        <meta name="description" content="Import Data - The Modern Gaming Data Resource" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <div className='container py-12 min-h-screen'>
        <div className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer">
          <Link href="/few">
            <div className='aspect-video'>
              <Image src='/images/fire-emblem.jpg' alt='Fire emblem warriors three hopes' width={1048} height={589} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

