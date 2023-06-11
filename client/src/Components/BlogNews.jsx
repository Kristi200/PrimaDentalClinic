import React from "react"
import { Calendar,BlogImages1,BlogImages2,BlogImages3 } from "../assets";
import { Swiper,SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import { useTranslation } from "react-i18next";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const BlogNews = () => {
    const { t } = useTranslation();

    return (    
        <ScrollAnimation className="flex w-full justify-center items-center sm:mb-20 md:mb-24 lg:mb-32" animateIn="fadeInTop">
            <div className="w-full sm:px-3 md:px-16 lg:px-32">
                <div>
                    <p className="text-[#00ACB1] font-bold">{t("blogNews")}</p>
                    <p className="text-4xl font-bold text-[#002856] mt-3 mb-10">
                        {t("blogNewsTitle")}
                    </p>
                </div>
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
                        <div className='border-r-2 border-slate-100 border-b-2 group '>
                            <div className="overflow-hidden">
                                <img src={BlogImages1} alt="Image 1" draggable="false" className="group-hover:rotate-6 group-hover:scale-110 duration-1000"/>
                            </div>
                            <div className='border-r-2 border-slate-100 border-b-2 '>
                                <div className="flex flex-col pl-8 py-8">
                                    <Link to="/blogs"><p className='text-2xl text-[#002856] font-bold pb-3 tracking-wider'>{t("blogNewsDescription1")}</p></Link>
                                    <div className="flex flex-row  gap-2 text-center mt-3">
                                        <img src={Calendar} alt="Calendar Icon"/>
                                        <p className="text-base tracking-wider text-neutral-500">06/13/2023 18:02</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>    
                    <SwiperSlide>
                        <div className='border-r-2 border-slate-100 border-b-2 group '>
                            <div className="overflow-hidden">
                                <img src={BlogImages2} alt="Image 2" draggable="false" className="group-hover:rotate-6 group-hover:scale-110 duration-1000"/>
                            </div>
                            <div className='border-r-2 border-slate-100 border-b-2'>
                                <div className="flex flex-col pl-8 py-8">
                                    <Link to="/blogs"><p className='text-2xl text-[#002856] font-bold pb-3 tracking-wider'>{t("blogNewsDescription2")}</p></Link>
                                    <div className="flex flex-row  gap-2 text-center mt-3">
                                        <img src={Calendar} alt="Calendar Icon"/>
                                        <p className="text-base tracking-wider text-neutral-500">06/13/2023 18:05</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>    
                    <SwiperSlide>
                        <div className='border-r-2 border-slate-100 border-b-2 group '>
                            <div className="overflow-hidden">
                                <img src={BlogImages3} alt="Image 1" draggable="false" className="group-hover:rotate-6 group-hover:scale-110 duration-1000"/>
                            </div>
                            <div className='border-r-2 border-slate-100 border-b-2 '>
                                <div className="flex flex-col pl-8 py-8">
                                    <Link to="/blogs"><p className='text-2xl text-[#002856] font-bold pb-3 tracking-wider'>{t("blogNewsDescription3")}</p></Link>
                                    <div className="flex flex-row  gap-2 text-center mt-3">
                                        <img src={Calendar} alt="Calendar Icon"/>
                                        <p className="text-base tracking-wider text-neutral-500">06/13/2022 18:02</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>    
                    <SwiperSlide>
                        <div className='border-r-2 border-slate-100 border-b-2 group '>
                            <div className="overflow-hidden">
                                <img src={BlogImages1} alt="Image 1" draggable="false" className="group-hover:rotate-6 group-hover:scale-110 duration-1000"/>
                            </div>
                            <div className='border-r-2 border-slate-100 border-b-2 '>
                                <div className="flex flex-col pl-8 py-8">
                                    <Link to="/blogs"><p className='text-2xl text-[#002856] font-bold pb-3 tracking-wider'>{t("blogNewsDescription1")}</p></Link>
                                    <div className="flex flex-row  gap-2 text-center mt-3">
                                        <img src={Calendar} alt="Calendar Icon"/>
                                        <p className="text-base tracking-wider text-neutral-500">06/13/2023 18:02</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>    
                    <SwiperSlide>
                        <div className='border-r-2 border-slate-100 border-b-2 group '>
                            <div className="overflow-hidden">
                                <img src={BlogImages2} alt="Image 2" draggable="false" className="group-hover:rotate-6 group-hover:scale-110 duration-1000"/>
                            </div>
                            <div className='border-r-2 border-slate-100 border-b-2'>
                                <div className="flex flex-col pl-8 py-8">
                                    <Link to="/blogs"><p className='text-2xl text-[#002856] font-bold pb-3 tracking-wider'>{t("blogNewsDescription2")}</p></Link>
                                    <div className="flex flex-row  gap-2 text-center mt-3">
                                        <img src={Calendar} alt="Calendar Icon"/>
                                        <p className="text-base tracking-wider text-neutral-500">06/13/2023 18:05</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>    
                    <SwiperSlide>
                        <div className='border-r-2 border-slate-100 border-b-2 group '>
                            <div className="overflow-hidden">
                                <img src={BlogImages3} alt="Image 1" draggable="false" className="group-hover:rotate-6 group-hover:scale-110 duration-1000"/>
                            </div>
                            <div className='border-r-2 border-slate-100 border-b-2 '>
                                <div className="flex flex-col pl-8 py-8">
                                    <Link to="/blogs"><p className='text-2xl text-[#002856] font-bold pb-3 tracking-wider'>{t("blogNewsDescription3")}</p></Link>
                                    <div className="flex flex-row  gap-2 text-center mt-3">
                                        <img src={Calendar} alt="Calendar Icon"/>
                                        <p className="text-base tracking-wider text-neutral-500">06/13/2022 18:02</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>    
                </Swiper>
                <div className="flex justify-center">
                    <Link to="/blogs"><button type='submit' className='h-16 bg-[#00ACB1] px-20 rounded-lg duration-300 border-none hover:bg-[#002856] text-white mt-10'>{t("blogNewsButton")}</button></Link>
                </div>
            </div>
        </ScrollAnimation>
    )
}

export default BlogNews
