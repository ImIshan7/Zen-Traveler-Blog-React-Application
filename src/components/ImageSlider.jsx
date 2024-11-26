import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ImageSlider = ({ images, captions }) => {
    return (
        <Swiper
            modules={[EffectFade, Autoplay, Navigation, Pagination]}
            effect="fade"
            navigation
            pagination={{
                clickable: true,
                renderBullet: (index, className) => {
                    return `<span class="${className} w-3 h-3"></span>`;
                },
            }}
            loop
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            className="w-full h-full"
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-3000 hover:scale-105"
                        style={{ backgroundImage: `url(${image})` }}
                    >
                        {captions && captions[index] && (
                            <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 text-white text-center z-10">
                                <h2 className="text-4xl md:text-6xl font-serif mb-4 opacity-0 animate-fadeIn">
                                    {captions[index].title}
                                </h2>
                                <p className="text-xl md:text-2xl opacity-0 animate-fadeIn animation-delay-500">
                                    {captions[index].subtitle}
                                </p>
                            </div>
                        )}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ImageSlider;