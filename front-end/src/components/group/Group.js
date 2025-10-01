import cloth from '../../photo/g-cloths.jpg';
import './group.css'
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
export default function Group(){
    const {t}=useTranslation("Group")
    const nav=useNavigate()
    const showProduct=()=>{
nav('/products')
    }
    return(
        <div className="group" data-aos="fade-up">

            <div className="center">
                <img src={cloth} alt="no thing"/>
                <button type='button' onClick={()=>{showProduct()}}>{t("group.show")} </button>
            </div>
            <div className="width">
                <h2>clothes</h2>
                <p>جميع المقاسات و الالوان قماشات مختلفة يتناسب مع كل الاعمار و يتناسب مع احتياجاكن المقاسات و الالوان قماشات مختلفة يتناسب مع كل الاعمار و يتناسب مع احتياجاكنالمقاسات و الالوان قماشات مختلفة يتناسب مع كل الاعمار و يتناسب مع احتياجاكنالمقاساتن</p>
            </div>

        </div>
    )
}