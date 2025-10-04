import { useTranslation } from 'react-i18next';
import Product from '../products/Product'
import img from '../../photo/profile.jpg';
import '../Account/profile.css';
import { useEffect } from 'react';
export default function Profile(){
    const {t}=useTranslation("Profile")
      const products =[]
     const dir = sessionStorage.getItem("lang");
      useEffect(() => {
        document.body.style.direction = dir === "en" ? "ltr" : "rtl";
      }, []);
      for(let i=0;i<5;i++){
                  products.push(<div  key={i} className={`${i%2!=0?"revese":""}`}><Product/><div data-aos="fade-up" className="hr"></div></div>)
              }
    return(<div>
        <div className='info'>
            <i className='bi bi-pencil'></i>
           <div className='profile-photo'>
             <img src={img}/>
             <button className=''>{t("edit")}</button>
           </div>
           <div className='data'>
            <h2>hadeel</h2>
            <div>
                <p>{t("email")}<span>hhhadellll@gmail.com</span></p>
            <p>{t("number")}<span>0940110940</span></p>
            <p>{t("country")}<span>حمص</span></p>
            </div>
           </div>
        </div>
        <div className='fav'>
            <h2 className='fav'>{t("fav")}</h2>
            {products}
        </div>
        <div className='Payments'>
            <h2 className='Payments'>{t("Payments")}</h2>
            <table>
                <tr>
                    <th>{t("Product")}</th>
                    <th>{t("Price")}</th>
                    <th>{t("Date")}</th>
                </tr>
                <tr>
                    <td>ملابس</td>
                    <td>100$</td>
                    <td>2025/10/3</td>
                </tr>
                  <tr>
                    <td>ملابس</td>
                    <td>100$</td>
                    <td>2025/10/3</td>
                </tr>
                  <tr>
                    <td>ملابس</td>
                    <td>100$</td>
                    <td>2025/10/3</td>
                </tr>
            </table>
        </div>
    </div>)
}