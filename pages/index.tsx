import type { NextPage } from 'next'
import Head from 'next/head'
import DiscountItems from '../components/DiscountItems/DiscountItems';
import Drawer from '../components/Drawer/Drawer';
import Footer from '../components/Footer/Footer';
import LatestBlog from '../components/LatestBlog/LatestBlog';
import LatestUpdateBySubscribe from '../components/LatestUpdateBySubscribe/LatestUpdateBySubscribe';
import LeatestProducts from '../components/LeatestProducts/LeatestProducts';
import Navbar from '../components/Navbar/Navbar';
import ShopexOffer from '../components/ShopexOffer/ShopexOffer';
import TopCategories from '../components/TopCategries/TopCategories';
import TopHeader from '../components/TopHeader/TopHeader';
import TrendingProducts from '../components/TrendingProducts/TrendingProducts';
import UniqueProduct from '../components/UniqueProduct/UniqueProduct';


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
        <LeatestProducts/>
        <ShopexOffer/>
        <UniqueProduct/>
        <TrendingProducts/>
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
