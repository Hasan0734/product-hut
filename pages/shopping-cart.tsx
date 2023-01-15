import Head from 'next/head';
import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import PageLocation from '../components/PageLocation/PageLocation';
import ShoppingCart from '../components/ShoppingCart/ShoppingCart';

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
                    <ShoppingCart/>
                </main>
            </Layout>

        </>
    );
};

export default index;