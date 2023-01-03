import Link from 'next/link';
import React from 'react';
import LatestBlogCard from '../Cards/LatestBlogCard';

const LatestBlog = () => {
    return (
        <section className='py-20'>
            <div className='container px-4 mx-auto'>
                <h2 className='text-center text-[28px] font-bold  leading-[32px] text-[#151875] josefin-font'>Latest Blog</h2>
                <div className='mt-12'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>

                        <LatestBlogCard blog={{ image: "https://placeimg.com/400/229/arch" }} />
                        <LatestBlogCard blog={{ image: "https://placeimg.com/400/226/arch" }} />
                        <LatestBlogCard blog={{ image: "https://placeimg.com/400/227/arch" }} />
                    </div>
                </div>
            </div>
       </section>
    );
};

export default LatestBlog;