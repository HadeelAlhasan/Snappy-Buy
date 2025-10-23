import "./LogIn.css";
import { Link } from "react-router-dom";
import logo from "../../photo/logo.png";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
export default function LogIn() {
	const { t } = useTranslation("Login");
	const dir = sessionStorage.getItem("lang");
	const navigate = useNavigate();
	const goToCreate = (e) => {
		navigate("/create");
	};

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
						<div className="form">
							<div>
								<label>{t("email")}</label>
								<input type="email" />
							</div>
							<div>
								<label>{t("password")}</label>
								<input type="password" />
							</div>
						</div>
						<div className="forget">
							<button>{t("forget")}</button>
						</div>
						<div className="forget">
							{t("q")}
							<button
								type="button"
								onClick={(e) => {
									goToCreate(e);
								}}
								className={`${dir === "en" ? "createen" : "createar"}`}
							>
								{t("create")}
							</button>
						</div>
						<div className="login-button">
							<button>{t("login")}</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
