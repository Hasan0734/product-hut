import Link from 'next/link';
import React from 'react';

const UniqueProduct = () => {
    return (
        <section className='bg-[#F1F0FF] py-10'>
            <div className='container px-4 mx-auto'>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    <div className='flex justify-center items-center'>
                        {/* border-radius: 78% 63% 76% 77%; */}
                        <div className='bg-[#F5E1FC] w-[250px] h-[180px] md:w-[400px] md:h-[340px] rounded-br-[76%] rounded-bl-[77%] rounded-tr-[63%] rounded-tl-[78%] flex justify-center items-center relative'>
                            <img className='w-[500px]  absolute' src="/assets/products/unique.png" alt="product" />
                        </div>
                    </div>
                    <div className='md:px-4'>
                        <h2 className='text-xl md:text-3xl font-bold text-[#151875] leading-10 josefin-font'>Unique Features Of leatest & <br /> Trending Products</h2>

                        <ul className='max-w-sm mt-6'>
                            <li className='flex items-start gap-x-3'>
                                <div className=''>
                                    <span className='w-3 h-3 rounded-full bg-[#F52B70] inline-block'></span>
                                </div>
                                <div className='text-sm font-normal lato-font leading-8'>
                                    All frames constructed with hardwood solids and laminates
                                </div>
                            </li>
                            <li className='flex items-start gap-x-3'>
                                <div className=''>
                                    <span className='w-3 h-3 rounded-full bg-[#2B2BF5] inline-block'></span>
                                </div>
                                <div className='text-sm font-normal lato-font leading-8'>
                                    Reinforced with double wood dowels, glue, screw - nails corner
                                    blocks and machine nails
                                </div>
                            </li>
                            <li className='flex items-start gap-x-3'>
                                <div>
                                    <span className='w-3 h-3 rounded-full bg-[#2BF5CC] inline-block'></span>
                                </div>
                                <div className='text-sm font-normal lato-font leading-8'>
                                    Arms, backs and seats are structurally reinforced
                                </div>
                            </li>
                        </ul>
                        <div className='mt-4 flex gap-x-3'>

                            <div>
                                <button className='bg-[#FB2E86] text-sm text-white px-7 py-3 rounded-sm josefin-font' >
                                    Add to Cart
                                </button>
                            </div>
                            <div>
                                <h4 className='josefin-font text-xs text-[#151875] leading-5'>B&B Italian Sofa</h4>
                                <p className='josefin-font text-xs text-[#151875] leading-5 line-through'>$32.00</p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UniqueProduct;