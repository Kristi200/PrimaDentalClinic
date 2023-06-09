import { Routes,Route } from 'react-router-dom'
import './App.css'
import { Home, About, DentalTourism, Blog, BlogsTypes, Services, ContactPage, ServiceTypes } from './Pages/index';
import Navbar from './Components/Navbar';
import { useState,useLayoutEffect } from 'react';
import { Logo, Whatsapp } from './assets/index';
import Footbar from './Components/Footbar';
import { Snap,InstagramWhiteIcon,TwiterBorder,ShareIcon,CloseIcon } from './assets/Share Images/index';

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
                <img src={(!shareIcon) ? ShareIcon : CloseIcon} className='bottom-5 sm:right-3 right-8 p-4 bg-[#002856] hover:bg-[#00ACB1] z-20' onClick={() => setShareIcon(!shareIcon)}/>
                <img src={InstagramWhiteIcon} className={(shareIcon) ? "bottom-6 sm:right-24 right-32 p-3 insta z-10 hover:scale-110" : "bottom-6 sm:right-3 right-9 p-3 insta z-10"}/>
                <img src={Snap} className={(shareIcon) ? "bottom-20 sm:right-16 right-24 p-3 bg-[#FFFC00] delay-150 z-10 hover:scale-110" : "bottom-6 sm:right-3 right-9 p-3 bg-[#FFFC00] delay-150 z-10"}/>
                <img src={TwiterBorder} className={(shareIcon) ? "bottom-28 sm:right-3 right-9 p-3 bg-[#00acee] delay-300 z-10 hover:scale-110" : "bottom-6 sm:right-3 right-9 p-3 bg-[#00acee] delay-300 z-10"}/>
              </div>
              <a href="https://wa.me/355699724951" target='_blank'><img src={Whatsapp} alt="Whatsapp" width={50} className='fixed sm:left-3 left-8 bottom-6 p-2 cursor-pointer bg-[#25D366] rounded-full delay-100 z-10 hover:scale-110 duration-300'/></a>
            </div>
        }
    </div>
  )
}

export default App
