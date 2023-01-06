import Link from 'next/link';
import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";


import { Pagination, Autoplay } from "swiper";
import "swiper/css/pagination";
import TopCategoryCard from '../Cards/TopCategoryCard';

const categories = [
    { id: 1, name: "", image: "/assets/categories/image 20.png" },
    { id: 2, name: "", image: "/assets/categories/image 1168.png" },
    { id: 3, name: "", image: "/assets/categories/image 1171.png" },
    { id: 4, name: "", image: "/assets/categories/image 20.png" },
    { id: 5, name: "", image: "/assets/categories/image 1168.png" },
    { id: 6, name: "", image: "/assets/categories/image 1171.png" },
    { id: 7, name: "", image: "/assets/categories/image 1168.png" },
    { id: 8, name: "", image: "/assets/categories/image 1171.png" },
    { id: 9, name: "", image: "/assets/categories/image 1168.png" },
    { id: 10, name: "", image: "/assets/categories/image 1171.png" },
    { id: 11, name: "", image: "/assets/categories/image 1168.png" },
    { id: 12, name: "", image: "/assets/categories/image 20.png" },
]

const TopCategories = () => {
    return (
        <section className='py-20'>
            <div className='container px-4 mx-auto'>
                {/* section title */}
                <div>
                    <h2 className='text-center text-[28px] font-bold  
                leading-[32px] text-[#151875]
                 josefin-font'>Top Categories</h2>
                </div>

                {/* carousel */}
                <div className='mt-12'>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        slidesPerGroup={1}
                        autoplay={{
                            delay: 2500,
                            waitForTransition: true,
                            disableOnInteraction: false,

                        }}

                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                slidesPerGroup: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                slidesPerGroup: 3,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 4,
                                slidesPerGroup: 4,
                                spaceBetween: 10,
                            },
                        }}
                        pagination={{
                            clickable: true,
                            bulletActiveClass: "top_cate_paginate_bullet_active",
                            bulletClass: "top_cate_paginate_bullet"
                        }}
                        modules={[Pagination]}
                        className="top_category"
                    >
                        {categories.map((cate, i) => <SwiperSlide key={cate.id}>
                            <TopCategoryCard category={cate} />
                        </SwiperSlide>)}




                    </Swiper>
                </div>
            </div>
        </section>

    );
};

export default TopCategories;