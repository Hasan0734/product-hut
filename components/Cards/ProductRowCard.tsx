import React from 'react';

import { StarIcon } from "@heroicons/react/24/solid"
import { StarIcon as EmptyStar, ShoppingCartIcon, HeartIcon, MagnifyingGlassPlusIcon } from "@heroicons/react/24/outline"
import ActiveRating from '../ActiveRating/ActiveRating';
import InActiveRating from '../InActiveRating/InActiveRating';


const ProductRowCard = ({product}:any) => {
    return (
        <div className='bg-white p-4 flex flex-col md:items-center md:flex-row gap-4  drop-shadow-[0_0_25px_rgba(246,246,253,0.9)]'>
            <div className='w-full sm:w-[280px] flex items-center justify-center'>
                <img className=' h-full rounded-md' src={product.image} alt="" />
            </div>
            <div className='max-w-md px-4 sm:px-0'>
                <div className='flex gap-4 items-center '>
                    <h1 className="josefin-font text-xl font-bold text-[#111C85] leading-7">{ product.name}</h1>
                    <ul className='flex gap-3 items-center'>
                        <li className='w-3 h-3 bg-[#DE9034] rounded-full'></li>
                        <li className='w-3 h-3 bg-[#E60584] rounded-full'></li>
                        <li className='w-3 h-3 bg-[#5E37FF] rounded-full'></li>
                    </ul>
                </div>
                <div className='mt-2 flex items-center gap-x-4'>
                    <div className='flex gap-4 items-center'>
                        <h3 className='text-sm text-[#111C85] font-bold'>$25.00</h3>
                        <h3 className='text-sm text-[#FF2AAA] font-bold line-through'>$42.00</h3>
                    </div>
                    <div className='flex '>
                        <ActiveRating />
                        <ActiveRating />
                        <ActiveRating />
                        <ActiveRating />
                        <InActiveRating/>
                    </div>
                </div>
                <p className='text-sm leading-6 py-3'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
                </p>
                <ul className='flex gap-3'>
                    <li>
                        <button className='hover:bg-[#fda1ff44] rounded-full p-2 bg-[#b17cff21]'>
                            <ShoppingCartIcon className='hover:text-[#535399] text-pink-600' width={20} />
                        </button>
                    </li>
                    <li>
                        <button className='hover:bg-[#fda1ff44] rounded-full p-2 bg-[#b17cff21]'>
                            <HeartIcon className='hover:text-[#535399] text-pink-600' width={20} />
                        </button>
                    </li>
                    <li>
                        <button className='hover:bg-[#fda1ff44] rounded-full p-2 bg-[#b17cff21]'>
                            <MagnifyingGlassPlusIcon className='hover:text-[#535399] text-pink-600' width={20} />
                        </button>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default ProductRowCard;