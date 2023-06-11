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
              <a href="https://wa.me/355699724951" target='_blank'><img src={Whatsapp} alt="Whatsapp" width={60} className="hover:scale-110 duration-500 cursor-pointer bg-[#25D366] rounded-full fixed bottom-5 z-50 left-6 p-2" /></a>
            </div>
        }
    </div>
  )
}

export default App
