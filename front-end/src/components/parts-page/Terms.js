import { useTranslation } from "react-i18next";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import './privacy.css'
import { useNavigate } from "react-router-dom";
export default function Privacy(){
    const {t,i18n}=useTranslation("Terms")
    const isEnglish=i18n.language==="en"
      const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true); // العنصر يظهر مع animation بعد mount الصفحة
  }, []);
    const dir=`${isEnglish?"fade-right":"fade-left"}`
     const nav=useNavigate()
    const goToHome=()=>{
nav('/')
 }
    return(<div>
        <div  className="privacy">
<div className="gotohome">
       <p className={`privacy-title ${visible?"visible":""}`} data-aos={dir}> <span><i className="bi bi-journal-text"></i></span> {t("title")}</p>
       <button className={`${isEnglish?"bi bi-chevron-right":"bi bi-chevron-left"}`} onClick={goToHome}></button>
</div>

             
                <div className="privacy-eternal">
                    <p data-aos={dir} className={`privacy-title1 ${visible?"visible":""}`}>1- {t("title1")}</p>
                    <div >
                        
                        <ul>
                            <li className={` ${visible?"visible":""}`} data-aos={dir}>{t("li")}</li>
                            <li className={` ${visible?"visible":""}`}  data-aos={dir}>{t("li1")}</li>
                        </ul>
                    </div>
                     <p data-aos={dir} className={`privacy-title1 ${visible?"visible":""}`}>2- {t("title2")}</p>
                    <div >
                       
                        <ul>
                            <li data-aos={dir} className={` ${visible?"visible":""}`}>{t("li2")}</li>
                            <li data-aos={dir} className={` ${visible?"visible":""}`}>{t("li21")}</li>
                             <li data-aos={dir} className={` ${visible?"visible":""}`}>{t("li22")}</li>
                           
                        </ul>
                    </div>
                      <p data-aos={dir} className={`privacy-title1 ${visible?"visible":""}`}>3- {t("title3")}</p>
                    <div >
                        
                        <ul>
                            <li data-aos={dir} className={` ${visible?"visible":""}`}>{t("li3")}</li>
                            <li data-aos={dir} className={` ${visible?"visible":""}`}>{t("li31")}</li>
                             <li data-aos={dir} className={` ${visible?"visible":""}`}>{t("li32")}</li>
                        </ul>
                    </div>
                    <p data-aos={dir} className={`privacy-title1 ${visible?"visible":""}`}>4- {t("title4")}</p>
                    <div >
                         <ul>
                            <li className={` ${visible?"visible":""}`} data-aos={dir}>{t("li4")}</li>
                            <li className={` ${visible?"visible":""}`}  data-aos={dir}>{t("li41")}</li>
                        </ul>
                    
                    </div>
                      <p data-aos={dir} className={`privacy-title1 ${visible?"visible":""}`}>5- {t("title5")}</p>
                    <div >
                        <ul>
                            <li data-aos={dir} className={` ${visible?"visible":""}`}>{t("li5")}</li>
                            <li data-aos={dir} className={` ${visible?"visible":""}`}>{t("li51")}</li>
                             <li data-aos={dir} className={` ${visible?"visible":""}`}>{t("li52")}</li>
                        </ul>
                    
                    </div>

                    <p data-aos={dir} className={`privacy-title1 ${visible?"visible":""}`}>6- {t("title6")}</p>
                    <div >
                 
                        <ul>
                            <li data-aos={dir} className={` ${visible?"visible":""}`}>{t("li6")}</li>
                            <li data-aos={dir} className={` ${visible?"visible":""}`}>{t("li61")}</li>
                            <li data-aos={dir} className={` ${visible?"visible":""}`}>{t("li62")}</li>
                        </ul>
                    </div>
                      <p data-aos={dir} className={`privacy-title1 ${visible?"visible":""}`}>7- {t("title7")}</p>
                    <div >
                       <ul>
                            <li className={` ${visible?"visible":""}`} data-aos={dir}>{t("li7")}</li>
                            <li className={` ${visible?"visible":""}`}  data-aos={dir}>{t("li71")}</li>
                        </ul>
                    
                    </div>
                      <p data-aos={dir} className={`privacy-title1 ${visible?"visible":""}`}>8- {t("title8")}</p>
                    <div >
                        <p data-aos={dir} className={` ${visible?"visible":""}`}>{t("dis8")}</p>
                    
                    </div>

                    <p data-aos={dir} className={`privacy-title1 ${visible?"visible":""}`}>9- {t("title9")}</p>
                    <div >
                        <p data-aos={dir} className={` ${visible?"visible":""}`}>{t("dis9")}</p>
                    
                    </div>
                    <p data-aos={dir} className={`privacy-title1 ${visible?"visible":""}`}>10- {t("title10")}</p>
                    <div >
                        <p data-aos={dir} className={` ${visible?"visible":""}`}>{t("dis10")}</p>
                    
                    </div>
                    <p data-aos={dir} className={`privacy-title1 ${visible?"visible":""}`}>11- {t("title11")}</p>
                    <div >
                        <p data-aos={dir} className={` ${visible?"visible":""}`}>{t("dis11")}</p>
                    
                    </div>
                </div>
        </div>
        <Footer bold="terms"/>
    </div>)
}