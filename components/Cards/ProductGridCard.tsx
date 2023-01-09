import React from 'react';
import { ShoppingCartIcon, HeartIcon, MagnifyingGlassPlusIcon } from '@heroicons/react/24/outline';
import ActiveRating from '../ActiveRating/ActiveRating';
import InActiveRating from '../InActiveRating/InActiveRating';
import Link from 'next/link';


const ProductGridCard = ({ product }: any) => {

    return (
        <div className='drop-shadow-[0_0_25px_rgba(0,0,0,0.09)] bg-white rounded-sm product_card relative cursor-pointer'>
            <div className='bg-[#F6F7FB]  flex justify-center product_card_img relative h-[220px]'>
                <img className='h-full p-5 rounded-[27px]' src={product.image} alt="" />
                <div className='absolute top-0 left-0 w-full h-full hidden product_cart_show'>
                    <div className='flex items-end pb-4 h-full '>
                        <ul className='pt-3 pl-2 flex flex-col gap-1'>
                            <li className=''>
                                <button className='hover:bg-[#EEEFFB] bg-[#b963fa4a] rounded-full p-2 inline-block cursor-pointer duration-300'>
                                    <ShoppingCartIcon width={20} className="text-[#7759ec] hover:text-[#151323]" />
                                </button>
                            </li>
                            <li className=''>
                                <button className='hover:bg-[#EEEFFB] bg-[#b963fa4a] rounded-full p-2 inline-block cursor-pointer duration-300'>
                                    <HeartIcon width={20} className="text-[#7759ec] hover:text-[#151323]" />

                                </button>
                            </li>
                            <li className=''>
                                <button className='hover:bg-[#EEEFFB] bg-[#b963fa4a] rounded-full p-2 inline-block cursor-pointer duration-300'>
                                    <MagnifyingGlassPlusIcon width={20} className="text-[#7759ec] hover:text-[#151323]" />

                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='py-4 px-5 bg-white flex justify-between ' >
                <div className='flex flex-col gap-2'>
                    <Link href={`product/${product.id}`} legacyBehavior>
                        <a className=' hover:text-[#FB2E86] hover:underline text-[#151875] lato-font font-bold text-[16px]  '>{product.name}</a>
                    </Link>
                    
                    <div className='flex'>
                        <ActiveRating />
                        <ActiveRating />
                        <ActiveRating />
                        <ActiveRating />
                        <InActiveRating />
                    </div>
                    {/* <h4 className='  text-[#151875] lato-font font-bold text-xs josefin-font leading-5'>Code - Y523201</h4> */}
                    <div className='flex  gap-4'>
                        <h4 className='text-center  text-[#151875] lato-font font-bold text-xs josefin-font leading-5'>$26.00</h4>
                        <h4 className='text-center  text-[#FB2E86] line-through lato-font font-bold text-xs josefin-font leading-5'>$42.00</h4>
                    </div>
                    
                </div>

                <div className='my-4 '>
                    <ul className='flex flex-col gap-3'>
                        <li className='bg-[#DE9034] w-3 h-3 rounded-full'></li>
                        <li className='bg-[#EC42A2] w-3 h-3 rounded-full'></li>
                        <li className='bg-[#8568FF] w-3 h-3 rounded-full'></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default ProductGridCard;