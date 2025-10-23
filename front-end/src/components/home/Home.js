import Footer from "../parts-page/Footer";
import NavBar from "../parts-page/NavBar";
import Test from "../../photo/Test.jpg";
import home1 from "../../photo/home1.jpg";
import home2 from "../../photo/home2.jpg";
import gcloths from "../../photo/g-cloths.jpg";
import gelctron from "../../photo/g-elctron.jpg";
import gmakup from "../../photo/g-mekup.jpg";
import gphath from "../../photo/g-phath.jpg";
import gteble from "../../photo/g-teble.jpg";
import gteble1 from "../../photo/g-teble1.jpg";
import "./home.css";
import "./responsive.css";
import { useTranslation } from "react-i18next";
export default function Home() {
	const { t, i18n } = useTranslation("home");
	const isEnglish = i18n.language === "en";
	const dir = `${isEnglish ? "fade-right" : "fade-left"}`;
	const dir1 = `${isEnglish ? "fade-left" : "fade-right"}`;
	return (
		<div>
			<NavBar blod="home" />

			<img className="imghome" src={Test} alt="no thing" />
			<div
				className={`text-photo ${
					isEnglish ? "text-photo-en" : "text-photo-ar"
				}`}
			>
				<p className="title">{t("home.title")}</p>
				<p className="dis">
					{t("home.dis1")} <span>SnappyBuy</span> {t("home.dis2")}
				</p>
			</div>
			<div className="how-work">
				<div className="how-work-div">
					<p data-aos={dir} className="how-work-p">
						{t("how-work.title")}
					</p>
					<p data-aos={dir} data-aos-duration="1510">
						1- {t("how-work.dis1")}
					</p>
					<p data-aos={dir} data-aos-duration="1520">
						2- {t("how-work.dis2")}
					</p>
					<p data-aos={dir} data-aos-duration="1530">
						3- {t("how-work.dis3")}
					</p>
					<p data-aos={dir} data-aos-duration="1540">
						4- {t("how-work.dis4")}
					</p>
					<p data-aos={dir} data-aos-duration="1550">
						5- {t("how-work.dis5")}
					</p>
				</div>
				<div>
					<img
						data-aos={dir1}
						className="how-work-img"
						src={home1}
						alt="no thing"
					/>
				</div>
			</div>
			<div className="Advantages">
				<div>
					<img
						data-aos={dir}
						className="Advantages-img"
						src={home2}
						alt="no thing"
					/>
				</div>
				<div className="Advantages-div">
					<p data-aos={dir1} className="Advantages-p">
						{t("Advantages.title")}
					</p>
					<p data-aos={dir1} data-aos-duration="1510">
						1- {t("Advantages.dis1")}
					</p>
					<p data-aos={dir1} data-aos-duration="1520">
						2- {t("Advantages.dis2")}
					</p>
					<p data-aos={dir1} data-aos-duration="1530">
						3- {t("Advantages.dis3")}
					</p>
					<p data-aos={dir1} data-aos-duration="1540">
						4- {t("Advantages.dis4")}
					</p>
				</div>
			</div>
			<div className="group-photo-div2">
				<div className="group-photo" data-aos="fade-up">
					<img className="group-photo1" src={gcloths} alt="no thingh" />
					<div className="group-photo-div">
						<img className="group-photo2" src={gelctron} alt="no thingh" />
						<img className="group-photo3" src={gmakup} alt="no thingh" />
					</div>
					<img className="group-photo6" src={gteble1} alt="no thingh" />
					<img className="group-photo4" src={gphath} alt="no thingh" />
					<img className="group-photo5" src={gteble} alt="no thingh" />
				</div>
				<p
					className="group-photo-p"
					data-aos="fade-up"
					data-aos-duration="1550"
				>
					{t("end")}
				</p>
			</div>
			<Footer />
		</div>
	);
}
