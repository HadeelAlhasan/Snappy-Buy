import NavBar from "../parts-page/NavBar";
import Footer from "../parts-page/Footer";
import Product from "./Product";
import { useTranslation } from "react-i18next";
export default function Products() {
	const products = [];
	const { t, i18n } = useTranslation("group");

	const isEnglish = i18n.language === "en";
	for (let i = 0; i < 5; i++) {
		products.push(
			<div key={i} className={`${i % 2 != 0 ? "revese" : ""}`}>
				<Product />
				<div data-aos="fade-up" className="hr"></div>
			</div>
		);
	}
	const goToBack = () => {
		window.history.back(-1);
	};
	const chacked = (e) => {
		const { value } = e.target;
		console.log(value);
		sessionStorage.setItem("sort", value);
	};
	const sort = sessionStorage.getItem("sort");
	return (
		<div>
			<NavBar blod={"group"} />
			<div className="gotohome head">
				{" "}
				<div className="sort-div">
					<div className="sort">
						<div className="sort-div1">
							<input
								id="all"
								name="sort"
								onClick={(e) => {
									chacked(e);
								}}
								value={t("product.all")}
								type="radio"
							/>
							<label for="all">{t("product.all")}</label>
						</div>
						<div className="sort-div2">
							<input
								id="offers"
								name="sort"
								value={t("product.offers")}
								type="radio"
							/>
							<label for="offers">{t("product.offers")}</label>
						</div>
						<div className="sort-div3">
							<input
								id="best"
								name="sort"
								value={t("product.best")}
								type="radio"
							/>
							<label for="best">{t("product.best")}</label>
						</div>
					</div>{" "}
				</div>
				<button
					className={`${
						isEnglish ? "bi bi-chevron-right" : "bi bi-chevron-left"
					}`}
					onClick={goToBack}
				></button>
			</div>

			<div className="groups">{products}</div>
			<Footer />
		</div>
	);
}
