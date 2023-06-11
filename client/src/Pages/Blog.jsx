import React from 'react'
import { AboutImg,BlogInfoImage, PlusIcon, MinusIcon } from '../assets';
import { BlogData } from '../data/Blog Data/data.json';
import { BlogDataAlbanian } from '../data/Blog Data/data.albanian.json';
import { BlogDataItalian } from '../data/Blog Data/data.italian.json';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import { Trans, useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const Blog = (props) => {
  const { language } = props;
  const { t } = useTranslation();
  const [blog, setBlog] = useState({})
  const [showMoreInfo1,setShowMoreInfo1] = useState(false)
  const [showMoreInfo2,setShowMoreInfo2] = useState(false)
  const [showMoreInfo3,setShowMoreInfo3] = useState(false)
  const [showMoreInfo4,setShowMoreInfo4] = useState(false)
  const [showMoreInfo5,setShowMoreInfo5] = useState(false)
  const [showMoreInfo6,setShowMoreInfo6] = useState(false)
  const {setBlogType} = props;

  const filterFunction = (e) => {
    if(language === "en"){
      if(e.target.value === "all"){
        setBlog(BlogData)
      }else{
        setBlog(BlogData.filter((data) => data.category == e.target.value))
      }
    }else if(language === "sq"){
      if(e.target.value === "all"){
        setBlog(BlogDataAlbanian)
      }else{
        setBlog(BlogDataAlbanian.filter((data) => data.category == e.target.value))
      }
    }else{
      if(e.target.value === "all"){
        setBlog(BlogDataItalian)
      }else{
        setBlog(BlogDataItalian.filter((data) => data.category == e.target.value))
      }
    }
  }

  const questionStateCheck = (e) => {
    if(e.target.id == "question 1"){
      setShowMoreInfo1(!showMoreInfo1)
      setShowMoreInfo2(false)
      setShowMoreInfo3(false)
      setShowMoreInfo4(false)
      setShowMoreInfo5(false)
      setShowMoreInfo6(false)
    }else if(e.target.id == "question 2"){
      setShowMoreInfo1(false)
      setShowMoreInfo2(!showMoreInfo2)
      setShowMoreInfo3(false)
      setShowMoreInfo4(false)
      setShowMoreInfo5(false)
      setShowMoreInfo6(false)
    }else if(e.target.id == "question 3"){
      setShowMoreInfo1(false)
      setShowMoreInfo2(false)
      setShowMoreInfo3(!showMoreInfo3)
      setShowMoreInfo4(false)
      setShowMoreInfo5(false)
      setShowMoreInfo6(false)
    }else if(e.target.id == "question 4"){
      setShowMoreInfo1(false)
      setShowMoreInfo2(false)
      setShowMoreInfo3(false)
      setShowMoreInfo4(!showMoreInfo4)
      setShowMoreInfo5(false)
      setShowMoreInfo6(false)
    }else if(e.target.id == "question 5"){
      setShowMoreInfo1(false)
      setShowMoreInfo2(false)
      setShowMoreInfo3(false)
      setShowMoreInfo4(false)
      setShowMoreInfo5(!showMoreInfo5)
      setShowMoreInfo6(false)
    }else if(e.target.id == "question 6"){
      setShowMoreInfo1(false)
      setShowMoreInfo2(false)
      setShowMoreInfo3(false)
      setShowMoreInfo4(false)
      setShowMoreInfo5(false)
      setShowMoreInfo6(!showMoreInfo6)
    }
  }

  useEffect(() => {
    if(language == "it"){
      setBlog(BlogDataItalian)
    }else if(language == "sq"){
      setBlog(BlogDataAlbanian)
    }else{
      setBlog(BlogData)
    }
  },[language])


  return (
    <div className="w-full flex-col">
      {/* First Section */}
      <div className="flex flex-row justify-between sm:px-5 md:px-10 lg:px-28 py-10 items-center">
        <div className="flex flex-col gap-3">
          <p className="font-bold text-4xl text-[#002856]">{t("blog")}</p>
          <p className="font-medium text-[#002856]">
            <Link to="/">Home</Link> - <span className="text-[#00ACB1]">{t("blog")}</span>
          </p>
        </div>
        <img
          src={AboutImg}
          alt="About Img"
          className="sm:w-24 md:w-36 lg:w-40"
        />
      </div>
      {/* Second Section */}
      <div className='w-full flex sm:flex-col md:flex-col py-20 sm:gap-5 md:gap-10 sm:px-5 md:px-10 lg:px-28 lg:gap-5'>
        {/* Filters */}
        <ScrollAnimation className='flex flex-col gap-5' animateIn='fadeInLeft'>
          <div className='flex flex-col child:text-[#002856] child:font-bold child:text-xl gap-5 bg-neutral-100 px-5 py-5 rounded-xl md:child:text-left md:child:pl-5'>
            <p>Blogs Category</p>
            <button type='button' className='bg-white lg:w-80 border py-2 hover:translate-x-1 duration-500 rounded-xl hover:border-l-[5px] hover:text-[#00ACB1] hover:border-l-[#00ACB1]' value="all" onClick={(e) => filterFunction(e)}>{t("servicesButton1")}</button>
            <button type='button' className='bg-white lg:w-80 border py-2 hover:translate-x-1 duration-500 rounded-xl hover:border-l-[5px] hover:text-[#00ACB1] hover:border-l-[#00ACB1]' value="surgery" onClick={(e) => filterFunction(e)}>{t("servicesButton2")}</button>
            <button type='button' className='bg-white lg:w-80 border py-2 hover:translate-x-1 duration-500 rounded-xl hover:border-l-[5px] hover:text-[#00ACB1] hover:border-l-[#00ACB1]' value="general-dentistry" onClick={(e) => filterFunction(e)}>{t("servicesButton3")}</button>
            <button type='button' className='bg-white lg:w-80 border py-2 hover:translate-x-1 duration-500 rounded-xl hover:border-l-[5px] hover:text-[#00ACB1] hover:border-l-[#00ACB1]' value="cosmetic-dentistry" onClick={(e) => filterFunction(e)}>{t("servicesButton4")}</button>
            <button type='button' className='bg-white lg:w-80 border py-2 hover:translate-x-1 duration-500 rounded-xl hover:border-l-[5px] hover:text-[#00ACB1] hover:border-l-[#00ACB1]' value="aesthetic-medicine" onClick={(e) => filterFunction(e)}>{t("servicesButton5")}</button>
          </div>
        </ScrollAnimation>
        {/* Filtered Content */}
        <ScrollAnimation className='grid sm:grid-cols-1 grid-cols-2 gap-10' animateIn='fadeInRight'>
          {
            Array.from(blog).map(data => (
              <div key={data.id} className=' border-r-2 border-slate-100 border-b-2 group'>
                <div className='overflow-hidden'>
                  <img src={data.coverImage} alt="Image 2" className='group-hover:scale-110 duration-300 group-hover:rotate-2'/>
                </div>
                <img src={data.icon} width={70} className='relative bottom-9 left-5 z-10 p-1 rounded-full bg-white shadow shadow-neutral-500 group-hover:bg-[#00ACB1] border-8 border-white duration-500 '/>
                <div className='px-5 pb-5  border-r-2 border-slate-100 border-b-2'>
                  <Link to={`/blogs/${data.id}`} onClick={() => setBlogType(data)}><p className='text-[#002856] text-2xl font-bold pb-5 hover:text-[#00ACB1]'>{data.title}</p></Link>
                  <p className='text-sm  text-neutral-500 truncate'>{data.subDescription}</p>
                </div>
              </div>
            ))
          }
        </ScrollAnimation>
      </div>
      {/* Third Section */}
      <ScrollAnimation className='flex sm:flex-col md:flex-col lg:flex-row justify-center lg:py-20 gap-6 sm:px-5 md:px-10 lg:px-28' animateIn='fadeInTop'>
        <img src={BlogInfoImage} height={600} alt="Blog More Info Image" className='object-center sm:h-[300px] h-[500px]'/>
        <div className='flex flex-col gap-3'>
          <p className='text-[#00ACB1] font-bold'>{t("blogPage")}</p>
          <p className='text-4xl font-bold text-[#002856]'>{t("blogPageTitle")}</p>
          <div className='duration-500 child:mb-5'>
            {/* Question 1 */}
            <div className={(showMoreInfo1) ? "border border-[#00ACB1] p-5 rounded-xl h-fit overflow-hidden " : "border border-[#00ACB1] p-5 rounded-xl sm:h-28 md:h-16 h-16 overflow-hidden"} onClick={(e) => questionStateCheck(e)}>
              <button type="button" className='pb-3 text-[#002856] text-xl font-bold text-left mb-5 flex flex-row justify-between w-full' id="question 1">{t("blogPageQuestion1Title")}<img src={(!showMoreInfo1) ? PlusIcon : MinusIcon} alt="plus Icon" className='ml-3'/></button>
              <div className='text-neutral-500'>
                <ol className='list-disc list-inside'>
                  <li>{t("blogPageQuestion1Description1")}</li>
                  <li>{t("blogPageQuestion1Description2")}</li>
                  <li>{t("blogPageQuestion1Description3")}</li>
                  <li>{t("blogPageQuestion1Description4")}</li>
                  <li>{t("blogPageQuestion1Description5")}</li>
                  <li>{t("blogPageQuestion1Description6")}</li>
                </ol>
              </div>
            </div>
            {/* Question 2 */}
            <div className={(showMoreInfo2) ? "border border-[#00ACB1] p-5 rounded-xl h-fit overflow-hidden " : "border border-[#00ACB1] p-5 rounded-xl sm:h-28 md:h-16 h-24 overflow-hidden "} onClick={(e) => questionStateCheck(e)}>
              <button type="button" className='text-[#002856] pb-3 text-xl font-bold text-left mb-5 flex flex-row justify-between w-full' id="question 2"><Trans components={{ br: <br className='md:hidden'/>}}>{t("blogPageQuestion2Title")}</Trans><img src={(!showMoreInfo2) ? PlusIcon : MinusIcon} alt="plus Icon" className='ml-3'/></button>
              <div className='text-neutral-500'>
                <ol className='list-inside list-disc'>
                  <li>{t("blogPageQuestion2Description1")}</li>
                  <li>{t("blogPageQuestion2Description2")}</li>
                  <li>{t("blogPageQuestion2Description3")}</li>
                  <li>{t("blogPageQuestion2Description4")}</li>
                  <li>{t("blogPageQuestion2Description5")}</li>
                  <li>{t("blogPageQuestion2Description6")}</li>
                </ol>
              </div>
            </div>
            {/* Question 3 */}
            <div className={(showMoreInfo3) ? "border border-[#00ACB1] p-5 rounded-xl h-fit overflow-hidden" : "border border-[#00ACB1] p-5 rounded-xl sm:h-24 h-16 overflow-hidden"} onClick={(e) => questionStateCheck(e)}>
              <button type="button" className='text-[#002856] pb-3 text-xl font-bold text-left mb-5 flex flex-row justify-between w-full' id="question 3">{t("blogPageQuestion3Title")}<img src={(!showMoreInfo3) ? PlusIcon : MinusIcon} alt="plus Icon"/></button>
              <div className='text-neutral-500'>
                <p className='leading-7'>{t("blogPageQuestion3Description1")}</p>
              </div>
            </div>
            {/* Question 4 */}
            <div className={(showMoreInfo4) ? "border border-[#00ACB1] p-5 rounded-xl h-fit overflow-hidden" : "border border-[#00ACB1] p-5 rounded-xl sm:h-24 h-16 md:h-16 overflow-hidden"} onClick={(e) => questionStateCheck(e)}>
              <button type="button" className='text-[#002856] pb-3 text-xl font-bold text-left mb-5 flex flex-row justify-between w-full' id="question 4">{t("blogPageQuestion4Title")} <img src={(!showMoreInfo4) ? PlusIcon : MinusIcon} alt="plus Icon"/></button>
              <div className='text-neutral-500'>
                <p className='leading-7'>{t("blogPageQuestion4Description1")}</p>
              </div>
            </div>
            {/* Question 5 */}
            <div className={(showMoreInfo5) ? "border border-[#00ACB1] p-5 rounded-xl h-fit overflow-hidden" : "border border-[#00ACB1] p-5 rounded-xl sm:h-24 h-16 overflow-hidden"} onClick={(e) => questionStateCheck(e)}>
              <button type="button" className='text-[#002856] pb-3 text-xl font-bold text-left mb-5 flex flex-row justify-between w-full' id="question 5">{t("blogPageQuestion5Title")}<img src={(!showMoreInfo5) ? PlusIcon : MinusIcon} alt="plus Icon"/></button>
              <div className='text-neutral-500'>
                <p className='leading-7'><Trans components={{ br: <br/> }}>{t("blogPageQuestion5Description1")}</Trans></p>
              </div>
            </div>
            {/* Question 6 */}
            <div className={(showMoreInfo6) ? "border border-[#00ACB1] p-5 rounded-xl h-fit overflow-hidden" : "border border-[#00ACB1] p-5 rounded-xl sm:h-24 h-16 overflow-hidden"} onClick={(e) => questionStateCheck(e)}>
              <button type="button" className='text-[#002856] text-xl pb-3 font-bold text-left mb-5 flex flex-row justify-between w-full' id="question 6">{t("blogPageQuestion6Title")}<img src={(!showMoreInfo6) ? PlusIcon : MinusIcon} alt="plus Icon"/></button>
              <div className='text-neutral-500'>
                <p className='leading-7'><Trans>{t("blogPageQuestion6Description1")}</Trans></p>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  )
}

export default Blog;