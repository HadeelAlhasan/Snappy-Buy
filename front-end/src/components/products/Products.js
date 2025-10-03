import NavBar from '../parts-page/NavBar';
import Footer from '../parts-page/Footer'
import Product from './Product';
export default function Products(){
    const products =[]
        for(let i=0;i<5;i++){
            products.push(<div  key={i} className={`${i%2!=0?"revese":""}`}><Product/><div data-aos="fade-up" className="hr"></div></div>)
        }
    return(<div>
        <NavBar blod={'group'}/>
       <div  className="groups">
            {products}
        </div>
        <Footer/>
    </div>)
}