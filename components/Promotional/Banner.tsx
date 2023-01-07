import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-center gap-6'>
            <div className='col-span-1 lg:col-span-2 order-2 md:order-1'>
                <div className='max-w-md'>
                    <p className='text-[#FB2E86] text-sm leading-6'>Best Furniture For Your Castle....</p>
                    <h2 className='text-3xl josefin-font text-black font-bold leading-10 mt-4'>New Furniture Collection
                    </h2>
                    <h2 className='text-3xl josefin-font text-black font-bold leading-10 mt-4'> Trends in 2023</h2>
                    <p className='text-sm leading-6 mt-4 mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                        in phasellus non in justo.</p>
                    <Link href={"/"} legacyBehavior>
                        <a className='text-white bg-[#FB2E86] px-7 py-3 rounded-sm inline-block'>Shop Now</a>
                    </Link>
                </div>
            </div>
            <div className='relative col-span-1 lg:col-span-3 order-1 md:order-2'>

                <div className='w-[250px] h-[250px] lg:w-[420px] lg:h-[420px] rounded-full bg-[#ECD2FA35]'>

                </div>
                <div className='w-[250px] h-[250px] lg:w-[420px] lg:h-[420px] rounded-full bg-[#ECD2FA35] absolute left-8  bottom-5'>
                    <div className='relative flex items-end h-full w-full justify-center'>
                        <img className='w-[90%]' src="/assets/banner/banner.png" alt="" />
                        <div className='discount_mark bg-[#00C1FE] w-[80px] h-[80px] lg:w-[136px] lg:h-[138px] absolute flex justify-center items-center top-0 right-0'>
                            <h4 className='text-white text-center josefin-font text-xl lg:text-3xl font-bold'>50% <br />Off</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;