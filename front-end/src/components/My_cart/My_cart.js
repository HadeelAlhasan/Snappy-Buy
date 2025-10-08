import { useTranslation } from "react-i18next";
import NavBar from "../parts-page/NavBar";
import "./My_cart.css";
import { Link } from "react-router-dom";
export default function My_cart() {
  const { t } = useTranslation("Cart");
  return (
    <div className="scroll">
      <NavBar blod={"cart"} />
      <p className="cartTitle">
        <i className="bi bi-cart"></i>
        {t("Shopping")}
      </p>
      <p className="title2">{t("Title")}</p>
      <div className="con_cart">
        <div className="con2">
          <div className="con_empty">
            <p className="empty">{t("Empty")}</p>
          </div>
          <div className="con_details">
            <div className="flex1`_details">
              <div className="flex_details2">
                <button>x</button>
                <div className="div0">{t("name")}</div>
              </div>
              <div className="div1">30$</div>
            </div>
            <Link to="/det" className="detdet">
              {t("details")}
            </Link>
          </div>
          <div className="fixtoggle">
            <p className="total">{t("Total")} 50$ </p>
          </div>
        </div>
      </div>
    </div>
  );
}
