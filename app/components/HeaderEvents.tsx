'use client'

import { NextComponentType } from 'next'
import React from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";



const HeaderEvents: NextComponentType = () => {
    return (
        <div id="headerEvents">
            <Swiper
                modules={[Autoplay]}
                autoplay={{
                    delay: 2000,
                }}
                slidesPerView={1}
                slidesPerGroup={1}
                slidesPerGroupSkip={1}
            >
                <SwiperSlide>
                    <Link href="#">Something is happening</Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="#">Again something</Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="#">A very special event</Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="#">Something again and again</Link>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default HeaderEvents
