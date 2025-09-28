import "./LogIn.css";
import { Link } from "react-router-dom";
import logo from '../../photo/logo.png'
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
export default function LogIn() {
    const {t}=useTranslation("Login")
    const dir=sessionStorage.getItem("lang")
    // useEffect(() => {
    //     document.body.style.direction = dir==="ar" ? "ltr" : "ltr";
      
        
    //   }, []);
      const nav=useNavigate();
      const goToCreate=()=>{
       nav('/create')
      }
	return (
       <div className="con">
         
         <div className="login-parent">
            
            <form>
                <div className="login" >
       
                <div className="logodiv">
                     <Link to="/"><img className="logo" src={logo} alt="no thing"/></Link>
                </div>
                <div className="form">
                    <div >
                    <label>{t("email")}</label>
                    <input type="email"/>
                    
                </div>
                <div >
                    <label>{t("password")}</label>
                    <input type="password"/>
                    
                </div>
               
                </div>
                 <div className="forget" >
                    <button>{t("forget")}</button>
                </div>
                 <div className="forget" >
                    {t("q")}
                    <button  onClick={goToCreate} className={`${dir==="ar"?"createar":"createen"}`}>{t("create")}</button>
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
