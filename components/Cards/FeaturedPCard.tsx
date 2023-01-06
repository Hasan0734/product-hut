import React from 'react';
import { ShoppingCartIcon, HeartIcon, MagnifyingGlassPlusIcon } from '@heroicons/react/24/outline';

const FeaturedPCard = ({product}:any) => {
    return (
        <div className='drop-shadow-[0_0_25px_rgba(0,0,0,0.09)] rounded-sm featured_card relative cursor-pointer'>
            <div className='bg-[#F6F7FB] p-4 flex justify-center featured_card_img'>
                <img src="/assets/products/image 1168.png" alt="" />
            </div>
            <div className='p-4 featured_card_body bg-white' >
                <h2 className='text-center text-[#FB2E86] lato-font font-bold text-xl fp_title '>Cantilever chair</h2>
                <div className='flex justify-center my-4 '>
                    <ul className='flex gap-3'>
                        <li className='bg-[#05E6B7] w-6 h-2 rounded-[10px]'></li>
                        <li className='bg-[#F701A8] w-6 h-2 rounded-[10px]'></li>
                        <li className='bg-[#00009D] w-6 h-2 rounded-[10px] featured_line_3'></li>
                    </ul>
                </div>
                <h4 className='text-center fp_code text-[#151875] lato-font font-bold text-xs josefin-font leading-5'>Code - Y523201</h4>
                <h4 className='text-center fp_price text-[#151875] lato-font font-bold text-xs josefin-font leading-5'>$42.00</h4>
            </div>
            <div className='absolute top-0 left-0 w-full h-full hidden featured_cart'>
                <ul className='pt-3 pl-2 flex gap-2'>
                    <li className=''>
                        <button className='hover:bg-[#EEEFFB] rounded-full p-2 inline-block cursor-pointer duration-300'>
                            <ShoppingCartIcon width={20} className="text-[#1DB4E7] hover:text-[#2F1AC4]" />

                        </button>
                    </li>
                    <li className=''>
                        <button className='hover:bg-[#EEEFFB] rounded-full p-2 inline-block cursor-pointer duration-300'>
                            <HeartIcon width={20} className="text-[#1DB4E7] hover:text-[#2F1AC4]" />

                        </button>
                    </li>
                    <li className=''>
                        <button className='hover:bg-[#EEEFFB] rounded-full p-2 inline-block cursor-pointer duration-300'>
                            <MagnifyingGlassPlusIcon width={20} className="text-[#1DB4E7] hover:text-[#2F1AC4]" />

                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default FeaturedPCard;