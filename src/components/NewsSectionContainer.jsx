// import React from 'react'
import NewsSectionCard from './NewsSectionCard'
// import { Link } from 'react-router-dom'

import React from 'react'
// import AuctionSectionCard from './AuctionSectionCard'
import { Link } from 'react-router-dom'

import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const NewsSectionContainer = () => {
    return (
        // <div className='auction_section_container news_section_container'>
        //     <Link to={''}>
        //         <NewsSectionCard />
        //     </Link>
        //     <Link to={''}>
        //         <NewsSectionCard />
        //     </Link>
        //     <Link to={''}>
        //         <NewsSectionCard />
        //     </Link>
        //     <Link to={''}>
        //         <NewsSectionCard />
        //     </Link>
        // </div>

        <Swiper


            slidesPerView={4}
            spaceBetween={20}
            loop={true}
            keyboard={{
                enabled: true,
            }}
            grabCursor
            autoplay={{
                delay: 3000
            }}
            breakpoints={{
                200: {
                    slidesPerView: 1,

                },
                576: {
                    slidesPerView: 2,

                },
                768: {
                    slidesPerView: 3,

                },
                1180: {
                    slidesPerView: 4,

                },
            }}


            // navigation={{
            //     nextEl: ".slider_next_btn1",
            //     prevEl: ".slider_prev_btn1"
            // }}
            modules={[Keyboard, Pagination, Navigation]}
            className="mySwiper news_slider_card_container"
        >




            <SwiperSlide className='news_slider_card'>
                <Link to={''}>
                    <NewsSectionCard />
                </Link>
            </SwiperSlide>
            <SwiperSlide className='news_slider_card'>
                <Link to={''}>
                    <NewsSectionCard />
                </Link>
            </SwiperSlide>
            <SwiperSlide className='news_slider_card'>
                <Link to={''}>
                    <NewsSectionCard />
                </Link>
            </SwiperSlide>
            <SwiperSlide className='news_slider_card'>
                <Link to={''}>
                    <NewsSectionCard />
                </Link>
            </SwiperSlide>
            <SwiperSlide className='news_slider_card'>
                <Link to={''}>
                    <NewsSectionCard />
                </Link>
            </SwiperSlide>
            <SwiperSlide className='news_slider_card'>
                <Link to={''}>
                    <NewsSectionCard />
                </Link>
            </SwiperSlide>
            <SwiperSlide className='news_slider_card'>
                <Link to={''}>
                    <NewsSectionCard />
                </Link>
            </SwiperSlide>






        </Swiper>
    )
}

export default NewsSectionContainer