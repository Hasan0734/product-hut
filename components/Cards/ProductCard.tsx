import React from 'react';
import { ShoppingCartIcon, HeartIcon, MagnifyingGlassPlusIcon } from '@heroicons/react/24/outline';


const ProductCard = ({ product }:any) => {
    return (
        <div className='drop-shadow-[0_0_25px_rgba(0,0,0,0.09)] rounded-sm product_card relative cursor-pointer'>
            <div className='bg-[#F6F7FB] p-8 flex justify-center product_card_img relative h-[250px]'>
                <img className='' src={product.image} alt="" />
                <div className='absolute top-0 left-0 w-full h-full hidden product_cart_show'>
                    <div className='flex items-end pb-4 h-full '>
                        <ul className='pt-3 pl-2'>
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
            </div>
            <div className='py-4 px-1 bg-white' >
                <h2 className='text-center hover:text-[#FB2E86] hover:underline text-[#151875] lato-font font-bold text-[16px]  '>{ product.name}</h2>
                <div className='flex justify-center my-4 '>
                    <ul className='flex gap-3'>
                        <li className='bg-[#DE9034] w-4 h-4 rounded-full'></li>
                        <li className='bg-[#EC42A2] w-4 h-4 rounded-full'></li>
                        <li className='bg-[#8568FF] w-4 h-4 rounded-full'></li>
                    </ul>
                </div>
                <h4 className='text-center  text-[#151875] lato-font font-bold text-xs josefin-font leading-5'>Code - Y523201</h4>
                <div className='flex justify-center gap-4'>
                    <h4 className='text-center  text-[#151875] lato-font font-bold text-xs josefin-font leading-5'>$26.00</h4>
                    <h4 className='text-center  text-[#FB2E86] line-through lato-font font-bold text-xs josefin-font leading-5'>$42.00</h4>
                </div>
            </div>

        </div>
    );
};

export default ProductCard;