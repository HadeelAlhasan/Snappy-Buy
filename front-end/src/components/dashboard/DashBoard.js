import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
export default function DashBoard(){
      const dir = sessionStorage.getItem("lang");
      useEffect(() => {
        document.body.style.direction = dir === "en" ? "ltr" : "rtl";
      }, []);
    const num=[1000,200000,1111111111111111]
      
    const statistics=[]
    function goback() {
  window.history.go(-1);
}
    const {t,i18n}=useTranslation("Dashboard");
      const isEnglish = i18n.language === "en";
   for(let i=0;i<3;i++){
    statistics.push(<div className={`statistics${i}`} data-aos="fade-up">
      <h5>{t(`dashboard.title${i}`)}</h5> 
      <p>{`${num[i]}`}</p>
    </div>)
   }
    return(<div>
  
        <div className='header'> 
           <div className='grid'>
             <i className={`bi bi-grid`}></i>
                  <h3>{t(`list.title1`)}</h3>
           </div>
           <button className={`${isEnglish?"bi bi-chevron-right":"bi bi-chevron-left"}`} onClick={goback}></button></div>
<div className='statistics-div'>{statistics}</div>
    </div>
    )
}