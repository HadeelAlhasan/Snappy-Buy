import Footer from "../parts-page/Footer";
import NavBar from "../parts-page/NavBar";
import cloth from '../../photo/g-cloths.jpg';
import './group.css'
export default function Group(){
    return(
        <div className="group">

            <div className="center">
                <img src={cloth} alt="no thing"/>
                <button>show product </button>
            </div>
            <div className="width">
                <h2>clothes</h2>
                <p>جميع المقاسات و الالوان قماشات مختلفة يتناسب مع كل الاعمار و يتناسب مع احتياجاكن المقاسات و الالوان قماشات مختلفة يتناسب مع كل الاعمار و يتناسب مع احتياجاكنالمقاسات و الالوان قماشات مختلفة يتناسب مع كل الاعمار و يتناسب مع احتياجاكنالمقاساتن</p>
            </div>

        </div>
    )
}