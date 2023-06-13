import React from 'react'
import { Contact, Logo, Location, EmailIcon, Arrow, Logo2, Logo3 } from '../assets'
import { Link } from 'react-router-dom'
import { Trans, useTranslation } from 'react-i18next'

const Footbar = () => {
    const { t } = useTranslation()

    return (
    <div className='w-full bg-[#002856]'>
        <div className='sm:flex sm:flex-col md:grid md:grid-cols-2 md:gap-12 lg:flex lg:flex-row justify-evenly sm:py-10 md:py-12 sm:px-3 md:px-16 lg:pt-20'>
            <div className='child:text-white items-center'>
                <img src={Logo3} alt='Logo' className='mb-5 w-72'/>
                <p><Trans components={{ br: <br className='sm:hidden md:hidden'/>}}>{t("footbarDescription1")}</Trans></p>
            </div>
            <div className='child:text-white sm:mt-5'>
                <p className='text-2xl font-medium'>{t("footBarTitle1")}</p>
                <div className='border-b w-16 border-[#00ACB1] border-[1px] mt-6'></div>
                <p className='flex flex-row gap-2 mt-8'>
                    <img src={Location} alt="Location Icon"/>
                    "Lushnjë"
                </p>
                <a href="tel:+355699724951"><p className='flex flex-row gap-2 my-4'>
                    <img src={Contact} alt='Contact Support'/>
                    +355 69 972 4951
                </p></a>
                <a href="mailto:primadentalclinic2023@gmail.com" onClick={() => window.location.href}><p className='flex flex-row gap-2'>
                    <img src={EmailIcon} alt='Email Icon'/>
                    primadentalclinic2023@gmail.com
                </p></a>
            </div>
            <div className='child:text-white sm:mt-5 '>
                <p className='text-2xl font-medium'>{t("footBarTitle2")}</p>
                <div className='border-b w-16 border-[#00ACB1] border-[1px] mt-6'></div>
                <ol className='my-8 child-hover:text-[#00ACB1] child:mb-3 list-disc list-inside'>
                    <li><Link to="/">{t("home")}</Link></li>
                    <li><Link to="/about">{t("about")}</Link></li>
                    <li><Link to="/services">{t("services")}</Link></li>
                    <li><Link to="/blogs">{t("blog")}</Link></li>
                    <li><Link to="/dental-tourism">{t("dentalTourism")}</Link></li>
                    <li><Link to="/free-quote">{t("contact")}</Link></li>
                </ol>
            </div>
            <div className='child:text-white sm:mt-5 '>
                <p className='text-2xl font-medium'>{t("footBarTitle3")}</p>
                <div className='border-b w-16 border-[#00ACB1] border-[1px] mt-6'></div>
                <ol className='child:mt-3 mt-6 list-disc list-inside child-hover:text-[#00ACB1]'>
                    <li><Link to="/privacy-policy">{t("footBarPrivacy")}</Link></li>
                    <li><Link to="/terms-and-conditions">{t("footBarTerms")}</Link></li>
                </ol>
            </div>
        </div>
    </div>
  )
}

export default Footbar