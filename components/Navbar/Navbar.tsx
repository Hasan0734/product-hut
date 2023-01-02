import React, { useState } from 'react';
import NavItems from './NavItems';
import SearchBox from './SearchBox';

function Navbar() {
    return (

        <nav className="container mx-auto px-4  w-full navbar bg-white flex justify-between items-center">

            <div className='flex gap-x-6 xl:gap-x-14 items-center'>
                <div className='josefin-font text-[#0D0E43] font-bold text-xl  lg:text-[34px] leading-[34px]'>
                    Product-Hut
                </div>
                <div className='hidden lg:block'>
                    <NavItems />
                </div>
            </div>
            {/* search box */}
            <SearchBox />

            <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
            </div>
        </nav>

    )
}

export default Navbar