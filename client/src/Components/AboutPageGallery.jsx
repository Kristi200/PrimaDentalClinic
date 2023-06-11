import React from 'react'
import { AboutGalleryImage1,GalleryAboutImage1, GalleryAboutImage2, GalleryAboutImage3, GalleryAboutImage4 } from '../assets';
import {Swiper,SwiperSlide} from 'swiper/react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Trans, useTranslation } from 'react-i18next';
import { Navigation } from "swiper";
import "swiper/css/navigation";


const AboutPageGallery = () => {
    const { t } = useTranslation()

    return (
        <ScrollAnimation className='flex w-full justify-center items-center sm:mb-12 md:mb-24 lg:mb-32' animateIn='fadeInTop'>
            <div className='w-full sm:px-5 md:px-16 lg:px-32 '>
                <p className="text-[#00ACB1] font-bold">{t("aboutGallery")}</p>
                <p className="sm:text-2xl md:text-4xl lg:text-4xl font-bold text-[#002856] mt-3 mb-10">
                    <Trans components={{ br: <br className='sm:hidden'/> }}>{t("aboutGalleryTitle")}</Trans>
                </p>
                <Swiper
                    modules={[Navigation]}
                    navigation={true}
                    spaceBetween={20}
                    slidesPerView={1}
                    speed="1000"
                    loop={true}
                    breakpoints={{
                    767:{
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 3
                    }
                    }}
                >
                    <SwiperSlide>
                        <div>
                            <img src={GalleryAboutImage1} alt="Image 1" draggable="false"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={GalleryAboutImage2} alt="Image 2" draggable="false"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={GalleryAboutImage3} alt="Image 3" draggable="false"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={GalleryAboutImage4} alt="Image 4" draggable="false"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={GalleryAboutImage1} alt="Image 1" draggable="false"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={GalleryAboutImage2} alt="Image 2" draggable="false"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={GalleryAboutImage3} alt="Image 3" draggable="false"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={GalleryAboutImage4} alt="Image 4" draggable="false"/>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </ScrollAnimation>
    )
}

export default AboutPageGallery