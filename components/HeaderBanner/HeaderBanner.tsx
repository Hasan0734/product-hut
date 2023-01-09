import Link from 'next/link';
import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";


import { Pagination, Autoplay } from "swiper";
import "swiper/css/pagination";
import Banner from '../Promotional/Banner';

const HeaderBanner = () => {
    return (
        <section className='bg-[#F2F0FF] '>



            <Swiper
                slidesPerView={1}
                spaceBetween={40}
                slidesPerGroup={1}
                speed={1500}
                loop={true}
                autoplay={{
                    delay: 2500,
                    waitForTransition: true,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true

                }}

                pagination={{
                    clickable: true,
                    bulletActiveClass: "banner_paginate_bullet_active",
                    bulletClass: "banner_paginate_bullet"
                }}
                modules={[Autoplay, Pagination]}
                className="header_banner"
            >
               
                    <SwiperSlide >
                        <Banner />
                    </SwiperSlide>
                    <SwiperSlide >
                        <Banner />
                    </SwiperSlide>
                    <SwiperSlide >
                        <Banner />
                    </SwiperSlide>
            </Swiper>


        </section>
    );
};

export default HeaderBanner;