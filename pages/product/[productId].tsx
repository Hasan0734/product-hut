
import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import PageLocation from '../../components/PageLocation/PageLocation';
import ProductContentItems from '../../components/ProductDetails/ProductContentItems';
import ProductDescription from '../../components/ProductDetails/ProductDescription';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import Rating from '../../components/Rating/Rating';
import RelatedProduct from '../../components/RelatedProduct/RelatedProduct';

const index = () => {
    const [selectItem, setSelectItem] = useState("description")
    return (
        <Layout>

            <PageLocation  >
                <div>
                    <h2 className='josefin-font text-[#101750] text-xl md:text-3xl font-bold leading-10'>
                        Product Details
                    </h2>
                    <ul className='flex gap-x-2'>
                        <li className='text-black text-sm '>
                            Home &gt;
                        </li >
                        <li className='text-black text-sm '>
                            Pages &gt;
                        </li>
                        <li className='text-pink-600 text-sm '>
                            Product Details
                        </li>
                    </ul>
                </div>
            </PageLocation>

            <main>
                <section className='py-10 bg-white'>
                    <div className='container px-4 mx-auto'>
                        <ProductDetails />
                    </div>
                </section>z
                <section className='py-10 bg-[#F9F8FE]'>
                    <div className='container px-4 mx-auto'>
                        <div>
                            <ProductContentItems selectItem={selectItem} setSelectItem={setSelectItem} />
                            <ProductDescription />
                        </div>
                    </div>
                </section>

                
                <RelatedProduct />

            </main>
        </Layout>
    );
};

export default index;