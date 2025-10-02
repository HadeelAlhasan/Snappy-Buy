import { useTranslation } from 'react-i18next'
import img from '../../photo/g-cloths.jpg'
import './Product.css'
export default function Product(){
  const {t}=useTranslation("Group")
    return(<div className="product" data-aos="fade-up">
        <div className='heart'><i className='bi bi-heart-fill'></i></div>
  <img src={img} alt='no thing'/>

  <p className='title'>ملاااااابسملاااااابسملاااااابس</p>
  <hr/>
  <div className='price'><p className='old'>119322222296{t("product.l")}</p><p>6663322222{t("product.l")}</p></div>
  <div className='star-info'><div  className='star'><i className='bi bi-star-fill'></i><p>22222299222</p></div> <i className='bi bi-info-circle'></i></div>
 
    </div>)
}