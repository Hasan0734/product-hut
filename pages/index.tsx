import type { NextPage } from 'next'
import Head from 'next/head'
import DiscountItems from '../components/DiscountItems/DiscountItems';
import Drawer from '../components/Drawer/Drawer';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import Footer from '../components/Footer/Footer';
import HeaderBanner from '../components/HeaderBanner/HeaderBanner';
import LatestBlog from '../components/LatestBlog/LatestBlog';
import LatestUpdateBySubscribe from '../components/LatestUpdateBySubscribe/LatestUpdateBySubscribe';
import Layout from '../components/Layout/Layout';
import LeatestProducts from '../components/LeatestProducts/LeatestProducts';
import ShopexOffer from '../components/ShopexOffer/ShopexOffer';
import TopCategories from '../components/TopCategries/TopCategories';
import TrendingProducts from '../components/TrendingProducts/TrendingProducts';
import UniqueProduct from '../components/UniqueProduct/UniqueProduct';


const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Welcome to our product-hut</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <HeaderBanner />
        <FeaturedProducts />
        <LeatestProducts />
        <ShopexOffer />
        <UniqueProduct />
        <TrendingProducts />
        <DiscountItems />
        <TopCategories />
        <LatestUpdateBySubscribe />
        <LatestBlog />
      </Layout>


    </>
  )
}

export default Home
