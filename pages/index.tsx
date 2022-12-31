import type { NextPage } from 'next'
import Head from 'next/head'
import TopHeader from '../components/TopHeader/TopHeader';


const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Welcome to our product-hut</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <TopHeader/>

    </>
  )
}

export default Home
