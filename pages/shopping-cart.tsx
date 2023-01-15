import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import PageLocation from '../components/PageLocation/PageLocation';
import { Minus, Plus, X } from 'react-feather';

const index = () => {
    const [quantiy, setQuanity] = useState(1)
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
                            <div className='grid grid-cols-1 lg:grid-cols-3 gap-14'>
                                <div className='col-span-2'>
                                    <table className='w-full'>
                                        <thead>
                                            <tr>
                                                <th className='josefin-font text-xl font-bold text-[#1D3178]  pb-6 text-start '>Product</th>
                                                <th className='josefin-font text-xl font-bold text-[#1D3178] pb-6 text-start '>Price</th>
                                                <th className='josefin-font text-xl font-bold text-[#1D3178] pb-6 text-center '>Quantity</th>
                                                <th className='josefin-font text-xl font-bold text-[#1D3178] pb-6 text-center '>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody className="">

                                            <tr className='border-b mt-5'>
                                                <td className='flex gap-4 pt-4'>
                                                    <div className='w-[83px] h-[87px] py-2 relative'>
                                                        <img className='w-full h-full' src="/assets/products/1.png" alt="" />
                                                        <div className='absolute top-0 right-0'>
                                                            <X className='text-white bg-black rounded-full p-[3px] cursor-pointer' width={24} strokeWidth={3} />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <Link href={"/"} legacyBehavior>
                                                            <a className='text-xl josefin-font text-black  font-semibold hover:underline cursor-pointer'>
                                                                Ut diam consequat
                                                            </a>
                                                        </Link>
                                                        <p className='josefin- josefin-font text-sm'>Color: <span className='text-gray-800'>Brown</span></p>
                                                        <p className='josefin-font text-sm'>Size: <span className='text-gray-800'>XL</span></p>
                                                    </div>
                                                </td>
                                                <td className=' pt-4'>
                                                    $25.00
                                                </td>
                                                <td className='text-center pt-4'>
                                                    <div className='flex items-center justify-center'>
                                                        <button
                                                            onClick={() => setQuanity(quantiy + 1)} className='bg-[#E7E7EF]'>
                                                            <Plus />
                                                        </button>
                                                        <input className='w-14 text-[#BEBFC2] bg-[#F0EFF2] text-xl' value={quantiy} type="number" />
                                                        <button
                                                            onClick={() => setQuanity(quantiy - 1)}
                                                            className='bg-[#E7E7EF]'>
                                                            <Minus />
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className='text-center pt-4'>
                                                    1000
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>

                                </div>
                                <div className='col-span-1'>
                                    <div className='bg-gray-200 p-3 h-full'>
                                        <h2 className='josefin-font text-xl font-bold text-[#1D3178] text-center'>Cart Totals</h2>

                                    </div>
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