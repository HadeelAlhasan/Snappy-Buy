import { useState } from "react";
import cloth from "../../photo/g-cloths.jpg";
import "./group.css";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
export default function Group({ showptn }) {
  const [show, setshow] = useState(false);
  const [ShowDelet, setShowDelet] = useState(false);

  const { t } = useTranslation("Group");
  const nav = useNavigate();
  const showProduct = () => {
    nav("/products");
  };
  function showEditPage() {
    nav("/EditPage");
  }
  return (
    <>
      <div className="group" data-aos="fade-up">
        {showptn && (
          <div className="poop">
            <button
              onClick={() => {
                showEditPage();
              }}
            >
              Edit
            </button>
            <button
              onClick={() => {
                setShowDelet(true);
              }}
            >
              Delete
            </button>
          </div>
        )}
        <div className="center">
          <img src={cloth} alt="no thing" />
          <button
            type="button"
            onClick={() => {
              showProduct();
            }}
          >
            {t("group.show")}{" "}
          </button>
        </div>
        <div className="width">
          <h2>clothes</h2>
          <p>
            جميع المقاسات و الالوان قماشات مختلفة يتناسب مع كل الاعمار و يتناسب
            مع احتياجاكن المقاسات و الالوان قماشات مختلفة يتناسب مع كل الاعمار و
            يتو الالوان قماشات مختلفة يتناسب مع كل الاعمار و يتناسب مع
            احتياجاكنالمقاساتن
          </p>
        </div>

        {ShowDelet && (
          <div className="containerDelete">
            <div className="childCon">
              <button
                className="exit1"
                onClick={() => {
                  setShowDelet(false);
                }}
              >
                x
              </button>
              <p className="confirmText">هل تريد حذف المنتح ؟</p>
              <button className="confirmDel">Delete</button>
            </div>
          </div>
        )}
      </div>
    </>
  );

  // import cloth from "../../photo/g-cloths.jpg";
  // import "./group.css";
  // import { useTranslation } from "react-i18next";
  // import { useNavigate } from "react-router-dom";
  // export default function Group() {
  // 	const { t } = useTranslation("Group");
  // 	const nav = useNavigate();
  // 	const showProduct = () => {
  // 		nav("/products");
  // 	};
  // 	return (
  // 		<div className="group" data-aos="fade-up">
  // 			<div className="center">
  // 				<img src={cloth} alt="no thing" />
  // 				<button
  // 					type="button"
  // 					onClick={() => {
  // 						showProduct();
  // 					}}
  // 				>
  // 					{t("group.show")}{" "}
  // 				</button>
  // 			</div>
  // 			<div className="width">
  // 				<h2>clothes</h2>
  // 				<p>
  // 					جميع المقاسات و الالوان قماشات مختلفة يتناسب مع كل الاعمار و يتناسب مع
  // 					احتياجاكن المقاسات و الالوان قماشات مختلفة يتناسب مع كل الاعمار و يتو
  // 					الالوان قماشات مختلفة يتناسب مع كل الاعمار و يتناسب مع
  // 					احتياجاكنالمقاساتن
  // 				</p>
  // 			</div>
  // 		</div>
  // 	);
}
