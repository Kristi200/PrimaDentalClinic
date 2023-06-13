import React, { useEffect } from 'react'
import { AboutImg } from '../assets';
import { Trans, useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    const { t } = useTranslation();

    return (
        <div className="w-full flex-col">
            {/* First Section */}
            <div className="flex flex-row justify-between sm:px-5 md:px-10 lg:px-28 py-10 items-center">
                <div className="flex flex-col gap-3">
                    <p className="font-bold text-4xl text-[#002856]">{t("termsConditions")}</p>
                    <p className="font-medium text-[#002856]">
                        <Link to="/">Home</Link> - <span className="text-[#00ACB1]">{t("termsConditions")}</span>
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
                <p className='lg:text-3xl text-[#002856] font-bold'>{t("termsTitle")}</p>
                <p className='text-neutral-500'>{t("termsTitleDescription")}</p>
                <p className='text-neutral-500'><Trans components={{ br: <br/>}}>{t("termsTitleDescription2")}</Trans></p>
                <p className='text-neutral-500 leading-8'><Trans components={{ br: <br/>}}>{t("termsDescription1")}</Trans></p>
                <p className='lg:text-3xl text-[#002856] font-bold'>{t("termsTitle2")}</p>
                <p className='text-neutral-500 leading-8'><Trans components={{ br: <br/>}}>{t("termsDescription2")}</Trans></p>
                <p className='lg:text-3xl text-[#002856] font-bold'>{t("termsTitle3")}</p>
                <p className='text-neutral-500 leading-8'><Trans components={{ br: <br/>}}>{t("termsDescription3")}</Trans></p>
                <ol className='text-neutral-500 list-decimal list-inside child:mb-3 pl-3'>
                    <li>{t("termsDescription3List1")}</li>
                    <li>{t("termsDescription3List2")}</li>
                </ol>
                <p className='text-neutral-500'><Trans components={{ br: <br/>}}>{t("termsDescription3End")}</Trans></p>
                <p className='lg:text-3xl text-[#002856] font-bold'>{t("termsTitle4")}</p>
                <p className='text-neutral-500 leading-8'><Trans components={{ br: <br/>}}>{t("termsDescription4")}</Trans></p>
                <ol className='text-neutral-500 list-decimal list-inside child:mb-3 pl-3'>
                    <li>{t("termsDescription4List1")}</li>
                    <li>{t("termsDescription4List2")}</li>
                    <li>{t("termsDescription4List3")}</li>
                    <li>{t("termsDescription4List4")}</li>
                </ol>
                <p className='text-neutral-500 leading-8'><Trans components={{ br: <br/>}}>{t("termsDescription4Part2Text1")}</Trans></p>
                <ol className='text-neutral-500 list-decimal list-inside child:mb-3 pl-3'>
                    <li>{t("termsDescription4Part2List1")}</li>
                    <li>{t("termsDescription4Part2List2")}</li>
                    <li>{t("termsDescription4Part2List3")}</li>
                    <li>{t("termsDescription4Part2List4")}</li>
                    <li>{t("termsDescription4Part2List5")}</li>
                    <li>{t("termsDescription4Part2List6")}</li>
                </ol>
                <p className='text-neutral-500 leading-8'><Trans components={{ br: <br/>,email: <a href="mailto:primadentalclinic2023@gmail.com" className='text-red-500 hover:underline' onClick={() => window.location.href}>primadentalclinic2023@gmail.com</a>}}>{t("termsDescription4Part2Text2")}</Trans></p>
                <ol className='text-neutral-500 list-decimal list-inside child:mb-3 pl-3'>
                    <li>{t("termsDescription4Part2List7")}</li>
                    <li>{t("termsDescription4Part2List8")}</li>
                    <li>{t("termsDescription4Part2List9")}</li>
                </ol>
                <p className='text-neutral-500 leading-8'><Trans components={{ br: <br/>}}>{t("termsDescription4Part2End")}</Trans></p>
                <p className='lg:text-3xl text-[#002856] font-bold'>{t("termsTitle5")}</p>
                <p className='text-neutral-500 leading-8'><Trans components={{ br: <br/>}}>{t("termsDescription5")}</Trans></p>
                <p className='lg:text-3xl text-[#002856] font-bold'>{t("termsTitle6")}</p>
                <p className='text-neutral-500 leading-8'><Trans components={{ br: <br/>}}>{t("termsDescription6")}</Trans></p>
                <p className='lg:text-3xl text-[#002856] font-bold'>{t("termsTitle7")}</p>
                <p className='text-neutral-500 leading-8'><Trans components={{ br: <br/>}}>{t("termsDescription7")}</Trans></p>
                <p className='lg:text-3xl text-[#002856] font-bold'>{t("termsTitle8")}</p>
                <p className='text-neutral-500 leading-8'><Trans components={{ br: <br/>}}>{t("termsDescription8")}</Trans></p>
                <p className='lg:text-3xl text-[#002856] font-bold'>{t("termsTitle9")}</p>
                <p className='text-neutral-500 leading-8'><Trans components={{ br: <br/>}}>{t("termsDescription9")}</Trans></p>
                <ol className='text-neutral-500 list-decimal list-inside child:mb-3 pl-3'>
                    <li>{t("termsDescription9List1")}</li>
                    <li>{t("termsDescription9List2")}</li>
                    <li>{t("termsDescription9List3")}</li>
                </ol>
                <p className='text-neutral-500 leading-8'><Trans components={{ br: <br/>}}>{t("termsDescription9End")}</Trans></p>
            </div>
        </div>
    )
}

export default TermsAndConditions