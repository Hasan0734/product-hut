import React from 'react';
import { ListBulletIcon, AdjustmentsHorizontalIcon, FunnelIcon } from '@heroicons/react/24/outline';
import { Squares2X2Icon } from '@heroicons/react/24/solid';

const ProductViewType = ({ layout, setLayout, toggle, setToggle, smallFilter,  setSmallFilter  }: any) => {

    return (
        // sticky top - 0
        <div className='flex justify-between flex-col lg:flex-row py-7 gap-5 items-start'>
            <div>
                <h2 className='text-[#151875] text-xl font-bold  josefin-font leading-8'>Ecommerce Acceories & Fashion item </h2>
                <p className='text-xs '>About 9,620 results (0.62 seconds)</p>
            </div>
            <div className='flex flex-wrap gap-2 text-sm'>
                <div className='hidden md:flex flex-wrap gap-2 '>
                    <div className='flex items-center gap-2 '>
                        <label htmlFor="">Per Page:</label>
                        <input type="text" placeholder="Type here" className=" px-2 border py-1 w-[60px] bg-white rounded-sm text-sm" />
                    </div>
                    <div className='flex items-center gap-2'>
                        <label htmlFor="">Sort By:</label>
                        <select className=" w-[100px]  bg-white py-1 px-2 border rounded-sm text-sm">

                            <option>Best Match</option>
                            <option>New to Old</option>
                            <option>Old to New</option>
                            <option>Low to High</option>
                            <option>High to Low</option>
                        </select>
                    </div>
               </div>
                <div className='flex items-center gap-2'>
                    <label htmlFor="">View:</label>
                    <button onClick={() => setLayout("grid")}>
                        <Squares2X2Icon className={`${layout === "grid" ? "text-pink-600" : "text-[#151875]"} hover:text-pink-600`} width={20} />
                    </button>
                    <button onClick={() => setLayout("list")}>
                        <ListBulletIcon className={`${layout === "list" ? "text-pink-600" : "text-[#151875]"} hover:text-pink-600`} width={20} />
                    </button>

                </div>
                <div className='flex items-center gap-3'>
                    <input className='border px-2 py-1 text-sm bg-white rounded-sm max-w-full md:max-w-[150px]' type="text" placeholder='Search by name' />
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={() => setToggle(!toggle)}
                        className={` ${toggle ? "bg-pink-600 text-white " : "bg-gray-100 text-black"} border px-2 py-2 rounded-md  gap-1 items-center hidden lg:flex`}>
                        <AdjustmentsHorizontalIcon width={15} />
                        Filter
                    </button>
                    <button
                        onClick={() => setSmallFilter(!smallFilter)}
                        className={` ${smallFilter ? "bg-pink-600 text-white " : "bg-gray-100 text-black"} border px-2 py-2 rounded-md  gap-1 items-center flex lg:hidden`}>
                        <AdjustmentsHorizontalIcon width={15} />
                        Filter
                    </button>
                    <button
                        onClick={() => alert("I'm clear")}
                        className={` ${toggle ? "bg-pink-600 text-white " : "bg-gray-100 text-black"} border px-2 py-2 rounded-md flex gap-1 items-center`}>
                        <FunnelIcon width={15} />
                        Clear
                    </button>
                </div>
            </div>

        </div>
    );
};

export default ProductViewType;