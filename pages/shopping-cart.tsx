import Head from 'next/head';
import React from 'react';
import Layout from '../components/Layout/Layout';
import PageLocation from '../components/PageLocation/PageLocation';

const index = () => {
    return (
        <>
            <Head>
                <title>Your shopping cart</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout>
                <PageLocation  >
                    <div>
                        <h2 className='josefin-font text-[#101750] text-xl md:text-3xl font-bold leading-10'>
                            Shopping Cart
                        </h2>
                        <ul className='flex gap-x-2'>
                            <li className='text-black text-sm '>
                                Home &gt;
                            </li >
                            <li className='text-black text-sm '>
                                Pages &gt;
                            </li>
                            <li className='text-pink-600 text-sm '>
                                Shopping Cart
                            </li>
                        </ul>
                    </div>
                </PageLocation>

                <main>
                    <section className='py-20'>
                        <div className='container px-4 mx-auto'>
                            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                                <div className='col-span-2'>
                                    <div>
                                        <ul className='flex justify-between gap-3'>
                                            <li className='josefin-font text-xl font-bold text-[#1D3178]'>Product</li>
                                            <li className='josefin-font text-xl font-bold text-[#1D3178] '>Price</li>
                                            <li className='josefin-font text-xl font-bold text-[#1D3178]'>Quantity</li>
                                            <li className='josefin-font text-xl font-bold text-[#1D3178] '>Total</li>
                                        </ul>
                                    </div>
                                    <div className='flex justify-between gap-3'>
                                        <div className='flex justify-between'>
                                            <div>
                                                <img src="" alt="" />
                                            </div>
                                            <div>
                                                <h2 className='text-sm font-semibold'>Ut diam consequat</h2>
                                            </div>
                                        </div>
                                        <div>
                                            545 
                                        </div>
                                        <div>
                                        65656
                                        </div>
                                        <div>
                                            45454
                                        </div>
                                    </div>
                                </div>
                                <div className='col-span-1'>
                                    <h2 className='josefin-font text-xl font-bold text-[#1D3178] text-center'>Cart Totals</h2>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </Layout>

        </>
    );
};

export default index;