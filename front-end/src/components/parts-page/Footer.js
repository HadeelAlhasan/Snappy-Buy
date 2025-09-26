import { useTranslation } from 'react-i18next'
import './Footer.css'
import { Link } from 'react-router-dom'
export default function Footer({bold}){
    const {t}=useTranslation("Footer")
    return(<div className='footer'>
       <div className='Contact-Us'>
        <p>{t("Contact-Us")}</p>
        <div className='Contact-Us-link'>
             <a href="https://www.facebook.com/اسم_حسابك" target="_blank" aria-label="فيس بوك">
        <i class="bi bi-facebook"></i>
    </a>

    <a href="mailto:بريدك@مثال.com" aria-label="إيميل">
        <i class="bi bi-envelope"></i>
    </a>

    <a href="https://t.me/اسم_حسابك" target="_blank" aria-label="تلجرام">
        <i class="bi bi-telegram"></i>
    </a>
        </div>
       </div>

       <div className='list'>
        <p><Link to={'/Privacy'} style={{fontWeight:`${bold==="Privacy"?"bold":""}`,fontSize:`${bold==="Privacy"?"20px":""}`}}>{t("Privacy")}</Link></p>
        <p className='border1'><Link to={'/Terms'} style={{fontWeight:`${bold==="terms"?"bold":""}`,fontSize:`${bold==="terms"?"20px":""}`}}>{t("terms")}</Link></p>
        <p><Link to={'/Questions'} style={{fontWeight:`${bold==="Questions"?"bold":""}`,fontSize:`${bold==="Questions"?"20px":""}`}}>{t("Questions")}</Link></p>
       </div>
       <div className='rights'>
        <p>{t("rights")} <span>Snappy Buy</span> &copy; 2025</p>
       </div>
    </div>)
}