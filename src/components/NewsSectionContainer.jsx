import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { getNewsList } from '../actions/MainAction';
import NewsSectionCard from './NewsSectionCard';

const NewsSectionContainer = () => {
    const dispatch = useDispatch();
    const { newsList } = useSelector(state => state.Data);

    useEffect(() => {
        dispatch(getNewsList());
    }, [dispatch]);

    // URL formatlama funksiyası
    const formatUrl = (title, id) => {
        const formattedTitle = title
            .replace(/\//g, '-')        // / işarəsini əvəz edir
            .replace(/\?/g, '')         // ? işarəsini çıxarır
            .trim()                     // Başda və sondakı boşluqları çıxarır
            .replace(/\s+/g, '')        // Aradakı boşluqları çıxarır
            .toLowerCase();             // Kiçik hərflərə çevirir

        return `/${formattedTitle}/detail/${id}`;
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
            {newsList?.map((data, i) => (
                <SwiperSlide key={i} className='news_slider_card'>
                    <Link to={formatUrl(data.title, data.id)}>
                        <NewsSectionCard data={data} />
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default NewsSectionContainer;
