import LanSw from "../LanSw";
import { useTranslation } from "react-i18next";
import logo from '../../photo/logo.png'
import { Link } from "react-router-dom";
import { useState } from "react";
export default function NavBar({blod}) {
	const { t,i18n } = useTranslation("Home");
    const [opt,setopt]=useState(false)
    const opacity=()=>{
    setopt(!opt)

    }
    const isEnglish=i18n.language==="en"
	// const dir=`${isEnglish&&!opt?"serach-div-er":!isEnglish&&!opt?"serach-div-en":isEnglish&&opt?"serach-div-er-opt":"serach-div-en-opt"}`
	return (
		<div className="nav">
            <Link to="/"><img className="logo" src={logo} alt="no thing"/></Link>
            <div className="ulnav">
                <ul className="nav">
                    <li><Link to='/' style={{fontWeight:blod==="home"?"bold":""}} >{t("nav.h")}</Link></li>
                    <li><Link to='/group' style={{fontWeight:blod==="group"?"bold":""}} >{t("nav.g")}</Link></li>
                    <li><Link to='/card' style={{fontWeight:blod==="card"?"bold":""}} >{t("nav.c")}</Link></li>
                    <li><Link to={'/login'}>{t("nav.p")}</Link></li>
                </ul>
            </div>
			<div className="nav1">
                 <button  className="search" type="button" >
            <i className="bi bi-grid"></i>
            <p className="fit">{t("nav.d")}</p>
        </button>
                <LanSw />
            <button  className="search" type="button" onClick={opacity}>
            <i className="bi bi-search"></i>
            <p>{t("nav.s")}</p>
        </button>
        
            </div>
			
			<div className={`serach-div ${opt?"open":"close"}`}><input type="search" /></div>
		</div>
	);
}
