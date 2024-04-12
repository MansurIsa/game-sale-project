import React from 'react';
import HeaderSliderFirst from "../images/valorant-gece-pazari-nisan-28294.webp";
import HeaderSliderSecond from "../images/duyuru-nakit-cekim-bayram-14298.webp";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import  { Keyboard, Pagination, Navigation, EffectFade } from 'swiper/modules';

const HeaderSliderContainer = () => {
  return (
    <Swiper
      slidesPerView={1}
      slidesPerGroup={1}
      spaceBetween={0}
      loop={true}
      keyboard={{
        enabled: true,
      }}
      grabCursor={true}
      autoplay={{
        delay: 2000, // Otomatik kaydırma her 2 saniyede bir gerçekleşecek
        disableOnInteraction: false, // Kullanıcı etkileşimiyle otomatik kaydırmayı devre dışı bırakma
      }}
      effect='fade'
      navigation={{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }}
      
      modules={[Keyboard, Pagination, Navigation, EffectFade]}
      className="mySwiper header_slider_cards_container"
    >
      <SwiperSlide className='header_slider_card'>
        <img src={HeaderSliderFirst} alt="Header Slide" />
      </SwiperSlide>
      <SwiperSlide className='header_slider_card'>
        <img src={HeaderSliderSecond} alt="Header Slide" />
      </SwiperSlide>
      <SwiperSlide className='header_slider_card'>
        <img src={HeaderSliderFirst} alt="Header Slide" />
      </SwiperSlide>
      <SwiperSlide className='header_slider_card'>
        <img src={HeaderSliderFirst} alt="Header Slide" />
      </SwiperSlide>
      <SwiperSlide className='header_slider_card'>
        <img src={HeaderSliderFirst} alt="Header Slide" />
      </SwiperSlide>
      

      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </Swiper>
  );
};

export default HeaderSliderContainer;
