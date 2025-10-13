import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import {Link} from 'react-router-dom'
import Product from '../products/Product';
export default function ProductManager(){
   const dir = sessionStorage.getItem("lang");
      useEffect(() => {
        document.body.style.direction = dir === "en" ? "ltr" : "rtl";
      }, []);
    const products=[]
    function goback() {
  window.history.go(-1);
}
    const {t,i18n}=useTranslation("Dashboard");
      const isEnglish = i18n.language === "en";
       for (let i = 0; i < 5; i++) {
        products.push(
            <div key={i} className={`${i % 2 != 0 ? "revese" : ""}`}>
                <Product show={true}/>
                <div data-aos="fade-up" className="hr"></div>
            </div>
        );
    }
    return(<div>
  
        <div className='header'> 
           <div className='grid'>
             <i className={`bi bi-box`}></i>
                  <h3>{t(`list.title3`)}</h3>
           </div>
           <button className={`${isEnglish?"bi bi-chevron-right":"bi bi-chevron-left"}`} onClick={goback}></button></div>
           <div className='add'><Link to="/add">{t("productmanager.add")}</Link></div>
<div className="groups">{products}</div>
    </div>
    )
}