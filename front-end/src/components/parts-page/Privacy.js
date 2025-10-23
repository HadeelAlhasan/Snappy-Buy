import { useTranslation } from "react-i18next";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import "./privacy.css";

export default function Privacy() {
	const { t, i18n } = useTranslation("Privacy");
	const isEnglish = i18n.language === "en";
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		setVisible(true);
	}, []);
	const dir = `${isEnglish ? "fade-right" : "fade-left"}`;

	const goToBack = () => {
		window.history.back(-1);
	};
	return (
		<div>
			<div className="privacy">
				<div className="gotohome">
					<p
						className={`privacy-title ${visible ? "visible" : ""}`}
						data-aos={dir}
					>
						{" "}
						<span>🛡️</span> {t("title")}
					</p>
					<button
						className={`${
							isEnglish ? "bi bi-chevron-right" : "bi bi-chevron-left"
						}`}
						onClick={goToBack}
					></button>
				</div>
				<div className="privacy-eternal">
					<p className={` ${visible ? "visible" : ""}`} data-aos={dir}>
						{t("dis")}
					</p>
					<p
						data-aos={dir}
						className={`privacy-title1 ${visible ? "visible" : ""}`}
					>
						1- {t("title1")}
					</p>
					<div>
						<p className={` ${visible ? "visible" : ""}`} data-aos={dir}>
							{t("dis1")}
						</p>
						<ul>
							<li className={` ${visible ? "visible" : ""}`} data-aos={dir}>
								{t("li")}
							</li>
							<li className={` ${visible ? "visible" : ""}`} data-aos={dir}>
								{t("li1")}
							</li>
						</ul>
					</div>
					<p
						data-aos={dir}
						className={`privacy-title1 ${visible ? "visible" : ""}`}
					>
						2- {t("title2")}
					</p>
					<div>
						<p data-aos={dir} className={` ${visible ? "visible" : ""}`}>
							{t("dis2")}
						</p>
						<ul>
							<li data-aos={dir} className={` ${visible ? "visible" : ""}`}>
								{t("li2")}
							</li>
							<li data-aos={dir} className={` ${visible ? "visible" : ""}`}>
								{t("li21")}
							</li>
							<li data-aos={dir} className={` ${visible ? "visible" : ""}`}>
								{t("li22")}
							</li>
							<li data-aos={dir} className={` ${visible ? "visible" : ""}`}>
								{t("li23")}
							</li>
						</ul>
					</div>
					<p
						data-aos={dir}
						className={`privacy-title1 ${visible ? "visible" : ""}`}
					>
						3- {t("title3")}
					</p>
					<div>
						<p data-aos={dir} className={` ${visible ? "visible" : ""}`}>
							{t("dis3")}
						</p>
						<ul>
							<li data-aos={dir} className={` ${visible ? "visible" : ""}`}>
								{t("li3")}
							</li>
							<li data-aos={dir} className={` ${visible ? "visible" : ""}`}>
								{t("li31")}
							</li>
						</ul>
					</div>
					<p
						data-aos={dir}
						className={`privacy-title1 ${visible ? "visible" : ""}`}
					>
						4- {t("title4")}
					</p>
					<div>
						<p data-aos={dir} className={` ${visible ? "visible" : ""}`}>
							{t("dis4")}
						</p>
					</div>
					<p
						data-aos={dir}
						className={`privacy-title1 ${visible ? "visible" : ""}`}
					>
						5- {t("title5")}
					</p>
					<div>
						<p data-aos={dir} className={` ${visible ? "visible" : ""}`}>
							{t("dis5")}
						</p>
					</div>

					<p
						data-aos={dir}
						className={`privacy-title1 ${visible ? "visible" : ""}`}
					>
						6- {t("title6")}
					</p>
					<div>
						<p data-aos={dir} className={` ${visible ? "visible" : ""}`}>
							{t("dis6")}
						</p>
						<ul>
							<li data-aos={dir} className={` ${visible ? "visible" : ""}`}>
								{t("li6")}
							</li>
							<li data-aos={dir} className={` ${visible ? "visible" : ""}`}>
								{t("li61")}
							</li>
							<li data-aos={dir} className={` ${visible ? "visible" : ""}`}>
								{t("li62")}
							</li>
						</ul>
					</div>
					<p
						data-aos={dir}
						className={`privacy-title1 ${visible ? "visible" : ""}`}
					>
						7- {t("title7")}
					</p>
					<div>
						<p data-aos={dir} className={` ${visible ? "visible" : ""}`}>
							{t("dis7")}
						</p>
					</div>
					<p
						data-aos={dir}
						className={`privacy-title1 ${visible ? "visible" : ""}`}
					>
						8- {t("title8")}
					</p>
					<div>
						<p data-aos={dir} className={` ${visible ? "visible" : ""}`}>
							{t("dis8")}
						</p>
					</div>
				</div>
			</div>
			<Footer bold="Privacy" />
		</div>
	);
}
