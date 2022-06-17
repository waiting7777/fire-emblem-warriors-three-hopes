import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Head from 'next/head'
import Footer from '../components/Footer'
import { GA_TRACKING_ID, pageView } from '../libs/gtag'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageView(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

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
      <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
