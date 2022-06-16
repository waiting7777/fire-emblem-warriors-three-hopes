import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Skyweaver Database</title>
        <meta name="description" content="Skyweaver Database - Waiting7777" />
        <meta property="og:title" content="Skyweaver Database" />
        <meta property="og:description" content="Skyweaver Database - Waiting7777" />
        <meta property="og:image" content="" />
        <meta property="og:url" content="https://import-data.org" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Skyweaver Database" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
