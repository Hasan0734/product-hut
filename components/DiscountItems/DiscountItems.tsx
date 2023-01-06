import Image from 'next/image';
import React, { useState } from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';

const DiscountItems = () => {
    const [selected, setSelected] = useState("woodChair");
    return (
        <section className='py-20'>

            <div className='container px-4 mx-auto'>
                <div>
                    <h2 className='text-center text-[28px] font-bold  
                leading-[32px] text-[#151875]
                 josefin-font'>Discount Item</h2>
                </div>
                <div className='flex justify-center'>
                    {/* items */}
                    <ul className='flex gap-x-5'>
                        <li onClick={() => setSelected("woodChair")}
                            className={`${selected === "woodChair" ? "text-[#FB2E86] underline underline-offset-2" :
                                "text-[#151875]"}
                             text-sm font-normal lato-font leading-6 cursor-pointer duration-300 hover:text-[#FB2E86] hover:underline underline-offset-2`}>

                            Wood Chair

                            {/* <span className='w-1 h-1 inline-block rounded-full bg-[#FB2E86] ml-1'></span> */}
                        </li>
                        <li onClick={() => setSelected("plasticChair")}
                            className={`${selected === "plasticChair" ? "text-[#FB2E86] underline underline-offset-2" : "text-[#151875]"} 
                            text-sm font-normal lato-font leading-6 cursor-pointer duration-300 hover:text-[#FB2E86] hover:underline underline-offset-2`}>
                            Plastic Chair

                        </li>
                        <li onClick={() => setSelected("sofa")}
                            className={`${selected === "sofa" ? "text-[#FB2E86] underline underline-offset-2" : "text-[#151875]"}
                             text-sm font-normal lato-font leading-6 cursor-pointer duration-300 hover:text-[#FB2E86] hover:underline underline-offset-2`}>
                            Sofa Collection

                        </li>
                    </ul>
                </div>

                <div className='mt-10'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 '>
                        <div>
                            <div className='mt-10'>
                                <h3 className='text-[#151875] josefin-font text-3xl font-bold leading-9'>
                                    20% Discount Of All Products
                                </h3>
                                <h5 className='text-[#FB2E86] text-xl leading-8 josefin-font my-2'>Eams Sofa Compact</h5>
                            </div>
                            <div className='my-4'>
                                <p className='text-[#B7BACB] font-sm lato-font leading-8'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
                                </p>
                                <ul className='grid grid-cols-2 mt-5'>
                                    <li className='text-[#B7BACB] font-sm lato-font leading-8 flex gap-x-2'><CheckIcon color="#000" width={15} /> Material expose like metals</li>
                                    <li className='text-[#B7BACB] font-sm lato-font leading-8 flex gap-x-2'><CheckIcon color="#000" width={15} /> Clear lines and geomatric figures</li>
                                    <li className='text-[#B7BACB] font-sm lato-font leading-8 flex gap-x-2'><CheckIcon color="#000" width={15} /> Simple neutral colours.</li>
                                    <li className='text-[#B7BACB] font-sm lato-font leading-8 flex gap-x-2'><CheckIcon color="#000" width={15} /> Material expose like metals</li>
                                </ul>
                            </div>
                            <button className='bg-[#FB2E86] px-7 py-[10px] text-white rounded-sm josefin-font text-sm'>Shop Now</button>
                        </div>
                        <div className='flex justify-center items-center'>
                            <div className='bg-[#FCECF1] w-[300px] relative h-[300px] p-5 rounded-full flex justify-center items-center'>
                                <div className='absolute w-[500px]'>
                                    <Image width={500} height={300} src={"/assets/discount/wood-chair.png"} alt='wood chair' />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DiscountItems;