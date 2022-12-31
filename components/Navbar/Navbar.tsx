import React, { useState } from 'react';
import NavItems from './NavItems';
import SearchBox from './SearchBox';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Transition } from '@headlessui/react'


function Navbar() {
    const [toggle, setToggle] = useState(false)
    return (
        <nav className='bg-white py-2 md:py-5 relative'>
            <div className='container mx-auto px-4 flex items-center justify-between'>
                <div className='flex gap-x-14 items-center'>
                    <div className='josefin-font text-[#0D0E43] font-bold text-xl  md:text-[34px] leading-[34px]'>
                        Product-Hut
                    </div>
                    <NavItems />
                </div>
                <SearchBox />
                <div className='block md:hidden'>
                    <Bars3Icon onClick={() => setToggle(true)} color='#000' width={25} />
                </div>
            </div>

            
            
            <Transition
                show={toggle}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className={`${toggle ? "block md:hidden left-0 md:-left-[9999999px]" : "hidden  -left-[9999999px]"} fixed w-screen top-0 right-0 bottom-0 bg-[#00000069] h-screen z-[9999] `}>
                    <div className='bg-gray-100  max-w-[280px] h-full p-5 '>
                        <div className='flex items-center justify-between'>
                            <div className='josefin-font text-[#0D0E43] font-bold text-xl  md:text-[34px] leading-[34px]'>
                                Product-Hut
                            </div>
                            <div>
                                <button onClick={() => setToggle(false)} className='bg-gray-200 rounded-full p-1'>
                                    <XMarkIcon width={25} className="text-black " />

                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
           


        </nav>
    )
}

export default Navbar