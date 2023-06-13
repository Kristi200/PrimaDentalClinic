import {useState} from 'react';
import Maps from '../Components/Maps';
import { SubCategorys } from '../data/Form Data/data.json';
import { SubCategorysItalian } from '../data/Form Data/data.italian.json';
import ScrollAnimation from 'react-animate-on-scroll';
import { useTranslation } from 'react-i18next';

const Contact = (props) => {
  const {language} = props
  const { t } = useTranslation()
  const [categoryData, setCategoryData] = useState([])
  const [category, setCategory] = useState(false)


  const categoryFilter = (e) => { 
    console.log(language)
    if(language !== "it"){
      for(var i = 0;i < SubCategorys.length;i++){
        if(SubCategorys[i].category == e.target.value){
          setCategoryData(SubCategorys[i].subCategorys)
        }
      }
    }else{
      for(var i = 0;i < SubCategorysItalian.length;i++){
        if(SubCategorysItalian[i].category == e.target.value){
          setCategoryData(SubCategorysItalian[i].subCategorys)
        }
      }
    }
  }

  return (
    <div className='flex sm:flex-col md:flex-col lg:flex-row justify-center gap-10 w-full mb-24 sm:px-3 md:px-16 '>
      <form className='sm:w-full lg:w-[38%]  text-white' action="https://formspree.io/f/xoqzgqag" method="POST">
        <div className='flex flex-col child:mb-5 child:px-8 pt-8 BackgroundImage'>
          <p className="text-2xl font-bold">{t("formTitle")}</p>
          <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-5  '>
            {/* Full Name Field */}
            <input type='text' placeholder={t("formName")} name='Emri Mbiemri' onChange={(e) => nameValidation(e)} className='bg-transparent border-slate-500 border rounded-md pl-3 py-3' required/>
            {/* Email Field */}
            <input type='email' placeholder={t("formEmail")} name="Adresa Emailit" onChange={(e) => emailValidation(e)} className='bg-transparent border-slate-500 border rounded-md pl-3 py-3' required/>
            {/* Date Field */}
            <input type='text' placeholder="Date" name="Data e Takimit" onFocus={(e) => (e.target.type = 'date')} onBlur={(e) => (e.target.type = 'text')} className='bg-transparent border-slate-500 border rounded-md pl-3 py-3' required/>
            {/* Time Field */}
            <input type='text' placeholder={t("formTime")} name="Orari Takimit" onFocus={(e) => (e.target.type = 'time')} onBlur={(e) => (e.target.type = 'text')} className='bg-transparent border-slate-500 border rounded-md pl-3 py-3' required/>
            {/* Category Field */}
            <select onChange={(e) => {
              categoryFilter(e)
              setCategory(e)
              }} name="Kategoria" className='bg-transparent border-slate-500 border rounded-md pl-3 py-3'required>
            {
              (language == "it")
              ? Array.from(SubCategorysItalian).map(data => (
                  <option className="text-neutral-500" key={data.category} value={data.category}>{data.category}</option>
                ))
              : Array.from(SubCategorys).map(data => (
                  <option className="text-neutral-500" key={data.category} value={data.category}>{data.category}</option>
                ))
            }
            </select>
            {/* Service Field */}
            <select name="Sherbimi" className='bg-transparent border-slate-500 border rounded-md pl-3 py-3' required>
              {
                Array.from(categoryData).map(data => (
                  <option className='text-neutral-500' key={data} value={data}>{data}</option>
                ))
              }
            </select>
          </div>
          <div className='flex flex-col child:mb-5'>
            <input type='Numri Telefonit' name="Phone Number" placeholder={t("formNumber")} onChange={(e) => numberValidation(e)} className='py-3 pl-3 bg-transparent rounded-md border' width={'20px'} required/>
            <textarea placeholder={t("formMessage")} name="Mesazhi " rows={4} className='pl-3 py-3 bg-transparent border mb-5 rounded-md border-slate-500'/>
          <button type='submit' className='h-16 bg-[#00ACB1] border-none hover:bg-white hover:text-black duration-300'>Book Appointment</button>
          </div>
        </div>
      </form>
      <div>
        <p className='text-[#00ACB1] font-medium'>{t("locationTitle")}</p>
        <Maps/>
      </div>
    </div>
  )
}

export default Contact