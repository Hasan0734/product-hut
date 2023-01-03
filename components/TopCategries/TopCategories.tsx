import Link from 'next/link';
import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";


import { Pagination, Autoplay } from "swiper";
import "swiper/css/pagination";
import TopCategoryCard from '../Cards/TopCategoryCard';

const TopCategories = () => {
    return (
        <div className='py-20'>
            <div className='container px-4 mx-auto'>
                <h2 className='text-center text-[28px] font-bold  
                leading-[32px] text-[#151875]
                 josefin-font'>Top Categories</h2>
                <div className='mt-12'>
                    {/* <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>

                    </div> */}
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={10}
                        slidesPerGroup={4}
                        autoplay={{
                            delay: 2500,
                            waitForTransition: true,
                            disableOnInteraction: false,

                        }}
                        pagination={{
                            clickable: true,
                            bulletActiveClass: "top_cate_paginate_bullet_active",
                            bulletClass: "top_cate_paginate_bullet"
                        }}
                        modules={[Pagination]}
                        className="top_category"
                    >
                        <SwiperSlide>
                            <TopCategoryCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TopCategoryCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TopCategoryCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TopCategoryCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TopCategoryCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TopCategoryCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TopCategoryCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TopCategoryCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TopCategoryCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TopCategoryCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TopCategoryCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TopCategoryCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TopCategoryCard />
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </div>

    );
};

export default TopCategories;