import { useTranslation } from "react-i18next";
import Product from "../products/Product";
import img from "../../photo/profile.jpg";
import "../Account/profile.css";
import { Link } from "react-router-dom";
import logo from "../../photo/logo.png";
import { useEffect } from "react";
export default function Profile() {
	const { t } = useTranslation("Profile");
	const products = [];
	const dir = sessionStorage.getItem("lang");
	useEffect(() => {
		document.body.style.direction = dir === "en" ? "ltr" : "rtl";
	}, []);
	for (let i = 0; i < 5; i++) {
		products.push(
			<div key={i} className={`${i % 2 != 0 ? "revese" : ""}`}>
				<Product />
				<div data-aos="fade-up" className="hr"></div>
			</div>
		);
	}
	return (
		<div>
			<div className="info">
				<Link to="/">
					<img className="logo" src={logo} alt="no thing" />
				</Link>
				<div className="data">
					<div>
						<img src={img} />
						<div className="camera">
							<button className="bi bi-camera"></button>
						</div>
					</div>

					<h2>hadeel</h2>
					<p>
						{t("email")}
						<span>hhhadellll@gmail.com</span>
					</p>
					<p>
						{t("number")}
						<span>0940110940</span>
					</p>
					<p>
						{t("country")}
						<span>حمص</span>
					</p>
				</div>
			</div>
			<div className="reset">
				<div className="cir-but">
					<div className="cir">
						<i className="bi bi-pencil"></i>
					</div>
					<button className="tex">{t("info")}</button>
				</div>
				<div className="cir-but">
					<div className="cir">
						<i className="bi bi-key"></i>
					</div>
					<button className="tex">{t("password")}</button>
				</div>
				<div className="cir-but">
					<div className="cir">
						<i className="bi bi-box-arrow-right"></i>
					</div>
					<button className="tex">{t("logout")}</button>
				</div>
			</div>
			<div className="fav">
				<h2 className="fav">{t("fav")}</h2>
				{products}
			</div>
			<div className="Payments">
				<h2 className="Payments">{t("Payments")}</h2>
				<div className="table">
					<table>
						<tr>
							<th>{t("Product")}</th>
							<th>{t("Price")}</th>
							<th>{t("Date")}</th>
						</tr>

						<tr>
							<td>ملابس</td>
							<td>100$</td>
							<td>2025/10/3</td>
						</tr>
						<tr>
							<td>ملابس</td>
							<td>100$</td>
							<td>2025/10/3</td>
						</tr>
						<tr>
							<td>ملابس</td>
							<td>100$</td>
							<td>2025/10/3</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	);
}
