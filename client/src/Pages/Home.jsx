import {useEffect, useState} from "react"
import { BackgroundImage, CheckUpIcon, CosmeticIcon, GeneralIcon, Implant, MedIcon, Slide1, Slide2, Slide3, TeethIcon} from "../assets/index";
import { GallerySwiper,Services,Blog } from '../Components/index';
import { Contact} from "./index";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import {LeftArrow, RightArrow, About1, About2 } from "../assets/index";
import { Link } from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';
import { Trans, useTranslation } from "react-i18next";

const Home = (props) => {
  const {language} = props
  const { t } = useTranslation();
  const handleDragStart = e => e.preventDefault()
  const [button1,setButton1] = useState(true)
  const [button2,setButton2] = useState(false)
  const [button3,setButton3] = useState(false)
  const [button4,setButton4] = useState(false)
  
  const changeButtonStatus = (e) => {
    if(e.target.id === "Family" && button1 === false){
      setButton1(true)
      setButton2(false)
      setButton3(false)
      setButton4(false)
    }else if(e.target.id === "Cosmetic" && button2 === false){
      setButton1(false)
      setButton2(true)
      setButton3(false)
      setButton4(false)
    }else if(e.target.id === "CheckUps" && button3 === false){
      setButton1(false)
      setButton2(false)
      setButton3(true)
      setButton4(false)
    }else if(e.target.id === "Implants" && button4 === false){
      setButton1(false)
      setButton2(false)
      setButton3(false)
      setButton4(true)
    }
  }
  
  
  return (
    <div> 
      {/* Pagination */}
      <AliceCarousel
        mouseTracking
        disableDotsControls
        infinite
        animationDuration={1500}
        renderNextButton={() => {
          return (
            <button className="sm:flex sm:justify-center sm:items-center absolute sm:left-24 md:top-0 lg:top-0  sm:bottom-8 md:bottom-0 lg:bottom-0 right-0 m-auto sm:w-20 sm:h-7 md:px-1 lg:px-1 md:h-20 lg:h-20 sm:rounded-r-lg md:rounded-l-lg lg:rounded-l-lg bg-[#002856] hover:bg-[#00ACB1] font-bold text-white duration-300">
              <img src={RightArrow} alt="Next Navigation Arrow" />
            </button>
          )
        }}
        renderPrevButton={() => {
          return (
            <button className="sm:flex sm:justify-center sm:items-center absolute sm:bottom-8 md:top-0 lg:top-0 md:bottom-0 lg:bottom-0 left-0 sm:right-24 m-auto sm:w-20 sm:h-7 md:px-1 lg:px-1 md:h-20 lg:h-20 sm:rounded-l-lg md:rounded-r-lg lg:rounded-r-lg bg-[#002856] hover:bg-[#00ACB1] font-bold text-white duration-300">
              <img src={LeftArrow} alt="Back Navigation Arrow" />
            </button>
          )
        }}
      >
        {/* Slide 1 */}
        <div className="sm:h-[415px] md:h-[500px] lg:w-full">
          <img src={Slide1} onDragStart={handleDragStart} alt="Slide 1" role="presentation" className="md:w-full blur-[1px] sm:bg-center md:bg-center sm:h-full md:h-full  sm:object-cover md:object-center"/>
          <div className="scrollLeft absolute left-0 top-0 bottom-0 lg:w-1/2 sm:w-screen md:w-screen bg-white bg-gradient-to-r from-slate-300 to-transparent  lg:bg-opacity-50 sm:bg-opacity-10 md:bg-opacity-20 sm:pl-10 md:pl-16 lg:pl-20">
            <div className="flex flex-col justify-center w-full h-full">
              <p className="text-[#002856] sm:text-3xl md:text-4xl lg:text-5xl font-bold sm:mt-3 md:mt-4 lg:mt-5 capitalize"><Trans components={{ br: <br className="sm:hidden"/> }}>{t("homeCarousel1")}</Trans> </p>
              <p className="sm:mt-5 md:mt-7 font-bold lg:mt-10 md:w-40px text-[#002856] lg:pr-20 leading-7 capitalize"><Trans components={{ br: <br className="sm:hidden"/> }}>{t("carouselAbout1")}</Trans></p>
              <Link to="/free-quote"><button type="button" className="bg-[#002856] sm:w-3/5 md:w-2/5 lg:w-2/5 sm:py-3 md:py-5 lg:py-4 mt-5 lg:mt-10 text-white rounded-md hover:bg-[#00ACB1] duration-300">{t("carouselButton")}</button></Link>
            </div>
          </div>
        </div>
        {/* Slide 2 */}
        <div className="sm:h-[415px] md:h-[500px] lg:w-full">
          <img src={Slide2} onDragStart={handleDragStart} alt="Slide 2" role="presentation" className="md:w-full blur-[1px] sm:bg-center md:bg-center sm:h-full md:h-full sm:object-cover md:object-center"/>
          <div className="absolute left-0 top-0 bottom-0 lg:w-1/2 sm:w-screen md:w-screen bg-white bg-gradient-to-r from-slate-300 to-transparent  lg:bg-opacity-50 sm:bg-opacity-10 md:bg-opacity-20 sm:pl-10 md:pl-16 lg:pl-20">
            <div className="flex flex-col justify-center w-full h-full">              
              <p className="text-[#002856] sm:text-3xl md:text-4xl lg:text-5xl font-bold sm:-mt-5 md:mt-4 lg:mt-5 capitalize"><Trans components={{ br: <br className="sm:hidden"/>}}>{t("homeCarousel2")}</Trans></p>
              <p className="sm:mt-5 md:mt-7 lg:mt-10 md:w-40px text-[#002856] lg:pr-20 leading-7 font-bold capitalize"><Trans components={{ br: <br/> }}>{t("carouselAbout2")}</Trans></p>
              <Link to="/free-quote"><button type="button" className="bg-[#002856] sm:w-3/5 md:w-2/5 lg:w-2/5 sm:py-3 md:py-5 lg:py-4 mt-10 text-white rounded-md hover:bg-[#00ACB1] duration-300">{t("carouselButton")}</button></Link>
            </div>
          </div>
        </div>
        {/* Slide 3 */}
        <div className="sm:h-[415px] md:h-[500px] lg:w-full">
          <img src={Slide3} onDragStart={handleDragStart} alt="Slide 3" role="presentation" className="blur-[1px] sm:bg-center md:bg-center sm:h-full md:h-full sm:object-cover md:w-full"/>
          <div className="absolute left-0 top-0 bottom-0 lg:w-1/2 sm:w-screen md:w-screen bg-white bg-gradient-to-r from-slate-300 to-transparent  lg:bg-opacity-50 sm:bg-opacity-10 md:bg-opacity-20 sm:pl-10 md:pl-16 lg:pl-20">
            <div className="flex flex-col justify-center w-full h-full">              
              <p className="text-[#002856] sm:text-3xl md:text-4xl lg:text-5xl font-bold sm:mt-3 md:mt-4 lg:mt-5 capitalize"><Trans components={{ br: <br/> }}>{t("homeCarousel3")}</Trans></p>
              <p className="sm:mt-5 font-bold md:mt-7 lg:mt-10 md:w-40px text-[#002856] lg:pr-20 leading-7 capitalize"><Trans components={{ br: <br/> }}>{t("carouselAbout3")}</Trans></p>
              <Link to="/free-quote"><button type="button" className="bg-[#002856] sm:w-3/5 md:w-2/5 lg:w-2/5 sm:py-3 md:py-5 lg:py-4 mt-10 text-white rounded-md hover:bg-[#00ACB1] duration-300">{t("carouselButton")}</button></Link>
            </div>
          </div>
        </div>
      </AliceCarousel>
      {/* About Us */}
      <div className="flex sm:flex-col md:flex-col justify-center w-full my-20">
        <ScrollAnimation className="flex flex-col lg:w-1/2 lg:-mr-16 sm:mb-10 md:mb-12" animateIn="fadeInLeft">  
          <div className="absolute">
            <img src={About2} alt="About Image 2"  className="relative sm:-top-20 md:-top-20 lg:top-0 sm:left-1 md:left-16 lg:left-2 sm:w-1/2 md:w-5/6 lg:w-3/4 border-8 border-white"/>
            <div className="relative sm:bottom-5 md:bottom-1 sm:left-2 md:left-16 sm:shrink lg:top-12  bg-[#002856] text-white text-center md:py-5 lg:py-5 md:w-2/3 lg:w-2/3 sm:py-1 sm:w-1/2">
              <p className="sm:text-[18px] md:text-4xl lg:text-4xl font-bold lg:mb-1">{t("aboutUsLogo")}</p>
              <p className="sm:text-sm">{t("aboutUsLogoDescription")}</p> 
            </div>
          </div>
          <div className="sm:flex md:flex sm:w-full md:w-full sm:justify-end md:justify-end sm:pr-3 md:pr-20">
            <img src={About1} alt="About Image 1" className="sm:w-2/3 md:w-[70%] lg:w-4/5 lg:pl-32 md:pt-1 lg:pt-20"/>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight">
        <div className="flex flex-col justify-center  sm:pl-5 md:pl-16 sm:pr-5 md:pr-20">
          <p className="text-[#00ACB1] font-bold">{t("getToKnowUs")}</p>
          <p className="text-3xl md:text-5xl text-[#002856] font-bold my-4">{t("aboutUsTitle")}</p>
          <div className="child:my-2 text-neutral-500">
            <p className="md:text-xl leading-8"><Trans components={{ br: <br className="sm:hidden md:hidden"/> }}>{t("aboutUsDescription")}</Trans></p>
          </div>
          <Link to="/about"><button type="button" className="bg-[#002856] py-5 px-10 mt-7 text-white rounded-md hover:bg-[#00ACB1] duration-300 sm:hidden">{t("aboutUsButton")}</button></Link>
        </div>
        </ScrollAnimation>
      </div>
      {/* Services */}
      <Services/>
      {/* Drop Downs */}
      <div className="flex justify-center sm:flex-col md:flex-col lg:flex-row   w-full sm:my-12 md:my-24 lg:my-64">
        <ScrollAnimation className="lg:absolute sm:px-3 md:px-16 sm:w-full md:w-full sm:flex md:flex sm:justify-center md:justify-center  md:h-[600px] sm:pb-10 md:pb-10" animateIn="fadeInRight">
          <img src={BackgroundImage} alt="Background Image" className="lg:w-4/5 md:object-cover sm:object-cover md:object-center sm:h-[350px] md:h-full sm:w-full md:w-full lg:relative blur-[1px] lg:left-96 lg:bottom-40 lg:z-[-5]"/>
        </ScrollAnimation>
        <ScrollAnimation className="flex flex-col sm:px-3 md:px-16 lg:-ml-72" animateIn="fadeInLeft">
          <p className="text-[#00ACB1] sm:text-sm font-bold">{t("dropDowns")}</p>
          <div className="child:text-[#002856] child:font-bold sm:child:text-2xl md:child:text-4xl lg:child:text-4xl mt-3 mb-10">
            <p><Trans components={{ br: <br className="md:hidden sm:hidden"/> }}>{t("dropDownsTitle1")}</Trans></p>
          </div>
          <div className="flex sm:flex-col md:flex-col gap-5 z-10 mb-10 child:text-white child:rounded-md child-hover:bg-[#00ACB1] child:px-6 md:child:px-5 child:py-4 md:child:py-4 child:duration-300 md:child:text-2xl">
            <button type="button" id="Family" onClick={(e) => changeButtonStatus(e)} className={(button1) ? "bg-[#00ACB1] flex flex-row gap-2 items-center" : "bg-[#002856] flex flex-row gap-2 items-center"}>
              <img src={MedIcon} width={30} alt="Button 1 Icon"/>
              {t("button1")}
            </button>
            <button type="button" id="Cosmetic" onClick={(e) => changeButtonStatus(e)} className={(button2) ? "bg-[#00ACB1] flex flex-row gap-2 items-center" : "bg-[#002856] flex flex-row gap-2 items-center"}>
              <img src={TeethIcon} width={30} alt="Button 2 Icon"/>
              {t("button2")}
            </button>
            <button type="button" id="CheckUps" onClick={(e) => changeButtonStatus(e)} className={(button3) ? "bg-[#00ACB1] flex flex-row gap-2 items-center" : "bg-[#002856] flex flex-row gap-2 items-center"}>
              <img src={CheckUpIcon} width={50} alt="Button 3 Icon"/>
              {t("button3")}
            </button>
            <button type="button" id="Implants" onClick={(e) => changeButtonStatus(e)} className={(button4) ? "bg-[#00ACB1] flex flex-row gap-2 items-center" : "bg-[#002856] flex flex-row gap-2 items-center"}>
              <img src={Implant} width={30} alt="Button 4 Icon"/>
              {t("button4")}
            </button>
          </div>
          <div className={(button1) ? "visible" : "hidden"}>
            <div className="fadeInLeft">
              <p className="text-[#002856] font-bold text-xl md:text-3xl mb-4">{t("button1Title")}</p>
              <p className="text-neutral-500 md:text-xl"><Trans components={{ br: <br className="sm:hidden md:hidden"/> }}> {t("button1Description1")}</Trans></p>
            </div>
          </div>
          <div className={(button2) ? "visible" : "hidden"}>
            <div className="fadeInLeft">
              <p className="text-[#002856] font-bold text-xl md:text-3xl mb-4">{t("button2Title")}</p>
              <p className="text-neutral-500 md:text-xl"><Trans components={{ br: <br className="sm:hidden md:hidden"/> }}>{t("button2Description1")}</Trans></p>
            </div>
          </div>
          <div className={(button3) ? "visible" : "hidden"}>
            <div className="fadeInLeft">
              <p className="text-[#002856] font-bold text-xl md:text-3xl mb-4">{t("button3Title")}</p>
              <p className="text-neutral-500 md:text-xl"><Trans components={{ br: <br className="sm:hidden md:hidden"/> }}>{t("button3Description1")}</Trans></p>
            </div>
          </div>
          <div className={(button4) ? "visible" : "hidden"}>
            <div className="fadeInLeft">
              <p className="text-[#002856] font-bold text-xl md:text-3xl mb-4">{t("button4Title")}</p>
              <p className="text-neutral-500 md:text-xl"><Trans components={{ br: <br className="sm:hidden md:hidden"/> }}>{t("button4Description1")}</Trans></p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
      {/* Blog & News */}
      <Blog/>
      {/* Gallery */}
      <GallerySwiper/>
      {/* Contact */}
      <Contact language={language}/>
    </div>
  )
}

export default Home
