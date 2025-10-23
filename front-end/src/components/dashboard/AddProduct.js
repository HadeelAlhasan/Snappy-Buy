import { useTranslation } from "react-i18next";
import img from "../../photo/g-cloths.jpg";
import { useEffect } from "react";

export default function AddProduct() {
	const { t, i18n } = useTranslation("Group");
	function goback() {
		window.history.go(-1);
	}
	const isEnglish = i18n.language === "en";
	const dir = sessionStorage.getItem("lang");
	useEffect(() => {
		document.body.style.direction = dir === "en" ? "ltr" : "rtl";
	}, []);
	return (
		<div>
			<div className="header">
				<div className="grid">
					<i className={`bi bi-box`}></i>
					<h3>{t(`add.add`)}</h3>
				</div>
				<button
					className={`${
						isEnglish ? "bi bi-chevron-right" : "bi bi-chevron-left"
					}`}
					onClick={goback}
				></button>
			</div>

			<div className="group">
				<div className="heart">
					<i className="bi bi-heart-fill"></i>
				</div>
				<div className="center">
					<img src={img} alt="no thing" />
					<button type="button">{t("product.img")} </button>
				</div>
				<div className="col">
					<div className="edit-name">
						<input type="text" placeholder={t("edit.namear")} />
						<input type="text" placeholder={t("edit.nameen")} />
					</div>
					<div className="width-product">
						<p>
							{t("product.name")}{" "}
							<input type="text" placeholder={t("edit.namegar")} />
						</p>
						<p>
							{t("product.name")}{" "}
							<input type="text" placeholder={t("edit.namegen")} />
						</p>

						<p>
							{t("product.price")}
							<input type="number" className="number-input" />
						</p>

						<p className={`${dir === "en" ? "des-area-en" : "des-area"}`}>
							{t("product.des")}
							<textarea placeholder={t("edit.desar")} />
						</p>
						<p className={`${dir === "en" ? "des-area-en" : "des-area"}`}>
							{t("product.des")}
							<textarea placeholder={t("edit.desen")} />
						</p>
					</div>
					<div className="edit-div">
						<button className="edit-button">{t("add.create")}</button>
					</div>
				</div>
			</div>
		</div>
	);
}
