import React from 'react';
import { ListBulletIcon } from '@heroicons/react/24/outline';
import { Squares2X2Icon } from '@heroicons/react/24/solid';

const ProductViewType = () => {
    return (
        <div className='flex justify-between flex-col lg:flex-row pb-16 gap-5'>
            <div>
                <h2 className='text-[#151875] josefin-font leading-8'>Ecommerce Acceories & Fashion item </h2>
                <p className='text-xs '>About 9,620 results (0.62 seconds)</p>
            </div>
            <div className='flex flex-col sm:flex-row gap-4'>
                <div className='flex items-center gap-4'>
                    <label htmlFor="">Per Page:</label>
                    <input type="text" placeholder="Type here" className=" px-2 border py-1 w-[100px] bg-white rounded-sm text-sm" />
                </div>
                <div className='flex items-center gap-4'>
                    <label htmlFor="">Sort By:</label>
                    <select className=" w-[100px]  bg-white py-1 px-2 border rounded-sm text-sm">

                        <option>Best Match</option>
                        <option>New to Old</option>
                        <option>Old to New</option>
                        <option>Low to High</option>
                        <option>High to Low</option>
                    </select>
                </div>
                <div className='flex items-center gap-3'>
                    <label htmlFor="">View:</label>
                    <button><Squares2X2Icon className='text-[#151875] hover:text-pink-600' width={20} /></button>
                    <button><ListBulletIcon className='hover:text-pink-600 text-[#151875]' width={20} /></button>

                </div>
                <div className='flex items-center gap-3'>
                    <input className='border px-2 py-1 text-sm bg-white rounded-sm' type="text" placeholder='Search by name' />
                </div>
            </div>
        </div>
    );
};

export default ProductViewType;