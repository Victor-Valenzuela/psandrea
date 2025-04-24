import { useState, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const AboutSlider = () => {
    const [swiperRef, setSwiperRef] = useState(null);

    const slides = [
        "images/about11.png",
        "images/about22.png",
        "images/about31.png"

    ];

    return (
        <div className="relative w-full h-full">

            <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                onSwiper={setSwiperRef}
                className="h-full text-slider"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="p-6 md:p-8 h-full flex flex-col justify-center">
                            <img src={slide} alt={`Slide ${index + 1}`} className="bject-cover drop-shadow-[0_0_10px_rgba(0,0,0,1)]" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default AboutSlider;