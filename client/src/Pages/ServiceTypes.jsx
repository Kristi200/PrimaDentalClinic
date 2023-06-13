import React from 'react'
import { AboutImg } from '../assets'
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import {Swiper,SwiperSlide} from 'swiper/react';
import { useTranslation } from 'react-i18next';

const ServiceTypes = (props) => {
    const {typeOfService} = props;
    const { t } = useTranslation(); 
    
    return (
        <div className="w-full flex-col">
            {/* First Section */}
            <div className="flex flex-row justify-between sm:px-5 md:px-10 lg:px-28 py-10 items-center">
                <div className="flex flex-col gap-3">
                    <p className="font-bold text-4xl text-[#002856]">{typeOfService.title}</p>
                    <p className="font-medium text-[#002856]">
                        <Link to="/">Home</Link> - <span className="text-[#00ACB1]">{typeOfService.title}</span>
                    </p>
                </div>
                <img
                    src={AboutImg}
                    alt="About Img"
                    className="sm:w-24 md:w-36 lg:w-40"
                />
            </div>
            {/* Second Section */}
            <div className='w-full flex sm:flex-col md:flex-col py-10 lg:py-20 sm:gap-10 md:gap-10 sm:px-5 md:px-10 lg:px-28 lg:gap-5'>
                {/* Filters */}
                <div className='flex flex-col gap-5 fadeInLeft'>
                    <div className='flex flex-col child:text-[#002856] child:font-bold child:text-xl gap-5 bg-neutral-100 px-5 py-5 rounded-xl md:child:text-left md:child:pl-5'>
                        <p>Blogs Category</p>
                        <button type='button' className='bg-white lg:w-80 border py-2 hover:translate-x-1 duration-500 rounded-xl hover:border-l-[5px] hover:text-[#00ACB1] hover:border-l-[#00ACB1]' value="all"><Link to="/services">{t("servicesButton1")}</Link></button>
                        <button type='button' className='bg-white lg:w-80 border py-2 hover:translate-x-1 duration-500 rounded-xl hover:border-l-[5px] hover:text-[#00ACB1] hover:border-l-[#00ACB1]' value="surgery"><Link to="/services">{t("servicesButton2")}</Link></button>
                        <button type='button' className='bg-white lg:w-80 border py-2 hover:translate-x-1 duration-500 rounded-xl hover:border-l-[5px] hover:text-[#00ACB1] hover:border-l-[#00ACB1]' value="general-dentistry"><Link to="/services">{t("servicesButton3")}</Link></button>
                        <button type='button' className='bg-white lg:w-80 border py-2 hover:translate-x-1 duration-500 rounded-xl hover:border-l-[5px] hover:text-[#00ACB1] hover:border-l-[#00ACB1]' value="cosmetic-dentistry"><Link to="/services">{t("servicesButton4")}</Link></button>
                        <button type='button' className='bg-white lg:w-80 border py-2 hover:translate-x-1 duration-500 rounded-xl hover:border-l-[5px] hover:text-[#00ACB1] hover:border-l-[#00ACB1]' value="cosmetic-dentistry"><Link to="/services">{t("servicesButton5")}</Link></button>
                    </div>
                </div>
                {/* Selected Content */}
                <div className='flex flex-col w-full lg:mr-16 fadeInRight'>
                    <p className='text-4xl font-bold text-[#002856]'>{typeOfService.title}</p>
                    <div className='flex flex-row justify-center sm:w-screen lg:w-2/3 my-10'>
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={1}
                            speed="1000"
                            loop={true}
                            breakpoints={{
                            767:{
                                slidesPerView: 3,
                            },
                            992: {
                                slidesPerView: 3
                            }
                            }}
                        >
                            <SwiperSlide>
                                <div>
                                    <img src={typeOfService.image} alt="Image 1" draggable="false" className='h-40'/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={typeOfService.image2} alt="Image 2" draggable="false" className='h-40'/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={typeOfService.image3} alt="Image 3" draggable="false" className='h-40'/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={typeOfService.image4} alt="Image 4" draggable="false" className='h-40'/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={typeOfService.image} alt="Image 5" draggable="false" className='h-40'/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={typeOfService.image2} alt="Image 6" draggable="false" className='h-40'/>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className='w-full lg:w-2/3 text-neutral-500 child:mb-4'>
                        <p>{typeOfService.subDescription}</p>
                        <p>{typeOfService.subDescription2}</p>
                        <p>{typeOfService.subDescription3}</p>
                        <p>{typeOfService.subDescription4}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceTypes