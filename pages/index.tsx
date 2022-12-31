import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar';
import TopHeader from '../components/TopHeader/TopHeader';


const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Welcome to our product-hut</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopHeader />
      <Navbar/>

    </>
  )
}

export default Home
