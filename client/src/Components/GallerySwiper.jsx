import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react';
import { GalleryImage1,GalleryImage2,GalleryImage3,GalleryImage4, GalleryImage5 } from '../assets';
import 'swiper/css';
import ScrollAnimation from 'react-animate-on-scroll';
import { useTranslation } from 'react-i18next';
import { Navigation } from 'swiper';
import "swiper/css/navigation";

const GallerySwiper = () => {
  const { t } = useTranslation();
  
  return (
    <ScrollAnimation className='flex w-full justify-center items-center sm:mb-12 md:mb-24 lg:mb-32' animateIn='fadeInTop'>
      <div className='w-full sm:px-3 md:px-16 lg:px-32 '>
        <p className="text-[#00ACB1] font-bold">{t("ourGallery")}</p>
        <p className="sm:text-2xl md:text-4xl lg:text-4xl font-bold text-[#002856] mt-3 mb-10">
            {t("ourGalleryTitle")} {t("ourGalleryTitle2")}
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
          {/* Gallery Image 1 */}
          <SwiperSlide>
            <div className='group'>
              <img src={GalleryImage1} alt="Image 1" draggable="false"/>
              <div className="absolute -bottom-24 left-0 w-60 h-24 m-auto right-0 bg-white group-hover:bottom-0 duration-300">
                <p className="flex justify-center   items-center h-full  text-2xl font-bold text-[#002856] text-center">{t("ourGalleryDescription1")}</p>
              </div>
            </div>
          </SwiperSlide>
          {/* Gallery Image 2 */}
          <SwiperSlide>
            <div className='group'>
              <img src={GalleryImage2} alt="Image 2" draggable="false"/>
              <div className="absolute -bottom-24 left-0 w-60 h-24 m-auto right-0 bg-white group-hover:bottom-0 duration-300">
                <p className="flex justify-center   items-center h-full  text-2xl font-bold text-[#002856] text-center">{t("ourGalleryDescription2")}</p>
              </div>
            </div>
          </SwiperSlide>
          {/* Gallery Image 3 */}
          <SwiperSlide>
            <div className='group'>
              <img src={GalleryImage3} alt="Image 3" draggable="false"/>
              <div className="absolute -bottom-24 left-0 w-60 h-24 m-auto right-0 bg-white group-hover:bottom-0 duration-300">
                <p className="flex justify-center   items-center h-full  text-2xl font-bold text-[#002856] text-center">{t("ourGalleryDescription3")}</p>
              </div>
            </div>
          </SwiperSlide>
          {/* Gallery Image 4 */}
          <SwiperSlide>
            <div className='group'>
              <img src={GalleryImage4} alt="Image 5" draggable="false"/>
              <div className="absolute -bottom-24 left-0 w-60 h-24 m-auto right-0 bg-white group-hover:bottom-0 duration-300">
                <p className="flex justify-center   items-center h-full  text-2xl font-bold text-[#002856] text-center">{t("ourGalleryDescription4")}</p>
              </div>
            </div>
          </SwiperSlide>
          {/* Gallery Image 5 */}
          <SwiperSlide>
            <div className='group'>
              <img src={GalleryImage5} alt="Image 6" draggable="false"/>
              <div className="absolute -bottom-24 left-0 w-60 h-24 m-auto right-0 bg-white group-hover:bottom-0 duration-300">
                <p className="flex justify-center   items-center h-full  text-2xl font-bold text-[#002856] text-center">{t("ourGalleryDescription5")}</p>
              </div>
            </div>
          </SwiperSlide>
          {/* Gallery Image 1 */}
          <SwiperSlide>
            <div className='group'>
              <img src={GalleryImage1} alt="Image 1" draggable="false"/>
              <div className="absolute -bottom-24 left-0 w-60 h-24 m-auto right-0 bg-white group-hover:bottom-0 duration-300">
                <p className="flex justify-center   items-center h-full  text-2xl font-bold text-[#002856] text-center">{t("ourGalleryDescription1")}</p>
              </div>
            </div>
          </SwiperSlide>
          {/* Gallery Image 2 */}
          <SwiperSlide>
            <div className='group'>
              <img src={GalleryImage2} alt="Image 2" draggable="false"/>
              <div className="absolute -bottom-24 left-0 w-60 h-24 m-auto right-0 bg-white group-hover:bottom-0 duration-300">
                <p className="flex justify-center   items-center h-full  text-2xl font-bold text-[#002856] text-center">{t("ourGalleryDescription2")}</p>
              </div>
            </div>
          </SwiperSlide>
          {/* Gallery Image 3 */}
          <SwiperSlide>
            <div className='group'>
              <img src={GalleryImage3} alt="Image 3" draggable="false"/>
              <div className="absolute -bottom-24 left-0 w-60 h-24 m-auto right-0 bg-white group-hover:bottom-0 duration-300">
                <p className="flex justify-center   items-center h-full  text-2xl font-bold text-[#002856] text-center">{t("ourGalleryDescription3")}</p>
              </div>
            </div>
          </SwiperSlide>
          {/* Gallery Image 4 */}
          <SwiperSlide>
            <div className='group'>
              <img src={GalleryImage4} alt="Image 5" draggable="false"/>
              <div className="absolute -bottom-24 left-0 w-60 h-24 m-auto right-0 bg-white group-hover:bottom-0 duration-300">
                <p className="flex justify-center   items-center h-full  text-2xl font-bold text-[#002856] text-center">{t("ourGalleryDescription4")}</p>
              </div>
            </div>
          </SwiperSlide>
          {/* Gallery Image 5 */}
          <SwiperSlide>
            <div className='group'>
              <img src={GalleryImage5} alt="Image 6" draggable="false"/>
              <div className="absolute -bottom-24 left-0 w-60 h-24 m-auto right-0 bg-white group-hover:bottom-0 duration-300">
                <p className="flex justify-center   items-center h-full  text-2xl font-bold text-[#002856] text-center">{t("ourGalleryDescription5")}</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </ScrollAnimation>
  )
}

export default GallerySwiper