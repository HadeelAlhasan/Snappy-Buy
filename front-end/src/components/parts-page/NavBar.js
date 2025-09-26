import LanSw from "../LanSw";
import { useTranslation } from "react-i18next";
import logo from '../../photo/logo.png'
import { Link } from "react-router-dom";
export default function NavBar({blod}) {
	const { t } = useTranslation("Home");
	return (
		<div className="nav">
            <Link to="/"><img className="logo" src={logo} alt="no thing"/></Link>
            <div className="ulnav">
                <ul className="nav">
                    <li><Link to='/' style={{fontWeight:blod=="home"?"bold":""}} >{t("nav.h")}</Link></li>
                    <li>{t("nav.g")}</li>
                    <li>{t("nav.c")}</li>
                    <li>{t("nav.p")}</li>
                </ul>
            </div>
			<div className="nav1">
                <LanSw />
            <button className="search" type="submit">
            <i class="bi bi-search"></i>
            <p>{t("nav.s")}</p>
        </button>
            </div>
			
		</div>
	);
}
