import React from 'react';
import Layout from '../components/Layout/Layout';

const products = () => {
    return (
        <Layout>
            
            <section className='bg-[#F6F5FF] py-20'>
                <div className='container px-4 mx-auto'>
                    <div>
                        <h2 className='josefin-font text-[#101750] text-3xl font-bold leading-10'>Product Grid Default</h2>
                        <ul className='flex gap-x-2'>
                            <li  className='text-black text-sm '>
                                Home
                            </li >
                            <li className='text-black text-sm '>
                                . Pages
                            </li>
                            <li  className='text-pink-600 text-sm '>
                                . Product Grid Default
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className='py-20'>
                <div className='container px-4 mx-auto'>

                </div>
            </section>

       </Layout>
    );
};

export default products;