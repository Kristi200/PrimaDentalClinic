import React from "react"
import {AboutImg} from "../assets"
import {Link} from "react-router-dom"
import {Swiper, SwiperSlide} from "swiper/react"

const BlogTypes = props => {
    const {blogType} = props

    return (
        <div className="w-full flex-col">
            {/* First Section */}
            <div className="flex flex-row justify-between sm:px-5 md:px-10 lg:px-28 py-10 items-center">
                <div className="flex flex-col gap-3">
                    <p className="font-bold text-4xl text-[#002856]">{blogType.title}</p>
                    <p className="font-medium text-[#002856]">
                        <Link to="/">Home - </Link>
                        <span className="text-[#00ACB1]">{blogType.title}</span>
                    </p>
                </div>
                <img
                    src={AboutImg}
                    alt="About Img"
                    className="sm:w-24 md:w-36 lg:w-40"
                />
            </div>
            {/* Selected Content */}
            <div className="w-full flex sm:flex-col md:flex-col lg:flex-col py-10 lg:py-20 sm:gap-10 md:gap-10 sm:px-5 md:px-10 lg:px-28 lg:gap-5">
                <p className="text-4xl font-bold text-[#002856]">{blogType.title}</p>
                <div className="flex flex-row justify-center  my-10">
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={1}
                        speed="1000"
                        loop={true}
                        breakpoints={{
                            767: {
                                slidesPerView: 3,
                            },
                            992: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <div>
                                <img
                                src={blogType.image}
                                alt="Image 1"
                                draggable="false"
                                className=""
                            />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img
                                src={blogType.image2}
                                alt="Image 2"
                                draggable="false"
                                className=""
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img
                                src={blogType.image3}
                                alt="Image 3"
                                draggable="false"
                                className=""
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img
                                src={blogType.image4}
                                alt="Image 4"
                                draggable="false"
                                className=""
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img
                                src={blogType.image}
                                alt="Image 5"
                                draggable="false"
                                className=""
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img
                                src={blogType.image2}
                                alt="Image 6"
                                draggable="false"
                                className=""
                                />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="w-full text-neutral-500 child:mb-4">
                    <p>{blogType.subDescription}</p>
                    <p>{blogType.subDescription2}</p>
                    <p>{blogType.subDescription3}</p>
                    <p>{blogType.subDescription4}</p>
                </div>
            </div>
        </div>
    )
}

export default BlogTypes
