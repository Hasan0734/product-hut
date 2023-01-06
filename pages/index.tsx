import type { NextPage } from 'next'
import Head from 'next/head'
import DiscountItems from '../components/DiscountItems/DiscountItems';
import Drawer from '../components/Drawer/Drawer';
import Footer from '../components/Footer/Footer';
import LatestBlog from '../components/LatestBlog/LatestBlog';
import LatestUpdateBySubscribe from '../components/LatestUpdateBySubscribe/LatestUpdateBySubscribe';
import Navbar from '../components/Navbar/Navbar';
import TopCategories from '../components/TopCategries/TopCategories';
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
        <DiscountItems/>
        <TopCategories/>
        <LatestUpdateBySubscribe/>
        <LatestBlog/>
        <Footer />

      </Drawer>


    </>
  )
}

export default Home
