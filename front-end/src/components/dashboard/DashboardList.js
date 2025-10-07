import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import './dashboard.css';
import NavBar from '../parts-page/NavBar'
export default function DashboardList(){
     const dir = sessionStorage.getItem("lang");
      useEffect(() => {
        document.body.style.direction = dir === "en" ? "ltr" : "rtl";
      }, []);
    const {t}=useTranslation("Dashboard")
    const list=[];
     const icon=["grid","boxes","box","person"]
    for(let i=1;i<=4;i++){
        list.push(<div className="list-box" key={i}>
           <button className="list-icon"><i className={`bi bi-${icon[i-1]}`}></i></button>
           <div className="box"><h5>{t(`list.title${i}`)}</h5>
           <p>{t(`list.des${i}`)}</p></div>
        </div>)

    }
    return(<div>
      <NavBar/>
   {list}
    </div>)
}