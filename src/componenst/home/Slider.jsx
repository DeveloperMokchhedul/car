
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Hero from './Hero';

function Slider() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Hero />
                </SwiperSlide>

                <SwiperSlide>
                    <Hero />
                </SwiperSlide>

                <SwiperSlide>
                    <Hero />
                </SwiperSlide>

                <SwiperSlide>
                    <Hero />
                </SwiperSlide>





            </Swiper>
        </>
    );
}
export default Slider