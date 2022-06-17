import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Head from 'next/head'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Import Data - The Modern Gaming Data Resource</title>
        <meta name="description" content="Import Data - The Modern Gaming Data Resource" />
        <meta property="og:title" content="Import Data - The Modern Gaming Data Resource" />
        <meta property="og:description" content="Import Data - The Modern Gaming Data Resource" />
        <meta property="og:image" content="" />
        <meta property="og:url" content="https://import-data.org" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Import Data - The Modern Gaming Data Resource" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
