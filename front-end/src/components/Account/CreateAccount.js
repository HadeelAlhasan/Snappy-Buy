import "./LogIn.css";
import { Link } from "react-router-dom";
import logo from "../../photo/logo.png";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
export default function CreateAccount() {
	const { t } = useTranslation("Account");
	const dir = sessionStorage.getItem("lang");
	useEffect(() => {
		document.body.style.direction = dir === "en" ? "ltr" : "rtl";
	}, []);
	return (
		<div className="con">
			<div className="login-parent">
				<form>
					<div className="login">
						<div className="logodiv">
							<Link to="/">
								<img className="logo" src={logo} alt="no thing" />
							</Link>
						</div>
						<div className="form" style={{ lineHeight: "18px" }}>
							<div>
								<label>{t("email")}</label>
								<input type="email" />
							</div>
							<div>
								<label>{t("name")}</label>
								<input type="text" />
							</div>
							<div>
								<label>{t("password")}</label>
								<input type="password" />
							</div>
							<div>
								<label>{t("confirmpassword")}</label>
								<input type="password" />
							</div>
							<div>
								<label>{t("number")}</label>
								<input type="number" />
							</div>
							<div>
								<label>{t("country")}</label>
								<input type="text" />
							</div>
						</div>
						<div className="login-button">
							<button>{t("create")}</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
