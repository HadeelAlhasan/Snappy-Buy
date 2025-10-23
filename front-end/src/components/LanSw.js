import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./parts-page/NavBar.css";
const LanguageSwitcher = () => {
	const { i18n } = useTranslation();
	const [isArabic, setIsArabic] = useState(i18n.language === "ar");

	const toggleLanguage = () => {
		const newLang = isArabic ? "en" : "ar";
		i18n.changeLanguage(newLang);
		sessionStorage.setItem("lang", newLang);
		setIsArabic(!isArabic);
	};

	useEffect(() => {
		document.body.style.direction = isArabic ? "rtl" : "ltr";
		document.body.style.textAlign = isArabic ? "right" : "left";
	}, [isArabic]);

	return (
		<button onClick={toggleLanguage} className="translation">
			<i className="bi bi-globe"></i>

			<p> {isArabic ? "English" : "عربي"}</p>
		</button>
	);
};

export default LanguageSwitcher;
