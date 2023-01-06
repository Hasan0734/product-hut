import Link from 'next/link';
import React from 'react';

const HeaderBanner = () => {
    return (
        <section className='bg-[#F2F0FF] py-5'>
            <div className='container px-4 mx-auto'>
                <div className='flex items-center justify-between gap-6'>
                    <div>
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
                    <div>
                        <img src="/assets/banner/banner.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeaderBanner;