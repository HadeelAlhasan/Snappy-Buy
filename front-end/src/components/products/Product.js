import { useTranslation } from 'react-i18next'
import img from '../../photo/g-cloths.jpg'
import './Product.css';

import { Link } from 'react-router-dom'
import { useState ,useEffect,useRef} from 'react'
export default function Product({show}){
  const {t}=useTranslation("Group")
  const [del,setDel]=useState(false)
  const delRef=useRef(null)
  const deleteproduct=(e)=>{
    setDel(true)
  }
   const cancel=(e)=>{
    setDel(false)
  }
 useEffect(() => {
    const handleClickOutside = (event) => {
      if (delRef.current && !delRef.current.contains(event.target)) {
        setDel(false); // يخفي العنصر
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    
  }, []);
    return(
   
    
   <div className="group" data-aos="fade-up">
    <div className={`${del?'overlay':'notdel'}`}></div>
    <div ref={delRef} className={`${del?'del':'notdel'}`}>
      <p>{t("product.del")}</p>
    <div>
        <button>{t("product.confirm")}</button>
      <button onClick={(e)=>{cancel(e)}} >{t("product.cancel")}</button>
    </div>
    </div>
     <div className='heart'><i className='bi bi-heart-fill'></i></div>
 <div className={`${show?'edit':'notshow'}`}>
      <Link to={'/edit'}>{t("product.edit")}</Link>
      <button ref={delRef} onClick={(e)=>{deleteproduct(e)}}>{t("product.delete")}</button>
    </div>
   <div className="center">
    
                  <img src={img} alt="no thing"/>
                  <button type='button' >{t("product.add")} </button>
              </div>
             <div className='col'>
                <h2 className='title-product'>clothes</h2>
              <div className="width-product">  
                 <p>{t("product.name")} <span>ملابس</span></p>
                 <p>{t("product.price")}<span className='old'>11111111111111111$</span><span >4444422222222222222222224444$</span></p>
                 <p>{t("product.des")}<span>جميع المقاسات اقمشة و الوان مختلفالمقاسات اقمشة و الوان مختلفالمقاسات اقمشة و الوان مختلفالمقاسات اقمشة و الوان مختلفالمقاسات اقمشة و الوان مختلفالمقاسات اقمشة و الوان مختلفالمقاسات اقمشة و الوان مختلفالمقاسات اقمشة و الوان مختلفالمقاسات اقن مختلفة</span></p>
              </div>
                 <div  className='star'><p>222299992299222</p><i className='bi bi-star-fill'></i></div>
             </div>
   
    </div>)
}