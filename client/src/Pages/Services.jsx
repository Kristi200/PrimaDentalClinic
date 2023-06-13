import {useEffect, useState} from 'react'
import { AboutImg } from '../assets';
import { ServicesData } from '../data/Services Data/data';
import { ServicesDataItalian } from '../data/Services Data/data.italian.json';
import { ServicesDataAlbanian } from '../data/Services Data/data.albanian.json';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Services = (props) => {
  const [categoryData, setCategoryData] = useState({});
  const { setTypeOfService } = props;
  const { t } = useTranslation();
  const {language} = props;

  useEffect(() => {
    if(language == "it"){
      setCategoryData(ServicesDataItalian)
    }else if(language == "sq"){
      setCategoryData(ServicesDataAlbanian)
    }else{
      setCategoryData(ServicesData)
    }
  },[language])

  const searchFunction = (e) => {
    if(language == "en"){
      if(e.target.value == "all"){
        setCategoryData(ServicesData)
      }else{
        setCategoryData(ServicesData.filter((data) => data.category == e.target.value))
      }
    }else if(language == "sq"){
      if(e.target.value == "all"){
        setCategoryData(ServicesDataAlbanian)
      }else{
        setCategoryData(ServicesDataAlbanian.filter((data) => data.category == e.target.value))
      }
    }else{
      if(e.target.value == "all"){
        setCategoryData(ServicesDataItalian)
      }else{
        setCategoryData(ServicesDataItalian.filter((data) => data.category == e.target.value))
      }
    }
  }


  return (
    <div className="w-full flex-col">
      {/* First Section */}
      <div className="flex flex-row justify-between sm:px-5 md:px-10 lg:px-28 py-10 items-center">
        <div className="flex flex-col gap-3">
          <p className="font-bold text-4xl text-[#002856]">{t("services")}</p>
          <p className="font-medium text-[#002856]">
            <Link to="/">Home</Link> - <span className="text-[#00ACB1]">{t("services")}</span>
          </p>
        </div>
        <img
          src={AboutImg}
          alt="About Img"
          className="sm:w-24 md:w-36 lg:w-40"
        />
      </div>
      {/* Second Section */}
      <div className='flex flex-col gap-5 items-center sm:px-5 md:px-10 lg:px-28 sm:py-10 lg:py-24'>
        <div className='flex sm:flex-col flex-row child:rounded-md child:bg-[#00ACB1] child-hover:bg-[#002856] child:border-none text-white child:duration-300 child:mb-5 md:gap-3 lg:gap-5'>
          <button type='submit' className='sm:px-24 sm:py-2 md:p-3 md:px-4 lg:p-4 lg:px-6' value="all" onClick={(e) => searchFunction(e)}>{t("servicesButton1")}</button>
          <button type='submit' className='sm:px-24 sm:py-2 md:px-8 lg:px-9' value="surgery" onClick={(e) => searchFunction(e)}>{t("servicesButton2")}</button>
          <button type='submit' className='sm:px-24 sm:py-2 md:px-5 lg:px-4' value="general-dentistry" onClick={(e) => searchFunction(e)}>{t("servicesButton3")}</button>
          <button type='submit' className='sm:px-24 sm:py-2 md:px-4 lg:px-5' value="cosmetic-dentistry" onClick={(e) => searchFunction(e)}>{t("servicesButton4")}</button>
          <button type='submit' className='sm:px-24 sm:py-2 md:px-4 lg:px-7' value="aesthetic-medicine" onClick={(e) => searchFunction(e)}>{t("servicesButton5")}</button>
        </div>
        <div className='grid sm:grid-cols-1 grid-cols-2 gap-5'>
          {
            Array.from(categoryData).map((data) => {
              return (
                <div key={data.id} className='w-full h-full border-r-2 border-slate-100 border-b-2 group fadeInLeft'>
                  <div className='overflow-hidden'>
                    <img src={data.coverImage} alt="Image 2" className='w-full h-52  object-fill  group-hover:scale-110 duration-300 group-hover:rotate-2'/>
                  </div>
                  <img src={data.icon} width={70} className={`relative bottom-9 left-5 z-10  p-${data.iconPadding} rounded-full bg-white shadow shadow-neutral-500 group-hover:bg-[#00ACB1] border-8 border-white duration-500`}/>
                  <div className='p-5  border-r-2 border-slate-100 border-b-2 -mt-10 '>
                    <Link to={`/services/${data.id}`} onClick={() => setTypeOfService(data)}><p className='text-[#002856] text-2xl font-bold pb-5 hover:text-[#00ACB1]'>{data.title}</p></Link>
                    <p className='text-sm  text-neutral-500 truncate'>{data.subDescription}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Services