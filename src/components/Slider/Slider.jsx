import './Slider.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';



const Slider = () => {
    return (
        <div className='mb-10 mt-12 lg:mt-20'>
            <Swiper
                navigation={true}
                modules={[Navigation, Autoplay, EffectFade]}
                effect="fade"
                loop={true}
                autoplay={{
                    delay: 3000,
                }}

            >
                <SwiperSlide>
                    <div className="slide slide1">
                        <div className='flex items-center mr-0 md:mr-[300px] lg:mr-[500px]'>
                            <div className='font-roboto text-white'>
                                <h2 className='text-2xl lg:text-5xl font-bold'>Slide 1</h2>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide slide2">
                        <div className='flex items-center mr-0 md:mr-[300px] lg:mr-[500px]'>
                            <div className='font-roboto text-white'>
                                <h2 className='text-2xl lg:text-5xl font-bold'>Slide 2</h2>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide slide3">
                        <div className='flex items-center mx-7 lg:mx-0 mr-0 md:mr-[300px] lg:mr-[600px] ml-7 md:ml-0 lg:ml-8'>
                            <div className='font-roboto text-white'>
                                <h2 className='text-2xl lg:text-5xl font-bold'>Slide 3</h2>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide slide4">
                        <div className='flex items-center mx-7 lg:mx-0 mr-0 md:mr-[300px] lg:mr-[600px] ml-7 md:ml-0 lg:ml-8'>
                            <div className='font-roboto text-white'>
                                <h2 className='text-2xl lg:text-5xl font-bold'>Slide 4</h2>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;