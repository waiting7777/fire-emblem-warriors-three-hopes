import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Head from 'next/head'
import Footer from '../components/Footer'
import { GA_TRACKING_ID, pageview } from '../libs/gtag'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as Sentry from '@sentry/react'
import { BrowserTracing } from '@sentry/tracing'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'

Sentry.init({
  dsn: 'https://e53518a74188415ca4b0d36b6b2f8057@o413621.ingest.sentry.io/6510032',
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
})

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter()
  const getLayout = Component.getLayout || ((page) => page)

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (process.env.NODE_ENV !== 'development') {
        pageview(url, document.title);
      }
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <title>Import Data - The Gaming Data Resource</title>
        <meta name="description" content="Import Data - The Gaming Data Resource" />
        <meta property="og:title" content="Import Data - The Gaming Data Resource" />
        <meta property="og:description" content="Import Data - The Gaming Data Resource" />
        <meta property="og:image" content="" />
        <meta property="og:url" content="https://import-data.org" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Import Data - The Gaming Data Resource" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `,
          }}
        />
      </Head>
      <Header />
      {getLayout(<Component {...pageProps} />)}
      <Footer />
    </>
  )
}

export default MyApp
