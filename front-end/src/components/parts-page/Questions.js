import { useTranslation } from "react-i18next";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import "./privacy.css";

export default function Privacy() {
	const { t, i18n } = useTranslation("Questions");
	const isEnglish = i18n.language === "en";
	const [visible, setVisible] = useState(false);
	const [visibleStates, setVisibleStates] = useState(Array(7).fill(false));

	useEffect(() => {
		setVisible(true);
	}, []);

	const handleToggle = (index) => {
		const newVisibleStates = [...visibleStates];
		newVisibleStates[index] = !newVisibleStates[index];
		setVisibleStates(newVisibleStates);
	};
	const goToBack = () => {
		window.history.back(-1);
	};
	const dir = `${isEnglish ? "fade-right" : "fade-left"}`;
	const div1 = [];

	for (let i = 1; i <= 7; i++) {
		div1.push(
			<div className="qa" key={i}>
				<div className="Questions">
					<p
						data-aos={dir}
						className={`privacy-title1 ${visible ? "visible" : ""}`}
					>
						{i}- {t(`q${i}`)}
					</p>
					<button
						className={`${
							visibleStates[i - 1] ? "bi bi-chevron-up" : "bi bi-chevron-down"
						}`}
						onClick={() => handleToggle(i - 1)}
					></button>
				</div>
				<div
					className={`privacy-eternal1 ${
						visibleStates[i - 1] ? "visiblea" : "hiddena"
					}`}
				>
					<p className={`${visible ? "visible" : ""}`} data-aos={dir}>
						{t(`a${i}`)}
					</p>
				</div>
			</div>
		);
	}

	return (
		<div>
			<div className="privacy">
				<div className="privacy-eternal">
					<div className="gotohome">
						<p
							className={`privacy-title ${visible ? "visible" : ""}`}
							data-aos={dir}
						>
							<span>❓</span> {t("title")}
						</p>
						<button
							className={`${
								isEnglish ? "bi bi-chevron-right" : "bi bi-chevron-left"
							}`}
							onClick={goToBack}
						></button>
					</div>
					{div1}
				</div>
			</div>
			<Footer bold="Questions" />
		</div>
	);
}
