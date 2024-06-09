import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { getAuctionList } from '../actions/MainAction';
import AuctionSectionCard from './AuctionSectionCard';

const AuctionSectionContainer = () => {
    const dispatch = useDispatch();
    const { auctionList } = useSelector(state => state.Data);

    useEffect(() => {
        dispatch(getAuctionList());
    }, [dispatch]);

    // URL formatlama funksiyası
    const formatUrl = (title, productId, id) => {
        const formattedTitle = title
            .replace(/\//g, '-')        // / işarəsini əvəz edir
            .replace(/\?/g, '')         // ? işarəsini çıxarır
            .trim()                     // Başda və sondakı boşluqları çıxarır
            .replace(/\s+/g, '')        // Aradakı boşluqları çıxarır
            .toLowerCase();             // Kiçik hərflərə çevirir

        return `/${formattedTitle}/${productId}/${id}`;
    };

    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={20}
            loop={true}
            keyboard={{ enabled: true }}
            grabCursor
            autoplay={{ delay: 3000 }}
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
            modules={[Keyboard, Pagination, Navigation]}
            className="mySwiper news_slider_card_container"
        >
            {auctionList?.map((data, i) => (
                <SwiperSlide key={i} className='news_slider_card'>
                    <Link to={formatUrl(data.title, data.product_id, data.id)}>
                        <AuctionSectionCard data={data} />
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default AuctionSectionContainer;
