import {useState} from "react"
import {AboutImg, BlogImage1, BlogImage2, Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6, Gallery7, HouseIcon, MedIcon, Plane1Icon, Plane2Icon} from "../assets"
import ScrollAnimation from "react-animate-on-scroll"
import { Link } from "react-router-dom"
import { Trans, useTranslation } from "react-i18next"

const DentalTourism = () => {
  const { t } = useTranslation()
  const [button1, setButton1] = useState(true)
  const [button2, setButton2] = useState(false)
  const [button3, setButton3] = useState(false)
  const [button4, setButton4] = useState(false)

  const changeButtonStatus = e => {
    if (e.target.id === "Family" && button1 === false) {
      setButton1(true)
      setButton2(false)
      setButton3(false)
      setButton4(false)
    } else if (e.target.id === "Cosmetic" && button2 === false) {
      setButton1(false)
      setButton2(true)
      setButton3(false)
      setButton4(false)
    } else if (e.target.id === "CheckUps" && button3 === false) {
      setButton1(false)
      setButton2(false)
      setButton3(true)
      setButton4(false)
    } else if (e.target.id === "Implants" && button4 === false) {
      setButton1(false)
      setButton2(false)
      setButton3(false)
      setButton4(true)
    }
  }
  

  return (
    <div className="w-full flex-col">
      {/* First Section */}
      <div className="flex flex-row justify-between sm:px-5 md:px-10 lg:px-28 py-10 items-center">
        <div className="flex flex-col gap-3">
          <p className="font-bold text-4xl text-[#002856]">{t("dentalTourism")}</p>
          <p className="font-medium text-[#002856]">
            <Link to="/">Home</Link> - <span className="text-[#00ACB1]">{t("dentalTourism")}</span>
          </p>
        </div>
        <img
          src={AboutImg}
          alt="About Img"
          className="sm:w-24 md:w-36 lg:w-40"
        />
      </div>
      {/* Second Section */}
      <div className="flex sm:flex-col md:flex-col lg:flex-row sm:items-center md:items-center lg:justify-center sm:gap-10 md:gap-14 lg:gap-10 py-10 sm:px-5 md:px-10 lg:px-28">
        <img
          src={BlogImage1}
          alt="About Image Section 1"
          className=" lg:w-2/5"
        />
        <div className="items-center  md:px-16">
          <p className="text-[#002856] sm:text-3xl text-4xl font-bold py-5">
            {t("dentalTourismPage")}
          </p>
          <p className="text-md text-neutral-500">
            {t("dentalTourismPageDescription")}
          </p>
        </div>
      </div>
      {/* DropDowns */}
      <div className="flex justify-center sm:flex-col md:flex-col lg:flex-row   w-full sm:my-12 md:my-24 lg:my-64 sm:px-5 md:px-10 lg:px-28">
        <ScrollAnimation animateIn="fadeInLeft" className="lg:absolute sm:px-3 md:px-16 sm:w-full md:w-full sm:flex md:flex sm:justify-center md:justify-center sm:h-[500px] md:h-[600px] sm:pb-6 md:pb-10">
          <img
            src={BlogImage2}
            alt="Background Image"
            className="lg:w-4/5 sm:object-none md:object-cover sm:object-top md:object-center sm:h-full md:h-full sm:w-full md:w-full lg:relative blur-[1px] lg:left-96 lg:bottom-40 lg:z-[-5]"
          />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight" className="flex flex-col sm:px-3 md:px-16 lg:-ml-52">
          <p className="text-[#00ACB1] sm:text-sm font-bold">{t("dental")}</p>
          <div className="child:text-[#002856] child:font-bold sm:child:text-2xl md:child:text-4xl lg:child:text-4xl mt-3 mb-10">
            <p>
              <Trans components={{ br: <br className="sm:hidden md:hiddne"/> }}>{t("dentalTitle")}</Trans>
            </p>
          </div>
          <div className="flex sm:flex-col md:flex-col gap-5 z-10 mb-10 child:text-white child:rounded-md child-hover:bg-[#00ACB1] child:px-6 md:child:px-5 child:py-4 md:child:py-2 child:duration-300 md:child:text-2xl">
            <button
              type="button"
              id="Family"
              onClick={e => changeButtonStatus(e)}
              className={button1 ? "bg-[#00ACB1] flex flex-row items-center gap-2" : "bg-[#002856] flex flex-row items-center gap-2"}
            >
              <img src={Plane1Icon} alt="Travel 1 Icon"/>
              {t("dentalDropdown1Title")}
            </button>
            <button
              type="button"
              id="Cosmetic"
              onClick={e => changeButtonStatus(e)}
              className={button2 ? "bg-[#00ACB1] flex flex-row items-center gap-2" : "bg-[#002856] flex flex-row items-center gap-2"}
            >
              <img src={HouseIcon} alt="Accomodation Icon"/>
              {t("dentalDropdown2Title")}
            </button>
            <button
              type="button"
              id="CheckUps"
              onClick={e => changeButtonStatus(e)}
              className={button3 ? "bg-[#00ACB1] flex flex-row items-center gap-2" : "bg-[#002856] flex flex-row items-center gap-2"}
            >
              <img src={Plane2Icon} alt="Travel 2 Icon"/>
              {t("dentalDropdown3Title")}
            </button>
            <button
              type="button"
              id="Implants"
              onClick={e => changeButtonStatus(e)}
              className={button4 ? "bg-[#00ACB1] flex flex-row items-center gap-2" : "bg-[#002856] flex flex-row items-center gap-2"}
            >
              <img src={MedIcon} alt="Medical Icon"/>
              {t("dentalDropdown4Title")}
            </button>
          </div>
          {/* Button 1 Text */}
          <div className={button1 ? "visible fadeInRight" : "hidden"}>
            <p className="text-[#002856] font-bold text-xl md:text-3xl mb-4">
              {t("dentalDropdown1Title")}
            </p>
            <p className="text-neutral-500 md:text-xl">
              <Trans components={{ br: <br className="sm:hidden md:hidden"/>}}>{t("dentalDropdown1Description")}</Trans>
            </p>
          </div>
          {/* Button 2 Text */}
          <div className={button2 ? "visible fadeInRight" : "hidden"}>
            <p className="text-[#002856] font-bold text-xl md:text-3xl mb-4">
              {t("dentalDropdown2Title")}
            </p>
            <p className="text-neutral-500 md:text-xl">
              <Trans components={{ br: <br className="sm:hidden md:hidden"/> }}>{t("dentalDropdown2Description")}</Trans>
            </p>
          </div>
          {/* Button 3 Text */}
          <div className={button3 ? "visible fadeInRight" : "hidden"}>
            <p className="text-[#002856] font-bold text-xl md:text-3xl mb-4">
              {t("dentalDropdown3Title")}
            </p>
            <p className="text-neutral-500 md:text-xl">
              <Trans components={{ br: <br className="sm:hidden md:hidden"/> }}>{t("dentalDropdown3Description")}</Trans>
            </p>
          </div>
          {/* Button 4 Text */}
          <div className={button4 ? "visible fadeInRight" : "hidden"}>
            <p className="text-[#002856] font-bold text-xl md:text-3xl mb-4">
              {t("dentalDropdown4Title")}
            </p>
            <p className="text-neutral-500 md:text-xl">
              <Trans components={{ br: <br className="sm:hidden md:hidden"/> }}>{t("dentalDropdown4Description")}</Trans>
            </p>
          </div>
        </ScrollAnimation>
      </div>
      {/* Countrys Gallery */}
      <ScrollAnimation animateIn="fadeInTop" className="flex flex-col items-center py-10 sm:px-3 md:px-16">
        <p className="sm:text-2xl text-4xl font-bold text-[#002856] sm:text-center">
          {t("dentalGalleryTitle")}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5   lg:px-24 py-14">
          <div className="relative group">
            <img src={Gallery1} alt="Gallery Image 1" className="group-hover:scale-105 duration-500 grayscale group-hover:grayscale-0 h-60 lg:w-[100%]"/>
            <div className="bg-[#002856] absolute bottom-1/2 top-1/3 left-1/3 opacity-0 group-hover:opacity-100 right-1/3 m-auto duration-500">
              <p className="text-2xl font-bold text-white text-center pt-1">Saranda</p>
            </div>
          </div>
          <div className="relative group">
            <img src={Gallery2} alt="Gallery Image 1" className="group-hover:scale-105 duration-500 grayscale group-hover:grayscale-0 h-60 lg:w-[100%]"/>
            <div className="bg-[#002856] absolute bottom-1/2 top-1/3 left-1/3 opacity-0 group-hover:opacity-100 right-1/3 m-auto duration-500">
              <p className="text-2xl font-bold text-white text-center pt-1">Vlora</p>
            </div>
          </div>
          <div className="relative group">
            <img src={Gallery3} alt="Gallery Image 1" className="group-hover:scale-105 duration-500 grayscale group-hover:grayscale-0 h-60 lg:w-[100%]"/>
            <div className="bg-[#002856] absolute bottom-1/2 top-1/3 left-1/3 opacity-0 group-hover:opacity-100 right-1/3 m-auto duration-500">
              <p className="text-2xl font-bold text-white text-center pt-1">Ksamil</p>
            </div>
          </div>
          <div className="relative group">
            <img src={Gallery4} alt="Gallery Image 1" className="group-hover:scale-105 duration-500 grayscale group-hover:grayscale-0 h-60 lg:w-[100%]"/>
            <div className="bg-[#002856] absolute bottom-1/2 top-1/3 left-1/3 opacity-0 group-hover:opacity-100 right-1/3 m-auto duration-500">
              <p className="text-2xl font-bold text-white text-center pt-1">Divjaka</p>
            </div>
          </div>

          <div className="relative group">
            <img src={Gallery5} alt="Gallery Image 1" className="group-hover:scale-105 duration-500 grayscale group-hover:grayscale-0 h-60 lg:w-[100%]"/>
            <div className="bg-[#002856] absolute bottom-1/2 top-1/3 left-1/3 opacity-0 group-hover:opacity-100 right-1/3 m-auto duration-500">
              <p className="text-2xl font-bold text-white text-center pt-1">Lukove</p>
            </div>
          </div>
          <div className="relative group">
            <img src={Gallery6} alt="Gallery Image 1" className="group-hover:scale-105 duration-500 grayscale group-hover:grayscale-0 h-60 lg:w-[100%]"/>
            <div className="bg-[#002856] absolute bottom-1/2 top-1/3 left-1/3 opacity-0 group-hover:opacity-100 right-1/3 m-auto duration-500">
              <p className="text-2xl font-bold text-white text-center pt-1">Dhermi</p>
            </div>
          </div>
          <div className="relative group">
            <img src={Gallery7} alt="Gallery Image 1" className="group-hover:scale-105 duration-500 grayscale group-hover:grayscale-0 h-60 lg:w-[100%]"/>
            <div className="bg-[#002856] absolute bottom-1/2 top-1/3 left-1/3 opacity-0 group-hover:opacity-100 right-1/3 m-auto duration-500">
              <p className="text-2xl font-bold text-white text-center pt-1">Gjirokastra</p>
            </div>
          </div>
        </div>  
      </ScrollAnimation>
    </div>
  )
}

export default DentalTourism
