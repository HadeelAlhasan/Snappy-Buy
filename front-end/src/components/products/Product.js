import { useTranslation } from 'react-i18next'
import img from '../../photo/g-cloths.jpg'
import './Product.css'
export default function Product(){
  const {t}=useTranslation("Group")
    return(
   
    
   <div className="group" data-aos="fade-up">
     <div className='heart'><i className='bi bi-heart-fill'></i></div>
 
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