import type { NextPage } from 'next'
import Head from 'next/head'
import BlogCard from '../components/Cards/BlogCard';
import DiscountItems from '../components/DiscountItems/DiscountItems';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import HeaderBanner from '../components/HeaderBanner/HeaderBanner';
import LatestBlog from '../components/LatestBlog/LatestBlog';
import LatestUpdateBySubscribe from '../components/LatestUpdateBySubscribe/LatestUpdateBySubscribe';
import Layout from '../components/Layout/Layout';
import LeatestProducts from '../components/LeatestProducts/LeatestProducts';
import PageLocation from '../components/PageLocation/PageLocation';
import ShopexOffer from '../components/ShopexOffer/ShopexOffer';
import TopCategories from '../components/TopCategries/TopCategories';
import TrendingProducts from '../components/TrendingProducts/TrendingProducts';
import UniqueProduct from '../components/UniqueProduct/UniqueProduct';


const Blogs: NextPage = () => {

    return (
        <>
            <Head>
                <title>Welcome to our blog</title>
            </Head>

            <Layout>
                <PageLocation  >
                    <div>
                        <h2 className='josefin-font text-[#101750] text-xl md:text-3xl font-bold leading-10'>
                            Blog Page
                        </h2>
                        <ul className='flex gap-x-2'>
                            <li className='text-black text-sm '>
                                Home &gt;
                            </li >
                            <li className='text-black text-sm '>
                                Pages &gt;
                            </li>
                            <li className='text-pink-600 text-sm '>
                                Blog Page
                            </li>
                        </ul>
                    </div>
                </PageLocation>

                <section className='py-4 bg-white'>
                    <div className='container mx-auto px-4 grid grid-cols-1 xl:grid-cols-5'>
                        <div className='col-span-3'>
                            <BlogCard />
                        </div>
                        <div className='col-span-2'>

                        </div>
                    </div>

                </section>

            </Layout>


        </>
    )
}

export default Blogs
