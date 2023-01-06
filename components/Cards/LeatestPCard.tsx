import Link from 'next/link';
import React from 'react';
import { ShoppingCartIcon, HeartIcon, MagnifyingGlassPlusIcon } from '@heroicons/react/24/outline';


const LeatestPCard = ({ product }: any) => {
    return (

        <div className='bg-white drop-shadow-[0_8px_40px_rgba(49,32,138,0.05)] overflow-hidden'>
            <div className='bg-[#F5F6F8]  cursor-pointer hover:bg-white rounded-sm leastest_p_card p-10  h-[300px] relative duration-300'>
                <img className='w-full h-full ' src={product.image} alt={""} />
                {/* carts */}
                <div className='absolute w-full h-full top-0 -left-[60px] leastest_p_add  duration-300'>
                    <div className=' flex items-end h-full'>
                        <ul className='pl-5 pb-8'>
                            <li className=''>
                                <button className='hover:bg-[#EEEFFB] rounded-full p-2 inline-block cursor-pointer duration-300'>
                                    <ShoppingCartIcon width={20} color="#2F1AC4" />

                                </button>
                            </li>
                            <li className=''>
                                <button className='hover:bg-[#EEEFFB] rounded-full p-2 inline-block cursor-pointer duration-300'>
                                    <HeartIcon width={20} color="#2F1AC4" />

                                </button>
                            </li>
                            <li className=''>
                                <button className='hover:bg-[#EEEFFB] rounded-full p-2 inline-block cursor-pointer duration-300'>
                                    <MagnifyingGlassPlusIcon width={20} color="#2F1AC4" />

                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='py-4 px-4 flex items-center justify-between'>
                <Link href={"/" + product.id} legacyBehavior>
                    <a className='text-[#151875] text-sm lato-font font-bold leading-7 decoration-[#EEEFFB] underline underline-offset-8'>
                        Comfort Handy Craft
                    </a>
                </Link>
                <div className='flex justify-center gap-x-3'>
                    <h4 className='text-xs lato-font text-[#151875] font-bold' >$25.00</h4>
                    <h4 className='text-xs lato-font text-gray-400 font-bold decoration-2 line-through' >$20.00</h4>
                </div>
            </div>
        </div>

    );
};

export default LeatestPCard;