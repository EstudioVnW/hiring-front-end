import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Banners from '../../../../mocks/banners';
import * as S from './style';

export default function BannerComponent() {
    return (
        <S.SwiperContainer>
            <Swiper
                modules={[Autoplay, Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
            >
                {Banners.map((item) => (
                    <SwiperSlide key={item.image}>
                        <S.BannerImage src={item.image} alt={item.alt} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </S.SwiperContainer>
    );
}
