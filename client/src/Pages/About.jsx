import React from 'react'
import { About1, AboutImg, AvatarImg,GalleryAboutImage1 } from '../assets';
import { AboutGallery } from '../Components';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation()

  return (
    <div className='w-full flex-col'>
      {/* First Section */}
      <div className='flex flex-row justify-between sm:px-5 md:px-10 lg:px-28 py-10 items-center'>
        <div className='flex flex-col gap-3'>
          <p className='font-bold text-4xl text-[#002856]'>{t("dentalTourism")}</p>
          <p className='font-medium text-[#002856]'><Link to="/">Home</Link> - <span className='text-[#00ACB1]'>{t("dentalTourism")}</span></p>
        </div>
        <img src={AboutImg} alt="About Img" className='sm:w-24 md:w-36 lg:w-40'/>
      </div>
      {/* Get To Know Us */}
      <div className='flex sm:flex-col md:flex-col lg:flex-row sm:items-center md:items-center lg:justify-center sm:gap-10 md:gap-14 lg:gap-28 py-10 sm:px-5 md:px-10 lg:px-28'>
        <img src={ About1 } alt="About Image Section 1" className='sm:w-3/4 lg:w-2/4'/>
        <div className='items-center'>
          <p className='text-[#00ACB1] font-bold'>{t("getToKnowUs")}</p>
          <p className='text-[#002856] sm:text-3xl text-4xl font-bold py-5'>{t("aboutUsTitle")}</p>
          <p className='text-lg text-neutral-500'><Trans components={{ br: <br className="lg:hidden md:hidden sm:hidden"/>}}>{t("aboutUsDescription")}</Trans></p>
        </div>
      </div>
      {/* More Info */}
      <div className='sm:px-5 md:px-10 lg:px-28 py-20'>
        <p className='text-center sm:text-2xl text-4xl font-bold text-[#002856] pb-10 lg:pb-20'>{t("moreInfoTitle")}</p>
        <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-20'>
          <ScrollAnimation animateIn='fadeInLeft'>
            <p className='text-[#00ACB1] font-bold mb-5'>{t("moreInfoGroup1Title")}</p>
            <p className='text-neutral-500'>{t("moreInfoGroup1Description")}</p>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeInRight'>
            <p className='text-[#00ACB1] font-bold mb-5'>{t("moreInfoGroup2Title")}</p>
            <p className='text-neutral-500'>{t("moreInfoGroup2Description")}</p>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeInLeft'>
            <p className='text-[#00ACB1] font-bold mb-5'>{t("moreInfoGroup3Title")}</p>
            <p className='text-neutral-500'>{t("moreInfoGroup3Description")}</p>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeInRight'>
            <p className='text-[#00ACB1] font-bold mb-5'>{t("moreInfoGroup4Title")}</p>
            <p className='text-neutral-500'>{t("moreInfoGroup4Description")}</p>
          </ScrollAnimation>
        </div>
      </div>
      {/* Gallery Section */}
      <AboutGallery/>
    </div>
  )
}

export default About