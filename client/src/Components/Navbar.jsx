import React, { useState,useEffect } from "react";
import { Menu, Clock, EmailIcon, Facebook, Instagram, Language, Logo, PhoneCallIcon, Whatsapp, Youtube, FacebookHover, InstagramHover, WhatsappHover, YoutubeHover, Logo2 } from "../assets/index";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Navbar = (props) => {
    const { t } = useTranslation();
    const {setLanguage} = props
    const [instagram,setInstagram] = useState(false)
    const [facebook,setFacebook] = useState(false)
    const [whatsapp,setWhatsapp] = useState(false)
    const [menu,setMenu] = useState(true)

    const languageChange = (e) => {
        i18next.changeLanguage(e.target.value)
        setLanguage(e.target.value)
    }


    return (
        <div className="flex flex-col justify-center items-center sticky top-0 overflow-y-hidden sm:z-50 md:z-50 lg:z-50">
            {/* First Navbar */}
            <div className="flex sm:flex-col lg:flex-row lg:justify-around sm:py-3 md:py-5 sm:justify-center md:justify-around  items-center lg:h-[3.5rem] bg-[#002856] w-full text-neutral-300 text-xs">
                <div className="lg:flex lg:flex-row md:grid md:grid-cols-2 child:items-center  lg:divide-x lg:divide-slate-400 child:tracking-widest">
                    <a href="https://wa.me/355699724951" target='_blank'><p className="flex flex-row justify-center gap-2 md:pr-3 lg:pr-7 md:border-r ">
                        <img src={PhoneCallIcon} alt="Phone Icon" />
                        +355 69 972 4951
                    </p></a>
                    <a href="mailto:primadentalclinic2023@gmail.com" onClick={() => window.location.href}><p className="flex flex-row justify-center gap-2 sm:py-1 md:pl-3 lg:px-7">
                        <img src={EmailIcon} alt="Email Icon" />
                        primadentalclinic2023@gmail.com
                    </p></a>
                    <p className="flex flex-row justify-center md:justify-start gap-2 lg:pl-7 md:pt-2 md:col-span-2 ">
                        <img src={Clock} alt="Clock Icon" />
                        {t("week")}: 8:00 am - 8:00 pm
                    </p>
                </div>
                <div className="flex flex-row divide-x sm:justify-center sm:pt-3">
                    <p className="flex flex-row gap-2 lg:pl-10 lg:pr-8 sm:pr-2 md:pr-3">
                        <img src={Language} alt="Language Icon" />
                        <select id="language" className="text-neutral-300 border-none bg-transparent child:text-black" onChange={(e) => languageChange(e)}>
                            <option value="it">{t("italian")}</option>
                            <option value="en">{t("english")}</option>
                            <option value="sq">{t("albanian")}</option>
                        </select>
                    </p>
                    <div className="flex flex-row lg:pl-10 sm:pl-2 md:pl-3 lg:gap-7 sm:gap-3 md:gap-3 child-hover:bg-white child:p-2 child:rounded-full child:duration-300 child-hover:-translate-y-1">
                        <a href="https://www.facebook.com/profile.php?id=100093140397769&mibextid=ZbWKwL" target="_blank" onMouseEnter={() => setFacebook(true)} onMouseLeave={() => setFacebook(false)}><img src={(!facebook) ? Facebook : FacebookHover} alt="Facebook"/></a>
                        <a href="https://instagram.com/prima_dental_clinic?igshid=NTc4MTIwNjQ2YQ==" target="_blank" onMouseEnter={() => setInstagram(true)} onMouseLeave={() => setInstagram(false)}><img src={(!instagram) ? Instagram : InstagramHover} alt="Instagram" /></a>
                        <a href="https://wa.me/355699724951" target='_blank' onMouseEnter={() => setWhatsapp(true)} onMouseLeave={() => setWhatsapp(false)}><img src={(!whatsapp) ? Whatsapp : WhatsappHover} alt="Whatsapp" /></a>
                    </div>
                </div>
            </div>
            {/* Second Navbar */}
            <div className="bg-white w-full lg:h-[88px] sm:py-3 md:py-3">
                <div className="flex lg:justify-evenly sm:justify-between md:justify-between sm:mx-5 md:mx-10 h-full items-center z-30 text-[#002856]">
                    <img src={Logo2} alt="Logo" className="lg:w-52 md:w-40 sm:w-28"/>
                    <img src={Menu} alt="Menu" className="lg:hidden" onClick={() => setMenu(!menu)}/>
                    <ul className="flex flex-row gap-10 tracking-wide font-bold sm:hidden md:hidden">
                        <Link to="/"><li>{t("home")}</li></Link>
                        <Link to="/about"><li>{t("about")}</li></Link>
                        <Link to="/services"><li>{t("services")}</li></Link>
                        <Link to="/blogs"><li>{t("blog")}</li></Link>
                        <Link to="/dental-tourism"><li>{t("dentalTourism")}</li></Link>
                        <Link to="/free-quote"><li>{t("contact")}</li></Link>
                    </ul>
                    <button type="button" className="bg-[#002856] w-[14%] h-3/5 text-white rounded-md hover:bg-[#00ACB1] duration-300 sm:hidden md:hidden"><Link to="/free-quote">{t("navbarButton")}</Link></button>
                </div>
                <div className="lg:hidden w-full">
                    <div className={(menu) ? "bg-white closeEffect z-20" : "bg-white openEffect z-20"}>
                        <ul className="child:text-[#002856] child:font-bold child:pt-7 sm:pl-5 md:pl-12  child:tracking-wider">
                            <li><Link to="/" onClick={() => setMenu(!menu)}>{t("home")}</Link></li>
                            <li><Link to="/about" onClick={() => setMenu(!menu)}>{t("about")}</Link></li>
                            <li><Link to="/services" onClick={() => setMenu(!menu)}>{t("services")}</Link></li>
                            <li><Link to="/blogs" onClick={() => setMenu(!menu)}>{t("blog")}</Link></li>
                            <li><Link to="/dental-tourism" onClick={() => setMenu(!menu)}>{t("dentalTourism")}</Link></li>
                            <li><Link to="/free-quote" onClick={() => setMenu(!menu)}>{t("contact")}</Link></li>
                        </ul>
                        <button type='submit' className='px-5 py-3 rounded-md bg-[#002856] border-none hover:bg-[#00ACB1] text-white duration-300 m-5 md:ml-12'><Link to="/free-quote">{t("navbarButton")}</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
