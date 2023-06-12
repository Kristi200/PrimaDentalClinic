import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react';
import { ServicesImage1,ServicesImage2,ServicesImage4,ServicesImage5, SurgeryIcon, GeneralIcon, CosmeticIcon, AeshteticIcon, ImplantologjiIcon, ConservativeIcon } from '../assets';
import { Link } from 'react-router-dom';
import { Navigation } from "swiper";
import ScrollAnimation from 'react-animate-on-scroll';
import { useTranslation } from 'react-i18next';
import "swiper/css/navigation";

const ServicesSwiper = () => {
  const { t } = useTranslation();

  return (
    <ScrollAnimation className='flex w-full flex-col justify-center items-center mb-32' animateIn='fadeInTop'>
      <div className='w-full sm:px-3 md:px-20 lg:px-32'>
        <div className='text-center'>
          <p className="text-[#00ACB1] font-bold">{t("ourServices")}</p>
          <p className="sm:text-2xl md:text-4xl lg:text-4xl sm:font-extrabold md:font-extrabold lg:font-bold text-[#002856] mt-3 mb-10">
            {t("ourServicesTitle")}
          </p>
        </div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={true}
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
          {/* Slide 1 */}
          <SwiperSlide>
            <div className='border-r-2 border-slate-100 border-b-2 group'>
              <div className='h-fill w-fill top-96 bottom-[25%] left-0 right-0  linearBlue z-[10] absolute group-hover:top-20 duration-300'>.</div>
              <img src={ServicesImage4} alt="Image 1" draggable="false"/>
              <div className='border-r-2 border-slate-100 border-b-2 z-[20]'>
                <img src={ImplantologjiIcon} alt='Tooth Icon' width={70} className='absolute z-10 left-6 bottom-20 p-1 rounded-full bg-white shadow shadow-neutral-500 group-hover:bg-[#00ACB1] border-8 border-white duration-300'/>
                <p className='py-10 pl-10 text-2xl text-[#002856] font-bold'>{t("servicesButton2")}</p>
              </div>
            </div>
          </SwiperSlide>
          {/* Slide 2 */}
          <SwiperSlide>
            <div className='border-r-2 border-slate-100 border-b-2 group'>
              <div className='h-fill w-fill top-96 bottom-[25%] left-0 right-0  linearBlue z-[10] absolute group-hover:top-20 duration-300'>.</div>
              <img src={ServicesImage2} alt="Image 2" draggable="false"/>
              <div className='border-r-2 border-slate-100 border-b-2 z-[20]'>
                <img src={ConservativeIcon} alt='Tooth Icon' width={70} className='absolute z-10 left-6 bottom-20 p-3 rounded-full bg-white shadow shadow-neutral-500 group-hover:bg-[#00ACB1] border-8 border-white duration-300'/>
                <p className='py-10 pl-10 text-2xl text-[#002856] font-bold'>{t("servicesButton3")}</p>
              </div>
            </div>
          </SwiperSlide>
          {/* Slide 3 */}
          <SwiperSlide>
            <div className='border-r-2 border-slate-100 border-b-2 group'>
              <div className='h-fill w-fill top-96 bottom-[25%] left-0 right-0  linearBlue z-[10] absolute group-hover:top-20 duration-300'>.</div>
              <img src={ServicesImage1} alt="Image 1" draggable="false"/>
              <div className='border-r-2 border-slate-100 border-b-2 z-[20]'>
                <img src={CosmeticIcon} alt='Tooth Icon' width={70} className='absolute z-10 left-6 bottom-20 p-3 rounded-full bg-white shadow shadow-neutral-500 group-hover:bg-[#00ACB1] border-8 border-white duration-300'/>
                <p className='py-10 pl-10 text-2xl text-[#002856] font-bold'>{t("servicesButton4")}</p>
              </div>
            </div>
          </SwiperSlide>
          {/* Slide 4 */}
          <SwiperSlide>
            <div className='border-r-2 border-slate-100 border-b-2 group'>
              <div className='h-fill w-fill top-96 bottom-[25%] left-0 right-0  linearBlue z-[10] absolute group-hover:top-20 duration-300'>.</div>
              <img src={ServicesImage5} alt="Image 1" draggable="false"/>
              <div className='border-r-2 border-slate-100 border-b-2 z-[20]'>
                <img src={AeshteticIcon} alt='Tooth Icon' width={70} className='absolute z-10 left-6 bottom-20 p-3 rounded-full bg-white shadow shadow-neutral-500 group-hover:bg-[#00ACB1] border-8 border-white duration-300'/>
                <p className='py-10 pl-10 text-2xl text-[#002856] font-bold'>{t("servicesButton5")}</p>
              </div>
            </div>
          </SwiperSlide>
          {/* Slide 1 */}
          <SwiperSlide>
            <div className='border-r-2 border-slate-100 border-b-2 group'>
              <div className='h-fill w-fill top-96 bottom-[25%] left-0 right-0  linearBlue z-[10] absolute group-hover:top-20 duration-300'>.</div>
              <img src={ServicesImage4} alt="Image 1" draggable="false"/>
              <div className='border-r-2 border-slate-100 border-b-2 z-[20]'>
                <img src={SurgeryIcon} alt='Tooth Icon' width={70} className='absolute z-10 left-6 bottom-20 p-3 rounded-full bg-white shadow shadow-neutral-500 group-hover:bg-[#00ACB1] border-8 border-white duration-300'/>
                <p className='py-10 pl-10 text-2xl text-[#002856] font-bold'>{t("servicesButton2")}</p>
              </div>
            </div>
          </SwiperSlide>
          {/* Slide 2 */}
          <SwiperSlide>
            <div className='border-r-2 border-slate-100 border-b-2 group'>
              <div className='h-fill w-fill top-96 bottom-[25%] left-0 right-0  linearBlue z-[10] absolute group-hover:top-20 duration-300'>.</div>
              <img src={ServicesImage2} alt="Image 2" draggable="false"/>
              <div className='border-r-2 border-slate-100 border-b-2 z-[20]'>
                <img src={GeneralIcon} alt='Tooth Icon' width={70} className='absolute z-10 left-6 bottom-20 p-3 rounded-full bg-white shadow shadow-neutral-500 group-hover:bg-[#00ACB1] border-8 border-white duration-300'/>
                <p className='py-10 pl-10 text-2xl text-[#002856] font-bold'>{t("servicesButton3")}</p>
              </div>
            </div>
          </SwiperSlide>
          {/* Slide 3 */}
          <SwiperSlide>
            <div className='border-r-2 border-slate-100 border-b-2 group'>
              <div className='h-fill w-fill top-96 bottom-[25%] left-0 right-0  linearBlue z-[10] absolute group-hover:top-20 duration-300'>.</div>
              <img src={ServicesImage1} alt="Image 1" draggable="false"/>
              <div className='border-r-2 border-slate-100 border-b-2 z-[20]'>
                <img src={CosmeticIcon} alt='Tooth Icon' width={70} className='absolute z-10 left-6 bottom-20 p-3 rounded-full bg-white shadow shadow-neutral-500 group-hover:bg-[#00ACB1] border-8 border-white duration-300'/>
                <p className='py-10 pl-10 text-2xl text-[#002856] font-bold'>{t("servicesButton4")}</p>
              </div>
            </div>
          </SwiperSlide>
          {/* Slide 4 */}
          <SwiperSlide>
            <div className='border-r-2 border-slate-100 border-b-2 group'>
              <div className='h-fill w-fill top-96 bottom-[25%] left-0 right-0  linearBlue z-[10] absolute group-hover:top-20 duration-300'>.</div>
              <img src={ServicesImage5} alt="Image 1" draggable="false"/>
              <div className='border-r-2 border-slate-100 border-b-2 z-[20]'>
                <img src={AeshteticIcon} alt='Tooth Icon' width={70} className='absolute z-10 left-6 bottom-20 p-3 rounded-full bg-white shadow shadow-neutral-500 group-hover:bg-[#00ACB1] border-8 border-white duration-300'/>
                <p className='py-10 pl-10 text-2xl text-[#002856] font-bold'>{t("servicesButton5")}</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        </div>
        <Link to="/services"><button type='submit' className='h-16 bg-[#00ACB1] px-20 rounded-lg duration-300 border-none hover:bg-[#002856] text-white mt-10'>{t("ourServicesButton")}</button></Link>
    </ScrollAnimation>
  )
}

export default ServicesSwiper