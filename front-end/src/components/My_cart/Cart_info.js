import NavBar from "../parts-page/NavBar";
import im from "../../photo/back.jpg";
import { useTranslation } from "react-i18next";
function goback() {
  window.history.go(-1);
}
export default function Cart_info() {
  const { t } = useTranslation("Cart");
  return (
    <>
      <NavBar />
      <div>
        <div className="container_for_details">
          <span className="iconBack" onClick={goback}>
            <i class="bi bi-chevron-left"></i>
          </span>
          <div className="con_left">
            <img src={im} alt="Err" />
            <div>
              <p> {t("size")} large</p>
              <p>{t("color")} black</p>
              <p>{t("type")} cotton</p>
              <p>{t("brand")} dior</p>
            </div>
          </div>
          <div className=" con_right ">
            <p> {t("Price")}3333333333333333333</p>
            <input type="number" />

            <p>{t("t_price")}4444444444444444</p>
            <button>x</button>
          </div>
        </div>
        <div className="conPtn">
          <button>{t("pay")}</button>
          <button>{t("edit")}</button>
        </div>
      </div>
      <div className="con_two_div">
        <div className="righ">
          <div className="tit"> {t("est")}</div>
          <p>{t("information")}</p>
          <div className="flex_label">
            <label>{t("em")}</label>
            <input type="email" />
          </div>
          <div className="flex_label">
            <label>{t("loc")}</label>
            <input type="text" />
          </div>
          <div className="ww">
            {t("t_price")} <span className="span1">33333333333334$</span>
          </div>
          <div className="ww">
            {t("count")} <span className="span2">333333333334$</span>
          </div>
          <div className="ptn_fix">
            <button className="Est">{t("shop")}</button>
          </div>
        </div>
        <div className="lef">
          <div className="tit">{t("dis")}</div>
          <p>{t("discode")}</p>
          <div>
            <input type="" />
            <button>{t("yes")}</button>
          </div>
        </div>
      </div>
    </>
  );
}
