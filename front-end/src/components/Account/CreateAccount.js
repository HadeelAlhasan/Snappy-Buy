import "./LogIn.css";
import { Link } from "react-router-dom";
import logo from '../../photo/logo.png'
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
export default function LogIn() {
    const {t}=useTranslation("Login")
    const dir=sessionStorage.getItem("lang")
    useEffect(() => {
        document.body.style.direction = dir==="ar" ? "ltr" : "ltr";
      
        
      }, []);
	return (
       <div className="con">
         
         <div className="login-parent">
            <div className="create" >
                    <button>{t("create")}</button>
                </div>
            <form>
                <div className="login" >
               
                 <Link to="/"><img className="logo" src={logo} alt="no thing"/></Link>
                <div className="form">
                    <div style={{direction:`${ dir==="ar"?"rtl":"ltr"}`}}>
                    <label>{t("email")}</label>
                    <input type="email"/>
                    
                </div>
                <div style={{direction:`${ dir==="ar"?"rtl":"ltr"}`}}>
                    <label>{t("password")}</label>
                    <input type="password"/>
                    
                </div>
               
                </div>
                 <div className="forget" style={{direction:`${ dir==="ar"?"rtl":"ltr"}`}}>
                    <button>{t("forget")}</button>
                </div>
                <div className="login-button">
                    <button>{t("login")}</button>
                </div>
                
            </div>
            </form>
        </div>
       </div>
    )
}
