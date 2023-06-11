import { Routes,Route } from 'react-router-dom'
import './App.css'
import { Home, About, DentalTourism, Blog, BlogsTypes, Services, ContactPage, ServiceTypes } from './Pages/index';
import Navbar from './Components/Navbar';
import { useState,useLayoutEffect } from 'react';
import { Logo, Whatsapp } from './assets/index';
import Footbar from './Components/Footbar';
import { InstagramWhiteIcon,TwiterBorder,ShareIcon,CloseIcon,FacebookShareIcon } from './assets/Share Images/index';

function App() {
  const [ loading, setLoading ] = useState(false);
  const [ shareIcon, setShareIcon ] = useState(false)
  const [ typeOfService, setTypeOfService ] = useState("")
  const [ blogType, setBlogType ] = useState("")
  const [ language,setLanguage] = useState("it")

  useLayoutEffect(() => {
    setLoading(true)
    setTimeout(() => (
      setLoading(false)
    ),2000)
  },[])

  return (
    <div  className="font-roboto">
      {
        loading 
          ? 
            <div>
              <img src={Logo} alt='Logo Loading' className='absolute left-0 right-0 bottom-0 top-0 m-auto animate-bounce w-40'/>
            </div>
        
          : 
            <div>
              <Navbar setLanguage={setLanguage}/>
              <Routes>
                <Route path="/" element={<Home language={language}/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/dental-tourism" element={<DentalTourism/>}/>
                <Route path="/blogs" element={<Blog setBlogType={setBlogType} language={language}/>}/>
                <Route path="/blogs/:blogType" element={<BlogsTypes blogType={blogType}/>}/>
                <Route path="/services" element={<Services  setTypeOfService={setTypeOfService} language={language}/>}/>
                <Route path="/services/:serviceType" element={<ServiceTypes typeOfService={typeOfService}/>}/>
                <Route path="/free-quote" element={<ContactPage/>}/>
              </Routes>
              <Footbar/>
              <div className='child:fixed duration-500 child:cursor-pointer child:rounded-full child:duration-700'>
                <img src={(!shareIcon) ? ShareIcon : CloseIcon} width={50} className='bottom-5 sm:left-3 left-8 p-3 bg-[#002856] hover:bg-[#00ACB1] z-50' onClick={() => setShareIcon(!shareIcon)}/>
                <a href="https://instagram.com/prima_dental_clinic?igshid=NTc4MTIwNjQ2YQ==" target="_blank"><img src={InstagramWhiteIcon} width={50} className={(shareIcon) ? "cursor-pointer insta fixed sm:bottom-20 bottom-5 sm:left-3 left-28 rounded-full p-3 hover:scale-110 duration-700 z-20" : "insta fixed bottom-5 sm:left-3 left-8 rounded-full p-3 duration-700 z-20"}/></a>
                <a href="https://www.facebook.com/profile.php?id=100093140397769&mibextid=ZbWKwL" target="_blank"><img src={FacebookShareIcon} width={50} className={(shareIcon) ? "cursor-pointer bg-[#365194] fixed sm:bottom-36 bottom-20 sm:left-3 left-20 rounded-full p-3 hover:scale-110 duration-700 delay-150 z-20" : "bg-[#365194] fixed bottom-5 sm:left-3 left-8 rounded-full p-3 duration-700 delay-150 z-20"}/></a>
                <a href="https://wa.me/355699724951" target='_blank'><img src={Whatsapp} alt="Whatsapp" width={50} className={(shareIcon) ? 'cursor-pointer bg-[#25D366] rounded-full fixed sm:bottom-52 bottom-28 sm:left-3 left-8 p-3 hover:scale-110 duration-700 delay-300 z-20' : "bg-[#25D366] fixed bottom-5 sm:left-3 left-8 rounded-full p-3 duration-700 delay-300 z-20"}/></a>
              </div>
            </div>
        }
    </div>
  )
}

export default App
