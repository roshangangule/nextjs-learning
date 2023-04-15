import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../../components/layout/layout';
import MainHeader from '../../components/layout/main-header';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Events</title>
      </Head>
      <MainHeader />
      <Component {...pageProps} />
    </Layout>
  );
}
