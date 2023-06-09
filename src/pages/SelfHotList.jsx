import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperCore, { Autoplay, Pagination } from 'swiper';

import PlaceListData from './PlaceListData';
import SelfHotCard from './SelfHotCard';

function SelfHotList() {
  let [PlaceList] = useState(PlaceListData);
  let hotPlace = PlaceList.sort((a, b) => b.like - a.like);

  SwiperCore.use([Autoplay]);
  return (
    <section className="SelfHotList">
      <p className="SelfHotList_P">
        <span>핫</span> 플레이스{' '}
        <img src={`${process.env.PUBLIC_URL}/image/hot.png`} alt="hot" />
      </p>

      <Swiper
        breakpoints={{
          // when window width is >= 320px (mobile)
          270: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 768px (tablet)
          700: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // when window width is >= 1200px (desktop)
          1100: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        slidesPerView={5}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {hotPlace.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <SelfHotCard item={item} i={i} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default SelfHotList;
