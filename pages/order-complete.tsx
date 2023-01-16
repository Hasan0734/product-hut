import Head from 'next/head';
import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import PageLocation from '../components/PageLocation/PageLocation';
import ShoppingCart from '../components/ShoppingCart/ShoppingCart';

const index = () => {
    return (
        <>
            <Head>
                <title>Completed your order</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout>
                <PageLocation  >
                    <div>
                        <h2 className='josefin-font text-[#101750] text-xl md:text-3xl font-bold leading-10'>
                            Order Completed
                        </h2>
                        <ul className='flex gap-x-2'>
                            <li className='text-black text-sm '>
                                Home &gt;
                            </li >
                            <li className='text-black text-sm '>
                                Pages &gt;
                            </li>
                            <li className='text-pink-600 text-sm '>
                                Order Completed
                            </li>
                        </ul>
                    </div>
                </PageLocation>
                <main>

                    <section className='bg-white py-40'>
                        <div className='container mx-auto px-4 flex items-center justify-center'>
                            <div className="max-w-lg text-center">
                                <div className='flex justify-center'>
                                    <div className='bg-gray-200 p-1 rounded-full w-[80px] h-[80px] flex items-center justify-center'>
                                        <div className='bg-white p-2 w-[60px] h-[60px] rounded-full flex items-center justify-center'>
                                            <img className='' src="/assets/icons/finished.svg" alt="checked" />
                                        </div>
                                      
                                    </div>
                                </div>
                                <h1 className='text-2xl josefin-font text-[#101750] font-bold leading-10'>Your Order Is Completed!</h1>
                                <p className='text-xs leading-6 lato-font'>
                                    Thank you for your order! Your order is being processed and will be completed within 3-6
                                    hours. You will receive an email confirmation when your order is completed.
                                </p>
                                <button className='px-4 py-3 text-sm rounded text-white bg-[#FF1788] mt-4 lato-font'>Continue Shipping</button>
                            </div>
                        </div>
                    </section>
                </main>
            </Layout>

        </>
    );
};

export default index;