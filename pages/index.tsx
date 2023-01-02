import type { NextPage } from 'next'
import Head from 'next/head'
import Drawer from '../components/Drawer/Drawer';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import TopHeader from '../components/TopHeader/TopHeader';


const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Welcome to our product-hut</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Drawer>
        <TopHeader />
        <Navbar />
        <Footer />

      </Drawer>


    </>
  )
}

export default Home
