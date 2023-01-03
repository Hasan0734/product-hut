import Link from 'next/link';
import React from 'react';

const LatestUpdateBySubscribe = () => {
    return (
        <section className='latest_update_scribe py-28'>
            <div className='container px-4 mx-auto'>
                <div className='text-center'>
                    <h2 className='text-[#151875] text-xl leading-7 md:text-[28px] md:leading-10 font-bold josefin-font'>Get Leatest Update By Subscribe <br/>
                        0ur Newslater</h2>
                    <div className='mt-4'>
                        <Link href={"/"} legacyBehavior>
                            <a className='bg-[#FB2E86] text-sm josefin-font px-5 py-3 text-white'>
                                Shop Now
                            </a>
                        </Link>
                   </div>
                </div>
            </div>
        </section>
    );
};

export default LatestUpdateBySubscribe;