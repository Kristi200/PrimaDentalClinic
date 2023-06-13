import React, { useEffect } from 'react'
import { AboutImg } from '../assets';
import { Trans, useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const PrivacyPolicyPage = () => {
    const { t } = useTranslation();

    return (
        <div className="w-full flex-col">
            {/* First Section */}
            <div className="flex flex-row justify-between sm:px-5 md:px-10 lg:px-28 py-10 items-center">
                <div className="flex flex-col gap-3">
                    <p className="font-bold text-4xl text-[#002856]">{t("privacyPolicy")}</p>
                    <p className="font-medium text-[#002856]">
                        <Link to="/">Home</Link> - <span className="text-[#00ACB1]">{t("privacyPolicy")}</span>
                    </p>
                </div>
                <img
                    src={AboutImg}
                    alt="About Img"
                    className="sm:w-24 md:w-36 lg:w-40"
                />
            </div>
            {/* Second Section */}
            <div className='flex sm:flex-col md:flex-col gap-5 lg:flex-col py-10 sm:px-5 md:px-10 lg:px-28'>
                <p className='lg:text-3xl text-[#002856] font-bold'>{t("privacyTitle1")}</p>
                <p className='lg:text-3xl text-[#002856] font-bold'>{t("privacyTitle2")}</p>
                <p className='text-neutral-500'><Trans components={{ br: <br/>}}>{t("privacyTitle3")}</Trans></p>
                <p className='text-neutral-500 leading-8'><Trans components={{ br: <br/>}}>{t("description1")}</Trans></p>
                <p className='lg:text-3xl text-[#002856] font-bold'>{t("descriptionTitle2")}</p>
                <p className='text-neutral-500 leading-8'><Trans components={{ br: <br/>}}>{t("description2")}</Trans></p>
                <p className='lg:text-3xl text-[#002856] font-bold'>{t("descriptionTitle3")}</p>
                <p className='text-neutral-500 leading-8'><Trans components={{ br: <br/>}}>{t("description3")}</Trans></p>
                <p className='lg:text-3xl text-[#002856] font-bold'>{t("descriptionTitle4")}</p>
                <p className='text-neutral-500 leading-8'><Trans components={{ br: <br/>}}>{t("description4")}</Trans></p>
                <p className='lg:text-3xl text-[#002856] font-bold'>{t("descriptionTitle5")}</p>
                <p className='text-neutral-500 leading-8'><Trans components={{ br: <br/>}}>{t("description5")}</Trans></p>
                <p className='lg:text-3xl text-[#002856] font-bold'>{t("descriptionTitle6")}</p>
                <p className='text-neutral-500 leading-8'><Trans components={{ br: <br/>}}>{t("description6")}</Trans></p>
                <p className='lg:text-3xl text-[#002856] font-bold'>{t("descriptionTitle7")}</p>
                <p className='text-neutral-500 leading-8'><Trans components={{ br: <br/>}}>{t("description7")}</Trans></p>
                <p className='lg:text-3xl text-[#002856] font-bold'>{t("descriptionTitle8")}</p>
                <p className='text-neutral-500 leading-8'><Trans components={{ br: <br/>}}>{t("description8")}</Trans></p>
                <p className='lg:text-3xl text-[#002856] font-bold'>{t("descriptionTitle9")}</p>
                <p className='text-neutral-500 leading-8'><Trans components={{ br: <br/>}}>{t("description9")}</Trans></p>
                <p className='lg:text-3xl text-[#002856] font-bold'>{t("descriptionTitle10")}</p>
                <p className='text-neutral-500 leading-8'><Trans components={{ br: <br/>}}>{t("description10")}</Trans></p>
                <p className='lg:text-3xl text-[#002856] font-bold'>{t("descriptionTitle11")}</p>
                <p className='text-neutral-500 leading-8'><Trans components={{ br: <br/>}}>{t("description11")}</Trans></p>
                <p className='lg:text-3xl text-[#002856] font-bold'>{t("contactTitle")}</p>
                <p className='text-neutral-500 leading-8'><Trans components={{ email: <a href="mailto:primadentalclinic2023@gmail.com" className='text-red-500 hover:underline' onClick={() => window.location.href}>email</a>, phone:  <a className='text-red-500 hover:underline' href="tel:+355699724951">tel</a>}}>{t("contactDescription")}</Trans></p>
            </div>
        </div>
    )
}

export default PrivacyPolicyPage