import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Zoom, Navigation, Pagination } from 'swiper';
import { SliderStyled } from './styled';
import Image from 'next/image';

const Slider = ({ items }) => {
  return (
    <SliderStyled>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
          position: 'absolute',
          inset: 0,
        }}
        loop={true}
        zoom={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Zoom, Navigation, Pagination]}
        className="mySwiper"
      >
        {items.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="swiper-zoom-container">
              <Image
                src={slide.image}
                width={slide.width}
                height={slide.height}
                alt={slide.id}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderStyled>
  );
};

export default Slider;
